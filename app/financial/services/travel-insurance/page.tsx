import type { Metadata } from "next";

import { travelInsuranceServicePageContent } from "@/financial/data/service-pages";
import { FinancialServicePage } from "@/financial/pages/financial-service-page";
import ConsultationBookingButton from "@/financial/components/calendar/consultation-booking-button";

export const metadata: Metadata = {
  title: "Travel Insurance",
  description:
    "Explore travel insurance options with clear, personalized guidance from Gisele Pecapedra, serving families across British Columbia.",
};

export default function FinancialTravelInsuranceRoute() {
  return (
    <FinancialServicePage
      content={travelInsuranceServicePageContent}
      heroSecondaryButton={({ className, children }) => (
        <ConsultationBookingButton className={className}>
          {children}
        </ConsultationBookingButton>
      )}
    />
  );
}
