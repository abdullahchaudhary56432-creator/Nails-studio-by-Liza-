/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { BookingModal } from './components/BookingModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LimitedTimeOffers } from './components/LimitedTimeOffers';
import { FeaturesSection } from './components/FeaturesSection';
import { AdSection } from './components/AdSection';
import { ShapeGuideSection } from './components/ShapeGuideSection';
import { StylesSection } from './components/StylesSection';
import { StyleQuiz } from './components/StyleQuiz';
import { PriceCalculator } from './components/PriceCalculator';
import { ColorPalette } from './components/ColorPalette';
import { PricingSection } from './components/PricingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { NailCareTips } from './components/NailCareTips';
import { LoyaltyRewards } from './components/LoyaltyRewards';
import { VirtualTryOn } from './components/VirtualTryOn';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PhotoGallery } from './components/PhotoGallery';
import { InstagramFeed } from './components/InstagramFeed';
import { GiftCardsSection } from './components/GiftCardsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { BookingCTA } from './components/BookingCTA';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FadeInSection } from './components/FadeInSection';
import { AudioProvider, useAudio } from './contexts/AudioContext';

function AppContent() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isOrderTrackingModalOpen, setIsOrderTrackingModalOpen] = useState(false);
  const { playClick, playPop } = useAudio();

  const handleBookClick = () => {
    playPop();
    setIsBookingModalOpen(true);
  };

  const handleTrackOrderClick = () => {
    playClick();
    setIsOrderTrackingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-offwhite text-gray-800 font-sans selection:bg-brand-pink-200 selection:text-brand-pink-900">
      <AnnouncementBar />
      <Header 
        onBookClick={handleBookClick} 
        onTrackOrderClick={handleTrackOrderClick} 
      />
      <Hero />
      <FadeInSection><LimitedTimeOffers onBookClick={handleBookClick} /></FadeInSection>
      <FadeInSection><FeaturesSection /></FadeInSection>
      <FadeInSection><AdSection /></FadeInSection>
      <FadeInSection><ShapeGuideSection /></FadeInSection>
      <FadeInSection><StylesSection /></FadeInSection>
      <FadeInSection><StyleQuiz onBookClick={handleBookClick} /></FadeInSection>
      <FadeInSection><ColorPalette /></FadeInSection>
      <FadeInSection><PriceCalculator /></FadeInSection>
      <FadeInSection><PricingSection /></FadeInSection>
      <FadeInSection><VirtualTryOn /></FadeInSection>
      <FadeInSection><LoyaltyRewards /></FadeInSection>
      <FadeInSection><BeforeAfterSlider /></FadeInSection>
      <FadeInSection><ReviewsSection /></FadeInSection>
      <FadeInSection><NailCareTips /></FadeInSection>
      <FadeInSection><FAQSection /></FadeInSection>
      <FadeInSection><PhotoGallery /></FadeInSection>
      <FadeInSection><InstagramFeed /></FadeInSection>
      <FadeInSection><GiftCardsSection /></FadeInSection>
      <FadeInSection><NewsletterSection /></FadeInSection>
      <FadeInSection><BookingCTA onBookClick={handleBookClick} /></FadeInSection>
      <Footer />
      <WhatsAppWidget />
      <BackToTop />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <OrderTrackingModal isOpen={isOrderTrackingModalOpen} onClose={() => setIsOrderTrackingModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}


