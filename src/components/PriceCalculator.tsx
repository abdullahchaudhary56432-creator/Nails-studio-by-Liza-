import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';

export const PriceCalculator = () => {
  const [baseService, setBaseService] = useState('gel_manicure');
  const [length, setLength] = useState('short');
  const [nailArt, setNailArt] = useState('none');

  const basePrices: Record<string, number> = {
    regular_manicure: 2000,
    gel_manicure: 4000,
    acrylic_full_set: 5500,
    builder_gel: 5000,
  };

  const lengthPrices: Record<string, number> = {
    short: 0,
    medium: 500,
    long: 1000,
    xl: 1500,
  };

  const artPrices: Record<string, number> = {
    none: 0,
    french: 1500,
    simple: 1000,
    complex: 2500,
    chrome: 1500,
  };

  const total = basePrices[baseService] + lengthPrices[length] + artPrices[nailArt];

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
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Plan Your Visit</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-pink-900 flex items-center justify-center gap-3">
            <Calculator className="w-8 h-8 text-brand-pink-500" />
            Price Calculator
          </h2>
          <div className="w-16 h-px bg-brand-pink-300 mx-auto mt-6"></div>
          <p className="text-brand-pink-900/60 max-w-xl mx-auto mt-6 font-light">
            Estimate the cost of your dream nails before you book. Select your preferences below.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-brand-pink-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* Base Service */}
              <div>
                <label className="block text-brand-pink-900 font-medium mb-3">1. Base Service</label>
                <div className="space-y-2">
                  {[
                    { id: 'regular_manicure', label: 'Regular Manicure (PKR 2000+)' },
                    { id: 'gel_manicure', label: 'Gel Manicure (PKR 4000+)' },
                    { id: 'acrylic_full_set', label: 'Acrylic Full Set (PKR 5500+)' },
                    { id: 'builder_gel', label: 'Builder Gel Overlay (PKR 5000+)' },
                  ].map((option) => (
                    <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${baseService === option.id ? 'border-brand-pink-600' : 'border-brand-pink-300 group-hover:border-brand-pink-400'}`}>
                        {baseService === option.id && <div className="w-2.5 h-2.5 bg-brand-pink-600 rounded-full" />}
                      </div>
                      <input 
                        type="radio" 
                        name="baseService" 
                        value={option.id} 
                        checked={baseService === option.id} 
                        onChange={(e) => setBaseService(e.target.value)} 
                        className="hidden" 
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Length Extension */}
              {baseService !== 'regular_manicure' && baseService !== 'gel_manicure' && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                  <label className="block text-brand-pink-900 font-medium mb-3">2. Desired Length</label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: 'short', label: 'Short (+0)' },
                      { id: 'medium', label: 'Medium (+PKR 500)' },
                      { id: 'long', label: 'Long (+PKR 1000)' },
                      { id: 'xl', label: 'XL (+PKR 1500)' },
                    ].map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setLength(option.id)}
                        className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                          length === option.id 
                            ? 'bg-brand-pink-600 text-white border-brand-pink-600' 
                            : 'bg-transparent text-gray-600 border-brand-pink-200 hover:border-brand-pink-400'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Nail Art */}
              <div>
                <label className="block text-brand-pink-900 font-medium mb-3">3. Nail Art & Finish</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'none', label: 'No Art (PKR 0)' },
                    { id: 'french', label: 'French Tip (+PKR 1500)' },
                    { id: 'simple', label: 'Simple Art 1-2 Nails (+PKR 1000)' },
                    { id: 'complex', label: 'Complex Art All Nails (+PKR 2500)' },
                    { id: 'chrome', label: 'Chrome Finish (+PKR 1500)' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setNailArt(option.id)}
                      className={`p-3 rounded-xl border text-sm text-left transition-colors ${
                        nailArt === option.id 
                          ? 'bg-brand-pink-50 border-brand-pink-400 text-brand-pink-900 font-medium' 
                          : 'bg-transparent border-brand-pink-100 text-gray-600 hover:border-brand-pink-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total Display */}
            <div className="flex items-center justify-center border-t md:border-t-0 md:border-l border-brand-pink-100 pt-8 md:pt-0 md:pl-12 mt-8 md:mt-0">
              <div className="text-center w-full">
                <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-2 block">Estimated Total</span>
                <motion.div 
                  key={total}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-5xl md:text-6xl font-serif text-brand-pink-900 mb-6"
                >
                  PKR {total.toLocaleString()}
                </motion.div>
                <p className="text-sm text-gray-500 font-light max-w-[200px] mx-auto mb-8">
                  * Prices are estimates. Final price may vary based on exact requirements.
                </p>
                <a 
                  href="#book"
                  className="inline-block w-full bg-brand-pink-900 text-brand-offwhite px-8 py-4 rounded-full tracking-widest uppercase text-sm hover:bg-brand-pink-800 transition-colors"
                >
                  Book This Service
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
