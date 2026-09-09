import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialHero } from "@/financial/components/financial-hero";
import { FinancialServicesSection } from "@/financial/components/financial-services-section";
import { FinancialWhoIHelpSection } from "@/financial/components/financial-who-i-help-section";
import { FinancialLanguageSection } from "@/financial/components/financial-language-section";
import { FinancialAboutSection } from "@/financial/components/financial-about-section";
import { FinancialHowItWorksSection } from "@/financial/components/financial-how-it-works-section";
import { FinancialTravelBanner } from "@/financial/components/financial-travel-banner";
import { FinancialLatestArticlesSection } from "@/financial/components/financial-latest-articles-section";
import { FinancialClientReviewsSection } from "@/financial/components/financial-client-reviews-section";
import { FinancialFinalCtaBanner } from "@/financial/components/financial-final-cta-banner";
import { FinancialFooter } from "@/financial/components/financial-footer";

export function FinancialAdvisorPage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main>
        <FinancialHero />
        <FinancialServicesSection />
        <FinancialWhoIHelpSection />
        <FinancialLanguageSection />
        <FinancialAboutSection />
        <FinancialHowItWorksSection />
        <FinancialTravelBanner />
        <FinancialLatestArticlesSection />
        <FinancialClientReviewsSection />
        <FinancialFinalCtaBanner />
      </main>
      <FinancialFooter />
    </div>
  );
}
