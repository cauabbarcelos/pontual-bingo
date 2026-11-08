"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/content";
import { getWhatsAppUrl, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { WhatsAppIcon } from "./whatsapp-icon";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#servicos");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: destaca no menu a seção visível
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-shadow duration-300",
        scrolled
          ? "bg-white/95 shadow-md shadow-brand-navy/5 backdrop-blur"
          : "bg-white",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[76px] lg:px-8">
        <a href="#inicio" aria-label="Ir para o início" className="shrink-0">
          <Logo />
        </a>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "true" : undefined}
                  className={cn(
                    "inline-block rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                    active === link.href
                      ? "bg-brand-blue text-white shadow-sm"
                      : "text-brand-navy/80 hover:text-brand-blue",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          {/* CTA desktop */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 items-center gap-2 rounded-full bg-brand-yellow px-5 font-display text-sm font-bold text-brand-navy shadow-md shadow-brand-yellow/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd34d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/30 sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Falar conosco
          </a>

          {/* Menu mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Abrir menu"
                className="inline-flex size-11 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/30 lg:hidden"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white p-0" aria-describedby={undefined}>
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="border-b border-slate-100 px-6 py-5">
                  <Logo />
                </div>
                <nav aria-label="Navegação móvel" className="flex-1 px-6 py-4">
                  <ul className="flex flex-col">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center justify-between border-b border-slate-100 py-4 font-display text-base font-semibold transition-colors",
                            active === link.href
                              ? "text-brand-blue"
                              : "text-brand-navy hover:text-brand-blue",
                          )}
                        >
                          {link.label}
                          <span className="size-1.5 rounded-full bg-brand-yellow" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="px-6 pb-8">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-yellow font-display text-base font-bold text-brand-navy shadow-md shadow-brand-yellow/30 transition-colors hover:bg-[#ffd34d]"
                  >
                    <WhatsAppIcon className="size-5" />
                    Falar conosco
                  </a>
                  <p className="mt-3 text-center text-xs text-slate-400">
                    {siteConfig.name} — {siteConfig.tagline}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
