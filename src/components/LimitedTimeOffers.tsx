import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Tag, Sparkles, ArrowRight } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

export const LimitedTimeOffers = ({ onBookClick }: { onBookClick: () => void }) => {
  const { playClick } = useAudio();
  
  // Calculate time remaining (e.g., 2 days, 14 hours, 35 minutes)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev; // Timer reached 0
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClaimOffer = () => {
    playClick();
    onBookClick();
  };

  const padZero = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-20 bg-brand-pink-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 p-32 bg-brand-pink-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 p-32 bg-brand-pink-200 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-serif text-brand-pink-900 mb-4 inline-flex items-center justify-center gap-3">
             <Sparkles className="w-8 h-8 text-brand-pink-500" />
             Flash Deals
             <Sparkles className="w-8 h-8 text-brand-pink-500" />
           </h2>
           <p className="text-brand-pink-900/70 text-lg uppercase tracking-widest font-medium">Limited time offers. Book now before they are gone!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Hero Offer */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="lg:col-span-2 bg-gradient-to-br from-brand-pink-900 to-brand-pink-700 rounded-2xl p-8 text-brand-pink-50 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Tag className="w-32 h-32" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-pink-50/20 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
                  Summer Special
                </span>
                <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">35% OFF Custom Sets</h3>
                <p className="text-brand-pink-100 mb-8 max-w-md">
                  Get our premium custom press-on nail sets at an unbeatable price. Includes sizing kit and priority shipping.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-brand-pink-50/20 pt-6">
                <div className="flex items-center gap-3 bg-black/20 px-4 py-2 rounded-lg w-full sm:w-auto justify-center">
                  <Clock className="w-5 h-5 text-brand-pink-200" />
                  <div className="font-mono text-xl font-medium tracking-wider">
                    {padZero(timeLeft.days)}:{padZero(timeLeft.hours)}:{padZero(timeLeft.minutes)}:{padZero(timeLeft.seconds)}
                  </div>
                </div>
                <button 
                  onClick={handleClaimOffer}
                  className="w-full sm:w-auto bg-brand-pink-50 text-brand-pink-900 px-8 py-3 rounded-lg font-semibold tracking-wide hover:bg-white transition-colors flex items-center justify-center gap-2 group"
                >
                  Claim Offer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Secondary Offer */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-brand-pink-100 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-brand-pink-100 text-brand-pink-900 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                Bundle Deal
              </span>
              <h3 className="text-2xl font-serif text-brand-pink-900 mb-3">Buy 2, Get 1 Free</h3>
              <p className="text-brand-pink-900/70 mb-6">
                Mix and match any of our ready-to-wear solid color sets. Perfect for building your collection.
              </p>
            </div>
            
            <button 
              onClick={handleClaimOffer}
              className="w-full bg-brand-pink-900 text-brand-pink-50 px-6 py-3 rounded-lg font-medium hover:bg-brand-pink-800 transition-colors flex items-center justify-center gap-2"
            >
              Shop Bundle
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
