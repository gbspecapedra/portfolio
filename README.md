<p align="center">Portfolio</p>
<p align="center">UX-Driven Front-End Engineer</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gbspecapedra/portfolio">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gbspecapedra/portfolio">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/gbspecapedra/portfolio">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gbspecapedra/portfolio">
  <img alt="Github license" src="https://img.shields.io/github/license/gbspecapedra/portfolio">
</p>

## 💬 Project

This repository contains my personal portfolio website. It is intentionally built as a **product artifact**, not a visual experiment — designed to demonstrate frontend engineering judgment, UX decision-making, and scalable architecture.

The goal of this portfolio is not to showcase every skill I have, but to clearly communicate:

- How I structure frontend systems
- How I make trade-offs under real constraints
- How I think about UX, performance, and maintainability
- How I present complex work in a clear, recruiter-friendly way


###
🌐 **Live:** https://giselepecapedra.com


## 🧰 Tech Stack

**Core**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Prismic Content API with generated TypeScript types

**UI & Styling**
- Tailwind CSS 4 with Warm Editorial design tokens
- Checked-in shadcn/ui components with Radix primitives

**Motion**
- CSS transitions and accordion animations respect reduced-motion preferences
- Section links use native hash navigation

**Tooling**
- ESLint
- Vercel (deployment)

## 📦 Features

### Site features

- UX-focused hero with clear positioning
- Featured projects with strong visual hierarchy
- Scalable case study system
- Reusable button and interaction patterns
- Responsive, accessible layouts
- Light and dark theme controls remember the visitor’s selection in browser storage

## Local development

Use the Node.js version pinned in `.nvmrc` and npm. With nvm, install and select that version.

```sh
nvm install
nvm use
```

Install dependencies and copy the example environment file if you are setting up a new checkout.

