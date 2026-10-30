TESTS.who5 = {
  id: 'who5', category: 'mood', minutes: 1, higherBetter: true,
  title: {zh:'WHO-5 幸福感指数', en:'WHO-5 Well-Being Index'},
  desc: {zh:'世界卫生组织的 5 题幸福感量表，分数越高越好。', en:'The World Health Organization\'s 5-item well-being scale. Higher is better.'},
  intro: {zh:'共 5 题，约 1 分钟。请凭最近两周的真实感受作答。', en:'5 questions, about 1 minute. Answer based on how you really felt over the last two weeks.'},
  instruction: {zh:'过去两周内：', en:'Over the last two weeks:'},
  options: [
    {v:5, zh:'一直如此', en:'All of the time'}, {v:4, zh:'大部分时间', en:'Most of the time'},
    {v:3, zh:'超过一半的时间', en:'More than half of the time'}, {v:2, zh:'不到一半的时间', en:'Less than half of the time'},
    {v:1, zh:'偶尔', en:'Some of the time'}, {v:0, zh:'完全没有', en:'At no time'}
  ],
  items: [
    {zh:'我感到开心、心情愉快', en:'I have felt cheerful and in good spirits'},
    {zh:'我感到平静、放松', en:'I have felt calm and relaxed'},
    {zh:'我感到有精力、有活力', en:'I have felt active and vigorous'},
    {zh:'我醒来时感到清爽、休息得很好', en:'I woke up feeling fresh and rested'},
    {zh:'我的日常生活充满了让我感兴趣的事情', en:'My daily life has been filled with things that interest me'}
  ],
  levels: [
    {max:7, alert:true, title:{zh:'幸福感很低', en:'Very low well-being'}, desc:{zh:'分数很低，在筛查中提示可能存在抑郁。', en:'A very low score, which in screening suggests possible depression.'}, advice:{zh:'建议尽快和医生或心理健康专业人员聊聊，做进一步评估。可以再做一下 PHQ-9 对照。', en:'Please talk to a doctor or mental health professional for a proper assessment. You can also take the PHQ-9 for comparison.'}},
    {max:12, title:{zh:'幸福感偏低', en:'Low well-being'}, desc:{zh:'低于 13 分（百分制 52 分以下）通常建议做进一步的情绪筛查。', en:'A score below 13 (under 52 on the 0–100 scale) usually calls for a closer look at mood.'}, advice:{zh:'留意睡眠、活动和社交，可以做一下 PHQ-9 和 GAD-7，两周后再测一次。', en:'Pay attention to sleep, activity and social contact. Consider the PHQ-9 and GAD-7, and retake in two weeks.'}},
    {max:25, title:{zh:'幸福感良好', en:'Good well-being'}, desc:{zh:'最近两周的整体状态不错。', en:'Your overall state over the last two weeks looks good.'}, advice:{zh:'继续保持让你感觉好的习惯。', en:'Keep up the habits that make you feel good.'}}
  ],
  source: 'World Health Organization Regional Office for Europe. Wellbeing measures in primary health care / the DepCare Project. 1998. Topp CW et al. The WHO-5 Well-Being Index: a systematic review. Psychother Psychosom. 2015;84:167-176. Free to use. Chinese text is an unofficial translation. Raw score 0-25; multiply by 4 for the 0-100 scale.'
};
