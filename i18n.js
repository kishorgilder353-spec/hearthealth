(function (root) {
  var S = {
    title:{zh:'心理测试',en:'Psych Tests'},
    tagline:{zh:'基于科学量表的心理测试。你的答案只留在自己的浏览器里，不会上传。',en:'Tests built on validated scales. Your answers stay in your browser and are never uploaded.'},
    cat_mood:{zh:'情绪与心理健康筛查',en:'Mood & mental health screening'},
    cat_personality:{zh:'人格',en:'Personality'},
    items:{zh:'{n} 题',en:'{n} questions'},
    mins:{zh:'约 {n} 分钟',en:'about {n} min'},
    start:{zh:'开始',en:'Start'},
    back:{zh:'上一题',en:'Previous'},
    progress:{zh:'第 {n} / {m} 题',en:'Question {n} of {m}'},
    retake:{zh:'重新测一次',en:'Retake'},
    home:{zh:'回到首页',en:'Back to home'},
    yourScore:{zh:'你的得分',en:'Your score'},
    notDx:{zh:'这是自我筛查，不是诊断。结果只能作为参考，不能替代医生或心理专业人员的评估。',en:'This is a self-screening, not a diagnosis. It cannot replace an assessment by a doctor or mental health professional.'},
    safeTitle:{zh:'请先看这里',en:'Please read this first'},
    safeBody:{zh:'你在第 9 题选择了有这类想法。谢谢你如实回答。这些念头值得被认真对待：请今天就联系一个你信任的人，或拨打下面的求助热线。如果你现在有立即的危险，请拨打当地紧急电话。',en:'You indicated thoughts of this kind on question 9. Thank you for answering honestly. These thoughts deserve to be taken seriously: please reach out today to someone you trust, or call one of the helplines below. If you are in immediate danger, call your local emergency number.'},
    hotTitle:{zh:'求助热线',en:'Helplines'},
    hotMore:{zh:'其他国家和地区：findahelpline.com。号码可能变动，请以当地官方信息为准。',en:'Other countries and regions: findahelpline.com. Numbers can change; check local official sources.'},
    source:{zh:'来源',en:'Source'},
    noAns:{zh:'没有找到答题记录。请先完成测试。',en:'No answers found. Please take the test first.'},
    notFound:{zh:'找不到这个测试。',en:'Test not found.'},
    footer:{zh:'本站仅供自我了解与筛查参考，不能替代专业诊断。',en:'For self-understanding and screening only. Not a substitute for professional diagnosis.'}
  };
  var lang = null;
  try { lang = root.localStorage && root.localStorage.getItem('lang'); } catch (e) {}
  if (lang !== 'zh' && lang !== 'en') {
    lang = (typeof navigator !== 'undefined' && /^zh/i.test(navigator.language || '')) ? 'zh' : 'en';
  }
  var I = {
    get lang() { return lang; },
    set: function (l) { lang = l; try { root.localStorage.setItem('lang', l); } catch (e) {} },
    t: function (k, v) {
      var s = (S[k] && S[k][lang]) || k;
      for (var x in (v || {})) s = s.replace('{' + x + '}', v[x]);
      return s;
    },
    pick: function (o) { return o == null ? '' : (typeof o === 'string' ? o : (o[lang] || o.en || o.zh || '')); }
  };
  root.I18N = I;
})(typeof window !== 'undefined' ? window : globalThis);
