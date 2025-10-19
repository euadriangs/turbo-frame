import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { SOLUTION_IMAGE_URL } from '../constants';
import { XIcon, CheckIcon } from './Icons';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            De <span className="text-red-500 [text-shadow:0_0_8px_theme(colors.red.500)]">prejuízo</span> a <span className="text-green-400 [text-shadow:0_0_8px_theme(colors.green.400)]">lucro</span>:
            <br />
            O poder da primeira impressão
          </h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.2}>
            <div className="mt-12 rounded-lg overflow-hidden border-2 border-green-500/30 shadow-[0_0_25px_theme(colors.green.500/20)]">
                 <img src={SOLUTION_IMAGE_URL} alt="Comparativo Antes e Depois da área de membros" className="w-full h-auto object-contain"/>
            </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Coluna da Esquerda (Dores) */}
          <AnimateOnScroll delay={0.4}>
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-red-500/30 bg-gray-900/20">
              <div className="mb-4 text-red-500 [filter:drop-shadow(0_0_8px_theme(colors.red.500))]">
                <XIcon className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-6">Área de Membros Amadora</h3>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li className="flex items-start gap-3 text-left">
                  <XIcon className="w-6 h-6 text-red-500/70 mt-1 flex-shrink-0" />
                  <span>Muitos pedidos de reembolso.</span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <XIcon className="w-6 h-6 text-red-500/70 mt-1 flex-shrink-0" />
                  <span>Baixa percepção de valor sobre o produto.</span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <XIcon className="w-6 h-6 text-red-500/70 mt-1 flex-shrink-0" />
                  <span>Prejuízo em campanhas de tráfego pago.</span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Coluna da Direita (Benefícios) */}
          <AnimateOnScroll delay={0.6}>
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-green-400/30 bg-gray-900/20">
              <div className="mb-4 text-green-400 [filter:drop-shadow(0_0_8px_theme(colors.green.400))]">
                <CheckIcon className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-6">Área de Membros Premium</h3>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-start gap-3 text-left">
                  <CheckIcon className="w-6 h-6 text-green-400/80 mt-1 flex-shrink-0" />
                  <span>Alta percepção de valor e satisfação.</span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <CheckIcon className="w-6 h-6 text-green-400/80 mt-1 flex-shrink-0" />
                  <span>Clientes que compram mais de uma vez.</span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <CheckIcon className="w-6 h-6 text-green-400/80 mt-1 flex-shrink-0" />
                  <span>Profissionalismo que gera confiança e mais vendas.</span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;