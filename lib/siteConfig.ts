export const siteConfig = {
  name: "Verse Explained",
  domain: "verseexplained.com",
  url: "https://verseexplained.com",
  tagline: "Bible verses explained simply for real life",
  description:
    "Clear meanings, daily scripture, and verses for real life. Verse Explained helps you understand Bible verses in plain English.",
  ogImage: "/og-default.svg",
  nav: [
    { label: "Home", href: "/" },
    { label: "Verse Meanings", href: "/verse-meanings" },
    { label: "Verses by Need", href: "/verses-by-need" },
    { label: "Daily Verse", href: "/daily-verse" },
    { label: "Bible Terms", href: "/bible-terms" },
    { label: "Bible People & Places", href: "/bible-people-places" },
    { label: "About", href: "/about" }
  ],
  contactEmail: "hello@verseexplained.com"
};

export const hubPaths = {
  verseMeaning: "/verse-meanings",
  need: "/verses-by-need",
  daily: "/daily-verse",
  term: "/bible-terms",
  peoplePlace: "/bible-people-places"
} as const;
