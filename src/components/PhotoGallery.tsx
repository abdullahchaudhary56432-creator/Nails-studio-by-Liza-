import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import img1 from '../assets/images/gallery_pink_bow_nails_1780492782869.png';
import img2 from '../assets/images/gallery_red_glitter_nails_1780492815786.png';
import img3 from '../assets/images/gallery_blue_floral_nails_1780492847782.png';
import img4 from '../assets/images/gallery_black_star_nails_1780492873626.png';
import img5 from '../assets/images/pink_black_french_nails_1780480638582.png';
import img6 from '../assets/images/black_silver_swirl_nails_1780480657866.png';
import img7 from '../assets/images/red_pink_glitter_nails_1780480678159.png';
import img8 from '../assets/images/pink_marble_nails_1780312370903.png';
import img9 from '../assets/images/gallery_pink_pearl_french_1780493398722.png';
import img10 from '../assets/images/gallery_pink_gold_floral_1780493435616.png';
import img11 from '../assets/images/gallery_ghost_halloween_1780493476699.png';
import img12 from '../assets/images/gallery_pink_cateye_1780493509585.png';
import img13 from '../assets/images/gallery_blue_bow_nails_1780494328990.png';
import img14 from '../assets/images/gallery_blue_bunny_nails_1780494355547.png';
import img15 from '../assets/images/gallery_peach_star_nails_1780494381133.png';
import img16 from '../assets/images/pink_gold_flower_nails_1780495340987.png';
import img17 from '../assets/images/pink_butterfly_nails_1780495363722.png';
import img18 from '../assets/images/brown_celestial_nails_1780495383517.png';
import img19 from '../assets/images/blue_bunny_nails_new_1780495406073.png';
import img20 from '../assets/images/short_pink_jelly_nails_1780495423920.png';
import img21 from '../assets/images/pink_gold_lines_nails_1780832959245.png';
import img22 from '../assets/images/yellow_french_flower_nails_1780832979899.png';
import img23 from '../assets/images/rose_gold_toe_nails_1780832998711.png';
import img24 from '../assets/images/white_french_floral_nails_1780833017174.png';
import img25 from '../assets/images/cherry_french_nails_1780833035763.png';
import img26 from '../assets/images/black_french_heart_nails_1780833052973.png';
import img27 from '../assets/images/matte_mauve_gold_nails_1780833073081.png';
import img28 from '../assets/images/pearl_butterfly_nails_1780833095401.png';
import img29 from '../assets/images/silver_swirl_french_nails_1780833128241.png';
import img30 from '../assets/images/sage_nude_geometric_nails_1780833146966.png';
import img31 from '../assets/images/black_vtip_butterfly_nails_1780833166822.png';
import img32 from '../assets/images/rose_glitter_ombre_nails_1780833184535.png';
import img33 from '../assets/images/holo_glitter_ombre_nails_1780833206015.png';
import img34 from '../assets/images/brown_glitter_ombre_nails_1780833225221.png';
import img35 from '../assets/images/red_vtip_bow_nails_1780833243735.png';
import img36 from '../assets/images/burgundy_matte_gold_nails_1780833262498.png';
import img37 from '../assets/images/dusty_rose_glitter_nails_1780833296188.png';
import img38 from '../assets/images/pink_flower_glitter_nails_1780833313231.png';
import img39 from '../assets/images/brown_jelly_glitter_nails_1780833333985.png';
import img40 from '../assets/images/cat_eye_pearl_heart_nails_1780833354661.png';
import img41 from '../assets/images/black_branch_flower_nails_1780833731602.png';
import img42 from '../assets/images/nude_black_floral_vine_1780833749833.png';
import img43 from '../assets/images/black_white_flower_dot_1780833768621.png';
import img44 from '../assets/images/burgundy_purple_flower_1780833792370.png';
import img45 from '../assets/images/black_white_ombre_silver_1780833810075.png';
import img46 from '../assets/images/brown_plaid_nails_1780833826894.png';
import img47 from '../assets/images/blue_cateye_bow_1780833845660.png';
import img48 from '../assets/images/red_gold_leaf_nails_1780833867550.png';
import img49 from '../assets/images/burgundy_french_lines_1780833902624.png';
import img50 from '../assets/images/yellow_french_3d_flower_1780833921056.png';
import img51 from '../assets/images/dusty_rose_black_lines_1780833941966.png';
import img52 from '../assets/images/red_heart_stems_nails_1780833697770.png';

