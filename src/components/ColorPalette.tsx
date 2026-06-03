import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, X } from 'lucide-react';

const colors = [
  { id: '1', name: 'Ballet Slippers', hex: '#fadcde' },
  { id: '2', name: 'Cherry Red', hex: '#9e0c1f' },
  { id: '3', name: 'Midnight Blue', hex: '#0a192f' },
  { id: '4', name: 'Sage Green', hex: '#a2b59f' },
  { id: '5', name: 'Lavender Mist', hex: '#d4cbe5' },
  { id: '6', name: 'Terracotta', hex: '#cb6d51' },
  { id: '7', name: 'Onyx Black', hex: '#111111' },
  { id: '8', name: 'Creamy Nude', hex: '#e8d2c3' },
  { id: '9', name: 'Hot Pink', hex: '#ff69b4' },
  { id: '10', name: 'Dusty Rose', hex: '#b57b85' },
  { id: '11', name: 'Matcha Latte', hex: '#c5d1a5' },
  { id: '12', name: 'Milky White', hex: '#f4f1ea' },
];

export const ColorPalette = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleColor = (hex: string) => {
    if (selectedColors.includes(hex)) {
      setSelectedColors(selectedColors.filter(c => c !== hex));
    } else {
      if (selectedColors.length < 5) {
        setSelectedColors([...selectedColors, hex]);
      }
    }
  };

  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Interactive Fun</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-pink-900 flex items-center justify-center gap-3">
            <Palette className="w-8 h-8 text-brand-pink-500" />
            Build Your Palette
          </h2>
          <div className="w-16 h-px bg-brand-pink-300 mx-auto mt-6"></div>
          <p className="text-brand-pink-900/60 max-w-xl mx-auto mt-6 font-light">
            Experiment with our top trending shades. Pick up to 5 colors to create your custom mood board for your next appointment.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Color Picker */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {colors.map((color, idx) => {
                const isSelected = selectedColors.includes(color.hex);
                return (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    key={color.id}
                    onClick={() => toggleColor(color.hex)}
                    className="group relative flex flex-col items-center gap-2 focus:outline-none"
                  >
                    <div 
                      className={`w-14 h-14 rounded-full shadow-sm border-2 transition-all duration-300 ${isSelected ? 'border-brand-pink-600 scale-110' : 'border-transparent group-hover:scale-105'}`}
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <span className="text-xs text-brand-pink-900 font-medium text-center uppercase tracking-wide">
                      {color.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Saved Palette Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/3 bg-brand-pink-50 rounded-3xl p-8 border border-brand-pink-100 shadow-lg sticky top-24"
          >
            <h3 className="font-serif text-2xl text-brand-pink-900 mb-6">Your Palette</h3>
            
            <div className="flex gap-2 mb-8 h-16 w-full rounded-xl overflow-hidden bg-white/50 p-1 shadow-inner">
              <AnimatePresence>
                {selectedColors.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="w-full flex items-center justify-center text-brand-pink-900/40 text-sm font-light italic"
                  >
                    Select colors to build palette
                  </motion.div>
                )}
                {selectedColors.map((hex, i) => (
                  <motion.div
                    key={hex}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    layout
                    className="h-full flex-1 rounded-lg relative group cursor-pointer"
                    style={{ backgroundColor: hex }}
                    onClick={() => toggleColor(hex)}
                  >
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                      <X className="text-white w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <div className="text-xs text-brand-pink-600/70 uppercase tracking-widest text-center mb-6">
              {selectedColors.length} / 5 Colors Selected
            </div>

            <button 
              disabled={selectedColors.length === 0}
              className="w-full bg-brand-pink-900 text-brand-offwhite px-6 py-4 rounded-xl tracking-widest uppercase text-sm hover:bg-brand-pink-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Screenshot & Save
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
