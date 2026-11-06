import { differentials } from "@/data/content";
import { Container } from "./container";
import { Reveal } from "./reveal";

export function DifferentialsBar() {
  return (
    <section id="servicos" className="bg-white">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-7 py-8 sm:grid-cols-3 sm:py-10 lg:grid-cols-5">
          {differentials.map((item, i) => (
            <li key={item.label}>
              <Reveal delay={i * 0.07} y={16}>
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-navy to-brand-blue text-white shadow-md shadow-brand-navy/20">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold leading-tight text-brand-navy">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
