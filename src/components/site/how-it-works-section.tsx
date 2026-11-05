import { steps } from "@/data/content";
import { BingoBall } from "./bingo-ball";
import { BingoCard } from "./bingo-card";
import { ChevronRight } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-gradient-to-br from-[#0B2A4A] via-brand-navy to-[#081627]"
    >
      {/* Luz central suave */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/25 blur-[130px]"
      />
      {/* Elementos decorativos */}
      <BingoBall
        number={10}
        color="yellow"
        className="animate-float absolute -left-8 top-20 w-24 lg:w-28"
      />
      <BingoBall
        number={22}
        color="red"
        className="animate-float-delayed absolute -right-6 bottom-24 w-20 lg:w-24"
      />
      <BingoCard
        seed={131}
        className="absolute -left-10 bottom-10 w-40 rotate-[14deg] opacity-[0.05]"
      />
      <BingoCard
        seed={167}
        className="absolute -right-12 top-8 w-44 -rotate-[10deg] opacity-[0.05]"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-8 left-6 select-none font-display text-[9rem] font-extrabold leading-none tracking-widest text-white/[0.04]"
      >
        BINGO
      </span>

      <Container className="relative z-10 py-20 lg:py-28">
        <SectionHeading
          tone="dark"
          eyebrow="Como funciona"
          title="Um processo simples e direto"
          description="Do seu contato à entrega, tudo de forma rápida e organizada."
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:mt-14 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12} className="relative">
              {i < steps.length - 1 && (
                <ChevronRight
                  aria-hidden="true"
                  className="absolute -right-7 top-1/2 z-10 hidden size-7 -translate-y-1/2 text-white/50 lg:block"
                />
              )}
              <div className="relative flex h-full flex-col rounded-2xl bg-white p-6 pt-9 text-center shadow-xl shadow-black/25">
                <span className="absolute -top-5 left-1/2 flex size-11 -translate-x-1/2 items-center justify-center rounded-full bg-brand-blue font-display text-sm font-extrabold text-white shadow-lg shadow-brand-blue/40">
                  {step.number}
                </span>
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <step.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
