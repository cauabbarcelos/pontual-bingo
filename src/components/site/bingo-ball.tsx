import { cn } from "@/lib/utils";

type BallColor = "blue" | "red" | "yellow";

const BALL_COLORS: Record<
  BallColor,
  { base: string; light: string; dark: string; number: string }
> = {
  blue: { base: "#0756A0", light: "#4E8FD6", dark: "#043A6E", number: "#0756A0" },
  red: { base: "#D71920", light: "#EE5A60", dark: "#8F0E14", number: "#D71920" },
  yellow: {
    base: "#FFC928",
    light: "#FFE18A",
    dark: "#D99F00",
    number: "#0D2038",
  },
};

type BingoBallProps = {
  number: number | string;
  color: BallColor;
  className?: string;
};

/** Bola de bingo com efeito 3D (brilho, globo interno e sombra). */
export function BingoBall({ number, color, className }: BingoBallProps) {
  const c = BALL_COLORS[color];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "@container relative inline-flex aspect-square select-none items-center justify-center rounded-full shadow-lg shadow-brand-navy/25",
        className,
      )}
      style={{
        background: `radial-gradient(circle at 32% 26%, ${c.light} 0%, ${c.base} 52%, ${c.dark} 100%)`,
      }}
    >
      {/* Globo interno branco */}
      <span className="absolute inset-[13%] rounded-full bg-white shadow-[inset_0_-3px_6px_rgba(13,32,56,0.18)]" />
      {/* Número */}
      <span
        className="relative font-display font-extrabold leading-none"
        style={{ fontSize: "38cqi", color: c.number }}
      >
        {number}
      </span>
      {/* Brilho */}
      <span className="pointer-events-none absolute left-[16%] top-[8%] h-[24%] w-[38%] -rotate-[20deg] rounded-full bg-white/55 blur-[1.5px]" />
    </span>
  );
}
