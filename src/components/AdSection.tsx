import React from 'react';
import { motion } from 'motion/react';
import generatedNailImg from '../assets/images/pink_marble_nails_1780312370903.png';

export const AdSection = () => {
  return (
    <section className="py-24 bg-brand-pink-900 text-brand-offwhite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-pink-800/50 rounded-full mix-blend-screen filter blur-[120px] opacity-60 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-pink-300 tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-6 block"
            >
              Featured Masterpiece
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-white"
            >
              The Next Era of <br/> <span className="italic text-brand-pink-300">Nail Artistry</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-pink-100/80 font-light text-lg mb-10 max-w-lg leading-relaxed"
            >
              Experience our premium signature collection. Flawless cuticle work, 
              innovative designs, and products that protect your natural nail health while 
              delivering show-stopping aesthetics.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a href="#book" className="inline-block bg-brand-offwhite text-brand-pink-900 px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-brand-pink-100 transition-colors duration-300">
                Book This Look
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 aspect-[4/5] md:aspect-video lg:aspect-[4/5] relative rounded-t-full rounded-b-none overflow-hidden bg-black/20 border-8 border-brand-pink-800/30 p-2 shadow-2xl"
          >
            <div className="w-full h-full rounded-t-full overflow-hidden relative bg-brand-pink-950">
              <img 
                src={generatedNailImg} 
                alt="Stylish Nail Art" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-pink-900/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
