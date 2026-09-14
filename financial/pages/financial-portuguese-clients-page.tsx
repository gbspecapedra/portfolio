import { FinancialFooter } from "@/financial/components/financial-footer";
import { FinancialLetsTalkBanner } from "@/financial/components/financial-lets-talk-banner";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialPortugueseClientsConcernsBanner } from "@/financial/components/who-i-help/portuguese-clients/financial-portuguese-clients-concerns-banner";
import { FinancialPortugueseClientsFaqs } from "@/financial/components/who-i-help/portuguese-clients/financial-portuguese-clients-faqs";
import { FinancialPortugueseClientsHero } from "@/financial/components/who-i-help/portuguese-clients/financial-portuguese-clients-hero";
import { FinancialPortugueseClientsSupportSection } from "@/financial/components/who-i-help/portuguese-clients/financial-portuguese-clients-support-section";
import { FinancialPortugueseClientsWhyGiseleSection } from "@/financial/components/who-i-help/portuguese-clients/financial-portuguese-clients-why-gisele-section";

export function FinancialPortugueseClientsPage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main>
        <FinancialPortugueseClientsHero />
        <FinancialPortugueseClientsSupportSection />
        <FinancialPortugueseClientsConcernsBanner />
        <FinancialPortugueseClientsWhyGiseleSection />
        <FinancialPortugueseClientsFaqs />
        <FinancialLetsTalkBanner
          eyebrow="Vamos conversar"
          title="Vamos conversar sobre o que é importante para você e sua família."
          subtitle="Agende uma conversa gratuita e dê o próximo passo com mais tranquilidade."
        />
      </main>
      <FinancialFooter />
    </div>
  );
}
