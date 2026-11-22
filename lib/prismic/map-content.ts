import { asText, isFilled, type ImageField, type LinkField, type RichTextField } from "@prismicio/client";

import type { Project, ProjectImage, ProjectSection } from "../../data/project-types";
import { homeSectionIds, projectPath, siteUrl } from "../../data/site.ts";
import type {
  AboutDocument, ExperienceDocument, HomepageDocument, ProjectDocument, SiteSettingsDocument,
} from "../../prismicio-types";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validProjectUid(uid: string | null | undefined): uid is string {
  return typeof uid === "string" && slugPattern.test(uid);
}

function required<T>(value: T | null | undefined, field: string): T {
  if (value == null || value === "") throw new Error(`Required Prismic field is empty: ${field}.`);
  return value;
}

function prose(field: RichTextField | undefined) {
  return asText(field, "\n\n") || undefined;
}

function labels(items: readonly { label: string | null }[] | undefined) {
  return (items ?? []).flatMap(({ label }) => label ? [label] : []);
}

function image(field: ImageField | undefined): ProjectImage | undefined {
  if (!isFilled.image(field)) return undefined;
  return { src: field.url, alt: field.alt ?? "", width: field.dimensions.width, height: field.dimensions.height };
}

function webLink(field: LinkField | undefined) {
  if (field?.link_type !== "Web" || !field.url) return undefined;
  const url = URL.parse(field.url);
  if (url && (url.protocol === "https:" || url.protocol === "http:")) return field.url;
}

function resumeLink(field: LinkField | undefined) {
  const href = required(webLink(field), "site_settings.resume");
  const url = new URL(href);
  return url.origin === siteUrl ? url.pathname + url.search + url.hash : href;
}

const destinations = {
  "Case studies": homeSectionIds.projects,
  Experience: homeSectionIds.experience,
  About: homeSectionIds.about,
  Contact: homeSectionIds.contact,
} as const;

export function mapHomepage({ data }: HomepageDocument) {
  return {
    hero: {
      headline: required(data.hero_headline, "homepage.hero_headline"),
      description: required(prose(data.hero_description), "homepage.hero_description"),
      image: required(image(data.hero_image), "homepage.hero_image"),
      primary: {
        label: required(data.primary_label, "homepage.primary_label"),
        id: (data.primary_destination && destinations[data.primary_destination]) || homeSectionIds.projects,
      },
      secondary: {
        label: required(data.secondary_label, "homepage.secondary_label"),
        id: (data.secondary_destination && destinations[data.secondary_destination]) || homeSectionIds.contact,
      },
      strengths: (data.strengths ?? []).flatMap(({ label, detail, icon }) => label ? [{ label, detail, icon }] : []),
    },
    projectsHeading: required(data.projects_heading, "homepage.projects_heading"),
    experienceHeading: required(data.experience_heading, "homepage.experience_heading"),
    workflow: {
      heading: required(data.workflow_heading, "homepage.workflow_heading"),
      intro: required(prose(data.workflow_intro), "homepage.workflow_intro"),
      items: (data.workflow ?? []).flatMap(({ title, description, icon }) =>
        title ? [{ title, description: prose(description), icon }] : []),
    },
    technologies: {
      heading: required(data.technologies_heading, "homepage.technologies_heading"),
      items: (data.technologies ?? []).flatMap(({ label, icon }) => label ? [{ label, icon }] : []),
    },
    contact: {
      eyebrow: required(data.contact_eyebrow, "homepage.contact_eyebrow"),
      heading: required(data.contact_heading, "homepage.contact_heading"),
      description: required(prose(data.contact_description), "homepage.contact_description"),
    },
    seo: {
      title: required(data.meta_title, "homepage.meta_title"),
      description: required(data.meta_description, "homepage.meta_description"),
      image: image(data.social_image),
    },
  };
}

