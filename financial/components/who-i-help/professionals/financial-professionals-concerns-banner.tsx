import { FinancialConcernsBanner } from "../components/financial-concerns-banner";

export function FinancialProfessionalsConcernsBanner() {
  return (
    <FinancialConcernsBanner
      eyebrow="For self-employed professionals"
      title="You build your business. Let's build your protection plan."
      description={
        <p>
          As a self-employed professional, you may not have access to employer
          benefits - but you still have options. I help create your own
          protection and savings structure, so you can protect your income,
          reduce your tax burden, and build long-term financial security on your
          terms.
        </p>
      }
      imgHref="/financial/who-i-help/remote-worker.jpg"
      photoPhrase={
        <>
          Meaningful work
          <span className="block">today. Greater</span>
          <span className="block">possibilities tomorrow.</span>
          <span className="block text-4xl not-italic leading-none">♡</span>
        </>
      }
    />
  );
}
