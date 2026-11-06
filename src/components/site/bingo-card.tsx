import { cn } from "@/lib/utils";
import { generateBingoNumbers } from "@/lib/bingo";

type BingoCardProps = {
  /** Semente determinística dos números (servidor e cliente geram o mesmo resultado). */
  seed?: number;
  /** Números explícitos (25 posições, linha por linha). Se omitido, usa a semente. */
  numbers?: number[];
  className?: string;
  freeLabel?: string;
};

/**
 * Cartela de bingo visual: cabeçalho vermelho "BINGO" + grade 5×5 com
 * espaço FREE amarelo no centro. Todo o dimensionamento interno usa
 * container queries, então a cartela escala para qualquer largura.
 */
export function BingoCard({
  seed = 42,
  numbers,
  className,
  freeLabel = "FREE",
}: BingoCardProps) {
  const cells = numbers ?? generateBingoNumbers(seed);
  return (
    <div
      aria-hidden="true"
      className={cn(
        "@container overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-brand-navy/15",
        className,
      )}
    >
      {/* Cabeçalho vermelho */}
      <div className="bg-gradient-to-b from-[#E8434A] to-[#C8101E] px-[4cqi] py-[3.2cqi] text-center">
        <span className="font-display text-[17cqi] font-extrabold leading-none tracking-[0.28em] text-white">
          BINGO
        </span>
      </div>
      {/* Grade de números */}
      <div className="grid grid-cols-5 gap-[1.4cqi] p-[2.6cqi]">
        {cells.map((n, i) =>
          i === 12 ? (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-[1.6cqi] bg-gradient-to-b from-[#FFD34D] to-brand-yellow shadow-sm"
            >
              <span className="font-display text-[7.5cqi] font-extrabold leading-none text-brand-navy">
                {freeLabel}
              </span>
            </div>
          ) : (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-[1.6cqi] border border-brand-navy/25 bg-white"
            >
              <span className="font-display text-[10.5cqi] font-bold leading-none text-brand-navy">
                {n}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
