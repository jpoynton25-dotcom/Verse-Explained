import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { contentCollections } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All Pages | Verse Explained",
  description:
    "Browse all Verse Explained pages in one place, including verse meanings, topical scripture collections, Bible terms, and people and places.",
  path: "/all-pages",
  keywords: [
    "verse explained all pages",
    "bible verse meanings index",
    "bible terms index",
    "bible people and places index"
  ]
});

const hubPages = [
  { title: "Home", href: "/" },
  { title: "Verse Meanings", href: "/verse-meanings" },
  { title: "Verses by Need", href: "/verses-by-need" },
  { title: "Daily Verse", href: "/daily-verse" },
  { title: "Bible Terms", href: "/bible-terms" },
  { title: "Bible People & Places", href: "/bible-people-places" },
  { title: "About", href: "/about" }
];

const sortByTitle = <T extends { title: string }>(items: T[]) =>
  [...items].sort((a, b) => a.title.localeCompare(b.title));

const Section = ({ title, links }: { title: string; links: Array<{ title: string; href: string }> }) => (
  <section className="rounded-soft border border-line bg-white p-6 shadow-card">
    <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-accent underline">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default function AllPagesPage() {
  const verseMeaningLinks = sortByTitle(contentCollections.verseMeanings).map((entry) => ({
    title: entry.title,
    href: "/" + entry.slug
  }));

  const versesByNeedLinks = sortByTitle(contentCollections.versesByNeed).map((entry) => ({
    title: entry.title,
    href: "/" + entry.slug
  }));

  const bibleTermLinks = sortByTitle(contentCollections.bibleTerms).map((entry) => ({
    title: entry.title,
    href: "/" + entry.slug
  }));

  const biblePeoplePlaceLinks = sortByTitle(contentCollections.biblePeoplePlaces).map((entry) => ({
    title: entry.title,
    href: "/" + entry.slug
  }));

  return (
    <Container className="py-12 sm:py-16">
      <div className="space-y-8">
        <header className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">All pages</h1>
          <p className="mt-3 max-w-prose text-text/80">
            Use this index to browse every major page on Verse Explained. This page also helps search engines discover and recrawl content efficiently.
          </p>
        </header>

        <Section title="Core Pages" links={hubPages} />
        <Section title="Verse Meanings" links={verseMeaningLinks} />
        <Section title="Verses by Need" links={versesByNeedLinks} />
        <Section title="Bible Terms" links={bibleTermLinks} />
        <Section title="Bible People & Places" links={biblePeoplePlaceLinks} />
      </div>
    </Container>
  );
}
