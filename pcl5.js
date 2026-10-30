TESTS.pcl5 = {
  id: 'pcl5', category: 'mood', minutes: 5,
  title: {zh:'PCL-5 创伤后应激症状清单', en:'PCL-5 PTSD Checklist'},
  desc: {zh:'筛查经历过极度压力或创伤事件后的症状（20 题，最近一个月）。', en:'Screens for symptoms after a very stressful or traumatic event (20 items, past month).'},
  intro: {zh:'共 20 题，约 5 分钟。这个测试只适用于经历过创伤或极度压力事件的人，题目会提到相关的反应，如果感到不适可以随时停下来。请想着那次经历作答。', en:'20 questions, about 5 minutes. This test is only for people who have been through a traumatic or extremely stressful event. The questions refer to reactions to it, and you can stop at any time if it feels uncomfortable. Keep that experience in mind as you answer.'},
  instruction: {zh:'过去一个月里，以下问题困扰了你多少？（针对那次压力经历）', en:'In the past month, how much were you bothered by the following (in relation to that stressful experience)?'},
  options: [
    {v:0, zh:'完全没有', en:'Not at all'}, {v:1, zh:'有一点', en:'A little bit'}, {v:2, zh:'中等程度', en:'Moderately'},
    {v:3, zh:'相当严重', en:'Quite a bit'}, {v:4, zh:'极其严重', en:'Extremely'}
  ],
  items: [
    {zh:'对这次经历反复出现的、令人不安的、不想要的记忆', en:'Repeated, disturbing, and unwanted memories of the stressful experience'},
    {zh:'反复做关于这次经历的、令人不安的梦', en:'Repeated, disturbing dreams of the stressful experience'},
    {zh:'突然觉得或表现得好像这次经历又发生了一样（好像你真的回到了那时）', en:'Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)'},
    {zh:'当有事情让你想起这次经历时，感到非常难受', en:'Feeling very upset when something reminded you of the stressful experience'},
    {zh:'当有事情让你想起这次经历时，出现强烈的身体反应（例如心跳加速、呼吸困难、出汗）', en:'Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)'},
    {zh:'回避与这次经历有关的记忆、想法或感受', en:'Avoiding memories, thoughts, or feelings related to the stressful experience'},
    {zh:'回避会让你想起这次经历的外在事物（例如人、地点、谈话、活动、物品或情境）', en:'Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)'},
    {zh:'难以记起这次经历中的重要部分', en:'Trouble remembering important parts of the stressful experience'},
    {zh:'对自己、他人或世界有强烈的负面看法（例如“我很糟糕”“我有严重的问题”“谁都不能相信”“世界极其危险”）', en:'Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)'},
    {zh:'因为这次经历或之后发生的事而责怪自己或别人', en:'Blaming yourself or someone else for the stressful experience or what happened after it'},
    {zh:'有强烈的负面情绪，例如恐惧、惊恐、愤怒、内疚或羞耻', en:'Having strong negative feelings such as fear, horror, anger, guilt, or shame'},
    {zh:'对过去喜欢的活动失去兴趣', en:'Loss of interest in activities that you used to enjoy'},
    {zh:'感到与他人疏远或隔绝', en:'Feeling distant or cut off from other people'},
    {zh:'难以体验到积极的感受（例如无法感到快乐，或无法对亲近的人产生爱的感觉）', en:'Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)'},
    {zh:'易怒、发脾气或有攻击性的行为', en:'Irritable behavior, angry outbursts, or acting aggressively'},
    {zh:'冒太多风险或做可能伤害自己的事', en:'Taking too many risks or doing things that could cause you harm'},
    {zh:'变得“超级警觉”、时刻警惕或戒备', en:'Being "superalert" or watchful or on guard'},
    {zh:'感到容易紧张、一惊一乍', en:'Feeling jumpy or easily startled'},
    {zh:'难以集中注意力', en:'Having difficulty concentrating'},
    {zh:'难以入睡或睡不安稳', en:'Trouble falling or staying asleep'}
  ],
  levels: [
    {max:30, title:{zh:'低于筛查临界值', en:'Below the screening cutoff'}, desc:{zh:'低于常用的 31–33 分临界值，目前不提示可能的创伤后应激障碍。', en:'Below the commonly used cutoff of 31–33, which does not suggest probable PTSD at the moment.'}, advice:{zh:'如果这些反应仍在困扰你，即使分数不高，也可以和专业人员聊聊。', en:'If these reactions still bother you, it is fine to talk to a professional even with a lower score.'}},
    {max:80, title:{zh:'达到或超过临界值', en:'At or above the cutoff'}, desc:{zh:'达到或超过 31–33 分的临界值，提示可能存在创伤后应激障碍，需要专业评估才能确认。', en:'At or above the cutoff of 31–33, which suggests probable PTSD. Only a professional assessment can confirm this.'}, advice:{zh:'建议联系精神科医生或擅长创伤治疗的心理专业人员做评估。这类症状是可以治疗的。', en:'Please contact a psychiatrist or a mental health professional experienced in trauma. These symptoms are treatable.'}}
  ],
  source: 'Weathers FW, Litz BT, Keane TM, Palmieri PA, Marx BP, Schnurr PP. The PTSD Checklist for DSM-5 (PCL-5). National Center for PTSD; 2013. Chinese text is an unofficial translation.'
};
