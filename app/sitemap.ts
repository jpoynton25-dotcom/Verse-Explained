import type { MetadataRoute } from "next";
import { allContent } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/projects",
    "/about",
    "/verse-meanings",
    "/verses-by-need",
    "/daily-verse",
    "/bible-terms",
    "/bible-people-places"
  ];

  const staticEntries = staticPages.map((path) => ({
    url: siteConfig.url + path,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const contentEntries = allContent.map((entry) => ({
    url: siteConfig.url + "/" + entry.slug,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  return [...staticEntries, ...contentEntries];
}
