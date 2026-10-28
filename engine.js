// 计分引擎：纯函数，不碰页面，方便测试。支持总分、分量表(subscales)、反向计分(rev)、安全题(safety)
(function (root) {
  function range(test) {
    var vs = test.options.map(function (o) { return o.v; });
    return { min: Math.min.apply(null, vs), max: Math.max.apply(null, vs) };
  }
  function sumOf(test, answers, idxs, r) {
    var t = 0;
    idxs.forEach(function (i) { t += test.items[i].rev ? (r.max + r.min - answers[i]) : answers[i]; });
    return t;
  }
  function pickLevel(levels, total) {
    for (var k = 0; k < levels.length; k++) if (total <= levels[k].max) return k;
    return levels.length - 1;
  }
  function score(test, answers) {
    var r = range(test), n = test.items.length, i, v, all = [];
    if (!Array.isArray(answers) || answers.length !== n) return null;
    for (i = 0; i < n; i++) {
      v = answers[i];
      if (typeof v !== 'number' || v < r.min || v > r.max) return null;
      all.push(i);
    }
    var s = test.safety;
    var res = { total: sumOf(test, answers, all, r), max: n * r.max, worst: 0,
      flagged: !!(s && answers[s.item] >= s.min) };
    if (test.levels) {
      res.levelIndex = pickLevel(test.levels, res.total);
      res.level = test.levels[res.levelIndex];
      res.worst = res.levelIndex;
    }
    if (test.subscales) {
      res.subs = test.subscales.map(function (sb) {
        var t = sumOf(test, answers, sb.items, r), li = pickLevel(sb.levels, t);
        res.worst = Math.max(res.worst, li);
        return { id: sb.id, title: sb.title, total: t, max: sb.items.length * r.max,
          levels: sb.levels, levelIndex: li, level: sb.levels[li] };
      });
    }
    return res;
  }
  var E = { score: score };
  root.Engine = E;
  if (typeof module !== 'undefined' && module.exports) module.exports = E;
})(typeof window !== 'undefined' ? window : globalThis);
