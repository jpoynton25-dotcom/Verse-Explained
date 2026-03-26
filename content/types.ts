export type Faq = {
  question: string;
  answer: string;
  relatedTopics?: Array<{
    label: string;
    href: string;
  }>;
};

export type RelatedLink = {
  slug: string;
  title: string;
};

export type SearchIntent = "informational" | "interpretive" | "devotional" | "problem-solving";

type BaseEntry = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  context: string;
  deeperUnderstanding?: string;
  commonMisunderstanding?: string;
  takeaway: string;
  finalReflection: string;
  faqs: Faq[];
  relatedSlugs: string[];
  intent: SearchIntent;
};

export type VerseMeaningEntry = BaseEntry & {
  kind: "verse-meaning";
  verseReference: string;
  verseText: string;
  simpleMeaning: string;
  deeperUnderstanding: string;
  misunderstanding: string;
};

export type NeedVerseItem = {
  reference: string;
  text: string;
  explanation: string;
  verseMeaningSlug?: string;
};

export type NeedGroup = {
  heading: string;
  items: NeedVerseItem[];
};

export type VersesByNeedEntry = BaseEntry & {
  kind: "verses-by-need";
  groups: NeedGroup[];
  practicalSummary: string;
};

export type DailyVerseEntry = BaseEntry & {
  kind: "daily-verse";
  verseReference: string;
  verseText: string;
  simpleMeaning: string;
  morningPractice: string;
  practiceHeading?: string;
};

export type BibleTermEntry = BaseEntry & {
  kind: "bible-term";
  definition: string;
  simpleMeaning: string;
  relatedVerseRefs: string[];
};

export type PeoplePlaceEntry = BaseEntry & {
  kind: "bible-people-place";
  plainExplanation: string;
  whyItMatters: string;
  relatedVerseRefs: string[];
};

export type ContentEntry =
  | VerseMeaningEntry
  | VersesByNeedEntry
  | DailyVerseEntry
  | BibleTermEntry
  | PeoplePlaceEntry;
