import React from 'react';
import { motion } from 'motion/react';
import { pricingData } from '../data';

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-pink-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-pink-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-pink-100/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Our Rates</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-pink-900">Service Menu</h2>
          <div className="w-16 h-px bg-brand-pink-300 mx-auto mt-6"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-offwhite/80 backdrop-blur-sm p-8 md:p-14 shadow-sm border border-brand-pink-200/50 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 md:gap-y-8">
            {pricingData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                className="flex justify-between items-end border-b border-brand-pink-200/60 pb-3"
              >
                <span className="text-brand-pink-900 font-medium tracking-wide text-sm md:text-base mr-4">{item.service}</span>
                <span className="text-brand-pink-600 font-serif text-lg whitespace-nowrap">Rs. {item.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-12 text-center text-sm text-brand-pink-900/60 font-light">
          <p>Prices are subject to variation depending on nail length and design complexity.</p>
        </div>
      </div>
    </section>
  );
};
