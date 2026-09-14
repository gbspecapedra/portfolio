import { FinancialFooter } from "@/financial/components/financial-footer";
import { FinancialLetsTalkBanner } from "@/financial/components/financial-lets-talk-banner";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialWhoIHelpCommonQuestions } from "@/financial/components/financial-who-i-help-common-questions";
import { FinancialWhatToExpectSection } from "../components/financial-what-to-expect-section";
import { FileText, MessageCircle, Sprout } from "lucide-react";
import { FinancialProfessionalsHero } from "../components/who-i-help/professionals/financial-professionals-hero";
import { FinancialProfessionalsDescriptionSection } from "../components/who-i-help/professionals/financial-professionals-description-section";
import { FinancialProfessionalsPrioritiesSection } from "../components/who-i-help/professionals/financial-professionals-priorities-section";
import { FinancialProfessionalsServicesSection } from "../components/who-i-help/professionals/financial-professionals-services-section";
import { FinancialProfessionalsConcernsBanner } from "../components/who-i-help/professionals/financial-professionals-concerns-banner";

export function FinancialProfessionalsPage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main>
        <FinancialProfessionalsHero />
        <FinancialProfessionalsDescriptionSection />
        <FinancialProfessionalsPrioritiesSection />
        <FinancialProfessionalsServicesSection />
        <FinancialProfessionalsConcernsBanner />
        <FinancialWhatToExpectSection
          eyebrow="A simple, supportive process"
          title="Three steps to greater financial confidence"
          subtitle="We'll take the time to understand your unique situation and create a strategy that fits your goals, your career and your life."
          items={[
            {
              title: "Understand your goals",
              description:
                "We'll talk about your career, income, responsibilities, and what matters most.",
              icon: MessageCircle,
            },
            {
              title: "Review your options",
              description:
                "I'll explain your options clearly, so you can make informed decisions with confidence.",
              icon: FileText,
            },
            {
              title: "Build your strategy",
              description:
                "Together, we'll create a personalized plan that evolves with your income and career.",
              icon: Sprout,
            },
          ]}
        />
        <FinancialWhoIHelpCommonQuestions
          title="Quick answers for professionals"
          subtitle="Common questions I hear from professionals."
          questions={[
            {
              question: "Do I need coverage if I have employer benefits?",
              answer:
                "Employer coverage is a strong starting point, but it often has limits on the amount of coverage, how long it lasts, and whether it stays with you if you change jobs. I can help you review what your plan includes, where it falls short, and what additional protection makes sense for your family and long-term goals.",
            },
            {
              question: "How do RRSP, TFSA and FHSA fit together?",
              answer:
                "They each serve a different purpose. An FHSA is designed for first-time home buyers, a TFSA gives you flexible savings and investment options, and an RRSP can be a strong choice for tax-deferred retirement growth. I can help you build a strategy that uses each account in the right way based on your income, timeline, and priorities.",
            },
            {
              question: "What if I'm self-employed?",
              answer:
                "Self-employment often means fewer benefits and more responsibility when it comes to planning. I can help you create a protection and savings strategy that fits your business income, risk profile, and future goals, so you are covered without overcomplicating things.",
            },
            {
              question: "When should I review my protection?",
              answer:
                "It's a good idea to review your coverage regularly, especially after major life changes such as a raise, a new job, marriage, children, or buying a home. We can look at what you have today, identify any gaps, and adjust your plan as your life and priorities evolve.",
            },
          ]}
        />
        <FinancialLetsTalkBanner
          eyebrow="Your next chapter matters"
          title="Let's review your professional financial strategy."
          subtitle="A more secure tomorrow starts with a conversation."
        />
      </main>
      <FinancialFooter />
    </div>
  );
}
