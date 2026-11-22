const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const companyShortNames = { winedirect: "WineDirect", feesc: "FEESC" };
const web = (url) => ({ link_type: "Web", url });
const group = (values = []) => values.map((label) => ({ label }));
const rich = (value, type = "paragraph") =>
  (Array.isArray(value) ? value : value ? [value] : []).map((text) => ({ type, text, spans: [] }));

function month(value) {
  const [abbreviation, year] = value.split(" ");
  const index = months.indexOf(abbreviation);
  if (index === -1 || !/^\d{4}$/.test(year)) throw new Error("The source contains an invalid employment month.");
  return `${year}-${String(index + 1).padStart(2, "0")}`;
}

function sections(items = [], parent = "") {
  return items.flatMap((section) => {
    const relation = section.relatedLink;
    const target = relation && /^\/projects\/([a-z0-9-]+)(?:#([a-z0-9-]+))?$/.exec(relation.href);
    if (relation && !target) throw new Error(`Unmapped related project URL: ${relation.href}`);
    const path = parent ? `${parent}/${section.id}` : section.id;
    return [
      {
        section_id: section.id, parent_path: parent || undefined, title: section.title, icon: section.icon,
        body: rich(section.body), bullets: rich(section.bullets, "list-item"),
        decision: rich(section.decision), trade_off: rich(section.tradeOff), image: asset(section.image),
        related_label: relation?.label, related_project: target ? { projectUid: target[1] } : undefined,
        related_fragment: target?.[2],
      },
      ...sections(section.sections, path),
    ];
  });
}

const asset = (file) => file && { sourceImage: file };

export function mapSource({ home, settings, about, projects, experience }) {
  return [
    {
      type: "homepage", title: "Homepage",
      data: {
        hero_headline: home.heroHeadline, hero_description: rich(home.heroDescription), hero_image: asset(home.heroImage),
        primary_label: home.primary.label, primary_destination: home.primary.destination,
        secondary_label: home.secondary.label, secondary_destination: home.secondary.destination, strengths: home.strengths,
        projects_heading: home.projectsHeading, experience_heading: home.experienceHeading,
        workflow_heading: home.workflowHeading, workflow_intro: rich(home.workflowIntro),
        workflow: home.workflow.map((entry) => ({ ...entry, description: rich(entry.description) })),
        technologies_heading: home.technologiesHeading, technologies: home.technologies,
        contact_eyebrow: home.contactEyebrow, contact_heading: home.contactHeading, contact_description: rich(home.contactDescription),
        meta_title: home.title, meta_description: home.description,
      },
    },
    {
      type: "site_settings", title: "Site Settings",
      data: {
        display_name: settings.name, professional_title: settings.professionalTitle, email: settings.email,
        linkedin: web(settings.linkedin), github: web(settings.github), resume: web(settings.resume),
        ...Object.fromEntries(Object.entries(settings.navigation).map(([key, label]) => [`nav_${key}`, label])),
        footer_summary: rich(settings.footer.summary), footer_explore: settings.footer.explore,
        footer_contact: settings.footer.contact, footer_invitation: rich(settings.footer.invitation),
        footer_action: settings.footer.action, copyright: settings.footer.copyright,
        social_image: asset(settings.socialImage),
      },
    },
    {
      type: "about", title: "About",
      data: {
        eyebrow: about.eyebrow, headline: about.headline.map((line) => ({ line })),
        introduction: rich(about.introduction), portrait: asset(about.portrait), resume_label: about.resumeLabel,
        values: about.values.map((entry) => ({ ...entry, description: rich(entry.description) })),
      },
    },
    ...projects.map(({ slug, title, subtitle, seoDescription, tags, meta, image, links, card, sections: items }, index) => ({
      type: "project", uid: slug, title,
      data: {
        title, subtitle: rich(subtitle), meta_description: seoDescription,
        tags: group(tags), role: meta?.role, project_type: meta?.type, duration: meta?.duration,
        year: meta?.year, summary_role: meta?.summaryRole, focus: meta?.focus, outcome: meta?.outcome,
        image: asset(image), links: (links ?? []).map(({ label, href, external }) => ({
          label, link: web(href), external: external ?? /^https?:\/\//i.test(href),
        })),
        show_card: Boolean(card), featured: Boolean(card?.featured), display_order: index + 1, pitch: rich(card?.pitch),
        sections: sections(items),
      },
    })),
    ...experience.map((job) => {
      const [start, end] = job.dates.split(" – ");
      return {
        type: "experience", uid: job.id, title: `${job.title} · ${job.company}`,
        data: {
          company: job.company, company_short: companyShortNames[job.id],
          role: job.title, location: job.location, start_month: month(start),
          end_month: end === "Present" ? undefined : month(end), current: end === "Present",
          summary: rich(job.summary), impact: rich(job.impact, "list-item"),
          skills: group(job.skills), additional_skills: group(job.additionalSkills),
        },
      };
    }),
  ];
}
