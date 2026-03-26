import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { allContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Search Verse Explained",
    description: "Search Bible verse meanings, verses by need, daily scripture, terms, and Bible people or places.",
    path: "/search"
  }),
  robots: {
    index: false,
    follow: true
  }
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

const normalize = (value: string) => value.toLowerCase().trim();

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = normalize(q);

  const results = query
    ? allContent
        .filter((entry) => {
          const haystack = [
            entry.title,
            entry.h1,
            entry.intro,
            entry.metaDescription,
            entry.kind,
            entry.intent,
            ...entry.relatedSlugs
          ]
            .join(" ")
            .toLowerCase();

          return haystack.includes(query);
        })
        .slice(0, 24)
    : [];

  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-3xl rounded-soft border border-line bg-white p-6 shadow-card sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Search Verse Explained</h1>
        <p className="mt-3 text-text/80">Find verse meanings, need-based scriptures, daily verse pages, Bible terms, and people or places.</p>

        <form action="/search" method="get" className="mt-5 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="q" className="sr-only">
            Search query
          </label>
          <input
            id="q"
            name="q"
            defaultValue={q}
            placeholder="Search: John 3:16 meaning, anxiety, grace..."
            className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm outline-none ring-accent transition focus:ring-2"
          />
          <button type="submit" className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">
            Search
          </button>
        </form>

        {query ? (
          <div className="mt-8">
            <p className="text-sm text-text/70">{results.length} result(s) for "{q}"</p>
            <ul className="mt-4 space-y-3">
              {results.map((item) => (
                <li key={item.slug} className="rounded-xl border border-line bg-canvas p-4">
                  <Link href={"/" + item.slug} className="text-base font-semibold text-text hover:text-accent">
                    {item.title}
                  </Link>
                  <p className="mt-1 text-sm text-text/75">{item.metaDescription}</p>
                </li>
              ))}
            </ul>
            {!results.length ? <p className="mt-4 text-sm text-text/75">No matches found. Try a simpler phrase.</p> : null}
          </div>
        ) : null}
      </div>
    </Container>
  );
}
