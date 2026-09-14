import { FinancialFooter } from "@/financial/components/financial-footer";
import { FinancialLetsTalkBanner } from "@/financial/components/financial-lets-talk-banner";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialGuidesBrowser } from "@/financial/components/resources/guides/financial-guides-browser";
import { FinancialGuidesHero } from "@/financial/components/resources/guides/financial-guides-hero";

export function FinancialGuidesPage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main>
        <FinancialGuidesHero />
        <FinancialGuidesBrowser />
        <FinancialLetsTalkBanner
          title="Let's talk about your goals."
          subtitle="Whether you have a question, need guidance, or are ready to create a plan, I'm here to help. Book a free, no-obligation consultation today."
        />
      </main>
      <FinancialFooter />
    </div>
  );
}
