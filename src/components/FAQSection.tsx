import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do I need to book an appointment in advance?",
    answer: "Yes, we highly recommend booking in advance as our schedule fills up quickly. However, we do accept walk-ins based on availability."
  },
  {
    question: "How long do acrylic extensions last?",
    answer: "With proper care and maintenance, acrylic extensions can last 3-4 weeks. We recommend coming in for a refill every 2-3 weeks to maintain the integrity of the nail and prevent lifting."
  },
  {
    question: "Do you offer custom nail art?",
    answer: "Absolutely! Nail art is our specialty. Please let us know when booking or show us a reference picture from Pinterest/Instagram so we can allocate extra time for your appointment."
  },
  {
    question: "What is the difference between gel polish and regular polish?",
    answer: "Gel polish is cured under an LED/UV lamp and lasts up to 3-4 weeks without chipping, while regular polish air dries and typically lasts 3-7 days. Gel also provides a stronger, glossier finish."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-offwhite border-t border-brand-pink-100">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Helpful Info</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-pink-900">Frequently Asked Questions</h2>
          <div className="w-16 h-px bg-brand-pink-300 mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-pink-50 rounded-lg border border-brand-pink-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-brand-pink-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-pink-600 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-brand-pink-900/70 font-light border-t border-brand-pink-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
