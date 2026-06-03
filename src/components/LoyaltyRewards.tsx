import React from 'react';
import { motion } from 'motion/react';
import { Star, Gift, Crown } from 'lucide-react';

export const LoyaltyRewards = () => {
  return (
    <section className="py-24 bg-brand-offwhite border-t border-brand-pink-100">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Liza VIP Club</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-pink-900">Loyalty Rewards</h2>
          <div className="w-16 h-px bg-brand-pink-300 mx-auto mt-6"></div>
          <p className="text-brand-pink-900/60 font-light mt-6 max-w-lg mx-auto">
            We love our regular clients! Earn stamps with every visit and unlock exclusive discounts and complimentary services.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Card Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-brand-pink-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="text-center mb-8 relative z-10">
                <Crown className="w-8 h-8 text-brand-pink-400 mx-auto mb-3" />
                <h3 className="font-serif text-2xl text-brand-pink-900">VIP Punch Card</h3>
                <p className="text-xs text-brand-pink-500 uppercase tracking-widest mt-1">1 Visit = 1 Stamp</p>
              </div>

              <div className="grid grid-cols-5 gap-3 md:gap-4 relative z-10">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-full border-2 border-brand-pink-200 flex flex-col items-center justify-center relative bg-brand-pink-50/30">
                    <span className="text-brand-pink-300 font-serif text-xl">{i + 1}</span>
                    {i === 4 && (
                      <div className="absolute inset-0 bg-brand-pink-100/80 rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-bold text-brand-pink-900 tracking-tighter leading-tight text-center">-15%</span>
                      </div>
                    )}
                    {i === 9 && (
                      <div className="absolute inset-0 bg-brand-pink-200 rounded-full flex flex-col items-center justify-center">
                        <Gift className="w-5 h-5 text-brand-pink-900 mb-0.5" />
                        <span className="text-[9px] font-bold text-brand-pink-900 tracking-tighter">FREE</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-pink-100 flex items-center justify-center">
                <Star className="w-5 h-5 text-brand-pink-600" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-brand-pink-900 mb-2">Earn as you visit</h4>
                <p className="text-brand-pink-900/70 font-light text-sm leading-relaxed">
                  Receive one stamp on your digital or physical loyalty card for every service over $30. Make sure to present your card at checkout!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-pink-100 flex items-center justify-center">
                <Crown className="w-5 h-5 text-brand-pink-600" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-brand-pink-900 mb-2">Milestone Rewards</h4>
                <p className="text-brand-pink-900/70 font-light text-sm leading-relaxed">
                  Reach 5 stamps to unlock a 15% discount on your next appointment. Complete the card with 10 stamps for a totally complimentary Gel Manicure.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-pink-100 flex items-center justify-center">
                <Gift className="w-5 h-5 text-brand-pink-600" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-brand-pink-900 mb-2">Birthday Perks</h4>
                <p className="text-brand-pink-900/70 font-light text-sm leading-relaxed">
                  Join our VIP list and receive a special treat during your birthday month, including priority booking and a surprise upgrade on any service.
                </p>
              </div>
            </div>
            
            <a 
              href="#book"
              className="inline-block mt-4 text-brand-pink-600 uppercase tracking-widest text-sm font-medium hover:text-brand-pink-800 transition-colors underline decoration-brand-pink-300 underline-offset-4"
            >
              Start Earning Today →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
