import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/soesData';
import { MenuCategory } from '../types';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MENU_CATEGORIES[0]);

  return (
    <section
      id="menu"
      className="py-12 bg-[#f5f3ef] rounded-3xl p-6 sm:p-10 border border-[#e4e2de] shadow-soft my-6"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold text-[#0c6780] uppercase tracking-widest flex items-center justify-center gap-1.5 mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Official Menu</span>
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1b1c1a]">
          Our Price List
        </h2>
        <p className="font-jakarta text-sm sm:text-base text-[#3f484c] mt-2">
          Taste Like Heaven — official menu &amp; pricing
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {MENU_CATEGORIES.map((category) => {
          const isActive = activeCategory.id === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                isActive
                  ? 'bg-[#0c6780] text-white border-[#0c6780] shadow-soft scale-105'
                  : 'bg-white text-[#1b1c1a] border-[#bfc8cd]/50 hover:bg-[#eae8e4]'
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-soft border border-[#e4e2de] max-w-[420px] mx-auto">
        <img
          key={activeCategory.id}
          src={activeCategory.image}
          alt={activeCategory.alt}
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>
    </section>
  );
};
