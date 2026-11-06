import { CheckCircle2 } from "lucide-react";
import {
  getWhatsAppDisplayNumber,
  getWhatsAppUrl,
  siteConfig,
} from "@/config/site";
import { differentials, footerValues } from "@/data/content";
import { Container } from "./container";
import { Logo } from "./logo";
import { WhatsAppIcon } from "./whatsapp-icon";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const displayNumber = getWhatsAppDisplayNumber();

  return (
    <footer className="mt-auto bg-brand-navy text-white">
      <Container className="py-12 lg:py-14">
        {/* Linha superior: logo + valores */}
        <div className="flex flex-col items-center gap-8 border-b border-white/10 pb-10 text-center lg:flex-row lg:justify-between lg:text-left">
          <a href="#inicio" aria-label="Voltar ao início" className="shrink-0">
            <Logo variant="dark" />
          </a>
          <ul className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            {footerValues.map((value) => (
              <li key={value.label} className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-yellow">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="max-w-[9rem] text-sm font-semibold leading-tight text-white/90">
                  {value.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Colunas institucionais */}
        <div className="grid gap-10 py-10 text-center md:grid-cols-3 md:text-left">
          <div>
            <h3 className="font-display text-base font-bold">{siteConfig.name}</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/60 md:mx-0">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Nossos diferenciais
            </h3>
            <ul className="mt-4 inline-block space-y-2.5 text-left">
              {differentials.map((d) => (
                <li key={d.label} className="flex items-center gap-2.5 text-sm text-white/65">
                  <CheckCircle2 className="size-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                  {d.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Contato
            </h3>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/40"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="size-5" />
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold">WhatsApp</span>
                <span className="block text-xs text-white/60">
                  {displayNumber ?? "Fale conosco agora mesmo"}
                </span>
              </span>
            </a>
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              Atendimento para orçamentos de cartelas personalizadas de bingo e
              rifa.
            </p>
          </div>
        </div>

        {/* Base */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>
            © {year} {siteConfig.name} — {siteConfig.tagline}. Todos os direitos
            reservados.
          </p>
          <p>Cartelas personalizadas de bingos e rifas</p>
        </div>
      </Container>
    </footer>
  );
}
