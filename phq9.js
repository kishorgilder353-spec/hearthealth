TESTS.phq9 = {
  id: 'phq9',
  category: 'mood',
  minutes: 2,
  title: {zh:'PHQ-9 抑郁症状自评', en:'PHQ-9 Depression Screening'},
  desc: {zh:'筛查最近两周的抑郁症状，全球最常用的抑郁自评量表之一。', en:'Screens for depressive symptoms over the past two weeks. One of the most widely used depression questionnaires.'},
  intro: {zh:'共 9 题，约 2 分钟。请凭最近两周的真实感受作答，没有对错。', en:'9 questions, about 2 minutes. Answer based on how you really felt over the last two weeks. There are no right or wrong answers.'},
  instruction: {zh:'过去两周，以下问题困扰了你多久？', en:'Over the last 2 weeks, how often have you been bothered by the following problems?'},
  options: [
    {v:0, zh:'完全没有', en:'Not at all'},
    {v:1, zh:'好几天', en:'Several days'},
    {v:2, zh:'一半以上的天数', en:'More than half the days'},
    {v:3, zh:'几乎每天', en:'Nearly every day'}
  ],
  items: [
    {zh:'做事时提不起劲或没有兴趣', en:'Little interest or pleasure in doing things'},
    {zh:'感到心情低落、沮丧或绝望', en:'Feeling down, depressed, or hopeless'},
    {zh:'入睡困难、睡不安稳，或睡得过多', en:'Trouble falling or staying asleep, or sleeping too much'},
    {zh:'感觉疲倦或没有活力', en:'Feeling tired or having little energy'},
    {zh:'食欲不振或吃得过多', en:'Poor appetite or overeating'},
    {zh:'觉得自己很糟，或觉得自己很失败，或让自己或家人失望', en:'Feeling bad about yourself, or that you are a failure or have let yourself or your family down'},
    {zh:'对事物难以集中注意力，例如阅读或看电视时', en:'Trouble concentrating on things, such as reading or watching television'},
    {zh:'动作或说话缓慢到别人已经察觉？或正好相反：烦躁、坐立不安，比平常动得多', en:'Moving or speaking so slowly that other people could have noticed? Or the opposite: being so fidgety or restless that you have been moving around a lot more than usual'},
    {zh:'有不如死掉或用某种方式伤害自己的念头', en:'Thoughts that you would be better off dead, or of hurting yourself in some way'}
  ],
  safety: {item: 8, min: 1},
  levels: [
    {max:4,  title:{zh:'极轻微', en:'Minimal'}, desc:{zh:'目前几乎没有抑郁症状。', en:'Few or no depressive symptoms at the moment.'}, advice:{zh:'保持规律的作息和社交。如果之后情绪持续低落，可以再测一次。', en:'Keep up regular sleep and social contact. If your mood stays low, take the test again later.'}},
    {max:9,  title:{zh:'轻度', en:'Mild'}, desc:{zh:'有一些抑郁症状。', en:'Some depressive symptoms.'}, advice:{zh:'先留意睡眠、运动和与人交流，两周后再测一次，看有没有变化。', en:'Pay attention to sleep, exercise and talking with people, then retake the test in two weeks to see any change.'}},
    {max:14, title:{zh:'中度', en:'Moderate'}, desc:{zh:'症状比较明显，可能已经影响日常生活。', en:'Noticeable symptoms that may already affect daily life.'}, advice:{zh:'建议和医生或心理咨询师聊聊，让专业人员做进一步评估。', en:'Consider talking to a doctor or counselor for a proper assessment.'}},
    {max:19, title:{zh:'中重度', en:'Moderately severe'}, desc:{zh:'症状较多，对生活影响可能很大。', en:'Many symptoms, likely with a large effect on daily life.'}, advice:{zh:'建议尽快预约专业人员评估和治疗，不必一个人硬撑。', en:'Please arrange an assessment and treatment with a professional soon. You do not have to carry this alone.'}},
    {max:27, title:{zh:'重度', en:'Severe'}, desc:{zh:'症状很重。', en:'Severe symptoms.'}, advice:{zh:'建议尽快联系精神科医生或心理健康专业人员。如果你觉得撑不住了，请现在就联系身边的人或求助热线。', en:'Please contact a psychiatrist or mental health professional as soon as possible. If it feels like too much, reach out to someone near you or a helpline right now.'}}
  ],
  source: 'Kroenke K, Spitzer RL, Williams JBW. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med. 2001;16(9):606-613. PHQ-9 is in the public domain (developed by Drs. Spitzer, Williams, Kroenke and colleagues).'
};
