import type { APIRoute } from "astro";
import { siteUrl } from "../data/site.mjs";

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${new URL("/sitemap.xml", siteUrl).href}\n` : ""}`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
