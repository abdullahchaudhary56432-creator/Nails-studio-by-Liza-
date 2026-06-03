import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-brand-pink-600 mb-4" />,
    title: 'Premium Products',
    description: 'We use only the highest quality, non-toxic polishes and builder gels to ensure lasting results and protect your natural nails.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-pink-600 mb-4" />,
    title: 'Strict Hygiene',
    description: 'Your safety is our priority. All tools are hospital-grade sterilized in an autoclave before every single appointment.'
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-brand-pink-600 mb-4" />,
    title: 'Expert Care',
    description: 'Our certified technicians are trained in the latest techniques, ensuring your nail health is never compromised for style.'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">The Liza Difference</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-pink-900">Why Choose Us</h2>
          <div className="w-16 h-px bg-brand-pink-300 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center p-6 bg-brand-pink-50 rounded-2xl border border-brand-pink-100/50 hover:shadow-md transition-shadow"
            >
              <div className="bg-brand-offwhite w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-brand-pink-900 mb-4">{feature.title}</h3>
              <p className="text-brand-pink-900/70 font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
