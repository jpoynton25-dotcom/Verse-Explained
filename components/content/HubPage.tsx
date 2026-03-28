import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { FaqBlock } from "@/components/content/FaqBlock";
import { PageCard } from "@/components/ui/PageCard";
import { getContentBySlug, type EnrichedContentEntry } from "@/lib/content";
import type { EnrichedHubPageData } from "@/lib/hubs";

type HubPageProps = {
  hub: EnrichedHubPageData;
};

const resolveEntries = (slugs: string[]) =>
  slugs
    .map((slug) => getContentBySlug(slug))
    .filter((entry): entry is EnrichedContentEntry => Boolean(entry));

export const HubPage = ({ hub }: HubPageProps) => {
  const startHereItems = resolveEntries(hub.startHereSlugs);

  return (
    <Container className="py-12 sm:py-16">
      <div className="space-y-8">
        <Breadcrumbs items={hub.breadcrumb} />

        <header className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">{hub.primaryIntent} intent</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{hub.h1}</h1>
          <p className="mt-4 max-w-prose text-text/80">{hub.intro}</p>
          <p className="mt-3 max-w-prose text-text/75">{hub.summary}</p>
          <p className="mt-3 text-xs text-text/65">
            Last reviewed: {hub.lastReviewed} | Updated: {hub.dateModified}
          </p>
          <div className="mt-5 rounded-xl border border-line bg-canvas p-4 text-sm text-text/80">
            <p>
              <span className="font-semibold text-text">Main keyword:</span> {hub.mainKeyword}
            </p>
            <p className="mt-2">
              <span className="font-semibold text-text">Supporting keywords:</span> {hub.secondaryKeywords.join(", ")}
            </p>
          </div>
        </header>

        <section className="rounded-soft border border-line bg-white p-6 shadow-card">
          <h2 className="text-xl font-semibold tracking-tight">On this page</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-text/80">
            {hub.sectionHeadings.map((heading) => (
              <li key={heading}>{heading}</li>
            ))}
          </ul>
        </section>

        {startHereItems.length ? (
          <section className="rounded-soft border border-line bg-white p-6 shadow-card">
            <h2 className="text-xl font-semibold tracking-tight">Start here</h2>
            <p className="mt-2 max-w-prose text-text/80">
              If you are new to this topic, begin with these pages. They cover high-interest questions and connect to deeper related content.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {startHereItems.map((item) => (
                <PageCard key={item.slug} href={"/" + item.slug} title={item.title} description={item.metaDescription} />
              ))}
            </div>
          </section>
        ) : null}

        {hub.childGroups.map((group) => {
          const groupItems = resolveEntries(group.slugs);

          if (!groupItems.length) return null;

          return (
            <section key={group.heading} className="rounded-soft border border-line bg-white p-6 shadow-card">
              <h2 className="text-xl font-semibold tracking-tight">{group.heading}</h2>
              <p className="mt-2 max-w-prose text-text/80">{group.description}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groupItems.map((item) => (
                  <PageCard key={item.slug} href={"/" + item.slug} title={item.title} description={item.metaDescription} />
                ))}
              </div>
            </section>
          );
        })}

        <section className="rounded-soft border border-line bg-white p-6 shadow-card">
          <h2 className="text-xl font-semibold tracking-tight">Related hubs</h2>
          <p className="mt-2 max-w-prose text-text/80">
            Continue building context by moving across connected hubs.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {hub.relatedHubs.map((relatedHub) => (
              <Link
                key={relatedHub.href}
                href={relatedHub.href}
                className="rounded-xl border border-line bg-canvas p-4 transition hover:border-accent"
              >
                <p className="font-semibold text-text">{relatedHub.title}</p>
                <p className="mt-1 text-sm text-text/75">{relatedHub.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {hub.faqs.length ? <FaqBlock items={hub.faqs} /> : null}
      </div>
    </Container>
  );
};
