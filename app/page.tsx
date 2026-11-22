import type { Metadata } from "next";

import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  HowIWorkSection,
  ProjectsSection,
  TechnologiesSection,
} from "@/components/home";
import { JsonLd } from "@/components/json-ld";
import { SiteMain, SiteShell } from "@/components/site-shell";
import { homeSectionIds, siteUrl } from "@/data/site";
import { getAbout, getExperience, getHomepage, getProjectCards, getSiteSettings } from "@/lib/prismic/content";
import { pageMetadata, personId, websiteId } from "@/lib/seo";

const homeUrl = new URL("/", siteUrl).href;

export async function generateMetadata(): Promise<Metadata> {
  const [settings, { seo }] = await Promise.all([getSiteSettings(), getHomepage()]);
  return {
    ...pageMetadata({ url: homeUrl, ...seo, settings }),
    title: { absolute: seo.title },
  };
}

export default async function HomePage() {
  const [settings, home, about, experience, projects] = await Promise.all([
    getSiteSettings(), getHomepage(), getAbout(), getExperience(), getProjectCards(),
  ]);
  const profileData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: settings.name,
        url: homeUrl,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": homeUrl,
        url: homeUrl,
        name: home.seo.title,
        description: home.seo.description,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: settings.name,
        url: homeUrl,
        jobTitle: settings.professionalTitle,
        image: new URL(about.portrait.src, siteUrl).href,
        sameAs: [settings.linkedin, settings.github].filter(Boolean),
      },
    ],
  };

  return (
    <SiteShell mainId={homeSectionIds.home}>
      <JsonLd data={profileData} />
      <SiteMain id={homeSectionIds.home} className="hero-bg bg-background">
        <HeroSection name={settings.name} hero={home.hero} />
        <ProjectsSection heading={home.projectsHeading} projects={projects} />
        <div className="mx-auto grid max-w-364 items-start gap-y-14 px-4 pt-14 min-[480px]:px-6 sm:gap-y-16 sm:pt-16 lg:pt-20 min-[1100px]:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] min-[1100px]:gap-x-9 min-[1200px]:px-7.5 xl:gap-x-11">
          <ExperienceSection heading={home.experienceHeading} experience={experience} />
          <AboutSection content={about} resume={settings.resume} />
        </div>
        <div className="bg-linear-to-b from-background to-surface-soft/70">
          <HowIWorkSection workflow={home.workflow} />
          <TechnologiesSection technologies={home.technologies} />
          <ContactSection contact={home.contact} settings={settings} />
        </div>
      </SiteMain>
    </SiteShell>
  );
}
