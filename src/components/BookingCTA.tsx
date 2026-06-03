import React from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

export const BookingCTA = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section id="book" className="py-24 relative bg-brand-pink-900 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80" 
          alt="Spa background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-brand-pink-900/90 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 px-4 max-w-4xl mx-auto w-full text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-pink-200 tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-6 block"
        >
          Your Time to Shine
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-offwhite mb-6 leading-tight"
        >
          Ready to Elevate <br className="hidden md:block" /> Your Look?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-pink-100/80 font-light text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Step into serenity and let our experts craft the perfect nails for you. 
          Choose your favorite nail technician and select a comfortable time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button 
            onClick={onBookClick}
            className="flex items-center justify-center bg-brand-offwhite text-brand-pink-900 px-10 py-5 uppercase tracking-[0.2em] text-sm font-medium hover:bg-brand-pink-100 transition-all duration-300 w-full sm:w-auto shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-xl"
          >
            <CalendarIcon className="w-5 h-5 mr-3" />
            Book Appointment Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};
