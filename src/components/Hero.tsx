import React from 'react';
import { HERO_IMAGE } from '../data/soesData';
import { ImageCarousel } from './ImageCarousel';

export const Hero: React.FC = () => {
  return (
    <section className="w-full flex flex-col">
      {/* Responsive hero banner — full image visible at all widths */}
      <div className="w-full bg-[#e8d8dc]">
        <img
          src={HERO_IMAGE}
          alt="Soes Surgawi birthday promo — free vanilla soes box on your special day"
          className="block w-full h-auto max-w-full"
          width={1376}
          height={768}
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Copy below the image */}
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-16 py-12 md:py-16 flex flex-col gap-4 items-center text-center">
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-[#1b1c1a] leading-tight tracking-[0.05em] max-w-lg">
          Redefining Soes
        </h1>
        <p className="font-jakarta text-lg text-[#3f484c] max-w-md leading-relaxed">
          Traditional delicacy amped up for pure deliciousness. Baked fresh with artisanal craftsmanship.
        </p>
      </div>

      <ImageCarousel />
    </section>
  );
};
