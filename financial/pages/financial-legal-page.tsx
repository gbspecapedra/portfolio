import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialFinalCtaBanner } from "@/financial/components/financial-final-cta-banner";
import { FinancialFooter } from "@/financial/components/financial-footer";
import { FinancialHero } from "../components/financial-hero";
import { LucideIcon } from "lucide-react";
import { FinancialLegalContent } from "../components/legal/financial-legal-content";

type FinancialLegalPageItem = {
  id: string;
  summary: string;
  icon: LucideIcon;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  contactDetails?: {
    name: string;
    role: string;
  };
};

export type FinancialLegalPageContent = {
  hero: {
    title: string;
    description: string;
  };
  sectionLabel?: string;
  sectionAriaLabel?: string;
  notice?: string;
  sidebarPrompt?: string;
  items: FinancialLegalPageItem[];
  effectiveAt?: string;
  updatedAt: string;
};

type FinancialLegalPageProps = {
  content: FinancialLegalPageContent;
};

export function FinancialLegalPage({ content }: FinancialLegalPageProps) {
  const {
    hero,
    items,
    effectiveAt,
    updatedAt,
    sectionLabel,
    sectionAriaLabel,
    notice,
    sidebarPrompt,
  } = content;
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main id="financial-main" tabIndex={-1}>
        <FinancialHero
          eyebrow="Legal"
          title={hero.title}
          description={
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#415066] sm:text-lg">
              {hero.description}
            </p>
          }
          isPrimaryButtonVisible={false}
          isSecondaryButtonVisible={false}
        />
        <FinancialLegalContent
          items={items}
          effectiveAt={effectiveAt}
          updatedAt={updatedAt}
          sectionLabel={sectionLabel}
          sectionAriaLabel={sectionAriaLabel}
          notice={notice}
          sidebarPrompt={sidebarPrompt}
        />
        <FinancialFinalCtaBanner
          title="Have questions?"
          subtitle="I'm here to help and happy to provide more information."
        />
      </main>
      <FinancialFooter />
    </div>
  );
}
