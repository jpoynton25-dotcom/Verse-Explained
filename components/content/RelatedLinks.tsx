import Link from "next/link";
import type { ContentEntry } from "@/content/types";

type RelatedLinksProps = {
  items: ContentEntry[];
};

const kindLabel = (kind: ContentEntry["kind"]) => kind.replaceAll("-", " ");

const intentSentenceByKind: Record<ContentEntry["kind"], string> = {
  "verse-meaning": "If you want a clear verse breakdown with context and practical application, this page will help.",
  "verses-by-need": "If you are walking through this kind of struggle, this guide gives focused verses and practical direction.",
  "daily-verse": "If you want a short daily rhythm, this page gives a practical scripture-based next step.",
  "bible-term": "If you need doctrinal clarity, this explainer defines the term and shows how it connects to Scripture.",
  "bible-people-place": "If you want background and meaning, this page explains the person or place and why it matters."
};

export const RelatedLinks = ({ items }: RelatedLinksProps) => {
  if (!items.length) return null;

  return (
    <section className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-7">
      <h2 className="text-xl font-semibold tracking-tight text-text sm:text-2xl">Related reading</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.slug}>
            <Link href={`/${item.slug}`} className="block rounded-xl border border-line bg-canvas px-4 py-4 transition-colors hover:border-accent">
              <p className="text-sm font-semibold text-text">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-text/80">{intentSentenceByKind[item.kind]}</p>
              <p className="mt-2 line-clamp-2 text-xs text-text/65">{item.metaDescription}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-text/65">{kindLabel(item.kind)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
