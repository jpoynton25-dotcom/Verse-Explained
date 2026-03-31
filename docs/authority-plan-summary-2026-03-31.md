# Verse Explained Authority Plan (2026-03-31)

## 1) Current Coverage Audit
- Live content total: 67 content pages (+ core hub/static pages).
- Verse meanings: 28 pages. Strongest cluster depth.
- Verses by need: 18 pages. Strong, but some overlap required angle-splitting.
- Bible terms: 9 pages. Partial coverage; needs doctrinal support expansion.
- Bible people & places: 7 pages. Partial coverage; missing many core figures.
- Daily/devotional: 5 pages. Thin as a cluster, good expansion opportunity.

## 2) Cluster Status
- Already strong:
  - John core verses + salvation pages.
  - Romans 8 support pages.
  - Core need pages: anxiety, hope, peace, strength, prayer.
- Partially built:
  - Isaiah topical verses (hope/strength/guidance).
  - Bible term doctrine set.
  - Bible people set.
- Missing/underbuilt:
  - Comparison/explainer pages (intent disambiguation).
  - Practical need pages for specific life situations.
  - Daily framework pages for recurring intent.

## 3) Overlap / Cannibalization Controls Applied
- `healing-scriptures`: kept broad/general healing themes.
- `bible-verses-for-healing-from-sickness`: narrowed to illness/recovery/prayer-through-sickness.
- `bible-verses-for-hope`: broad/general hope hub.
- `bible-verses-about-hope-in-hard-times`: narrowed to suffering and difficult seasons.

## 4) Internal Linking System Rules
- Hub -> child: every hub lists child pages by subtopic.
- Child -> hub: every page links back to its pillar hub.
- Sibling links: 2-4 in-cluster links per page.
- Verse meaning -> need pages: at least 2 contextual problem pages.
- Need pages -> verse + term pages: at least 3 verse meanings + 1 term.
- Term pages -> verse pages: at least 3 explanatory verse links.
- People pages -> related verses/terms: at least 2 verse links + 1 term link.

## 5) 100+ Blueprint
- File: `docs/authority-blueprint-2026-03-31.tsv`
- Rows: 110 planned/prioritized pages with required fields:
  - slug, title, pillar, search intent, main keyword, secondary keywords,
  - target hub, related existing pages, supporting pages to link,
  - difficulty tier, publish priority, overlap risk, cluster, batch, status.

## 6) Batched Build Order
- Batch 1 (8 pages): core doctrinal/internal-linking bridge pages (implemented).
- Batch 2 (10 pages): John expansion (identity + discipleship anchors).
- Batch 3 (10 pages): Romans salvation/sin scaffold.
- Batch 4 (10 pages): Psalms peace/fear comfort scaffold.
- Batch 5 (10 pages): Isaiah hope/guidance scaffold.
- Batch 6 (10 pages): anxiety/strength/practical-need pages.
- Batch 7 (10 pages): discipleship + growth + relational need pages.
- Batch 8 (10 pages): doctrine term expansion.
- Batch 9 (10 pages): people cluster expansion.
- Batch 10 (10 pages): daily/devotional cluster depth.
- Batch 11 (12 pages): comparison/disambiguation and intent-bridge pages.

## 7) Batch 1 Pages Built (Full Content)
- `john-14-6-meaning`
- `john-8-12-meaning`
- `john-19-30-meaning`
- `romans-3-23-meaning`
- `romans-5-8-meaning`
- `isaiah-60-22-meaning`
- `psalm-46-10-meaning`
- `bible-verses-about-love-and-marriage`

## 8) Tech/SEO Integrity (Current State)
- Canonical base remains `https://verseexplained.com`.
- Sitemap route uses canonical base URL and auto-includes all content entries.
- New pages use existing metadata/schema/static generation system.
- Added missing review metadata for all newly added slugs.

## 9) Validation
- Typecheck: pass (`npm run typecheck`).
- Build: pass (`npm run build`, 81 static/generated routes).
