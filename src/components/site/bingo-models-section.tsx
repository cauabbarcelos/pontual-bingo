import { Ticket } from "lucide-react";
import { bingoModels, raffleModels } from "@/data/content";
import { cn } from "@/lib/utils";
import { BingoCard } from "./bingo-card";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { WhatsAppCtaButton } from "./whatsapp-cta-button";

/** Pilha de mini cartelas representando a quantidade por jogador. */
function CardStack({ count, seedBase }: { count: number; seedBase: number }) {
  const rotations = [-10, 0, 10];
  return (
    <div aria-hidden="true" className="relative h-24 w-20 shrink-0 sm:h-28 sm:w-24">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(-50%, -50%) translateX(${(i - (count - 1) / 2) * 13}px) rotate(${rotations[i]}deg)`,
            zIndex: i,
          }}
        >
          <BingoCard seed={seedBase + i * 13} className="w-16 sm:w-[4.4rem]" />
        </div>
      ))}
    </div>
  );
}

function RaffleStack({ count }: { count: number }) {
  const rotations = [-10, 0, 10];
  return (
    <div aria-hidden="true" className="relative h-24 w-20 shrink-0 sm:h-28 sm:w-24">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 flex h-16 w-20 items-center gap-2 rounded-lg border-2 border-dashed border-brand-blue/35 bg-white px-2 shadow-md sm:h-[4.5rem] sm:w-24"
          style={{
            transform: `translate(-50%, -50%) translateX(${(i - (count - 1) / 2) * 13}px) rotate(${rotations[i]}deg)`,
            zIndex: i,
          }}
        >
          <Ticket className="size-6 shrink-0 text-brand-blue" />
          <span className="flex flex-col">
            <span className="font-display text-xs font-extrabold leading-tight text-brand-blue">
              RIFA
            </span>
            <span className="text-[0.6rem] font-semibold text-slate-500">
              Nº 001
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function BingoModelsSection() {
  return (
    <section id="modelos" className="relative overflow-hidden bg-brand-mist">
      <Container className="py-16 lg:py-24">
        <SectionHeading
          eyebrow="Modelos de Bingo"
          eyebrowDashes
          title="Escolha o formato do seu jogo"
          description="Cartelas em diferentes opções para atender o seu evento."
        />

        <div className="mt-10 grid gap-6 sm:mt-12 md:auto-rows-fr md:grid-cols-3">
          {bingoModels.map((model, i) => (
            <Reveal key={model.id} delay={i * 0.1} className="h-full">
              <article className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:shadow-xl hover:shadow-brand-navy/10 sm:flex-row sm:gap-5 sm:p-6">
                <CardStack count={model.cards} seedBase={101 + i * 40} />
                <div className="flex min-w-0 flex-1 flex-col items-center text-center sm:h-full sm:items-start sm:text-left">
                  <h3 className="font-display text-xl font-bold text-brand-blue">
                    {model.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {model.description}
                  </p>
                  <WhatsAppCtaButton
                    variant="outline"
                    size="sm"
                    className={cn("mt-4 sm:mt-auto sm:pt-4")}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Modelos de Rifa"
            eyebrowDashes
            title="Escolha o formato da sua rifa"
            description="Opções personalizadas para organizar sua campanha e seus sorteios."
          />

          <div className="mt-10 grid gap-6 sm:mt-12 md:auto-rows-fr md:grid-cols-3">
            {raffleModels.map((model, i) => (
              <Reveal key={model.id} delay={i * 0.1} className="h-full">
                <article className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:shadow-xl hover:shadow-brand-navy/10 sm:flex-row sm:gap-5 sm:p-6">
                  <RaffleStack count={model.tickets} />
                  <div className="flex min-w-0 flex-1 flex-col items-center text-center sm:h-full sm:items-start sm:text-left">
                    <h3 className="font-display text-xl font-bold text-brand-blue">
                      {model.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {model.description}
                    </p>
                    <WhatsAppCtaButton
                      variant="outline"
                      size="sm"
                      className={cn("mt-4 sm:mt-auto sm:pt-4")}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
