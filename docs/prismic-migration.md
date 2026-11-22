# Portfolio content migration

Target repository `7l7juw0m` is named **developer** in Prismic. Its master locale is `en-us`. The application name `developer-content` identifies the configured credential. The verified Content API endpoint is [7l7juw0m Content API](https://7l7juw0m.cdn.prismic.io/api/v2).

## Inventory

| Class | Original source and structure | Consumers | Destination, relationship and verification |
| --- | --- | --- | --- |
| A | `components/home/hero-section.tsx`, hero headline, action labels, strengths, illustration | Homepage hero | **Homepage**, with the display name from **Site Settings**. Low complexity. Verify the existing destinations, five strength items and one high-priority decorative image. |
| A | `components/home/how-i-work-section.tsx`, `technologies-section.tsx`, and headings in the projects and experience sections | Homepage grids and timeline | **Homepage** section fields and ordered groups. Low complexity. Verify current order and appearance. Icon names are selections mapped to code. |
| A | `components/home/contact-section.tsx`, `data/contact-info.ts`, and public identity in `data/site.ts` | Contact, email drafts, accessibility feedback, navigation, structured data | Contact introduction in **Homepage** and public email, LinkedIn, GitHub and display name in **Site Settings**. Low complexity. Verify links, contact fallback and Person metadata. |
| A | `components/home/about-section.tsx` and the public resume | About, homepage structured data | **About** owns editorial copy, heading lines, values, portrait and the resume label. **Site Settings** manages the resume URL. Low complexity. The PDF keeps its existing public path. Verify keyboard download and portrait alt. |
| A | `data/experience.ts`, five role records with display dates, summaries, bullets and skills | Experience timeline | Five **Experience** documents with stable UIDs. Medium complexity. Preserve month precision using `YYYY-MM` and the current-role flag. Verify ordering, summaries and every impact bullet. |
| A | `data/projects.ts`, four project records with listing overrides, metadata and recursive sections | Listing, case studies, redirects, metadata and sitemap | Four **Project** documents with original UIDs. High complexity. An ordered group reconstructs the section tree from section IDs and parent paths. Two cross-project links use **Project** content relationships with separate fragments. Verify navigation, outline, section order, screenshots, image metadata and resource URLs. |
| A | `components/navbar.tsx`, `components/navigation/section-nav.tsx` and `components/footer.tsx` | Shared site shell | **Site Settings** holds navigation labels and footer text. Low complexity. Verify shared link labels, the copyright format and all legal links. |
| A | `lib/seo.ts`, `app/page.tsx` and case study metadata | Metadata, Open Graph, Twitter cards and structured data | **Homepage** title and description, **Site Settings** default social cover, and **Project** overrides. Medium complexity. Verify title templates, canonical URLs, dimensions and alt. Asset URLs in metadata now use the Prismic image CDN. |
| A/G | `public/images/`, `public/og-cover.png`, public resume PDF | Media optimization, previews and direct asset URLs | Seven copies of the source images in Prismic Media Library. Keep public paths and source binaries available. The resume remains a static public download with a managed URL. |
| B/D | `data/site.ts`, routes, anchors, SEO graph builders, contact form, consent, theme, 404 controls and accessibility labels | Application behavior | Code owns the site origin, IDs, form and consent behavior, controls, interaction text and structured data shape. Validate redirects, keyboard behavior, consent and theme. |
| C | `app/globals.css` and component styling and marks | Warm Editorial design system | Code owns colors, typography, spacing, responsive layout, icon styling and motion. No style configuration is part of the CMS schema. |
| E | Playwright and content tests | CI and local validation | Fictional Prismic Content API responses under `tests/fixtures/` and the existing static test media paths. The test process intercepts HTTP only for the configured Content API. |
| F | `.env.local`, hosting settings and service credentials | Server integrations | Server-side environment variables. Contact submissions are handled by the form provider or email. |
| G | Legal pages, accessibility statement, consent disclosures, 404 help, icons and search engine verification | Legal and system routes | Keep policy content beside the code for the behavior it describes. The shared name, footer, contact link and default social image come from Site Settings. |
| G | Public resume PDF and documentation | Resume download and repository readers | No structured education or certifications are rendered on the site. Education in the linked PDF remains in that document. |

## Mapping and recovery

- The snapshot in [source.json](../scripts/prismic/source.json) records the original editable content and image paths. It is migration input only. Existing project UIDs are `emed`, `goplaces`, `shipflow` and `coinpay`.
- [map-source.mjs](../scripts/prismic/map-source.mjs) converts paragraphs and bullets to Rich Text, converts role dates without adding a day, flattens section trees, and resolves project references while preserving anchor fragments. Project cards retain their source positions within featured and unfeatured groups.
- [migrate.mjs](../scripts/prismic/migrate.mjs) plans one Homepage, one Site Settings, one About, four Projects and five Experience documents. It creates a migration release with the original image contents, dimensions and alt text. A dry run writes the planned fields and SHA-256 source asset hashes under ignored `artifacts/prismic/`.
- Apply checks the repository and locale, active models, published content and API-visible releases before writing. A journal records draft IDs. Resume updates only the drafts recorded in an incomplete journal and uses matching existing media. Review migration drafts in Prismic before using the recovery option. Prismic's Content API only exposes drafts through an authorized preview or release ref.
- Published parity checks compare every migrated text field, collection order, link and relationship, plus image dimensions, alt and original SHA-256 hashes. Runtime keeps the original public asset paths available during and after migration.
- The previous starter homepage was removed by the repository owner. Its model and three existing Shared Slices remain available. The code uses the portfolio fields and the original SEO tab. Retired starter footer fields are preserved in the schema.

## Migration results

| Model | Staged | Published | Verified |
| --- | ---: | ---: | ---: |
| Homepage | 1 | 1 | 1 |
| Site Settings | 1 | 1 | 1 |
| About | 1 | 1 | 1 |
| Project | 4 | 4 | 4 |
| Experience | 5 | 5 | 5 |
| **Total** | **12** | **12** | **12** |

Publication passed field and link parity in the public Content API. All seven image originals matched their source SHA-256 hashes. A local production build read the public API without a token. Playwright checked the live-sourced homepage, four case studies, images, contact and footer, three legal routes, sitemap, cross-case-study anchors, legacy redirects, no-JavaScript 404, mobile reflow and both themes. Fixture tests covered draft entry, isolation and exit, webhook authentication, missing projects and the error response for a failed Content API call. A separate fixture check confirmed that required Site Settings missing from the repository stops pre-rendering with a field-specific diagnostic. Another fixture check confirmed that repeated project requests shared one repository and UID lookup and that a signed webhook refreshed a cached page and the sitemap after a simulated publication. All 42 Playwright tests, four content unit tests and 15 lint configuration tests passed.

The initial SDK run uploaded the images and allocated the draft IDs, then stopped while resolving the first image field. The recovery command reused the seven uploads and filled the 12 journaled draft IDs. The image mapping now passes the SDK’s asset reference directly.

`data/projects.ts`, `data/experience.ts` and `data/contact-info.ts` were removed after publication, parity verification and browser checks. The migration snapshot, source media, original public asset paths, model JSON and generated types remain in the repository.

See the [README](../README.md#prismic) for editor operations, hosting variables, publishing, previews and local verification.

## Implementation files

| Area | Files |
| --- | --- |
| Models and routes | `prismic.config.json`, `customtypes/*/index.json`, `slices/*/model.json`, `prismicio-types.d.ts` |
| Server integration | `lib/prismic/{client,content,map-content,project-index}.ts`, `proxy.ts`, `app/api/{preview,exit-preview,revalidate}/route.ts`, `next.config.ts` |
| Rendering and SEO | `app/{page,layout}.tsx`, `app/projects/[slug]/page.tsx`, the three legal routes, `app/sitemap.ts`, `lib/seo.ts`, `data/{site,project-types}.ts`, `lib/contact-links.ts`, the shared site shell and home components |
| Operations | `.env.example`, `scripts/prismic/`, `README.md`, `AGENTS.md` |
| Validation and dependencies | `tests/fixtures/`, `tests/prismic-content.test.mts`, `tests/prismic.spec.ts`, updated accessibility and SEO regressions, `.github/workflows/ci.yml`, `package.json`, `package-lock.json`, `tsconfig.json` |

The added runtime dependencies are `@prismicio/client` 7.23.1 and `@prismicio/next` 3.0.0. Type generation uses the pinned Prismic CLI via npm. Production-mode checks ran with Webpack because the local sandbox blocked Turbopack’s worker socket. Vercel configuration and Prismic dashboard preview and webhook delivery still need their deployment-time checks.
