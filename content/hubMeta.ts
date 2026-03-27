import type { ReviewMeta } from "@/content/contentReviewMeta";

export type HubMeta = ReviewMeta & {
  ogImage: string;
};

export const hubMetaByPath: Record<string, HubMeta> = {
  "/verse-meanings": {
    lastReviewed: "2026-03-26",
    dateModified: "2026-03-26",
    ogImage: "/og/verse-meanings.svg"
  },
  "/verses-by-need": {
    lastReviewed: "2026-03-26",
    dateModified: "2026-03-26",
    ogImage: "/og/verses-by-need.svg"
  },
  "/daily-verse": {
    lastReviewed: "2026-03-26",
    dateModified: "2026-03-26",
    ogImage: "/og/daily-verse.svg"
  },
  "/bible-terms": {
    lastReviewed: "2026-03-26",
    dateModified: "2026-03-26",
    ogImage: "/og/bible-terms.svg"
  },
  "/bible-people-places": {
    lastReviewed: "2026-03-26",
    dateModified: "2026-03-26",
    ogImage: "/og/bible-people-places.svg"
  },
  "/about": {
    lastReviewed: "2026-03-26",
    dateModified: "2026-03-26",
    ogImage: "/og/about.svg"
  }
};
