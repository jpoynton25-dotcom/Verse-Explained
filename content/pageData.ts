import type { ContentEntry } from "@/content/types";

export type PageData = {
  primaryIntent: ContentEntry["intent"];
  mainKeyword: string;
  secondaryKeywords: string[];
  sectionHeadings: string[];
  breadcrumb: Array<{ label: string; href: string }>;
  article: {
    section: string;
    keywords: string[];
  };
};

export const pageDataBySlug: Record<string, PageData> = {
  "john-3-16-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 3:16 meaning",
    secondaryKeywords: ["john 3:16 explained", "what does john 3:16 mean", "john 3:16 bible meaning", "gospel message meaning"],
    sectionHeadings: [
      "Intro",
      "Verse text",
      "Simple meaning",
      "Context",
      "Common misunderstanding",
      "Real-life takeaway",
      "Related verses and links",
      "FAQ",
      "Final reflection"
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 3:16 Meaning", href: "/john-3-16-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 3:16 meaning", "gospel meaning", "bible verse explained"]
    }
  },
  "romans-8-18-meaning": {
    primaryIntent: "problem-solving",
    mainKeyword: "romans 8:18 meaning",
    secondaryKeywords: ["romans 8:18 explained", "present suffering future glory", "romans 8:18 context", "bible hope in suffering"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Romans 8:18 Meaning", href: "/romans-8-18-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["romans 8:18 meaning", "suffering and hope", "future glory"]
    }
  },
  "isaiah-41-10-meaning": {
    primaryIntent: "problem-solving",
    mainKeyword: "isaiah 41:10 meaning",
    secondaryKeywords: ["isaiah 41 10 explained", "do not fear bible verse", "god will strengthen you meaning", "isaiah 41:10 context"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Isaiah 41:10 Meaning", href: "/isaiah-41-10-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["isaiah 41:10 meaning", "bible verses for fear", "god strengthens you"]
    }
  },
  "jeremiah-29-11-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "jeremiah 29:11 meaning",
    secondaryKeywords: ["jeremiah 29:11 explained", "plans to prosper you meaning", "jeremiah 29:11 context", "hope and a future verse"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Jeremiah 29:11 Meaning", href: "/jeremiah-29-11-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["jeremiah 29:11 meaning", "hope and future", "bible promise context"]
    }
  },
  "psalm-23-meaning": {
    primaryIntent: "devotional",
    mainKeyword: "psalm 23 meaning",
    secondaryKeywords: ["psalm 23 explained", "the lord is my shepherd psalm 23", "psalm 23 for comfort", "psalm 23 context"],
    sectionHeadings: ["Intro", "Psalm text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Psalm 23 Meaning", href: "/psalm-23-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["psalm 23 meaning", "shepherd psalm", "bible comfort passage"]
    }
  },
  "the-lord-is-my-shepherd-meaning": {
    primaryIntent: "devotional",
    mainKeyword: "the lord is my shepherd meaning",
    secondaryKeywords: ["psalm 23:1 meaning", "lord is my shepherd explained", "shepherd meaning in bible", "i lack nothing meaning"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "The Lord Is My Shepherd Meaning", href: "/the-lord-is-my-shepherd-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["the lord is my shepherd meaning", "psalm 23:1", "shepherd imagery bible"]
    }
  },
  "healing-scriptures": {
    primaryIntent: "problem-solving",
    mainKeyword: "healing scriptures",
    secondaryKeywords: ["bible verses for healing", "scriptures for healing and strength", "healing bible verses", "prayer for healing verses"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Healing Scriptures", href: "/healing-scriptures" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["healing scriptures", "bible verses for healing", "healing prayers"]
    }
  },
  "encouraging-bible-verses": {
    primaryIntent: "devotional",
    mainKeyword: "encouraging bible verses",
    secondaryKeywords: ["verses for encouragement", "uplifting scripture", "encouraging scriptures for today", "bible encouragement verses"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Encouraging Bible Verses", href: "/encouraging-bible-verses" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["encouraging bible verses", "daily encouragement scripture", "hope verses"]
    }
  },
  "bible-verses-for-strength": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for strength",
    secondaryKeywords: ["scriptures for strength", "strength bible verses", "god give me strength verse", "verses for hard times"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Strength", href: "/bible-verses-for-strength" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for strength", "strength scriptures", "god strength verse"]
    }
  },
  "bible-verses-for-fear": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for fear",
    secondaryKeywords: ["scripture for fear", "do not fear bible verses", "verses for worry and fear", "fear and faith verses"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Fear", href: "/bible-verses-for-fear" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for fear", "fear scriptures", "anxious and afraid bible verses"]
    }
  },
  "bible-verses-for-anxiety": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for anxiety",
    secondaryKeywords: ["scripture for anxiety", "bible verses for stress", "verses for overthinking", "peace of god verse"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Anxiety", href: "/bible-verses-for-anxiety" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for anxiety", "anxiety scripture", "christian anxiety help"]
    }
  },
  "bible-verses-for-grief": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for grief",
    secondaryKeywords: ["scripture for grief", "bible verses for loss", "comfort verses for mourning", "grief and hope scripture"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Grief", href: "/bible-verses-for-grief" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for grief", "loss scripture", "comfort after loss"]
    }
  },
  "bible-verse-of-the-day": {
    primaryIntent: "devotional",
    mainKeyword: "bible verse of the day",
    secondaryKeywords: ["daily bible verse", "today's bible verse", "daily scripture", "verse of the day with meaning"],
    sectionHeadings: ["Intro", "Scripture reference", "Simple meaning", "Context", "Deeper understanding", "Morning practice", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Daily Verse", href: "/daily-verse" },
      { label: "Bible Verse of the Day", href: "/bible-verse-of-the-day" }
    ],
    article: {
      section: "Daily Verse",
      keywords: ["bible verse of the day", "daily scripture", "daily devotion verse"]
    }
  },
  "daily-scripture-explained": {
    primaryIntent: "devotional",
    mainKeyword: "daily scripture explained",
    secondaryKeywords: ["daily scripture meaning", "daily bible explanation", "scripture explained simply", "daily devotional verse"],
    sectionHeadings: ["Intro", "Scripture reference", "Simple meaning", "Context", "Deeper understanding", "Morning practice", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Daily Verse", href: "/daily-verse" },
      { label: "Daily Scripture Explained", href: "/daily-scripture-explained" }
    ],
    article: {
      section: "Daily Verse",
      keywords: ["daily scripture explained", "daily bible teaching", "scripture for today"]
    }
  },
  "what-is-faith-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "what is faith in the bible",
    secondaryKeywords: ["biblical faith meaning", "faith definition bible", "faith explained simply", "what does faith mean in scripture"],
    sectionHeadings: ["Intro", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "What Is Faith in the Bible", href: "/what-is-faith-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["what is faith in the bible", "faith meaning", "biblical definition of faith"]
    }
  },
  "what-is-grace-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "what is grace in the bible",
    secondaryKeywords: ["grace meaning in bible", "biblical grace definition", "grace explained simply", "meaning of god's grace"],
    sectionHeadings: ["Intro", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "What Is Grace in the Bible", href: "/what-is-grace-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["what is grace in the bible", "grace bible meaning", "undeserved favor"]
    }
  },
  "what-is-sin-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "what is sin in the bible",
    secondaryKeywords: ["sin meaning in bible", "biblical definition of sin", "sin explained simply", "repentance and forgiveness"],
    sectionHeadings: ["Intro", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "What Is Sin in the Bible", href: "/what-is-sin-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["what is sin in the bible", "sin definition", "repentance meaning"]
    }
  },
  "who-was-pontius-pilate": {
    primaryIntent: "informational",
    mainKeyword: "who was pontius pilate",
    secondaryKeywords: ["pontius pilate explained", "pilate in the bible", "jesus trial pilate", "roman governor judea"],
    sectionHeadings: ["Intro", "Plain explanation", "Context", "Deeper understanding", "Common misunderstanding", "Why it matters", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible People & Places", href: "/bible-people-places" },
      { label: "Who Was Pontius Pilate", href: "/who-was-pontius-pilate" }
    ],
    article: {
      section: "Bible People & Places",
      keywords: ["who was pontius pilate", "pilate and jesus", "bible history"]
    }
  },
  "judas-explained": {
    primaryIntent: "informational",
    mainKeyword: "judas explained",
    secondaryKeywords: ["who was judas iscariot", "judas betrayal meaning", "judas in the bible", "why judas betrayed jesus"],
    sectionHeadings: ["Intro", "Plain explanation", "Context", "Deeper understanding", "Why it matters", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible People & Places", href: "/bible-people-places" },
      { label: "Judas Explained", href: "/judas-explained" }
    ],
    article: {
      section: "Bible People & Places",
      keywords: ["judas explained", "judas iscariot", "betrayal in bible"]
    }
  },
  "garden-of-gethsemane-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "garden of gethsemane meaning",
    secondaryKeywords: ["gethsemane explained", "why jesus prayed in gethsemane", "gethsemane bible meaning", "garden of gethsemane context"],
    sectionHeadings: ["Intro", "Plain explanation", "Context", "Deeper understanding", "Why it matters", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible People & Places", href: "/bible-people-places" },
      { label: "Garden of Gethsemane Meaning", href: "/garden-of-gethsemane-meaning" }
    ],
    article: {
      section: "Bible People & Places",
      keywords: ["garden of gethsemane meaning", "gethsemane prayer", "jesus final hours"]
    }
  },
  "proverbs-3-5-6-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "proverbs 3:5-6 meaning",
    secondaryKeywords: ["trust in the lord meaning", "proverbs 3:5-6 explained", "lean not on your own understanding", "he will make your paths straight"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Proverbs 3:5-6 Meaning", href: "/proverbs-3-5-6-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["proverbs 3:5-6 meaning", "trust in god", "bible wisdom"]
    }
  },
  "romans-8-28-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "romans 8:28 meaning",
    secondaryKeywords: ["romans 8:28 explained", "all things work together for good", "romans 8 context", "god works for good"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Romans 8:28 Meaning", href: "/romans-8-28-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["romans 8:28 meaning", "christian hope", "god's purpose"]
    }
  },
  "matthew-11-28-meaning": {
    primaryIntent: "problem-solving",
    mainKeyword: "matthew 11:28 meaning",
    secondaryKeywords: ["come to me all who are weary", "matthew 11:28 explained", "jesus gives rest", "rest for your soul"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Matthew 11:28 Meaning", href: "/matthew-11-28-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["matthew 11:28 meaning", "rest in christ", "weary and burdened"]
    }
  },
  "philippians-4-6-7-meaning": {
    primaryIntent: "problem-solving",
    mainKeyword: "philippians 4:6-7 meaning",
    secondaryKeywords: ["do not be anxious about anything", "philippians 4 explained", "peace of god verse", "prayer and anxiety bible"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Philippians 4:6-7 Meaning", href: "/philippians-4-6-7-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["philippians 4:6-7 meaning", "anxiety and prayer", "peace of god"]
    }
  },
  "bible-verses-for-hope": {
    primaryIntent: "devotional",
    mainKeyword: "bible verses for hope",
    secondaryKeywords: ["hope scriptures", "verses about hope", "scripture for hard times", "hope in suffering bible"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Hope", href: "/bible-verses-for-hope" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for hope", "hope in christ", "encouragement scripture"]
    }
  },
  "bible-verses-for-forgiveness": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for forgiveness",
    secondaryKeywords: ["scripture on forgiveness", "verses about forgiving others", "god forgives verse", "forgiveness in the bible"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Forgiveness", href: "/bible-verses-for-forgiveness" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for forgiveness", "forgive others", "receive god's forgiveness"]
    }
  },
  "bible-verses-for-prayer": {
    primaryIntent: "informational",
    mainKeyword: "bible verses for prayer",
    secondaryKeywords: ["scriptures about prayer", "prayer bible verses", "how to pray bible", "daily prayer scripture"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Prayer", href: "/bible-verses-for-prayer" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for prayer", "prayer guidance", "scripture based prayer"]
    }
  },
  "what-is-salvation-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "what is salvation in the bible",
    secondaryKeywords: ["salvation meaning bible", "how to be saved", "salvation by grace", "biblical salvation explained"],
    sectionHeadings: ["Intro", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "What Is Salvation in the Bible", href: "/what-is-salvation-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["what is salvation in the bible", "saved by grace", "gospel salvation"]
    }
  },
  "what-is-repentance-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "what is repentance in the bible",
    secondaryKeywords: ["repentance meaning", "biblical repentance", "repent and believe", "turn from sin to god"],
    sectionHeadings: ["Intro", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "What Is Repentance in the Bible", href: "/what-is-repentance-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["what is repentance in the bible", "repentance and grace", "turning to god"]
    }
  },
  "who-was-paul-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "who was paul in the bible",
    secondaryKeywords: ["apostle paul explained", "paul conversion", "paul letters", "saul to paul"],
    sectionHeadings: ["Intro", "Plain explanation", "Context", "Deeper understanding", "Common misunderstanding", "Why it matters", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible People & Places", href: "/bible-people-places" },
      { label: "Who Was Paul in the Bible", href: "/who-was-paul-in-the-bible" }
    ],
    article: {
      section: "Bible People & Places",
      keywords: ["who was paul in the bible", "apostle paul", "new testament leader"]
    }
  },
  "psalm-46-1-meaning": {
    primaryIntent: "problem-solving",
    mainKeyword: "psalm 46:1 meaning",
    secondaryKeywords: ["god is our refuge and strength meaning", "psalm 46 explained", "ever-present help in trouble", "psalm 46:1 explained"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Psalm 46:1 Meaning", href: "/psalm-46-1-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["psalm 46:1 meaning", "refuge and strength", "help in trouble verse"]
    }
  },
  "bible-verses-for-depression": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for depression",
    secondaryKeywords: ["scripture for depression", "verses for sadness", "hope in depression bible verses", "christian help for depression"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Depression", href: "/bible-verses-for-depression" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for depression", "depression scripture", "hope in sadness"]
    }
  },
  "bible-verses-for-loneliness": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for loneliness",
    secondaryKeywords: ["scripture for loneliness", "verses for feeling alone", "god is with you verses", "comfort when lonely bible"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Loneliness", href: "/bible-verses-for-loneliness" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for loneliness", "not alone scripture", "god with you"]
    }
  },
  "morning-prayer-scripture": {
    primaryIntent: "devotional",
    mainKeyword: "morning prayer scripture",
    secondaryKeywords: ["morning bible verse", "scripture for the morning", "morning prayer verses", "start the day with scripture"],
    sectionHeadings: ["Intro", "Scripture reference", "Simple meaning", "Context", "Deeper understanding", "Morning practice", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Daily Verse", href: "/daily-verse" },
      { label: "Morning Prayer Scripture", href: "/morning-prayer-scripture" }
    ],
    article: {
      section: "Daily Verse",
      keywords: ["morning prayer scripture", "morning prayer verse", "daily morning bible verse"]
    }
  },
  "night-bible-verse": {
    primaryIntent: "devotional",
    mainKeyword: "night bible verse",
    secondaryKeywords: ["bedtime scripture", "night prayer verse", "evening bible verse", "bible verse before sleep"],
    sectionHeadings: ["Intro", "Scripture reference", "Simple meaning", "Context", "Deeper understanding", "Evening practice", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Daily Verse", href: "/daily-verse" },
      { label: "Night Bible Verse", href: "/night-bible-verse" }
    ],
    article: {
      section: "Daily Verse",
      keywords: ["night bible verse", "bedtime scripture", "peace before sleep"]
    }
  },
  "daily-psalm-explained": {
    primaryIntent: "devotional",
    mainKeyword: "daily psalm explained",
    secondaryKeywords: ["psalm of the day", "daily psalm meaning", "short psalm reflection", "psalm devotional"],
    sectionHeadings: ["Intro", "Scripture reference", "Simple meaning", "Context", "Deeper understanding", "Daily practice", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Daily Verse", href: "/daily-verse" },
      { label: "Daily Psalm Explained", href: "/daily-psalm-explained" }
    ],
    article: {
      section: "Daily Verse",
      keywords: ["daily psalm explained", "daily psalm", "psalm reflection"]
    }
  },
  "what-is-righteousness-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "what is righteousness in the bible",
    secondaryKeywords: ["righteousness meaning bible", "biblical righteousness", "right standing with god", "righteousness explained simply"],
    sectionHeadings: ["Intro", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "What Is Righteousness in the Bible", href: "/what-is-righteousness-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["what is righteousness in the bible", "righteousness definition", "righteousness and faith"]
    }
  },
  "who-was-mary-magdalene": {
    primaryIntent: "informational",
    mainKeyword: "who was mary magdalene",
    secondaryKeywords: ["mary magdalene explained", "mary magdalene in the bible", "women in the gospels", "mary magdalene meaning"],
    sectionHeadings: ["Intro", "Plain explanation", "Context", "Deeper understanding", "Common misunderstanding", "Why it matters", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible People & Places", href: "/bible-people-places" },
      { label: "Who Was Mary Magdalene", href: "/who-was-mary-magdalene" }
    ],
    article: {
      section: "Bible People & Places",
      keywords: ["who was mary magdalene", "mary magdalene bible", "resurrection witness"]
    }
  },
  "who-was-king-david": {
    primaryIntent: "informational",
    mainKeyword: "who was king david",
    secondaryKeywords: ["king david explained", "david in the bible", "david and psalms", "david story summary"],
    sectionHeadings: ["Intro", "Plain explanation", "Context", "Deeper understanding", "Common misunderstanding", "Why it matters", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible People & Places", href: "/bible-people-places" },
      { label: "Who Was King David", href: "/who-was-king-david" }
    ],
    article: {
      section: "Bible People & Places",
      keywords: ["who was king david", "david bible story", "king david summary"]
    }
  },
  "what-is-the-sermon-on-the-mount": {
    primaryIntent: "informational",
    mainKeyword: "what is the sermon on the mount",
    secondaryKeywords: ["sermon on the mount explained", "matthew 5-7 summary", "jesus teaching summary", "sermon on the mount meaning"],
    sectionHeadings: ["Intro", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "What Is the Sermon on the Mount", href: "/what-is-the-sermon-on-the-mount" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["what is the sermon on the mount", "sermon on the mount", "matthew 5 7"]
    }
  }
};
