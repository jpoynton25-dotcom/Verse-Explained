import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects | Verse Explained",
  description:
    "Explore Verse Explained projects, content hubs, and practical scripture resources organized for real-life use.",
  path: "/projects",
  keywords: ["verse explained projects", "bible content projects", "scripture resources"]
});

const projectLinks = [
  {
    title: "Verse Meanings",
    href: "/verse-meanings",
    description: "In-depth meaning pages for commonly searched Bible verses."
  },
  {
    title: "Verses by Need",
    href: "/verses-by-need",
    description: "Scripture collections by topic like anxiety, fear, grief, and strength."
  },
  {
    title: "Daily Verse",
    href: "/daily-verse",
    description: "Daily scripture-focused pages designed for consistent reading and reflection."
  },
  {
    title: "Bible Terms",
    href: "/bible-terms",
    description: "Clear definitions for biblical terms such as faith, grace, and repentance."
  },
  {
    title: "Bible People & Places",
    href: "/bible-people-places",
    description: "Context pages for key Bible people and locations."
  },
  {
    title: "About Verse Explained",
    href: "/about",
    description: "Mission, publishing approach, and how to use the site effectively."
  }
];

export default function ProjectsPage() {
  return (
    <Container className="py-12 sm:py-16">
      <section className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-8">
        <SectionTitle title="Projects" description="Index-friendly overview of all active Verse Explained site projects and hub pages." />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-soft border border-line bg-canvas p-5 transition hover:border-accent">
              <h2 className="text-lg font-semibold text-text">{item.title}</h2>
              <p className="mt-2 text-sm text-text/75">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
