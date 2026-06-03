import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-24 bg-brand-offwhite border-t border-brand-pink-100">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-pink-900 rounded-3xl p-10 md:p-16 relative overflow-hidden text-brand-offwhite shadow-xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink-800/50 rounded-full mix-blend-screen filter blur-[60px] opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink-800/50 rounded-full mix-blend-screen filter blur-[60px] opacity-50 -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <span className="text-brand-pink-300 tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-4 block">VIP Access</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Join The Insider List</h2>
            <p className="text-brand-pink-100/80 font-light text-lg mb-10 max-w-lg mx-auto">
              Subscribe to receive exclusive offers, early booking access, and the latest nail trends straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="flex-1 bg-brand-pink-950/50 border border-brand-pink-700/50 rounded-lg px-6 py-4 text-brand-offwhite placeholder:text-brand-pink-200/50 focus:outline-none focus:border-brand-pink-400 transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  disabled={status === 'submitting' || status === 'success'}
                  className="bg-brand-pink-200 text-brand-pink-900 rounded-lg px-8 py-4 font-medium hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : status === 'success' ? (
                    <span>Subscribed!</span>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
