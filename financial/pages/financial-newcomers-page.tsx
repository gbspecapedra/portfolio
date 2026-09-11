import { FinancialFooter } from "@/financial/components/financial-footer";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialNewcomersHero } from "@/financial/components/who-i-help/newcomers/financial-newcomers-hero";
import { FinancialNewcomersConcernsBanner } from "@/financial/components/who-i-help/newcomers/financial-newcomers-concerns-banner";
import { FinancialNewcomersServicesSection } from "@/financial/components/who-i-help/newcomers/financial-newcomers-services-section";
import { FinancialNewcomersSupportSection } from "@/financial/components/who-i-help/newcomers/financial-newcomers-support-section";
import { FinancialWhatToExpectSection } from "@/financial/components/financial-what-to-expect-section";
import { FinancialLetsTalkBanner } from "@/financial/components/financial-lets-talk-banner";

export function FinancialNewcomersPage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main>
        <FinancialNewcomersHero />
        <FinancialNewcomersSupportSection />
        <FinancialNewcomersServicesSection />
        <FinancialNewcomersConcernsBanner />
        <FinancialWhatToExpectSection eyebrow="Why Work With Gisele" />
        <FinancialLetsTalkBanner
          eyebrow="Let's take the next step"
          title="Ready to Build Your Future in Canada?"
          subtitle="I'd love to learn more about your goals and how I can help. Book a free consultation and let's create a brighter tomorrow, together."
        />
      </main>
      <FinancialFooter />
    </div>
  );
}
