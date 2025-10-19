import React from 'react';
import { HERO_CAROUSEL_AMATEUR_IMAGES, HERO_CAROUSEL_PRO_IMAGES } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

interface HeroSectionProps {
    onCTAClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
    // Duplicamos as imagens para garantir o efeito de loop infinito
    const proImages = [...HERO_CAROUSEL_PRO_IMAGES, ...HERO_CAROUSEL_PRO_IMAGES];
    const amateurImages = [...HERO_CAROUSEL_AMATEUR_IMAGES, ...HERO_CAROUSEL_AMATEUR_IMAGES];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center">
            <div className="container mx-auto max-w-7xl z-10">
                <AnimateOnScroll>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase">
                        Sua área de membros parece
                        <br />
                        <span className="text-red-500 [text-shadow:0_0_8px_theme(colors.red.500)]">Amadora</span> ou <span className="text-green-400 [text-shadow:0_0_8px_theme(colors.green.400)]">Profissional?</span>
                    </h1>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2}>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
                        A primeira impressão define o valor do seu produto. Veja a diferença.
                    </p>
                </AnimateOnScroll>

                {/* Container dos Carrosséis */}
                <AnimateOnScroll delay={0.4} className="mt-10 space-y-8">
                    {/* Carrossel Profissional */}
                    <div className="p-2 border-2 border-green-500 rounded-lg bg-black/30 shadow-[0_0_20px_theme(colors.green.500/50)]">
                        <div className="overflow-hidden">
                            <div className="flex animate-scroll-left">
                                {proImages.map((src, index) => (
                                    <img
                                        key={`pro-${index}`}
                                        src={src}
                                        alt="Exemplo de design profissional"
                                        className="h-32 md:h-44 object-contain rounded-md mx-2 flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Carrossel Amador */}
                    <div className="p-2 border-2 border-red-500 rounded-lg bg-black/30 shadow-[0_0_20px_theme(colors.red.500/50)]">
                        <div className="overflow-hidden">
                            <div className="flex animate-scroll-right">
                                {amateurImages.map((src, index) => (
                                    <img
                                        key={`amateur-${index}`}
                                        src={src}
                                        alt="Exemplo de design amador"
                                        className="h-32 md:h-44 object-contain rounded-md mx-2 flex-shrink-0 filter grayscale"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.6}>
                     <button
                        onClick={onCTAClick}
                        className="mt-12 px-8 py-4 bg-green-500/10 border-2 border-green-400 text-green-300 font-bold uppercase rounded-lg text-lg
                                     transition-all duration-300 hover:bg-green-500/20 hover:text-white 
                                     hover:shadow-[0_0_20px_theme(colors.green.400)] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                     >
                        Ver Planos e Preços
                     </button>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default HeroSection;
