/**
 * Configuração central do site Pontual Informática.
 * Altere aqui os dados da empresa sem precisar tocar nos componentes.
 */
export const siteConfig = {
  name: "Pontual Informática",
  tagline: "Soluções em Tecnologia",
  description:
    "Empresa especializada na produção de cartelas personalizadas de bingos e rifas, com qualidade, praticidade e design profissional para o seu evento.",
  whatsapp: {
    /**
     * ⚠️ CONFIGURAÇÃO CENTRALIZADA DO WHATSAPP
     *
     * Substitua pelo número real da empresa (apenas dígitos, formato internacional):
     *   55 + DDD + número  →  ex.: "5511987654321"
     *
     * Enquanto estiver vazio, os botões abrem o WhatsApp com a mensagem
     * inicial já preenchida, permitindo que o visitante escolha o contato.
     */
    number: "",
    defaultMessage:
      "Olá! Gostaria de solicitar um orçamento para cartelas personalizadas de bingo ou rifa.",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Monta a URL do WhatsApp com a mensagem inicial preenchida. */
export function getWhatsAppUrl(
  message: string = siteConfig.whatsapp.defaultMessage,
): string {
  const digits = siteConfig.whatsapp.number.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return digits
    ? `https://wa.me/${digits}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

/** Número formatado para exibição (ou null enquanto não configurado). */
export function getWhatsAppDisplayNumber(): string | null {
  const digits = siteConfig.whatsapp.number.replace(/\D/g, "");
  if (!digits) return null;
  const hasDDI = digits.startsWith("55") && digits.length > 11;
  const ddi = hasDDI ? `+55 ` : "";
  const rest = hasDDI ? digits.slice(2) : digits;
  if (rest.length === 11) {
    return `${ddi}(${rest.slice(0, 2)}) ${rest.slice(2, 3)} ${rest.slice(3, 7)}-${rest.slice(7)}`;
  }
  if (rest.length === 10) {
    return `${ddi}(${rest.slice(0, 2)}) ${rest.slice(2, 6)}-${rest.slice(6)}`;
  }
  return `+${digits}`;
}
