import { IconCardProps, ProcessStepProps, FAQItem } from './types';
import { ValueIcon, DisorganizationIcon, ProfessionalismIcon, BriefingIcon, AIIcon, DeliveryIcon } from './components/Icons';
import React from 'react';

// ===================================================================================
// GESTÃO DE IMAGENS
// Para substituir as imagens, basta alterar as URLs abaixo pelos links das suas imagens.
// ===================================================================================

export const HERO_CAROUSEL_PRO_IMAGES: string[] = [
  "https://i.imgur.com/NuyF7Xa.png",
  "https://i.imgur.com/AXul927.png",
  "https://i.imgur.com/RW46LY0.png",
  "https://i.imgur.com/df4nVOm.png",
  "https://i.imgur.com/RG9m4bN.png",
];

export const HERO_CAROUSEL_AMATEUR_IMAGES: string[] = [
  "https://i.imgur.com/eHUjgiL.png",
  "https://i.imgur.com/0sqK9bL.png",
  "https://i.imgur.com/3BeCckx.png",
];


export const SOLUTION_IMAGE_URL: string = "https://i.imgur.com/CyLYkAH.png";


export const PORTFOLIO_IMAGES: string[] = [
  "https://i.imgur.com/9GGX38F.png",
  "https://i.imgur.com/74oJTAW.png",
  "https://i.imgur.com/iCwqHoq.png",
  "https://i.imgur.com/80xc68N.png",
  "https://i.imgur.com/AXul927.png",
  "https://i.imgur.com/PgvpKB1.png",
  "https://i.imgur.com/Fti46af.png",
  "https://i.imgur.com/JIsIu93.png",
  "https://i.imgur.com/2fQgTuq.png",
  "https://i.imgur.com/J81D2nh.png",
  "https://i.imgur.com/Hm1gm6W.png",
  "https://i.imgur.com/TCrpHCb.png"
];

// ===================================================================================
// CONTEÚDO DAS SEÇÕES
// ===================================================================================

export const PROBLEM_ITEMS: IconCardProps[] = [
  {
    icon: React.createElement(ValueIcon),
    title: 'Baixa Percepção de Valor',
  },
  {
    icon: React.createElement(DisorganizationIcon),
    title: 'Desorganização',
  },
  {
    icon: React.createElement(ProfessionalismIcon),
    title: 'Falta de Profissionalismo',
  },
];

export const PROCESS_STEPS: ProcessStepProps[] = [
    {
        step: '01',
        title: 'Briefing e Ideia',
        description: 'Você me explica o conteúdo de cada módulo e a visão para o seu produto.',
        icon: React.createElement(BriefingIcon)
    },
    {
        step: '02',
        title: 'Criação com IA',
        description: 'Eu transformo suas ideias em prompts avançados para gerar imagens únicas e de alta qualidade.',
        icon: React.createElement(AIIcon)
    },
    {
        step: '03',
        title: 'Refinamento e Entrega',
        description: 'Faço a edição final, adicionando títulos, tratando as cores e garantindo a coesão visual. Você recebe tudo pronto para usar.',
        icon: React.createElement(DeliveryIcon)
    }
];

// ===================================================================================
// FAQ
// ===================================================================================
export const FAQ_ITEMS: FAQItem[] = [
    {
        question: "Como funciona o processo de criação?",
        answer: "O processo é simples! Primeiro, fazemos um briefing para entender suas necessidades. Em seguida, uso IA para gerar as imagens base e, por fim, faço o refinamento e design final para entregar as capas prontas para você."
    },
    {
        question: "Em qual formato receberei os arquivos?",
        answer: "Você receberá todos os arquivos em formato PNG de alta resolução, otimizados para uso na web e em qualquer plataforma de cursos online como Hotmart, Eduzz, Kiwify, etc."
    },
    {
        question: "Posso pedir revisões?",
        answer: "Sim, o plano PRO inclui uma rodada de revisão para garantir que o resultado final esteja perfeitamente alinhado com a sua visão."
    },
    {
        question: "Qual a diferença entre o plano BÁSICO e o PRO?",
        answer: "O plano PRO oferece o dobro de capas (10 vs 5), entrega prioritária e, como um grande diferencial, a criação de um logo simples para o seu produto como bônus, oferecendo um pacote de identidade visual mais completo."
    },
    {
        question: "O pagamento é único ou mensalidade?",
        answer: "O pagamento é 100% único por projeto. Sem taxas escondidas ou mensalidades. Você paga uma vez e as artes são suas para sempre."
    }
];