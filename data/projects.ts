export type ProjectLink = {
  label: "Live Demo" | "GitHub" | "Figma";
  href: string;
};

export type ProjectMeta = {
  role: string; // e.g. "Full-Stack Developer", "Frontend Engineer", "UX Designer"
  type: "Personal" | "Academic" | "Assessment" | "Client";
  duration?: string; // e.g. "8 weeks"
  year?: string; // e.g. "2024"
};

export type ProjectSection = {
  title: string; // e.g. "3.1 Research & Understanding"
  bullets?: string[];
  body?: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];

  meta: ProjectMeta;
  links?: ProjectLink[];

  heroImage?: {
    src: string;
    alt: string;
  };

  card?: {
    featured?: boolean; // marca qual é o “big featured”
    eyebrow?: string; // ex: "Featured"
    pitch?: string; // texto do card (1-2 linhas)
    highlights?: string[]; // chips tipo “Role: …”, “Focus: …”
    tech?: string[]; // badges secundárias
  };

  sections: {
    challenge: ProjectSection;
    context?: ProjectSection;
    process: ProjectSection[]; // array = sub-sections (3.1, 3.2, etc.)
    solution?: ProjectSection;
    outcome: ProjectSection;
    takeaways: ProjectSection;
    technologies: ProjectSection;
  };
};

