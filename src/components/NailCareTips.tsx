import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const careTips = [
  {
    title: "Hydration is Key",
    content: "Apply cuticle oil daily. This keeps the skin around your nails hydrated, preventing hangnails and keeping the nail enhancement flexible to avoid breakage."
  },
  {
    title: "Wear Gloves",
    content: "Always wear gloves when cleaning, gardening, or washing dishes. Harsh chemicals and prolonged exposure to water can cause enhancements to lift or weaken."
  },
  {
    title: "Nails are Jewels, Not Tools",
    content: "Do not use your nails to open cans, scrape off labels, or pry things open. This puts strain on the extension and natural nail, leading to painful breaks."
  },
  {
    title: "Regular Maintenance",
    content: "Book a fill every 2-4 weeks depending on your nail growth. Going too long between fills can unbalance the nail structure, causing stress and breakage."
  },
  {
    title: "Avoid Picking or Biting",
    content: "If you notice a lift or chip, do not pick at it or bite it off. This can peel away layers of your natural nail, leaving it thin and weak. Better to schedule a repair!"
  }
];

export const NailCareTips = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-pink-50 border-t border-brand-pink-100">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Maintain The Look</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-pink-900 mb-6">Nail Care Tips</h2>
          <div className="w-16 h-px bg-brand-pink-300 mx-auto"></div>
          <p className="text-brand-pink-900/60 font-light mt-6 max-w-lg mx-auto">
            Keep your fresh manicure looking flawless and prevent damage with these essential aftercare instructions.
          </p>
        </motion.div>

        <div className="space-y-4">
          {careTips.map((tip, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className="bg-white border border-brand-pink-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-brand-pink-50/50 transition-colors text-left"
                >
                  <span className="font-serif text-xl text-brand-pink-900">{tip.title}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4 text-brand-pink-400"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-brand-pink-900/70 font-light leading-relaxed">
                        {tip.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
