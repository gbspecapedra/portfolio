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
import { contactLinks } from "@/data/contact-info";
import { homeSectionIds, siteName, siteUrl } from "@/data/site";
import {
  homeDescription,
  homeTitle,
  pageMetadata,
  personId,
  websiteId,
} from "@/lib/seo";

const homeUrl = new URL("/", siteUrl).href;

export const metadata: Metadata = {
  ...pageMetadata({
    url: homeUrl,
    title: homeTitle,
    description: homeDescription,
  }),
  title: { absolute: homeTitle },
};

const profileData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteName,
      url: homeUrl,
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": homeUrl,
      url: homeUrl,
      name: homeTitle,
      description: homeDescription,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: siteName,
      url: homeUrl,
      jobTitle: "Frontend Engineer",
      image: new URL("/images/headshot.png", siteUrl).href,
      sameAs: [contactLinks.linkedin.href, contactLinks.github.href],
    },
  ],
};

export default function HomePage() {
  return (
    <SiteShell mainId={homeSectionIds.home}>
      <JsonLd data={profileData} />
      <SiteMain
        id={homeSectionIds.home}
        className="hero-bg bg-background"
      >
        <HeroSection />
        <ProjectsSection />
        <div className="mx-auto grid max-w-364 items-start gap-y-14 px-4 pt-14 min-[480px]:px-6 sm:gap-y-16 sm:pt-16 lg:pt-20 min-[1100px]:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] min-[1100px]:gap-x-9 min-[1200px]:px-7.5 xl:gap-x-11">
          <ExperienceSection />
          <AboutSection />
        </div>
        <div className="bg-linear-to-b from-background to-surface-soft/70">
          <HowIWorkSection />
          <TechnologiesSection />
          <ContactSection />
        </div>
      </SiteMain>
    </SiteShell>
  );
}
