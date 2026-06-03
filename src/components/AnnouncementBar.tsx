import React from 'react';
import { motion } from 'motion/react';

export const AnnouncementBar = () => {
  return (
    <div className="bg-brand-pink-900 text-brand-pink-50 py-3 overflow-hidden whitespace-nowrap z-[100] relative flex items-center">
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30
        }}
        className="flex whitespace-nowrap text-xs uppercase tracking-[0.2em] font-semibold w-max"
      >
        <div className="flex px-4 items-center">
          <span className="mx-4">✨ BOOK YOUR APPOINTMENT NOW! ENJOY 10% OFF FOR ALL NEW CLIENTS THIS MONTH</span>
          <span className="mx-4">✨ LUXURY NAIL ART STUDIO BY LIZA</span>
          <span className="mx-4">✨ SPECIAL SEASONAL DESIGNS AVAILABLE</span>
          <span className="mx-4">✨ WALK-INS WELCOME BASED ON AVAILABILITY</span>
        </div>
        <div className="flex px-4 items-center">
          <span className="mx-4">✨ BOOK YOUR APPOINTMENT NOW! ENJOY 10% OFF FOR ALL NEW CLIENTS THIS MONTH</span>
          <span className="mx-4">✨ LUXURY NAIL ART STUDIO BY LIZA</span>
          <span className="mx-4">✨ SPECIAL SEASONAL DESIGNS AVAILABLE</span>
          <span className="mx-4">✨ WALK-INS WELCOME BASED ON AVAILABILITY</span>
        </div>
      </motion.div>
    </div>
  );
};
