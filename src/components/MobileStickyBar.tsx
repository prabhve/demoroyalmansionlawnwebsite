import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { RESORT_INFO, buildWhatsAppUrl } from '../data/resortData.ts';

export const MobileStickyBar: React.FC = () => {
  const whatsAppUrl = buildWhatsAppUrl({
    sourceSection: 'Mobile Sticky Bar'
  });

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${RESORT_INFO.coordinates.lat},${RESORT_INFO.coordinates.lng}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0F291E]/95 backdrop-blur-lg border-t border-[#C5A880]/30 px-3 pt-2 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call Button */}
        <a
          href={`tel:${RESORT_INFO.phone1Raw}`}
          className="min-h-[44px] px-3.5 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/15 flex items-center justify-center gap-1.5 text-xs font-semibold shrink-0 transition-all shadow"
          aria-label="Call Royal Mansion Resort"
        >
          <Phone className="w-4 h-4 text-[#C5A880]" />
          <span>Call</span>
        </a>

        {/* Primary WhatsApp Booking Action Button */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] px-4 rounded-2xl bg-[#C5A880] text-[#0F291E] hover:bg-[#D4BC96] active:scale-95 flex items-center justify-center gap-2 text-xs font-bold shadow-lg transition-all"
          aria-label="Book venue on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-[#0F291E] text-transparent" />
          <span>Book on WhatsApp</span>
        </a>

        {/* Real-time GPS Navigation Shortcut */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] w-11 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 text-[#C5A880] border border-white/15 flex items-center justify-center transition-all shadow shrink-0"
          aria-label="Get Google Maps navigation directions"
          title="Google Maps Navigation"
        >
          <Navigation className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
