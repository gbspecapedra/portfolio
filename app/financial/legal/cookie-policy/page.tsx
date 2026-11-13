import { cookiePolicy } from "@/financial/data/legal-pages";
import { FinancialLegalPage } from "@/financial/pages/financial-legal-page";

export default function CookiePolicyPage() {
  return <FinancialLegalPage content={cookiePolicy} />;
}
