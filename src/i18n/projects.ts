import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "./utils";
import { defaultLang } from "./ui";

export type LocalizedProject = {
  /** The locale-independent slug, e.g. "beatmonkey" (folder prefix stripped). */
  slug: string;
  /** The underlying collection entry (its data + body for the resolved locale). */
  entry: CollectionEntry<"projects">;
};

/** Strip the leading "nl/" or "en/" segment from a project id to get the slug. */
function slugFromId(id: string): string {
  return id.replace(/^(nl|en)\//, "");
}

function langFromId(id: string): Lang {
  return id.startsWith("en/") ? "en" : "nl";
}

/**
 * Returns all projects for the given language, sorted newest first.
 * Falls back to the default-language (Dutch) file when a translation is missing
 * for that slug.
 */
export async function getProjects(lang: Lang): Promise<LocalizedProject[]> {
  const all = await getCollection("projects");

  // Group entries by slug so we can pick the right locale (with fallback).
  const bySlug = new Map<string, Partial<Record<Lang, CollectionEntry<"projects">>>>();
  for (const entry of all) {
    const slug = slugFromId(entry.id);
    const entryLang = langFromId(entry.id);
    const group = bySlug.get(slug) ?? {};
    group[entryLang] = entry;
    bySlug.set(slug, group);
  }

  const projects: LocalizedProject[] = [];
  for (const [slug, group] of bySlug) {
    const entry = group[lang] ?? group[defaultLang];
    if (entry) projects.push({ slug, entry });
  }

  projects.sort(
    (a, b) => b.entry.data.pubDate.valueOf() - a.entry.data.pubDate.valueOf(),
  );
  return projects;
}
