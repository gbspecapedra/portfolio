# Portfolio agent guide

## 1. Project Overview

This repository powers **giselepecapedra.com**, the professional portfolio of Gisele Pecapedra, a UX-driven frontend engineer. Use the checked-in code, configuration, and tests to verify behavior. This guide records reusable conventions and points to their implementation. See `README.md` for local setup and service dashboard instructions.

## 2. Product Goals and Target Audience

Help recruiters, hiring managers, engineering and design peers, and potential collaborators quickly understand Gisele's role, work, and impact. Keep the path from positioning to case studies, experience, and contact clear. Case studies should explain decisions, constraints, trade-offs, and outcomes. Accessibility, performance, and readable architecture are part of the portfolio's demonstration of engineering quality.

## 3. Technology Stack

- Next.js 16 App Router, React 19, and strict TypeScript. Use the Node release pinned in `.nvmrc` and npm with `npm ci`. `package.json` and `package-lock.json` hold dependency requirements and resolutions.
- Tailwind CSS 4 runs through `@tailwindcss/postcss` in `postcss.config.mjs`. `app/globals.css` is the CSS-first theme configuration. `components.json` records the shadcn/ui New York, RSC, TSX, and CSS-variable settings. Primitives are checked-in source, with Radix Accordion and Slot, CVA variants, and `cn()` for class merging.
- Prismic supplies editable production content. The official Prismic client and Next.js preview helpers run at the server boundary.
- Use the existing next-themes, Lucide, React Icons, and Formspree integrations where they match the task. ESLint flat config, the Node test runner, Playwright Chromium, and axe provide validation.

## 4. Repository Structure

| Path | Responsibility |
| --- | --- |
| `app/` | App Router routes, route layouts, global styles, metadata, error UI, and file-based icons |
| `components/` | Site shell, navigation, footer, theme controls, consent, legal page, and 404 composition |
| `components/home/` | Home sections, featured case study cards, and contact form |
| `components/projects/` | Shared case study hero and recursive content renderer |
| `components/navigation/` and `components/ui/` | Navigation controls and reusable UI primitives |
| `data/` | Static route and anchor constants and UI content types |
| `customtypes/`, `slices/`, and `prismicio-types.d.ts` | Prismic model JSON, retained starter slices and generated document types |
| `lib/prismic/` | Server client, typed queries and normalization |
| `scripts/prismic/` | Model sync, migration mapping and the original content snapshot |
| `lib/` | SEO helpers, class merging, mail draft formatting, and client-side GA integration |
| `public/` | Portfolio media, social preview, and search-engine verification files |
| `tests/` and `.github/workflows/ci.yml` | Regression tests and CI validation |

## 5. Architecture and Data Flow

- Use Server Components by default. The root layout owns the HTML document, metadata defaults, and theme and consent providers. `SiteShell` composes `Navbar`, page content, and `Footer`. Route content remains server-rendered when passed as children through the client providers.
- Keep `"use client"` at the interactive boundary. Existing boundaries include theme, consent, hash-aware navigation, Radix accordion, and the contact form. Pass only the data needed by the client from server components, especially when reading build environment variables.
- Prismic repository `7l7juw0m` is the source of truth for editable production content. Routes use generated document types and request-scoped query helpers in `lib/prismic/content.ts`. Preserve progressive rendering with JavaScript disabled. Application state stays in the URL, next-themes, browser consent storage, Radix or the form.
- `app/projects/[slug]/page.tsx` pre-renders published UIDs with `generateStaticParams()` and renders newly published UIDs on demand after the published index refreshes. Reuse `getProject()` for metadata and content and `projectPath()` from `data/site.ts` for navigation. Missing public projects use the standard server-rendered 404 through the published UID check in `proxy.ts`. Draft Mode bypasses that check. The Proxy index has a 15-second process-local cache because it runs outside the App Router fetch cache. Required singleton and upstream failures surface a diagnostic during prerendering.

## 6. Design Philosophy and Brand Identity

