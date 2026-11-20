type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectMeta = {
  role?: string;
  type?: "Personal" | "Academic" | "Assessment" | "Client" | "Professional";
  duration?: string;
  year?: string;
  summaryRole?: string;
  focus?: string;
  outcome?: string;
};

export type ProjectSection = {
  id: string;
  title: string;
  icon?:
    | "target"
    | "clipboard"
    | "search"
    | "scale"
    | "smartphone"
    | "layers"
    | "accessibility"
    | "lightbulb"
    | "chart"
    | "star"
    | "laptop";
  body?: string[];
  bullets?: string[];
  decision?: string;
  tradeOff?: string;
  relatedLink?: Pick<ProjectLink, "label" | "href">;
  image?: ProjectImage;
  sections?: ProjectSection[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  seoDescription?: string;
  tags?: string[];
  meta?: ProjectMeta;
  image?: ProjectImage;
  links?: ProjectLink[];
  card?: {
    featured?: boolean;
    pitch?: string;
  };
  sections?: ProjectSection[];
};

export const projects: Project[] = [
  // eMed
  {
    slug: "emed",
    title: "eMed",
    subtitle:
      "From appointment scheduling to managing patient histories and lab results, the complexity of medical clinic operations.",
    seoDescription:
      "A case study in building a role-aware clinic management platform for appointment scheduling, patient records, and lab results.",
    tags: ["UI Systems", "Full-Stack", "Healthcare Workflows"],

    meta: {
      role: "Full-Stack Developer",
      type: "Academic",
      duration: "2 months",
      year: "2022",
      summaryRole: "Full-Stack (UI-led)",
      focus: "Role-based workflows + secure data handling",
      outcome: "Delivered a functional end-to-end system",
    },

    image: {
      src: "/images/projects/emed.webp",
      alt: "eMed appointments dashboard with clinic navigation and a list of appointment times.",
      width: 1200,
      height: 572,
    },

    links: [
      { label: "GitHub", href: "https://github.com/gbspecapedra/emed" },
      {
        label: "Figma",
        href: "https://www.figma.com/design/TDYKZPMyMp0bqj3QDAdh6Q/eMED?node-id=0-1&p=f",
      },
    ],
    card: {
      pitch:
        "Built a role-aware clinic management platform—from appointments to patient records and lab results—turning complex clinical workflows into a clear, responsive experience.",
    },
    sections: [
      {
        id: "challenge",
        icon: "target",
        title: "1. Challenge",
        body: [
          "Building eMed meant tackling the complexity of medical clinic operations—from appointment scheduling to patient histories and lab results—while keeping the system intuitive for receptionists and physicians.",
          "The goal was to design and develop a scalable, user-friendly web application supporting multiple user roles, secure data management, and real-world clinical workflows.",
        ],
      },

      {
        id: "context",
        icon: "clipboard",
        title: "2. Context & Constraints",
        bullets: [
          "Academic project with no real client and no existing product baseline.",
          "Full ownership of system architecture, UX, and feature definition from scratch.",
          "Required role-based access and permissions across core workflows.",
          "Needed to stay scalable and extensible, even as a first version.",
        ],
      },

      {
        id: "process",
        title: "Process & Key Decisions",
        body: ["Steps, decisions, and tradeoffs made along the way."],
        sections: [
          {
            id: "framing-the-problem",
            title: "3.1 Framing the Problem",
            bullets: [
              "Chose to model the system around real clinic roles (receptionist, doctor, admin) instead of generic CRUD screens.",
              "Mapped workflows before UI to avoid feature-driven design disconnected from daily operations.",
              "Accepted increased upfront complexity in exchange for clearer mental models and scalable flows.",
            ],
          },
          {
            id: "information-architecture-navigation",
            title: "3.2 Information Architecture & Navigation",
            bullets: [
              "Designed role-based navigation to reduce cognitive load and prevent access to irrelevant features.",
              "Avoided a single universal dashboard in favor of task-oriented entry points.",
              "Traded flexibility for clarity by limiting cross-role visibility where it could cause confusion.",
            ],
          },
          {
            id: "ui-decisions-for-dense-clinical-data",
            title: "3.3 UI Decisions for Dense Clinical Data",
            bullets: [
              "Prioritized scannability and hierarchy over visual flair, given the density of tables and records.",
              "Used consistent layout patterns across modules to reduce learning cost.",
              "Chose predictable UI patterns instead of custom interactions to favor speed and reliability.",
            ],
          },
          {
            id: "backend-structure-permissions",
            title: "3.4 Backend Structure & Permissions",
            bullets: [
              "Separated domain logic from UI concerns to keep business rules consistent across roles.",
              "Implemented explicit permission boundaries rather than implicit UI-only restrictions.",
              "Accepted a more verbose permission model to reduce risk and ambiguity in medical data handling.",
            ],
          },
          {
            id: "integration-validation",
            title: "3.5 Integration & Validation",
            bullets: [
              "Focused testing on cross-role flows instead of isolated features.",
              "Validated end-to-end scenarios to ensure data consistency across appointments, records, and results.",
              "Accepted limited automation in favor of manual flow validation due to academic constraints.",
            ],
          },
          {
            id: "delivery",
            title: "3.6 Delivery",
            bullets: [
              "Presented the final product as part of the master's project defense, meeting academic requirements for graduation.",
            ],
          },
        ],
      },

      {
        id: "solution",
        icon: "lightbulb",
        title: "4. Solution",
        bullets: [
          "Role-aware clinic management system aligned with real operational workflows.",
          "Clear separation between administrative, clinical, and operational responsibilities.",
          "Consistent interaction patterns that reduce onboarding and daily friction.",
          "Architecture designed to scale features without breaking mental models.",
        ],
      },

      {
        id: "outcome",
        icon: "chart",
        title: "5. Outcome",
        body: [
          "Delivered a robust, functional full-stack application aligned with healthcare workflows.",
          "Validated end-to-end product development skills and supported completion of the master’s degree.",
        ],
      },

      {
        id: "takeaways",
        icon: "star",
        title: "6. Key Takeaways",
        bullets: [
          "Designing workflows before UI leads to more resilient systems.",
          "Clarity and predictability matter more than visual novelty in operational software.",
          "Role-based constraints are a UX feature, not a limitation.",
          "End-to-end ownership sharpened my decision-making and tradeoff evaluation.",
        ],
      },

      {
        id: "technologies-and-skills",
        icon: "laptop",
        title: "7. Technologies & Skills",
        bullets: [
          "Design: Figma",
          "Frontend: React, Next.js, TypeScript, Chakra UI",
          "Backend: Node.js, Express, Adonis.js",
          "Version Control: Git, GitHub",
        ],
      },
    ],
  },
  // GoPlaces
  {
    slug: "goplaces",
    title: "GoPlaces",
    subtitle:
      "A UX case study focused on helping parents quickly decide where to go with their kids — safely and confidently.",
    tags: ["UX Design", "Mobile UX", "Prototyping"],

    meta: {
      role: "UX Designer",
      type: "Academic",
      duration: "3 months",
      year: "2023",
      focus: "Decision-making under time pressure",
      outcome: "Tested, iteration-ready prototype",
    },

    image: {
      src: "/images/projects/goplaces.webp",
      alt: "GoPlaces preview with an outing search, a Riverside Playground listing, and a photo of the playground.",
      width: 1200,
      height: 572,
    },

    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/file/8LxIPeBC6gf2j96EN5WHv6/UX-Final-Project",
      },
    ],

    card: {
      pitch:
        "A mobile-first UX project designed to reduce decision fatigue for parents by prioritizing trust signals, relevant filters, and parent-driven content.",
    },

    sections: [
      {
        id: "challenge",
        icon: "target",
        title: "1. Challenge",
        body: [
          "Parents often need to decide quickly where to take their kids, but existing platforms are cluttered, generic, and lack family-specific trust signals. The challenge was to design a mobile experience that supports confident, low-effort decisions in real-life situations.",
        ],
      },

      {
        id: "context",
        icon: "clipboard",
        title: "2. Context & Constraints",
        bullets: [
          "UX-focused academic project (no production build).",
          "Mobile-first by default, assuming usage on the go.",
          "Limited scope required prioritizing core decision flows over feature completeness.",
        ],
      },

      {
        id: "process",
        title: "Process & Key Decisions",
        body: ["Steps, decisions, and tradeoffs made along the way."],
        sections: [
          {
            id: "research-key-insights",
            icon: "search",
            title: "3.1 Research & Key Insights",
            bullets: [
              "Conducted interviews with parents of children aged 1-9 to understand real decision contexts.",
              "Identified key pain points: irrelevant reviews, lack of reliable filters, and missing practical details like restrooms and parking.",
              "Observed strong frustration with generic platforms that are not parent-aware.",
            ],
          },

          {
            id: "decision-prioritizing-trust-over-volume",
            icon: "scale",
            title: "3.2 Decision: Prioritizing Trust Over Volume",
            bullets: [
              "Chose to focus on fewer, parent-relevant reviews instead of high-volume, generic ratings.",
              "Emphasized reviews from parents with similar-age children.",
            ],
            tradeOff:
              "Reduced content breadth in favor of higher perceived relevance and trust. This limited scalability in early stages but significantly improved decision confidence.",
          },

          {
            id: "decision-mobile-first-task-oriented-navigation",
            icon: "smartphone",
            title: "3.3 Decision: Mobile-First, Task-Oriented Navigation",
            bullets: [
              "Designed flows optimized for quick scanning and minimal input.",
              "Structured navigation around core tasks: discover, save, review.",
            ],
            tradeOff:
              "Some advanced filtering and exploration features were intentionally deferred to avoid overwhelming users during time-sensitive decisions.",
          },

          {
            id: "prototyping-validation",
            icon: "layers",
            title: "3.4 Prototyping & Validation",
            bullets: [
              "Created low-fidelity wireframes to validate structure early.",
              "Built an interactive prototype to test key flows such as bookmarking and adding reviews.",
              "Iterated on navigation and review submission based on usability testing.",
            ],
          },

          {
            id: "visual-accessibility-decisions",
            icon: "accessibility",
            title: "3.5 Visual & Accessibility Decisions",
            bullets: [
              "Adopted a clean, family-friendly visual language with high readability.",
              "Prioritized clear hierarchy and touch-friendly components.",
            ],
            tradeOff:
              "Visual expressiveness was intentionally restrained to keep cognitive load low, especially for stressed or distracted parents.",
          },
        ],
      },

      {
        id: "solution",
        icon: "lightbulb",
        title: "4. Solution",
        bullets: [
          "A mobile-first prototype that helps parents discover, evaluate, and save family-friendly places with minimal effort.",
          "Clear trust signals, practical filters, and parent-driven content at the core of the experience.",
        ],
      },

      {
        id: "outcome",
        icon: "chart",
        title: "5. Outcome",
        body: [
          "The project resulted in a cohesive, usability-tested prototype that demonstrates a full UX process — from research to validated interaction design — with a strong emphasis on real-world decision-making.",
        ],
      },

      {
        id: "takeaways",
        icon: "star",
        title: "6. Key Takeaways",
        bullets: [
          "Designing for real-life constraints often means removing features, not adding them.",
          "Trust and relevance matter more than volume in family-focused products.",
          "Strong UX decisions come from clearly understanding emotional and situational context.",
        ],
      },

      {
        id: "technologies-and-skills",
        icon: "laptop",
        title: "7. Technologies & Skills",
        bullets: [
          "UX Tools: Figma",
          "Methods: User Interviews, Empathy Mapping, Personas, User Flows, IA",
          "Deliverables: Wireframes, Interactive Prototype, Style Guide",
          "Testing: Usability Testing, Feedback Synthesis, Accessibility Review",
        ],
      },
    ],
  },
  // ShipFlow
  {
    slug: "shipflow",
    title: "ShipFlow",
    subtitle:
      "A time-boxed shipping label flow built to demonstrate engineering judgment, correctness, and UX clarity under constraints.",
    tags: ["Next.js", "TypeScript", "API Integration"],

    meta: {
      role: "Frontend Engineer",
      type: "Assessment",
      duration: "4 hours",
      year: "2025",
      focus: "Correctness, UX states, architecture",
      outcome: "Shippable, well-structured prototype",
    },

    image: {
      src: "/images/projects/shipflow.webp",
      alt: "ShipFlow shipping label form beside a parcel with a printed USPS label.",
      width: 1200,
      height: 572,
    },

    links: [
      {
        label: "GitHub",
        href: "https://github.com/gbpecapedra/shipflow",
      },
      {
        label: "Live Demo",
        href: "https://shipflow-tau.vercel.app",
      },
    ],

    card: {
      featured: true,
      pitch:
        "A 4-hour take-home project treated as a real MVP: a reliable USPS label creation flow focused on domain correctness, predictable UX, and scalable architecture.",
    },

    sections: [
      {
        id: "challenge",
        icon: "target",
        title: "1. Challenge",
        body: [
          "Build a USPS shipping label creation flow using the EasyPost API within a strict 4-hour timebox. The goal was not feature completeness, but demonstrating sound engineering judgment, UX clarity, and correct domain handling.",
        ],
      },

      {
        id: "context",
        icon: "clipboard",
        title: "2. Context & Constraints",
        bullets: [
          "Time-boxed take-home (prototype expected, not production-ready).",
          "US-only addresses enforced.",
          "Required steps: address validation, rate selection, label purchase, and printable PDF output.",
          "Ambiguous requirements designed to test decision-making.",
        ],
      },

      {
        id: "process",
        title: "Process & Key Decisions",
        body: ["Steps, decisions, and tradeoffs made along the way."],
        sections: [
          {
            id: "treat-the-project-as-a-real-mvp",
            title: "3.1 Treat the Project as a Real MVP",
            bullets: [
              "Prioritized a clear happy path over exhaustive edge cases.",
              "Focused on correctness, type safety, and predictable UX states.",
            ],
            tradeOff:
              "Several production features were intentionally deferred (auth, persistence, retries) to protect clarity and execution quality within the time constraint.",
          },

          {
            id: "next-js-app-router-with-colocated-api-routes",
            title: "3.2 Next.js App Router with Colocated API Routes",
            bullets: [
              "Used Next.js App Router with API routes for address verification, rates, and label purchase.",
              "Shared types between frontend and backend.",
            ],
            tradeOff:
              "No separate backend service abstraction. In a larger system, this would likely evolve into a dedicated API layer or BFF.",
          },

          {
            id: "zod-as-a-single-source-of-truth",
            title: "3.3 Zod as a Single Source of Truth",
            bullets: [
              "Used Zod schemas for form validation, API input validation, and type inference.",
              "Explicitly modeled domain constraints (US-only addresses, parcel attributes).",
            ],
            tradeOff:
              "Slight upfront cost in schema design, accepted in exchange for strong correctness guarantees and maintainability.",
          },

          {
            id: "explicit-domain-model-for-the-flow",
            title: "3.4 Explicit Domain Model for the Flow",
            bullets: [
              "Modeled the entire label creation process as a single domain object (from, to, parcel).",
              "Mapped internal models to EasyPost payloads via explicit mapper functions.",
            ],
            tradeOff:
              "Less flexible than per-step models, but chosen intentionally to keep the MVP predictable, testable, and easy to reason about.",
          },

          {
            id: "step-based-ux-with-explicit-state",
            title: "3.5 Step-Based UX with Explicit State",
            bullets: [
              "Implemented a numbered, step-based flow aligned with real shipping workflows.",
              "Clear progression: addresses → parcel → rates → preview/print.",
            ],
            tradeOff:
              "No persisted state between refreshes. Considered acceptable for a prototype focused on flow clarity.",
            relatedLink: {
              label: "See how Coinpay UI keeps month selection in the URL.",
              href: `${projectPath("coinpay")}#process-navigation-state-via-url-month-selection`,
            },
          },

          {
            id: "happy-path-first-minimal-error-ui",
            title: "3.6 Happy Path First, Minimal Error UI",
            bullets: [
              "Avoided over-handling ambiguous EasyPost purchase responses.",
              "Removed misleading error UI when labels could still be generated successfully.",
            ],
            tradeOff:
              "Limited retry and recovery UX. With more time, explicit retry and reconciliation logic would be added.",
          },

          {
            id: "pdf-preview-via-iframe",
            title: "3.7 PDF Preview via iframe",
            bullets: [
              "Used an iframe for label preview instead of parsing or rendering PDFs.",
            ],
            tradeOff:
              "Less control over rendering, but significantly reduced bug surface area and kept focus on business logic.",
          },
        ],
      },

      {
        id: "solution",
        icon: "lightbulb",
        title: "4. Solution",
        bullets: [
          "A clean, predictable shipping label flow with strong validation and clear UX states.",
          "Architecture designed to scale beyond the MVP without refactoring core decisions.",
        ],
      },

      {
        id: "outcome",
        icon: "chart",
        title: "5. Outcome",
        body: [
          "Delivered a fully working prototype that met all assignment requirements, demonstrating engineering judgment, product thinking, and the ability to make deliberate tradeoffs under pressure.",
        ],
      },

      {
        id: "takeaways",
        icon: "star",
        title: "6. Key Takeaways",
        bullets: [
          "Time-boxing is about choosing what not to build as much as what to build.",
          "Domain correctness and type safety pay off immediately, even in prototypes.",
          "Clear architecture and explicit decisions make future iteration easier.",
        ],
      },

      {
        id: "technologies-and-skills",
        icon: "laptop",
        title: "7. Technologies & Skills",
        bullets: [
          "Next.js (App Router), React, TypeScript",
          "Zod (schema-first validation)",
          "Tailwind CSS, shadcn/ui",
          "EasyPost API",
          "Testing focused on domain logic and validation",
        ],
      },
    ],
  },
  // Coinpay UI
  {
    slug: "coinpay",
    title: "Coinpay UI",
    subtitle:
      "A fintech UI prototype showcasing interactions, motion, and theme-aware components in a realistic product scenario.",
    tags: ["UI Engineering", "Interactions", "Animations", "Design System"],

    meta: {
      role: "Frontend Engineer",
      type: "Assessment",
      duration: "2-3 days",
      year: "2026",
      focus: "Motion + UI states",
      outcome: "Polished, reviewable prototype",
    },

    image: {
      src: "/images/projects/coinpay.webp",
      alt: "Coinpay UI spending overview with a weekly bar chart and a purple payment card.",
      width: 1200,
      height: 572,
    },

    links: [
      { label: "Live Demo", href: "https://coinpay-ui.vercel.app" },
      { label: "GitHub", href: "https://github.com/coinpay-ui" },
    ],

    card: {
      pitch:
        "Sleek fintech UI prototype built to showcase interaction quality, motion, and theme-aware components under a 2–3 day deadline. Emphasizes design-system fidelity and production-like structure with realistic data.",
    },

    sections: [
      {
        id: "challenge",
        icon: "target",
        title: "1. Challenge",
        body: [
          "Build 2-3 screens from a provided fintech design system to demonstrate how I bring UI, interactions, and animations to life in a product-like frontend implementation.",
          "The experience needed to feel sleek, modern, intuitive, and fun — including navigation between pages and realistic UI components (loaders, buttons, states).",
        ],
      },

      {
        id: "context",
        icon: "clipboard",
        title: "2. Context & Constraints",
        bullets: [
          "Time-boxed take-home (2-3 days).",
          "Implement at least 2 pages with navigation between them.",
          "Design system provided (tokens, typography, components, variants).",
          "Light and dark themes required.",
          "UI-focused scope: no real backend/API contract.",
        ],
      },

      {
        id: "process",
        title: "Process & Key Decisions",
        body: ["Steps, decisions, and tradeoffs made along the way."],
        sections: [
          {
            id: "client-side-data-generation-faker",
            title: "3.1 Client-side Data Generation (Faker)",
            decision:
              "Generate transactional, balance, and category data on the client using @faker-js/faker.",
            body: [
              "Why: No backend contract, but realistic data makes the UI feel closer to a real product and enables multiple meaningful states quickly.",
            ],
            tradeOff:
              "Data regenerates on refresh unless seeded. Not production-ready, but ideal for prototyping and UI validation. Some formatting helpers were removed in newer faker versions, so formatting is handled manually.",
          },
          {
            id: "shared-domain-dataset-across-pages",
            title: "3.2 Shared Domain Dataset Across Pages",
            decision:
              "Centralize fake data generation so both pages consume the same underlying dataset.",
            body: [
              "Why: Ensures consistency (totals on Home match breakdown on Spending) and mimics real apps where multiple screens reflect the same domain data.",
            ],
            tradeOff:
              "Requires slightly more structure than page-local mocks and clearer boundaries between data generation and presentation.",
          },
          {
            id: "component-splitting-strategy",
            title: "3.3 Component Splitting Strategy",
            decision:
              "Extract reusable UI blocks into focused components (summary cards, chart section, category selector, transaction list, month selector).",
            body: [
              "Why: Improves readability, encourages reuse, and supports iteration without creating monolithic page components.",
            ],
            tradeOff:
              "More files and prop design overhead, especially while data is still mocked.",
          },
          {
            id: "layout-strategy-desktop-first-responsive-constraints",
            title: "3.4 Layout Strategy (Desktop-first, Responsive Constraints)",
            decision:
              "Optimize for desktop web (information density, multi-column layout), while supporting smaller breakpoints for readability.",
            body: [
              "Why: The product reads as a web app, not a mobile-first web experience; desktop structure improves scannability and hierarchy.",
            ],
            tradeOff:
              "Mobile is functional but not fully parity-optimized for a native mobile model (intentional given scope).",
          },
          {
            id: "design-tokens-css-variables",
            title: "3.5 Design Tokens + CSS Variables",
            decision:
              "Rely on design tokens and CSS variables (theme-aware) rather than hard-coded colors.",
            body: [
              "Why: Keeps light/dark mode predictable, scales better, and aligns with real design system practices.",
            ],
            tradeOff:
              "Some fine-grained matching required minor overrides and occasionally more verbose classnames.",
          },
          {
            id: "chart-implementation-no-chart-library",
            title: "3.6 Chart Implementation (No Chart Library)",
            decision:
              "Build the weekly chart with simple div-based layout instead of a charting dependency.",
            body: [
              "Why: The goal was UI, layout, and interaction quality, not data visualization tooling; this kept dependencies low and control high.",
            ],
            tradeOff:
              "Not interactive/animated and wouldn't scale to complex analytics (acceptable for prototype scope).",
          },
          {
            id: "navigation-state-via-url-month-selection",
            title: "3.7 Navigation & State via URL (Month Selection)",
            decision:
              "Reflect month selection in the URL and keep it shared between pages.",
            body: [
              "Why: Enables deep linking, predictable navigation, and sync between screens without adding global state libraries.",
            ],
            tradeOff:
              "Requires client components and careful handling of useSearchParams (including Suspense boundaries in Next.js).",
            relatedLink: {
              label: "See how ShipFlow handles state in a multi-step form.",
              href: `${projectPath("shipflow")}#process-step-based-ux-with-explicit-state`,
            },
          },
          {
            id: "mocked-auth-no-real-side-effects",
            title: "3.8 Mocked Auth (No Real Side Effects)",
            decision:
              "Keep login mocked and redirect directly to Home.",
            body: [
              "Why: Auth is out of scope for a UI-focused challenge and would add backend complexity without increasing signal for the intended evaluation.",
            ],
            tradeOff:
              "Not representative of real auth flows; assumes a trusted environment.",
          },
        ],
      },

      {
        id: "solution",
        icon: "lightbulb",
        title: "4. Solution",
        bullets: [
          "Theme-aware UI implementation aligned to the provided design system.",
          "Navigation between pages with shared URL-based state (month selection).",
          "Product-like UI states (components, loaders, and realistic data).",
        ],
      },

      {
        id: "outcome",
        icon: "chart",
        title: "5. Outcome",
        body: [
          "Delivered a polished prototype that demonstrates UI engineering judgment: design-system fidelity, predictable navigation/state, and interaction quality under a 2–3 day deadline.",
        ],
      },

      {
        id: "takeaways",
        icon: "star",
        title: "6. Key Takeaways",
        bullets: [
          "Strong signal in UI execution without overbuilding infrastructure.",
          "Theme/token discipline keeps complex UI consistent across modes.",
          "URL-based state is a clean, product-like approach for deep links and predictable flows.",
        ],
      },

      {
        id: "technologies-and-skills",
        icon: "laptop",
        title: "7. Technologies & Skills",
        bullets: [
          "Next.js (App Router), React, TypeScript",
          "Design tokens + CSS variables (theme-aware)",
          "UI component composition and variants",
          "Client-side data generation (faker)",
          "Animation and interaction patterns (subtle, intentional motion)",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectPath(slug: string) {
  return `/projects/${slug}`;
}
