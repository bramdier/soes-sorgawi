import React, { useState } from 'react';
import { ORDER_CATEGORIES, DELIVERY_OUTLETS, WHATSAPP_DEFAULT_NUMBER } from '../data/soesData';
import { DeliveryPlatform } from '../types';
import { X, ShoppingBag, ExternalLink, MessageSquare, Truck } from 'lucide-react';

const platformButtonClass: Record<DeliveryPlatform, string> = {
  gofood: 'bg-[#87ceeb] text-[#005870] hover:bg-[#72beed]',
  grabfood: 'bg-[#fed65b] text-[#745c00] hover:bg-[#f3ca47]',
  shopeefood: 'bg-[#ff7043] text-white hover:bg-[#f4511e]'
};

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'custom' | 'platforms'>('custom');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(ORDER_CATEGORIES[0].id);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerAddress, setCustomerAddress] = useState<string>('');
  const [orderNotes, setOrderNotes] = useState<string>('');

  const selectedCategory = ORDER_CATEGORIES.find((cat) => cat.id === selectedCategoryId) ?? ORDER_CATEGORIES[0];

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Soes Sorgawi! 🧁 I would like to place an order:\n\n` +
      `• *Category:* ${selectedCategory.label}\n` +
      `• *Detail Order:* ${orderNotes || '—'}\n\n` +
      `*Customer Info:*\n` +
      `• *Name:* ${customerName || 'Customer'}\n` +
      `• *Delivery Address/Pickup:* ${customerAddress || 'For Delivery/Pickup'}\n` +
      `\nPlease confirm availability and payment details. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_DEFAULT_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#fbf9f5] w-full max-w-2xl rounded-3xl shadow-soft-lg border border-[#e4e2de] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-white px-6 py-5 border-b border-[#e4e2de] flex justify-between items-center">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-[#1b1c1a] flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-[#0c6780]" />
              <span>Order Soes Sorgawi</span>
            </h3>
            <p className="text-xs text-[#3f484c]">Fresh baked artisanal cream puffs delivered to your door</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#efeeea] text-[#3f484c] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Ordering Mode Tabs */}
        <div className="flex border-b border-[#e4e2de] bg-[#f5f3ef] px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'custom'
                ? 'bg-[#fbf9f5] text-[#0c6780] border-t-2 border-[#0c6780]'
                : 'text-[#3f484c] hover:text-[#1b1c1a]'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Direct WA Custom Box</span>
          </button>

          <button
            onClick={() => setActiveTab('platforms')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'platforms'
                ? 'bg-[#fbf9f5] text-[#0c6780] border-t-2 border-[#0c6780]'
                : 'text-[#3f484c] hover:text-[#1b1c1a]'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>GoFood, GrabFood & ShopeeFood</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'custom' && (
            <div className="space-y-6">
              {/* Category Selector */}
              <div>
                <label className="text-xs font-bold text-[#1b1c1a] uppercase tracking-wider block mb-2">
                  1. Select Box Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {ORDER_CATEGORIES.map((category) => {
                    const isSelected = selectedCategoryId === category.id;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategoryId(category.id)}
                        className={`p-3 rounded-2xl text-center border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#87ceeb]/20 border-[#0c6780] ring-1 ring-[#0c6780]'
                            : 'bg-white border-[#e4e2de] hover:bg-[#f5f3ef]'
                        }`}
                      >
                        <div className="font-playfair font-bold text-sm text-[#1b1c1a]">{category.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Customer Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#3f484c] block mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-white border border-[#e4e2de] rounded-xl px-3.5 py-2 text-sm text-[#1b1c1a] focus:outline-none focus:border-[#0c6780]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#3f484c] block mb-1">Delivery Address / City</label>
                  <input
                    type="text"
                    placeholder="e.g. Bandung / Jakarta"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full bg-white border border-[#e4e2de] rounded-xl px-3.5 py-2 text-sm text-[#1b1c1a] focus:outline-none focus:border-[#0c6780]"
                  />
                </div>
              </div>

              {/* Detail Order */}
              <div>
                <label className="text-xs font-semibold text-[#3f484c] block mb-1">Detail Order</label>
                <input
                  type="text"
                  placeholder="e.g. 2 box Soes Reguler, vanilla flavor, deliver at 2 PM"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  className="w-full bg-white border border-[#e4e2de] rounded-xl px-3.5 py-2 text-sm text-[#1b1c1a] focus:outline-none focus:border-[#0c6780]"
                />
              </div>
            </div>
          )}

          {activeTab === 'platforms' && (
            <div className="space-y-6 py-2">
              <p className="text-sm text-[#3f484c] text-center max-w-md mx-auto">
                Prefer instant express delivery via ride-hailing food services? Choose your nearest outlet:
              </p>

              <div className="space-y-5">
                {DELIVERY_OUTLETS.map((outlet) => (
                  <div key={outlet.id} className="space-y-2.5">
                    <h3 className="text-xs font-bold text-[#1b1c1a] uppercase tracking-wider">
                      {outlet.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {outlet.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${platformButtonClass[link.platform]} font-bold px-4 py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-soft group text-sm`}
                        >
                          <Truck className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                          <span>{link.title}</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-70 flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        {activeTab === 'custom' && (
          <div className="bg-white px-6 py-4 border-t border-[#e4e2de]">
            <button
              onClick={handleSendWhatsApp}
              className="w-full bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-soft cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Send Order to WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
