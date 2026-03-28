import { HubPage } from "@/components/content/HubPage";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { getContentBySlug } from "@/lib/content";
import { getHubData } from "@/lib/hubs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema, faqSchema, itemListSchema } from "@/lib/schema";

const hub = getHubData("/daily-verse");
const keywords = [hub.mainKeyword, ...hub.secondaryKeywords];

export const metadata = buildMetadata({
  title: hub.seoTitle,
  description: hub.metaDescription,
  path: hub.path,
  image: hub.ogImage,
  keywords
});

export default function DailyVerseHubPage() {
  return (
    <>
      <SchemaScript id="daily-verse-breadcrumb-schema" data={breadcrumbSchema(hub.breadcrumb.map((item) => ({ name: item.label, path: item.href })))} />
      <SchemaScript
        id="daily-verse-collection-schema"
        data={collectionPageSchema({
          title: hub.h1,
          description: hub.metaDescription,
          path: hub.path,
          keywords,
          dateModified: hub.dateModified,
          lastReviewed: hub.lastReviewed
        })}
      />
      {hub.childGroups.map((group) => {
        const items = group.slugs.flatMap((slug) => {
          const entry = getContentBySlug(slug);
          return entry ? [{ name: entry.title, path: "/" + entry.slug }] : [];
        });

        if (!items.length) return null;

        return (
          <SchemaScript
            key={group.heading}
            id={"daily-verse-itemlist-" + group.heading.toLowerCase().replaceAll(" ", "-")}
            data={itemListSchema({ name: group.heading, path: hub.path, items })}
          />
        );
      })}
      {hub.faqs.length ? <SchemaScript id="daily-verse-faq-schema" data={faqSchema(hub.faqs)} /> : null}
      <HubPage hub={hub} />
    </>
  );
}
