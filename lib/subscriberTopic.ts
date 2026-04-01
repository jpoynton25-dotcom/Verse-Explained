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
  | "daily_verse"
  | "other";

// Manual overrides for paths that are hard to classify by keywords.
// Add new page paths here first when you want explicit control.
const pageTopicOverrides: Record<string, TopicBucket> = {
  "/": "verse_meaning",
  "/verse-meanings": "verse_meaning",
  "/daily-verse": "daily_verse",
  "/bible-verse-of-the-day": "daily_verse",
  "/daily-scripture-explained": "daily_verse",
  "/morning-prayer-scripture": "prayer",
  "/night-bible-verse": "daily_verse",
  "/daily-psalm-explained": "daily_verse",
  "/encouraging-bible-verses": "hope",
  "/bible-people-places": "bible_people",
  "/bible-terms": "doctrine",
  "/what-is-faith-in-the-bible": "faith",
  "/faith-vs-trust-in-the-bible": "faith"
};

const normalizePath = (value: string) => {
  const pathOnly = value.split("?")[0].split("#")[0].trim().toLowerCase();
  if (!pathOnly) return "/";
  if (pathOnly === "/") return "/";
  return pathOnly.endsWith("/") ? pathOnly.slice(0, -1) : pathOnly;
};

const pathHasAny = (path: string, keywords: string[]) => keywords.some((keyword) => path.includes(keyword));

export const classifyPageTopic = (rawPath: string): TopicBucket => {
  const path = normalizePath(rawPath);

  const manual = pageTopicOverrides[path];
  if (manual) {
    return manual;
  }

  if (pathHasAny(path, ["anxiety", "panic", "overthinking", "worry"])) return "anxiety";
  if (pathHasAny(path, ["fear"])) return "fear";
  if (pathHasAny(path, ["grief", "loss"])) return "grief";
  if (pathHasAny(path, ["hope", "encourag"])) return "hope";
  if (pathHasAny(path, ["prayer", "prayers"])) return "prayer";
  if (pathHasAny(path, ["strength", "burnout"])) return "strength";
  if (pathHasAny(path, ["guidance", "decision", "feeling-lost", "trusting-god"])) return "guidance";
  if (pathHasAny(path, ["faith"])) return "faith";

  if (
    path.startsWith("/bible-people-places") ||
    pathHasAny(path, ["who-was-", "judas", "gethsemane", "mary-magdalene", "king-david", "moses", "paul"])
  ) {
    return "bible_people";
  }

  if (path.startsWith("/daily-verse") || pathHasAny(path, ["daily-", "-of-the-day", "night-bible-verse"])) {
    return "daily_verse";
  }

  if (
    path.startsWith("/bible-terms") ||
    pathHasAny(path, [
      "what-is-",
      "-vs-",
      "justification",
      "sanctification",
      "grace",
      "repentance",
      "salvation",
      "righteousness",
      "sin",
      "forgiveness"
    ])
  ) {
    return "doctrine";
  }

  if (path.startsWith("/verse-meanings") || path.endsWith("-meaning") || path.includes("-explained")) {
    return "verse_meaning";
  }

  return "other";
};
