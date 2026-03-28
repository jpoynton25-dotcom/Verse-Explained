import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { EmailSignupCta } from "@/components/content/EmailSignupCta";
import { FaqBlock } from "@/components/content/FaqBlock";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { SchemaScript } from "@/components/seo/SchemaScript";
import type { ContentEntry } from "@/content/types";
import { allContent, getContentBySlug, getRelatedContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageImageSequenceBySlug, type PageImageSlot } from "@/content/pageImages";

const hubMap: Record<ContentEntry["kind"], { label: string; href: string }> = {
  "verse-meaning": { label: "Verse Meanings", href: "/verse-meanings" },
  "verses-by-need": { label: "Verses by Need", href: "/verses-by-need" },
  "daily-verse": { label: "Daily Verse", href: "/daily-verse" },
  "bible-term": { label: "Bible Terms", href: "/bible-terms" },
  "bible-people-place": { label: "Bible People & Places", href: "/bible-people-places" }
};

export function generateStaticParams() {
  return allContent.map((entry) => ({ slug: entry.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentBySlug(slug);

  if (!entry) {
    return buildMetadata({
      title: "Page Not Found | Verse Explained",
      description: "The requested page could not be found.",
      path: "/404"
    });
  }

  return buildMetadata({
    title: entry.seoTitle,
    description: entry.metaDescription,
    path: "/" + entry.slug,
    keywords: [entry.pageData.mainKeyword, ...entry.pageData.secondaryKeywords]
  });
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-7">
    <h2 className="text-xl font-semibold tracking-tight text-text sm:text-2xl">{title}</h2>
    <div className="mt-5 space-y-4 text-[1.02rem] leading-8 text-text/80">{children}</div>
  </section>
);

const pageImageConfig: Record<
  PageImageSlot,
  { src: string; alt: (keyword: string) => string; priority?: boolean }
> = {
  intro: {
    src: "/images/feeling-lost-darkness-god-light-hope.jpeg",
    alt: (keyword) =>
      `Person in darkness looking for hope and God's guidance, illustrating the struggle behind ${keyword}`,
    priority: true
  },
  struggle: {
    src: "/images/praying-in-darkness-seeking-god-guidance.jpeg",
    alt: (keyword) =>
      `Believer praying in darkness while seeking God's direction and peace, reflecting ${keyword}`
  },
  resolution: {
    src: "/images/jesus-standing-in-light-faith-strength.jpeg",
    alt: (keyword) =>
      `Jesus standing in radiant light as a picture of faith, strength, and redemption connected to ${keyword}`
  }
};

const ContentImage = ({
  slot,
  keyword
}: {
  slot: PageImageSlot;
  keyword: string;
}) => {
  const config = pageImageConfig[slot];

  return (
    <figure className="my-2">
      <Image
        src={config.src}
        alt={config.alt(keyword)}
        width={1600}
        height={900}
        className="w-full max-w-2xl mx-auto rounded-xl my-10 border border-line/70 shadow-sm"
        sizes="(max-width: 768px) 100vw, 900px"
        priority={config.priority ?? false}
      />
    </figure>
  );
};

export default async function DynamicContentPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getContentBySlug(slug);

  if (!entry) {
    notFound();
  }

  const related = getRelatedContent(entry.relatedSlugs);
  const hub = hubMap[entry.kind];
  const imageSequence = pageImageSequenceBySlug[entry.slug]?.slots ?? [];
  const hasImageSlot = (slot: PageImageSlot) => imageSequence.includes(slot);

  const breadcrumbItems = entry.pageData.breadcrumb;

  const faqItems = entry.faqs.map((item) => ({ question: item.question, answer: item.answer }));

  return (
    <Container className="py-10 sm:py-14">
      <SchemaScript
        id={"breadcrumb-schema-" + entry.slug}
        data={breadcrumbSchema(breadcrumbItems.map((item) => ({ name: item.label, path: item.href })))}
      />
      <SchemaScript
        id={"article-schema-" + entry.slug}
        data={articleSchema({
          title: entry.seoTitle,
          description: entry.metaDescription,
          path: "/" + entry.slug,
          category: entry.pageData.article.section,
          keywords: [entry.pageData.mainKeyword, ...entry.pageData.article.keywords],
          dateModified: entry.review.dateModified,
          lastReviewed: entry.review.lastReviewed
        })}
      />
      <SchemaScript id={"faq-schema-" + entry.slug} data={faqSchema(faqItems)} />

      <div className="max-w-2xl mx-auto px-4 space-y-12">
        <Breadcrumbs items={breadcrumbItems} />

        <article className="space-y-12">
          <header className="rounded-soft border border-line bg-white p-7 shadow-card sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">{entry.pageData.primaryIntent} intent</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">{entry.h1}</h1>
            <p className="mt-5 max-w-prose text-[1.05rem] leading-8 text-text/85">{entry.intro}</p>
            <div className="mt-4 rounded-xl border border-line bg-canvas p-4 text-sm text-text/80">
              <p>
                <span className="font-semibold text-text">Main keyword:</span> {entry.pageData.mainKeyword}
              </p>
              <p className="mt-2">
                <span className="font-semibold text-text">Secondary keywords:</span>{" "}
                {entry.pageData.secondaryKeywords.join(", ")}
              </p>
              <p className="mt-2 text-xs text-text/70">
                Last reviewed: {entry.review.lastReviewed} | Updated: {entry.review.dateModified}
              </p>
            </div>
          </header>

          {hasImageSlot("intro") ? <ContentImage slot="intro" keyword={entry.pageData.mainKeyword} /> : null}

          <section className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-7">
            <h2 className="text-xl font-semibold tracking-tight text-text sm:text-2xl">On this page</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.98rem] leading-7 text-text/80">
              {entry.pageData.sectionHeadings.map((heading) => (
                <li key={heading}>{heading}</li>
              ))}
            </ul>
          </section>

          {entry.kind === "verse-meaning" ? (
            <>
              <Section title="Verse text">
                <p className="rounded-xl border border-line bg-gradient-to-b from-canvas to-white px-5 py-6 text-lg italic leading-8 text-text/90 shadow-sm">{entry.verseText}</p>
                <p className="mt-3 text-sm font-medium tracking-wide text-text/65">{entry.verseReference}</p>
              </Section>
              <Section title="Simple meaning">
                <p>{entry.simpleMeaning}</p>
              </Section>
              <Section title="Context">
                <p>{entry.context}</p>
              </Section>
              {hasImageSlot("struggle") ? <ContentImage slot="struggle" keyword={entry.pageData.mainKeyword} /> : null}
              <Section title="Deeper understanding">
                <p>{entry.deeperUnderstanding}</p>
              </Section>
              <Section title="What people often misunderstand">
                <p>{entry.misunderstanding}</p>
              </Section>
              <Section title="Practical takeaway">
                <p>{entry.takeaway}</p>
              </Section>
              <Section title="Related verses and articles">
                <p className="mb-3">You can explore related topics here:</p>
                <ul className="list-disc space-y-1 pl-5">
                  {related.slice(0, 5).map((item) => (
                    <li key={item.slug}>
                      <Link href={"/" + item.slug} className="text-accent underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/verse-meanings" className="text-accent underline">
                      Browse all Verse Meanings
                    </Link>
                  </li>
                </ul>
              </Section>
            </>
          ) : null}

          {entry.kind === "verses-by-need" ? (
            <>
              <Section title="Verse groups">
                <div className="space-y-5">
                  {entry.groups.map((group) => (
                    <div key={group.heading} className="rounded-xl border border-line bg-canvas p-4">
                      <h3 className="text-lg font-semibold">{group.heading}</h3>
                      <ul className="mt-3 space-y-3">
                        {group.items.map((item) => (
                          <li key={item.reference} className="rounded-lg border border-line bg-white p-3">
                            <p className="text-sm font-semibold">{item.reference}</p>
                            <p className="mt-1 italic text-text/85">{item.text}</p>
                            <p className="mt-2 text-sm text-text/80">{item.explanation}</p>
                            {item.verseMeaningSlug ? (
                              <Link href={"/" + item.verseMeaningSlug} className="mt-2 inline-block text-sm text-accent underline">
                                Read full verse meaning
                              </Link>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>
              <Section title="Practical summary">
                <p>{entry.practicalSummary}</p>
              </Section>
              <Section title="Context">
                <p>{entry.context}</p>
              </Section>
              {hasImageSlot("struggle") ? <ContentImage slot="struggle" keyword={entry.pageData.mainKeyword} /> : null}
              {entry.deeperUnderstanding ? (
                <Section title="Deeper understanding">
                  <p>{entry.deeperUnderstanding}</p>
                </Section>
              ) : null}
              {entry.commonMisunderstanding ? (
                <Section title="Common misunderstanding">
                  <p>{entry.commonMisunderstanding}</p>
                </Section>
              ) : null}
              <Section title="Real-life takeaway">
                <p>{entry.takeaway}</p>
              </Section>
            </>
          ) : null}

          {entry.kind === "daily-verse" ? (
            <>
              <Section title="Today's scripture reference">
                <p className="text-sm font-semibold">{entry.verseReference}</p>
                <p className="mt-3 rounded-xl border border-line bg-gradient-to-b from-canvas to-white px-5 py-6 text-lg italic leading-8 text-text/90 shadow-sm">{entry.verseText}</p>
              </Section>
              <Section title="Simple meaning">
                <p>{entry.simpleMeaning}</p>
              </Section>
              <Section title="Context">
                <p>{entry.context}</p>
              </Section>
              {entry.deeperUnderstanding ? (
                <Section title="Deeper understanding">
                  <p>{entry.deeperUnderstanding}</p>
                </Section>
              ) : null}
              <Section title={entry.practiceHeading ?? "Morning practice"}>
                <p>{entry.morningPractice}</p>
              </Section>
              <Section title="Real-life takeaway">
                <p>{entry.takeaway}</p>
              </Section>
            </>
          ) : null}

          {entry.kind === "bible-term" ? (
            <>
              <Section title="Definition">
                <p>{entry.definition}</p>
              </Section>
              <Section title="Simple explanation">
                <p>{entry.simpleMeaning}</p>
              </Section>
              <Section title="Biblical context">
                <p>{entry.context}</p>
              </Section>
              {entry.deeperUnderstanding ? (
                <Section title="Deeper understanding">
                  <p>{entry.deeperUnderstanding}</p>
                </Section>
              ) : null}
              {entry.commonMisunderstanding ? (
                <Section title="Common misunderstanding">
                  <p>{entry.commonMisunderstanding}</p>
                </Section>
              ) : null}
              <Section title="Related verses">
                <ul className="list-disc space-y-1 pl-5">
                  {entry.relatedVerseRefs.map((verse) => (
                    <li key={verse}>{verse}</li>
                  ))}
                </ul>
                <p className="mt-2">
                  Continue reading in <Link href="/verse-meanings" className="text-accent underline">Verse Meanings</Link>.
                </p>
              </Section>
              <Section title="Real-life takeaway">
                <p>{entry.takeaway}</p>
              </Section>
            </>
          ) : null}

          {entry.kind === "bible-people-place" ? (
            <>
              <Section title="Plain English explanation">
                <p>{entry.plainExplanation}</p>
              </Section>
              <Section title="Context">
                <p>{entry.context}</p>
              </Section>
              {entry.deeperUnderstanding ? (
                <Section title="Deeper understanding">
                  <p>{entry.deeperUnderstanding}</p>
                </Section>
              ) : null}
              {entry.commonMisunderstanding ? (
                <Section title="Common misunderstanding">
                  <p>{entry.commonMisunderstanding}</p>
                </Section>
              ) : null}
              <Section title="Why it matters">
                <p>{entry.whyItMatters}</p>
              </Section>
              <Section title="Related verse links">
                <ul className="list-disc space-y-1 pl-5">
                  {entry.relatedVerseRefs.map((verse) => (
                    <li key={verse}>{verse}</li>
                  ))}
                </ul>
                <p className="mt-2">
                  Explore <Link href="/verse-meanings" className="text-accent underline">Verse Meaning pages</Link> for deeper study.
                </p>
              </Section>
              <Section title="Real-life takeaway">
                <p>{entry.takeaway}</p>
              </Section>
            </>
          ) : null}

          <FaqBlock items={entry.faqs} />

          {hasImageSlot("resolution") ? <ContentImage slot="resolution" keyword={entry.pageData.mainKeyword} /> : null}

          <Section title="Final reflection">
            <p>{entry.finalReflection}</p>
            <p className="mt-3">
              Return to <Link href={hub.href} className="text-accent underline">{hub.label}</Link> for more pages in this topic.
            </p>
          </Section>

          <RelatedLinks items={related} />
          <EmailSignupCta />
        </article>
      </div>
    </Container>
  );
}
