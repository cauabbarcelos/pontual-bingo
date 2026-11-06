import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  /** "dark" = seção com fundo escuro (texto branco / eyebrow amarelo) */
  tone?: "light" | "dark";
  eyebrowDashes?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  eyebrowDashes = false,
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span
        className={cn(
          "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em]",
          isDark ? "text-brand-yellow" : "text-brand-blue",
        )}
      >
        {eyebrowDashes && (
          <span
            aria-hidden="true"
            className={cn("h-px w-8", isDark ? "bg-brand-yellow/70" : "bg-brand-blue/60")}
          />
        )}
        {eyebrow}
        {eyebrowDashes && (
          <span
            aria-hidden="true"
            className={cn("h-px w-8", isDark ? "bg-brand-yellow/70" : "bg-brand-blue/60")}
          />
        )}
      </span>
      <h2
        className={cn(
          "mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight lg:text-4xl",
          isDark ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 max-w-xl text-base",
            isDark ? "text-white/70" : "text-slate-500",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
