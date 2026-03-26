import type { Faq } from "@/content/types";
import Link from "next/link";

type FaqBlockProps = {
  items: Faq[];
  fallbackRelatedTopics?: Array<{
    label: string;
    href: string;
  }>;
};

export const FaqBlock = ({ items, fallbackRelatedTopics = [] }: FaqBlockProps) => {
  return (
    <section aria-labelledby="faq-heading" className="rounded-soft border border-line bg-white p-6 shadow-card">
      <h2 id="faq-heading" className="text-xl font-semibold">
        Frequently asked questions
      </h2>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <article key={item.question} className="rounded-xl border border-line bg-canvas p-4">
            <h3 className="font-medium">{item.question}</h3>
            <p className="mt-2 text-text/80">{item.answer}</p>
            {(item.relatedTopics?.length || fallbackRelatedTopics.length) ? (
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-text/65">Related topics</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(item.relatedTopics ?? fallbackRelatedTopics).map((topic) => (
                    <Link
                      key={`${item.question}-${topic.href}`}
                      href={topic.href}
                      className="rounded-full border border-line bg-white px-3 py-1 text-xs text-text/80 hover:border-accent"
                    >
                      {topic.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};
