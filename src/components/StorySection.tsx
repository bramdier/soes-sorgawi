import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section 
      id="story" 
      className="py-12 px-6 md:px-12 flex flex-col items-center text-center bg-white rounded-3xl shadow-soft border border-[#e4e2de]/60 my-6 transition-all duration-300 hover:shadow-soft-lg"
    >
      {/* Category Label */}
      <span className="text-xs md:text-sm font-semibold text-[#0c6780] tracking-widest uppercase mb-3 flex items-center gap-1.5">
        <Sparkles className="w-4 h-4" />
        <span>Our Heavenly Story</span>
      </span>

      {/* Headline */}
      <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b1c1a] mb-6 max-w-2xl leading-tight">
        Crafting Happiness Since 2019
      </h2>

      {/* Halal Badge */}
      <div className="flex items-center justify-center gap-2 mb-6 bg-[#fed65b]/30 px-5 py-2 rounded-full border border-[#fed65b]">
        <ShieldCheck className="w-5 h-5 text-[#735c00] fill-[#fed65b]" />
        <span className="text-xs md:text-sm font-semibold text-[#745c00] tracking-wide">
          Halal Certified (Renewed 2021)
        </span>
      </div>

      {/* Story Narrative Body */}
      <p className="font-jakarta text-base md:text-lg text-[#3f484c] max-w-3xl leading-relaxed mb-8">
        With over 8 years of dedicated bakery experience, Soes Sorgawi was born out of a passion for elevating a classic treat. We believe that a simple pastry can deliver immense happiness. Every batch is meticulously prepared using premium ingredients, ensuring that each bite feels like a little piece of heaven. Our commitment is to pure, unadulterated deliciousness.
      </p>

      {/* Quality Guarantees */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl pt-6 border-t border-[#f5f3ef]">
        <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-[#fbf9f5]">
          <Award className="w-6 h-6 text-[#0c6780]" />
          <h4 className="font-playfair font-semibold text-[#1b1c1a] text-sm">Artisanal Craft</h4>
          <p className="text-xs text-[#3f484c]">Handcrafted choux pastry with golden crisp crusts.</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-[#fbf9f5]">
          <img src="/img/halal_1.png" alt="Halal Indonesia" className="h-12 w-auto object-contain" />
          <h4 className="font-playfair font-semibold text-[#1b1c1a] text-sm">100% Halal Verified</h4>
          <p className="text-xs text-[#3f484c]">Certified clean, ethically sourced ingredients.</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-[#fbf9f5]">
          <HeartHandshake className="w-6 h-6 text-[#0c6780]" />
          <h4 className="font-playfair font-semibold text-[#1b1c1a] text-sm">Zero Preservatives</h4>
          <p className="text-xs text-[#3f484c]">Baked fresh to order for ultimate lightness.</p>
        </div>
      </div>
    </section>
  );
};
