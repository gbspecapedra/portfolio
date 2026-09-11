import { FinancialFooter } from "@/financial/components/financial-footer";
import { FinancialNavigation } from "@/financial/components/financial-navigation";
import { FinancialPortugueseClientsHero } from "@/financial/components/who-i-help/portuguese-clients/financial-portuguese-clients-hero";
import { FinancialPortugueseClientsConcernsBanner } from "@/financial/components/who-i-help/portuguese-clients/financial-portuguese-clients-concerns-banner";
import { FinancialPortugueseClientsServicesSection } from "@/financial/components/who-i-help/portuguese-clients/financial-portuguese-clients-services-section";
import { FinancialPortugueseClientsSupportSection } from "@/financial/components/who-i-help/portuguese-clients/financial-portuguese-clients-support-section";
import { FinancialPortugueseClientsWhyGiseleSection } from "@/financial/components/who-i-help/portuguese-clients/financial-portuguese-clients-why-gisele-section";
import { FinancialLetsTalkBanner } from "@/financial/components/financial-lets-talk-banner";

export function FinancialPortugueseClientsPage() {
  return (
    <div className="min-h-screen bg-white text-[#10213b]">
      <FinancialNavigation />
      <main>
        <FinancialPortugueseClientsHero />
        <FinancialPortugueseClientsSupportSection />
        <FinancialPortugueseClientsServicesSection />
        <FinancialPortugueseClientsConcernsBanner />
        <FinancialPortugueseClientsWhyGiseleSection />
        <FinancialLetsTalkBanner
          eyebrow="Let's take the next step"
          title="Ready to Build Your Future in Canada?"
          subtitle="I'd love to learn more about your goals and how I can help. Book a free consultation and let's create a brighter tomorrow, together."
        />
      </main>
      <FinancialFooter />
    </div>
  );
}
