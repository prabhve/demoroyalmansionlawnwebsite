import React, { useState } from 'react';
import { Calculator, MessageCircle, Users, Utensils, Home, Palette } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/resortData.ts';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

export const EventCalculator: React.FC = () => {
  const [eventType, setEventType] = useState('Grand Wedding (Lawn + Hall)');
  const [guestCount, setGuestCount] = useState(500);
  const [cateringTier, setCateringTier] = useState('gold');
  const [decorTier, setDecorTier] = useState('maharaja');
  const [roomsCount, setRoomsCount] = useState(10);
  const [preferredDate, setPreferredDate] = useState('');

  // Per plate estimates (Indicative market baseline in Sarsaul / Kanpur region)
  const cateringOptions: Record<string, { name: string; price: number; desc: string }> = {
    none: { name: 'Venue Only (Own/No Catering)', price: 0, desc: 'Lawn & banquet hall rental without food package' },
    silver: { name: 'Royal Silver Menu', price: 750, desc: '3 Starters, 2 Paneer dishes, Dal Makhani, Breads, 2 Desserts, Ice Cream' },
    gold: { name: 'Maharaja Gold Menu (Most Popular)', price: 1050, desc: '5 Starters, Chaat counter, 3 Curries, Pulao, Live Tandoor, 4 Desserts & Mocktails' },
    imperial: { name: 'Imperial Diamond Grand Feast', price: 1450, desc: 'Multi-Cuisine Live counters (Italian, Chaat, Tandoor), 5 Main curries, Exotic Sweets, Barista Cafe' }
  };

  const decorOptions: Record<string, { name: string; price: number; desc: string }> = {
    standard: { name: 'Classic Elegance Decor', price: 75000, desc: 'Stage backdrop, entrance arch, sofa setup, pathway lighting' },
    maharaja: { name: 'Grand Maharaja Royal Setup', price: 150000, desc: 'Floral mandap pavilion, LED fairway tunnel, fairy-light canopy over lawn, royal lounge' },
    palace: { name: 'Imperial Palace Luxury Theme', price: 250000, desc: 'Designer thematic mandap, imported exotic flowers, grand laser & stage trussing, photo booth' }
  };

  const roomPricePerNight = 2200;

  // Base venue hire baseline
  const baseVenueCost = eventType.includes('Wedding') ? 120000 : 70000;
  const foodTotal = cateringOptions[cateringTier].price * guestCount;
  const decorTotal = decorOptions[decorTier].price;
  const roomsTotal = roomsCount * roomPricePerNight;
  const totalEstimate = baseVenueCost + foodTotal + decorTotal + roomsTotal;

  const handleSendWhatsApp = () => {
    const breakdownMsg = `Custom Package Estimate Breakdown:\n` +
      `• Catering: ${cateringOptions[cateringTier].name} (@ ₹${cateringOptions[cateringTier].price}/plate x ${guestCount} guests = ₹${foodTotal.toLocaleString('en-IN')})\n` +
      `• Decor Setup: ${decorOptions[decorTier].name} (₹${decorTotal.toLocaleString('en-IN')})\n` +
      `• AC Rooms: ${roomsCount} Rooms (₹${roomsTotal.toLocaleString('en-IN')})\n` +
      `• Estimated Total: Approx. ₹${totalEstimate.toLocaleString('en-IN')}`;

    const url = buildWhatsAppUrl({
      eventType,
      guestCount: `${guestCount} Guests`,
      date: preferredDate || 'To be finalized with manager',
      roomsNeeded: `${roomsCount} AC Deluxe Rooms`,
      message: breakdownMsg,
      sourceSection: 'Price Calculator'
    });

    window.open(url, '_blank');
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#0F291E] text-white relative overflow-hidden scroll-mt-16 perspective-1000">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#163E2E] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C5A880]/30 text-xs font-semibold text-[#C5A880] uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Cost Estimator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-royal font-bold text-white tracking-tight mb-4 text-balance">
              Plan & Customize Your Wedding Package
            </h2>
            <p className="text-sm md:text-base text-stone-300">
              Tailor guest counts, catering tiers, decor themes, and resort rooms. Get an immediate ballpark estimate and send it directly to our manager on WhatsApp for date lock-in.
            </p>
          </div>
        </ScrollReveal3D>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Configuration Controls (8 cols) */}
          <div className="lg:col-span-7 bg-[#163E2E]/90 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col gap-6 card-3d">
            <ScrollReveal3D direction="left" delay={0.2}>
              <div className="space-y-6">
                {/* Event Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C5A880] mb-2">
                    1. Select Event Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Grand Wedding (Lawn + Hall)',
                      'Reception Gala',
                      'Ring Ceremony / Roka',
                      'Sangeet & Haldi Night',
                      'Birthday / Anniversary',
                      'Corporate / Conference'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setEventType(type)}
                        className={`py-2 px-3 rounded-xl text-xs font-medium text-left transition-all border cursor-pointer ${
                          eventType === type
                            ? 'bg-[#C5A880] text-[#0F291E] border-[#C5A880] font-bold shadow'
                            : 'bg-black/20 text-stone-300 border-white/10 hover:border-white/25'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Count Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#C5A880] flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>2. Estimated Guest Count</span>
                    </label>
                    <span className="text-lg font-bold font-serif-royal text-[#C5A880] tabular-nums">
                      {guestCount} Guests
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1500"
                    step="50"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full h-2 bg-black/40 rounded-lg appearance-none cursor-pointer accent-[#C5A880]"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                    <span>100 (Intimate)</span>
                    <span>500 (Classic)</span>
                    <span>1,000</span>
                    <span>1,500+ (Grand Lawn)</span>
                  </div>
                </div>

                {/* Catering Tier Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C5A880] mb-2 flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    <span>3. Food & Catering Package</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(cateringOptions).map(([key, opt]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setCateringTier(key)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          cateringTier === key
                            ? 'bg-[#0F291E] border-[#C5A880] ring-1 ring-[#C5A880]'
                            : 'bg-black/20 border-white/10 hover:border-white/20 text-stone-300'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-semibold text-white">{opt.name}</span>
                          <span className="text-xs font-bold text-[#C5A880] tabular-nums">
                            {opt.price > 0 ? `₹${opt.price}/plate` : 'Custom'}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-400 line-clamp-2 leading-tight">
                          {opt.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Decor Tier */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C5A880] mb-2 flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    <span>4. Theme & Floral Decor Tier</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.entries(decorOptions).map(([key, opt]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setDecorTier(key)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          decorTier === key
                            ? 'bg-[#0F291E] border-[#C5A880] ring-1 ring-[#C5A880]'
                            : 'bg-black/20 border-white/10 hover:border-white/20 text-stone-300'
                        }`}
                      >
                        <div className="text-xs font-semibold text-white mb-0.5">{opt.name}</div>
                        <div className="text-[11px] text-[#C5A880] font-medium mb-1">
                          ~₹{(opt.price / 1000).toFixed(0)}k package
                        </div>
                        <p className="text-[11px] text-stone-400 line-clamp-2 leading-tight">
                          {opt.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rooms Count Stepper */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#C5A880] flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      <span>5. AC Guest Rooms Needed</span>
                    </label>
                    <span className="text-sm font-semibold text-white">
                      {roomsCount} Rooms (@ ₹{roomPricePerNight}/night)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="25"
                      step="1"
                      value={roomsCount}
                      onChange={(e) => setRoomsCount(Number(e.target.value))}
                      className="flex-1 h-2 bg-black/40 rounded-lg appearance-none cursor-pointer accent-[#C5A880]"
                    />
                    <span className="text-xs font-bold text-[#C5A880] bg-black/40 px-2.5 py-1 rounded-lg border border-white/10 min-w-[50px] text-center">
                      {roomsCount} AC
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal3D>
          </div>

          {/* Right: Real-Time Summary & WhatsApp Direct CTA (5 cols) with 3D Tilt */}
          <div className="lg:col-span-5 sticky top-24">
            <ScrollReveal3D direction="right" delay={0.3}>
              <TiltCard3D maxTilt={6}>
                <div className="bg-gradient-to-b from-[#1C4533] to-[#0D241A] border border-[#C5A880]/40 rounded-3xl p-6 md:p-8 shadow-2xl card-3d">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                      Estimated Summary
                    </span>
                    <span className="text-xs text-stone-400 font-medium">Indicative Estimate</span>
                  </div>

                  <div className="space-y-3 mb-6 text-xs text-stone-200">
                    <div className="flex justify-between">
                      <span>Event Selection:</span>
                      <span className="font-semibold text-white text-right max-w-[180px] truncate">{eventType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Venue Ground & Lighting:</span>
                      <span className="font-medium text-white tabular-nums">₹{baseVenueCost.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Catering ({guestCount} guests):</span>
                      <span className="font-medium text-white tabular-nums">₹{foodTotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Decor & Mandap Setup:</span>
                      <span className="font-medium text-white tabular-nums">₹{decorTotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Resort AC Rooms ({roomsCount}):</span>
                      <span className="font-medium text-white tabular-nums">₹{roomsTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Total Highlight */}
                  <div className="bg-black/30 border border-[#C5A880]/30 rounded-2xl p-4 mb-6 text-center">
                    <div className="text-xs text-stone-300 uppercase tracking-wider mb-1">
                      Estimated Package Total
                    </div>
                    <div className="text-2xl sm:text-3xl font-serif-royal font-bold text-[#C5A880] tabular-nums">
                      ₹{totalEstimate.toLocaleString('en-IN')}*
                    </div>
                    <div className="text-[11px] text-stone-400 mt-1">
                      *Final rates subject to exact seasonal date & customization
                    </div>
                  </div>

                  {/* Optional Date input */}
                  <div className="mb-4">
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Target Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-black/30 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  {/* WhatsApp Push Button */}
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full py-3.5 px-4 bg-[#C5A880] hover:bg-[#D4BC96] text-[#0F291E] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-[#0F291E] text-transparent" />
                    <span>Send Custom Quote via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-stone-400 text-center mt-3">
                    Direct connection with Manager (+91 97248 16565).
                  </p>
                </div>
              </TiltCard3D>
            </ScrollReveal3D>
          </div>
        </div>
      </div>
    </section>
  );
};
