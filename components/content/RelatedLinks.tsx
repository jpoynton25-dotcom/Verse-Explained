import Link from "next/link";
import type { ContentEntry } from "@/content/types";

type RelatedLinksProps = {
  items: ContentEntry[];
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
              <p className="mt-2 text-xs uppercase tracking-wide text-text/65">{item.kind.replaceAll("-", " ")}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
