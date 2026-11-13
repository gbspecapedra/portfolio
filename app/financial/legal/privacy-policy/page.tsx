import { privacyPolicy } from "@/financial/data/legal-pages";
import { FinancialLegalPage } from "@/financial/pages/financial-legal-page";

export default function PrivacyPolicyPage() {
  return <FinancialLegalPage content={privacyPolicy} />;
}
