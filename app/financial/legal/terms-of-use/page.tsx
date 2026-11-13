import { termsOfUse } from "@/financial/data/legal-pages";
import { FinancialLegalPage } from "@/financial/pages/financial-legal-page";

export default function TermsOfUsePage() {
  return <FinancialLegalPage content={termsOfUse} />;
}
