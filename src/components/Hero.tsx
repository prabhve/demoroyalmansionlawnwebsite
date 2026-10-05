import React, { useState } from 'react';
import { Star, MapPin, Calendar, Users, Sparkles, MessageCircle, ChevronRight, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { RESORT_INFO, buildWhatsAppUrl } from '../data/resortData.ts';
import { PropertyVisual } from './PropertyVisuals.tsx';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

export const Hero: React.FC = () => {
  const [eventType, setEventType] = useState('Grand Wedding');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('500 - 800 Guests');

  const handleHeroInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      eventType,
      date: eventDate || 'Date to be finalized',
      guestCount,
      sourceSection: 'Hero Bar'
    });
    window.open(url, '_blank');
  };

  return (
    <section id="top" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#0A1F16] text-white perspective-1000">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#163E2E]/60 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#C5A880]/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FAF8F5] to-transparent opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Marker */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs md:text-sm text-[#C5A880] mb-4">
            <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#163E2E] border border-[#C5A880]/30 font-medium shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premier Destination Wedding & Event Resort</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>GT Road, Sarsaul, Kanpur</span>
              <span aria-hidden="true" className="text-[#C5A880]">·</span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                <strong className="text-white font-semibold">4.0 / 5.0</strong> (340+ Reviews)
              </span>
            </div>
          </div>
        </ScrollReveal3D>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal3D direction="left" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-royal font-bold text-white tracking-tight leading-[1.15] mb-6 text-balance">
                Celebrate Life’s Grandest Moments in <span className="gold-shimmer font-bold">Royal Splendor</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-stone-300 mb-8 max-w-2xl leading-relaxed">
                Kanpur’s landmark destination for royal weddings and celebrations. Featuring sprawling 25,000+ sq. ft. lush green lawns, a crystal air-conditioned banquet hall, 25+ luxury resort rooms, and master chef catering on the Kanpur-Prayagraj GT Road.
              </p>

              {/* Stats Row with 3D elevation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-4 mb-8 border-y border-white/10">
                {RESORT_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col p-2 rounded-xl hover:bg-white/5 transition-colors">
                    <span className="text-lg sm:text-xl md:text-2xl font-serif-royal font-bold text-[#C5A880] tabular-nums">
                      {stat.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-stone-300 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={buildWhatsAppUrl({ sourceSection: 'Hero Primary CTA' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm md:text-base text-[#0F291E] bg-[#C5A880] hover:bg-[#D4BC96] shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 group cursor-pointer"
                >
                  <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 fill-[#0F291E] text-transparent" />
                  <span>Inquire Dates on WhatsApp</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#venues"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm md:text-base text-stone-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C5A880]/50 transition-colors"
                >
                  <span>Explore Venues & Spaces</span>
                </a>
              </div>
            </ScrollReveal3D>
          </div>

          {/* Right Column: Hero Visual Card with 3D Tilt Effect */}
          <div className="lg:col-span-5">
            <ScrollReveal3D direction="right" delay={0.3}>
              <TiltCard3D maxTilt={6}>
                <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#C5A880]/50 via-white/15 to-transparent shadow-2xl overflow-hidden card-3d">
                  <div className="relative rounded-3xl overflow-hidden bg-[#0F291E] aspect-[4/3] sm:aspect-[16/11]">
                    <PropertyVisual type="resort_facade" title="Royal Mansion Resort & Lawns" className="h-full" />
                    
                    {/* Overlay Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="py-1 px-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold flex items-center gap-1.5 shadow-md">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Direct Official Booking</span>
                      </div>
                    </div>

                    {/* Bottom Quick Feature Strip */}
                    <div className="absolute bottom-3 inset-x-3 z-20">
                      <div className="bg-[#0A1F16]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between text-xs text-stone-200 shadow-lg">
                        <div>
                          <p className="font-semibold text-white">GT Road, Sarsaul</p>
                          <p className="text-[11px] text-[#C5A880]">Direct Highway Access · 200+ Parking</p>
                        </div>
                        <a
                          href={RESORT_INFO.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#C5A880] text-[#0F291E] hover:bg-[#D4BC96] transition-colors shadow"
                          title="Open Google Maps Location"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            </ScrollReveal3D>
          </div>
        </div>

        {/* Interactive Instant Availability Bar with 3D Depth */}
        <ScrollReveal3D direction="up" delay={0.4}>
          <div className="mt-10 sm:mt-12 bg-[#0F291E]/95 border border-[#C5A880]/30 rounded-3xl p-5 md:p-6 shadow-2xl backdrop-blur-md card-3d">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white uppercase tracking-wider">
                Quick Date & Venue Availability Check
              </h3>
              <span className="text-xs text-[#C5A880] ml-auto hidden sm:inline font-medium">
                Instant response via WhatsApp Manager
              </span>
            </div>

            <form onSubmit={handleHeroInquiry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-[#163E2E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                >
                  <option value="Grand Wedding">Grand Wedding</option>
                  <option value="Reception Gala">Reception Gala</option>
                  <option value="Ring Ceremony / Roka">Ring Ceremony / Roka</option>
                  <option value="Sangeet & Haldi Night">Sangeet & Haldi Night</option>
                  <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                  <option value="Corporate Offsite / Conference">Corporate Offsite</option>
                  <option value="Resort Room Stays">Resort Room Stays</option>
                  <option value="Family Restaurant Dining">Family Restaurant Dining</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Expected Date
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-[#163E2E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Estimated Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-[#163E2E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                >
                  <option value="100 - 300 Guests">100 - 300 Guests (Hall / Intimate)</option>
                  <option value="300 - 600 Guests">300 - 600 Guests (Lawn + Hall)</option>
                  <option value="600 - 1,000 Guests">600 - 1,000 Guests (Grand Lawn)</option>
                  <option value="1,000 - 1,800 Guests">1,000 - 1,800+ Guests (Full Resort)</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#C5A880] hover:bg-[#D4BC96] text-[#0F291E] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0F291E] text-transparent" />
                  <span>Check via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </ScrollReveal3D>
      </div>
    </section>
  );
};