```sh
npm ci
cp -n .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Local development reads the published Prismic content. CI uses a fictional Prismic HTTP fixture and runs without a CMS credential.

```sh
npm run lint
npm run typecheck
npm run test:lint
npm run test:content
npx playwright install --only-shell chromium
npm run build:fixture
npm run test:e2e
```

The fixture commands set test-only Formspree, Google Analytics and Prismic variables for both the build and server. Playwright starts a production server on port 3100 and intercepts the Formspree and Google Analytics requests. GitHub Actions saves browser traces on failure. Run `npm run build` and `npm start` to test the published CMS content locally. Use `npm run build -- --webpack` or `npm run build:fixture -- --webpack` if a local sandbox prevents Turbopack from opening its worker socket.

Type checks run with TypeScript 7. ESLint's TypeScript parser still requires the compiler API, so `typescript` aliases Microsoft's `@typescript/typescript6` compatibility package while `@typescript/native` aliases TypeScript 7. This follows the [official side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6-0). `npm run typecheck` generates Next.js route types before checking the project, so it also works on a fresh checkout.

The scoped `minimatch` overrides keep ESLint's TypeScript parser and accessibility plugin on a patched glob matcher. Remove them when those packages require minimatch 11 or newer.

ESLint 10 uses an explicit flat configuration in `eslint.config.mjs`. The bundled `eslint-config-next` preset was replaced to avoid its older plugin peer requirements:

| Previous plugin | ESLint 10-compatible replacement |
| --- | --- |
| `eslint-plugin-react` | [`@eslint-react/eslint-plugin`](https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react) |
| `eslint-plugin-jsx-a11y` | [`eslint-plugin-jsx-a11y-x`](https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/) |
| `eslint-plugin-import` | [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x) |

The configuration keeps the official Next.js Core Web Vitals rules through `@next/eslint-plugin-next`, React Hooks checks through `eslint-plugin-react-hooks`, and TypeScript's recommended rules. The original six accessibility checks, including alt text on Next.js `Image`, retain their warning levels. React uses the replacement plugin's recommended TypeScript preset; its rules differ from the previous React preset, and TypeScript handles JSX type errors such as duplicate props. `npm run test:lint` checks valid code and deliberately invalid fixtures to verify these protections.

## Google Analytics

In the Vercel project's **Settings → Environment Variables**, set `GA_MEASUREMENT_ID` to the web stream's Measurement ID for **Production**. Select **Automatically expose System Environment Variables** so the build can read `VERCEL_ENV`, then deploy. The ID is supplied to the Google tag in the visitor's browser. [Vercel system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables)

Visitors opt in before the Google tag is requested. The footer’s **Manage Cookies** button lets them change that choice. The site saves one versioned analytics preference in browser storage. Withdrawal disables the tag immediately and clears accessible first-party GA cookies. Advertising consent stays denied.

In Google Analytics, open **Admin → Data streams** and select the portfolio’s web stream. Turn on **Enhanced measurement**, then check that **Page loads** and **Page changes based on browser history events** are enabled under **Page views → Show advanced settings**. The Google tag measures page loads and navigation. [Google’s single-page app guide](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications)

After deploying, start with a fresh browser profile. In the browser’s network panel, verify that the Google tag and collection requests are absent before a choice and after rejecting. Enable debug mode for the test browser, accept analytics, then open a case study and a legal page. Check **DebugView** for one `page_view` per page. Turn analytics off in **Manage Cookies** and check that first-party GA cookies are removed and that navigation and reloads produce no new page views. In a regular browser session, Google may still deliver a batch of events recorded before withdrawal. [Google’s event batching documentation](https://support.google.com/analytics/answer/9322688)

## Contact form

Copy the ID after `/f/` in the form endpoint on Formspree’s **Integration** tab. In the Vercel project's **Settings → Environment Variables**, set `FORMSPREE_FORM_ID` to that ID for **Production**, then deploy. Set the notification recipient in the Formspree dashboard. [Formspree React integration](https://help.formspree.io/articles/working-with-react/the-formspree-react-library/)

For local testing, set `FORMSPREE_FORM_ID` in the ignored `.env.local` file. The endpoint is visible to the browser and Formspree stores the notification recipient. Builds without a form ID use an email draft.

## Prismic

[Repository 7l7juw0m](https://7l7juw0m.prismic.io/) stores the editable portfolio copy, public contact details, navigation, case studies, experience, homepage metadata and images. It is named **developer** in the dashboard. The token application label **developer-content** refers to the original local credential.

| Variable | Where to set it |
| --- | --- |
| `PRISMIC_REPOSITORY_NAME` | Set to `7l7juw0m` in the ignored `.env.local` and in Vercel environments that build the portfolio. |
| `PRISMIC_ACCESS_TOKEN` | Server-side Content API credential when required by repository visibility. The current API serves published content publicly, so Vercel can leave this unset. Use a Content API credential if access becomes private. |
| `PRISMIC_WEBHOOK_SECRET` | Set the same secret in Vercel and the Prismic webhook configuration. The endpoint returns 503 when the secret is unset. |
| `PRISMIC_WRITE_TOKEN` | Local maintenance only. Use an authorized existing write credential for model sync and migration. |

The Content API client and queries live in `lib/prismic/`. `prismic.config.json` defines the repository and routes. `customtypes/` holds model JSON and `prismicio-types.d.ts` is generated. The three Shared Slice models in `slices/` belong to the original starter schema. The portfolio uses fixed section templates.

### Edit and publish content

- Edit **Homepage** for the hero, calls to action, contact copy, section headings, strengths, workflow, technologies and homepage SEO. **About** holds the biography, photo and values. **Site Settings** holds identity, navigation, footer, public contact details, the resume URL and the default social image.
- Create a **Project** with a unique lowercase, hyphen-separated UID. Its page appears at `/projects/<uid>`. Turn on **Show in home listing** to show its card, use **Feature in home listing** for priority, and set **Display order** within that group. Keep established UIDs. The legacy `/developer/projects/<uid>` URL redirects permanently.
- Add ordered rows in **Case study**. Use a unique section ID among siblings. Set a child’s parent path using slash-separated IDs such as `process/navigation`. Existing IDs generate public fragments. Use a Project relationship plus the full target fragment for links to another case study. Provide alt text for informative images.
- Create an **Experience** entry with a stable UID and accurate `YYYY-MM` start and end values. Use **Current role** to display “Present.” The site orders the entries newest first.
- Keep the Homepage, Site Settings and About singletons published with their required fields. A missing singleton or failed CMS request stops pre-rendering with a diagnostic. A missing or unpublished project returns a 404. The sitemap and pre-rendered project list use published data. Newly published project routes generate on request once their UIDs reach the route index. The published-UID check in `proxy.ts` serves the standard server-rendered 404 for unknown projects. The index expires after 15 seconds per server process, and the webhook clears it in its own process. [Next.js issue](https://github.com/vercel/next.js/issues/99287).

Published fetches use Next.js’s Data Cache and the `prismic` tag with an hourly fallback. In Prismic, register a publish and unpublish webhook pointing to `https://giselepecapedra.com/api/revalidate` and set its shared secret. The route validates the repository and secret before expiring the tag. Register a full-site preview URL ending in `/api/preview` for the correct host. Draft Mode bypasses the published cache, marks preview pages noindex and loads the toolbar only in the preview. `/api/exit-preview` ends the session. The app uses fixed section templates, so Page Builder slice thumbnails are outside this preview workflow. [Prismic previews](https://prismic.io/docs/previews) and [Next.js cache revalidation](https://nextjs.org/docs/app/api-reference/functions/revalidateTag).

