import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageCard } from "@/components/ui/PageCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contentCollections } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bible Verses Explained Simply for Real Life | Verse Explained",
  description:
    "Understand Bible verses in plain English with clear meaning, context, daily scripture, and practical guidance for real life.",
  path: "/",
  keywords: [
    "bible verses explained simply",
    "bible verse meaning",
    "daily scripture explained",
    "verses by need",
    "bible terms explained"
  ]
});

const topVerseMeanings = contentCollections.verseMeanings.slice(0, 6);
const topNeeds = contentCollections.versesByNeed.slice(0, 6);
const topTerms = contentCollections.bibleTerms.slice(0, 3);
const topPeoplePlaces = contentCollections.biblePeoplePlaces.slice(0, 3);

const startHere = [
  contentCollections.verseMeanings[0],
  contentCollections.versesByNeed.find((item) => item.slug === "bible-verses-for-anxiety"),
  contentCollections.bibleTerms.find((item) => item.slug === "what-is-faith-in-the-bible")
].flatMap((item) => (item ? [item] : []));

const needsQuickLinks = [
  { label: "Anxiety", href: "/bible-verses-for-anxiety" },
  { label: "Fear", href: "/bible-verses-for-fear" },
  { label: "Grief", href: "/bible-verses-for-grief" },
  { label: "Strength", href: "/bible-verses-for-strength" },
  { label: "Healing", href: "/healing-scriptures" },
  { label: "Encouragement", href: "/encouraging-bible-verses" }
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-white to-canvas py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text/70">
              Bible verses explained simply
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              Bible verses explained simply, with clear meaning for real life
            </h1>
            <p className="mt-4 text-lg text-text/80">Clear meanings, daily scripture, and practical guidance you can use today.</p>
            <p className="mt-4 max-w-prose text-text/75">
              Verse Explained helps readers understand Bible verses in plain English. Every page is written to answer real search questions with context,
              simple explanation, and a practical next step.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/verse-meanings" className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">
                Explore Verse Meanings
              </Link>
              <Link href="/verses-by-need" className="rounded-xl border border-line bg-white px-5 py-3 text-sm font-semibold text-text">
                Browse Verses by Need
              </Link>
              <Link href="/daily-verse" className="rounded-xl border border-line bg-white px-5 py-3 text-sm font-semibold text-text">
                Read Today&apos;s Verse
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="space-y-14 py-12 sm:space-y-16 sm:py-16">
        <section className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-8">
          <SectionTitle
            title="Start Here"
            description="If you are new to Verse Explained, begin with these pages to quickly understand how Bible verses are explained simply."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {startHere.map((entry) => (
              <PageCard key={entry.slug} href={"/" + entry.slug} title={entry.title} description={entry.metaDescription} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="Most Searched Verses" description="High-intent verse meaning pages people search every day." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topVerseMeanings.map((entry) => (
              <PageCard key={entry.slug} href={"/" + entry.slug} title={entry.title} description={entry.metaDescription} />
            ))}
          </div>
          <div className="mt-4 text-sm">
            <Link href="/verse-meanings" className="text-accent underline">
              See all verse meanings
            </Link>
          </div>
        </section>

        <section className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-8">
          <SectionTitle
            title="Verses by Need"
            description="Find scripture for anxiety, fear, grief, healing, encouragement, and strength with clear explanation under each verse."
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {needsQuickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full border border-line bg-canvas px-3 py-1.5 text-sm hover:border-accent">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topNeeds.map((entry) => (
              <PageCard key={entry.slug} href={"/" + entry.slug} title={entry.title} description={entry.metaDescription} />
            ))}
          </div>
          <div className="mt-4 text-sm">
            <Link href="/verses-by-need" className="text-accent underline">
              Explore all verses by need
            </Link>
          </div>
        </section>

        <section>
          <SectionTitle
            title="Popular Bible Terms"
            description="Understand key Bible words in plain English before diving deeper into verse meaning and application."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {topTerms.map((entry) => (
              <PageCard key={entry.slug} href={"/" + entry.slug} title={entry.title} description={entry.metaDescription} />
            ))}
          </div>
          <div className="mt-4 text-sm">
            <Link href="/bible-terms" className="text-accent underline">
              See all Bible terms
            </Link>
          </div>
        </section>

        <section>
          <SectionTitle
            title="Bible People and Places"
            description="Get context for key names and locations so Gospel and Old Testament passages make more sense."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {topPeoplePlaces.map((entry) => (
              <PageCard key={entry.slug} href={"/" + entry.slug} title={entry.title} description={entry.metaDescription} />
            ))}
          </div>
          <div className="mt-4 text-sm">
            <Link href="/bible-people-places" className="text-accent underline">
              Explore people and places
            </Link>
          </div>
        </section>

        <section className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-8">
          <SectionTitle title="Explore By Hub" description="Use these hub pages to navigate the full site and avoid isolated reading." />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <PageCard href="/verse-meanings" title="Verse Meanings" description="Understand popular Bible verses with context and practical takeaway." />
            <PageCard href="/verses-by-need" title="Verses by Need" description="Find scripture by anxiety, fear, grief, healing, strength, and encouragement." />
            <PageCard href="/daily-verse" title="Daily Verse" description="Build a consistent daily scripture rhythm with simple explanation." />
            <PageCard href="/bible-terms" title="Bible Terms" description="Learn definitions of faith, grace, sin, and more." />
            <PageCard href="/bible-people-places" title="Bible People & Places" description="Learn who key figures were and why places matter in context." />
            <PageCard href="/about" title="About Verse Explained" description="Learn the mission and how to use the site effectively." />
          </div>
        </section>
      </Container>
    </>
  );
}
