import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, ArrowRight, Sparkles, Bed, Building2, TreePine, UtensilsCrossed, Users, Maximize2 } from 'lucide-react';
import { VENUE_SPACES, buildWhatsAppUrl } from '../data/resortData.ts';
import { PropertyVisual } from './PropertyVisuals.tsx';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

export const VenuesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('grand-lawn');

  const selectedVenue = VENUE_SPACES.find((v) => v.id === activeTab) || VENUE_SPACES[0];

  const getIcon = (type: string) => {
    switch (type) {
      case 'lawn':
        return <TreePine className="w-4 h-4" />;
      case 'hall':
        return <Building2 className="w-4 h-4" />;
      case 'rooms':
        return <Bed className="w-4 h-4" />;
      default:
        return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  const getVisualType = (id: string): 'lawn' | 'banquet' | 'room' | 'catering' => {
    if (id === 'grand-lawn') return 'lawn';
    if (id === 'crystal-hall') return 'banquet';
    if (id === 'ac-rooms-space') return 'room';
    return 'catering';
  };

  return (
    <section id="venues" className="py-16 md:py-24 bg-[#FAF8F5] text-[#1C1F1D] scroll-mt-16 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F291E]/5 border border-[#0F291E]/10 text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Versatile Event Spaces</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-royal font-bold text-[#0F291E] tracking-tight mb-4 text-balance">
              Majestic Venues Designed for Every Ritual & Celebration
            </h2>
            <p className="text-sm md:text-base text-stone-600">
              From expansive open-air lawns under starry skies to pillarless air-conditioned crystal halls and comfortable family accommodations.
            </p>
          </div>
        </ScrollReveal3D>

        {/* Venue Selector Tabs */}
        <ScrollReveal3D direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-200/70 backdrop-blur rounded-2xl max-w-3xl mx-auto mb-10 shadow-inner">
            {VENUE_SPACES.map((venue) => {
              const isActive = activeTab === venue.id;
              return (
                <button
                  key={venue.id}
                  onClick={() => setActiveTab(venue.id)}
                  className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0F291E] text-white shadow-md'
                      : 'text-stone-700 hover:text-[#0F291E] hover:bg-stone-200'
                  }`}
                >
                  {getIcon(venue.type)}
                  <span className="whitespace-nowrap">{venue.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal3D>

        {/* Selected Venue Showcase Card with 3D elevation */}
        <ScrollReveal3D direction="scale" delay={0.3}>
          <div className="bg-white rounded-3xl border border-stone-200/80 shadow-2xl overflow-hidden card-3d">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left: High-Def Visual Representation with 3D Tilt */}
              <div className="lg:col-span-6 p-4 md:p-6 bg-stone-100 flex flex-col justify-center">
                <TiltCard3D maxTilt={5}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
                    <PropertyVisual
                      type={getVisualType(selectedVenue.id)}
                      title={selectedVenue.name}
                      className="h-full"
                    />
                  </div>
                </TiltCard3D>
              </div>

              {/* Right: Detailed Venue Specs & WhatsApp Booking */}
              <div className="lg:col-span-6 p-6 md:p-10 flex flex-col justify-between">
                <div>
                  {/* Meta header */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mb-3">
                    <span className="flex items-center gap-1.5 font-semibold text-[#0F291E] bg-[#C5A880]/15 px-2.5 py-1 rounded-md">
                      <Users className="w-3.5 h-3.5 text-[#0F291E]" />
                      <span>{selectedVenue.capacity}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1.5 font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">
                      <Maximize2 className="w-3.5 h-3.5 text-stone-500" />
                      <span>{selectedVenue.area}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif-royal font-bold text-[#0F291E] mb-2">
                    {selectedVenue.name}
                  </h3>
                  
                  <p className="text-sm font-medium text-[#C5A880] mb-4">
                    {selectedVenue.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {selectedVenue.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#0F291E] mb-3">
                      Venue Inclusions & Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedVenue.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal for tags */}
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#0F291E] mb-2">
                      Ideal Celebrations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedVenue.idealFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-[#0F291E] font-medium bg-[#FAF8F5] border border-stone-200 px-2.5 py-1 rounded-lg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
                  <a
                    href={buildWhatsAppUrl({
                      eventType: selectedVenue.name,
                      sourceSection: `Venue Card - ${selectedVenue.name}`
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs md:text-sm font-semibold text-white bg-[#0F291E] hover:bg-[#163E2E] transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                    <span>Reserve {selectedVenue.shortLabel} on WhatsApp</span>
                  </a>

                  <a
                    href="#calculator"
                    className="py-3 px-4 rounded-xl text-xs md:text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Estimate Budget</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal3D>
      </div>
    </section>
  );
};
