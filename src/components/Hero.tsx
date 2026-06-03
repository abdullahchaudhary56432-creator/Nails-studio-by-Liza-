import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-pink-50">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-offwhite via-brand-pink-50/60 to-brand-offwhite" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-pink-600 tracking-[0.25em] uppercase text-sm mb-6 block"
        >
          An elevated nail experience
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-brand-pink-900 mb-8 leading-tight"
        >
          Luxury & Precision <br/> for Every Detail
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-brand-pink-900/80 mb-12 max-w-lg mx-auto text-lg font-light leading-relaxed"
        >
          Experience sophisticated nail artistry in a serene environment. 
          Indulge in premium treatments designed for your ultimate relaxation and flawless, lasting beauty.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
        >
           <a href="#services" className="inline-block bg-brand-pink-800 text-brand-offwhite px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-brand-pink-900 transition-colors duration-300">
             Discover Styles
           </a>
        </motion.div>
      </div>
    </section>
  );
};
