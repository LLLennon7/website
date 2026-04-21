function createCharacterPlaceholder(name, colorA, colorB) {
  var safeName = escapeXml(name);
  var svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 520">' +
    '<defs>' +
    '<linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '<stop offset="0%" stop-color="' + colorA + '"/>' +
    '<stop offset="100%" stop-color="' + colorB + '"/>' +
    '</linearGradient>' +
    '</defs>' +
    '<rect width="480" height="520" rx="44" fill="url(#g)"/>' +
    '<circle cx="380" cy="95" r="66" fill="rgba(255,255,255,0.16)"/>' +
    '<circle cx="90" cy="430" r="74" fill="rgba(255,255,255,0.12)"/>' +
    '<text x="50%" y="47%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="72" font-family="PingFang SC, Microsoft YaHei, sans-serif" font-weight="700">' +
    safeName +
    '</text>' +
    '<text x="50%" y="69%" dominant-baseline="middle" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="26" font-family="PingFang SC, Microsoft YaHei, sans-serif">角色图片占位</text>' +
    '</svg>';

  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function escapeXml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

window.characters = [
  {
    id: "walter-white",
    name: "老白",
    originalName: "Walter White",
    source: "绝命毒师",
    image: createCharacterPlaceholder("老白", "#723d46", "#3a0f1b"),
    description: "你擅长在压力里做出精密判断，表面克制，内里野心很强，一旦认定目标就会持续推进。",
    traits: { rational: 90, emotional: 28, impulsive: 34, calm: 83, social: 36, solitary: 78, orderly: 72, rebellious: 66, ambitious: 96, altruistic: 22, humorous: 18, disguised: 86, moral: 33, conformist: 21, execution: 94, romance: 14 }
  },
  {
    id: "sheldon",
    name: "谢尔顿",
    originalName: "Sheldon Cooper",
    source: "生活大爆炸",
    image: createCharacterPlaceholder("谢尔顿", "#4d7ea8", "#20395a"),
    description: "理性和规则感极强，思维精确到细节，情绪表达不多，但对自己认定的秩序非常坚持。",
    traits: { rational: 97, emotional: 16, impulsive: 10, calm: 76, social: 22, solitary: 88, orderly: 95, rebellious: 16, ambitious: 68, altruistic: 38, humorous: 36, disguised: 14, moral: 74, conformist: 66, execution: 70, romance: 12 }
  },
  {
    id: "forrest-gump",
    name: "阿甘",
    originalName: "Forrest Gump",
    source: "阿甘正传",
    image: createCharacterPlaceholder("阿甘", "#9f7e69", "#5b4638"),
    description: "你身上有一种简单但顽强的力量，不一定最复杂，却总能真诚地把事情一路做下去。",
    traits: { rational: 42, emotional: 81, impulsive: 28, calm: 72, social: 58, solitary: 24, orderly: 78, rebellious: 18, ambitious: 38, altruistic: 94, humorous: 34, disguised: 8, moral: 90, conformist: 56, execution: 88, romance: 76 }
  },
  {
    id: "andy",
    name: "安迪",
    originalName: "Andy Dufresne",
    source: "肖申克的救赎",
    image: createCharacterPlaceholder("安迪", "#59788e", "#243746"),
    description: "你外表平静，内在意志极强，擅长忍耐、布局和长期执行，不轻易向现实低头。",
    traits: { rational: 88, emotional: 39, impulsive: 14, calm: 91, social: 33, solitary: 74, orderly: 77, rebellious: 42, ambitious: 71, altruistic: 62, humorous: 24, disguised: 48, moral: 84, conformist: 38, execution: 96, romance: 22 }
  },
  {
    id: "joker",
    name: "小丑",
    originalName: "Joker",
    source: "蝙蝠侠：黑暗骑士",
    image: createCharacterPlaceholder("小丑", "#7b2d8e", "#1f102f"),
    description: "你不爱走常规路线，喜欢打乱牌桌和既定规则，脑回路跳脱，危险感和魅力并存。",
    traits: { rational: 58, emotional: 72, impulsive: 85, calm: 32, social: 79, solitary: 46, orderly: 4, rebellious: 98, ambitious: 81, altruistic: 4, humorous: 80, disguised: 91, moral: 2, conformist: 1, execution: 67, romance: 8 }
  },
  {
    id: "iron-man",
    name: "钢铁侠",
    originalName: "Tony Stark",
    source: "钢铁侠",
    image: createCharacterPlaceholder("钢铁侠", "#d88b17", "#7d1d17"),
    description: "你有锋利的大脑和强烈的个人风格，能扛事也敢出头，嘴上轻松，行动上很顶。",
    traits: { rational: 86, emotional: 44, impulsive: 56, calm: 61, social: 84, solitary: 21, orderly: 42, rebellious: 74, ambitious: 88, altruistic: 79, humorous: 92, disguised: 29, moral: 75, conformist: 11, execution: 91, romance: 48 }
  },
  {
    id: "sherlock",
    name: "福尔摩斯",
    originalName: "Sherlock Holmes",
    source: "神探夏洛克",
    image: createCharacterPlaceholder("福尔摩斯", "#596d7a", "#1f2830"),
    description: "你观察力和判断力都很强，面对复杂局面反而更冷静，喜欢用脑子而不是情绪解决问题。",
    traits: { rational: 98, emotional: 17, impulsive: 22, calm: 88, social: 31, solitary: 84, orderly: 70, rebellious: 59, ambitious: 72, altruistic: 46, humorous: 38, disguised: 51, moral: 67, conformist: 14, execution: 86, romance: 8 }
  },
  {
    id: "saul",
    name: "索尔·古德曼",
    originalName: "Saul Goodman",
    source: "风骚律师",
    image: createCharacterPlaceholder("索尔", "#b66f1f", "#562813"),
    description: "你反应快，会说会转弯，擅长在灰色地带找解法，表面圆滑，实际执行力并不差。",
    traits: { rational: 69, emotional: 43, impulsive: 48, calm: 52, social: 93, solitary: 14, orderly: 24, rebellious: 81, ambitious: 77, altruistic: 31, humorous: 83, disguised: 88, moral: 26, conformist: 8, execution: 74, romance: 28 }
  },
  {
    id: "luffy",
    name: "路飞",
    originalName: "Monkey D. Luffy",
    source: "海贼王",
    image: createCharacterPlaceholder("路飞", "#e0841b", "#9a2f13"),
    description: "你重感情、行动快、认定伙伴就会一路护到底，很多决定都来自本能和热血。",
    traits: { rational: 22, emotional: 86, impulsive: 96, calm: 18, social: 87, solitary: 6, orderly: 12, rebellious: 92, ambitious: 71, altruistic: 95, humorous: 76, disguised: 4, moral: 82, conformist: 3, execution: 84, romance: 6 }
  },
  {
    id: "naruto",
    name: "鸣人",
    originalName: "Naruto Uzumaki",
    source: "火影忍者",
    image: createCharacterPlaceholder("鸣人", "#f5a623", "#f76b1c"),
    description: "你热情外放，认准的人和信念都不会轻易放弃，越被低估，越能打出自己的节奏。",
    traits: { rational: 36, emotional: 88, impulsive: 82, calm: 29, social: 89, solitary: 9, orderly: 35, rebellious: 72, ambitious: 79, altruistic: 93, humorous: 62, disguised: 11, moral: 84, conformist: 12, execution: 86, romance: 31 }
  },
  {
    id: "sasuke",
    name: "佐助",
    originalName: "Sasuke Uchiha",
    source: "火影忍者",
    image: createCharacterPlaceholder("佐助", "#5b6290", "#1d1f38"),
    description: "你有明显的目标导向，不喜欢过度解释，很多情绪都藏着走，行动比表达更有分量。",
    traits: { rational: 74, emotional: 52, impulsive: 43, calm: 68, social: 18, solitary: 91, orderly: 46, rebellious: 78, ambitious: 90, altruistic: 28, humorous: 10, disguised: 58, moral: 49, conformist: 7, execution: 93, romance: 12 }
  },
  {
    id: "ichigo",
    name: "黑崎一护",
    originalName: "Ichigo Kurosaki",
    source: "死神",
    image: createCharacterPlaceholder("一护", "#d96a28", "#422029"),
    description: "你看上去没那么爱张扬，但关键时刻很能扛，保护欲和行动力都很强，属于闷着顶的人。",
    traits: { rational: 58, emotional: 74, impulsive: 62, calm: 48, social: 44, solitary: 46, orderly: 41, rebellious: 64, ambitious: 56, altruistic: 85, humorous: 29, disguised: 24, moral: 79, conformist: 18, execution: 83, romance: 22 }
  },
  {
    id: "gojo",
    name: "五条悟",
    originalName: "Satoru Gojo",
    source: "咒术回战",
    image: createCharacterPlaceholder("五条悟", "#9cd5ff", "#3457a1"),
    description: "你自带强势气场，聪明、松弛、会玩梗，真正需要出手的时候又能迅速压住场面。",
    traits: { rational: 81, emotional: 48, impulsive: 59, calm: 77, social: 83, solitary: 17, orderly: 34, rebellious: 71, ambitious: 75, altruistic: 69, humorous: 88, disguised: 32, moral: 67, conformist: 9, execution: 87, romance: 21 }
  },
  {
    id: "shinji",
    name: "碇真嗣",
    originalName: "Shinji Ikari",
    source: "新世纪福音战士",
    image: createCharacterPlaceholder("碇真嗣", "#98a4b6", "#475266"),
    description: "你内心敏感，容易反复自省，很多情绪会先压在心里，真正触到底线时又会突然爆发。",
    traits: { rational: 41, emotional: 89, impulsive: 37, calm: 34, social: 15, solitary: 86, orderly: 49, rebellious: 38, ambitious: 22, altruistic: 66, humorous: 8, disguised: 63, moral: 71, conformist: 69, execution: 42, romance: 58 }
  },
  {
    id: "light",
    name: "夜神月",
    originalName: "Light Yagami",
    source: "死亡笔记",
    image: createCharacterPlaceholder("夜神月", "#8f463f", "#231316"),
    description: "你目标感强，脑子转得快，擅长布局和伪装，既有精英感，也有极强的掌控欲。",
    traits: { rational: 94, emotional: 24, impulsive: 21, calm: 86, social: 54, solitary: 58, orderly: 73, rebellious: 52, ambitious: 98, altruistic: 12, humorous: 8, disguised: 95, moral: 18, conformist: 39, execution: 97, romance: 10 }
  },
  {
    id: "levi",
    name: "利威尔",
    originalName: "Levi",
    source: "进击的巨人",
    image: createCharacterPlaceholder("利威尔", "#6f736c", "#262927"),
    description: "你冷静、利落、不爱废话，控制力和执行力都很高，情绪不外露，但会认真守住自己在意的人。",
    traits: { rational: 83, emotional: 31, impulsive: 18, calm: 94, social: 18, solitary: 82, orderly: 85, rebellious: 31, ambitious: 57, altruistic: 72, humorous: 16, disguised: 26, moral: 88, conformist: 33, execution: 98, romance: 9 }
  },
  {
    id: "yuji",
    name: "虎杖悠仁",
    originalName: "Yuji Itadori",
    source: "咒术回战",
    image: createCharacterPlaceholder("虎杖", "#f08b72", "#783d63"),
    description: "你天然带着亲和力，愿意为别人出力，虽然会冲动，但本质上很真诚，也很能扛责任。",
    traits: { rational: 41, emotional: 85, impulsive: 73, calm: 41, social: 81, solitary: 12, orderly: 37, rebellious: 59, ambitious: 48, altruistic: 94, humorous: 58, disguised: 9, moral: 87, conformist: 21, execution: 78, romance: 26 }
  },
  {
    id: "eren",
    name: "艾伦",
    originalName: "Eren Yeager",
    source: "进击的巨人",
    image: createCharacterPlaceholder("艾伦", "#4c6133", "#1f2712"),
    description: "你有极强的执念和行动爆发力，对想守护的人与事会投入全部，但情绪也容易被目标点燃。",
    traits: { rational: 48, emotional: 77, impulsive: 83, calm: 24, social: 43, solitary: 52, orderly: 18, rebellious: 94, ambitious: 92, altruistic: 58, humorous: 14, disguised: 47, moral: 44, conformist: 4, execution: 89, romance: 23 }
  },
  {
    id: "deadpool",
    name: "死侍",
    originalName: "Deadpool",
    source: "死侍",
    image: createCharacterPlaceholder("死侍", "#d13438", "#2d0f18"),
    description: "你嘴快、脑洞大、风格不按牌理出牌，表面玩世不恭，实际上很清楚自己在护什么。",
    traits: { rational: 47, emotional: 63, impulsive: 88, calm: 33, social: 86, solitary: 14, orderly: 7, rebellious: 96, ambitious: 42, altruistic: 68, humorous: 99, disguised: 71, moral: 56, conformist: 2, execution: 71, romance: 34 }
  },
  {
    id: "batman",
    name: "蝙蝠侠",
    originalName: "Batman",
    source: "蝙蝠侠",
    image: createCharacterPlaceholder("蝙蝠侠", "#3f4858", "#12161d"),
    description: "你克制、自律、习惯独自扛事，思考周密，情绪藏得深，但面对责任从不含糊。",
    traits: { rational: 89, emotional: 34, impulsive: 20, calm: 87, social: 29, solitary: 89, orderly: 81, rebellious: 57, ambitious: 76, altruistic: 81, humorous: 12, disguised: 84, moral: 86, conformist: 17, execution: 95, romance: 16 }
  },
  {
    id: "jack-sparrow",
    name: "杰克船长",
    originalName: "Jack Sparrow",
    source: "加勒比海盗",
    image: createCharacterPlaceholder("杰克", "#8a5b2b", "#3d2314"),
    description: "你有很强的临场反应和生存智慧，看起来松散随性，实际上比多数人更懂得怎么翻盘。",
    traits: { rational: 63, emotional: 55, impulsive: 67, calm: 52, social: 88, solitary: 19, orderly: 9, rebellious: 91, ambitious: 61, altruistic: 37, humorous: 91, disguised: 89, moral: 33, conformist: 3, execution: 68, romance: 26 }
  },
  {
    id: "house",
    name: "豪斯医生",
    originalName: "Dr. House",
    source: "豪斯医生",
    image: createCharacterPlaceholder("豪斯", "#7689a4", "#263246"),
    description: "你擅长看穿问题本质，不爱社交礼仪那一套，嘴上毒，判断准，很多事最后还得靠你兜住。",
    traits: { rational: 95, emotional: 21, impulsive: 28, calm: 79, social: 24, solitary: 86, orderly: 43, rebellious: 76, ambitious: 69, altruistic: 54, humorous: 84, disguised: 39, moral: 63, conformist: 6, execution: 84, romance: 7 }
  },
  {
    id: "l",
    name: "L",
    originalName: "L",
    source: "死亡笔记",
    image: createCharacterPlaceholder("L", "#bcc2cc", "#555d68"),
    description: "你对信息和逻辑非常敏感，喜欢独立判断，不容易被气氛带走，更相信自己的推理链条。",
    traits: { rational: 99, emotional: 18, impulsive: 11, calm: 78, social: 16, solitary: 93, orderly: 69, rebellious: 44, ambitious: 61, altruistic: 52, humorous: 14, disguised: 55, moral: 71, conformist: 12, execution: 79, romance: 5 }
  },
  {
    id: "lelouch",
    name: "鲁路修",
    originalName: "Lelouch",
    source: "反叛的鲁路修",
    image: createCharacterPlaceholder("鲁路修", "#6b4aa0", "#1f1737"),
    description: "你战略意识强，擅长隐藏真实意图，会为了目标承担代价，冷静与情感常常同时拉扯你。",
    traits: { rational: 92, emotional: 57, impulsive: 26, calm: 81, social: 57, solitary: 49, orderly: 36, rebellious: 89, ambitious: 95, altruistic: 53, humorous: 22, disguised: 98, moral: 46, conformist: 4, execution: 93, romance: 37 }
  }
];
