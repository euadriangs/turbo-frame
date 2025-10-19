import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className,
  staggerChildren
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
        staggerChildren: staggerChildren
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
