# Navin — engineering portfolio

A small static Astro site for freelance .NET work and future engineering opportunities. Built with TypeScript, Tailwind CSS v4, a self-hosted Manrope font, and semantic Astro components. No React runtime, backend, tracking, or external font requests.

## Local development

Use Node.js 24.12 or newer and npm.

```sh
npm ci
npm run dev
```

## Quality checks

```sh
npm run format:check
npm run lint
npm run check
npm run build
npm test
```

Tests inspect the production output, so build first. They verify generated pages, internal links and anchor targets, metadata, the supplied contact address, and sitemap behavior. `npm run preview` serves the production build.

## Editing content

Edit `src/data/site.mjs` for personal details, navigation, services, case studies, public products, technology groups, and contact copy. It is shared by Astro's build configuration and pages. Each professional project generates a detail page at `/work/[slug]/`.

- `src/pages/index.astro`: homepage composition.
- `src/pages/work/[slug].astro`: shared case-study template.
- `src/layouts/Layout.astro`: document metadata, self-hosted font, shared header/footer.
- `src/components/`: navigation, footer, and section heading.
- `src/styles/global.css`: design tokens, layout, responsive rules, interaction states.
- `src/pages/robots.txt.ts` and `src/pages/sitemap.xml.ts`: build-time SEO endpoints.
- `tests/site.test.mjs`: production artifact checks.

## Before public deployment

1. Set `siteUrl` in `src/data/site.mjs` to the real HTTPS origin. This activates canonical URLs, Open Graph URLs, sitemap entries, and the robots sitemap declaration. Until then, no origin is fabricated.
2. Optionally fill `person.github`, `person.linkedin`, and both product URLs with verified links. Missing social links are omitted. Products without URLs offer an email inquiry instead of a fake destination.
3. Review the anonymized professional descriptions for employer disclosure requirements. They use only the supplied high-level facts; no employer names, internal code, screenshots, or invented outcomes are included.
4. Run the checks, then deploy `dist/` with a static host. Configure its 404 page to use `404.html` and support directory-index URLs. No adapter or secrets are needed.

Email links open the visitor’s email application; this site does not submit mail. The supplied address is `navinkumaryadav@navyik.com`.

No social-preview image was invented. Open Graph and Twitter text metadata are present. A supplied, approved social image can be added later.

## Design and review

The site uses a restrained paper/ink/green palette, generous space, descriptive engineering examples, and an emphasized document-platform case study. Products and services are separated by typography and layout rather than repeated cards. Navigation works without JavaScript; the small enhancement closes the mobile menu on selection or Escape.

Installed and applied skills: Impeccable, frontend-design, Vercel web-design-guidelines, Tailwind design-system, and clean-code. React-specific guidance is not required because this implementation does not use React. See `DESIGN-REVIEW.md` for findings and the refinements applied.
