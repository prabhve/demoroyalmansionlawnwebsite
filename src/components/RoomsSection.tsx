import React, { useState } from 'react';
import { Bed, ShieldCheck, Wifi, Zap, CheckCircle2, MessageCircle, Utensils } from 'lucide-react';
import { ROOM_TYPES, RESORT_INFO, buildWhatsAppUrl } from '../data/resortData.ts';
import { PropertyVisual } from './PropertyVisuals.tsx';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

export const RoomsSection: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState(ROOM_TYPES[0].name);
  const [checkInDate, setCheckInDate] = useState('');
  const [guestsCount, setGuestsCount] = useState('2 Guests');

  const handleRoomWhatsApp = (roomName: string, price: string) => {
    const url = buildWhatsAppUrl({
      eventType: `AC Room Reservation - ${roomName}`,
      date: checkInDate || 'Check-in date discussed in chat',
      guestCount: guestsCount,
      roomsNeeded: roomName,
      message: `Inquiring about ${roomName} (${price}/night) at Royal Mansion GT Road Sarsaul Kanpur.`,
      sourceSection: `Rooms Section - ${roomName}`
    });
    window.open(url, '_blank');
  };

  return (
    <section id="rooms" className="py-16 md:py-24 bg-white text-[#1C1F1D] scroll-mt-16 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F291E]/5 border border-[#0F291E]/10 text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-3">
              <Bed className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Resort Accommodation & Highway Stay</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-royal font-bold text-[#0F291E] tracking-tight mb-4 text-balance">
              Deluxe Air-Conditioned Rooms & Suites
            </h2>
            <p className="text-sm md:text-base text-stone-600">
              25+ modern, hygienic, and well-cooled AC guest rooms on GT Road. Ideal for highway transit travelers, outstation wedding baraatis, and family celebrations with round-the-clock power backup.
            </p>
          </div>
        </ScrollReveal3D>

        {/* Room Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {ROOM_TYPES.map((room, idx) => (
            <ScrollReveal3D key={room.id} direction="up" delay={0.15 * (idx + 1)}>
              <TiltCard3D maxTilt={7} className="h-full">
                <div
                  className="bg-[#FAF8F5] border border-stone-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#C5A880] h-full card-3d"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <PropertyVisual
                        type="room"
                        title={room.name}
                        className="h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 text-[#C5A880] text-xs font-bold px-3 py-1 rounded-full shadow">
                        {room.price} <span className="text-[10px] text-stone-300 font-normal">/ night</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-1">
                        {room.capacity}
                      </div>
                      <h3 className="text-xl font-serif-royal font-bold text-[#0F291E] mb-2">
                        {room.name}
                      </h3>
                      <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                        {room.tagline}
                      </p>

                      <div className="space-y-2 mb-6 pt-4 border-t border-stone-200">
                        {room.features.map((feat, fidx) => (
                          <div key={fidx} className="flex items-start gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handleRoomWhatsApp(room.name, room.price)}
                      className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#0F291E] bg-[#C5A880] hover:bg-[#D4BC96] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-[#0F291E] text-transparent" />
                      <span>Book {room.name.split(' ')[0]} on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </TiltCard3D>
            </ScrollReveal3D>
          ))}
        </div>

        {/* Accommodation Perks Banner with 3D Depth */}
        <ScrollReveal3D direction="up" delay={0.4}>
          <div className="bg-[#0F291E] text-white rounded-3xl p-6 md:p-8 border border-[#C5A880]/30 shadow-xl card-3d">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Zap className="w-6 h-6 text-[#C5A880] mb-2" />
                <h4 className="text-sm font-bold text-white">100% DG Power Backup</h4>
                <p className="text-[11px] text-stone-300">Continuous AC cooling 24/7</p>
              </div>

              <div className="flex flex-col items-center">
                <Utensils className="w-6 h-6 text-[#C5A880] mb-2" />
                <h4 className="text-sm font-bold text-white">In-House Restaurant</h4>
                <p className="text-[11px] text-stone-300">Fast room service to doors</p>
              </div>

              <div className="flex flex-col items-center">
                <ShieldCheck className="w-6 h-6 text-[#C5A880] mb-2" />
                <h4 className="text-sm font-bold text-white">Secure 200+ Parking</h4>
                <p className="text-[11px] text-stone-300">CCTV & security guarded</p>
              </div>

              <div className="flex flex-col items-center">
                <Wifi className="w-6 h-6 text-[#C5A880] mb-2" />
                <h4 className="text-sm font-bold text-white">High-Speed Wi-Fi</h4>
                <p className="text-[11px] text-stone-300">Complimentary across rooms</p>
              </div>
            </div>
          </div>
        </ScrollReveal3D>
      </div>
    </section>
  );
};