### Change or migrate models

Verify `7l7juw0m` before using model or content write commands. Review remote changes before editing an existing schema. Preserve existing fields, types and UIDs. The Types API sync command checks for additive changes and presents a dry run before any write. It does not remove shared slices or models.

```sh
npm run prismic:sync
npm run prismic:sync -- --apply
PRISMIC_CLI_TASK_ID=$(npx prismic@1.30.1 task-id)
npm run prismic:typegen -- --task-id "$PRISMIC_CLI_TASK_ID" --user-intent "Generate the portfolio Prismic types."
npm run typecheck
```

For model investigations, sign in through the official CLI and use the Type Builder or CLI status workflow. [Prismic CLI](https://prismic.io/docs/cli) and [Types API](https://prismic.io/docs/custom-types-api).

```sh
npm run prismic:migrate
npm run prismic:migrate -- --check
npm run prismic:migrate -- --apply
npm run prismic:migrate -- --verify
```

The dry run uses the archived source snapshot and writes a local plan. The check inspects the repository and document conflicts. Apply stages new content in **Migration Releases**. Review and publish the release in Prismic, then run verify. An interrupted import with all draft IDs allocated can use `--resume` after the journal and dashboard have been reconciled. See the [content inventory and migration mapping](docs/prismic-migration.md).

### Troubleshooting

- If the build reports missing content, verify the configured repository, the singleton publication status, its required fields and Content API access. Use the fixture build to confirm application behavior independently of the live repository.
- If a published change is missing, check the webhook delivery status and secret in both dashboards. When no webhook is configured, cached content is eligible for refresh after an hour.
- If draft content does not appear, open a full-site preview from Prismic and check the registered host and preview path. Draft cookies are scoped to that host. Keep Prismic write credentials in the local maintenance environment.

## 📌 Assumptions

- Reviewers scan quickly
- Case studies matter more than visual effects
- Clarity beats feature completeness
- Accessibility and performance are baseline expectations

## 📌 Key Decisions & Trade-offs

### Case study rendering

One parameterized route and the shared case study components render the Prismic Project documents. Published routes are pre-rendered at build time, and newly published UIDs can render on demand.

### 🔹 Subtle motion only

**Decision**  
Animations are minimal and purpose-driven.

**Why**
- Motion supports hierarchy, not decoration
- Reduces cognitive load
- Keeps performance predictable

**Trade-off**
- Less visually flashy  
- Stronger signal for senior, product-focused roles

## 🔮 What I’d Do Next

**Short-term**
- Screen reader and assistive technology review
- Optional project filtering

**Mid-term**
- Deeper experience timeline

**Long-term**
- Internationalization
- Writing / blog section

## ⁉️ Why This Exists

This repository is meant to answer one question clearly:

> *“How would this person design and build frontend systems on a real product team?”*

Everything here — structure, scope, and omissions — is intentional.

## 📝 License

This project is under the MIT license. See the <a href="https://github.com/gbspecapedra/portfolio/blob/main/LICENSE" rel="nofollow">LICENSE</a> for more information.

---

<p align="center">Made with ♥ by Gisele Pecapedra 👋 <a href="https://www.linkedin.com/in/giselepecapedra/" rel="nofollow">Get in touch!</a></p>
