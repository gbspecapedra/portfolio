import { financialMetadata } from "@/financial/data/metadata";
import { FinancialAdvisorPage } from "@/financial/pages/financial-advisor-page";

export const metadata = financialMetadata;

export default function FinancialPage() {
  return <FinancialAdvisorPage />;
}
