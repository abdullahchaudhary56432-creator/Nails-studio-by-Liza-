import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviewsData } from '../data';

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section id="reviews" className="py-24 bg-brand-pink-900 border-y border-brand-pink-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink-800 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink-800 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-300 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Client Love</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-offwhite">What They Say</h2>
          <div className="w-16 h-px bg-brand-pink-700 mx-auto mt-6"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <div className="hidden md:block">
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16 p-3 rounded-full text-brand-pink-300 border border-brand-pink-700 hover:bg-brand-pink-800 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-16 p-3 rounded-full text-brand-pink-300 border border-brand-pink-700 hover:bg-brand-pink-800 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden px-4 md:px-12 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-offwhite rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col items-center text-center relative"
              >
                <Quote className="absolute top-6 left-6 md:top-10 md:left-10 w-12 h-12 text-brand-pink-100" />
                
                <div className="flex space-x-1 mb-8 z-10">
                  {[...Array(reviewsData[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-brand-pink-600 fill-brand-pink-600" />
                  ))}
                  {[...Array(5 - reviewsData[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-brand-pink-200 fill-brand-pink-200" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-brand-pink-900/80 font-serif leading-relaxed mb-10 z-10">
                  "{reviewsData[currentIndex].text}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-pink-200 flex items-center justify-center mb-4">
                    <span className="text-brand-pink-900 font-serif font-bold text-xl">
                      {reviewsData[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-brand-pink-900 text-lg uppercase tracking-wider">{reviewsData[currentIndex].name}</span>
                  <span className="text-brand-pink-600/70 text-sm mt-1">{reviewsData[currentIndex].date}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>


        </div>
      </div>
    </section>
  );
};
