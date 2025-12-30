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

- UX-focused hero with clear positioning
- Featured projects with strong visual hierarchy
- Scalable case study system
- Reusable button and interaction patterns
- Responsive, accessible layouts
- Performance-aware animations

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
