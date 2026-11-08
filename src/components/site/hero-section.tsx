import { BingoBall } from "./bingo-ball";
import { BingoCard } from "./bingo-card";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { WhatsAppCtaButton } from "./whatsapp-cta-button";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      {/* Fundo: ondas em gradiente azul → azul petróleo */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-grad-a" x1="0.9" y1="0" x2="0.15" y2="1">
            <stop offset="0" stopColor="#0A63B4" />
            <stop offset="0.5" stopColor="#0756A0" />
            <stop offset="1" stopColor="#086B85" />
          </linearGradient>
          <linearGradient id="hero-grad-b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#086B85" />
            <stop offset="1" stopColor="#0D2038" />
          </linearGradient>
        </defs>
        {/* Mancha suave à esquerda */}
        <ellipse cx="150" cy="180" rx="420" ry="300" fill="#EAF2FA" opacity="0.85" />
        {/* Onda principal */}
        <path
          d="M870 0 C 700 170, 920 320, 770 470 C 650 595, 430 690, 170 800 L 1440 800 L 1440 0 Z"
          fill="url(#hero-grad-a)"
        />
        {/* Profundidade no canto inferior direito */}
        <path
          d="M1440 470 C 1300 560, 1230 680, 1210 800 L 1440 800 Z"
          fill="url(#hero-grad-b)"
          opacity="0.55"
        />
        {/* Onda clara decorativa */}
        <path
          d="M1440 210 C 1180 260, 1060 420, 1080 620 C 1092 730, 1160 780, 1240 800 L 1440 800 Z"
          fill="#ffffff"
          opacity="0.07"
        />
        {/* Onda branca inferior */}
        <path
          d="M0 560 C 210 645, 400 705, 640 742 C 910 785, 1200 775, 1440 690 L 1440 800 L 0 800 Z"
          fill="#ffffff"
        />
      </svg>

      {/* Pontos decorativos */}
      <span aria-hidden className="absolute right-[40%] top-[16%] size-2.5 rounded-full bg-white/30" />
      <span aria-hidden className="absolute right-[8%] top-[8%] size-2 rounded-full bg-white/40" />
      <span aria-hidden className="absolute right-[30%] top-[42%] size-3 rounded-full bg-white/20" />
      <span aria-hidden className="absolute left-[4%] bottom-[26%] size-2.5 rounded-full bg-brand-blue/15" />

      <Container className="relative z-10 pb-40 pt-24 sm:pb-44 sm:pt-28 lg:pb-48 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <Reveal>
              <h1>
                <span className="block font-display text-xl font-bold text-brand-navy sm:text-2xl lg:text-[1.75rem]">
                  Cartelas personalizadas de
                </span>
                <span className="mt-1 block font-display text-[2.85rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="text-brand-navy">BINGOS</span>{" "}
                  <span className="text-white drop-shadow-[0_2px_10px_rgba(7,86,160,0.55)]">
                    e
                  </span>{" "}
                  <span className="text-brand-red">RIFAS</span>
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-md font-display text-lg font-semibold leading-snug text-brand-navy/85 sm:text-xl lg:mx-0">
                Qualidade, praticidade e design profissional{" "}
                <span className="whitespace-nowrap underline decoration-brand-yellow decoration-4 underline-offset-4">
                  para o seu evento!
                </span>
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <WhatsAppCtaButton size="lg" />
              </div>
            </Reveal>
          </div>

          {/* Composição visual: cartelas + bolas */}
          <div className="relative mx-auto flex h-[300px] w-full max-w-md items-center justify-center sm:h-[380px] lg:h-[440px] lg:max-w-none">
            {/* Bolas desfocadas ao fundo */}
            <BingoBall
              number={44}
              color="blue"
              className="absolute left-[2%] top-[34%] w-20 opacity-20 sm:w-24"
            />
            <BingoBall
              number={13}
              color="blue"
              className="absolute bottom-[2%] left-[18%] w-14 opacity-15 sm:w-16"
            />
            <BingoBall
              number={2}
              color="blue"
              className="absolute -bottom-3 right-[22%] w-16 opacity-25 sm:w-20"
            />

            {/* Cartelas sobrepostas */}
            <div className="relative z-10 flex items-center justify-center">
              <BingoCard
                seed={21}
                className="z-10 w-32 -rotate-[14deg] sm:w-44 lg:w-52"
              />
              <BingoCard
                seed={55}
                className="z-20 -ml-8 w-32 rotate-[2deg] sm:-ml-12 sm:w-44 lg:w-52"
              />
              <BingoCard
                seed={88}
                className="z-10 -ml-8 w-32 rotate-[14deg] sm:-ml-12 sm:w-44 lg:w-52"
              />
            </div>

            {/* Bolas numeradas em destaque */}
            <BingoBall
              number={7}
              color="blue"
              className="animate-float absolute -top-2 left-[8%] z-30 w-14 sm:left-[10%] sm:w-20"
            />
            <BingoBall
              number={5}
              color="red"
              className="animate-float-delayed absolute -top-3 right-[2%] z-30 w-12 sm:w-16"
            />
            <BingoBall
              number={18}
              color="yellow"
              className="animate-float absolute bottom-[12%] right-[2%] z-30 w-14 sm:w-20"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
