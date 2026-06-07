import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Heart, Package, Volume2, VolumeX } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useAudio } from '../contexts/AudioContext';

import { PushNotificationToggle } from './PushNotificationToggle';

export const Header = ({ onBookClick, onTrackOrderClick }: { onBookClick: () => void, onTrackOrderClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'FR'>('EN');
  const { isMuted, toggleMute, playClick } = useAudio();

  const handleWishlistClick = () => {
    playClick();
  };

  const handleLangToggle = () => {
    playClick();
    setLang(lang === 'EN' ? 'FR' : 'EN');
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-pink-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-offwhite/90 backdrop-blur-md shadow-sm py-4' : 'bg-brand-offwhite py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-serif tracking-widest text-brand-pink-900">NAILS STUDIO BY LIZA 💗</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-brand-pink-900/70 items-center">
          <a href="#services" className="hover:text-brand-pink-600 transition-colors">{lang === 'EN' ? 'Services' : 'Services'}</a>
          <a href="#pricing" className="hover:text-brand-pink-600 transition-colors">{lang === 'EN' ? 'Pricing' : 'Tarifs'}</a>
          <a href="#reviews" className="hover:text-brand-pink-600 transition-colors">{lang === 'EN' ? 'Reviews' : 'Avis'}</a>
          <a href="#book" className="hover:text-brand-pink-600 transition-colors">{lang === 'EN' ? 'Contact' : 'Contact'}</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search styles..." 
              className="bg-transparent border-b border-brand-pink-200 text-sm py-1 px-2 pr-8 focus:outline-none focus:border-brand-pink-600 text-brand-pink-900 placeholder:text-brand-pink-300 w-32 xl:w-48 transition-all focus:w-48 xl:focus:w-64"
            />
            <Search className="w-4 h-4 text-brand-pink-400 absolute right-1 top-2" />
          </div>
          <button onClick={toggleMute} className="text-brand-pink-900 hover:text-brand-pink-600 transition-colors mr-2" aria-label="Toggle Sound" title="Toggle Sound">
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <button onClick={handleWishlistClick} className="text-brand-pink-900 hover:text-brand-pink-600 transition-colors mr-2" aria-label="Wishlist">
            <Heart className="w-5 h-5" />
          </button>
          <button onClick={onTrackOrderClick} className="text-brand-pink-900 hover:text-brand-pink-600 transition-colors mr-2" aria-label="Track Order" title="Track Order">
            <Package className="w-5 h-5" />
          </button>
          <div className="mr-2">
            <PushNotificationToggle />
          </div>
          <button 
            onClick={handleLangToggle}
            className="text-xs font-semibold tracking-widest text-brand-pink-900 border border-brand-pink-200 px-2 py-1 rounded-sm hover:bg-brand-pink-100 transition-colors"
          >
            {lang}
          </button>
          <button 
            onClick={onBookClick} 
            className="bg-brand-pink-100 text-brand-pink-900 px-6 py-2 rounded-none hover:bg-brand-pink-200 transition-colors text-sm uppercase tracking-widest border border-brand-pink-200"
          >
            {lang === 'EN' ? 'Book Appointment' : 'Prendre Rendez-vous'}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMute} className="text-brand-pink-900 hover:text-brand-pink-600 transition-colors" aria-label="Toggle Sound">
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <button onClick={handleWishlistClick} className="text-brand-pink-900 hover:text-brand-pink-600 transition-colors" aria-label="Wishlist">
            <Heart className="w-5 h-5" />
          </button>
          <button onClick={onTrackOrderClick} className="text-brand-pink-900 hover:text-brand-pink-600 transition-colors" aria-label="Track Order">
            <Package className="w-5 h-5" />
          </button>
          <PushNotificationToggle />
          {/* Mobile menu button */}
          <button className="text-brand-pink-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-offwhite py-4 px-4 shadow-lg flex flex-col space-y-4 text-center border-t border-brand-pink-100"
        >
          <a href="#services" onClick={() => { playClick(); setMobileMenuOpen(false); }} className="text-brand-pink-900 tracking-wider">{lang === 'EN' ? 'SERVICES' : 'SERVICES'}</a>
          <a href="#pricing" onClick={() => { playClick(); setMobileMenuOpen(false); }} className="text-brand-pink-900 tracking-wider">{lang === 'EN' ? 'PRICING' : 'TARIFS'}</a>
          <a href="#reviews" onClick={() => { playClick(); setMobileMenuOpen(false); }} className="text-brand-pink-900 tracking-wider">{lang === 'EN' ? 'REVIEWS' : 'AVIS'}</a>
          <button 
            onClick={handleLangToggle}
            className="text-brand-pink-900 tracking-wider font-semibold"
          >
            {lang === 'EN' ? 'FRANÇAIS' : 'ENGLISH'}
          </button>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }} 
            className="bg-brand-pink-100 text-brand-pink-900 px-4 py-3 border border-brand-pink-200 tracking-wider w-full"
          >
            {lang === 'EN' ? 'BOOK APPOINTMENT' : 'PRENDRE RENDEZ-VOUS'}
          </button>
        </motion.div>
      )}
    </header>
    </>
  );
};
