import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { projects, person, products, siteUrl } from "../src/data/site.mjs";

const output = "dist";
const routes = ["/", ...projects.map((project) => `/work/${project.slug}/`)];
const pageFile = (route) => join(output, route, "index.html");

test("all published pages have accurate metadata and a main landmark", () => {
  for (const route of routes) {
    const html = readFileSync(pageFile(route), "utf8");
    assert.match(html, /<html lang="en"/);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, route);
    assert.match(html, /<main id="main"/);
    assert.match(html, /name="description"/);
    assert.match(html, /property="og:title"/);
    assert.match(html, /name="twitter:title"/);
    assert.ok(!html.includes('href="#"'), route);
    if (!siteUrl) assert.ok(!html.includes('rel="canonical"'));
  }
});

test("every internal page, fragment and local asset link resolves", () => {
  for (const route of routes) {
    const html = readFileSync(pageFile(route), "utf8");
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const href = match[1];
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      const url = new URL(href, `https://local.test${route}`);
      const file = url.pathname.endsWith("/")
        ? pageFile(url.pathname)
        : join(output, url.pathname);
      assert.ok(existsSync(file), `${route}: missing ${href}`);
      if (url.hash) {
        const target = readFileSync(file, "utf8");
        assert.ok(
          target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
          `${route}: missing ${href}`,
        );
      }
    }
  }
});

test("contact uses supplied email; missing public product links remain omitted", () => {
  const html = readFileSync(pageFile("/"), "utf8");
  assert.ok(html.includes(`mailto:${person.email}?subject=`));
  assert.ok(person.email.includes("@"));
  for (const product of products)
    if (product.url) assert.equal(new URL(product.url).protocol, "https:");
  assert.match(html, /Cleaning functionality is still in development/);
});

test("robots and sitemap never publish an invented origin", () => {
  const robots = readFileSync(join(output, "robots.txt"), "utf8");
  const sitemap = readFileSync(join(output, "sitemap.xml"), "utf8");
  if (!siteUrl) {
    assert.ok(!robots.includes("Sitemap:"));
    assert.ok(!sitemap.includes("<loc>"));
  } else {
    assert.match(robots, /Sitemap:/);
    assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
  }
});
