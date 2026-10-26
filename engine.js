// 计分引擎：纯函数，不碰页面，方便测试
(function (root) {
  function range(test) {
    var vs = test.options.map(function (o) { return o.v; });
    return { min: Math.min.apply(null, vs), max: Math.max.apply(null, vs) };
  }
  function score(test, answers) {
    var r = range(test), n = test.items.length;
    if (!Array.isArray(answers) || answers.length !== n) return null;
    var total = 0, i, v;
    for (i = 0; i < n; i++) {
      v = answers[i];
      if (typeof v !== 'number' || v < r.min || v > r.max) return null;
      total += test.items[i].rev ? (r.max + r.min - v) : v;
    }
    var max = n * r.max, li = test.levels.length - 1, k;
    for (k = 0; k < test.levels.length; k++) { if (total <= test.levels[k].max) { li = k; break; } }
    var s = test.safety;
    return { total: total, max: max, levelIndex: li, level: test.levels[li],
      flagged: !!(s && answers[s.item] >= s.min) };
  }
  var E = { score: score };
  root.Engine = E;
  if (typeof module !== 'undefined' && module.exports) module.exports = E;
})(typeof window !== 'undefined' ? window : globalThis);
