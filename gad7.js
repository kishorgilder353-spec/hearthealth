TESTS.gad7 = {
  id: 'gad7', category: 'mood', minutes: 1,
  title: {zh:'GAD-7 焦虑症状自评', en:'GAD-7 Anxiety Screening'},
  desc: {zh:'筛查最近两周的广泛性焦虑症状，全球最常用的焦虑自评量表之一。', en:'Screens for generalized anxiety symptoms over the past two weeks. One of the most widely used anxiety questionnaires.'},
  intro: {zh:'共 7 题，约 1 分钟。请凭最近两周的真实感受作答。', en:'7 questions, about 1 minute. Answer based on how you really felt over the last two weeks.'},
  instruction: {zh:'过去两周，以下问题困扰了你多久？', en:'Over the last 2 weeks, how often have you been bothered by the following problems?'},
  options: [
    {v:0, zh:'完全没有', en:'Not at all'}, {v:1, zh:'好几天', en:'Several days'},
    {v:2, zh:'一半以上的天数', en:'More than half the days'}, {v:3, zh:'几乎每天', en:'Nearly every day'}
  ],
  items: [
    {zh:'感到紧张、焦虑或烦躁', en:'Feeling nervous, anxious, or on edge'},
    {zh:'不能停止或控制担忧', en:'Not being able to stop or control worrying'},
    {zh:'对各种各样的事情担忧过多', en:'Worrying too much about different things'},
    {zh:'很难放松下来', en:'Trouble relaxing'},
    {zh:'由于不安而难以静坐', en:'Being so restless that it is hard to sit still'},
    {zh:'变得容易烦恼或急躁', en:'Becoming easily annoyed or irritable'},
    {zh:'感到害怕，好像将有可怕的事情发生', en:'Feeling afraid, as if something awful might happen'}
  ],
  levels: [
    {max:4,  title:{zh:'极轻微', en:'Minimal'}, desc:{zh:'目前几乎没有焦虑症状。', en:'Few or no anxiety symptoms at the moment.'}, advice:{zh:'保持规律的作息。如果之后持续紧张担忧，可以再测一次。', en:'Keep up regular routines. If worry or tension persists, take the test again later.'}},
    {max:9,  title:{zh:'轻度', en:'Mild'}, desc:{zh:'有一些焦虑症状。', en:'Some anxiety symptoms.'}, advice:{zh:'留意睡眠、咖啡因和压力来源，试试放松练习，两周后再测一次。', en:'Watch sleep, caffeine and stressors, try relaxation exercises, and retake in two weeks.'}},
    {max:14, title:{zh:'中度', en:'Moderate'}, desc:{zh:'症状比较明显，可能已经影响日常生活。', en:'Noticeable symptoms that may already affect daily life.'}, advice:{zh:'建议和医生或心理咨询师聊聊，做进一步评估。', en:'Consider talking to a doctor or counselor for a proper assessment.'}},
    {max:21, title:{zh:'重度', en:'Severe'}, desc:{zh:'症状很重，对生活影响可能很大。', en:'Severe symptoms, likely with a large effect on daily life.'}, advice:{zh:'建议尽快预约专业人员评估，不必一个人硬撑。', en:'Please arrange an assessment with a professional soon. You do not have to carry this alone.'}}
  ],
  source: 'Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med. 2006;166(10):1092-1097. The GAD-7 is in the public domain.'
};
