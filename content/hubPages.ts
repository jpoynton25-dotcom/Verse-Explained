import type { Faq, SearchIntent } from "@/content/types";

export type HubSchemaType = "WebPage" | "CollectionPage";

export type HubGroup = {
  heading: string;
  description: string;
  slugs: string[];
};

export type RelatedHub = {
  title: string;
  href: string;
  description: string;
};

export type HubPageData = {
  path: string;
  seoTitle: string;
  metaDescription: string;
  primaryIntent: SearchIntent;
  mainKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  intro: string;
  summary: string;
  sectionHeadings: string[];
  startHereSlugs: string[];
  childGroups: HubGroup[];
  faqs: Faq[];
  breadcrumb: Array<{ label: string; href: string }>;
  schemaType: HubSchemaType;
  relatedHubs: RelatedHub[];
};

export const hubPageData: Record<string, HubPageData> = {
  "/verse-meanings": {
    path: "/verse-meanings",
    seoTitle: "Bible Verse Meanings Explained Simply | Verse Explained",
    metaDescription:
      "Explore Bible verse meanings in plain English with context, practical takeaways, FAQs, and related verses for everyday life.",
    primaryIntent: "interpretive",
    mainKeyword: "bible verse meanings",
    secondaryKeywords: [
      "verse meaning explained",
      "popular bible verse meaning",
      "john 3:16 meaning",
      "jeremiah 29:11 meaning",
      "isaiah 41:10 meaning",
      "psalm 23 meaning",
      "scripture explained simply"
    ],
    h1: "Bible verse meanings explained simply",
    intro:
      "This hub helps you understand popular Bible verses in plain language. Each page includes verse text, context, common misunderstandings, and practical meaning for real life.",
    summary:
      "If you are searching for a specific verse meaning, start with the foundational passages below. Then use the related links on each page to keep building context.",
    sectionHeadings: ["Start here", "Popular verse meaning pages", "More verse meanings", "Frequently asked questions"],
    startHereSlugs: ["john-3-16-meaning", "isaiah-41-10-meaning", "psalm-46-1-meaning", "psalm-23-meaning", "psalm-91-1-2-meaning"],
    childGroups: [
      {
        heading: "Most searched verse meanings",
        description: "High-intent pages where readers usually begin.",
        slugs: ["john-3-16-meaning", "jeremiah-29-11-meaning", "isaiah-41-10-meaning", "proverbs-3-5-6-meaning"]
      },
      {
        heading: "Comfort and guidance passages",
        description: "Verses often searched in seasons of stress, loss, and uncertainty.",
        slugs: [
          "romans-8-18-meaning",
          "romans-8-28-meaning",
          "matthew-11-28-meaning",
          "philippians-4-6-7-meaning",
          "isaiah-40-31-meaning",
          "psalm-46-1-meaning",
          "psalm-91-1-2-meaning",
          "psalm-23-meaning",
          "the-lord-is-my-shepherd-meaning"
        ]
      },
      {
        heading: "Gospel and salvation passages",
        description: "Core verses that explain belief, salvation, and Christ's finished work.",
        slugs: [
          "john-14-6-meaning",
          "john-19-30-meaning",
          "john-3-36-meaning",
          "john-3-16-vs-john-3-17-explained",
          "romans-6-23-meaning",
          "romans-10-9-meaning",
          "john-3-16-meaning",
          "john-3-17-meaning"
        ]
      }
    ],
    faqs: [
      {
        question: "How do I understand a Bible verse correctly?",
        answer:
          "Start with context. Look at who is speaking, who is being addressed, and what comes before and after the verse."
      },
      {
        question: "Why do verse meanings differ online?",
        answer:
          "Some pages isolate a verse from context. Verse Explained prioritizes context, clear wording, and practical application."
      },
      {
        question: "Where should I start if I am new to Bible study?",
        answer:
          "Begin with John 3:16, Psalm 23, and Isaiah 41:10, then use related links to continue through connected themes."
      }
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verse Meanings", href: "/verse-meanings" }
    ],
    schemaType: "CollectionPage",
    relatedHubs: [
      {
        title: "Verses by Need",
        href: "/verses-by-need",
        description: "Find verses by anxiety, fear, grief, healing, and strength."
      },
      {
        title: "Bible Terms",
        href: "/bible-terms",
        description: "Learn foundational terms like faith, grace, and sin."
      },
      {
        title: "Daily Verse",
        href: "/daily-verse",
        description: "Build a short daily scripture routine with practical reflection."
      }
    ]
  },
  "/verses-by-need": {
    path: "/verses-by-need",
    seoTitle: "Bible Verses by Need: Anxiety, Fear, Grief, Strength",
    metaDescription:
      "Browse Bible verses by need with simple explanations for anxiety, fear, grief, healing, encouragement, and strength.",
    primaryIntent: "problem-solving",
    mainKeyword: "bible verses by need",
    secondaryKeywords: [
      "bible verses for anxiety",
      "bible verses for fear",
      "bible verses for grief",
      "bible verses for strength",
      "healing scriptures",
      "encouraging bible verses",
      "scripture for hard times"
    ],
    h1: "Bible verses by need for real-life struggles",
    intro:
      "Use this hub when you need scripture for a specific situation. Each page groups relevant verses and explains them in clear, practical language.",
    summary:
      "Choose the need that matches your current season, then follow internal links to verse meaning pages for deeper context and interpretation.",
    sectionHeadings: ["Start here", "Emotional support", "Strength and encouragement", "Healing and recovery", "Frequently asked questions"],
    startHereSlugs: ["bible-verses-for-anxiety", "bible-verses-for-strength", "bible-verses-for-depression", "encouraging-bible-verses", "bible-verses-for-peace"],
    childGroups: [
      {
        heading: "Emotional support",
        description: "Scripture collections for fear, anxiety, and grief.",
        slugs: [
          "bible-verses-for-fear",
          "bible-verses-for-anxiety",
          "bible-verses-for-overthinking",
          "bible-verses-for-peace",
          "bible-verses-for-grief",
          "bible-verses-for-depression",
          "bible-verses-for-loneliness"
        ]
      },
      {
        heading: "Strength and encouragement",
        description: "Verses for resilience, courage, and daily encouragement.",
        slugs: [
          "bible-verses-for-strength",
          "encouraging-bible-verses",
          "bible-verses-for-hope",
          "bible-verses-for-guidance",
          "bible-verses-for-work-stress",
          "bible-verses-for-decision-making",
          "bible-verses-for-when-prayers-feel-unanswered"
        ]
      },
      {
        heading: "Healing and restoration",
        description: "Passages often used in physical, emotional, and spiritual recovery.",
        slugs: ["healing-scriptures", "bible-verses-for-forgiveness", "bible-verses-for-prayer"]
      }
    ],
    faqs: [
      {
        question: "How do I choose the right verses for my situation?",
        answer:
          "Start with your immediate need, then read the grouped verses slowly and pray through one or two passages each day."
      },
      {
        question: "Are these pages only for crises?",
        answer:
          "No. They are useful for preparation, daily encouragement, and steady spiritual growth."
      },
      {
        question: "Should I only read topical lists?",
        answer:
          "Topical lists are helpful for starting, but continue into full verse meaning pages to understand deeper context."
      }
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Verses by Need", href: "/verses-by-need" }
    ],
    schemaType: "CollectionPage",
    relatedHubs: [
      {
        title: "Verse Meanings",
        href: "/verse-meanings",
        description: "Go deeper into context and interpretation of popular passages."
      },
      {
        title: "Daily Verse",
        href: "/daily-verse",
        description: "Create a simple daily rhythm after finding topical scriptures."
      },
      {
        title: "Bible Terms",
        href: "/bible-terms",
        description: "Understand key terms that appear in many need-based verses."
      }
    ]
  },
  "/daily-verse": {
    path: "/daily-verse",
    seoTitle: "Daily Bible Verse and Daily Scripture Explained",
    metaDescription:
      "Read daily Bible verses with simple explanation, context, and practical reflection for a consistent scripture routine.",
    primaryIntent: "devotional",
    mainKeyword: "daily bible verse",
    secondaryKeywords: [
      "bible verse of the day",
      "daily scripture explained",
      "today's scripture",
      "morning bible verse",
      "short daily devotion",
      "daily verse meaning"
    ],
    h1: "Daily verse and scripture explained simply",
    intro:
      "This hub is designed for daily consistency. Use it to read one passage, understand it clearly, and apply it in one practical step.",
    summary:
      "A short, repeatable scripture rhythm is often more sustainable than a complex plan. Start with one page, one prayer, and one action.",
    sectionHeadings: ["Start here", "Daily scripture pages", "Morning and evening routines", "Frequently asked questions"],
    startHereSlugs: ["bible-verse-of-the-day", "morning-prayer-scripture", "daily-scripture-explained"],
    childGroups: [
      {
        heading: "Core daily pages",
        description: "Practical pages for daily reading, morning starts, evening peace, and psalm reflection.",
        slugs: [
          "bible-verse-of-the-day",
          "daily-scripture-explained",
          "morning-prayer-scripture",
          "night-bible-verse",
          "daily-psalm-explained"
        ]
      }
    ],
    faqs: [
      {
        question: "How much time do I need for daily scripture?",
        answer:
          "Even five to ten focused minutes can build a strong daily habit when done consistently."
      },
      {
        question: "What should I do after reading a daily verse?",
        answer:
          "Summarize the verse in one sentence, pray it personally, and choose one action for your day."
      },
      {
        question: "Can beginners use these pages?",
        answer:
          "Yes. The language is simple and practical, with context for readers at any stage."
      }
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Daily Verse", href: "/daily-verse" }
    ],
    schemaType: "CollectionPage",
    relatedHubs: [
      {
        title: "Verses by Need",
        href: "/verses-by-need",
        description: "Apply daily reading to specific challenges like anxiety or grief."
      },
      {
        title: "Verse Meanings",
        href: "/verse-meanings",
        description: "Study high-interest verses in deeper context."
      },
      {
        title: "Bible Terms",
        href: "/bible-terms",
        description: "Learn key words that appear in daily scripture reading."
      }
    ]
  },
  "/bible-terms": {
    path: "/bible-terms",
    seoTitle: "Bible Terms Explained: Faith, Grace, and Sin",
    metaDescription:
      "Understand Bible terms in plain English with clear definitions, context, key verses, and practical application.",
    primaryIntent: "informational",
    mainKeyword: "bible terms explained",
    secondaryKeywords: [
      "what is faith in the bible",
      "what is grace in the bible",
      "what is sin in the bible",
      "bible definitions",
      "biblical terms meaning",
      "christian terms explained",
      "scripture words explained"
    ],
    h1: "Bible terms explained in plain English",
    intro:
      "This hub defines common Bible terms without jargon. Each page explains meaning, context, and why the term matters in everyday faith.",
    summary:
      "If a verse feels unclear, the missing piece is often vocabulary. Learn core terms first, then revisit verse meaning pages with clearer understanding.",
    sectionHeadings: ["Start here", "Core terms", "Frequently asked questions"],
    startHereSlugs: ["what-is-faith-in-the-bible", "what-is-grace-in-the-bible", "what-is-forgiveness-in-the-bible"],
    childGroups: [
      {
        heading: "Foundational terms",
        description: "Core concepts used throughout scripture and Christian teaching.",
        slugs: [
          "what-is-faith-in-the-bible",
          "what-is-grace-in-the-bible",
          "what-is-sin-in-the-bible",
          "what-is-forgiveness-in-the-bible",
          "what-is-salvation-in-the-bible",
          "what-is-repentance-in-the-bible",
          "what-is-righteousness-in-the-bible",
          "what-is-justification-in-the-bible",
          "what-is-sanctification-in-the-bible",
          "faith-vs-trust-in-the-bible",
          "grace-vs-mercy-in-the-bible",
          "justification-vs-sanctification-explained",
          "what-is-the-sermon-on-the-mount"
        ]
      }
    ],
    faqs: [
      {
        question: "Why are Bible terms important for understanding scripture?",
        answer:
          "Key terms carry theological meaning. Clear definitions help readers avoid confusion and interpret verses more accurately."
      },
      {
        question: "Are these definitions denominational?",
        answer:
          "The pages use broad, non-denominational wording focused on core biblical meaning and practical clarity."
      },
      {
        question: "Where should I go after learning a term?",
        answer:
          "Use related verse meaning pages to see how the term functions in real passages and daily application."
      }
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible Terms", href: "/bible-terms" }
    ],
    schemaType: "CollectionPage",
    relatedHubs: [
      {
        title: "Verse Meanings",
        href: "/verse-meanings",
        description: "Apply term definitions directly to widely searched passages."
      },
      {
        title: "Daily Verse",
        href: "/daily-verse",
        description: "Practice new terms in short daily scripture reflection."
      },
      {
        title: "Bible People & Places",
        href: "/bible-people-places",
        description: "Add historical context by learning key people and settings."
      }
    ]
  },
  "/bible-people-places": {
    path: "/bible-people-places",
    seoTitle: "Bible People and Places Explained Simply",
    metaDescription:
      "Learn key Bible people and places in plain English with context, significance, and related scripture links.",
    primaryIntent: "informational",
    mainKeyword: "bible people and places explained",
    secondaryKeywords: [
      "who was pontius pilate",
      "judas explained",
      "garden of gethsemane meaning",
      "bible characters explained",
      "bible places meaning",
      "new testament people",
      "bible context guide"
    ],
    h1: "Bible people and places explained",
    intro:
      "This hub explains important Bible figures and locations in plain language so you can read scripture with better historical and narrative context.",
    summary:
      "Understanding people and places clarifies why events happened, what choices meant, and how passages connect across the Bible story.",
    sectionHeadings: ["Start here", "People pages", "Place pages", "Frequently asked questions"],
    startHereSlugs: ["who-was-pontius-pilate", "garden-of-gethsemane-meaning"],
    childGroups: [
      {
        heading: "People in the passion narratives",
        description: "Key individuals connected to Jesus' final hours.",
        slugs: ["who-was-pontius-pilate", "judas-explained", "who-was-paul-in-the-bible", "who-was-mary-magdalene"]
      },
      {
        heading: "Leaders and worship voices",
        description: "People who shaped biblical leadership and worship tradition.",
        slugs: ["who-was-king-david"]
      },
      {
        heading: "Places with major significance",
        description: "Locations that shape meaning in crucial Gospel scenes.",
        slugs: ["garden-of-gethsemane-meaning"]
      }
    ],
    faqs: [
      {
        question: "Why study Bible people and places?",
        answer:
          "They provide context for decisions, events, and themes that appear throughout scripture."
      },
      {
        question: "Are these pages historical or devotional?",
        answer:
          "They are both. Each page gives context and explains practical relevance for modern readers."
      },
      {
        question: "How do I connect these pages to verse study?",
        answer:
          "Use related links to move from people/place pages into verse meaning and Bible term pages."
      }
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Bible People & Places", href: "/bible-people-places" }
    ],
    schemaType: "CollectionPage",
    relatedHubs: [
      {
        title: "Verse Meanings",
        href: "/verse-meanings",
        description: "Read major verses with context and practical interpretation."
      },
      {
        title: "Bible Terms",
        href: "/bible-terms",
        description: "Clarify vocabulary found in people and place narratives."
      },
      {
        title: "Verses by Need",
        href: "/verses-by-need",
        description: "Apply insights to everyday emotional and spiritual needs."
      }
    ]
  },
  "/about": {
    path: "/about",
    seoTitle: "About Verse Explained | Bible Verses Explained Simply",
    metaDescription:
      "Learn the mission behind Verse Explained: clear, practical, non-denominational Bible verse explanations for everyday life.",
    primaryIntent: "informational",
    mainKeyword: "about verse explained",
    secondaryKeywords: [
      "verse explained mission",
      "bible verses explained simply",
      "non denominational bible explanations",
      "plain english scripture explanations",
      "christian bible study resource"
    ],
    h1: "About Verse Explained",
    intro:
      "Verse Explained exists to help readers understand Bible verses in simple, clear language without unnecessary jargon or complexity.",
    summary:
      "Our approach is practical and non-denominational: explain the verse, provide context, highlight misunderstandings, and offer a real-life takeaway.",
    sectionHeadings: ["Mission", "How to use this site", "Start here", "Frequently asked questions"],
    startHereSlugs: ["john-3-16-meaning", "bible-verses-for-anxiety", "what-is-faith-in-the-bible"],
    childGroups: [
      {
        heading: "Start with these pages",
        description: "A practical path for new readers of Verse Explained.",
        slugs: ["john-3-16-meaning", "bible-verses-for-anxiety", "what-is-faith-in-the-bible"]
      }
    ],
    faqs: [
      {
        question: "Who is Verse Explained for?",
        answer:
          "Anyone who wants Bible verses explained clearly, including beginners, returning readers, and daily devotional readers."
      },
      {
        question: "What makes Verse Explained different?",
        answer:
          "We prioritize plain language, context, practical application, and strong internal linking between connected topics."
      },
      {
        question: "Where should I start on the site?",
        answer:
          "Start with Verse Meanings for interpretation, Verses by Need for practical help, and Bible Terms for foundational definitions."
      }
    ],
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" }
    ],
    schemaType: "WebPage",
    relatedHubs: [
      {
        title: "Verse Meanings",
        href: "/verse-meanings",
        description: "Core interpretation pages for popular verses."
      },
      {
        title: "Verses by Need",
        href: "/verses-by-need",
        description: "Scripture collections for anxiety, fear, grief, and more."
      },
      {
        title: "Bible Terms",
        href: "/bible-terms",
        description: "Simple definitions of faith, grace, sin, and other key terms."
      }
    ]
  }
};
