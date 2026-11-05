import { cn } from "@/lib/utils";

type LogoProps = {
  /** "light" = fundo claro (texto navy/blue) · "dark" = fundo escuro (texto branco) */
  variant?: "light" | "dark";
  className?: string;
};

/** Logotipo Pontual Informática: marca "P" em halftone + tipografia. */
export function Logo({ variant = "light", className }: LogoProps) {
  const isDark = variant === "dark";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="size-9 shrink-0 lg:size-10"
      >
        <defs>
          <linearGradient id="pontual-logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#086B85" />
            <stop offset="1" stopColor="#0756A0" />
          </linearGradient>
        </defs>
        {/* Efeito halftone à esquerda da marca */}
        <g fill="#0756A0">
          <rect x="1" y="9" width="4.6" height="4.6" rx="1" opacity="0.9" />
          <rect x="1" y="17" width="4.6" height="4.6" rx="1" opacity="0.68" />
          <rect x="1" y="25" width="4.6" height="4.6" rx="1" opacity="0.46" />
          <rect x="1" y="33" width="4.6" height="4.6" rx="1" opacity="0.24" />
        </g>
        {/* Letra P */}
        <path
          fill="url(#pontual-logo-gradient)"
          fillRule="evenodd"
          d="M12 5h13.5C32.5 5 38 10.5 38 17.5S32.5 30 25.5 30H18.5v13H12V5Zm6.5 6v13h7a6.5 6.5 0 0 0 0-13h-7Z"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight lg:text-xl",
            isDark ? "text-white" : "text-brand-navy",
          )}
        >
          PONTUAL
        </span>
        <span
          className={cn(
            "-mt-0.5 font-display text-lg font-extrabold tracking-tight lg:text-xl",
            isDark ? "text-brand-blue" : "text-brand-blue",
          )}
        >
          INFORMÁTICA
        </span>
        <span
          className={cn(
            "mt-1 text-[8px] font-semibold uppercase tracking-[0.3em] lg:text-[9px]",
            isDark ? "text-white/50" : "text-slate-500",
          )}
        >
          Soluções em Tecnologia
        </span>
      </span>
    </span>
  );
}
