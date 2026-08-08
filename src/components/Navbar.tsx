import React, { useState } from 'react';
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenLocationModal: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrderModal,
  onOpenLocationModal,
  cartCount = 0
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#87ceeb]/80 backdrop-blur-md shadow-soft w-full transition-all duration-300">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-5 md:px-16 py-4">
        {/* Brand Logo / Title */}
        <a 
          href="#" 
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
        >
          <img
            src="/img/logo_1.png"
            alt="Soes Surgawi — Taste Like Heaven"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-semibold text-[#3f484c] hover:text-[#0c6780] transition-colors cursor-pointer tracking-wide"
            href="#story"
          >
            Our Story
          </a>
          <a
            className="text-sm font-semibold text-[#3f484c] hover:text-[#0c6780] transition-colors cursor-pointer tracking-wide"
            href="#menu"
          >
            Menu
          </a>
          <button
            onClick={onOpenLocationModal}
            className="text-sm font-semibold text-[#3f484c] hover:text-[#0c6780] transition-colors cursor-pointer tracking-wide"
          >
            Locations
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenOrderModal}
            className="relative bg-white text-[#005870] font-semibold text-sm px-6 py-3 rounded-full hover:scale-102 transition-all duration-200 shadow-soft flex items-center gap-2 cursor-pointer hover:bg-[#f0fafa]"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Now</span>
            {cartCount > 0 && (
              <span className="ml-1 bg-[#005870] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1b1c1a] hover:bg-[#efeeea] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#87ceeb] border-b border-[#72beed] px-6 py-6 flex flex-col gap-4 shadow-soft">
          <a
            onClick={() => setMobileMenuOpen(false)}
            href="#story"
            className="text-base font-semibold text-[#1b1c1a] hover:text-[#0c6780]"
          >
            Our Story
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            href="#menu"
            className="text-base font-semibold text-[#1b1c1a] hover:text-[#0c6780]"
          >
            Menu
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenLocationModal();
            }}
            className="text-left text-base font-semibold text-[#1b1c1a] hover:text-[#0c6780]"
          >
            Store Locations & Hours
          </button>
        </div>
      )}
    </nav>
  );
};