export const projects: Project[] = [
  // eMed
  {
    slug: "emed",
    title: "eMed",
    subtitle:
      "From appointment scheduling to managing patient histories and lab results, the complexity of medical clinic operations.",
    tags: ["UI Systems", "Full-Stack", "Healthcare Workflows"],

    meta: {
      role: "Full-Stack Developer",
      type: "Academic",
      duration: "2 months",
      year: "2022",
    },

    links: [
      { label: "GitHub", href: "https://github.com/gbspecapedra/emed" },
      {
        label: "Figma",
        href: "https://www.figma.com/design/TDYKZPMyMp0bqj3QDAdh6Q/eMED?node-id=0-1&p=f",
      },
    ],
    card: {
      eyebrow: "Case Study",
      pitch:
        "Built a role-aware clinic management platform—from appointments to patient records and lab results—turning complex clinical workflows into a clear, responsive experience.",
      tech: ["React", "Next.js", "TypeScript", "Node.js"],
      highlights: [
        "Role: Full-Stack (UI-led)",
        "Focus: Role-based workflows + secure data handling",
        "Outcome: Delivered a functional end-to-end system",
      ],
    },
    sections: {
      challenge: {
        title: "1. Challenge",
        body: [
          "Building eMed meant tackling the complexity of medical clinic operations—from appointment scheduling to patient histories and lab results—while keeping the system intuitive for receptionists and physicians.",
          "The goal was to design and develop a scalable, user-friendly web application supporting multiple user roles, secure data management, and real-world clinical workflows.",
        ],
      },

      context: {
        title: "2. Context & Constraints",
        bullets: [
          "Academic project with no real client and no existing product baseline.",
          "Full ownership of system architecture, UX, and feature definition from scratch.",
          "Required role-based access and permissions across core workflows.",
          "Needed to stay scalable and extensible, even as a first version.",
        ],
      },

      process: [
        {
          title: "3.1 Framing the Problem",
          bullets: [
            "Chose to model the system around real clinic roles (receptionist, doctor, admin) instead of generic CRUD screens.",
            "Mapped workflows before UI to avoid feature-driven design disconnected from daily operations.",
            "Accepted increased upfront complexity in exchange for clearer mental models and scalable flows.",
          ],
        },
        {
          title: "3.2 Information Architecture & Navigation",
          bullets: [
            "Designed role-based navigation to reduce cognitive load and prevent access to irrelevant features.",
            "Avoided a single universal dashboard in favor of task-oriented entry points.",
            "Traded flexibility for clarity by limiting cross-role visibility where it could cause confusion.",
          ],
        },
        {
          title: "3.3 UI Decisions for Dense Clinical Data",
          bullets: [
            "Prioritized scannability and hierarchy over visual flair, given the density of tables and records.",
            "Used consistent layout patterns across modules to reduce learning cost.",
            "Chose predictable UI patterns instead of custom interactions to favor speed and reliability.",
          ],
        },
        {
          title: "3.4 Backend Structure & Permissions",
          bullets: [
            "Separated domain logic from UI concerns to keep business rules consistent across roles.",
            "Implemented explicit permission boundaries rather than implicit UI-only restrictions.",
            "Accepted a more verbose permission model to reduce risk and ambiguity in medical data handling.",
          ],
        },
        {
          title: "3.5 Integration & Validation",
          bullets: [
            "Focused testing on cross-role flows instead of isolated features.",
            "Validated end-to-end scenarios to ensure data consistency across appointments, records, and results.",
            "Accepted limited automation in favor of manual flow validation due to academic constraints.",
          ],
        },
        {
          title: "3.6 Delivery",
          bullets: [
            "Presented the final product as part of the master's project defense, meeting academic requirements for graduation.",
          ],
        },
      ],

      solution: {
        title: "4. Solution",
        bullets: [
          "Role-aware clinic management system aligned with real operational workflows.",
          "Clear separation between administrative, clinical, and operational responsibilities.",
          "Consistent interaction patterns that reduce onboarding and daily friction.",
          "Architecture designed to scale features without breaking mental models.",
        ],
      },

      outcome: {
        title: "5. Outcome",
        body: [
          "Delivered a robust, functional full-stack application aligned with healthcare workflows.",
          "Validated end-to-end product development skills and supported completion of the master’s degree.",
        ],
      },

      takeaways: {
        title: "6. Key Takeaways",
        bullets: [
          "Designing workflows before UI leads to more resilient systems.",
          "Clarity and predictability matter more than visual novelty in operational software.",
          "Role-based constraints are a UX feature, not a limitation.",
          "End-to-end ownership sharpened my decision-making and tradeoff evaluation.",
        ],
      },

      technologies: {
        title: "7. Technologies & Skills",
        bullets: [
          "Design: Figma",
          "Frontend: React, Next.js, TypeScript, Chakra UI",
          "Backend: Node.js, Express, Adonis.js",
          "Version Control: Git, GitHub",
        ],
      },
    },
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
    },

    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/file/8LxIPeBC6gf2j96EN5WHv6/UX-Final-Project",
      },
    ],

    card: {
      eyebrow: "UX Case Study",
      pitch:
        "A mobile-first UX project designed to reduce decision fatigue for parents by prioritizing trust signals, relevant filters, and parent-driven content.",
      tech: ["UX Research", "Information Architecture", "Figma"],
      highlights: [
        "Role: UX Designer",
        "Focus: Decision-making under time pressure",
        "Outcome: Tested, iteration-ready prototype",
      ],
    },

    sections: {
      challenge: {
        title: "1. Challenge",
        body: [
          "Parents often need to decide quickly where to take their kids, but existing platforms are cluttered, generic, and lack family-specific trust signals. The challenge was to design a mobile experience that supports confident, low-effort decisions in real-life situations.",
        ],
      },

      context: {
        title: "2. Context & Constraints",
        bullets: [
          "UX-focused academic project (no production build).",
          "Mobile-first by default, assuming usage on the go.",
          "Limited scope required prioritizing core decision flows over feature completeness.",
        ],
      },

      process: [
        {
          title: "3.1 Research & Key Insights",
          bullets: [
            "Conducted interviews with parents of children aged 1-9 to understand real decision contexts.",
            "Identified key pain points: irrelevant reviews, lack of reliable filters, and missing practical details like restrooms and parking.",
            "Observed strong frustration with generic platforms that are not parent-aware.",
          ],
        },

        {
          title: "3.2 Decision: Prioritizing Trust Over Volume",
          bullets: [
            "Chose to focus on fewer, parent-relevant reviews instead of high-volume, generic ratings.",
            "Emphasized reviews from parents with similar-age children.",
          ],
          body: [
            "Tradeoff: Reduced content breadth in favor of higher perceived relevance and trust. This limited scalability in early stages but significantly improved decision confidence.",
          ],
        },

        {
          title: "3.3 Decision: Mobile-First, Task-Oriented Navigation",
          bullets: [
            "Designed flows optimized for quick scanning and minimal input.",
            "Structured navigation around core tasks: discover, save, review.",
          ],
          body: [
            "Tradeoff: Some advanced filtering and exploration features were intentionally deferred to avoid overwhelming users during time-sensitive decisions.",
          ],
        },

        {
          title: "3.4 Prototyping & Validation",
          bullets: [
            "Created low-fidelity wireframes to validate structure early.",
            "Built an interactive prototype to test key flows such as bookmarking and adding reviews.",
            "Iterated on navigation and review submission based on usability testing.",
          ],
        },

        {
          title: "3.5 Visual & Accessibility Decisions",
          bullets: [
            "Adopted a clean, family-friendly visual language with high readability.",
            "Prioritized clear hierarchy and touch-friendly components.",
          ],
          body: [
            "Tradeoff: Visual expressiveness was intentionally restrained to keep cognitive load low, especially for stressed or distracted parents.",
          ],
        },
      ],

      solution: {
        title: "4. Solution",
        bullets: [
          "A mobile-first prototype that helps parents discover, evaluate, and save family-friendly places with minimal effort.",
          "Clear trust signals, practical filters, and parent-driven content at the core of the experience.",
        ],
      },

      outcome: {
        title: "5. Outcome",
        body: [
          "The project resulted in a cohesive, usability-tested prototype that demonstrates a full UX process — from research to validated interaction design — with a strong emphasis on real-world decision-making.",
        ],
      },

      takeaways: {
        title: "6. Key Takeaways",
        bullets: [
          "Designing for real-life constraints often means removing features, not adding them.",
          "Trust and relevance matter more than volume in family-focused products.",
          "Strong UX decisions come from clearly understanding emotional and situational context.",
        ],
      },

      technologies: {
        title: "7. Technologies & Skills",
        bullets: [
          "UX Tools: Figma",
          "Methods: User Interviews, Empathy Mapping, Personas, User Flows, IA",
          "Deliverables: Wireframes, Interactive Prototype, Style Guide",
          "Testing: Usability Testing, Feedback Synthesis, Accessibility Review",
        ],
      },
    },
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
    },

    links: [
      {
        label: "GitHub",
        href: "https://github.com/gbpecapedra/shipflow",
      },
      {
        label: "Live Demo",
        href: "https://shipflow.vercel.app",
      },
    ],

    card: {
      featured: true,
      eyebrow: "Featured",
      pitch:
        "A 4-hour take-home project treated as a real MVP: a reliable USPS label creation flow focused on domain correctness, predictable UX, and scalable architecture.",
      tech: ["Next.js", "TypeScript", "EasyPost API"],
      highlights: [
        "Role: Frontend Engineer",
        "Focus: Correctness, UX states, architecture",
        "Outcome: Shippable, well-structured prototype",
      ],
    },

    sections: {
      challenge: {
        title: "1. Challenge",
        body: [
          "Build a USPS shipping label creation flow using the EasyPost API within a strict 4-hour timebox. The goal was not feature completeness, but demonstrating sound engineering judgment, UX clarity, and correct domain handling.",
        ],
      },

      context: {
        title: "2. Context & Constraints",
        bullets: [
          "Time-boxed take-home (prototype expected, not production-ready).",
          "US-only addresses enforced.",
          "Required steps: address validation, rate selection, label purchase, and printable PDF output.",
          "Ambiguous requirements designed to test decision-making.",
        ],
      },

      process: [
        {
          title: "3.1 Decision: Treat the Project as a Real MVP",
          bullets: [
            "Prioritized a clear happy path over exhaustive edge cases.",
            "Focused on correctness, type safety, and predictable UX states.",
          ],
          body: [
            "Tradeoff: Several production features were intentionally deferred (auth, persistence, retries) to protect clarity and execution quality within the time constraint.",
          ],
        },

        {
          title: "3.2 Decision: Next.js App Router with Colocated API Routes",
          bullets: [
            "Used Next.js App Router with API routes for address verification, rates, and label purchase.",
            "Shared types between frontend and backend.",
          ],
          body: [
            "Tradeoff: No separate backend service abstraction. In a larger system, this would likely evolve into a dedicated API layer or BFF.",
          ],
        },

        {
          title: "3.3 Decision: Zod as a Single Source of Truth",
          bullets: [
            "Used Zod schemas for form validation, API input validation, and type inference.",
            "Explicitly modeled domain constraints (US-only addresses, parcel attributes).",
          ],
          body: [
            "Tradeoff: Slight upfront cost in schema design, accepted in exchange for strong correctness guarantees and maintainability.",
          ],
        },

        {
          title: "3.4 Decision: Explicit Domain Model for the Flow",
          bullets: [
            "Modeled the entire label creation process as a single domain object (from, to, parcel).",
            "Mapped internal models to EasyPost payloads via explicit mapper functions.",
          ],
          body: [
            "Tradeoff: Less flexible than per-step models, but chosen intentionally to keep the MVP predictable, testable, and easy to reason about.",
          ],
        },

        {
          title: "3.5 Decision: Step-Based UX with Explicit State",
          bullets: [
            "Implemented a numbered, step-based flow aligned with real shipping workflows.",
            "Clear progression: addresses → parcel → rates → preview/print.",
          ],
          body: [
            "Tradeoff: No persisted state between refreshes. Considered acceptable for a prototype focused on flow clarity.",
          ],
        },

        {
          title: "3.6 Decision: Happy Path First, Minimal Error UI",
          bullets: [
            "Avoided over-handling ambiguous EasyPost purchase responses.",
            "Removed misleading error UI when labels could still be generated successfully.",
          ],
          body: [
            "Tradeoff: Limited retry and recovery UX. With more time, explicit retry and reconciliation logic would be added.",
          ],
        },

        {
          title: "3.7 Decision: PDF Preview via iframe",
          bullets: [
            "Used an iframe for label preview instead of parsing or rendering PDFs.",
          ],
          body: [
            "Tradeoff: Less control over rendering, but significantly reduced bug surface area and kept focus on business logic.",
          ],
        },
      ],

      solution: {
        title: "4. Solution",
        bullets: [
          "A clean, predictable shipping label flow with strong validation and clear UX states.",
          "Architecture designed to scale beyond the MVP without refactoring core decisions.",
        ],
      },

      outcome: {
        title: "5. Outcome",
        body: [
          "Delivered a fully working prototype that met all assignment requirements, demonstrating engineering judgment, product thinking, and the ability to make deliberate tradeoffs under pressure.",
        ],
      },

      takeaways: {
        title: "6. Key Takeaways",
        bullets: [
          "Time-boxing is about choosing what not to build as much as what to build.",
          "Domain correctness and type safety pay off immediately, even in prototypes.",
          "Clear architecture and explicit decisions make future iteration easier.",
        ],
      },

      technologies: {
        title: "7. Technologies & Skills",
        bullets: [
          "Next.js (App Router), React, TypeScript",
          "Zod (schema-first validation)",
          "Tailwind CSS, shadcn/ui",
          "EasyPost API",
          "Testing focused on domain logic and validation",
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
