import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getProjects } from "../i18n/projects";

export async function GET(context) {
  const projects = await getProjects("nl");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: projects.map(({ slug, entry }) => ({
      title: entry.data.title,
      pubDate: entry.data.pubDate,
      description: entry.data.description,
      link: `/projects/${slug}/`,
    })),
  });
}
