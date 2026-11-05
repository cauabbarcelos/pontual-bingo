/**
 * Gera os 25 números de uma cartela de bingo no padrão americano
 * (B: 1–15, I: 16–30, N: 31–45, G: 46–60, O: 61–75), linha por linha.
 * A posição central (índice 12) é o espaço FREE.
 *
 * A geração é determinística (PRNG com semente), então o resultado é
 * idêntico no servidor e no cliente — sem risco de mismatch de hidratação.
 */
export function generateBingoNumbers(seed: number): number[] {
  let t = seed >>> 0;
  const rand = () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };

  const ranges: Array<[number, number]> = [
    [1, 15],
    [16, 30],
    [31, 45],
    [46, 60],
    [61, 75],
  ];

  const columns = ranges.map(([min, max]) => {
    const pool = Array.from({ length: max - min + 1 }, (_, i) => min + i);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, 5);
  });

  const out: number[] = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      out.push(columns[col][row]);
    }
  }
  return out;
}
