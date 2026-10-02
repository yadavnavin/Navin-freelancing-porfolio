import type { APIRoute } from "astro";
import { siteUrl, projects } from "../data/site.mjs";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/>/g, "&gt;");
export const GET: APIRoute = () => {
  const paths = ["/", ...projects.map((project) => `/work/${project.slug}/`)];
  const urls = siteUrl
    ? paths
        .map(
          (path) =>
            `<url><loc>${escapeXml(new URL(path, siteUrl).href)}</loc></url>`,
        )
        .join("")
    : "";
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
