import React from 'react';
import { Sparkles, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { RESORT_INFO, buildWhatsAppUrl } from '../data/resortData.ts';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Regal Architectural Elegance',
      desc: '35,000+ sq. ft. of grand palace-inspired architecture, expansive laser-leveled lush green lawns, and soaring crystal-lit ballrooms.'
    },
    {
      title: 'End-to-End Hospitality',
      desc: '25+ on-campus air-conditioned deluxe resort suites for family stays, dedicated bridal vanity suites, and round-the-clock room service.'
    },
    {
      title: 'Uncompromised Infrastructure',
      desc: '100% 24/7 dual DG Genset power backup, gated 200+ car parking with valet, and full CCTV surveillance.'
    },
    {
      title: 'Master Culinary Excellence',
      desc: 'Pure vegetarian and royal multi-cuisine feast setups crafted by seasoned master chefs with hygienic live interactive cooking stations.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white text-[#1C1F1D] scroll-mt-16 relative overflow-hidden perspective-1000">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF8F5] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: About Content & Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal3D direction="left" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F291E]/5 border border-[#0F291E]/10 text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-4 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>About Royal Mansion Lawns & Resort</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif-royal font-bold text-[#0F291E] tracking-tight mb-6 leading-tight text-balance">
                Where Royal Grandeur Meets Heartfelt Indian Hospitality
              </h2>

              <p className="text-sm md:text-base text-stone-600 mb-4 leading-relaxed">
                Situated prominently on the <strong>Kanpur – Prayagraj GT Road at Sarsaul</strong>, Royal Mansion Lawns & Resort was established to provide families with an unrivaled destination for monumental weddings, milestone receptions, and celebratory gatherings.
              </p>

              <p className="text-sm md:text-base text-stone-600 mb-8 leading-relaxed">
                We bridge traditional royal opulence with modern luxury. Whether you envision an intimate ring ceremony in our pillarless Crystal AC Ballroom or an extravagant 1,500-guest fairy-lit wedding on our emerald lawn, our seasoned event directors coordinate every detail so you celebrate effortlessly.
              </p>

              {/* Core Pillars Grid with 3D elevation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-8">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 hover:border-[#C5A880] transition-all flex flex-col justify-between card-3d"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0F291E] mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={buildWhatsAppUrl({
                    eventType: 'Schedule Venue Tour / About Inquiry',
                    sourceSection: 'About Us Section'
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#0F291E] bg-[#C5A880] hover:bg-[#D4BC96] shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0F291E] text-transparent" />
                  <span>Book Venue Visit on WhatsApp</span>
                </a>

                <a
                  href="#venues"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#0F291E] hover:text-[#C5A880] transition-colors py-2 px-3"
                >
                  <span>View Event Venues</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal3D>
          </div>

          {/* Right: Key Stats & Trust Card (5 cols) with 3D Tilt */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal3D direction="right" delay={0.2}>
              <TiltCard3D maxTilt={6}>
                <div className="bg-[#0F291E] text-white p-6 md:p-8 rounded-3xl border border-[#C5A880]/30 shadow-2xl relative overflow-hidden card-3d">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#163E2E] rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <span className="text-xs text-[#C5A880] font-semibold uppercase tracking-widest block mb-2">
                      At A Glance
                    </span>
                    <h3 className="text-2xl font-serif-royal font-bold text-white mb-6">
                      Property Highlights
                    </h3>

                    <div className="space-y-3.5 text-xs text-stone-200">
                      <div className="flex items-center justify-between py-2 border-b border-white/10">
                        <span className="text-stone-300">Total Resort Area</span>
                        <span className="font-bold text-[#C5A880]">35,000+ Sq. Ft.</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/10">
                        <span className="text-stone-300">Open-Air Emerald Lawn</span>
                        <span className="font-bold text-[#C5A880]">25,000+ Sq. Ft. (1,500+ Guests)</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/10">
                        <span className="text-stone-300">Crystal AC Ballroom</span>
                        <span className="font-bold text-[#C5A880]">8,500 Sq. Ft. (500+ Guests)</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/10">
                        <span className="text-stone-300">AC Deluxe Rooms</span>
                        <span className="font-bold text-[#C5A880]">25+ Guest & Bridal Suites</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/10">
                        <span className="text-stone-300">On-Site Parking</span>
                        <span className="font-bold text-[#C5A880]">200+ Cars with Valet</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-stone-300">Direct Highway Access</span>
                        <span className="font-bold text-[#C5A880]">GT Road, Sarsaul Kanpur</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                        <span className="text-xs text-stone-300">100% DG Power Guarantee</span>
                      </div>
                      <span className="text-xs font-bold text-[#C5A880]">4.0 ★ (340+ Reviews)</span>
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            </ScrollReveal3D>
          </div>
        </div>
      </div>
    </section>
  );
};
