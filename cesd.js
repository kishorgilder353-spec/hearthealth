TESTS.cesd = {
  id: 'cesd', category: 'mood', minutes: 4,
  title: {zh:'CES-D 抑郁自评量表（20 题）', en:'CES-D Depression Scale (20 items)'},
  desc: {zh:'流行病学研究常用的 20 题抑郁量表，评估最近一周，可以和 PHQ-9 互相对照。', en:'A 20-item depression scale widely used in epidemiology, covering the past week. A good cross-check for the PHQ-9.'},
  intro: {zh:'共 20 题，约 4 分钟。请凭最近一周的真实感受作答。', en:'20 questions, about 4 minutes. Answer based on how you really felt over the past week.'},
  instruction: {zh:'以下是你可能有过的感受或行为。请选择过去一周内你有这种感觉的频率。', en:'Below is a list of ways you might have felt or behaved. Please say how often you felt this way during the past week.'},
  options: [
    {v:0, zh:'很少或没有（不到 1 天）', en:'Rarely or none of the time (less than 1 day)'},
    {v:1, zh:'有一些（1–2 天）', en:'Some or a little of the time (1–2 days)'},
    {v:2, zh:'有时或相当多（3–4 天）', en:'Occasionally or a moderate amount of time (3–4 days)'},
    {v:3, zh:'大部分或全部时间（5–7 天）', en:'Most or all of the time (5–7 days)'}
  ],
  items: [
    {zh:'一些平常不会困扰我的事情现在困扰我了', en:'I was bothered by things that usually don\'t bother me'},
    {zh:'我不想吃东西，胃口不好', en:'I did not feel like eating; my appetite was poor'},
    {zh:'即使有家人或朋友的帮助，我也无法摆脱心中的苦闷', en:'I felt that I could not shake off the blues even with help from my family or friends'},
    {zh:'我觉得自己和别人一样好', en:'I felt that I was just as good as other people', rev:true},
    {zh:'我做事时难以集中注意力', en:'I had trouble keeping my mind on what I was doing'},
    {zh:'我感到情绪低落', en:'I felt depressed'},
    {zh:'我觉得做什么事都很费力', en:'I felt that everything I did was an effort'},
    {zh:'我对未来充满希望', en:'I felt hopeful about the future', rev:true},
    {zh:'我觉得我的人生是失败的', en:'I thought my life had been a failure'},
    {zh:'我感到害怕', en:'I felt fearful'},
    {zh:'我睡得不安稳', en:'My sleep was restless'},
    {zh:'我感到快乐', en:'I was happy', rev:true},
    {zh:'我比平时说话少', en:'I talked less than usual'},
    {zh:'我感到孤独', en:'I felt lonely'},
    {zh:'我觉得别人对我不友好', en:'People were unfriendly'},
    {zh:'我觉得生活很有乐趣', en:'I enjoyed life', rev:true},
    {zh:'我曾经哭泣过', en:'I had crying spells'},
    {zh:'我感到悲伤', en:'I felt sad'},
    {zh:'我觉得别人不喜欢我', en:'I felt that people disliked me'},
    {zh:'我提不起劲，“动不起来”', en:'I could not get "going"'}
  ],
  levels: [
    {max:15, title:{zh:'低于临界值', en:'Below the cutoff'}, desc:{zh:'抑郁症状不多，低于常用的 16 分临界值。', en:'Few depressive symptoms, below the commonly used cutoff of 16.'}, advice:{zh:'保持规律的作息和社交。如果情绪持续低落，可以再测一次。', en:'Keep up regular routines and social contact. If your mood stays low, take the test again.'}},
    {max:26, title:{zh:'达到临界值', en:'At or above the cutoff'}, desc:{zh:'达到或超过 16 分的临界值，提示有值得关注的抑郁症状。', en:'At or above the cutoff of 16, which suggests depressive symptoms worth attention.'}, advice:{zh:'建议和医生或心理咨询师聊聊，也可以做一下 PHQ-9 对照。', en:'Consider talking to a doctor or counselor, and compare with the PHQ-9.'}},
    {max:60, alert:true, title:{zh:'明显偏高', en:'Clearly elevated'}, desc:{zh:'分数明显偏高，症状较多。', en:'A clearly elevated score with many symptoms.'}, advice:{zh:'建议尽快预约专业人员评估，不必一个人硬撑。如果你觉得撑不住了，请联系身边的人或求助热线。', en:'Please arrange an assessment with a professional soon. If it feels like too much, reach out to someone near you or a helpline.'}}
  ],
  source: 'Radloff LS. The CES-D Scale: a self-report depression scale for research in the general population. Applied Psychological Measurement. 1977;1(3):385-401. The CES-D is in the public domain. Chinese text is an unofficial translation.'
};
