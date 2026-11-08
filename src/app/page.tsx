import { BingoModelsSection } from "@/components/site/bingo-models-section";
import { DifferentialsBar } from "@/components/site/differentials-bar";
import { FaqSection } from "@/components/site/faq-section";
import { FinalCtaSection } from "@/components/site/final-cta-section";
import { HeroSection } from "@/components/site/hero-section";
import { HowItWorksSection } from "@/components/site/how-it-works-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { WhatsAppFloatButton } from "@/components/site/whatsapp-float-button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <DifferentialsBar />
        <BingoModelsSection />
        <HowItWorksSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <WhatsAppFloatButton />
    </div>
  );
}
