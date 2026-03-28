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
    <section aria-labelledby="faq-heading" className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-7">
      <h2 id="faq-heading" className="text-xl font-semibold tracking-tight text-text sm:text-2xl">
        Frequently asked questions
      </h2>
      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <article key={item.question} className="rounded-xl border border-line bg-canvas p-5">
            <h3 className="text-base font-semibold text-text">{item.question}</h3>
            <p className="mt-3 text-[0.98rem] leading-7 text-text/80">{item.answer}</p>
            {(item.relatedTopics?.length || fallbackRelatedTopics.length) ? (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-text/65">Related topics</p>
                <div className="mt-3 flex flex-wrap gap-2">
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
