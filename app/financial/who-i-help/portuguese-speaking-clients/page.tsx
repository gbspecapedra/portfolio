import type { Metadata } from "next";

import { FinancialPortugueseClientsPage } from "@/financial/pages/financial-portuguese-clients-page";

export const metadata: Metadata = {
  title: "Portuguese-Speaking Clients",
  description:
    "Atendimento em português para brasileiros e famílias de língua portuguesa que buscam seguros e orientação financeira no Canadá.",
};

export default function FinancialPortugueseClientsRoute() {
  return <FinancialPortugueseClientsPage />;
}
