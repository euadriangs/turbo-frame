import React from 'react';
import { PORTFOLIO_IMAGES } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto max-w-7xl text-center">
        <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-16">
              Veja a <span className="text-green-400 [text-shadow:0_0_8px_theme(colors.green.400)]">mágica</span> acontecer.
            </h2>
        </AnimateOnScroll>
        <AnimateOnScroll staggerChildren={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {PORTFOLIO_IMAGES.map((src, index) => (
            <motion.div 
              key={index} 
              variants={imageVariants}
              className="aspect-[5/7] rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_theme(colors.green.500)] bg-gray-900/50"
            >
              <img
                src={src}
                alt={`Exemplo de capa de curso ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PortfolioSection;