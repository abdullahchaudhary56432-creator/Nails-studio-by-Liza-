import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-brand-pink-900 text-brand-pink-50 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-brand-offwhite mb-6">NAILS STUDIO BY LIZA 💗</h2>
            <p className="text-brand-pink-200/80 font-light max-w-sm mb-8 leading-relaxed">
              Elevating the standard of nail care. We combine luxury products, expert techniques, and a serene environment to provide an unmatched salon experience.
            </p>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-6 text-brand-pink-200">Contact</h3>
            <ul className="space-y-4 font-light text-brand-pink-50/80">
              <li>123 Beauty Blvd<br/>Faisalabad, Pakistan</li>
              <li className="flex items-center space-x-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
                <span>+92 320 5205319</span>
              </li>
              <li>Nailsstudiobylizaliza@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-6 text-brand-pink-200">Hours</h3>
            <ul className="space-y-4 font-light text-brand-pink-50/80">
              <li className="flex justify-between"><span>Mon-Fri</span> <span>10am - 8pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>11am - 7pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-pink-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-light text-brand-pink-200/60 gap-4">
          <p>&copy; {new Date().getFullYear()} Nails Studio By Liza. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <a href="https://www.instagram.com/nailsstudiobyliza?igsh=dThid2dpcjE1Mnh4" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:text-brand-offwhite transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@faisalabadnailtech" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:text-brand-offwhite transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              <span>TikTok</span>
            </a>
            <a href="https://www.facebook.com/share/1Cu4VAPzJj/" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:text-brand-offwhite transition-colors">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
