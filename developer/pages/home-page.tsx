import { Navbar } from "@/developer/components/navbar";
import { Footer } from "@/developer/components/footer";
import {
  ContactSection,
  ExperienceSection,
  ProjectsSection,
  HeroSection,
} from "@/developer/components/home";

export function DeveloperHomePage() {
  return (
    <>
      <Navbar />

      <main className="hero-bg bg-background">
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
