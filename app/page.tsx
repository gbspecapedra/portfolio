import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  HowIWorkSection,
  ProjectsSection,
  TechnologiesSection,
} from "@/components/home";
import { SiteShell } from "@/components/site-shell";
import { homeSectionIds } from "@/data/site";

export default function HomePage() {
  return (
    <SiteShell>
      <main id={homeSectionIds.home} className="hero-bg scroll-mt-28 bg-background">
        <HeroSection />
        <ProjectsSection />
        <div className="mx-auto grid max-w-[1456px] items-start gap-y-14 px-4 pt-14 min-[480px]:px-6 sm:gap-y-16 sm:pt-16 lg:pt-20 min-[1100px]:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] min-[1100px]:gap-x-9 min-[1200px]:px-[30px] xl:gap-x-11">
          <ExperienceSection />
          <AboutSection />
        </div>
        <div className="bg-linear-to-b from-background to-surface-soft/70">
          <HowIWorkSection />
          <TechnologiesSection />
          <ContactSection />
        </div>
      </main>
    </SiteShell>
  );
}
