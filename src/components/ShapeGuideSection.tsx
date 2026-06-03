import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const shapes = [
  { id: 'almond', name: 'Almond', description: 'Slender on the sides and wide at the base, coming to a soft point.', path: 'M50 10 C35 15, 20 40, 20 100 L80 100 C80 40, 65 15, 50 10 Z' },
  { id: 'coffin', name: 'Coffin / Ballerina', description: 'Long and tapered like a stiletto but with a flat, squared tip.', path: 'M35 10 L65 10 L85 100 L15 100 Z' },
  { id: 'square', name: 'Square', description: 'Straight edges and a sharp, flat tip. Ideal for shorter nails.', path: 'M20 10 L80 10 L80 100 L20 100 Z' },
  { id: 'stiletto', name: 'Stiletto', description: 'Fierce and long, filed dramatically to a sharp, pointed tip.', path: 'M50 5 L85 100 L15 100 Z' },
  { id: 'oval', name: 'Oval', description: 'Straight sides that softly curve together at the tip. Very natural.', path: 'M50 10 C20 10, 20 40, 20 100 L80 100 C80 40, 80 10, 50 10 Z' }
];

export const ShapeGuideSection = () => {
  const [activeShape, setActiveShape] = useState(shapes[0]);

  return (
    <section className="py-24 bg-brand-offwhite border-t border-brand-pink-100 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Find Your Silhouette</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-pink-900 mb-6">Nail Shape Guide</h2>
            <p className="text-brand-pink-900/60 font-light mb-10 max-w-md">
              The shape of your nail is the foundation of your entire look. 
              Explore our comprehensive shape guide to find the silhouette that best complements your hands.
            </p>

            <div className="flex flex-col space-y-3">
              {shapes.map((shape) => (
                <button
                  key={shape.id}
                  onClick={() => setActiveShape(shape)}
                  className={`text-left px-6 py-4 rounded-lg transition-all border ${activeShape.id === shape.id ? 'bg-brand-pink-100 border-brand-pink-300 shadow-sm' : 'bg-transparent border-transparent hover:bg-brand-pink-50'}`}
                >
                  <span className={`block font-serif text-xl mb-1 ${activeShape.id === shape.id ? 'text-brand-pink-900' : 'text-brand-pink-900/60'}`}>
                    {shape.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center items-center h-[500px] relative bg-brand-pink-50 rounded-2xl border border-brand-pink-100 overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-pink-200/50 via-transparent to-transparent opacity-60"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShape.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 text-center flex flex-col items-center"
              >
                <svg width="150" height="200" viewBox="0 0 100 120" className="mb-8 drop-shadow-xl">
                  {/* Subtle Base representation */}
                  <path d="M15 100 L85 100 L95 120 L5 120 Z" fill="#FCE7F3" />
                  
                  {/* Dynamic Nail Shape */}
                  <motion.path 
                    initial={{ pathLength: 0, fill: "rgba(236, 72, 153, 0)" }}
                    animate={{ pathLength: 1, fill: "rgba(236, 72, 153, 0.2)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    d={activeShape.path} 
                    stroke="#DB2777" 
                    strokeWidth="2"
                  />
                  <path d={activeShape.path} fill="url(#nailGradient)" opacity="0.6" />
                  
                  <defs>
                    <linearGradient id="nailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FBCFE8" />
                      <stop offset="100%" stopColor="#BE185D" />
                    </linearGradient>
                  </defs>
                </svg>

                <h3 className="text-2xl font-serif text-brand-pink-900 mb-2">{activeShape.name}</h3>
                <p className="text-brand-pink-900/70 font-light max-w-sm px-6 text-sm leading-relaxed">
                  {activeShape.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
