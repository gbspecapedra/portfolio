export const siteName = "Gisele Pecapedra";
export const siteUrl = "https://giselepecapedra.com";

export const legalPages = {
  privacy: { path: "/privacy", title: "Privacy & Cookies", label: "Privacy & Cookies" },
  terms: { path: "/terms", title: "Terms of Use", label: "Terms of Use" },
  accessibility: {
    path: "/accessibility",
    title: "Accessibility Statement",
    label: "Accessibility",
  },
} as const;

export const homeSectionIds = {
  home: "home",
  projects: "projects",
  experience: "experience",
  about: "about",
  contact: "contact",
} as const;
