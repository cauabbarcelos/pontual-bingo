import { Plus } from "lucide-react";
import { faqItems } from "@/data/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BingoCard } from "./bingo-card";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function FaqColumn({ items, offset }: { items: typeof faqItems; offset: number }) {
  return (
    <>
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          value={`faq-${offset + i}`}
          className="mb-3 rounded-xl border border-slate-200 bg-white px-5 shadow-sm transition-shadow data-[state=open]:border-brand-blue/40 data-[state=open]:shadow-md"
        >
          <AccordionTrigger className="group items-center gap-3 py-4 text-left text-sm font-semibold text-brand-navy hover:no-underline [&>svg]:hidden">
            {item.question}
            <span className="ml-auto flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-brand-blue group-data-[state=open]:text-white">
              <Plus className="size-4" aria-hidden="true" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-sm leading-relaxed text-slate-600">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </>
  );
}

export function FaqSection() {
  return (
    <section id="duvidas" className="relative overflow-hidden bg-white">
      <Container className="py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Ilustração (balão de dúvida + cartela) */}
          <Reveal className="relative mx-auto hidden w-full max-w-sm sm:block">
            <div className="relative pb-6">
              <BingoCard
                seed={77}
                className="absolute right-0 top-0 w-32 rotate-12 sm:w-36"
              />
              <span
                aria-hidden="true"
                className="absolute -top-1 left-8 h-6 w-1.5 rotate-[24deg] rounded-full bg-brand-yellow"
              />
              <span
                aria-hidden="true"
                className="absolute top-3 left-0 h-5 w-1.5 rotate-[48deg] rounded-full bg-brand-yellow"
              />
              <span
                aria-hidden="true"
                className="absolute top-9 -left-2 h-4 w-1.5 rotate-[72deg] rounded-full bg-brand-yellow"
              />
              <div className="relative z-10 ml-0 mr-16 mt-24 rounded-[2.4rem] bg-white p-9 shadow-2xl shadow-brand-navy/15 ring-1 ring-slate-100 sm:mr-20 sm:p-10">
                <span
                  aria-hidden="true"
                  className="font-display text-7xl font-extrabold leading-none text-brand-blue sm:text-8xl"
                >
                  ?
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2.5 left-14 size-6 rotate-45 rounded-br-[0.6rem] bg-white ring-1 ring-slate-100"
                />
              </div>
            </div>
          </Reveal>

          {/* Conteúdo + accordion */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Dúvidas frequentes"
              title="Perguntas que podem te ajudar"
            />
            <Reveal delay={0.1}>
              <Accordion
                type="single"
                collapsible
                className="mt-8 grid gap-x-6 lg:grid-cols-2"
              >
                <div>
                  <FaqColumn items={faqItems.slice(0, 3)} offset={0} />
                </div>
                <div>
                  <FaqColumn items={faqItems.slice(3)} offset={3} />
                </div>
              </Accordion>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
