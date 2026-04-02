# Launch Readiness Checks

Date checked: 2026-03-26

## Canonicals
- Source: `lib/seo.ts` sets `alternates.canonical` for all pages using `buildMetadata`.
- Coverage: home, hubs, about, search, and dynamic content pages all use `buildMetadata`.

## Sitemap
- Source: `app/sitemap.ts`.
- Includes all core static routes and all content routes via `allContent`.
- Intentional exclusion: `/search` (marked `noindex`).

## Robots
- Source: `public/robots.txt`.
- `allow: /`, `disallow: /api/`, sitemap URL present.

## Noindex
- Intentional `noindex`: `/search` only (`app/search/page.tsx`).

## Open Graph Images
- Hub OG images verified present:
  - `/og/verse-meanings.svg`
  - `/og/verses-by-need.svg`
  - `/og/daily-verse.svg`
  - `/og/bible-terms.svg`
  - `/og/bible-people-places.svg`
  - `/og/about.svg`

## Orphan Checks
- All current content slugs are referenced within hub page start-here/child group structures.
- Homepage links to all core hubs and top child pages.
- Footer links to all core hubs and high-priority child pages.
