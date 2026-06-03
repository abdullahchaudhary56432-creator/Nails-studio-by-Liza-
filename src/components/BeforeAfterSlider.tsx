import React, { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  // High-quality Unsplash images representing "Before" and "After" concepts
  const beforeImage = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop"; // Plain/unpolished hands
  const afterImage = "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop"; // Polished nails

  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Transformations</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-pink-900">Before &amp; After</h2>
          <div className="w-16 h-px bg-brand-pink-300 mx-auto mt-6"></div>
          <p className="text-brand-pink-900/60 font-light mt-6 max-w-lg mx-auto">
            Drag the slider to see the magic. From a natural canvas to an artistic masterpiece.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none border-4 border-white"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onTouchMove={handleTouchMove}
          onTouchEnd={stopDragging}
          onMouseDown={(e) => handleInteractionStart(e.clientX)}
          onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
        >
          {/* Base Layer (Before) */}
          <div 
            className="absolute inset-0 bg-cover bg-center pointer-events-none filter sepia-[0.3]"
            style={{ backgroundImage: `url(${beforeImage})` }}
          >
            <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-black/40 backdrop-blur-md text-white px-6 py-3 rounded-full text-xs font-medium tracking-[0.2em] uppercase shadow-sm">
              Before
            </div>
          </div>

          {/* Top Layer (After) */}
          <div 
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ 
              backgroundImage: `url(${afterImage})`,
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}
          >
            <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-brand-pink-500/80 backdrop-blur-md text-white px-6 py-3 rounded-full text-xs font-medium tracking-[0.2em] uppercase shadow-sm">
              After
            </div>
          </div>

          {/* Slider line & handle */}
          <div 
            className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)] pointer-events-none touch-none"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-2xl pointer-events-auto">
              <ArrowLeftRight className="w-5 h-5 md:w-6 md:h-6 text-brand-pink-600" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
