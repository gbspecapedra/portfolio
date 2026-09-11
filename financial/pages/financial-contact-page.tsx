import { FinancialContactDetails } from "@/financial/components/contact/financial-contact-details";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialContactHero } from "@/financial/components/contact/financial-contact-hero";
import { FinancialContactConsultation } from "../components/contact/financial-contact-consultation";
import { FinancialContactFaqs } from "../components/contact/financial-contact-faqs";
import { FinancialLetsTalkBanner } from "../components/financial-lets-talk-banner";

export function FinancialContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main>
        <FinancialContactHero />
        <FinancialContactDetails />
        <FinancialContactConsultation />
        <FinancialContactFaqs />
        <FinancialLetsTalkBanner
          eyebrown="Let's Talk"
          title="Your future starts with a conversation."
          subtitle="Let's take the next step together."
        />
      </main>
    </div>
  );
}
