import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import img1 from '../assets/images/pink_black_french_nails_1780480638582.png';
import img2 from '../assets/images/black_silver_swirl_nails_1780480657866.png';
import img3 from '../assets/images/red_pink_glitter_nails_1780480678159.png';

const mockPosts = [
  {
    id: 1,
    image: img1,
    likes: 124,
    comments: 12,
  },
  {
    id: 2,
    image: img2,
    likes: 89,
    comments: 5,
  },
  {
    id: 3,
    image: img3,
    likes: 256,
    comments: 24,
  }
];

export const InstagramFeed = () => {
  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Instagram className="w-6 h-6 text-brand-pink-600" />
            <span className="text-brand-pink-600 tracking-[0.2em] uppercase text-xs font-semibold">Follow Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-pink-900 mb-8">@nailsstudiobyliza</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {mockPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-square bg-brand-pink-50"
            >
              <img 
                src={post.image} 
                alt="Nails Studio by Liza" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-brand-pink-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center text-white font-medium gap-2">
                  <Heart className="w-5 h-5 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center text-white font-medium gap-2">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
