import { Building2, Cake, Quote, Star } from "lucide-react";
import {
  testimonials,
  type Testimonial,
  type TestimonialEventType,
} from "@/data/content";
import { cn } from "@/lib/utils";
import { BingoBall } from "./bingo-ball";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { WhatsAppCtaButton } from "./whatsapp-cta-button";

const EVENT_BADGES: Record<
  TestimonialEventType,
  { label: string; icon: typeof Building2 }
> = {
  empresa: { label: "Evento de empresa", icon: Building2 },
  aniversario: { label: "Aniversário", icon: Cake },
};

/** Paleta de avatares (iniciais) alternando as cores da marca. */
const AVATAR_STYLES = [
  "bg-gradient-to-br from-brand-blue to-brand-teal text-white",
  "bg-gradient-to-br from-brand-red to-[#8F0E14] text-white",
  "bg-gradient-to-br from-brand-teal to-brand-navy text-white",
  "bg-gradient-to-br from-[#FFD34D] to-brand-yellow text-brand-navy",
  "bg-gradient-to-br from-brand-navy to-brand-blue text-white",
  "bg-gradient-to-br from-[#EE5A60] to-brand-red text-white",
];

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/** Linha com 5 estrelas amarelas (avaliação máxima). */
function StarRow({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Avaliação: 5 de 5 estrelas"
      className={cn("flex items-center gap-1", className)}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className="size-4 fill-brand-yellow text-brand-yellow"
        />
      ))}
    </span>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const badge = EVENT_BADGES[testimonial.eventType];

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:shadow-xl hover:shadow-brand-navy/10">
      <div className="flex items-center justify-between gap-2">
        <StarRow />
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-mist px-3 py-1.5 text-[0.7rem] font-bold text-brand-blue">
          <badge.icon className="size-3.5" aria-hidden="true" />
          {badge.label}
        </span>
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
        “{testimonial.quote}”
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <span
          aria-hidden="true"
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-extrabold shadow-md shadow-brand-navy/15",
            AVATAR_STYLES[index % AVATAR_STYLES.length],
          )}
        >
          {initials(testimonial.name)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-bold text-brand-navy">
            {testimonial.name}
          </p>
          <p className="truncate text-xs text-slate-500">{testimonial.role}</p>
        </div>
        <Quote
          aria-hidden="true"
          className="ml-auto size-6 shrink-0 fill-brand-blue/10 text-brand-blue/25"
        />
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  return (
    <section id="avaliacoes" className="relative overflow-hidden bg-brand-mist">
      {/* Elementos decorativos */}
      <BingoBall
        number={5}
        color="yellow"
        className="animate-float absolute -left-6 top-16 w-20 lg:w-24"
      />
      <BingoBall
        number={50}
        color="blue"
        className="animate-float-delayed absolute -right-8 bottom-20 w-16 lg:w-20"
      />
      <Quote
        aria-hidden="true"
        className="absolute -top-6 right-10 size-56 fill-brand-blue/[0.05] text-transparent"
      />

      <Container className="relative z-10 py-20 lg:py-28">
        <SectionHeading
          eyebrow="Avaliações de clientes"
          eyebrowDashes
          title="Quem contratou, recomenda!"
          description="Depoimentos de quem fez o bingo da empresa ou da festa de aniversário com a Pontual."
        />

        {/* Grade de depoimentos */}
        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08} className="h-full">
              <TestimonialCard testimonial={testimonial} index={i} />
            </Reveal>
          ))}
        </div>

        {/* CTA final da seção */}
        <Reveal delay={0.15} className="mt-12 text-center sm:mt-14">
          <WhatsAppCtaButton size="lg" />
          <p className="mt-4 text-sm font-semibold text-slate-500">
            Junte-se a quem já fez o bingo do seu evento com a gente!
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
