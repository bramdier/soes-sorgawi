import React from 'react';
import { WHATSAPP_DEFAULT_NUMBER } from '../data/soesData';

interface FooterProps {
  onOpenLocationModal: () => void;
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLocationModal,
  onOpenOrderModal
}) => {
  return (
    <footer className="bg-[#eae8e4] w-full pt-12 pb-12 mt-16 border-t border-[#e4e2de]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div className="flex flex-col gap-4">
          <span className="font-playfair text-2xl md:text-3xl font-bold text-[#0c6780]">
            Soes Sorgawi
          </span>
          <p className="font-jakarta text-xs text-[#3f484c] leading-relaxed max-w-xs">
            © 2026 Soes Sorgawi. Artisanal Pâtisserie. Halal Certified.
          </p>
          <p className="font-jakarta text-xs text-[#725a42]">
            Baked fresh with love and artisanal craftsmanship daily.
          </p>
        </div>

        {/* Connect Links */}
        <div className="flex flex-col gap-2">
          <span className="font-jakarta font-semibold text-sm text-[#725a42] mb-2 tracking-wide uppercase">
            Connect
          </span>
          <a
            className="font-jakarta text-sm text-[#3f484c] hover:text-[#0c6780] transition-colors w-fit"
            href="https://www.instagram.com/soessurgawi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="font-jakarta text-sm text-[#3f484c] hover:text-[#0c6780] transition-colors w-fit"
            href={`https://wa.me/${WHATSAPP_DEFAULT_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <button
            onClick={onOpenOrderModal}
            className="font-jakarta text-sm text-[#3f484c] hover:text-[#0c6780] transition-colors w-fit text-left cursor-pointer"
          >
            GoFood, GrabFood & ShopeeFood
          </button>
        </div>

        {/* Information Links */}
        <div className="flex flex-col gap-2">
          <span className="font-jakarta font-semibold text-sm text-[#725a42] mb-2 tracking-wide uppercase">
            Information
          </span>
          <button
            onClick={onOpenLocationModal}
            className="font-jakarta text-sm text-[#3f484c] hover:text-[#0c6780] transition-colors text-left w-fit cursor-pointer"
          >
            Telephone
          </button>
          <button
            onClick={onOpenLocationModal}
            className="font-jakarta text-sm text-[#3f484c] hover:text-[#0c6780] transition-colors text-left w-fit cursor-pointer"
          >
            Location
          </button>
          <a
            href="#story"
            className="font-jakarta text-sm text-[#3f484c] hover:text-[#0c6780] transition-colors w-fit"
          >
            Halal Certificate Info
          </a>
        </div>
      </div>
    </footer>
  );
};
