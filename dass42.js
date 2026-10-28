(function () {
  var P = [
    ['因为一些琐碎的小事而心烦意乱','I found myself getting upset by quite trivial things'],
    ['感觉嘴巴发干','I was aware of dryness of my mouth'],
    ['好像完全体会不到任何积极的感受','I couldn\'t seem to experience any positive feeling at all'],
    ['出现呼吸困难（例如在没有体力活动时呼吸急促、喘不过气）','I experienced breathing difficulty (e.g., excessively rapid breathing, breathlessness in the absence of physical exertion)'],
    ['觉得自己就是打不起精神去做事','I just couldn\'t seem to get going'],
    ['对各种情况反应过度','I tended to over-react to situations'],
    ['感觉发抖（例如腿发软）','I had a feeling of shakiness (e.g., legs going to give way)'],
    ['觉得很难放松下来','I found it difficult to relax'],
    ['陷入让自己极度焦虑的情境，直到事情结束才松了一口气','I found myself in situations that made me so anxious I was most relieved when they ended'],
    ['觉得没有什么值得期待的','I felt that I had nothing to look forward to'],
    ['很容易心烦','I found myself getting upset rather easily'],
    ['觉得自己消耗了大量的紧张精力','I felt that I was using a lot of nervous energy'],
    ['觉得悲伤、沮丧','I felt sad and depressed'],
    ['被耽搁时变得不耐烦（例如等电梯、等红灯、被迫等待）','I found myself getting impatient when I was delayed in any way (e.g., lifts, traffic lights, being kept waiting)'],
    ['感觉快要晕倒','I had a feeling of faintness'],
    ['觉得自己对几乎所有事情都失去了兴趣','I felt that I had lost interest in just about everything'],
    ['觉得自己作为一个人没有多少价值','I felt I wasn\'t worth much as a person'],
    ['觉得自己相当敏感、易被触怒','I felt that I was rather touchy'],
    ['在天气不热、也没有体力活动时明显出汗（例如手心出汗）','I perspired noticeably (e.g., hands sweaty) in the absence of high temperatures or physical exertion'],
    ['毫无理由地感到害怕','I felt scared without any good reason'],
    ['觉得生活没有价值','I felt that life wasn\'t worthwhile'],
    ['觉得很难平静下来','I found it hard to wind down'],
    ['吞咽困难','I had difficulty in swallowing'],
    ['做什么事情都感受不到乐趣','I couldn\'t seem to get any enjoyment out of the things I did'],
    ['在没有体力活动时也能感觉到自己的心跳（例如心跳加快或漏跳一拍）','I was aware of the action of my heart in the absence of physical exertion (e.g., sense of heart rate increase, heart missing a beat)'],
    ['觉得情绪低落、郁闷','I felt down-hearted and blue'],
    ['觉得自己非常易怒','I found that I was very irritable'],
    ['觉得自己快要惊慌失措了','I felt I was close to panic'],
    ['被什么事情弄得心烦之后，很难平复下来','I found it hard to calm down after something upset me'],
    ['担心自己会被某个琐碎但不熟悉的任务“难住”','I feared that I would be "thrown" by some trivial but unfamiliar task'],
    ['对任何事情都无法产生热情','I was unable to become enthusiastic about anything'],
    ['很难容忍别人打断自己正在做的事','I found it difficult to tolerate interruptions to what I was doing'],
    ['处于神经紧绷的状态','I was in a state of nervous tension'],
    ['觉得自己一文不值','I felt I was pretty worthless'],
    ['无法容忍任何妨碍自己继续手头事情的东西','I was intolerant of anything that kept me from getting on with what I was doing'],
    ['感到惊恐万分','I felt terrified'],
    ['看不到未来有任何值得期待的事','I could see nothing in the future to be hopeful about'],
    ['觉得生活毫无意义','I felt that life was meaningless'],
    ['觉得自己心神不宁、烦躁','I found myself getting agitated'],
    ['担心自己可能会惊慌失措、在别人面前出丑的情况','I was worried about situations in which I might panic and make a fool of myself'],
    ['出现颤抖（例如手发抖）','I experienced trembling (e.g., in the hands)'],
    ['觉得很难主动去做事情','I found it difficult to work up the initiative to do things']
  ];
  var LV = [
    {t:['正常','Normal'], d:['在正常范围内。','Within the normal range.']},
    {t:['轻度','Mild'], d:['略高于正常范围，留意一下自己的状态。','Slightly above the normal range. Keep an eye on how you are doing.']},
    {t:['中度','Moderate'], d:['明显偏高，建议留意并考虑和专业人员聊聊。','Clearly elevated. Pay attention and consider talking to a professional.']},
    {t:['重度','Severe'], d:['偏高很多，建议尽快联系专业人员评估。','Well above normal. Please arrange an assessment with a professional soon.']},
    {t:['极重度','Extremely severe'], d:['非常高，建议尽快联系医生或心理健康专业人员。如果你觉得撑不住了，请联系身边的人或求助热线。','Very high. Please contact a doctor or mental health professional as soon as possible. If it feels like too much, reach out to someone near you or a helpline.']}
  ];
  function sub(id, zh, en, nums, cuts) {
    return { id: id, title: {zh: zh, en: en}, items: nums.map(function (n) { return n - 1; }),
      levels: cuts.map(function (c, k) { return { max: c, title: {zh: LV[k].t[0], en: LV[k].t[1]}, desc: {zh: LV[k].d[0], en: LV[k].d[1]} }; }) };
  }
  TESTS.dass42 = {
    id: 'dass42', category: 'mood', minutes: 8,
    title: {zh:'DASS-42 抑郁・焦虑・压力量表', en:'DASS-42 Depression, Anxiety & Stress Scales'},
    desc: {zh:'42 题完整版，分别评估抑郁、焦虑、压力三个维度，比简版更稳定。', en:'Full 42-item version scoring depression, anxiety and stress separately. More stable than the short form.'},
    intro: {zh:'共 42 题，约 8 分钟。请凭最近一周的真实感受作答，没有对错。结果分为抑郁、焦虑、压力三个独立分数。', en:'42 questions, about 8 minutes. Answer based on how you really felt over the past week. You will get three separate scores: depression, anxiety and stress.'},
    instruction: {zh:'请根据过去一周的情况，选择最符合你的一项。', en:'Please choose the option that best describes how much each statement applied to you over the past week.'},
    options: [
      {v:0, zh:'完全不符合', en:'Did not apply to me at all'},
      {v:1, zh:'有些符合，或有时符合', en:'Applied to me to some degree, or some of the time'},
      {v:2, zh:'相当符合，或大部分时间符合', en:'Applied to me to a considerable degree or a good part of the time'},
      {v:3, zh:'非常符合，或几乎总是符合', en:'Applied to me very much or most of the time'}
    ],
    items: P.map(function (p) { return {zh: p[0], en: p[1]}; }),
    subscales: [
      sub('D', '抑郁', 'Depression', [3,5,10,13,16,17,21,24,26,31,34,37,38,42], [9,13,20,27,Infinity]),
      sub('A', '焦虑', 'Anxiety', [2,4,7,9,15,19,20,23,25,28,30,36,40,41], [7,9,14,19,Infinity]),
      sub('S', '压力', 'Stress', [1,6,8,11,12,14,18,22,27,29,32,33,35,39], [14,18,25,33,Infinity])
    ],
    source: 'Lovibond SH, Lovibond PF. Manual for the Depression Anxiety Stress Scales. 2nd ed. Sydney: Psychology Foundation; 1995. The DASS is in the public domain. Chinese text is an unofficial translation.'
  };
})();
