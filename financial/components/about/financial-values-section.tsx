import {
  Heart,
  Leaf,
  SunMedium,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const values: Value[] = [
  {
    title: "Integrity",
    description: "Always honest and transparent",
    icon: Heart,
  },
  {
    title: "People First",
    description: "Listening, understanding and finding the right solutions",
    icon: UsersRound,
  },
  {
    title: "Empowerment",
    description: "Helping you make confident decisions",
    icon: Leaf,
  },
  {
    title: "A Brighter Tomorrow",
    description: "Building security for generations to come",
    icon: SunMedium,
  },
];

export function FinancialValuesSection() {
  return (
    <section
      id="my-values"
      aria-labelledby="financial-values-title"
      className="border-b border-[#e5e9e1] bg-[#f7f7f3] px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526f46] sm:text-sm">
          My Values
        </p>

        <h2
          id="financial-values-title"
          className="mt-5 font-serif text-4xl leading-[1.08] text-[#10213b] sm:text-5xl lg:text-[3.45rem]"
        >
          What Guides My Work
        </h2>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:mt-11 lg:grid-cols-4 lg:gap-10">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="mx-auto flex max-w-[18rem] flex-col items-center text-center"
              >
                <div className="flex h-16 items-center justify-center text-[#526f46]">
                  <Icon className="size-14 stroke-[1.65]" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug text-[#10213b] sm:text-2xl">
                  {value.title}
                </h3>

                <p className="mt-3 max-w-[22ch] text-base leading-7 text-[#626b71] sm:text-lg">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
