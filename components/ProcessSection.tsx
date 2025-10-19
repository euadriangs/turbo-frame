import React from 'react';
import { PROCESS_STEPS } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl text-center">
        <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-16">
              Meu processo em <span className="text-fuchsia-400 [text-shadow:0_0_8px_theme(colors.fuchsia.400)]">3 passos simples.</span>
            </h2>
        </AnimateOnScroll>
        <AnimateOnScroll 
            staggerChildren={0.2} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PROCESS_STEPS.map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="relative flex flex-col items-center text-center p-8 border border-fuchsia-500/30 rounded-xl bg-gray-900/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-fuchsia-500/80 hover:shadow-[0_0_25px_theme(colors.fuchsia.500/50)]"
            >
              <div className="absolute -top-4 -left-4 text-9xl font-black text-fuchsia-400/10 select-none">
                {item.step}
              </div>
              <div className="relative mb-6 text-fuchsia-400 [filter:drop-shadow(0_0_10px_theme(colors.fuchsia.500))]">
                {React.cloneElement(item.icon as React.ReactElement, { className: 'w-16 h-16' })}
              </div>
              <h3 className="relative text-2xl font-bold uppercase text-fuchsia-400 z-10">{item.title}</h3>
              <p className="relative mt-4 text-gray-400 z-10">{item.description}</p>
            </motion.div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProcessSection;