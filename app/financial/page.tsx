import { financialMetadata } from "@/financial/data/metadata";
import { FinancialHomePage } from "@/financial/pages/financial-home-page";

export const metadata = financialMetadata;

export default function FinancialPage() {
  return <FinancialHomePage />;
}
