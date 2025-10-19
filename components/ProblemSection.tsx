import React from 'react';
import { PROBLEM_ITEMS } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto max-w-6xl text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Sua área de membros parece <span className="text-red-500 [text-shadow:0_0_8px_theme(colors.red.500)]">amadora?</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
            Muitos produtores criam conteúdos incríveis, mas falham na apresentação visual. Uma área de membros desorganizada e com design fraco diminui a percepção de valor do seu produto e a confiança do seu aluno. Imagens genéricas e capas malfeitas quebram a imersão e o profissionalismo.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll staggerChildren={0.2} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {PROBLEM_ITEMS.map((item, index) => (
            <motion.div key={index} variants={cardVariants} className="flex flex-col items-center p-6 border border-purple-500/30 rounded-xl bg-gray-900/20 backdrop-blur-sm">
              <div className="text-purple-400 [filter:drop-shadow(0_0_8px_theme(colors.purple.500))]">
                {React.cloneElement(item.icon as React.ReactElement, { className: 'w-16 h-16' })}
              </div>
              <h3 className="mt-6 text-xl font-bold uppercase">{item.title}</h3>
            </motion.div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProblemSection;
