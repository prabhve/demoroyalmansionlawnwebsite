import React from 'react';
import { Zap, Car, Sparkles, BedDouble, Utensils, Music, Palette, ShieldCheck, Check, MessageCircle } from 'lucide-react';
import { AMENITIES, buildWhatsAppUrl } from '../data/resortData.ts';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

export const AmenitiesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-[#C5A880]" />;
      case 'Car': return <Car className="w-5 h-5 text-[#C5A880]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
      case 'BedDouble': return <BedDouble className="w-5 h-5 text-[#C5A880]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#C5A880]" />;
      case 'Music': return <Music className="w-5 h-5 text-[#C5A880]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#C5A880]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section id="amenities" className="py-16 md:py-24 bg-[#FAF8F5] text-[#1C1F1D] scroll-mt-16 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F291E]/5 border border-[#0F291E]/10 text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Resort Facilities & Infrastructure</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-royal font-bold text-[#0F291E] tracking-tight mb-4 text-balance">
              Complete Royal Amenities for Effortless Hosting
            </h2>
            <p className="text-sm md:text-base text-stone-600">
              Engineered to provide a seamless, stress-free hospitality experience for wedding families and their treasured guests.
            </p>
          </div>
        </ScrollReveal3D>

        {/* Amenities Grid with 3D Staggered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {AMENITIES.map((item, idx) => (
            <ScrollReveal3D key={item.id} direction="up" delay={0.1 * (idx + 1)}>
              <TiltCard3D maxTilt={6} className="h-full">
                <div
                  className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#C5A880]/60 h-full card-3d"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#0F291E] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        {getIcon(item.iconName)}
                      </div>
                      {item.badge && (
                        <span className="text-[11px] font-semibold text-[#0F291E] bg-[#C5A880]/20 px-2 py-0.5 rounded-md">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-semibold text-[#0F291E] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Available on site</span>
                  </div>
                </div>
              </TiltCard3D>
            </ScrollReveal3D>
          ))}
        </div>

        {/* Highlight Callout Box with 3D Depth */}
        <ScrollReveal3D direction="scale" delay={0.4}>
          <div className="bg-[#0F291E] text-white rounded-3xl p-6 md:p-8 border border-[#C5A880]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 card-3d">
            <div className="max-w-2xl">
              <h4 className="text-lg md:text-xl font-serif-royal font-bold text-white mb-2">
                Need special wedding arrangements or custom sound & stage requirements?
              </h4>
              <p className="text-xs md:text-sm text-stone-300">
                Our dedicated venue manager coordinates everything from customized mandap trusses and baraat band routes to early check-in suites.
              </p>
            </div>

            <a
              href={buildWhatsAppUrl({
                eventType: 'Custom Amenities & Logistics Inquiry',
                sourceSection: 'Amenities Highlight'
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 py-3 px-5 rounded-xl text-xs md:text-sm font-bold text-[#0F291E] bg-[#C5A880] hover:bg-[#D4BC96] transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-[#0F291E] text-transparent" />
              <span>Discuss Custom Setup</span>
            </a>
          </div>
        </ScrollReveal3D>
      </div>
    </section>
  );
};
