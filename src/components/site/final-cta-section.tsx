import { BingoBall } from "./bingo-ball";
import { BingoCard } from "./bingo-card";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { WhatsAppCtaButton } from "./whatsapp-cta-button";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-[#0A5F93] to-brand-teal">
      {/* Brilho central */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[110px]"
      />
      {/* Elementos decorativos */}
      <BingoBall
        number={8}
        color="yellow"
        className="animate-float absolute -left-8 top-1/2 w-24 opacity-90 lg:w-32"
      />
      <BingoCard
        seed={99}
        className="absolute -bottom-14 -right-10 w-40 rotate-[18deg] opacity-25 lg:w-52"
      />
      <span
        aria-hidden="true"
        className="absolute right-10 top-6 hidden select-none font-display text-6xl font-extrabold tracking-[0.2em] text-white/10 lg:block"
      >
        BINGO
      </span>
      <span
        aria-hidden="true"
        className="absolute left-[18%] top-8 size-2.5 rounded-full bg-white/25"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-10 left-[30%] size-2 rounded-full bg-white/20"
      />

      <Container className="relative z-10 py-20 lg:py-24">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-white lg:text-5xl">
            Vamos preparar seu <span className="text-brand-yellow">bingo</span> ou{" "}
            <span className="text-brand-yellow">rifa</span>?
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Envie sua ideia, tema e quantidade. Nossa equipe prepara uma proposta
            para você.
          </p>
          <WhatsAppCtaButton size="lg" className="mt-8" />
        </Reveal>
      </Container>
    </section>
  );
}
