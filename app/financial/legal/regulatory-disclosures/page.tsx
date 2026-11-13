import { regulatoryDisclosures } from "@/financial/data/legal-pages";
import { FinancialLegalPage } from "@/financial/pages/financial-legal-page";

export default function RegulatoryDisclosuresPage() {
  return <FinancialLegalPage content={regulatoryDisclosures} />;
}
