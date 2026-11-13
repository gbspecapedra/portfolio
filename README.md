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
- Prettier
- Vercel (deployment)

## 📦 Features

### Consultation form setup

The financial contact form sends consultation requests to `https://formspree.io/f/mqpqelej` by default. It works locally and on Vercel without additional environment configuration.

1. Check the form's target email and spam protection settings in [Formspree](https://formspree.io/), and verify the recipient email.
2. To use a different form, copy `.env.example` to `.env.local` and change `NEXT_PUBLIC_FORMSPREE_FORM_ID` to the ID shown in that form's Integration tab. For an endpoint such as `https://formspree.io/f/abcdefgh`, use only `abcdefgh`.
3. If overriding the form in production, add the same environment variable to the Vercel project and redeploy. Restart the development server after changing `.env.local`.
4. Send a test request and confirm it appears in both the Formspree dashboard and recipient inbox.

The form ID is public; no API key is needed. Setting the environment variable to an empty value disables submission and offers visitors an email link. Successful requests show an inline confirmation; failed requests retain the entered values for retrying.

### Site features

- UX-focused hero with clear positioning
- Featured projects with strong visual hierarchy
- Scalable case study system
- Reusable button and interaction patterns
- Responsive, accessible layouts
- Performance-aware animations

### Financial accessibility checks

Start the site with `npm run dev`, then run `npm run test:a11y` in another terminal. The suite checks all `/financial` routes at desktop and mobile widths, reflow at 320 and 720 CSS pixels, text spacing, keyboard focus, navigation, search announcements, language markup, rating semantics, and form validation. Formspree submissions are mocked; no consultation request or appointment is sent.

The runner uses Google Chrome when available on macOS. Otherwise install Chromium with `npx playwright install chromium`, or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to a browser executable. Use `A11Y_BASE_URL` to test a server other than `http://localhost:3000`. Results and screenshots are saved under the ignored `artifacts/a11y/` directory.

The [audit and remediation notes](audits/financial-wcag-2026-11-13/remediation.md) document the confirmed fixes and remaining manual verification. Automated checks alone do not establish WCAG conformance.

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
