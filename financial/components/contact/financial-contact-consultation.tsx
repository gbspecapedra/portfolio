import { ContactWhatToExpect } from "./contact-what-to-expect";
import { ContactConsultationForm } from "./contact-consultation-form";

export function FinancialContactConsultation() {
  return (
    <section
      aria-labelledby="consultation-title"
      className="bg-[#f7f7f3] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <ContactConsultationForm />
        <ContactWhatToExpect />
      </div>
    </section>
  );
}
