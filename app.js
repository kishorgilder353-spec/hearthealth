(function () {
  var I = I18N, E = Engine, app = document.getElementById('app');
  var page = document.body.dataset.page;
  var qid = new URLSearchParams(location.search).get('t');
  var st = { idx: -1, ans: [] };

  function h(tag, a) {
    var e = document.createElement(tag), k, kids = Array.prototype.slice.call(arguments, 2);
    for (k in (a || {})) {
      if (k === 'class') e.className = a[k];
      else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2), a[k]);
      else e.setAttribute(k, a[k]);
    }
    (function add(list) {
      list.forEach(function (c) {
        if (Array.isArray(c)) return add(c);
        if (c === null || c === undefined || c === false) return;
        e.append(c.nodeType ? c : document.createTextNode(String(c)));
      });
    })(kids);
    return e;
  }
  function load(ids) {
    return Promise.all(ids.map(function (id) {
      return new Promise(function (ok, no) {
        var s = document.createElement('script');
        s.src = 'data/' + id + '.js'; s.onload = ok;
        s.onerror = function () { no(id); };
        document.head.appendChild(s);
      });
    }));
  }
  function shell(content, title) {
    var other = I.lang === 'zh' ? 'EN' : '中文';
    document.documentElement.lang = I.lang === 'zh' ? 'zh-CN' : 'en';
    document.title = title || I.t('title');
    app.replaceChildren(
      h('header', {class: 'top'},
        h('a', {class: 'brand', href: 'index.html'}, I.t('title')),
        h('button', {class: 'lang', 'aria-label': 'Language', onclick: function () { I.set(I.lang === 'zh' ? 'en' : 'zh'); render(); }}, other)),
      h('main', {}, content),
      h('footer', {}, h('p', {class: 'mute'}, I.t('footer'))));
  }
  function missing(key) { shell([h('p', {}, I.t(key)), h('a', {class: 'btn', href: 'index.html'}, I.t('home'))]); }

  function home() {
    var groups = {}, order = ['mood', 'personality'];
    window.TEST_IDS.forEach(function (id) { var T = TESTS[id]; (groups[T.category] = groups[T.category] || []).push(T); });
    var out = [h('h1', {}, I.t('title')), h('p', {class: 'mute'}, I.t('tagline'))];
    order.forEach(function (c) {
      if (!groups[c]) return;
      out.push(h('h2', {style: 'margin-top:1.4em'}, I.t('cat_' + c)));
      groups[c].forEach(function (T) {
        out.push(h('a', {class: 'card', href: 'test.html?t=' + T.id},
          h('h3', {}, I.pick(T.title)), h('p', {}, I.pick(T.desc)),
          h('p', {class: 'mute'}, I.t('items', {n: T.items.length}) + ' · ' + I.t('mins', {n: T.minutes}))));
      });
    });
    shell(out);
  }

  function quiz() {
    var T = TESTS[qid]; if (!T) return missing('notFound');
    var n = T.items.length, i = st.idx, title = I.pick(T.title);
    if (i < 0) {
      return shell([h('h1', {}, title), h('p', {}, I.pick(T.intro)), h('p', {class: 'mute'}, I.t('notDx')),
        h('button', {class: 'btn', onclick: function () { st.idx = 0; render(); }}, I.t('start'))], title);
    }
    var opts = T.options.map(function (o) {
      return h('button', {class: 'opt' + (st.ans[i] === o.v ? ' on' : ''), onclick: function () {
        st.ans[i] = o.v;
        if (i + 1 < n) { st.idx = i + 1; render(); }
        else {
          try { sessionStorage.setItem('ans_' + T.id, JSON.stringify(st.ans)); } catch (e) {}
          location.href = 'result.html?t=' + T.id;
        }
      }}, I.pick(o));
    });
    shell([
      h('p', {class: 'mute'}, I.t('progress', {n: i + 1, m: n})),
      h('div', {class: 'prog'}, h('i', {style: 'width:' + Math.round(i / n * 100) + '%'})),
      i === 0 ? h('p', {class: 'mute'}, I.pick(T.instruction)) : null,
      h('p', {class: 'q'}, I.pick(T.items[i])),
      opts,
      i > 0 ? h('button', {class: 'btn ghost', onclick: function () { st.idx = i - 1; render(); }}, I.t('back')) : null
    ], title);
  }

  function hotlines(open) {
    return h('details', open ? {open: ''} : {},
      h('summary', {}, I.t('hotTitle')),
      h('ul', {class: 'hl'}, window.HOTLINES.map(function (x) {
        return h('li', {}, h('strong', {}, I.pick(x.region) + '：'),
          h('a', {href: 'tel:' + x.tel}, x.num), ' ', I.pick(x.note));
      })),
      h('p', {class: 'mute'}, I.t('hotMore')));
  }

  function result() {
    var T = TESTS[qid]; if (!T) return missing('notFound');
    var ans = null; try { ans = JSON.parse(sessionStorage.getItem('ans_' + T.id)); } catch (e) {}
    var r = ans && E.score(T, ans); if (!r) return missing('noAns');
    var prev = -1, segs = T.levels.map(function (L, k) {
      var w = (L.max - prev) / (r.max + 1) * 100; prev = L.max;
      return h('span', {class: 'seg s' + k, style: 'width:' + w + '%'});
    });
    var title = I.pick(T.title);
    shell([
      r.flagged ? h('div', {class: 'warn', role: 'region'}, h('h3', {}, I.t('safeTitle')), h('p', {}, I.t('safeBody'))) : null,
      h('p', {class: 'mute'}, title),
      h('h1', {}, I.pick(r.level.title)),
      h('p', {class: 'score'}, r.total + ' ', h('small', {}, '/ ' + r.max)),
      h('div', {class: 'bar'}, segs, h('i', {class: 'mk', style: 'left:' + ((r.total + 0.5) / (r.max + 1) * 100) + '%'})),
      h('p', {}, I.pick(r.level.desc)),
      h('p', {}, I.pick(r.level.advice)),
      h('p', {class: 'mute'}, I.t('notDx')),
      hotlines(r.flagged || r.levelIndex >= 3),
      h('p', {class: 'mute'}, I.t('source') + ': ' + T.source),
      h('a', {class: 'btn', href: 'test.html?t=' + T.id}, I.t('retake')),
      h('a', {class: 'btn ghost', href: 'index.html'}, I.t('home'))
    ], title);
  }

  function render() { ({index: home, test: quiz, result: result})[page](); }

  var ids = page === 'index' ? window.TEST_IDS : (qid && window.TEST_IDS.indexOf(qid) > -1 ? [qid] : []);
  load(ids).then(render, render);
})();
