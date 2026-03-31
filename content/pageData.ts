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
  "psalm-91-1-2-meaning": {
    primaryIntent: "problem-solving",
    mainKeyword: "psalm 91:1-2 meaning",
    secondaryKeywords: ["psalm 91 explained", "shelter of the most high meaning", "psalm 91 refuge", "psalm 91 trust in god"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Psalm 91:1-2 Meaning", href: "/psalm-91-1-2-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["psalm 91:1-2 meaning", "god as refuge", "shelter of the most high"]
    }
  },
  "isaiah-40-31-meaning": {
    primaryIntent: "problem-solving",
    mainKeyword: "isaiah 40:31 meaning",
    secondaryKeywords: ["those who hope in the lord meaning", "renew their strength verse", "isaiah 40 explained", "wings like eagles meaning"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Isaiah 40:31 Meaning", href: "/isaiah-40-31-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["isaiah 40:31 meaning", "renewed strength", "hope in the lord"]
    }
  },
  "john-14-6-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 14:6 meaning",
    secondaryKeywords: ["i am the way the truth and the life meaning", "john 14:6 explained", "john 14:6 context", "way truth life verse"],
    sectionHeadings: ["Quick answer", "Verse text", "Key difference", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 14:6 Meaning", href: "/john-14-6-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 14:6 meaning", "way truth life", "jesus the only way"]
    }
  },
  "john-8-12-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 8:12 meaning",
    secondaryKeywords: ["i am the light of the world meaning", "john 8:12 explained", "john 8:12 context", "light of life verse"],
    sectionHeadings: ["Quick answer", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 8:12 Meaning", href: "/john-8-12-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 8:12 meaning", "light of the world", "light of life"]
    }
  },
  "isaiah-60-22-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "isaiah 60:22 meaning",
    secondaryKeywords: ["at the right time i the lord will make it happen meaning", "isaiah 60:22 explained", "isaiah 60:22 context", "god timing bible verse"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Isaiah 60:22 Meaning", href: "/isaiah-60-22-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["isaiah 60:22 meaning", "god timing", "in its time i will do this swiftly"]
    }
  },
  "psalm-46-10-meaning": {
    primaryIntent: "devotional",
    mainKeyword: "psalm 46:10 meaning",
    secondaryKeywords: ["be still and know that i am god meaning", "psalm 46:10 explained", "psalm 46:10 context", "be still verse meaning"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Psalm 46:10 Meaning", href: "/psalm-46-10-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["psalm 46:10 meaning", "be still and know", "trusting god in chaos"]
    }
  },
  "romans-3-23-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "romans 3:23 meaning",
    secondaryKeywords: ["all have sinned meaning", "romans 3:23 explained", "romans 3:23 context", "fall short of the glory of god"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Romans 3:23 Meaning", href: "/romans-3-23-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["romans 3:23 meaning", "all have sinned", "fall short of god's glory"]
    }
  },
  "romans-5-8-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "romans 5:8 meaning",
    secondaryKeywords: ["while we were still sinners christ died for us meaning", "romans 5:8 explained", "romans 5:8 context", "god demonstrates his love verse"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Romans 5:8 Meaning", href: "/romans-5-8-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["romans 5:8 meaning", "god demonstrates his love", "christ died for us"]
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
  "bible-verses-for-peace": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for peace",
    secondaryKeywords: ["peace scriptures", "verses about peace", "anxiety and peace bible verses", "god's peace verse"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "Internal links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Peace", href: "/bible-verses-for-peace" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for peace", "peace in christ", "calm anxious mind scripture"]
    }
  },
  "bible-verses-for-guidance": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for guidance",
    secondaryKeywords: ["scripture for guidance", "verses for decision making", "god guide me verse", "bible direction verses"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "Internal links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Guidance", href: "/bible-verses-for-guidance" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for guidance", "decision making scripture", "god's direction"]
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
  },
  "what-is-justification-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "what is justification in the bible",
    secondaryKeywords: ["justification meaning bible", "justified by faith", "biblical justification", "romans justification"],
    sectionHeadings: ["Intro", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "What Is Justification in the Bible", href: "/what-is-justification-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["what is justification in the bible", "justified by faith", "accepted by god"]
    }
  },
  "john-3-17-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 3:17 meaning",
    secondaryKeywords: ["john 3:17 explained", "did jesus come to condemn", "john 3:17 context", "john 3:16 and 3:17"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 3:17 Meaning", href: "/john-3-17-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 3:17 meaning", "jesus came to save", "gospel grace"]
    }
  },
  "john-11-25-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 11:25 meaning",
    secondaryKeywords: ["i am the resurrection and the life meaning", "john 11:25 explained", "john 11:25 context", "hope after loss bible verse"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 11:25 Meaning", href: "/john-11-25-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 11:25 meaning", "resurrection and life", "grief and hope"]
    }
  },
  "john-11-35-meaning": {
    primaryIntent: "devotional",
    mainKeyword: "john 11:35 meaning",
    secondaryKeywords: ["jesus wept meaning", "john 11:35 explained", "shortest verse in the bible meaning", "why did jesus weep"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 11:35 Meaning", href: "/john-11-35-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 11:35 meaning", "jesus wept", "grief in the bible"]
    }
  },
  "bible-verses-about-trusting-god": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses about trusting god",
    secondaryKeywords: ["trust god scriptures", "verses about trusting god in hard times", "trust in the lord bible verses", "scripture on relying on god"],
    sectionHeadings: [
      "Intro",
      "Verse groups",
      "7-day trust plan",
      "Context",
      "Deeper understanding",
      "Common misunderstanding",
      "Real-life takeaway",
      "FAQ",
      "Final reflection"
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses About Trusting God", href: "/bible-verses-about-trusting-god" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses about trusting god", "trusting god in hard times", "relying on god"]
    }
  },
  "bible-verses-about-faith-in-hard-times": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses about faith in hard times",
    secondaryKeywords: ["faith scriptures for hard times", "bible verses when faith is weak", "scriptures for difficult seasons", "keeping faith during suffering"],
    sectionHeadings: [
      "Intro",
      "Verse groups",
      "14-day faith plan",
      "Context",
      "Deeper understanding",
      "Common misunderstanding",
      "Real-life takeaway",
      "FAQ",
      "Final reflection"
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses About Faith in Hard Times", href: "/bible-verses-about-faith-in-hard-times" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses about faith in hard times", "faith in suffering", "resilient faith"]
    }
  },
  "romans-8-31-meaning": {
    primaryIntent: "devotional",
    mainKeyword: "romans 8:31 meaning",
    secondaryKeywords: ["if god is for us who can be against us meaning", "romans 8:31 explained", "romans 8:31 context", "romans 8 encouragement"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Romans 8:31 Meaning", href: "/romans-8-31-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["romans 8:31 meaning", "if god is for us", "confidence in god"]
    }
  },
  "isaiah-40-8-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "isaiah 40:8 meaning",
    secondaryKeywords: ["the word of our god endures forever meaning", "isaiah 40:8 explained", "isaiah 40:8 context", "god's word endures"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Isaiah 40:8 Meaning", href: "/isaiah-40-8-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["isaiah 40:8 meaning", "god's word endures forever", "lasting truth"]
    }
  },
  "john-1-1-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 1:1 meaning",
    secondaryKeywords: ["john 1:1 explained", "the word was god meaning", "john 1:1 context", "in the beginning was the word"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 1:1 Meaning", href: "/john-1-1-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 1:1 meaning", "the word was god", "jesus divinity"]
    }
  },
  "john-10-10-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 10:10 meaning",
    secondaryKeywords: ["john 10:10 explained", "life to the full meaning", "thief comes to steal and destroy", "john 10:10 context"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 10:10 Meaning", href: "/john-10-10-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 10:10 meaning", "abundant life in christ", "good shepherd teaching"]
    }
  },
  "john-16-33-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 16:33 meaning",
    secondaryKeywords: ["john 16:33 explained", "take heart i have overcome the world meaning", "john 16:33 context", "peace in trouble bible verse"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 16:33 Meaning", href: "/john-16-33-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 16:33 meaning", "peace in christ", "jesus overcame the world"]
    }
  },
  "john-20-29-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 20:29 meaning",
    secondaryKeywords: ["blessed are those who have not seen and yet have believed meaning", "john 20:29 explained", "faith without seeing", "thomas doubt bible"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 20:29 Meaning", href: "/john-20-29-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 20:29 meaning", "faith without seeing", "thomas and jesus"]
    }
  },
  "john-19-30-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 19:30 meaning",
    secondaryKeywords: ["it is finished meaning", "john 19:30 explained", "finished work of christ verse", "john 19:30 context"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 19:30 Meaning", href: "/john-19-30-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 19:30 meaning", "it is finished meaning", "finished work of christ"]
    }
  },
  "john-3-36-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 3:36 meaning",
    secondaryKeywords: ["whoever believes in the son has eternal life meaning", "john 3:36 explained", "john 3:36 context", "john 3:36 eternal life"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 3:36 Meaning", href: "/john-3-36-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 3:36 meaning", "believes in the son", "eternal life in christ"]
    }
  },
  "romans-10-9-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "romans 10:9 meaning",
    secondaryKeywords: ["confess with your mouth believe in your heart meaning", "romans 10:9 explained", "romans 10:9 salvation", "jesus is lord meaning"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Romans 10:9 Meaning", href: "/romans-10-9-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["romans 10:9 meaning", "confess jesus is lord", "belief and confession"]
    }
  },
  "bible-verses-for-healing-from-sickness": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for healing from sickness",
    secondaryKeywords: ["scriptures for sickness recovery", "bible verses for illness", "prayer verses for healing sickness", "verses for medical waiting"],
    sectionHeadings: [
      "Intro",
      "Verse groups",
      "Illness prayer rhythm",
      "Context",
      "Deeper understanding",
      "Common misunderstanding",
      "Real-life takeaway",
      "FAQ",
      "Final reflection"
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Healing from Sickness", href: "/bible-verses-for-healing-from-sickness" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for healing from sickness", "illness recovery scripture", "healing prayer for sickness"]
    }
  },
  "bible-verses-about-hope-in-hard-times": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses about hope in hard times",
    secondaryKeywords: ["hope scriptures for hard times", "bible verses for difficult seasons", "encouragement verses for suffering", "hope during trials"],
    sectionHeadings: [
      "Intro",
      "Verse groups",
      "Hard-season hope plan",
      "Context",
      "Deeper understanding",
      "Common misunderstanding",
      "Real-life takeaway",
      "FAQ",
      "Final reflection"
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses About Hope in Hard Times", href: "/bible-verses-about-hope-in-hard-times" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses about hope in hard times", "hope in suffering", "difficult season encouragement"]
    }
  },
  "bible-verses-about-love-and-marriage": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses about love and marriage",
    secondaryKeywords: ["marriage scriptures", "bible verses for couples", "biblical love in marriage", "verses for marriage strength"],
    sectionHeadings: ["Search-intent intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses About Love and Marriage", href: "/bible-verses-about-love-and-marriage" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses about love and marriage", "marriage scripture", "covenant love verses"]
    }
  },
  "what-is-sanctification-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "what is sanctification in the bible",
    secondaryKeywords: ["sanctification meaning bible", "sanctification explained", "difference between justification and sanctification", "spiritual growth meaning"],
    sectionHeadings: ["Intro", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "What Is Sanctification in the Bible", href: "/what-is-sanctification-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["what is sanctification in the bible", "sanctification meaning", "spiritual growth"]
    }
  },
  "who-was-moses-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "who was moses in the bible",
    secondaryKeywords: ["moses explained", "moses in exodus", "moses story summary", "what did moses do in the bible"],
    sectionHeadings: ["Intro", "Plain explanation", "Context", "Deeper understanding", "Common misunderstanding", "Why it matters", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible People & Places", href: "/bible-people-places" },
      { label: "Who Was Moses in the Bible", href: "/who-was-moses-in-the-bible" }
    ],
    article: {
      section: "Bible People & Places",
      keywords: ["who was moses in the bible", "moses story", "exodus leadership"]
    }
  },
  "john-3-16-vs-john-3-17-explained": {
    primaryIntent: "interpretive",
    mainKeyword: "john 3:16 vs john 3:17",
    secondaryKeywords: ["difference between john 3:16 and 3:17", "john 3 gospel summary", "john 3:16 vs 3:17 explained", "john 3 context meaning"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 3:16 vs John 3:17 Explained", href: "/john-3-16-vs-john-3-17-explained" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 3:16 vs john 3:17", "john 3 comparison", "gospel meaning"]
    }
  },
  "romans-6-23-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "romans 6:23 meaning",
    secondaryKeywords: ["wages of sin is death meaning", "romans 6:23 explained", "gift of god eternal life meaning", "romans 6:23 context"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Romans 6:23 Meaning", href: "/romans-6-23-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["romans 6:23 meaning", "wages of sin", "gift of eternal life"]
    }
  },
  "bible-verses-for-overthinking": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for overthinking",
    secondaryKeywords: ["scriptures for racing thoughts", "bible verses for overthinking at night", "verses for mental peace", "peace of mind verses"],
    sectionHeadings: ["Search-intent intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Overthinking", href: "/bible-verses-for-overthinking" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for overthinking", "racing thoughts scripture", "peace of mind bible"]
    }
  },
  "bible-verses-for-work-stress": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for work stress",
    secondaryKeywords: ["scripture for job stress", "verses for pressure at work", "peace at work bible verses", "bible for work anxiety"],
    sectionHeadings: ["Search-intent intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Work Stress", href: "/bible-verses-for-work-stress" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for work stress", "job pressure scripture", "work anxiety bible"]
    }
  },
  "bible-verses-for-decision-making": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for decision making",
    secondaryKeywords: ["scripture for hard decisions", "verses about god's direction", "discernment bible verses", "bible for big decisions"],
    sectionHeadings: ["Search-intent intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Decision Making", href: "/bible-verses-for-decision-making" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for decision making", "godly decisions", "wisdom scriptures"]
    }
  },
  "bible-verses-for-when-prayers-feel-unanswered": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for unanswered prayer",
    secondaryKeywords: ["scripture for waiting on god", "verses when god feels silent", "bible verses for delayed answers", "waiting in prayer bible"],
    sectionHeadings: ["Intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for When Prayers Feel Unanswered", href: "/bible-verses-for-when-prayers-feel-unanswered" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for unanswered prayer", "waiting on god scripture", "when prayer feels unanswered"]
    }
  },
  "faith-vs-trust-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "faith vs trust in the bible",
    secondaryKeywords: ["difference between faith and trust scripture", "biblical faith and trust", "faith and trust explained", "trusting god vs faith"],
    sectionHeadings: ["Quick distinction", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "Faith vs Trust in the Bible", href: "/faith-vs-trust-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["faith vs trust in the bible", "faith and trust meaning", "biblical trust"]
    }
  },
  "grace-vs-mercy-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "grace vs mercy in the bible",
    secondaryKeywords: ["difference between grace and mercy", "grace and mercy meaning", "biblical grace vs mercy", "god's grace and mercy"],
    sectionHeadings: ["Quick distinction", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "Grace vs Mercy in the Bible", href: "/grace-vs-mercy-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["grace vs mercy in the bible", "difference grace mercy", "biblical mercy"]
    }
  },
  "justification-vs-sanctification-explained": {
    primaryIntent: "informational",
    mainKeyword: "justification vs sanctification",
    secondaryKeywords: ["difference between justification and sanctification", "justification and sanctification explained", "salvation process bible", "sanctification vs justification"],
    sectionHeadings: ["Quick distinction", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "Justification vs Sanctification Explained", href: "/justification-vs-sanctification-explained" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["justification vs sanctification", "sanctification explained", "justification meaning"]
    }
  },
  "what-is-forgiveness-in-the-bible": {
    primaryIntent: "informational",
    mainKeyword: "what is forgiveness in the bible",
    secondaryKeywords: ["biblical forgiveness meaning", "forgive as christ forgave", "forgiveness scripture explained", "christian forgiveness definition"],
    sectionHeadings: ["Quick definition", "Definition", "Simple explanation", "Biblical context", "Deeper understanding", "Common misunderstanding", "Related verses", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" },
      { label: "What Is Forgiveness in the Bible", href: "/what-is-forgiveness-in-the-bible" }
    ],
    article: {
      section: "Bible Terms",
      keywords: ["what is forgiveness in the bible", "biblical forgiveness", "christian forgiveness"]
    }
  },
  "john-6-35-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 6:35 meaning",
    secondaryKeywords: ["john 6:35 explained", "bread of life meaning", "john 6:35 context", "jesus satisfies soul verse"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 6:35 Meaning", href: "/john-6-35-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 6:35 meaning", "bread of life", "spiritual satisfaction in christ"]
    }
  },
  "john-15-5-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "john 15:5 meaning",
    secondaryKeywords: ["john 15:5 explained", "abide in me meaning", "john 15:5 context", "vine and branches meaning"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "John 15:5 Meaning", href: "/john-15-5-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["john 15:5 meaning", "abide in christ", "vine and branches"]
    }
  },
  "romans-1-16-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "romans 1:16 meaning",
    secondaryKeywords: ["romans 1:16 explained", "not ashamed of the gospel meaning", "romans 1:16 context", "gospel power verse"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Romans 1:16 Meaning", href: "/romans-1-16-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["romans 1:16 meaning", "not ashamed of the gospel", "gospel power"]
    }
  },
  "romans-8-1-meaning": {
    primaryIntent: "interpretive",
    mainKeyword: "romans 8:1 meaning",
    secondaryKeywords: ["romans 8:1 explained", "no condemnation meaning", "romans 8:1 context", "freedom in christ verse"],
    sectionHeadings: ["Intro", "Verse text", "Simple meaning", "Context", "Deeper understanding", "Common misunderstanding", "Practical takeaway", "Related verses and links", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" },
      { label: "Romans 8:1 Meaning", href: "/romans-8-1-meaning" }
    ],
    article: {
      section: "Verse Meanings",
      keywords: ["romans 8:1 meaning", "no condemnation in christ", "assurance and grace"]
    }
  },
  "bible-verses-for-worry": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for worry",
    secondaryKeywords: ["scripture for worry", "verses for constant concern", "bible verses for worrying mind", "god cares for your worries verse"],
    sectionHeadings: ["Search-intent intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Worry", href: "/bible-verses-for-worry" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for worry", "scripture for worry", "constant concern bible help"]
    }
  },
  "bible-verses-for-panic-attacks": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for panic attacks",
    secondaryKeywords: ["scripture for panic attacks", "verses for sudden fear", "calming bible verses for panic", "god help in panic moments"],
    sectionHeadings: ["Search-intent intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Panic Attacks", href: "/bible-verses-for-panic-attacks" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for panic attacks", "acute fear scripture", "panic grounding verses"]
    }
  },
  "bible-verses-for-burnout": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for burnout",
    secondaryKeywords: ["scripture for burnout", "verses for exhaustion", "bible verses for emotional fatigue", "rest in god scriptures"],
    sectionHeadings: ["Search-intent intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Burnout", href: "/bible-verses-for-burnout" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for burnout", "exhaustion scripture", "renewed strength in god"]
    }
  },
  "bible-verses-for-family-problems": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for family problems",
    secondaryKeywords: ["scripture for family conflict", "verses for difficult family relationships", "peace in family bible verses", "bible for family healing"],
    sectionHeadings: ["Search-intent intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Family Problems", href: "/bible-verses-for-family-problems" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for family problems", "family conflict scripture", "family healing verses"]
    }
  },
  "bible-verses-for-financial-stress": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for financial stress",
    secondaryKeywords: ["scripture for money stress", "verses for provision", "bible verses about money worry", "financial anxiety scripture"],
    sectionHeadings: ["Search-intent intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Financial Stress", href: "/bible-verses-for-financial-stress" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for financial stress", "money worry scriptures", "god provides verses"]
    }
  },
  "bible-verses-for-feeling-lost-in-life": {
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses for feeling lost in life",
    secondaryKeywords: ["scripture for feeling lost", "verses for direction in life", "bible verses for purpose and clarity", "guidance when confused"],
    sectionHeadings: ["Search-intent intro", "Verse groups", "Practical summary", "Context", "Deeper understanding", "Common misunderstanding", "Real-life takeaway", "FAQ", "Final reflection"],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" },
      { label: "Bible Verses for Feeling Lost in Life", href: "/bible-verses-for-feeling-lost-in-life" }
    ],
    article: {
      section: "Verses by Need",
      keywords: ["bible verses for feeling lost in life", "direction scriptures", "purpose and guidance bible verses"]
    }
  }
};
