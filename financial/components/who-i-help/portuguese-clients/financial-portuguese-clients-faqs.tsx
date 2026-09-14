import { FinancialWhoIHelpCommonQuestions } from "../../financial-who-i-help-common-questions";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Posso ser atendido em português?",
    answer:
      "Sim. Você pode conversar comigo em português para entender suas opções com mais clareza e tranquilidade.",
  },
  {
    question: "Você atende newcomers?",
    answer:
      "Sim. Apoio newcomers e famílias de língua portuguesa que estão construindo uma nova vida no Canadá.",
  },
  {
    question:
      "Posso começar mesmo se os detalhes dos serviços estiverem em inglês?",
    answer:
      "Sim. Eu explico os pontos importantes em português para que você se sinta mais confiante antes de tomar decisões.",
  },
];

export function FinancialPortugueseClientsFaqs() {
  return (
    <FinancialWhoIHelpCommonQuestions
      title="Dúvidas comuns"
      subtitle="Você tem perguntas? Eu tenho as respostas."
      questions={faqItems}
    />
  );
}
