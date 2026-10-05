import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Share2, Phone, MessageCircle, Clock, Check, Car, Route } from 'lucide-react';
import { RESORT_INFO, DISTANCE_GUIDE, TransitPoint, buildWhatsAppUrl } from '../data/resortData.ts';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

export const LocationSection: React.FC = () => {
  const [selectedTransit, setSelectedTransit] = useState<TransitPoint | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESORT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Build live map iframe URL based on selection
  const getMapIframeUrl = () => {
    if (selectedTransit) {
      return `https://maps.google.com/maps?saddr=${encodeURIComponent(selectedTransit.originQuery)}&daddr=26.2958353,80.4834265&hl=en&output=embed`;
    }
    return `https://maps.google.com/maps?q=26.2958353,80.4834265&hl=en&z=15&output=embed`;
  };

  // Google Maps navigation direction URL
  const getDirectionsUrl = (origin?: string) => {
    if (origin) {
      return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${RESORT_INFO.coordinates.lat},${RESORT_INFO.coordinates.lng}`;
    }
    return `https://www.google.com/maps/dir/?api=1&destination=${RESORT_INFO.coordinates.lat},${RESORT_INFO.coordinates.lng}`;
  };

  const handleShareRouteWhatsApp = (transitPoint?: TransitPoint) => {
    const routeText = transitPoint
      ? `Driving Route to Royal Mansion Lawns & Resort from ${transitPoint.destination} (${transitPoint.distance}, ~${transitPoint.time}):\n${getDirectionsUrl(transitPoint.originQuery)}`
      : `Google Maps Location & Directions to Royal Mansion Lawns & Resort (GT Road, Sarsaul Kanpur):\n${getDirectionsUrl()}`;

    const url = `https://wa.me/?text=${encodeURIComponent(routeText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="location" className="py-16 md:py-24 bg-white text-[#1C1F1D] scroll-mt-16 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F291E]/5 border border-[#0F291E]/10 text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-3">
              <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Interactive Real-Time Navigation System</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-royal font-bold text-[#0F291E] tracking-tight mb-4 text-balance">
              Real-Time GPS Route & Highway Guide
            </h2>
            <p className="text-sm md:text-base text-stone-600">
              Click on any transit point below to preview the exact live driving route, distance, estimated travel time, and launch real-time turn-by-turn GPS navigation directly in Google Maps.
            </p>
          </div>
        </ScrollReveal3D>

        {/* Location & Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 5 cols: Address info, Interactive Transit Selector with 3D Depth */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-stone-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-md card-3d">
            <ScrollReveal3D direction="left" delay={0.2}>
              <div>
                {/* Address Header */}
                <div className="flex items-start gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#0F291E] text-white flex items-center justify-center shrink-0 shadow">
                    <MapPin className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif-royal font-bold text-[#0F291E] mb-1">
                      Royal Mansion Lawns & Resort
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {RESORT_INFO.address}
                    </p>
                    <p className="text-xs font-semibold text-[#0F291E] mt-1">
                      Landmark: {RESORT_INFO.highway}
                    </p>
                  </div>
                </div>

                {/* Main Navigation Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  <a
                    href={getDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#0F291E] hover:bg-[#163E2E] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 text-[#C5A880]" />
                    <span>Navigate from My Location</span>
                  </a>

                  <button
                    onClick={handleCopyAddress}
                    className="py-2.5 px-3.5 rounded-xl text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Interactive Transit Routes Selector with 3D items */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#0F291E] flex items-center gap-1.5">
                      <Route className="w-4 h-4 text-[#C5A880]" />
                      <span>Select Place to Preview Live Route</span>
                    </h4>

                    {selectedTransit && (
                      <button
                        onClick={() => setSelectedTransit(null)}
                        className="text-[11px] text-[#C5A880] hover:text-[#0F291E] font-semibold underline cursor-pointer"
                      >
                        Reset Pin
                      </button>
                    )}
                  </div>

                  <div className="space-y-2.5">
                    {DISTANCE_GUIDE.map((guide) => {
                      const isSelected = selectedTransit?.id === guide.id;
                      return (
                        <div
                          key={guide.id}
                          onClick={() => setSelectedTransit(guide)}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col gap-2 card-3d ${
                            isSelected
                              ? 'bg-[#0F291E] text-white border-[#0F291E] shadow-lg ring-1 ring-[#C5A880]'
                              : 'bg-white border-stone-200/90 text-stone-800 hover:border-[#C5A880] hover:bg-stone-50/80 shadow-xs'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Car className={`w-4 h-4 ${isSelected ? 'text-[#C5A880]' : 'text-stone-400'}`} />
                              <span className="font-semibold text-xs leading-snug">
                                {guide.destination}
                              </span>
                            </div>

                            <div className={`text-xs font-bold tabular-nums flex items-center gap-1.5 ${isSelected ? 'text-[#C5A880]' : 'text-[#0F291E]'}`}>
                              <span>{guide.distance}</span>
                              <span>·</span>
                              <span>{guide.time}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px]">
                            <span className={`${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                              {guide.type}
                            </span>

                            <a
                              href={getDirectionsUrl(guide.originQuery)}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className={`inline-flex items-center gap-1 font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                                isSelected
                                  ? 'bg-[#C5A880] text-[#0F291E] hover:bg-[#D4BC96]'
                                  : 'bg-[#0F291E]/5 text-[#0F291E] hover:bg-[#0F291E] hover:text-white'
                              }`}
                            >
                              <Navigation className="w-3 h-3" />
                              <span>Navigate Route →</span>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Operating Hours Note */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-500" />
                  <span>Site visits: 9 AM - 9 PM daily</span>
                </div>
                <a
                  href={`tel:${RESORT_INFO.phone1Raw}`}
                  className="font-semibold text-[#0F291E] hover:underline"
                >
                  Call Front Desk
                </a>
              </div>
            </ScrollReveal3D>
          </div>

          {/* Right 7 cols: Interactive Google Maps Embed with Live Routing and 3D Card */}
          <div className="lg:col-span-7 bg-stone-100 rounded-3xl overflow-hidden border border-stone-200 shadow-xl flex flex-col min-h-[460px] relative card-3d">
            <ScrollReveal3D direction="right" delay={0.3} className="h-full flex flex-col flex-1">
              {/* Real-time active route banner overlay */}
              <div className="p-3.5 bg-[#0F291E] text-white flex flex-wrap items-center justify-between gap-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {selectedTransit ? (
                    <span>
                      Active Route: <strong className="text-[#C5A880]">{selectedTransit.destination}</strong> ➔ <strong>Royal Mansion</strong> ({selectedTransit.distance}, {selectedTransit.time})
                    </span>
                  ) : (
                    <span>
                      Location: <strong className="text-[#C5A880]">Royal Mansion Lawns & Resort</strong> (GT Road, Sarsaul)
                    </span>
                  )}
                </div>

                {selectedTransit && (
                  <button
                    onClick={() => handleShareRouteWhatsApp(selectedTransit)}
                    className="py-1 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#C5A880] text-xs font-semibold inline-flex items-center gap-1 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Share Route on WA</span>
                  </button>
                )}
              </div>

              {/* Dynamic Embedded Google Maps Frame */}
              <iframe
                key={selectedTransit ? selectedTransit.id : 'default-pin'}
                title="Royal Mansion Lawns & Resort Live Route Navigation"
                src={getMapIframeUrl()}
                className="w-full h-full min-h-[420px] border-0 flex-1 bg-stone-200"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Bottom floating map control banner */}
              <div className="p-4 bg-[#0A1F16] text-white flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="font-bold text-[#C5A880]">Google Maps Plus Code: </span>
                  <span className="text-stone-300">7MRMFGWR+89 (Sarsaul, Kanpur)</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedTransit ? getDirectionsUrl(selectedTransit.originQuery) : RESORT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3.5 rounded-xl bg-[#C5A880] text-[#0F291E] text-xs font-bold hover:bg-[#D4BC96] transition-colors inline-flex items-center gap-1.5 shadow-md"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{selectedTransit ? 'Open Live Turn-by-Turn GPS' : 'Open Full Google Map'}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal3D>
          </div>
        </div>
      </div>
    </section>
  );
};