**Warm Editorial** is the default visual standard. Use warm paper and charcoal surfaces, clay accents, restrained sage, editorial serif headings, and readable sans-serif body copy. Short clay rules, generous spacing, subdued borders, and soft surfaces create hierarchy. The hero's layered illustration and the portrait's botanical accents are specific to those sections. For new sections, repeat the hierarchy and restraint found in the existing sections.

### Design System Preservation

- Before implementing any UI change, read the relevant sections of this guide and inspect the affected components and design tokens. Check the existing implementation before introducing any new colors, typography, spacing conventions, or component variants. Reuse existing tokens and components wherever practical.
- Preserve visual consistency in both light and dark themes. Redesign requires an explicit request.
- If a requested change conflicts with established design guidelines, explain the conflict and recommend the solution that best fits the existing design system.

## 7. Color System and Design Tokens

`app/globals.css` defines the source values in `:root` and `.dark`. `@theme inline` exposes semantic Tailwind classes such as `bg-background`, `text-muted-foreground`, `border-border`, `ring-ring`, and `text-brand-clay`. Prefer those roles and their paired foregrounds over local color literals. Apply dark mode through the existing `.dark` variant and semantic tokens.

| CSS variable | Role | Light | Dark |
| --- | --- | --- | --- |
| `--background` | Page canvas | `#FAF7F3` | `#211E20` |
| `--foreground` | Main text | `#292630` | `#F5EFEB` |
| `--card` | Card surface | `#FFFFFF` | `#2D292A` |
| `--card-foreground` | Card text | `#292630` | `#F5EFEB` |
| `--primary` | Primary action | `#A74732` | `#D88B76` |
| `--primary-foreground` | Primary action text | `#FFFFFF` | `#211E20` |
| `--secondary` | Secondary action and panel | `#F3E7DE` | `#3B3231` |
| `--secondary-foreground` | Secondary text | `#45302C` | `#F5EFEB` |
| `--muted` | Quiet surface | `#F1EBE6` | `#373133` |
| `--muted-foreground` | Supporting text | `#665F5E` | `#C4B9B5` |
| `--accent` | Highlight and hover surface | `#EEDBD0` | `#4A3530` |
| `--accent-foreground` | Highlight and hover text | `#813825` | `#F5C8B6` |
| `--destructive` | Error text and invalid state | `#B42318` | `#FF8E83` |
| `--border` | Separators and surface edges | `#E4D9D1` | `#514744` |
| `--input` | Input-role border, used by the outline button | `#D7C9C0` | `#655753` |
| `--ring` | Focus indicator | `#A74732` | `#D88B76` |
| `--brand-clay` | Brand rules, accents, icons, and active navigation | `#A74732` | `#D88B76` |
| `--brand-sage` | Decorative sage in CSS gradients | `#8F9982` | `#A7B29B` |
| `--surface-soft` | Tinted panels, header, and gradient ends | `#F8EFEA` | `#332A29` |

- Radius base is `0.625rem`. The `sm`, `md`, `lg`, and `xl` theme radii are base minus 4px, base minus 2px, base, and base plus 4px (6/8/10/14px at a 16px root). Cards start at `rounded-xl border shadow-sm`. Feature panels often use `rounded-2xl` or `rounded-3xl`. Badges and theme controls use pills.
- `.hero-bg` supplies static radial washes for the home, case studies, and 404. Clay/sage OKLCH mixes are 10%/10% in light and 8%/6% in dark. The secondary blurred radials use 0.08/0.06 and 0.05/0.04 clay/sage opacity factors respectively. Project cards use a restrained card-to-soft-surface gradient. The home contact area and footer transition through `surface-soft/70`.
- Home hero actions use the shared `Button` colors in `components/home/hero-section.tsx`. Treat component-specific colors and shadows as local. The contact form uses a light `#FCF8F4` panel, `var(--card)` in dark, and a border mixed from 78% muted foreground and 22% panel color in light mode and `#877571` in dark mode. Employer marks, technology icon accents, and the decorative contact sprig also use local colors. See `contact-form.tsx`, `experience-section.tsx`, `technologies-section.tsx`, and `contact-section.tsx` under `components/home/`.

## 8. Typography System

