#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const inputPath = process.argv[2];
const outputPath = process.argv[3] ?? path.join(process.cwd(), "content", "keywordCandidates.ts");

if (!inputPath) {
  console.error("Usage: node scripts/import-keyword-tsv.mjs <path-to-tsv> [output-file]");
  process.exit(1);
}

const repoRoot = process.cwd();
const raw = fs.readFileSync(inputPath, "utf8");
const lines = raw.split(/\r?\n/);

const headerLineIndex = lines.findIndex((line) => line.startsWith("Keyword\t"));
if (headerLineIndex === -1) {
  console.error("Could not find TSV header row starting with 'Keyword'.");
  process.exit(1);
}

const headers = lines[headerLineIndex].split("\t");
const keywordIndex = headers.indexOf("Keyword");
const searchIndex = headers.indexOf("Avg. monthly searches");
const competitionIndex = headers.indexOf("Competition");

if (keywordIndex === -1 || searchIndex === -1) {
  console.error("Required columns missing. Need at least Keyword and Avg. monthly searches.");
  process.exit(1);
}

function parseSearches(value) {
  const normalized = String(value ?? "").replace(/,/g, "").trim();
  const parsed = Number.parseInt(normalized, 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

function toSlug(input) {
  return input
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function toTitle(input) {
  return input
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function inferPillar(keyword) {
  if (/\b\d{1,3}[: ]\d{1,3}\b/.test(keyword)) {
    return "verse-meaning";
  }
  if (/\b(verse of the day|daily verse|daily bible verse|daily scripture|scripture of the day)\b/.test(keyword)) {
    return "daily-verse";
  }
  if (/\b(bible verses|scriptures|verses)\b/.test(keyword) || /\bfor\b/.test(keyword) || /\babout\b/.test(keyword)) {
    return "verses-by-need";
  }
  if (/^(what is|who was|meaning of)\b/.test(keyword)) {
    return "bible-term";
  }
  return "bible-term";
}

function inferSlug(keyword) {
  const normalized = keyword.toLowerCase().trim();
  const verseMatch = normalized.match(/\b([a-z]+)\s*(\d{1,3})[: ](\d{1,3})\b/);
  if (verseMatch) {
    return `${verseMatch[1]}-${verseMatch[2]}-${verseMatch[3]}-meaning`;
  }
  if (/\b(verse of the day|daily verse|scripture of the day)\b/.test(normalized)) {
    return toSlug(normalized.replace(/scripture of the day/, "daily scripture explained"));
  }
  return toSlug(normalized);
}

const bibleSignal = /(bible|verse|verses|scripture|psalm|proverbs|john\s*\d|romans\s*\d|isaiah\s*\d|jeremiah\s*\d|matthew\s*\d|philippians\s*\d|god|jesus|christ|faith|grace|sin|salvation|prayer|hope|truth)/i;
const excludePattern =
  /(honk for jesus|jesus revolution|case for christ|latter day saints|church of jesus christ of latter day saints|church of latter day saints|audio bible app|online bible app|superstar|mel gibson|movie|film|soundtrack|assembly of god|assemblies of god|true jesus church|jehovah's witness|jw\.org|podcast|youtube)/i;
const pageIntentPattern =
  /(\b\d{1,3}[: ]\d{1,3}\b|^(what is|who was|meaning of)\b|\b(bible verse|bible verses|scripture|scriptures|verse of the day|daily verse|daily scripture)\b)/i;

const existingSlugSet = new Set();
for (const fileName of ["verseMeanings.ts", "versesByNeed.ts", "dailyVerse.ts", "bibleTerms.ts", "biblePeoplePlaces.ts"]) {
  const filePath = path.join(repoRoot, "content", fileName);
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, "utf8");
  const matches = content.matchAll(/slug:\s*"([^"]+)"/g);
  for (const match of matches) {
    existingSlugSet.add(match[1]);
  }
}

const candidates = [];
const dedupe = new Set();

for (const line of lines.slice(headerLineIndex + 1)) {
  if (!line.trim()) continue;
  const cols = line.split("\t");

  const keyword = (cols[keywordIndex] ?? "").trim();
  if (!keyword) continue;

  const keywordLc = keyword.toLowerCase();
  if (!bibleSignal.test(keywordLc)) continue;
  if (excludePattern.test(keywordLc)) continue;

  const wordCount = keywordLc.split(/\s+/).filter(Boolean).length;
  const hasVerseRef = /\b\d{1,3}[: ]\d{1,3}\b/.test(keywordLc);
  if (wordCount < 3 && !hasVerseRef) continue;
  if (wordCount > 10) continue;
  if (!pageIntentPattern.test(keywordLc)) continue;

  const avgMonthlySearches = parseSearches(cols[searchIndex]);
  if (avgMonthlySearches < 100) continue;

  const slug = inferSlug(keywordLc);
  if (!slug || existingSlugSet.has(slug)) continue;

  const key = `${slug}|${keywordLc}`;
  if (dedupe.has(key)) continue;
  dedupe.add(key);

  candidates.push({
    slug,
    title: toTitle(keywordLc),
    mainKeyword: keywordLc,
    avgMonthlySearches,
    competition: (cols[competitionIndex] ?? "").trim(),
    pillar: inferPillar(keywordLc)
  });
}

candidates.sort((a, b) => b.avgMonthlySearches - a.avgMonthlySearches || a.mainKeyword.localeCompare(b.mainKeyword));

const topCandidates = candidates.slice(0, 120);
const generatedAt = new Date().toISOString().slice(0, 10);

const fileBody = `export type KeywordCandidate = {\n  slug: string;\n  title: string;\n  mainKeyword: string;\n  avgMonthlySearches: number;\n  competition: string;\n  pillar: \"verse-meaning\" | \"verses-by-need\" | \"daily-verse\" | \"bible-term\";\n};\n\n// Auto-generated from TSV on ${generatedAt}.\nexport const keywordCandidates: KeywordCandidate[] = ${JSON.stringify(topCandidates, null, 2)};\n`;

fs.writeFileSync(outputPath, fileBody, "utf8");

console.log(`Parsed ${candidates.length} viable candidates.`);
console.log(`Wrote ${topCandidates.length} candidates to ${outputPath}`);
