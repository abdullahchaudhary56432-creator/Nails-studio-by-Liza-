import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, CreditCard, Mail } from 'lucide-react';

const AMOUNTS = [2500, 5000, 10000, 15000];

export const GiftCardsSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(AMOUNTS[1]);
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState('');

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi! I'd like to purchase a Digital Gift Card of PKR ${selectedAmount.toLocaleString()} for ${recipientName || 'a friend'}. Message: ${message || 'None'}`;
    window.open(`https://wa.me/923205205319?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  return (
    <section id="gift-cards" className="py-24 bg-brand-pink-900 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink-800 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink-800 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 w-full flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Info */}
        <div className="w-full lg:w-1/2 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-pink-300 tracking-[0.2em] uppercase text-xs font-semibold mb-6 flex items-center gap-2">
              <Gift className="w-4 h-4" /> The Perfect Gift
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-offwhite mb-6 leading-tight">
              Give the Gift of <br className="hidden md:block" /> Beautiful Nails
            </h2>
            <p className="text-brand-pink-100/80 font-light text-lg mb-10 leading-relaxed max-w-lg">
              Treat someone special to a luxury nail experience at Nails Studio by Liza. Choose a customized digital voucher and we'll handle the rest.
            </p>

            <div className="hidden lg:block space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-pink-800 flex items-center justify-center flex-shrink-0 text-brand-pink-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-brand-offwhite font-medium mb-1">Instant Digital Delivery</h4>
                  <p className="text-brand-pink-100/60 text-sm font-light leading-relaxed">The voucher will be sent to the recipient instantly via email or WhatsApp.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-pink-800 flex items-center justify-center flex-shrink-0 text-brand-pink-200">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-brand-offwhite font-medium mb-1">Flexible Usage</h4>
                  <p className="text-brand-pink-100/60 text-sm font-light leading-relaxed">Can be used for any service, including manicures, pedicures, and nail art.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form & Card UI */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-brand-offwhite rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Visual Card Representation */}
            <div className="bg-gradient-to-tr from-brand-pink-200 to-brand-pink-50 rounded-2xl p-6 mb-8 relative overflow-hidden border border-brand-pink-300/50 shadow-inner">
               <div className="absolute top-0 right-0 p-4 opacity-50">
                 <Gift className="w-24 h-24 text-brand-pink-300" strokeWidth={1} />
               </div>
               <div className="relative z-10">
                 <div className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-pink-600 mb-8">Nails Studio by Liza</div>
                 <div className="text-4xl font-serif text-brand-pink-900 mb-2">PKR {selectedAmount.toLocaleString()}</div>
                 <div className="text-sm font-medium text-brand-pink-900/60 uppercase tracking-widest">{recipientName || 'Recipient Name'}</div>
               </div>
            </div>

            {/* Customization Form */}
            <form onSubmit={handlePurchase} className="space-y-6">
              <div>
                <label className="block text-brand-pink-900 font-medium mb-3 text-sm">Select Amount</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {AMOUNTS.map(amount => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelectedAmount(amount)}
                      className={`py-3 rounded-xl text-sm font-medium transition-all ${
                        selectedAmount === amount 
                          ? 'bg-brand-pink-600 text-white shadow-md' 
                          : 'bg-brand-pink-50 text-brand-pink-900 hover:bg-brand-pink-100 border border-brand-pink-100'
                      }`}
                    >
                      PKR {amount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-brand-pink-900 font-medium mb-2 text-sm" htmlFor="recipient">Who is this for?</label>
                <input 
                  type="text" 
                  id="recipient"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Recipient Name"
                  className="w-full bg-white border border-brand-pink-200 rounded-xl px-4 py-3 text-brand-pink-900 focus:outline-none focus:ring-2 focus:ring-brand-pink-400 transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-brand-pink-900 font-medium mb-2 text-sm" htmlFor="message">Add a message (Optional)</label>
                <textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Happy Birthday! Enjoy a pampering session."
                  rows={3}
                  className="w-full bg-white border border-brand-pink-200 rounded-xl px-4 py-3 text-brand-pink-900 focus:outline-none focus:ring-2 focus:ring-brand-pink-400 transition-all placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-pink-900 text-brand-offwhite px-8 py-4 rounded-xl tracking-widest uppercase text-sm font-semibold hover:bg-brand-pink-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Purchase via WhatsApp
              </button>
            </form>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
