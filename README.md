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

Install dependencies and start the development server:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. The portfolio does not require environment variables or external service configuration.

```sh
npm run lint
npm run test:lint
npm run typecheck
npm run build
npm start
```

Run the browser and accessibility regression tests against a production build:

```sh
npx playwright install --only-shell chromium
FORMSPREE_FORM_ID=portfoliofixture VERCEL_ENV=production GA_MEASUREMENT_ID=G-PORTFOLIOFIXTURE npm run build
npm run test:e2e
```

Playwright starts its own local server on port 3100. It intercepts Formspree submissions and Google Analytics requests and uses test data. The GitHub Actions workflow runs the same checks and saves Playwright traces on failure.

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

## Project structure

```text
app/
  page.tsx                       # Portfolio homepage
  layout.tsx                     # Metadata, theme provider, and cookie consent
  globals.css                    # Design tokens and global styles
  projects/[slug]/
    layout.tsx                   # Shared SiteShell for case studies
    page.tsx                     # Static project case studies
    not-found.tsx                # Unknown project fallback
components/
  home/                          # Hero, projects, experience, and contact sections
  navigation/                    # Reusable navigation controls
  projects/                      # Project hero and case study sections
  ui/                            # Shared UI primitives
  ...                            # Navbar, footer, theme toggle, and interactions
data/                            # Project content, experience, and contact details
lib/                             # Shared utilities
public/                          # Static assets
```

Add or edit case studies in `data/projects.ts`. Each project needs a unique lowercase, URL-friendly slug, a title, and a short description in `subtitle`. The slug generates a static page at `/projects/[slug]`. Add a `card` to include the project on the homepage. Its optional `pitch` overrides the card description, and `featured` moves it ahead of unfeatured projects.

Use `meta` for project facts, `tags` for skills, and `links` for available resources. An optional `image` supplies the homepage thumbnail, hero, and social preview. Give it descriptive alt text and the asset's intrinsic dimensions. List any case study sections in display order, with a stable `id` and `title` for each entry. Sections support paragraphs, bullets, an image, highlighted decisions and trade-offs, and nested `sections` for groups such as Process & Key Decisions.

Previous `/developer/projects/[slug]` URLs permanently redirect to the corresponding project page.

## 📌 Assumptions

- Reviewers scan quickly
- Case studies matter more than visual effects
- Clarity beats feature completeness
- Accessibility and performance are baseline expectations

## 📌 Key Decisions & Trade-offs

### 🔹 Data-driven case studies

**Decision**  
All project content lives in a structured data file (`projects.ts`).

**Why**
- Enforces consistency across case studies
- Makes projects easy to add, reorder, or remove
- Avoids duplicated layouts and logic

**Trade-off**
- Slight upfront structure cost  
- Intentional for long-term maintainability

### 🔹 Single dynamic `[slug]` page

**Decision**  
Use one parameterized route to pre-render all case studies from local data at build time.

**Why**
- Guarantees narrative consistency
- Keeps the codebase small and readable
- Prevents layout divergence over time

**Trade-off**
- Less freedom for one-off layouts  
- Chosen deliberately to protect clarity

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
- MDX support for richer storytelling
- Deeper experience timeline

**Long-term**
- Internationalization
- Writing / blog section
- Content versioning

## ⁉️ Why This Exists

This repository is meant to answer one question clearly:

> *“How would this person design and build frontend systems on a real product team?”*

Everything here — structure, scope, and omissions — is intentional.

## 📝 License

This project is under the MIT license. See the <a href="https://github.com/gbspecapedra/portfolio/blob/main/LICENSE" rel="nofollow">LICENSE</a> for more information.

---

<p align="center">Made with ♥ by Gisele Pecapedra 👋 <a href="https://www.linkedin.com/in/giselepecapedra/" rel="nofollow">Get in touch!</a></p>
