import { biblePeoplePlaceEntries } from "@/content/biblePeoplePlaces";
import { bibleTermEntries } from "@/content/bibleTerms";
import { contentReviewMetaBySlug, type ReviewMeta } from "@/content/contentReviewMeta";
import { dailyVerseEntries } from "@/content/dailyVerse";
import { pageDataBySlug, type PageData } from "@/content/pageData";
import { verseMeaningEntries } from "@/content/verseMeanings";
import { versesByNeedEntries } from "@/content/versesByNeed";
import type { ContentEntry } from "@/content/types";

export const contentCollections = {
  verseMeanings: verseMeaningEntries,
  versesByNeed: versesByNeedEntries,
  dailyVerses: dailyVerseEntries,
  bibleTerms: bibleTermEntries,
  biblePeoplePlaces: biblePeoplePlaceEntries
};

export const allContent: ContentEntry[] = [
  ...verseMeaningEntries,
  ...versesByNeedEntries,
  ...dailyVerseEntries,
  ...bibleTermEntries,
  ...biblePeoplePlaceEntries
];

export type EnrichedContentEntry = ContentEntry & {
  pageData: PageData;
  review: ReviewMeta;
};

const allEnrichedContent: EnrichedContentEntry[] = allContent.map((entry) => {
  const pageData = pageDataBySlug[entry.slug];
  const review = contentReviewMetaBySlug[entry.slug];

  if (!pageData) {
    throw new Error(`Missing pageData for slug: ${entry.slug}`);
  }
  if (!review) {
    throw new Error(`Missing review meta for slug: ${entry.slug}`);
  }

  return {
    ...entry,
    pageData,
    review
  };
});

export const getContentBySlug = (slug: string) => allEnrichedContent.find((entry) => entry.slug === slug);

export const getRelatedContent = (slugs: string[]) =>
  slugs
    .map((slug) => getContentBySlug(slug))
    .filter((entry): entry is EnrichedContentEntry => Boolean(entry));
