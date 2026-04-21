window.questions = [
  {
    id: 1,
    text: "当别人明显看不起你时，你第一反应更像哪种？",
    options: [
      { text: "先记住这笔账，等时机成熟再用结果打脸", effects: { rational: 3, calm: 3, ambitious: 4, disguised: 2, execution: 3 } },
      { text: "当场怼回去，气势不能输", effects: { emotional: 3, impulsive: 4, rebellious: 3, social: 2 } },
      { text: "懒得解释，直接走人，没必要浪费情绪", effects: { solitary: 4, calm: 3, rational: 2, orderly: 1 } },
      { text: "表面打圆场，背后悄悄让自己变强", effects: { disguised: 3, execution: 4, ambitious: 3, calm: 2 } }
    ]
  },
  {
    id: 2,
    text: "团队里有人一直拖后腿，你通常会怎么处理？",
    options: [
      { text: "我来重新分工，确保事情还能推进", effects: { orderly: 3, execution: 4, rational: 3, calm: 2 } },
      { text: "直接点名指出问题，别再装没看见", effects: { impulsive: 3, rebellious: 2, moral: 3, execution: 2 } },
      { text: "先帮他补一把，至少别让全队崩盘", effects: { altruistic: 4, moral: 3, social: 2, emotional: 2 } },
      { text: "我会自己做掉关键部分，不想被别人拖慢", effects: { solitary: 4, execution: 4, ambitious: 2, calm: 1 } }
    ]
  },
  {
    id: 3,
    text: "如果必须在规则和结果之间选一个，你更看重什么？",
    options: [
      { text: "规则先立住，不然最后谁都说不清", effects: { orderly: 4, moral: 3, conformist: 2, rational: 2 } },
      { text: "只要结果对，过程灵活一点没关系", effects: { rebellious: 4, rational: 2, ambitious: 3, disguised: 1 } },
      { text: "看是为了谁，如果能保护重要的人，我会破例", effects: { emotional: 3, altruistic: 4, moral: 2, rebellious: 2 } },
      { text: "我会先判断代价，能两边都保最好", effects: { calm: 3, rational: 4, disguised: 2, execution: 2 } }
    ]
  },
  {
    id: 4,
    text: "你更容易因为什么突然失控？",
    options: [
      { text: "被人反复否定能力", effects: { ambitious: 4, emotional: 2, impulsive: 3 } },
      { text: "身边人受委屈却没人站出来", effects: { altruistic: 4, moral: 3, impulsive: 2, emotional: 2 } },
      { text: "计划被蠢办法打断，效率瞬间归零", effects: { rational: 3, orderly: 3, execution: 4, calm: 1 } },
      { text: "被迫配合一套我根本不认同的规矩", effects: { rebellious: 4, solitary: 2, impulsive: 2, moral: 1 } }
    ]
  },
  {
    id: 5,
    text: "如果喜欢的人明显不喜欢你，你会怎么做？",
    options: [
      { text: "嘴上说没事，回去自己内耗很久", effects: { emotional: 4, solitary: 3, romance: 4, disguised: 2 } },
      { text: "争取一次，不行就体面退场", effects: { rational: 3, calm: 3, romance: 3, moral: 1 } },
      { text: "继续对他好，反正我认定了就不轻易退", effects: { romance: 4, altruistic: 3, execution: 2, emotional: 2 } },
      { text: "立刻抽离，感情不能影响我节奏", effects: { rational: 3, ambitious: 2, calm: 3, solitary: 2 } }
    ]
  },
  {
    id: 6,
    text: "朋友临时叫你去做一件有点离谱的事，你多半会？",
    options: [
      { text: "先问清楚值不值得，再决定上不上", effects: { rational: 4, calm: 3, execution: 1 } },
      { text: "去啊，人生就是得有点节目效果", effects: { humorous: 4, impulsive: 3, social: 3, rebellious: 1 } },
      { text: "只要是朋友需要，我大概率会去", effects: { altruistic: 4, social: 3, emotional: 2 } },
      { text: "我通常会找借口拒绝，太消耗人了", effects: { solitary: 4, calm: 2, orderly: 2 } }
    ]
  },
  {
    id: 7,
    text: "你最常用哪种方式保护自己？",
    options: [
      { text: "先把情绪收起来，不让别人看懂我", effects: { disguised: 4, calm: 2, solitary: 2 } },
      { text: "把局面算清楚，让自己始终占上风", effects: { rational: 4, ambitious: 2, execution: 3 } },
      { text: "用玩笑和轻松态度糊过去", effects: { humorous: 4, social: 2, disguised: 2 } },
      { text: "谁碰我底线，我就直接反击", effects: { impulsive: 3, rebellious: 3, moral: 2, execution: 2 } }
    ]
  },
  {
    id: 8,
    text: "面对一个你真想拿下的目标，你会怎么推进？",
    options: [
      { text: "先做长期计划，一步步压过去", effects: { execution: 4, rational: 3, ambitious: 4, orderly: 2 } },
      { text: "边做边冲，机会来了先抓住再说", effects: { impulsive: 4, ambitious: 3, rebellious: 2, execution: 2 } },
      { text: "找队友一起搞，效率和气氛都更重要", effects: { social: 4, altruistic: 2, execution: 2, emotional: 1 } },
      { text: "先看值不值得我投入，没必要就算了", effects: { calm: 3, rational: 2, solitary: 2, ambitious: 1 } }
    ]
  },
  {
    id: 9,
    text: "如果突然成了大家关注的中心，你会怎么表现？",
    options: [
      { text: "很自然接住，全场气氛我来带", effects: { social: 4, humorous: 3, calm: 1 } },
      { text: "能不说就不说，我更喜欢在边上看", effects: { solitary: 4, rational: 2, calm: 2 } },
      { text: "看情况，如果对我有利我就上", effects: { ambitious: 3, disguised: 2, social: 2, rational: 2 } },
      { text: "我会有点紧绷，但硬着头皮也能顶住", effects: { emotional: 2, execution: 3, moral: 1, romance: 1 } }
    ]
  },
  {
    id: 10,
    text: "别人求你帮忙时，你最看重哪一点？",
    options: [
      { text: "他是不是真的值得我帮", effects: { rational: 3, moral: 2, calm: 2 } },
      { text: "只要我能帮上，就先帮了再说", effects: { altruistic: 4, emotional: 2, social: 2 } },
      { text: "我会帮，但会用自己的方式掌控局面", effects: { disguised: 2, execution: 3, ambitious: 2, rational: 2 } },
      { text: "如果这事很蠢，我会直接拒绝", effects: { solitary: 2, rebellious: 2, rational: 2, moral: 1 } }
    ]
  },
  {
    id: 11,
    text: "你最容易被哪种人吸引？",
    options: [
      { text: "有点危险感、很特别、别人搞不定的那种", effects: { romance: 4, rebellious: 2, emotional: 2 } },
      { text: "靠谱、稳、让我有安全感的人", effects: { romance: 3, orderly: 3, calm: 2, conformist: 1 } },
      { text: "聪明、有脑子、能跟我过招的人", effects: { rational: 3, ambitious: 2, romance: 2, disguised: 1 } },
      { text: "有趣、会接梗、相处不累的人", effects: { humorous: 3, social: 2, romance: 2, emotional: 1 } }
    ]
  },
  {
    id: 12,
    text: "如果只能保留你最核心的一种底色，你希望自己更像哪类人？",
    options: [
      { text: "脑子清楚，关键时刻不乱", effects: { rational: 4, calm: 4, execution: 2 } },
      { text: "重情重义，别人靠得住我", effects: { altruistic: 4, moral: 3, emotional: 3 } },
      { text: "敢冲敢改，不被规则拿捏", effects: { rebellious: 4, impulsive: 3, ambitious: 2 } },
      { text: "外表轻松，但真正出手一定有效", effects: { humorous: 2, disguised: 3, execution: 3, social: 2 } }
    ]
  }
];
