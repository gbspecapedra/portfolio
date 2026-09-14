import { FinancialWhoIHelpCommonQuestions } from "../financial-who-i-help-common-questions";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes! There's no cost and no obligation. It's a chance for us to get to know each other and explore your options.",
  },
  {
    question: "Do you offer virtual meetings?",
    answer:
      "Yes, I offer both virtual and in-person consultations across British Columbia - whatever works best for you.",
  },
  {
    question: "Do you serve Portuguese-speaking clients?",
    answer:
      "Sim! Eu tambem atendo em Portugues, e ficarei muito feliz em conversar com voce no seu idioma.",
  },
];

export function FinancialContactFaqs() {
  return (
    <FinancialWhoIHelpCommonQuestions
      title="Frequently Asked Questions"
      subtitle="Quick Answers"
      questions={faqItems}
    />
  );
}
