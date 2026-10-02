import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { siteUrl } from "./src/data/site.mjs";

export default defineConfig({
  site: siteUrl || undefined,
  output: "static",
  trailingSlash: "always",
  vite: { plugins: [tailwindcss()] },
});
