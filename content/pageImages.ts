export type PageImageSlot = "intro" | "struggle" | "resolution";

export type PageImageSequence = {
  slots: PageImageSlot[];
};

export const pageImageSequenceBySlug: Record<string, PageImageSequence> = {
  "john-3-16-meaning": { slots: ["intro", "struggle", "resolution"] },
  "john-3-17-meaning": { slots: ["intro", "struggle", "resolution"] },
  "john-11-25-meaning": { slots: ["intro", "struggle", "resolution"] },
  "john-11-35-meaning": { slots: ["intro", "struggle", "resolution"] },
  "john-14-6-meaning": { slots: ["intro", "struggle", "resolution"] },
  "john-19-30-meaning": { slots: ["intro", "struggle", "resolution"] },
  "john-3-36-meaning": { slots: ["intro", "struggle", "resolution"] },
  "romans-10-9-meaning": { slots: ["intro", "struggle", "resolution"] },
  "bible-verses-for-anxiety": { slots: ["intro", "struggle", "resolution"] },
  "bible-verses-for-depression": { slots: ["intro", "struggle", "resolution"] },
  "bible-verses-for-peace": { slots: ["intro", "struggle", "resolution"] },
  "bible-verses-for-guidance": { slots: ["intro", "struggle", "resolution"] },
  "bible-verses-for-healing-from-sickness": { slots: ["intro", "struggle", "resolution"] },
  "bible-verses-about-faith-in-hard-times": { slots: ["intro", "struggle", "resolution"] },
  "bible-verses-about-trusting-god": { slots: ["intro", "struggle", "resolution"] }
};
