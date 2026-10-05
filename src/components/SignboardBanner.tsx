import React from 'react';
import { Utensils, Bed, Building2, TreePine, MessageCircle, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { RESORT_INFO, buildWhatsAppUrl } from '../data/resortData.ts';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

export const SignboardBanner: React.FC = () => {
  const offerings = [
    {
      title: "FAMILY RESTAURANT",
      tagline: "Highway Dine-In & Multi-Cuisine",
      desc: "Pure veg delights, Maharaja Thalis, Tandoori starters & Highway snacks with family AC cabins.",
      icon: <Utensils className="w-5 h-5 text-amber-300" />,
      link: "#restaurant",
      badge: "Open 7 AM - 11:30 PM",
      theme: "from-amber-950/80 to-[#0F291E]"
    },
    {
      title: "AC ROOM",
      tagline: "25+ Deluxe Highway & Wedding Suites",
      desc: "Spotless air-conditioned rooms, attached modern bath, 24/7 power backup & room service.",
      icon: <Bed className="w-5 h-5 text-emerald-300" />,
      link: "#rooms",
      badge: "24/7 Check-In",
      theme: "from-emerald-950/80 to-[#0F291E]"
    },
    {
      title: "AC BANQUET HALL",
      tagline: "500+ Seater Crystal Ballroom",
      desc: "Pillarless centrally cooled hall with imported crystal chandeliers & stage audio wiring.",
      icon: <Building2 className="w-5 h-5 text-amber-300" />,
      link: "#venues",
      badge: "Centrally AC",
      theme: "from-amber-950/80 to-[#0F291E]"
    },
    {
      title: "GREEN LAWN",
      tagline: "25,000+ Sq. Ft. Grand Wedding Lawn",
      desc: "Sprawling manicured lush garden for 1,500+ guests with fairytale canopy illumination.",
      icon: <TreePine className="w-5 h-5 text-emerald-300" />,
      link: "#venues",
      badge: "1,500+ Capacity",
      theme: "from-emerald-950/80 to-[#0F291E]"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#0A1F16] text-white relative overflow-hidden border-y border-[#C5A880]/20 perspective-1000">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] opacity-10 [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Strip */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#C5A880] uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Property Offerings · GT Road Sarsaul</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-royal font-bold text-white">
                Complete Hospitality Destination Under One Roof
              </h2>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href={`tel:${RESORT_INFO.phone1Raw}`}
                className="flex-1 sm:flex-initial py-2.5 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-stone-200 font-semibold inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{RESORT_INFO.phone1}</span>
              </a>
              <a
                href={buildWhatsAppUrl({ sourceSection: 'Signboard Strip' })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-[#C5A880] text-[#0F291E] hover:bg-[#D4BC96] text-xs font-bold shadow-md inline-flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#0F291E] text-transparent" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </ScrollReveal3D>

        {/* 4 Pillars Grid mirroring the official signboard with 3D Tilt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {offerings.map((item, idx) => (
            <ScrollReveal3D key={idx} direction="up" delay={0.15 * (idx + 1)}>
              <TiltCard3D maxTilt={7} className="h-full">
                <div
                  className="bg-gradient-to-b from-[#163E2E] to-[#0F291E] border border-white/15 hover:border-[#C5A880] rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col justify-between group h-full card-3d"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold text-[#C5A880] bg-black/50 border border-[#C5A880]/30 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono font-bold text-amber-300 tracking-wider mb-1">
                      0{idx + 1}. {item.title}
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 leading-snug">
                      {item.tagline}
                    </h3>

                    <p className="text-xs text-stone-300 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={item.link}
                      className="text-xs font-semibold text-[#C5A880] hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href={buildWhatsAppUrl({
                        eventType: `Signboard Card - ${item.title}`,
                        sourceSection: `Signboard 4 Pillars - ${item.title}`
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/10 hover:bg-[#C5A880] hover:text-[#0F291E] text-white transition-all shadow"
                      title={`Book ${item.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </TiltCard3D>
            </ScrollReveal3D>
          ))}
        </div>
      </div>
    </section>
  );
};
