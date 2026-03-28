import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "@/components/layout/Container";

export const MainNav = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-canvas/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-text">
          Verse Explained
        </Link>
        <nav className="hidden gap-5 text-sm text-text/85 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="overflow-x-auto pb-3 lg:hidden">
        <nav className="flex min-w-max gap-4 text-sm text-text/85">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-full border border-line px-3 py-1.5">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
};
