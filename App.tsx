import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PortfolioSection from './components/PortfolioSection';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/ContactSection';

const App: React.FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const handleScrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleScrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden relative">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0012_1px,transparent_1px),linear-gradient(to_bottom,#00ff0012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <main className="relative z-10">
        <HeroSection onCTAClick={handleScrollToPricing} />
        <ProblemSection />
        <SolutionSection />
        <PortfolioSection />
        <ProcessSection />
        <PricingSection ref={pricingRef} onCTAClick={handleScrollToFAQ} />
        <FAQSection ref={faqRef} />
      </main>
    </div>
  );
};

export default App;