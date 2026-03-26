import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

type BreadItem = { name: string; path: string };
type FaqItem = { question: string; answer: string };

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [] as string[]
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

export const breadcrumbSchema = (items: BreadItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});

export const articleSchema = (input: {
  title: string;
  description: string;
  path: string;
  category: string;
  keywords?: string[];
  dateModified?: string;
  lastReviewed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: input.title,
  description: input.description,
  inLanguage: "en",
  keywords: input.keywords,
  dateModified: input.dateModified,
  lastReviewed: input.lastReviewed,
  mainEntityOfPage: absoluteUrl(input.path),
  author: {
    "@type": "Organization",
    name: siteConfig.name
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  articleSection: input.category
});

export const faqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});

export const webPageSchema = (input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  dateModified?: string;
  lastReviewed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: input.title,
  description: input.description,
  url: absoluteUrl(input.path),
  keywords: input.keywords,
  dateModified: input.dateModified,
  lastReviewed: input.lastReviewed
});

export const collectionPageSchema = (input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  dateModified?: string;
  lastReviewed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: input.title,
  description: input.description,
  url: absoluteUrl(input.path),
  keywords: input.keywords,
  dateModified: input.dateModified,
  lastReviewed: input.lastReviewed
});

export const itemListSchema = (input: {
  name: string;
  path: string;
  items: Array<{ name: string; path: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: input.name,
  url: absoluteUrl(input.path),
  itemListElement: input.items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: absoluteUrl(item.path)
  }))
});
