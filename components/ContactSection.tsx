
import React, { forwardRef, useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';
import { InstagramIcon, TwitterIcon, ChevronDownIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';

const AccordionItem: React.FC<{ item: FAQItem, index: number }> = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0);

    return (
        <div className="border-b border-gray-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-6 text-lg font-bold"
                aria-expanded={isOpen}
            >
                <span>{item.question}</span>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-400">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


const FAQSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <footer ref={ref} className="py-20 px-8 relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            <div className="container mx-auto max-w-4xl text-center">
                <AnimateOnScroll>
                    <h2 className="text-3xl md:text-5xl font-black uppercase">
                        Dúvidas Frequentes
                    </h2>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.2} className="mt-12 max-w-3xl mx-auto text-left">
                    {FAQ_ITEMS.map((item, index) => (
                        <AccordionItem key={index} item={item} index={index} />
                    ))}
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.4}>
                    <h2 className="mt-20 text-3xl md:text-5xl font-black uppercase">
                        Pronto para ter uma área de membros que <span className="text-green-400 [text-shadow:0_0_8px_theme(colors.green.400)]">vende por você?</span>
                    </h2>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.6}>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
                        Não deixe que um design fraco comprometa a qualidade do seu trabalho. Vamos criar juntos uma experiência visual que vai encantar seus alunos.
                    </p>
                     <a
                        href="https://pay.cakto.com.br/qcvzchz_613263"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-10 px-8 py-4 bg-green-500/10 border-2 border-green-400 text-green-300 font-bold uppercase rounded-lg text-lg
                                     transition-all duration-300 hover:bg-green-500/20 hover:text-white 
                                     hover:shadow-[0_0_20px_theme(colors.green.400)] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                     >
                        QUERO O PLANO PRO AGORA!
                     </a>
                </AnimateOnScroll>

                <div className="mt-20 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-lg font-bold">TURBO FRAME</p>
                    <div className="flex gap-6">
                        <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-green-400 transition-colors"><InstagramIcon className="w-6 h-6"/></a>
                        <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-green-400 transition-colors"><TwitterIcon className="w-6 h-6"/></a>
                    </div>
                    <p className="text-sm text-gray-500">&copy; 2025 - TURBO FRAME - Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
});

export default FAQSection;
