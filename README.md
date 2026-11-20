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
🌐 **Live:** https://www.giselepecapedra.com


## 🧰 Tech Stack

**Core**
- Next.js (App Router)
- React
- TypeScript

**UI & Styling**
- Tailwind CSS
- shadcn/ui
- Custom design tokens and variants

**Motion**
- Intersection Observer–based reveal animations
- Subtle, performance-safe transitions

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
- Performance-aware animations

## Local development

Use Node.js 26 LTS (the exact version is recorded in `.nvmrc`) and npm. If you use nvm:

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
npm run build
npm run test:e2e
```

Playwright starts its own local server on port 3100. Contact checks use test data and verify the draft URL without opening an email app. The GitHub Actions workflow runs the same checks and saves Playwright traces on failure.

Type checks run with TypeScript 7. ESLint's TypeScript parser still requires the compiler API, so `typescript` aliases Microsoft's `@typescript/typescript6` compatibility package while `@typescript/native` aliases TypeScript 7. This follows the [official side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6-0). `npm run typecheck` generates Next.js route types before checking the project, so it also works on a fresh checkout.

The scoped `minimatch` overrides keep ESLint's TypeScript parser and accessibility plugin on a patched glob matcher. Remove them when those packages require minimatch 11 or newer.

ESLint 10 uses an explicit flat configuration in `eslint.config.mjs`. The bundled `eslint-config-next` preset was replaced to avoid its older plugin peer requirements:

| Previous plugin | ESLint 10-compatible replacement |
| --- | --- |
| `eslint-plugin-react` | [`@eslint-react/eslint-plugin`](https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react) |
| `eslint-plugin-jsx-a11y` | [`eslint-plugin-jsx-a11y-x`](https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/) |
| `eslint-plugin-import` | [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x) |

The configuration keeps the official Next.js Core Web Vitals rules through `@next/eslint-plugin-next`, React Hooks checks through `eslint-plugin-react-hooks`, and TypeScript's recommended rules. The original six accessibility checks, including alt text on Next.js `Image`, retain their warning levels. React uses the replacement plugin's recommended TypeScript preset; its rules differ from the previous React preset, and TypeScript handles JSX type errors such as duplicate props. `npm run test:lint` checks valid code and deliberately invalid fixtures to verify these protections.

Use the Node version in `.nvmrc` to avoid engine warnings; if your terminal reports Node 23, run `nvm use` before `npm ci`.

## Project structure

```text
app/
  page.tsx                       # Portfolio homepage
  layout.tsx                     # Metadata and theme provider
  globals.css                    # Design tokens and global styles
  projects/[slug]/
    layout.tsx                   # Shared case study header and footer
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
Use one dynamic route to render all case studies.

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
- Analytics for engagement signals
- Keyboard navigation audit
- Optional project filtering

**Mid-term**
- MDX support for richer storytelling
- Persisted theme preferences
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
