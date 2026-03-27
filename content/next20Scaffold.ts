import type { SearchIntent } from "@/content/types";

export type PlannedPage = {
  slug: string;
  title: string;
  pillar: "verse-meaning" | "verses-by-need" | "daily-verse" | "bible-term" | "bible-people-place";
  intent: SearchIntent;
  mainKeyword: string;
  secondaryKeywords: string[];
  targetHub: string;
  relatedExistingSlugs: string[];
  status: "planned";
  totalScore: number;
  grouping: "early-wins" | "growth-pages" | "longer-term";
  reason: string;
  publishPriority: number;
  overlapRisk: "none" | "moderate" | "high";
  overlapWithSlugs: string[];
};

// Prioritized publishing queue from TSV-based planning review (2026-03-27).
export const next20PlannedPages: PlannedPage[] = [
  {
    slug: "john-3-17-meaning",
    title: "John 3:17 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "john 3 17 meaning",
    secondaryKeywords: ["john 3:17 explained", "did jesus come to condemn", "john 3:17 context"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["john-3-16-meaning", "what-is-salvation-in-the-bible", "what-is-grace-in-the-bible", "romans-8-28-meaning"],
    status: "planned",
    totalScore: 29,
    grouping: "early-wins",
    reason: "Direct continuation of an existing high-fit John 3 cluster page.",
    publishPriority: 1,
    overlapRisk: "moderate",
    overlapWithSlugs: ["john-3-16-meaning"]
  },
  {
    slug: "john-11-25-meaning",
    title: "John 11:25 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "john 11 25 meaning",
    secondaryKeywords: ["i am the resurrection and the life meaning", "john 11:25 explained", "john 11:25 context"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["john-3-16-meaning", "romans-8-18-meaning", "bible-verses-for-grief", "who-was-mary-magdalene"],
    status: "planned",
    totalScore: 29,
    grouping: "early-wins",
    reason: "Strong grief-and-hope intent with clear interpretive framing.",
    publishPriority: 2,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "bible-verses-about-trusting-god",
    title: "Bible Verses About Trusting God",
    pillar: "verses-by-need",
    intent: "problem-solving",
    mainKeyword: "bible verses about trusting god",
    secondaryKeywords: [
      "trust god scriptures",
      "verses about trusting god in hard times",
      "trust in the lord bible verses",
      "scripture on relying on god"
    ],
    targetHub: "/verses-by-need",
    relatedExistingSlugs: ["bible-verses-for-anxiety", "bible-verses-for-fear", "proverbs-3-5-6-meaning", "what-is-faith-in-the-bible"],
    status: "planned",
    totalScore: 29,
    grouping: "early-wins",
    reason: "Excellent intent clarity and internal linking across fear/anxiety/faith pages.",
    publishPriority: 3,
    overlapRisk: "moderate",
    overlapWithSlugs: ["bible-verses-for-fear", "bible-verses-for-anxiety"]
  },
  {
    slug: "bible-verses-about-faith-in-hard-times",
    title: "Bible Verses About Faith in Hard Times",
    pillar: "verses-by-need",
    intent: "problem-solving",
    mainKeyword: "bible verses about faith in hard times",
    secondaryKeywords: [
      "faith scriptures for hard times",
      "bible verses when faith is weak",
      "scriptures for difficult seasons"
    ],
    targetHub: "/verses-by-need",
    relatedExistingSlugs: ["bible-verses-for-strength", "bible-verses-for-hope", "romans-8-18-meaning", "what-is-faith-in-the-bible"],
    status: "planned",
    totalScore: 27,
    grouping: "early-wins",
    reason: "Long-tail intent with realistic ranking path and clear user pain-point.",
    publishPriority: 4,
    overlapRisk: "moderate",
    overlapWithSlugs: ["bible-verses-for-strength", "bible-verses-for-hope"]
  },
  {
    slug: "john-11-35-meaning",
    title: "John 11:35 Meaning",
    pillar: "verse-meaning",
    intent: "devotional",
    mainKeyword: "john 11 35 meaning",
    secondaryKeywords: ["jesus wept meaning", "john 11:35 explained", "shortest verse in the bible meaning"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["john-3-16-meaning", "bible-verses-for-grief", "what-is-grace-in-the-bible", "who-was-mary-magdalene"],
    status: "planned",
    totalScore: 27,
    grouping: "growth-pages",
    reason: "High-recognition verse with clear practical-devotional depth.",
    publishPriority: 5,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "bible-verses-for-healing-from-sickness",
    title: "Bible Verses for Healing from Sickness",
    pillar: "verses-by-need",
    intent: "problem-solving",
    mainKeyword: "bible verses for healing from sickness",
    secondaryKeywords: ["healing bible verses for illness", "scripture for the sick", "verses for recovery and healing"],
    targetHub: "/verses-by-need",
    relatedExistingSlugs: ["healing-scriptures", "bible-verses-for-strength", "bible-verses-for-prayer", "isaiah-41-10-meaning"],
    status: "planned",
    totalScore: 27,
    grouping: "early-wins",
    reason: "Focused long-tail variant that can rank faster than broad healing terms.",
    publishPriority: 6,
    overlapRisk: "high",
    overlapWithSlugs: ["healing-scriptures"]
  },
  {
    slug: "bible-verses-about-hope-in-hard-times",
    title: "Bible Verses About Hope in Hard Times",
    pillar: "verses-by-need",
    intent: "problem-solving",
    mainKeyword: "bible verses about hope in hard times",
    secondaryKeywords: [
      "hope scriptures for hard times",
      "bible verses for difficult seasons",
      "encouragement verses for suffering"
    ],
    targetHub: "/verses-by-need",
    relatedExistingSlugs: ["bible-verses-for-hope", "bible-verses-for-grief", "romans-8-18-meaning", "jeremiah-29-11-meaning"],
    status: "planned",
    totalScore: 27,
    grouping: "early-wins",
    reason: "Strong emotional-need intent and natural integration with hope/grief pages.",
    publishPriority: 7,
    overlapRisk: "high",
    overlapWithSlugs: ["bible-verses-for-hope"]
  },
  {
    slug: "romans-8-31-meaning",
    title: "Romans 8:31 Meaning",
    pillar: "verse-meaning",
    intent: "devotional",
    mainKeyword: "romans 8 31 meaning",
    secondaryKeywords: ["if god is for us who can be against us meaning", "romans 8:31 explained", "romans 8:31 context"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["romans-8-18-meaning", "romans-8-28-meaning", "bible-verses-for-fear", "bible-verses-for-strength"],
    status: "planned",
    totalScore: 27,
    grouping: "growth-pages",
    reason: "Builds topical depth around an already strong Romans cluster.",
    publishPriority: 8,
    overlapRisk: "moderate",
    overlapWithSlugs: ["romans-8-18-meaning", "romans-8-28-meaning"]
  },
  {
    slug: "isaiah-40-8-meaning",
    title: "Isaiah 40:8 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "isaiah 40 8 meaning",
    secondaryKeywords: ["the word of god stands forever meaning", "isaiah 40:8 explained", "isaiah 40:8 context"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["isaiah-40-31-meaning", "isaiah-41-10-meaning", "psalm-46-1-meaning", "what-is-faith-in-the-bible"],
    status: "planned",
    totalScore: 27,
    grouping: "growth-pages",
    reason: "Same-book support page with clear contextual interpretive value.",
    publishPriority: 9,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "john-20-29-meaning",
    title: "John 20:29 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "john 20 29 meaning",
    secondaryKeywords: ["blessed are those who have not seen meaning", "john 20:29 explained", "faith without seeing bible verse"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["what-is-faith-in-the-bible", "john-3-16-meaning", "romans-8-28-meaning", "what-is-repentance-in-the-bible"],
    status: "planned",
    totalScore: 27,
    grouping: "growth-pages",
    reason: "Clear faith-intent query with strong links to existing doctrine pages.",
    publishPriority: 10,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "john-19-30-meaning",
    title: "John 19:30 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "john 19 30 meaning",
    secondaryKeywords: ["it is finished meaning", "john 19:30 explained", "finished work of christ verse"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["what-is-salvation-in-the-bible", "what-is-justification-in-the-bible", "john-3-16-meaning", "what-is-grace-in-the-bible"],
    status: "planned",
    totalScore: 28,
    grouping: "growth-pages",
    reason: "High doctrinal value with strong salvation and grace linking.",
    publishPriority: 11,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "isaiah-60-22-meaning",
    title: "Isaiah 60:22 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "isaiah 60 22 meaning",
    secondaryKeywords: [
      "at the right time i the lord will make it happen meaning",
      "isaiah 60:22 explained",
      "god timing bible verse"
    ],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["jeremiah-29-11-meaning", "romans-8-28-meaning", "isaiah-40-31-meaning", "bible-verses-for-hope"],
    status: "planned",
    totalScore: 26,
    grouping: "growth-pages",
    reason: "Timely, practical verse intent that aligns with hope-and-timing needs.",
    publishPriority: 12,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "john-8-12-meaning",
    title: "John 8:12 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "john 8 12 meaning",
    secondaryKeywords: ["i am the light of the world meaning", "john 8:12 explained", "john 8:12 context"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["john-3-16-meaning", "what-is-salvation-in-the-bible", "what-is-sin-in-the-bible", "daily-scripture-explained"],
    status: "planned",
    totalScore: 26,
    grouping: "growth-pages",
    reason: "Strong Christ-identity verse with clear explanatory search behavior.",
    publishPriority: 13,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "john-14-6-meaning",
    title: "John 14:6 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "john 14 6 meaning",
    secondaryKeywords: ["i am the way the truth and the life meaning", "john 14:6 explained", "john 14:6 context"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["john-3-16-meaning", "what-is-salvation-in-the-bible", "what-is-faith-in-the-bible", "romans-8-28-meaning"],
    status: "planned",
    totalScore: 28,
    grouping: "longer-term",
    reason: "Excellent page concept but a more competitive SERP for newer domains.",
    publishPriority: 14,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "psalm-46-10-meaning",
    title: "Psalm 46:10 Meaning",
    pillar: "verse-meaning",
    intent: "devotional",
    mainKeyword: "psalm 46 10 meaning",
    secondaryKeywords: ["be still and know that i am god meaning", "psalm 46:10 explained", "psalm 46:10 context"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["psalm-46-1-meaning", "psalm-23-meaning", "bible-verses-for-anxiety", "daily-psalm-explained"],
    status: "planned",
    totalScore: 28,
    grouping: "longer-term",
    reason: "High-fit devotional verse but crowded SERPs require stronger authority.",
    publishPriority: 15,
    overlapRisk: "moderate",
    overlapWithSlugs: ["psalm-46-1-meaning"]
  },
  {
    slug: "romans-10-9-meaning",
    title: "Romans 10:9 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "romans 10 9 meaning",
    secondaryKeywords: [
      "confess with your mouth believe in your heart meaning",
      "romans 10:9 explained",
      "romans 10:9 salvation"
    ],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["romans-8-28-meaning", "what-is-salvation-in-the-bible", "what-is-repentance-in-the-bible", "john-3-16-meaning"],
    status: "planned",
    totalScore: 28,
    grouping: "longer-term",
    reason: "Strong doctrinal intent and high linking value to salvation pages.",
    publishPriority: 16,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "romans-3-23-meaning",
    title: "Romans 3:23 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "romans 3 23 meaning",
    secondaryKeywords: ["all have sinned meaning", "romans 3:23 explained", "romans 3:23 context"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["what-is-sin-in-the-bible", "what-is-salvation-in-the-bible", "romans-8-28-meaning", "john-3-16-meaning"],
    status: "planned",
    totalScore: 28,
    grouping: "longer-term",
    reason: "Core doctrine query with strong support for existing sin/salvation pages.",
    publishPriority: 17,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "romans-5-8-meaning",
    title: "Romans 5:8 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "romans 5 8 meaning",
    secondaryKeywords: [
      "while we were still sinners christ died for us meaning",
      "romans 5:8 explained",
      "romans 5:8 context"
    ],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["romans-8-18-meaning", "john-3-16-meaning", "what-is-grace-in-the-bible", "what-is-salvation-in-the-bible"],
    status: "planned",
    totalScore: 28,
    grouping: "longer-term",
    reason: "Strong bridge page linking sin, grace, and salvation clusters.",
    publishPriority: 18,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "bible-verses-about-love-and-marriage",
    title: "Bible Verses About Love and Marriage",
    pillar: "verses-by-need",
    intent: "problem-solving",
    mainKeyword: "bible verses about love and marriage",
    secondaryKeywords: ["marriage scriptures", "bible verses for couples", "biblical love in marriage"],
    targetHub: "/verses-by-need",
    relatedExistingSlugs: ["bible-verses-for-prayer", "bible-verses-for-peace", "what-is-grace-in-the-bible", "what-is-faith-in-the-bible"],
    status: "planned",
    totalScore: 25,
    grouping: "early-wins",
    reason: "Clear practical use-case with good evergreen utility and link options.",
    publishPriority: 19,
    overlapRisk: "none",
    overlapWithSlugs: []
  },
  {
    slug: "john-3-36-meaning",
    title: "John 3:36 Meaning",
    pillar: "verse-meaning",
    intent: "interpretive",
    mainKeyword: "john 3 36 meaning",
    secondaryKeywords: [
      "whoever believes in the son has eternal life meaning",
      "john 3:36 explained",
      "john 3:36 context"
    ],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["john-3-16-meaning", "what-is-salvation-in-the-bible", "what-is-repentance-in-the-bible", "what-is-faith-in-the-bible"],
    status: "planned",
    totalScore: 27,
    grouping: "early-wins",
    reason: "Completes the John 3 doctrinal cluster with clear salvation intent.",
    publishPriority: 20,
    overlapRisk: "moderate",
    overlapWithSlugs: ["john-3-16-meaning"]
  }
];