const photos = [
  { id: 1, src: img1, alt: 'Pink Bow Nails' },
  { id: 2, src: img2, alt: 'Red Glitter Nails' },
  { id: 3, src: img3, alt: 'Blue Floral Nails' },
  { id: 4, src: img4, alt: 'Black Star Nails' },
  { id: 5, src: img5, alt: 'Pink Black French Nails' },
  { id: 6, src: img6, alt: 'Black Silver Swirl Nails' },
  { id: 7, src: img7, alt: 'Red Pink Glitter Nails' },
  { id: 8, src: img8, alt: 'Pink Marble Nails' },
  { id: 9, src: img9, alt: 'Pink Pearl French Nails' },
  { id: 10, src: img10, alt: 'Pink Gold Floral Nails' },
  { id: 11, src: img11, alt: 'Ghost Halloween Nails' },
  { id: 12, src: img12, alt: 'Pink Cat Eye Nails' },
  { id: 13, src: img13, alt: 'Blue Bow Nails' },
  { id: 14, src: img14, alt: 'Blue Bunny Nails' },
  { id: 15, src: img15, alt: 'Peach Star Nails' },
  { id: 16, src: img16, alt: 'Pink Gold Flower Nails' },
  { id: 17, src: img17, alt: 'Pink Butterfly Nails' },
  { id: 18, src: img18, alt: 'Brown Celestial Nails' },
  { id: 19, src: img19, alt: 'Blue Bunny Nails' },
  { id: 20, src: img20, alt: 'Short Pink Jelly Nails' },
  { id: 21, src: img21, alt: 'Pink Gold Lines' },
  { id: 22, src: img22, alt: 'Yellow French Flower' },
  { id: 23, src: img23, alt: 'Rose Gold Toenails' },
  { id: 24, src: img24, alt: 'White French Floral' },
  { id: 25, src: img25, alt: 'Cherry French Nails' },
  { id: 26, src: img26, alt: 'Black French Heart' },
  { id: 27, src: img27, alt: 'Matte Mauve Gold' },
  { id: 28, src: img28, alt: 'Pearl Butterfly' },
  { id: 29, src: img29, alt: 'Silver Swirl French' },
  { id: 30, src: img30, alt: 'Sage Nude Geometric' },
  { id: 31, src: img31, alt: 'Black V-tip Butterfly' },
  { id: 32, src: img32, alt: 'Rose Glitter Ombre' },
  { id: 33, src: img33, alt: 'Holo Glitter Ombre' },
  { id: 34, src: img34, alt: 'Brown Glitter Ombre' },
  { id: 35, src: img35, alt: 'Red V-tip Bow' },
  { id: 36, src: img36, alt: 'Burgundy Matte Gold' },
  { id: 37, src: img37, alt: 'Dusty Rose Glitter' },
  { id: 38, src: img38, alt: 'Pink Flower Glitter' },
  { id: 39, src: img39, alt: 'Brown Jelly Glitter' },
  { id: 40, src: img40, alt: 'Cat Eye Pearl Heart' },
  { id: 41, src: img41, alt: 'Black Branch Flower' },
  { id: 42, src: img42, alt: 'Nude Black Floral Vine' },
  { id: 43, src: img43, alt: 'Black White Flower Dot' },
  { id: 44, src: img44, alt: 'Burgundy Purple Flower' },
  { id: 45, src: img45, alt: 'Black White Ombre Silver' },
  { id: 46, src: img46, alt: 'Brown Plaid Nails' },
  { id: 47, src: img47, alt: 'Blue Cateye Bow' },
  { id: 48, src: img48, alt: 'Red Gold Leaf' },
  { id: 49, src: img49, alt: 'Burgundy French Lines' },
  { id: 50, src: img50, alt: 'Yellow French 3D Flower' },
  { id: 51, src: img51, alt: 'Dusty Rose Black Lines' },
  { id: 52, src: img52, alt: 'Red Heart Stems' },
];

export const PhotoGallery = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedPhotoIndex]);

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-brand-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-pink-900">Photo Gallery</h2>
          <p className="mt-4 text-brand-pink-700/80 max-w-2xl mx-auto">
            Explore our extensive collection of beautiful nail designs. Click any picture to view it closely in our picture-in-picture gallery.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-2xl aspect-square bg-brand-pink-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedPhotoIndex(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-pink-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center pointer-events-none">
                <Maximize2 className="text-white w-8 h-8 mb-2 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                <span className="text-white font-medium text-sm drop-shadow-md px-4 text-center">{photo.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <div className="absolute top-4 right-4 z-50">
              <button 
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close gallery"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110 z-50 hidden md:flex"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110 z-50 hidden md:flex"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div 
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedPhotoIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                src={photos[selectedPhotoIndex].src}
                alt={photos[selectedPhotoIndex].alt}
                loading="eager"
                decoding="async"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-[-2rem] text-white/80 font-medium text-lg flex items-center justify-center w-full"
              >
                <span className="bg-black/50 px-4 py-1 rounded-full backdrop-blur-md">
                  {photos[selectedPhotoIndex].alt} &bull; {selectedPhotoIndex + 1} / {photos.length}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
