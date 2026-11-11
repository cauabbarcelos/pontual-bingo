import { Plus } from "lucide-react";
import { faqItems } from "@/data/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
        <div>
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
