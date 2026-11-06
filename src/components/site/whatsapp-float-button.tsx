import { getWhatsAppUrl } from "@/config/site";
import { WhatsAppIcon } from "./whatsapp-icon";

/** Botão flutuante do WhatsApp no canto inferior direito. */
export function WhatsAppFloatButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar conosco pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/30 transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      <span
        aria-hidden="true"
        className="animate-wa-ping absolute inset-0 rounded-full bg-[#25D366]"
      />
      <WhatsAppIcon className="relative size-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-brand-navy px-3.5 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
}
