import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const SHAPES = [
  { 
    id: 'almond', 
    name: 'Almond', 
    path: 'M 20 120 C 20 140, 80 140, 80 120 C 80 50, 65 15, 50 15 C 35 15, 20 50, 20 120 Z' 
  },
  { 
    id: 'square', 
    name: 'Square', 
    path: 'M 20 120 C 20 140, 80 140, 80 120 L 80 30 C 80 25, 75 20, 70 20 L 30 20 C 25 20, 20 25, 20 30 Z' 
  },
  { 
    id: 'stiletto', 
    name: 'Stiletto', 
    path: 'M 20 120 C 20 140, 80 140, 80 120 C 80 60, 55 5, 50 5 C 45 5, 20 60, 20 120 Z' 
  },
  { 
    id: 'coffin', 
    name: 'Coffin', 
    path: 'M 20 120 C 20 140, 80 140, 80 120 C 80 60, 70 20, 65 20 L 35 20 C 30 20, 20 60, 20 120 Z' 
  },
  { 
    id: 'oval', 
    name: 'Oval', 
    path: 'M 20 120 C 20 140, 80 140, 80 120 C 80 60, 75 25, 50 25 C 25 25, 20 60, 20 120 Z' 
  },
];

const COLORS = [
  { id: 'nude', name: 'Classic Nude', hex: '#dcb3a3' },
  { id: 'red', name: 'Signature Red', hex: '#8a0f1d' },
  { id: 'pink', name: 'Bubblegum', hex: '#ffb7c5' },
  { id: 'black', name: 'Midnight', hex: '#1a1a1a' },
  { id: 'lavender', name: 'Lavender', hex: '#b5a6c9' },
  { id: 'white', name: 'Milky White', hex: '#f0f0f0' },
  { id: 'blue', name: 'Royal Blue', hex: '#0f3c8a' },
  { id: 'sage', name: 'Sage Green', hex: '#8ea38d' },
  { id: 'gold', name: 'Rose Gold', hex: '#c59b85' },
  { id: 'burgundy', name: 'Burgundy', hex: '#4a0e17' },
];

export const VirtualTryOn = () => {
  const [selectedShape, setSelectedShape] = useState(SHAPES[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[1]);

  return (
    <section className="py-24 bg-brand-pink-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> Interactive
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-pink-900">Virtual Try-On</h2>
          <div className="w-16 h-px bg-brand-pink-300 mx-auto mt-6"></div>
          <p className="text-brand-pink-900/60 font-light mt-6 max-w-lg mx-auto">
            Experiment with different nail shapes and colors to find your perfect style before you book your appointment.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-brand-pink-100">
          
          {/* Visualizer */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-brand-offwhite rounded-2xl p-8 min-h-[400px] shadow-inner relative overflow-hidden">
            {/* Background elements to make it look nice */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative w-48 h-64 z-10 flex items-end justify-center pb-0">
               {/* Finger SVG Mock */}
               <svg viewBox="0 0 100 160" className="w-[120%] h-auto drop-shadow-2xl overflow-visible">
                 {/* Finger body extending down */}
                 <path d="M 12 160 L 12 100 C 12 65, 88 65, 88 100 L 88 160 Z" fill="#e8c7b8" />
                 
                 {/* Cuticle shadow details */}
                 <path d="M 18 115 C 18 105, 82 105, 82 115 C 82 135, 18 135, 18 115 Z" fill="#d4a390" opacity="0.6" />
                 <path d="M 16 117 C 16 95, 84 95, 84 117 C 84 140, 16 140, 16 117 Z" fill="none" stroke="#d4a390" strokeWidth="2" opacity="0.3" />

                 {/* Nail */}
                 <motion.path 
                   initial={false}
                   animate={{ d: selectedShape.path, fill: selectedColor.hex }}
                   transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                   stroke="#ffffff"
                   strokeWidth="1.5"
                   strokeOpacity="0.5"
                 />
                 
                 {/* Glossy Reflection Overlay */}
                 <motion.path 
                   initial={false}
                   animate={{ d: selectedShape.path }}
                   fill="url(#gloss)"
                   opacity="0.75"
                   className="pointer-events-none"
                 />
                 
                 <defs>
                   <linearGradient id="gloss" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                     <stop offset="15%" stopColor="white" stopOpacity="0.4" />
                     <stop offset="40%" stopColor="white" stopOpacity="0" />
                     <stop offset="80%" stopColor="black" stopOpacity="0" />
                     <stop offset="100%" stopColor="black" stopOpacity="0.3" />
                   </linearGradient>
                 </defs>
               </svg>
            </div>
          </div>

          {/* Controls */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10">
            {/* Shape selection */}
            <div>
              <h3 className="font-serif text-xl text-brand-pink-900 mb-4 flex items-center justify-between">
                <span>1. Select Shape</span>
                <span className="text-xs font-sans font-medium text-brand-pink-600 bg-brand-pink-100 px-3 py-1 rounded-full uppercase tracking-wider">{selectedShape.name}</span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {SHAPES.map(shape => (
                  <button
                    key={shape.id}
                    onClick={() => setSelectedShape(shape)}
                    className={`
                      aspect-[3/4] rounded-xl flex flex-col items-center justify-center p-2 border-2 transition-all group
                      ${selectedShape.id === shape.id 
                        ? 'border-brand-pink-600 bg-brand-pink-50 shadow-md transform scale-[1.02]' 
                        : 'border-gray-100 bg-white hover:border-brand-pink-300 hover:bg-brand-pink-50/50'}
                    `}
                  >
                    <svg viewBox="0 0 100 160" className={`w-8 h-12 mb-3 transition-colors ${selectedShape.id === shape.id ? 'fill-brand-pink-600' : 'fill-gray-300 group-hover:fill-brand-pink-300'}`}>
                      <path d={shape.path} />
                    </svg>
                    <span className={`text-[10px] font-bold uppercase tracking-widest leading-none ${selectedShape.id === shape.id ? 'text-brand-pink-900' : 'text-gray-400 group-hover:text-brand-pink-600'}`}>
                      {shape.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color selection */}
            <div>
              <h3 className="font-serif text-xl text-brand-pink-900 mb-4 flex items-center justify-between">
                <span>2. Select Color</span>
                <span className="text-xs font-sans font-medium text-brand-pink-600 bg-brand-pink-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedColor.name}
                </span>
              </h3>
              <div className="grid grid-cols-5 sm:grid-cols-5 gap-4">
                {COLORS.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`
                      aspect-square rounded-full flex flex-col items-center justify-center transition-all p-1
                      ${selectedColor.id === color.id ? 'ring-2 ring-brand-pink-600 ring-offset-2 transform scale-110 shadow-lg' : 'hover:scale-105 opacity-90 hover:opacity-100'}
                    `}
                    title={color.name}
                  >
                    <div 
                      className="w-full h-full rounded-full shadow-inner border border-black/10 relative overflow-hidden"
                      style={{ backgroundColor: color.hex }}
                    >
                      {/* Shine effect on circular color swatch */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 mix-blend-overlay"></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
