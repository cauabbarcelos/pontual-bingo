import type { LucideIcon } from "lucide-react";
import {
  Cog,
  Gem,
  Handshake,
  Layers,
  MessagesSquare,
  Palette,
  Printer,
  QrCode,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Modelos", href: "#modelos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Dúvidas", href: "#duvidas" },
];

export type Differential = { icon: LucideIcon; label: string };

export const differentials: Differential[] = [
  { icon: Star, label: "Personalização completa" },
  { icon: Gem, label: "Alta qualidade" },
  { icon: Zap, label: "Entrega rápida" },
  { icon: QrCode, label: "Cartelas com QR Code" },
  { icon: Cog, label: "Sistema próprio" },
];

export type BingoModel = {
  id: string;
  name: string;
  description: string;
  cards: 1 | 2 | 3;
};

export const bingoModels: BingoModel[] = [
  {
    id: "bingo-simples",
    name: "Bingo Simples",
    description: "Uma cartela por jogador, ideal para eventos menores.",
    cards: 1,
  },
  {
    id: "bingo-duplo",
    name: "Bingo Duplo",
    description: "Duas cartelas por jogador, mais chances de ganhar!",
    cards: 2,
  },
  {
    id: "bingo-triplo",
    name: "Bingo Triplo",
    description: "Três cartelas por jogador, aumente a emoção!",
    cards: 3,
  },
];

export type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    icon: MessagesSquare,
    title: "Você entra em contato",
    description: "Informe sua ideia, tema e quantidade.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Definimos o material",
    description: "Escolhemos o modelo, personalização e tema.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Preparação da arte",
    description: "Organizamos a arte e conferimos os detalhes.",
  },
  {
    number: "04",
    icon: Printer,
    title: "Produção e entrega",
    description: "Seu material fica pronto com qualidade.",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "Vocês fazem bingos e rifas personalizados?",
    answer:
      "Sim! Produzimos cartelas de bingo e rifa totalmente personalizadas: você escolhe o tema, as cores e a quantidade de números, e pode incluir logo, informações do evento e demais detalhes na arte.",
  },
  {
    question: "Quantos números podem ter as cartelas?",
    answer:
      "As cartelas podem ser produzidas com diferentes quantidades de números, conforme o formato do seu jogo. No orçamento, informe como deseja montar suas cartelas e nossa equipe ajusta tudo para o seu evento.",
  },
  {
    question: "As cartelas possuem QR Code?",
    answer:
      "Sim, trabalhamos com cartelas com QR Code. Ele pode ser utilizado para validação, sorteios digitais e integração com o nosso sistema próprio — a forma de uso é definida com você na criação da arte.",
  },
  {
    question: "Como faço para solicitar um orçamento?",
    answer:
      "É simples: clique em qualquer botão “Solicitar orçamento” desta página para falar com a nossa equipe pelo WhatsApp. Informe sua ideia, o tema e a quantidade de cartelas para receber sua proposta.",
  },
  {
    question: "Posso enviar minha própria logo?",
    answer:
      "Pode sim! Basta enviar a sua logo no atendimento. Nossa equipe cuida da diagramação para que ela apareça de forma elegante nas suas cartelas.",
  },
  {
    question: "Vocês atendem empresas, igrejas e eventos?",
    answer:
      "Sim! Atendemos empresas, igrejas, escolas, confraternizações e eventos em geral, com produção personalizada para cada tipo de ação.",
  },
];

export type TestimonialEventType = "empresa" | "aniversario";

export type Testimonial = {
  name: string;
  role: string;
  eventType: TestimonialEventType;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Mariana Duarte",
    role: "Analista de RH",
    eventType: "empresa",
    quote:
      "Contratamos a Pontual para o bingo da confraternização da empresa e as cartelas personalizadas com a nossa logo ficaram incríveis. Qualidade impecável e atendimento super ágil!",
  },
  {
    name: "Carlos Henrique",
    role: "Festa em família",
    eventType: "aniversario",
    quote:
      "Organizei o bingo do aniversário de 60 anos da minha mãe. As cartelas com o tema da festa emocionaram todo mundo e chegaram antes do prazo. Nota 10!",
  },
  {
    name: "Fernanda Costa",
    role: "Coordenadora de eventos",
    eventType: "empresa",
    quote:
      "Usamos as cartelas no evento de fim de ano com mais de 300 colaboradores. O bingo duplo foi um sucesso e a equipe nos ajudou do início ao fim.",
  },
  {
    name: "Patrícia Mendes",
    role: "Festa infantil",
    eventType: "aniversario",
    quote:
      "As cartelas do aniversário da minha filha ficaram um encanto, com as cores exatas do tema. As crianças amaram e os convidados elogiaram demais. Voltarei a contratar!",
  },
  {
    name: "Roberto Almeida",
    role: "Organizador de eventos",
    eventType: "empresa",
    quote:
      "Precisávamos de cartelas com QR Code para o sorteio da nossa empresa. A Pontual entregou exatamente o que pedimos, com agilidade e ótimo acabamento.",
  },
  {
    name: "Juliana Ferreira",
    role: "Festa particular",
    eventType: "aniversario",
    quote:
      "Contratei para o meu aniversário de 30 anos e superou as expectativas: arte linda, material de qualidade e preço justo. Recomendo de olhos fechados!",
  },
];

/** Resumo da avaliação média exibido na seção de depoimentos. */
export const testimonialSummary = {
  rating: "5,0",
  scaleLabel: "de 5",
  description:
    "Avaliação média de clientes de empresas, igrejas e festas de aniversário",
} as const;

export type FooterValue = { icon: LucideIcon; label: string };

export const footerValues: FooterValue[] = [
  { icon: ShieldCheck, label: "Qualidade em cada detalhe" },
  { icon: Zap, label: "Agilidade na entrega" },
  { icon: Handshake, label: "Seu evento com mais emoção" },
];
