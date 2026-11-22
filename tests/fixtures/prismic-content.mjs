import { mapSource } from "../../scripts/prismic/map-source.mjs";

export const owner = "Sam Example";
export const homeTitle = `${owner} — Frontend portfolio`;
export const coverAlt = "Example portfolio social cover";
export const alphaTitle = "Sample Project Alpha";
export const betaTitle = "Sample Project Beta";
export const draftTitle = "Draft Sample Project";
export const webhookSecret = "fixture-webhook-secret";

const cover = { src: "/og-cover.png", alt: coverAlt, width: 1200, height: 630 };
const figure = { src: "/images/projects/goplaces.webp", alt: "Example app screenshot", width: 1200, height: 572 };

export const fixtureSource = {
  home: {
    heroHeadline: "Example frontend engineering portfolio.",
    heroDescription: "I build accessible interfaces with product and design teams.",
    heroImage: { src: "/images/hero-image.png", alt: "", width: 1448, height: 1086 },
    primary: { label: "Explore case studies", destination: "Case studies" },
    secondary: { label: "Get in touch", destination: "Contact" },
    strengths: [
      { icon: "architecture", label: "UI architecture" },
      { icon: "accessibility", label: "Access for everyone" },
    ],
    projectsHeading: "Case studies",
    experienceHeading: "Professional experience",
    workflowHeading: "How I work",
    workflowIntro: "Example workflow introduction.",
    workflow: [{ icon: "collaborate", title: "Collaborate", description: "Example collaboration." }],
    technologiesHeading: "Technologies & Practices",
    technologies: [{ icon: "react", label: "React" }],
    contactEyebrow: "Contact",
    contactHeading: "Let’s work together.",
    contactDescription: "Get in touch about example projects.",
    title: homeTitle,
    description: "Sample frontend projects, experience, and contact details.",
  },
  settings: {
    name: owner,
    professionalTitle: "Example Frontend Engineer",
    email: "portfolio@example.test",
    linkedin: "https://example.test/social",
    github: "https://example.test/code",
    resume: "https://giselepecapedra.com/Gisele-Pecapedra-Resume.pdf",
    navigation: { home: "Home", projects: "Case Studies", experience: "Experience", about: "About", contact: "Contact" },
    footer: {
      summary: "Example professional summary.",
      explore: "Explore",
      contact: "Let’s Connect",
      invitation: "Get in touch about example projects.",
      action: "Get in touch",
      copyright: "© {year} {name}. All rights reserved.",
    },
    socialImage: cover,
  },
  about: {
    eyebrow: "About me",
    headline: ["A frontend engineer", "who builds example apps."],
    introduction: "Example background and accessibility interests.",
    portrait: { src: "/images/headshot.png", alt: owner, width: 1254, height: 1254 },
    resumeLabel: "Download Resume (PDF)",
    values: [{ icon: "curiosity", title: "Curious", description: "Example value." }],
  },
  projects: [
    { slug: "gamma", title: "Sample Project Gamma", subtitle: "A routed project without a listing card." },
    {
      slug: "beta",
      title: betaTitle,
      subtitle: "A sample report interface.",
      card: {},
      sections: [{
        id: "context", title: "Context", body: ["Example context."],
        sections: [{
          id: "filter", title: "Report filter", body: ["Example filter."],
          relatedLink: { label: "See the Alpha decision.", href: "/projects/alpha#process-decision" },
        }],
      }],
    },
    {
      slug: "alpha",
      title: alphaTitle,
      subtitle: "A sample project with a screenshot.",
      seoDescription: "An example case study with engineering decisions.",
      image: figure, card: { featured: true, pitch: "Sample listing introduction." },
      meta: { type: "Personal", role: "Example frontend engineer" },
      tags: ["Example UI"],
      links: [{ label: "Example demo", href: "https://example.test/demo" }],
      sections: [
        { id: "context", title: "1. Context", body: ["Example project context."] },
        { id: "problem", title: "2. Problem", body: ["Example constraints."] },
        {
          id: "process", title: "3. Process", sections: [{
            id: "decision", title: "Design decision", body: ["Example decision."], bullets: ["Example bullet."],
            decision: "Example decision note.", tradeOff: "Example trade-off.",
            relatedLink: { label: "See the Beta filter.", href: "/projects/beta#context-filter" },
          }],
        },
        { id: "implementation", title: "4. Implementation", body: ["Example implementation."] },
        { id: "outcome", title: "5. Outcome", body: ["Example outcome."] },
      ],
    },
  ],
  experience: [
    {
      id: "former", company: "Second Example Company", title: "Former Role", dates: "Jan 2022 – Jan 2024",
      summary: "Example former role.", impact: [], skills: [], additionalSkills: [],
    },
    {
      id: "example-company", company: "Example Company", title: "Example Frontend Engineer", dates: "Mar 2025 – Present",
      location: "Remote", summary: "Builds example interfaces.",
      impact: ["Ships example features."], skills: ["React"], additionalSkills: ["Testing"],
    },
  ],
};

function imageValue({ src, alt, width, height }) {
  return { id: src, url: src, alt, dimensions: { width, height } };
}

function documentValue(value) {
  if (Array.isArray(value)) return value.map(documentValue);
  if (!value || typeof value !== "object") return value;
  if ("sourceImage" in value) return imageValue(value.sourceImage);
  if ("projectUid" in value) {
    return { link_type: "Document", type: "project", id: `id-${value.projectUid}`, uid: value.projectUid };
  }
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, documentValue(item)]));
}

const plan = mapSource(fixtureSource);
export const published = plan.map(({ type, uid, data }) => ({
  id: `id-${uid ?? type}`, uid: uid ?? null, type,
  lang: "en-us", tags: [], alternate_languages: [],
  first_publication_date: "2025-01-01T00:00:00+0000",
  last_publication_date: "2025-01-01T00:00:00+0000",
  url: uid && type === "project" ? `/projects/${uid}` : type === "homepage" ? "/" : null,
  data: documentValue(data),
}));
const baseDraft = published.find(({ uid }) => uid === "gamma");
export const draft = {
  ...baseDraft, id: "id-draft-example", uid: "draft-example", url: "/projects/draft-example",
  data: { ...baseDraft.data, title: draftTitle },
};