export function mapSiteSettings({ data }: SiteSettingsDocument) {
  const name = required(data.display_name, "site_settings.display_name");
  const email = required(data.email, "site_settings.email").trim();
  if (!/^[^\s@?%#]+@[^\s@?%#]+$/.test(email)) throw new Error("Invalid public email in Prismic Site Settings.");
  return {
    name,
    email,
    professionalTitle: required(data.professional_title, "site_settings.professional_title"),
    linkedin: webLink(data.linkedin),
    github: webLink(data.github),
    resume: resumeLink(data.resume),
    navigation: [
      { id: homeSectionIds.home, label: required(data.nav_home, "site_settings.nav_home") },
      { id: homeSectionIds.projects, label: required(data.nav_projects, "site_settings.nav_projects") },
      { id: homeSectionIds.experience, label: required(data.nav_experience, "site_settings.nav_experience") },
      { id: homeSectionIds.about, label: required(data.nav_about, "site_settings.nav_about") },
      { id: homeSectionIds.contact, label: required(data.nav_contact, "site_settings.nav_contact") },
    ],
    footer: {
      summary: required(prose(data.footer_summary), "site_settings.footer_summary"),
      explore: required(data.footer_explore, "site_settings.footer_explore"),
      contact: required(data.footer_contact, "site_settings.footer_contact"),
      invitation: required(prose(data.footer_invitation), "site_settings.footer_invitation"),
      action: required(data.footer_action, "site_settings.footer_action"),
      copyright: required(data.copyright, "site_settings.copyright"),
    },
    socialImage: required(image(data.social_image), "site_settings.social_image"),
  };
}

export function mapAbout({ data }: AboutDocument) {
  const headline = (data.headline ?? []).flatMap(({ line }) => line ? [line] : []);
  if (!headline.length) throw new Error("Required Prismic field is empty: about.headline.");
  return {
    eyebrow: required(data.eyebrow, "about.eyebrow"),
    headline,
    introduction: required(prose(data.introduction), "about.introduction"),
    portrait: required(image(data.portrait), "about.portrait"),
    resumeLabel: required(data.resume_label, "about.resume_label"),
    values: (data.values ?? []).flatMap(({ title, description, icon }) =>
      title ? [{ title, description: prose(description), icon }] : []),
  };
}

function monthLabel(month: string | null) {
  const date = month && /^(\d{4})-(0[1-9]|1[0-2])$/.test(month)
    ? new Date(`${month}-01T00:00:00Z`)
    : undefined;
  return date?.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}

function textBlocks(field: RichTextField | undefined) {
  return (field ?? []).flatMap((node) => "text" in node && node.text ? [node.text] : []);
}

export function mapExperience({ uid, data }: ExperienceDocument) {
  const start = required(monthLabel(data.start_month), "experience.start_month");
  const end = data.current ? "Present" : monthLabel(data.end_month);
  return {
    id: uid,
    company: required(data.company, "experience.company"),
    companyShort: data.company_short,
    title: required(data.role, "experience.role"),
    location: data.location,
    dates: end ? `${start} – ${end}` : start,
    summary: required(prose(data.summary), "experience.summary"),
    impact: textBlocks(data.impact),
    skills: labels(data.skills),
    additionalSkills: labels(data.additional_skills),
  };
}

export function orderExperience(documents: readonly ExperienceDocument[]) {
  return [...documents].sort((a, b) =>
    (b.data.start_month ?? "").localeCompare(a.data.start_month ?? "") || a.uid.localeCompare(b.uid));
}

function mapSections(rows: ProjectDocument["data"]["sections"] | undefined): ProjectSection[] {
  const entries = new Map<string, { parent: string; section: ProjectSection }>();
  for (const row of rows ?? []) {
    if (!validProjectUid(row.section_id) || !row.title) continue;
    const parent = row.parent_path?.trim() ?? "";
    const path = [parent, row.section_id].filter(Boolean).join("/");
    if (entries.has(path)) throw new Error(`Duplicate Prismic project section path: ${path}.`);
    const related = row.related_project;
    const relatedLink = related?.link_type === "Document" && !related.isBroken &&
        related.type === "project" && validProjectUid(related.uid) && row.related_label
      ? {
          label: row.related_label,
          href: projectPath(related.uid) + (validProjectUid(row.related_fragment) ? `#${row.related_fragment}` : ""),
        }
      : undefined;
    entries.set(path, {
      parent,
      section: {
        id: row.section_id, title: row.title, icon: row.icon ?? undefined, body: textBlocks(row.body),
        bullets: textBlocks(row.bullets), decision: prose(row.decision), tradeOff: prose(row.trade_off),
        image: image(row.image), relatedLink,
      },
    });
  }

  const sections: ProjectSection[] = [];
  for (const { parent, section } of entries.values()) {
    if (!parent) {
      sections.push(section);
    } else {
      const ancestor = entries.get(parent);
      if (!ancestor) throw new Error(`Prismic project section parent does not exist: ${parent}.`);
      (ancestor.section.sections ??= []).push(section);
    }
  }
  return sections;
}

export function mapProject({ uid, data }: ProjectDocument): Project {
  return {
    slug: uid,
    title: required(data.title, "project.title"),
    subtitle: required(prose(data.subtitle), "project.subtitle"),
    seoTitle: data.meta_title ?? undefined,
    seoDescription: data.meta_description ?? undefined,
    socialImage: image(data.social_image),
    tags: labels(data.tags),
    meta: {
      role: data.role ?? undefined,
      type: data.project_type ?? undefined,
      duration: data.duration ?? undefined,
      year: data.year ?? undefined,
      summaryRole: data.summary_role ?? undefined,
      focus: data.focus ?? undefined,
      outcome: data.outcome ?? undefined,
    },
    image: image(data.image),
    links: (data.links ?? []).flatMap(({ label, link, external }) => {
      const href = webLink(link);
      return href && label ? [{ label, href, external }] : [];
    }),
    card: data.show_card ? { featured: data.featured, pitch: prose(data.pitch) } : undefined,
    sections: mapSections(data.sections),
  };
}

export function orderProjects(documents: readonly ProjectDocument[]) {
  return [...documents].sort((a, b) =>
    Number(b.data.featured === true) - Number(a.data.featured === true) ||
    (a.data.display_order ?? Infinity) - (b.data.display_order ?? Infinity) ||
    a.uid.localeCompare(b.uid));
}

export type Homepage = ReturnType<typeof mapHomepage>;
export type SiteSettings = ReturnType<typeof mapSiteSettings>;
export type About = ReturnType<typeof mapAbout>;
export type Experience = ReturnType<typeof mapExperience>;
