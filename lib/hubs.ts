import { hubPageData, type HubPageData } from "@/content/hubPages";
import { hubMetaByPath, type HubMeta } from "@/content/hubMeta";
import type { Faq } from "@/content/types";
import { getContentBySlug } from "@/lib/content";

export type EnrichedHubPageData = HubPageData & HubMeta;

const buildFallbackTopics = (hub: HubPageData) => {
  const startHere = hub.startHereSlugs.flatMap((slug) => {
    const entry = getContentBySlug(slug);
    return entry ? [{ label: entry.title, href: "/" + entry.slug }] : [];
  });

  const related = hub.relatedHubs.slice(0, 2).map((item) => ({
    label: item.title,
    href: item.href
  }));

  return [...startHere.slice(0, 2), ...related];
};

export const getHubData = (path: string): EnrichedHubPageData => {
  const hub = hubPageData[path];
  const meta = hubMetaByPath[path];

  if (!hub) {
    throw new Error(`Missing hub page data for path: ${path}`);
  }

  if (!meta) {
    throw new Error(`Missing hub meta for path: ${path}`);
  }

  const fallbackRelatedTopics = buildFallbackTopics(hub);

  const faqs: Faq[] = hub.faqs.map((faq) => ({
    ...faq,
    relatedTopics: faq.relatedTopics?.length ? faq.relatedTopics : fallbackRelatedTopics
  }));

  return {
    ...hub,
    ...meta,
    faqs
  };
};
