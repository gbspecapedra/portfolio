import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialHomeHero } from "@/financial/components/home/financial-home-hero";
import { FinancialServicesSection } from "@/financial/components/home/financial-services-section";
import { FinancialWhoIHelpSection } from "@/financial/components/home/financial-who-i-help-section";
import { FinancialLanguageSection } from "@/financial/components/home/financial-language-section";
import { FinancialAboutSection } from "@/financial/components/about/financial-about-section";
import { FinancialHowItWorksSection } from "@/financial/components/home/financial-how-it-works-section";
import { FinancialTravelBanner } from "@/financial/components/home/financial-travel-banner";
import { FinancialLatestArticlesSection } from "@/financial/components/home/financial-latest-articles-section";
import { FinancialClientReviewsSection } from "@/financial/components/home/financial-client-reviews-section";
import { FinancialFinalCtaBanner } from "@/financial/components/home/financial-final-cta-banner";
import { FinancialFooter } from "@/financial/components/financial-footer";

export function FinancialHomePage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main>
        <FinancialHomeHero />
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
