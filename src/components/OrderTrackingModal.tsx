import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search } from 'lucide-react';

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackingModal = ({ isOpen, onClose }: OrderTrackingModalProps) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setResult('Order #' + orderNumber + ' is currently being processed and will be shipped soon.');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-pink-900/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-brand-offwhite rounded-2xl shadow-xl z-50 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-brand-pink-900/50 hover:text-brand-pink-900 hover:bg-brand-pink-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif text-brand-pink-900 mb-2">Track Your Order</h3>
                <p className="text-brand-pink-900/70">Enter your order details below to check the status.</p>
              </div>

              {!result ? (
                <form onSubmit={handleTrack} className="space-y-4">
                  <div>
                    <label htmlFor="orderNumber" className="block text-sm font-medium text-brand-pink-900 mb-1">
                      Order Number
                    </label>
                    <input
                      type="text"
                      id="orderNumber"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      placeholder="e.g. LIZA-12345"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-brand-pink-200 focus:outline-none focus:ring-2 focus:ring-brand-pink-400 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-pink-900 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-brand-pink-200 focus:outline-none focus:ring-2 focus:ring-brand-pink-400 focus:border-transparent bg-white"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="w-full bg-brand-pink-900 text-brand-pink-50 py-4 rounded-lg font-medium tracking-wide hover:bg-brand-pink-800 transition-colors flex items-center justify-center gap-2 mt-6 disabled:opacity-70"
                  >
                    {isSearching ? (
                      <div className="w-5 h-5 border-2 border-brand-pink-50/30 border-t-brand-pink-50 rounded-full animate-spin" />
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        Track Order
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-brand-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-pink-200">
                    <Search className="w-8 h-8 text-brand-pink-600" />
                  </div>
                  <h4 className="text-lg font-medium text-brand-pink-900 mb-2">Status Update</h4>
                  <p className="text-brand-pink-900/70 mb-6">{result}</p>
                  <button
                    onClick={() => setResult(null)}
                    className="text-brand-pink-600 hover:text-brand-pink-800 text-sm font-medium transition-colors"
                  >
                    Track another order
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
