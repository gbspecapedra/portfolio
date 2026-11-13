import { FinancialFooter } from "@/financial/components/financial-footer";
import { FinancialLetsTalkBanner } from "@/financial/components/financial-lets-talk-banner";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialWhoIHelpCommonQuestions } from "@/financial/components/financial-who-i-help-common-questions";
import { FinancialFamiliesHero } from "@/financial/components/who-i-help/families/financial-families-hero";
import { FinancialFamiliesDescriptionSection } from "../components/who-i-help/families/financial-families-description-section";
import { FinancialFamiliesPrioritiesSection } from "../components/who-i-help/families/financial-families-priorities-section";
import { FinancialFamiliesServicesSection } from "../components/who-i-help/families/financial-families-services-section";
import { FinancialFamiliesConcernsBanner } from "../components/who-i-help/families/financial-families-concerns-banner";
import { FinancialWhatToExpectSection } from "../components/financial-what-to-expect-section";
import { FileText, MessageCircle, Sprout } from "lucide-react";

export function FinancialFamiliesPage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main id="financial-main" tabIndex={-1}>
        <FinancialFamiliesHero />
        <FinancialFamiliesDescriptionSection />
        <FinancialFamiliesPrioritiesSection />
        <FinancialFamiliesServicesSection />
        <FinancialFamiliesConcernsBanner />
        <FinancialWhatToExpectSection
          eyebrow="How I help families"
          title="A simple, supportive process"
          subtitle="We'll take it step by step, at a pace that works for your family."
          items={[
            {
              title: "Understand your family's needs",
              description:
                "We'll talk about your goals, responsibilities and what matters most.",
              icon: MessageCircle,
            },
            {
              title: "Review your options",
              description:
                "I'll explain your options clearly, so you can make informed decisions with confidence.",
              icon: FileText,
            },
            {
              title: "Help You Move Forward",
              description:
                "Together, we'll great a personalized strategy and I'll be here to support you as life evolves.",
              icon: Sprout,
            },
          ]}
        />
        <FinancialWhoIHelpCommonQuestions
          title="Quick answers for families"
          subtitle="Common questions I hear from parents and households."
          questions={[
            {
              question:
                "Do I really need life insurance if I have group coverage?",
              answer:
                "Group coverage can be helpful, but it may not be enough or stay with you if your job changes. I can help you compare it with your family's real needs.",
            },
            {
              question: "How much coverage do I need?",
              answer:
                "The right amount depends on income, debts, housing, childcare, education goals, and how long your family would need support.",
            },
            {
              question: "What's the best time to start an RESP?",
              answer:
                "Many families benefit from starting early, but it can still be worthwhile to begin later. The best approach depends on your child's age and your budget.",
            },
            {
              question:
                "Can you help if we already have some coverage in place?",
              answer:
                "Yes. We can review what you already have, look for gaps or overlap, and decide whether anything should be adjusted.",
            },
          ]}
        />
        <FinancialLetsTalkBanner
          eyebrow="Your family's future matters"
          title="Let's review your family's needs and priorities."
          subtitle="A more secure tomorrow starts with a conversation."
        />
      </main>
      <FinancialFooter />
    </div>
  );
}
