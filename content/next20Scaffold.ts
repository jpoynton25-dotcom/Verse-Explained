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
};

// Expansion queue only. These pages are intentionally not published until full content is written.
export const next20PlannedPages: PlannedPage[] = [
  {
    slug: "psalm-91-1-2-meaning",
    title: "Psalm 91:1-2 Meaning",
    pillar: "verse-meaning",
    intent: "problem-solving",
    mainKeyword: "psalm 91:1-2 meaning",
    secondaryKeywords: ["psalm 91 explained", "shelter of the most high meaning", "psalm 91 refuge"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["psalm-46-1-meaning", "psalm-23-meaning", "bible-verses-for-fear"],
    status: "planned"
  },
  {
    slug: "isaiah-40-31-meaning",
    title: "Isaiah 40:31 Meaning",
    pillar: "verse-meaning",
    intent: "problem-solving",
    mainKeyword: "isaiah 40:31 meaning",
    secondaryKeywords: ["those who hope in the lord meaning", "renew their strength verse", "isaiah 40 explained"],
    targetHub: "/verse-meanings",
    relatedExistingSlugs: ["bible-verses-for-strength", "isaiah-41-10-meaning", "encouraging-bible-verses"],
    status: "planned"
  },
  {
    slug: "bible-verses-for-peace",
    title: "Bible Verses for Peace",
    pillar: "verses-by-need",
    intent: "problem-solving",
    mainKeyword: "bible verses for peace",
    secondaryKeywords: ["peace scriptures", "verses about peace", "anxiety and peace bible verses"],
    targetHub: "/verses-by-need",
    relatedExistingSlugs: ["bible-verses-for-anxiety", "philippians-4-6-7-meaning", "night-bible-verse"],
    status: "planned"
  },
  {
    slug: "bible-verses-for-guidance",
    title: "Bible Verses for Guidance",
    pillar: "verses-by-need",
    intent: "problem-solving",
    mainKeyword: "bible verses for guidance",
    secondaryKeywords: ["scripture for guidance", "verses for decision making", "god guide me verse"],
    targetHub: "/verses-by-need",
    relatedExistingSlugs: ["proverbs-3-5-6-meaning", "daily-scripture-explained", "bible-verses-for-strength"],
    status: "planned"
  },
  {
    slug: "weekly-scripture-plan",
    title: "Weekly Scripture Plan",
    pillar: "daily-verse",
    intent: "devotional",
    mainKeyword: "weekly scripture plan",
    secondaryKeywords: ["7 day bible plan", "weekly bible reading", "simple scripture plan"],
    targetHub: "/daily-verse",
    relatedExistingSlugs: ["bible-verse-of-the-day", "daily-scripture-explained", "daily-psalm-explained"],
    status: "planned"
  },
  {
    slug: "sunday-scripture-for-the-week",
    title: "Sunday Scripture for the Week",
    pillar: "daily-verse",
    intent: "devotional",
    mainKeyword: "sunday scripture for the week",
    secondaryKeywords: ["sunday bible verse", "week ahead scripture", "weekly encouragement verse"],
    targetHub: "/daily-verse",
    relatedExistingSlugs: ["morning-prayer-scripture", "bible-verses-for-hope", "encouraging-bible-verses"],
    status: "planned"
  },
  {
    slug: "what-is-justification-in-the-bible",
    title: "What Is Justification in the Bible",
    pillar: "bible-term",
    intent: "informational",
    mainKeyword: "what is justification in the bible",
    secondaryKeywords: ["justification meaning bible", "justified by faith", "biblical justification"],
    targetHub: "/bible-terms",
    relatedExistingSlugs: ["what-is-righteousness-in-the-bible", "what-is-grace-in-the-bible", "what-is-salvation-in-the-bible"],
    status: "planned"
  },
  {
    slug: "what-is-sanctification-in-the-bible",
    title: "What Is Sanctification in the Bible",
    pillar: "bible-term",
    intent: "informational",
    mainKeyword: "what is sanctification in the bible",
    secondaryKeywords: ["sanctification meaning", "spiritual growth bible", "sanctification explained"],
    targetHub: "/bible-terms",
    relatedExistingSlugs: ["what-is-repentance-in-the-bible", "what-is-righteousness-in-the-bible", "what-is-faith-in-the-bible"],
    status: "planned"
  },
  {
    slug: "who-was-moses",
    title: "Who Was Moses",
    pillar: "bible-people-place",
    intent: "informational",
    mainKeyword: "who was moses",
    secondaryKeywords: ["moses in the bible", "moses explained", "exodus leader"],
    targetHub: "/bible-people-places",
    relatedExistingSlugs: ["who-was-king-david", "what-is-faith-in-the-bible", "bible-verses-for-strength"],
    status: "planned"
  },
  {
    slug: "who-was-peter-in-the-bible",
    title: "Who Was Peter in the Bible",
    pillar: "bible-people-place",
    intent: "informational",
    mainKeyword: "who was peter in the bible",
    secondaryKeywords: ["apostle peter explained", "peter bible story", "disciple peter"],
    targetHub: "/bible-people-places",
    relatedExistingSlugs: ["who-was-paul-in-the-bible", "what-is-repentance-in-the-bible", "john-3-16-meaning"],
    status: "planned"
  }
];
