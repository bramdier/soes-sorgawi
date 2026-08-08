import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { OrderModal } from './components/OrderModal';
import { LocationModal } from './components/LocationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1b1c1a] font-jakarta">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
      />

      {/* Full-bleed Hero */}
      <Hero />

      {/* Main Page Container */}
      <main className="max-w-[1200px] w-full mx-auto px-5 md:px-16 flex flex-col gap-12 py-6 flex-grow">
        {/* Story Section */}
        <StorySection />

        <MenuSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* Interactive Modals */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
    </div>
  );
}
