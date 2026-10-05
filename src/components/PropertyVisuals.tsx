import React from 'react';

interface VisualProps {
  type: 'lawn' | 'banquet' | 'room' | 'catering' | 'mandap' | 'resort_facade';
  title?: string;
  className?: string;
}

export const PropertyVisual: React.FC<VisualProps> = ({ type, title, className = "w-full h-full min-h-[260px]" }) => {
  if (type === 'resort_facade') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F291E] via-[#163E2E] to-[#0A1F16] ${className}`}>
        {/* Subtle royal pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Architectural Palace Silhouette SVG */}
        <svg className="absolute bottom-0 w-full h-4/5 text-[#C5A880]/20" viewBox="0 0 800 350" preserveAspectRatio="none" fill="currentColor">
          <path d="M 0 350 L 0 240 L 50 240 L 50 180 Q 75 140 100 180 L 100 240 L 180 240 L 180 140 Q 220 70 260 140 L 260 240 L 340 240 L 340 100 Q 400 30 460 100 L 460 240 L 540 240 L 540 140 Q 580 70 620 140 L 620 240 L 700 240 L 700 180 Q 725 140 750 180 L 750 240 L 800 240 L 800 350 Z" />
        </svg>

        {/* Ambient Glowing Fairy Lights & Garden Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16] via-transparent to-black/30" />
        
        {/* Warm light orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#C5A880]/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-amber-400/15 rounded-full blur-3xl" />

        {/* Center Royal Seal / Crest Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C5A880] animate-ping" />
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">GT Road · Sarsaul Kanpur</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif-royal font-bold text-white mb-2">
            {title || "Royal Mansion Lawns & Resort"}
          </h3>
          <p className="text-sm text-stone-300 max-w-lg line-clamp-2">
            Sprawling 35,000+ sq. ft. manicured destination wedding lawn, crystal banquet hall, and 25+ air-conditioned deluxe resort suites.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'lawn') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#123827] via-[#1B4D36] to-[#0A2418] ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(#86efac_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />
        
        {/* Lawn & Canopy Motif */}
        <svg className="absolute inset-0 w-full h-full text-[#C5A880]/15" viewBox="0 0 600 400" preserveAspectRatio="none" fill="none" stroke="currentColor">
          {/* Canopy fairy light arches */}
          <path d="M 0 100 Q 150 160 300 110 T 600 130" strokeWidth="1.5" strokeDasharray="4 6" />
          <path d="M 0 140 Q 150 200 300 150 T 600 170" strokeWidth="1.5" strokeDasharray="4 6" />
          <path d="M 0 180 Q 150 240 300 190 T 600 210" strokeWidth="1.5" strokeDasharray="4 6" />
          {/* Stage mandap silhouette */}
          <path d="M 220 380 L 220 280 Q 300 220 380 280 L 380 380" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        </svg>

        <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-[#0A2418] via-[#0A2418]/60 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] font-semibold mb-1">
            <span>25,000+ Sq. Ft.</span>
            <span>·</span>
            <span>1,500+ Guests Capacity</span>
          </div>
          <h4 className="text-xl font-serif-royal font-bold text-white mb-1">
            {title || "Grand Open-Air Emerald Lawn"}
          </h4>
          <p className="text-xs text-stone-300">
            Fairytale canopy lighting, elevated wedding mandap, and extensive food court walkways.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'banquet') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C1F26] via-[#2A241C] to-[#121316] ${className}`}>
        {/* Crystal Chandelier & Ballroom Motif */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-[#C5A880]/20 rounded-full blur-2xl" />
        <svg className="absolute inset-0 w-full h-full text-[#C5A880]/25" viewBox="0 0 600 400" preserveAspectRatio="none" fill="none">
          {/* Chandelier */}
          <g stroke="currentColor" strokeWidth="1.5">
            <line x1="300" y1="0" x2="300" y2="70" />
            <path d="M 240 90 Q 300 130 360 90" />
            <path d="M 210 110 Q 300 170 390 110" />
            <line x1="240" y1="90" x2="240" y2="120" />
            <line x1="300" y1="130" x2="300" y2="160" />
            <line x1="360" y1="90" x2="360" y2="120" />
          </g>
          {/* Ballroom pillars */}
          <rect x="60" y="160" width="30" height="240" fill="currentColor" fillOpacity="0.08" />
          <rect x="510" y="160" width="30" height="240" fill="currentColor" fillOpacity="0.08" />
        </svg>

        <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-[#121316] via-[#121316]/70 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] font-semibold mb-1">
            <span>8,500 Sq. Ft.</span>
            <span>·</span>
            <span>Centrally Air-Conditioned</span>
          </div>
          <h4 className="text-xl font-serif-royal font-bold text-white mb-1">
            {title || "Crystal AC Banquet Hall"}
          </h4>
          <p className="text-xs text-stone-300">
            Pillarless ballroom with crystal chandeliers, Italian marble floor, and VIP bridal green room.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'room') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2D241E] via-[#3E3128] to-[#1C1612] ${className}`}>
        {/* Luxury Suite Interior Motif */}
        <svg className="absolute inset-0 w-full h-full text-[#C5A880]/20" viewBox="0 0 600 400" preserveAspectRatio="none" fill="none">
          {/* Bed & headboard */}
          <rect x="180" y="180" width="240" height="80" rx="8" fill="currentColor" fillOpacity="0.15" />
          <rect x="160" y="260" width="280" height="100" rx="4" stroke="currentColor" strokeWidth="2" />
          {/* Pillows */}
          <rect x="200" y="210" width="80" height="40" rx="6" stroke="currentColor" strokeWidth="1.5" />
          <rect x="320" y="210" width="80" height="40" rx="6" stroke="currentColor" strokeWidth="1.5" />
          {/* Bedside lamps */}
          <circle cx="120" cy="200" r="16" fill="#C5A880" fillOpacity="0.3" />
          <circle cx="480" cy="200" r="16" fill="#C5A880" fillOpacity="0.3" />
        </svg>

        <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-[#1C1612] via-[#1C1612]/70 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] font-semibold mb-1">
            <span>25+ AC Rooms</span>
            <span>·</span>
            <span>Baraati & Family Stays</span>
          </div>
          <h4 className="text-xl font-serif-royal font-bold text-white mb-1">
            {title || "Deluxe AC Resort Suites"}
          </h4>
          <p className="text-xs text-stone-300">
            Attached modern bathrooms, 24/7 hot water, vanity mirrors, and on-property room service.
          </p>
        </div>
      </div>
    );
  }

  // Catering / Dining
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2D1B17] via-[#42251F] to-[#1A100D] ${className}`}>
      {/* Culinary & Chafing Motif */}
      <svg className="absolute inset-0 w-full h-full text-[#C5A880]/20" viewBox="0 0 600 400" preserveAspectRatio="none" fill="none">
        <circle cx="200" cy="240" r="60" stroke="currentColor" strokeWidth="2" />
        <circle cx="400" cy="240" r="60" stroke="currentColor" strokeWidth="2" />
        <path d="M 160 230 Q 200 180 240 230" stroke="currentColor" strokeWidth="2" />
        <path d="M 360 230 Q 400 180 440 230" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl" />

      <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-[#1A100D] via-[#1A100D]/70 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
        <div className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] font-semibold mb-1">
          <span>Pure Veg & Multi-Cuisine</span>
          <span>·</span>
          <span>Live Food Counters</span>
        </div>
        <h4 className="text-xl font-serif-royal font-bold text-white mb-1">
          {title || "Royal Banquet Catering"}
        </h4>
        <p className="text-xs text-stone-300">
          Live Chaat, Italian pasta, Awadhi curries, and master chef wedding dessert spreads.
        </p>
      </div>
    </div>
  );
};
