import { FinancialConcernsBanner } from "../components/financial-concerns-banner";

export function FinancialFamiliesConcernsBanner() {
  return (
    <FinancialConcernsBanner
      eyebrow="More than a plan"
      title="Greater security for the moments that matter"
      description={
        <p>
          Life moves quickly. A thoughtful family protection strategy can give
          you greater confidence, knowing you&apos;re prepared for the
          unexpected and building the future you want for your children.
        </p>
      }
      photoPhrase={
        <>
          Peace of mind
          <span className="block">today. A brighter</span>
          <span className="block">tomorrow for them</span>
          <span className="block text-4xl not-italic leading-none">♡</span>
        </>
      }
    />
  );
}
