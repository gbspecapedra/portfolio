import { FinancialAboutHero } from "@/financial/components/about/financial-about-hero";
import { FinancialLetsTalkBanner } from "@/financial/components/financial-lets-talk-banner";
import { FinancialMyStorySection } from "@/financial/components/about/financial-my-story-section";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialValuesSection } from "@/financial/components/about/financial-values-section";
import { FinancialFooter } from "../components/financial-footer";

export function FinancialAboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main>
        <FinancialAboutHero />
        <FinancialMyStorySection />
        <FinancialValuesSection />
        <FinancialLetsTalkBanner
          eyebrow="Let's Talk"
          title="Ready to Plan Your Future?"
          subtitle="I'd love to learn more about your goals and how I can help. Book a free consultation and let's take the next step together."
        />
      </main>
      <FinancialFooter />
    </div>
  );
}
