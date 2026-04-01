import { getContentBySlug } from "@/lib/content";
import type { ContentEntry } from "@/content/types";

export type TopicBucket =
  | "anxiety"
  | "fear"
  | "grief"
  | "hope"
  | "prayer"
  | "strength"
  | "guidance"
  | "faith"
  | "doctrine"
  | "bible_people"
  | "verse_meaning"
  | "daily_verse";

// Static/hub routes that are not content slugs.
const staticRouteTopics: Record<string, TopicBucket> = {
  "/": "verse_meaning",
  "/about": "verse_meaning",
  "/all-pages": "verse_meaning",
  "/search": "verse_meaning",
  "/projects": "verse_meaning",
  "/verse-meanings": "verse_meaning",
  "/verses-by-need": "guidance",
  "/daily-verse": "daily_verse",
  "/bible-people-places": "bible_people",
  "/bible-terms": "doctrine",
};

const normalizePath = (value: string) => {
  const pathOnly = value.split("?")[0].split("#")[0].trim().toLowerCase();
  if (!pathOnly) return "/";
  if (pathOnly === "/") return "/";
  return pathOnly.endsWith("/") ? pathOnly.slice(0, -1) : pathOnly;
};

const pathHasAny = (path: string, keywords: string[]) => keywords.some((keyword) => path.includes(keyword));

// Manual overrides for specific slugs where keyword rules are not enough.
// Add new content slugs here when you want explicit control.
const slugTopicOverrides: Record<string, TopicBucket> = {
  "encouraging-bible-verses": "hope",
  "healing-scriptures": "strength"
};

const classifyVersesByNeedSlug = (slug: string): TopicBucket => {
  const manual = slugTopicOverrides[slug];
  if (manual) return manual;

  if (pathHasAny(slug, ["anxiety", "panic", "overthinking", "worry", "depression", "loneliness"])) return "anxiety";
  if (pathHasAny(slug, ["fear"])) return "fear";
  if (pathHasAny(slug, ["grief"])) return "grief";
  if (pathHasAny(slug, ["hope", "encourag"])) return "hope";
  if (pathHasAny(slug, ["prayer", "prayers"])) return "prayer";
  if (pathHasAny(slug, ["strength", "burnout", "healing", "work-stress", "financial-stress"])) return "strength";
  if (pathHasAny(slug, ["guidance", "decision", "trusting-god", "feeling-lost", "family-problems"])) return "guidance";
  if (pathHasAny(slug, ["faith"])) return "faith";

  return "guidance";
};

const classifyContentEntry = (entry: ContentEntry): TopicBucket => {
  if (entry.kind === "verse-meaning") return "verse_meaning";
  if (entry.kind === "daily-verse") return entry.slug.includes("prayer") ? "prayer" : "daily_verse";
  if (entry.kind === "bible-people-place") return "bible_people";
  if (entry.kind === "bible-term") return pathHasAny(entry.slug, ["faith"]) ? "faith" : "doctrine";
  return classifyVersesByNeedSlug(entry.slug);
};

export const classifyPageTopic = (rawPath: string): TopicBucket => {
  const path = normalizePath(rawPath);
  const staticRoute = staticRouteTopics[path];
  if (staticRoute) return staticRoute;

  const slug = path.startsWith("/") ? path.slice(1) : path;
  if (slug) {
    const entry = getContentBySlug(slug);
    if (entry) {
      return classifyContentEntry(entry);
    }
  }

  // Fallback for non-content routes not yet mapped above.
  return "verse_meaning";
};