`font-editorial` is `Georgia, "Times New Roman", serif` in `app/globals.css`. Bold editorial headings are a repeated pattern. Body and UI text inherit the Tailwind Preflight system stack (`-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `"Helvetica Neue"`, `"Noto Sans"`, `Arial`, `sans-serif`, followed by emoji fonts). The 404 mockup explicitly uses `ui-monospace, monospace`. Use the editorial utility for comparable headings and inherit body typography.

| Pattern | Implemented values and source |
| --- | --- |
| Home hero | Bold, line height `1.14`, tracking `-0.04em`. The headline wraps naturally within an 18ch measure and uses `clamp(1.875rem, 5vw, 2.875rem)` at base and `clamp(2rem, 3.25vw, 2.875rem)` from 960px. See `components/home/hero-section.tsx`. |
| Case study and legal titles | `ProjectHero` uses `clamp(2.75rem, 6vw, 4.75rem)`, line height `1.04`, tracking `-0.045em`. `LegalPage` and `NotFoundContent` use `clamp(1.875rem, 4.2vw, 3rem)`, line height `1.1`, and `tracking-tight` (`-0.025em`). |
| Section and card titles | Home heading sizes fit each section. Case Studies uses `clamp(1.75rem, 4vw, 2.25rem)` at `1.15`. About and Experience scale with container width via `cqw`. Project cards use `text-2xl` (1.5rem), `leading-tight` (1.25), and `tracking-tight`. |
| Body, labels, and controls | Body is typically `text-sm` to `text-base` (0.875–1rem), with `leading-snug` (1.375) for compact cards and `leading-relaxed` (1.625) for prose. Project hero subtitle grows from `text-lg` to `text-xl` (1.125–1.25rem). Uppercase clay labels use about 11–14px, weight 700 or locally 750, and `0.2em` tracking. Default button and badge text is weight 500, and labeled calls to action often use 600. |

## 9. Layout, Spacing, and Responsive Design

- Use the Tailwind spacing scale (0.25rem per unit). Repeated values include `gap-2` to `gap-6` (0.5–1.5rem) and home section `pt-12 lg:pt-16` (3–4rem). Match the closest section. Widen the grid before increasing density and use wrapping, `min-w-0`, and `minmax(0, …)` to keep content inside columns.
- Most home sections and the footer center on `max-w-364` / `91rem` / 1456px. Common home gutters are `px-4` at base, `px-6` from 480px, and `px-7.5` from 1200px. Technologies and footer use wider insets at large widths, 42px from 1200px and 58px from 1400px. Navbar and case study article use `max-w-7xl` (80rem) with 16/24/32px gutters. Legal prose uses `max-w-3xl` (48rem), 404 uses `max-w-6xl` (72rem), and hero or section copy often has a narrower measure such as `56ch` in `ProjectHero`.
- Tailwind viewport breakpoints used here are `sm` 40rem (640px), `md` 48rem (768px), `lg` 64rem (1024px), and `xl` 80rem (1280px) at a 16px browser default. Apply existing breakpoints first. The thresholds below are verified component choices.

| Area | Responsive behavior |
| --- | --- |
| Header and project cards | Header links sit below the site name and theme controls at widths below `lg`. Cards are one column by default, two at `sm`, and four at `xl`. See `navbar.tsx`, `navigation/section-nav.tsx`, and `home/projects-section/index.tsx` under `components/`. |
| Home and case study heroes | Home splits 41%/59% at 960px. The case study hero splits at 900px when it has an image. See `HeroSection` and `ProjectHero`. |
| Experience and About | `app/page.tsx` stacks these sections until 1100px, then uses a 1.15:1 grid with a keyboard-focusable, independently scrolling timeline. Inside those sections, use the existing container queries, such as `@min-[26rem]` / `@min-[38rem]` in Experience and `@min-[31rem]` in About. |
| Contact and footer | Contact name and email pair at 30rem, and the main contact columns split at 52rem. Footer introduces two columns at 23rem, a balanced two-column grid at `sm`, and three at `md`. See `contact-section.tsx`, `contact-form.tsx`, and `footer.tsx`. |

## 10. Components and Reusability

Search `components/`, `data/`, and `lib/` before adding components, utilities, or configuration. Compose or extend the nearest existing primitive when a variant serves a repeated need. Keep one-off treatment local to its section. Use `cn()` from `lib/utils.ts` (clsx plus tailwind-merge) for conditional classes and overrides.

| Reuse | When to use it |
| --- | --- |
| `Button` in `components/ui/button.tsx` | Use `default` for primary actions, `outline` or `secondary` for alternatives, `ghost` for low-emphasis controls, and `link` for inline-style actions. Sizes are `default`, `sm`, `lg`, `icon`, and `icon-lg`. Use `asChild` with one link child to style navigation while preserving link semantics. Default heights are 36px, 32px, and 40px respectively for default, small, and large. Prominent actions commonly override them to 44–48px. |
| `Card` and `CardContent` in `components/ui/card.tsx` | Reuse for surface treatments. `Card` supports `asChild` so a section can retain semantic markup. Use `CardContent` for its default `px-6` inset or the existing feature override. |
| `Badge` in `components/ui/badge.tsx` | Use `default`, `secondary`, or `outline` for brief labels, tags, and skills. `.badge-sig` adds the accent surface, border, and accent text used on case study type labels. |
| `Accordion` family in `components/ui/accordion.tsx` | Compose item, trigger, and content for disclosures. Preserve Radix keyboard and state behavior. Experience uses `type="multiple"` so entries can remain open independently. |
| `ProjectsSection`, `ProjectCard`, `ProjectHero`, and `ProjectSections` | Use the existing templates for case study listings and pages. The card has one named link stretched across its surface. The hero and section renderer handle optional content. |
| `SiteShell`, `SectionNav`, `NavButton`, `LegalPage`, and `NotFoundContent` | Compose shared chrome, home anchors, back-to-projects links, legal articles, and error states. Keep one shell per page. |
| `ContactForm`, `ThemeToggle`, `CookieConsent`, and `ManageCookiesButton` | Preserve existing form pending/error/success and email draft behavior, synchronized theme controls, and the native consent dialog. Extend these components when changing their flows. |

## 11. Navigation and Page Patterns

- Home at `/` presents Hero → Case Studies → Experience and About → How I Work → Technologies → Contact. Header and footer use the same `SectionNav` data and `homeSectionIds` from `data/site.ts`. Links use same-page hashes on home and `/#…` from other routes. Active state follows the URL hash on home (`aria-current="location"`) and marks Case Studies on project pages (`aria-current="page"`).
- The sticky header requires anchor offsets. Existing home targets use `scroll-mt-24` to `scroll-mt-32`, and case study sections use `scroll-mt-32`. Check anchor landings on both header layouts.
- Case studies share a named article, a hero, optional section blocks, and return links. Legal routes at `/privacy`, `/terms`, and `/accessibility` use `LegalPage`. Global and project-specific 404 files share `NotFoundContent`. Keep legacy `/developer/projects/:slug` URLs permanently redirected by `next.config.ts` and preserve stable slugs and fragments.

## 12. Icons, Images, and Media

- Prefer Lucide for UI and section icons. Existing React Icons imports supply brand and selected other icons. Import named icons from the established library and keep decorative SVGs `aria-hidden`. Give icon-only controls accessible names. Common action icons are 16–20px, while section and feature icons are larger.
- Use `next/image` with responsive `sizes` and an intrinsic aspect ratio. The home hero illustration, About portrait and case study screenshots are Prismic Image fields. Original asset paths under `public/` remain available. The optimizer allows the verified repository’s image CDN path. Current thumbnails are 1200 × 572 and use an approximately 2:1 crop with `fill` and `object-cover object-left`. The case study hero renders the full image from typed dimensions and alt text. Both page heroes preload their image at high priority. Lazy home thumbnails and the portrait use `sizes="auto, …"` with viewport-based fallbacks. Optimizer source paths are configured in `next.config.ts`.
- Use empty alt text for decorative or redundant visuals, as in the home hero and linked project thumbnails. Use meaningful alt text for the headshot and informative case study imagery. Update the social image path, width, height, and alt together. The default cover is `public/og-cover.png` (1200 × 630). App icons live in `app/favicon.ico`, `app/icon.png`, and `app/apple-icon.png`.

## 13. Animations and Interactions

- Use restrained CSS transitions. In `components/ui/button.tsx`, buttons transition colors by default. The primary variant transitions background, shadow, and translation with a 200ms ease-out and a 2px hover lift. Project cards transition border and shadow and also highlight on focus within. The Radix accordion rotates its chevron over 200ms. Its state-driven `tw-animate-css` expand/collapse animations default to 200ms ease-out. Current scroll behavior uses native hash navigation and anchor offsets.
- Match hover, active, focus, disabled, and pending behavior to the nearest component. Keep focus visible with or without hover. Several controls use `motion-reduce:transition-none` and suppress hover translation locally. Coverage is component-specific. When you add or change a moving interaction, disable nonessential transitions, transforms, or animations for reduced motion and verify that the control remains clear.
- `components/theme-provider.tsx` applies a theme class before paint. Only `light` and `dark` in the existing `theme` storage key count as manual choices. Without one, next-themes follows the operating system. It suppresses transitions during theme changes. `components/theme-toggle.tsx` styles Light and Dark from the applied class and exposes their pressed state after hydration.

## 14. Accessibility Standards

- Aim for **WCAG 2.2 AA** as stated in `app/accessibility/page.tsx`. Preserve a single main landmark, a meaningful page `h1`, logical heading levels, named navigation and relevant sections, and native form, list, button, and link semantics. Project section headings descend to `h6` and stay there for deeper sections.
- Keep the global 2px `--ring` outline with a 3px offset for focused links, the 3px primitive focus rings, and the explicit form-control outlines. Verify focus remains visible within the sticky header, scrolling timeline, consent banner, dialog, and clipped cards. Keep tab order meaningful across responsive layouts.
- Keep visible labels, native required and email validation, relevant autocomplete fields, and status/alert feedback in the contact form. Consent and theme use native controls, accessible names, explicit state, and a dialog that supports Escape and restores focus to its trigger. Preserve distinguishable case study link names and the resource-link announcement when a link opens a new tab.
- Check text, field boundaries, and focus contrast in both themes, especially gradients and translucent overrides. Standard primary text on its semantic primary surface measures about 5.85:1 in light and 6.19:1 in dark, calculated from the source colors. Measure the actual rendered combinations in affected UI, including hover states. Check target sizes, narrow reflow, zoom, reduced motion, and keyboard operation. Automated scans cover selected states. The accessibility statement records that manual assistive technology review is pending.

## 15. SEO and Performance

- Use `siteUrl` in `data/site.ts`, the CMS display name and the helpers in `lib/seo.ts` for canonical URLs, descriptions, Open Graph, and Twitter cards. The root layout defines the metadata base and title template. Home has an absolute title. Case studies have unique metadata derived from project data and use the project image when provided.
- Keep home `WebSite`, `ProfilePage`, and `Person` JSON-LD and project `WebPage` and `BreadcrumbList` graphs consistent with routes and shared IDs. Use `JsonLd` for serialization and escaping. `app/sitemap.ts` includes canonical home, legal, and project URLs. `app/robots.ts` allows crawling and advertises the sitemap. Preserve the 308 redirects and non-indexable 404 behavior covered by `tests/seo.spec.ts`.
- Protect Core Web Vitals by keeping static rendering, sizing media to avoid layout shifts, using responsive images, and limiting preload to likely above-the-fold image candidates. Keep client JavaScript and third-party requests scoped to features that require them.

## 16. Content and Localization

- Read this guide first and confirm the target Prismic repository before changing models or content. Use the existing Homepage, Site Settings, About, Project and Experience models. Keep editable production copy and metadata in Prismic. Keep route IDs, legal disclosures, application messages, icons, themes, styling and layout rules in code.
- Preserve published Project UIDs and section IDs. Use ordered section rows with optional parent paths. The renderer prefixes nested IDs and skips empty sections. Use Project relationships plus fragments for cross-case-study links. Cards use visibility, feature priority and display order from the same Project document.
- Preserve Experience UIDs, month precision and chronology. Known employer marks use UIDs for local styling and can display the public short name. Roles without an existing mark use the shared surface style.
- Modify schemas additively and regenerate types with `npm run prismic:typegen` using the pinned CLI options in the README. Review the local and remote models before running `npm run prismic:sync -- --apply`. Use the existing query layer. Keep CMS requests and credentials on the server, with normalized optional fields passed to existing components.
- Use the migration plan, write preflight and release review workflow in the README and [migration inventory](docs/prismic-migration.md). Keep the source snapshot as an offline recovery record. Use generic fixture content to test mappings, routes and rendering. Preserve the Warm Editorial system and verify accessibility and SEO with each feature.
- The site is English via `<html lang="en">`, with `en-us` as the repository master locale. `LegalPage` formats ISO update dates in English and UTC. Match the tone of nearby copy and substantiate claims.

## 17. Integrations and Environment Configuration

Vercel hosting and dashboard setup are documented in `README.md`. The checked-in GitHub Actions workflow handles validation for pull requests and pushes to `main`. Production and local development read published CMS content. Fixture validation can run offline.

| Name | Behavior and source |
| --- | --- |
| `PRISMIC_REPOSITORY_NAME` | App builds and requests default to `7l7juw0m` from `prismic.config.json`. Any configured value must match. Model sync and migration commands that contact Prismic require the explicit value. |
| `PRISMIC_ACCESS_TOKEN` | Optional for the current public Content API and required for private access. Keep it server-side. |
| `PRISMIC_WEBHOOK_SECRET` | Authenticates publish and unpublish webhooks before invalidating the `prismic` Data Cache tag. Published queries use an hourly Production fallback and a 60-second Vercel Preview interval. See [the Prismic deployment runbook](docs/prismic-deployment.md). |
| `PRISMIC_WRITE_TOKEN` | Local model sync and migration scripts only. |
| `FORMSPREE_FORM_ID` | Optional, trimmed and accepted only when alphanumeric. The server `ContactSection` passes it to `ContactForm` for a browser POST to Formspree. Missing or invalid values fall back to an encoded email draft via `lib/contact-draft.ts`. The form ID is browser-visible. |
| `GA_MEASUREMENT_ID` | Optional, trimmed and matched against `^G-[A-Z0-9]+$` in `app/layout.tsx`. The client loads the tag only after consent. The measurement ID is browser-visible when supplied. |
| `VERCEL_ENV` | The root layout exposes a valid analytics ID only when this equals `production`. Vercel supplies it as a system environment variable. |
| `CI` | Playwright disallows focused tests and uses one worker in CI. See `playwright.config.ts`. |

## 18. Code Style and Naming Conventions

Use TypeScript, explicit content schemas where needed, `import type` for type-only imports, and the `@/*` alias for root-level cross-directory imports. Feature-local siblings often use relative imports. Use kebab-case filenames, PascalCase components, named component exports, and Next.js route default exports with framework metadata exports. Match nearby formatting. The repository uses ESLint flat config for Next.js Core Web Vitals, React and Hooks, TypeScript, and selected JSX accessibility rules. There is no separate formatter configuration.

## 19. Testing and Validation

- Use the Node version in `.nvmrc`. Run `npm run lint`, `npm run typecheck`, `npm run test:lint`, and for changes to rendered or integration behavior, the production build and relevant Playwright tests. `typecheck` runs `next typegen` before `tsc --noEmit`. The TypeScript 7 CLI and the TypeScript 6 compiler API compatibility alias serve different tools. Keep both when changing the toolchain and verify the lint configuration with the Node test runner.
- Browser tests start the production server at `127.0.0.1:3100`. Use the same fixture configuration as `.github/workflows/ci.yml` for service paths. These are test values and vendor requests are intercepted by the relevant tests.

  ```sh
  npx playwright install --only-shell chromium
  npm run test:content
  npm run build:fixture
  npm run test:e2e
  ```

- Tests cover keyboard navigation, theme persistence, form validation/retry and mail draft encoding, analytics opt-in/withdrawal and dialog behavior, case study section rendering, and SEO with JavaScript disabled. Axe covers selected pages, viewports, and themes. Use existing tests as the regression entry points. Playwright failure artifacts are saved under `artifacts/playwright/`.

## 20. Security and Privacy

- Keep credentials and sensitive configuration out of source, client props, fixtures, and logs. Use ignored local environment files or hosting settings. Treat contact submissions as personal information, and keep names, email addresses, and messages out of analytics. Maintain the privacy and accessibility disclosures alongside relevant behavior changes.
- `components/cookie-consent.tsx` stores the versioned choice `portfolio-analytics-consent-v1`, syncs it across tabs when storage is available, and falls back to the current visit if storage is blocked. Keep analytics off before opt-in and after rejection. `lib/google-analytics.ts` uses the disable flag and removes accessible first-party GA cookies on withdrawal. It also checks consent when a pending tag finishes loading. Keep advertising consent denied and let the Google tag's automatic load/history page views own page-view reporting.
- Full-site Prismic previews use Draft Mode and bypass the published cache. The toolbar only loads in draft sessions. Sitemap queries always use the published ref. Keep the webhook secret and write credentials server-side.
- Preserve `rel` protections on links that open a new tab and use trusted sources and descriptive alt text for published imagery. Keep JSON-LD escaping in `components/json-ld.tsx`.

## 21. Rules for Adding New Features

Start with the matching route, data module, and UI primitive. Use the current visual language, semantic tokens, established breakpoints, accessible native controls, and small client boundaries. Specify loading, failure, empty, or success behavior when the feature needs it. Follow the contact form and optional case study content patterns where applicable. Scope new dependencies and abstractions to demonstrated needs and a clear benefit. Preserve current behavior and document intentional deviations.

## 22. Rules for Refactoring Existing Code

Preserve public routes, anchors, metadata, optional content, persisted preferences, keyboard paths, and integration fallbacks through their normal entry points. Keep changes focused on the request and retain existing functionality. Justify any breaking or architectural change explicitly. Prefer a small, composable change when it solves the problem.

## 23. Common Mistakes and Anti-Patterns

- Promoting a component-local color, clamp, shadow, or breakpoint to a global rule from a single use.
- Building a second site shell, button, contact flow, or case study layout before checking the existing one.
- Turning a static content section into a Client Component for a small interactive child.
- Renaming a slug, section ID, accessible label, or storage key without checking dependent links, tests, or saved choices.
- Treating README roadmap items as shipped behavior. The current source uses CSS transitions and Radix state animation classes, with no Intersection Observer reveal implementation.

## 24. Agent Workflow and Definition of Done

Use this workflow for every change.

**Before changing code**

1. Read this guide and any nested `AGENTS.md` that applies to the affected paths.
2. Inspect the affected components, callers, dependencies, data, and tests.
3. Identify the existing tokens, reusable patterns, and relevant server/client or routing conventions.
4. Check compatibility with current behavior, including optional data, mobile layouts, and integration fallbacks as applicable.

**While implementing**

1. Reuse components, utilities, and semantic styles. Keep code focused, composable, and consistent with the adjacent implementation.
2. Preserve accessibility, responsiveness, and performance. Add dependencies and abstractions only for a concrete current need.
3. Record intentional deviations and their rationale where future maintainers can find them.

**After implementing**

1. Run the relevant lint, type-check, test, and build commands above. Record any check you could not run and why.
2. Review impacted interactions, narrow and wide layouts, light and dark themes, keyboard focus, and reduced motion where applicable. Check metadata and integration behavior when touched.
3. Review the diff for unrelated edits, duplication, visual regressions, and sensitive values. Report the changes, checks, and any remaining risks.
4. Apply the documentation maintenance rules below when a task establishes or changes a durable convention, architecture decision, or design system rule.

## 25. Documentation Maintenance Rules

Keep this root guide authoritative for repository-wide agent behavior. Cite the owning source when documenting durable rules. Label local exceptions and recommendations so agents can recognize when a pattern applies. Keep dependency versions in package files, service setup in `README.md`, and content inventories in their data modules.

When a task intentionally changes a design system convention, update the relevant documentation in the same task, including any affected source references or verified tokens. Reserve updates to `AGENTS.md` for durable conventions, architecture decisions, and design system rules. Ordinary feature changes that follow existing conventions require no update to this guide.
