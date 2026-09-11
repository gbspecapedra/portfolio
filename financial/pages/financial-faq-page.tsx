import { FinancialFaqHero } from "@/financial/components/resources/faq/financial-faq-hero";
import { FinancialFaqQuickAnswersSection } from "@/financial/components/resources/faq/financial-faq-quick-answers-section";
import { FinancialLetsTalkBanner } from "@/financial/components/financial-lets-talk-banner";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialFooter } from "../components/financial-footer";
import { FinancialWhatToExpectSection } from "../components/financial-what-to-expect-section";

export function FinancialFaqPage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main>
        <FinancialFaqHero />
        <FinancialFaqQuickAnswersSection />
        <FinancialWhatToExpectSection />
        <FinancialLetsTalkBanner
          eyebrow="Let's Talk"
          title="Still looking for answers?"
          subtitle="Let's talk through your questions and explore how I can help."
        />
      </main>
      <FinancialFooter />
    </div>
  );
}
