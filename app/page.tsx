import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ContactSection,
  ExperienceSection,
  ProjectsSection,
  HeroSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="home" className="hero-bg scroll-mt-28 bg-background">
        <HeroSection />
        <ProjectsSection />
        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-16 sm:pb-20">
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
