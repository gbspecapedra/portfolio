import Image from "next/image";

export function FinancialPortugueseClientsConcernsBanner() {
  return (
    <section
      aria-labelledby="portuguese-clients-concerns-title"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[#dfe6dc] bg-white"
    >
      <div className="grid lg:min-h-[22rem] lg:grid-cols-[46%_54%]">
        <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem] lg:min-h-full">
          <Image
            src="/financial/family-guidance-banner-v2.png"
            alt="Família sorrindo em frente à água, Vancouver e as montanhas"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-[80%_center]"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.12)_42%,rgba(255,255,255,0)_100%)]"
            aria-hidden="true"
          />
          <p
            className="pointer-events-none absolute left-5 top-7 max-w-[13rem] rotate-[-8deg] font-[cursive] text-2xl italic leading-[1.12] text-[#1f2f75] drop-shadow-[0_1px_10px_rgba(255,255,255,0.84)] sm:left-8 sm:top-9 sm:max-w-[17rem] sm:text-3xl lg:left-9 lg:top-11"
            aria-hidden="true"
          >
            Novos começos.
            <span className="block">Mais oportunidades.</span>
            <span className="block">Juntos.</span>
            <span className="absolute -right-4 top-14 text-4xl not-italic leading-none sm:-right-8 sm:top-16 sm:text-5xl">
              ♡
            </span>
          </p>
        </div>

        <div className="flex items-center px-4 py-10 sm:px-8 lg:px-8 xl:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#526f46] sm:text-sm">
              Um atendimento mais próximo, no seu idioma
            </p>
            <h2
              id="portuguese-clients-concerns-title"
              className="mt-2 max-w-3xl font-serif text-3xl leading-[1.04] text-[#1f2f75] sm:text-4xl lg:text-5xl"
            >
              Mais do que serviços, uma parceria durante a sua jornada.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-[#617087] sm:text-lg">
              <p>
                Mudar para o Canadá traz muitas perguntas, decisões importantes
                e novos planos para o futuro. Poder conversar sobre seguros e
                planejamento financeiro em português pode tornar tudo mais claro
                e tranquilo.
              </p>
              <p>
                Trabalho com brasileiros e outras famílias de língua portuguesa,
                incluindo newcomers, para entender suas necessidades, esclarecer
                suas opções e encontrar soluções que realmente façam sentido
                para a sua realidade e seus objetivos.
              </p>
              <p>
                Aqui, você encontra um atendimento humano, transparente e focado
                no que mais importa: você e sua família.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
