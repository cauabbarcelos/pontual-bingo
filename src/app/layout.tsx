import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pontual Informática | Cartelas personalizadas de Bingos e Rifas",
  description:
    "Qualidade, praticidade e design profissional para o seu evento! Cartelas personalizadas de bingo e rifa, com QR Code, entrega rápida e sistema próprio. Solicite um orçamento pelo WhatsApp.",
  keywords: [
    "cartelas de bingo personalizadas",
    "cartelas de rifa personalizadas",
    "bingo personalizado",
    "rifa personalizada",
    "cartelas com QR Code",
    "Pontual Informática",
  ],
  icons: {
    icon: "/pontual-icon.svg",
  },
  openGraph: {
    title: "Pontual Informática | Cartelas personalizadas de Bingos e Rifas",
    description:
      "Qualidade, praticidade e design profissional para o seu evento! Solicite um orçamento pelo WhatsApp.",
    siteName: "Pontual Informática",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-brand-navy`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
