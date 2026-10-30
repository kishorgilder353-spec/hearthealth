// 计分引擎：纯函数，不碰页面。支持总分、分量表(subscales)、反向计分(rev)、安全题(safety)、
// 每题独立选项(item.options)、提醒等级(level.alert)
(function (root) {
  function rng(o) { var vs = o.map(function (x) { return x.v; }); return { min: Math.min.apply(null, vs), max: Math.max.apply(null, vs) }; }
  function opts(test, i) { return test.items[i].options || test.options; }
  function sumOf(test, a, idxs) {
    var t = 0, mx = 0;
    idxs.forEach(function (i) { var r = rng(opts(test, i)); t += test.items[i].rev ? (r.max + r.min - a[i]) : a[i]; mx += r.max; });
    return { t: t, max: mx };
  }
  function pickLevel(levels, total) {
    for (var k = 0; k < levels.length; k++) if (total <= levels[k].max) return k;
    return levels.length - 1;
  }
  function score(test, answers) {
    var n = test.items.length, all = [], i;
    if (!Array.isArray(answers) || answers.length !== n) return null;
    for (i = 0; i < n; i++) {
      var v = answers[i];
      if (!opts(test, i).some(function (o) { return o.v === v; })) return null;
      all.push(i);
    }
    var tt = sumOf(test, answers, all), s = test.safety;
    var res = { total: tt.t, max: tt.max, worst: 0, alert: false, flagged: !!(s && answers[s.item] >= s.min) };
    if (test.levels) {
      res.levelIndex = pickLevel(test.levels, res.total);
      res.level = test.levels[res.levelIndex];
      res.worst = res.levelIndex;
      res.alert = !!res.level.alert; res.alert = !!res.level.alert;
    }
    if (test.subscales) {
      res.subs = test.subscales.map(function (sb) {
        var q = sumOf(test, answers, sb.items), li = pickLevel(sb.levels, q.t);
        res.worst = Math.max(res.worst, li);
        if (sb.levels[li].alert) res.alert = true;
        if (sb.levels[li].alert) res.alert = true;
        return { id: sb.id, title: sb.title, total: q.t, max: q.max, levels: sb.levels, levelIndex: li, level: sb.levels[li] };
      });
    }
    return res;
  }
  var E = { score: score };
  root.Engine = E;
  if (typeof module !== 'undefined' && module.exports) module.exports = E;
})(typeof window !== 'undefined' ? window : globalThis);
