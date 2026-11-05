import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/config/site";
import { WhatsAppIcon } from "./whatsapp-icon";

type WhatsAppCtaButtonProps = {
  label?: string;
  variant?: "yellow" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  message?: string;
  className?: string;
};

const SIZES = {
  sm: "h-10 px-4 text-sm gap-2",
  md: "h-12 px-6 text-sm sm:text-base gap-2.5",
  lg: "h-14 px-8 text-base sm:text-lg gap-3",
} as const;

const VARIANTS = {
  yellow:
    "bg-brand-yellow text-brand-navy shadow-lg shadow-brand-yellow/30 hover:bg-[#ffd34d]",
  outline:
    "border-2 border-brand-blue bg-white text-brand-blue hover:bg-brand-blue hover:text-white",
  white:
    "bg-white text-brand-blue shadow-lg shadow-brand-navy/10 hover:bg-brand-mist",
} as const;

/** Botão de orçamento: direciona para o WhatsApp com a mensagem preenchida. */
export function WhatsAppCtaButton({
  label = "Solicitar orçamento",
  variant = "yellow",
  size = "md",
  withArrow = true,
  message,
  className,
}: WhatsAppCtaButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex shrink-0 items-center justify-center rounded-full font-display font-bold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/30 active:translate-y-0",
        SIZES[size],
        VARIANTS[variant],
        className,
      )}
    >
      <WhatsAppIcon className="size-[1.15em] shrink-0" />
      <span className="whitespace-nowrap">{label}</span>
      {withArrow && (
        <ArrowRight className="size-[1.05em] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}
