import React from 'react';
import { STORE_LOCATIONS } from '../data/soesData';
import { X, MapPin, Phone, Clock, ExternalLink, MessageCircle } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#fbf9f5] w-full max-w-xl rounded-3xl shadow-soft-lg border border-[#e4e2de] overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-white px-6 py-5 border-b border-[#e4e2de] flex justify-between items-center">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-[#1b1c1a] flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#0c6780]" />
              <span>Locations & Contact</span>
            </h3>
            <p className="text-xs text-[#3f484c]">Visit our boutiques or reach our customer care line</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#efeeea] text-[#3f484c] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-6">
          {STORE_LOCATIONS.map((loc) => (
            <div key={loc.id} className="bg-white rounded-2xl p-5 border border-[#e4e2de] shadow-soft space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-playfair font-bold text-lg text-[#1b1c1a]">{loc.name}</h4>
                  {loc.isMainBranch && (
                    <span className="inline-block bg-[#87ceeb]/30 text-[#005870] text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-1">
                      Flagship Kitchen & Store
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-[#3f484c]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0c6780] flex-shrink-0 mt-0.5" />
                  <span>{loc.address}, {loc.city}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0c6780] flex-shrink-0" />
                  <span>{loc.phone}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0c6780] flex-shrink-0" />
                  <span>{loc.operatingHours}</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={`https://wa.me/${loc.whatsappNumber}?text=Hello%20Soes%20Sorgawi!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] text-white font-semibold text-xs py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Store</span>
                </a>

                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f5f3ef] text-[#1b1c1a] font-semibold text-xs py-2.5 px-4 rounded-full flex items-center gap-1.5 hover:bg-[#eae8e4] transition-colors border border-[#e4e2de]"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#0c6780]" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
