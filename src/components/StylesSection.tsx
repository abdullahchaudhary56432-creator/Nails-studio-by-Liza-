import React from 'react';
import { motion } from 'motion/react';
import { nailStyles } from '../data';

export const StylesSection = () => {
  return (
    <section id="services" className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-pink-900">Signature Styles</h2>
          <div className="w-16 h-px bg-brand-pink-300 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {nailStyles.map((style, index) => (
            <motion.div 
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer bg-brand-pink-50 p-8 rounded-lg border border-brand-pink-100 hover:shadow-sm transition-shadow h-full flex flex-col justify-center items-center text-center hover:bg-brand-pink-100"
            >
              <h3 className="text-xl font-serif text-brand-pink-900 mb-4">{style.title}</h3>
              <p className="text-brand-pink-900/60 text-sm font-light leading-relaxed">{style.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
