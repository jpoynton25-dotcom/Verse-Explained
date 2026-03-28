import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const absoluteUrl = (path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
};

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export const buildMetadata = ({ title, description, path, image, keywords }: SeoInput): Metadata => {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? siteConfig.ogImage);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
};
