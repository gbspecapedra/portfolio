import { FinancialQuestionAccordionList } from "@/financial/components/financial-question-accordion-list";

export type WhoIHelpQuestion = {
  question: string;
  answer?: string;
};

type FinancialWhoIHelpCommonQuestionsProps = {
  title: string;
  subtitle: string;
  questions: WhoIHelpQuestion[];
};

export function FinancialWhoIHelpCommonQuestions({
  title,
  subtitle,
  questions,
}: FinancialWhoIHelpCommonQuestionsProps) {
  const visibleQuestions = questions
    .filter((item) => item.answer)
    .slice(0, 4) as { question: string; answer: string }[];

  if (visibleQuestions.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="who-i-help-common-questions-title"
      className="border-b border-[#dfe6dc] px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[minmax(15rem,0.46fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
        <div>
          <h2
            id="who-i-help-common-questions-title"
            className="font-serif text-2xl font-semibold leading-tight text-[#10213b] sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-1 text-base font-medium leading-6 text-[#617087]">
            {subtitle}
          </p>
        </div>

        <FinancialQuestionAccordionList
          items={visibleQuestions}
          idPrefix="who-i-help-question"
        />
      </div>
    </section>
  );
}
