import React, { useState } from 'react';
import { Sparkles, Eye, X, MessageCircle, Maximize2, Compass } from 'lucide-react';
import { PropertyVisual } from './PropertyVisuals.tsx';
import { buildWhatsAppUrl } from '../data/resortData.ts';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

interface GalleryCard {
  id: string;
  title: string;
  category: 'lawn' | 'hall' | 'decor' | 'rooms' | 'catering';
  visualType: 'lawn' | 'banquet' | 'room' | 'catering' | 'mandap' | 'resort_facade';
  caption: string;
  specs: string;
}

const GALLERY_ITEMS: GalleryCard[] = [
  {
    id: 'g-1',
    title: 'Fairytale Wedding Night on Grand Lawn',
    category: 'lawn',
    visualType: 'lawn',
    caption: 'Full canopy fairy lighting across 25,000 sq.ft. lush green grass with elevated mandap',
    specs: 'Up to 1,800 Guests · Open Air'
  },
  {
    id: 'g-2',
    title: 'Crystal AC Ballroom with Gold Chandeliers',
    category: 'hall',
    visualType: 'banquet',
    caption: 'Centrally air-conditioned pillarless hall with Italian marble and ambient illumination',
    specs: '500+ Guests · Centrally AC'
  },
  {
    id: 'g-3',
    title: 'Executive Air-Conditioned Resort Suite',
    category: 'rooms',
    visualType: 'room',
    caption: 'King bed suite with attached modern washroom, vanity mirror, and 24/7 power backup',
    specs: '25+ Rooms On-Campus'
  },
  {
    id: 'g-4',
    title: 'Gourmet Live Counters & Royal Dining Spread',
    category: 'catering',
    visualType: 'catering',
    caption: 'Interactive live cooking stations, chaat counters, and lavish Indian sweets buffet',
    specs: 'Pure Veg & Multi-Cuisine'
  },
  {
    id: 'g-5',
    title: 'Grand Palace Entrance & Facade at Dusk',
    category: 'lawn',
    visualType: 'resort_facade',
    caption: 'Majestic exterior with lighted entryway, fountain driveway, and wide guest arrival gate',
    specs: 'GT Road Main Highway Facing'
  },
  {
    id: 'g-6',
    title: 'Thematic Royal Mandap & Stage Crafting',
    category: 'decor',
    visualType: 'lawn',
    caption: 'Bespoke floral arrangements, gold brass pillars, and crimson-gold royal draping',
    specs: 'Custom In-House Floral Team'
  }
];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryCard | null>(null);
  const [view360Mode, setView360Mode] = useState<boolean>(false);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'lawn', label: 'Grand Lawn' },
    { key: 'hall', label: 'Crystal Banquet' },
    { key: 'decor', label: 'Stage & Mandap' },
    { key: 'rooms', label: 'Resort Suites' },
    { key: 'catering', label: 'Royal Dining' }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white text-[#1C1F1D] scroll-mt-16 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F291E]/5 border border-[#0F291E]/10 text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Visual Showcase & Spaces</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-royal font-bold text-[#0F291E] tracking-tight mb-4 text-balance">
              Explore the Royal Experience
            </h2>
            <p className="text-sm md:text-base text-stone-600">
              A visual walk-through of our lawns, banquet hall, luxury resort suites, and event decor arrangements.
            </p>
          </div>
        </ScrollReveal3D>

        {/* 360 Tour Mode Banner */}
        <ScrollReveal3D direction="scale" delay={0.2}>
          <div className="mb-8 p-4 bg-[#0F291E] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-[#C5A880]/30 card-3d">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#C5A880] text-[#0F291E]">
                <Compass className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Interactive 360° Property Visualizer
                </h4>
                <p className="text-xs text-stone-300">
                  Preview panoramic vantage points of the grand lawn, stage, and banquet hall
                </p>
              </div>
            </div>

            <button
              onClick={() => setView360Mode(!view360Mode)}
              className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                view360Mode
                  ? 'bg-[#C5A880] text-[#0F291E] border-[#C5A880]'
                  : 'bg-white/10 text-stone-200 border-white/20 hover:bg-white/20'
              }`}
            >
              {view360Mode ? 'Switch to Standard Grid' : 'Launch 360° Viewport'}
            </button>
          </div>
        </ScrollReveal3D>

        {/* 360 Viewport Simulation when enabled */}
        {view360Mode && (
          <div className="mb-10 p-6 bg-[#0A1F16] rounded-3xl border border-[#C5A880]/40 shadow-2xl relative overflow-hidden animate-fade-in card-3d">
            <div className="flex items-center justify-between text-xs text-[#C5A880] mb-4">
              <span className="font-semibold flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                <span>360° Virtual Panoramic Drone & Ground View</span>
              </span>
              <span className="text-stone-400">GT Road, Sarsaul, Kanpur (26.2958° N, 80.4834° E)</span>
            </div>

            <div className="aspect-[21/9] sm:aspect-[16/7] rounded-2xl overflow-hidden relative shadow-inner bg-gradient-to-r from-[#0F291E] via-[#1B4D36] to-[#0F291E] flex items-center justify-center p-6 text-center">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#C5A880_1px,transparent_1px),linear-gradient(to_bottom,#C5A880_1px,transparent_1px)] bg-[size:4rem_4rem]" />
              
              <div className="relative z-10 max-w-xl">
                <h3 className="text-2xl font-serif-royal font-bold text-white mb-2">
                  360° Grand Lawn & Banquet Vista
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mb-4">
                  Experience full 360-degree virtual walkthrough of our 35,000+ sq.ft venue layout.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={buildWhatsAppUrl({
                      eventType: '360 Video Tour Request',
                      sourceSection: '360 Virtual Viewport'
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-[#C5A880] text-[#0F291E] font-bold text-xs rounded-xl shadow hover:bg-[#D4BC96] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#0F291E] text-transparent" />
                    <span>Request Live Video Tour on WhatsApp</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/@26.2959545,80.4837338,3a,75y,227.76h,96.79t/data=!3m7!1e1!3m5!1sqEMTs2MoNV7hmc0wTVzxHw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-6.7861988166623775%26panoid%3DqEMTs2MoNV7hmc0wTVzxHw%26yaw%3D227.76101285838052!7i16384!8i8192"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-white/10 text-white font-medium text-xs rounded-xl hover:bg-white/20 border border-white/20 inline-flex items-center gap-1.5"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Open Google Maps Street View</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`py-2 px-4 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#0F291E] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid with 3D Staggered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <ScrollReveal3D key={item.id} direction="up" delay={0.1 * (idx + 1)}>
              <TiltCard3D maxTilt={6} className="h-full">
                <div
                  onClick={() => setActiveModalItem(item)}
                  className="bg-stone-50 border border-stone-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full card-3d"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <PropertyVisual
                      type={item.visualType}
                      title={item.title}
                      className="h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 rounded-full bg-white/90 text-[#0F291E] shadow-lg flex items-center gap-1.5 text-xs font-semibold">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-white flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-[11px] font-semibold text-[#0F291E] uppercase tracking-wider mb-1">
                        {item.specs}
                      </div>
                      <h4 className="text-base font-semibold text-[#0F291E] mb-1 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-2">
                        {item.caption}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-stone-500 font-medium">Click to enlarge</span>
                      <span className="text-[#0F291E] font-semibold group-hover:text-[#C5A880] transition-colors">
                        Inquire Setup →
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            </ScrollReveal3D>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#0F291E] border border-[#C5A880]/30 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-scale-up text-white">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#C5A880] uppercase tracking-wider font-semibold">
                  {activeModalItem.specs}
                </span>
                <h3 className="text-lg font-serif-royal font-bold text-white">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 shadow-inner">
                <PropertyVisual
                  type={activeModalItem.visualType}
                  title={activeModalItem.title}
                  className="h-full"
                />
              </div>

              <p className="text-xs sm:text-sm text-stone-300 mb-6 leading-relaxed">
                {activeModalItem.caption}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppUrl({
                    eventType: activeModalItem.title,
                    sourceSection: `Gallery Modal - ${activeModalItem.title}`
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#0F291E] bg-[#C5A880] hover:bg-[#D4BC96] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0F291E] text-transparent" />
                  <span>Book this Setup on WhatsApp</span>
                </a>

                <button
                  onClick={() => setActiveModalItem(null)}
                  className="py-3 px-5 rounded-xl text-xs sm:text-sm font-medium text-stone-300 bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
