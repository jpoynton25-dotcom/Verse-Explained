import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/siteConfig";

const popularPages = [
  { label: "John 3:16 Meaning", href: "/john-3-16-meaning" },
  { label: "Isaiah 41:10 Meaning", href: "/isaiah-41-10-meaning" },
  { label: "Bible Verses for Anxiety", href: "/bible-verses-for-anxiety" },
  { label: "Bible Verse of the Day", href: "/bible-verse-of-the-day" },
  { label: "What Is Grace in the Bible", href: "/what-is-grace-in-the-bible" },
  { label: "Who Was Pontius Pilate", href: "/who-was-pontius-pilate" }
];

export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-line bg-white/80 py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-base font-semibold">{siteConfig.name}</h2>
            <p className="mt-2 text-sm text-text/75">{siteConfig.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text/80">Core hubs</h3>
            <ul className="mt-3 space-y-2 text-sm text-text/80">
              {siteConfig.nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text/80">Popular pages</h3>
            <ul className="mt-3 space-y-2 text-sm text-text/80">
              {popularPages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text/80">Mission</h3>
            <p className="mt-3 text-sm text-text/75">
              Verse Explained helps readers understand Bible verses in plain English with practical clarity for everyday life.
            </p>
          </div>
        </div>
        <p className="mt-10 text-xs text-text/60">(c) {new Date().getFullYear()} Verse Explained. All rights reserved.</p>
      </Container>
    </footer>
  );
};
