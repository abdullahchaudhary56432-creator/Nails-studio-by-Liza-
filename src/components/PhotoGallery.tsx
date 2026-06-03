import React from 'react';
import { motion } from 'motion/react';
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
];

export const PhotoGallery = () => {
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
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-square bg-brand-pink-100"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
