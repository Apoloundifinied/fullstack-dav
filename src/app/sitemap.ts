import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { siteUrl } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }, ...projects.filter(project => project.featured).map(project => ({ url: `${siteUrl}projetos/${project.slug}/` }))];
}
