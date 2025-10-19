import React, { forwardRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { motion } from 'framer-motion';
import { CheckIcon } from './Icons';

interface PricingSectionProps {
    onCTAClick: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const PricingSection = forwardRef<HTMLDivElement, PricingSectionProps>(({ onCTAClick }, ref) => {
  return (
    <section ref={ref} className="py-20 px-8">
      <div className="container mx-auto max-w-6xl text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Escolha o plano perfeito <span className="text-green-400 [text-shadow:0_0_8px_theme(colors.green.400)]">para o seu projeto</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="mt-4 text-lg text-gray-400">Pagamento único, sem surpresas.</p>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Plano Básico */}
          <AnimateOnScroll delay={0.4}>
            <motion.div variants={cardVariants} className="flex flex-col p-8 border-2 border-blue-500/50 rounded-2xl bg-gray-900/30 backdrop-blur-sm h-full">
              <h3 className="text-3xl font-bold uppercase" style={{color: '#00FFFF'}}>BÁSICO</h3>
              <p className="mt-4 text-5xl font-black">
                R$ 67<span className="text-2xl font-bold text-gray-400">,00</span>
              </p>
              <ul className="mt-8 space-y-4 text-left text-gray-300 flex-grow">
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" /> 5 Capas para Área de Membros
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" /> Imagens Geradas com IA
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" /> Design e Finalização Profissional
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" /> Entrega em até 3 dias úteis
                </li>
              </ul>
              <a 
                href="https://pay.cakto.com.br/jee7g45"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block w-full px-8 py-3 border-2 font-bold uppercase rounded-lg text-lg text-center
                           transition-all duration-300 hover:text-white 
                           focus:outline-none focus:ring-opacity-50"
                style={{borderColor: '#00FFFF', color: '#00FFFF', boxShadow: 'none'}}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.2)'; e.currentTarget.style.boxShadow = '0 0 20px #00FFFF'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Escolher Plano Básico
              </a>
            </motion.div>
          </AnimateOnScroll>

          {/* Plano PRO */}
          <AnimateOnScroll delay={0.6}>
            <motion.div variants={cardVariants} className="relative flex flex-col p-8 border-4 border-green-400 rounded-2xl bg-gray-900/30 backdrop-blur-sm h-full shadow-[0_0_30px_theme(colors.green.500/50)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-400 text-black font-bold uppercase text-sm rounded-full">
                    Mais Popular
                </div>
              <h3 className="text-3xl font-bold uppercase text-green-400">PRO</h3>
              <p className="mt-4 text-5xl font-black">
                R$ 97<span className="text-2xl font-bold text-gray-400">,00</span>
              </p>
              <ul className="mt-8 space-y-4 text-left text-gray-300 flex-grow">
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" /> 10 Capas para Área de Membros
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" /> Imagens Geradas com IA
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" /> Design e Finalização Profissional
                </li>
                <li className="flex items-center gap-3 font-bold text-green-300">
                  <CheckIcon className="w-5 h-5 text-green-400" /> 1 Logo Simples para o Produto (BÔNUS)
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" /> Entrega Prioritária em 2 dias úteis
                </li>
              </ul>
              <a 
                href="https://pay.cakto.com.br/qcvzchz_613263"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block w-full px-8 py-3 bg-green-400 text-black font-bold uppercase rounded-lg text-lg text-center
                           transition-all duration-300 hover:bg-green-300 hover:scale-105
                           hover:shadow-[0_0_20px_theme(colors.green.400)] focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50"
              >
                Quero o Plano PRO!
              </a>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
});

export default PricingSection;