import React from 'react';
import { Star, MessageCircle, ShieldCheck, ThumbsUp } from 'lucide-react';
import { REVIEWS, RESORT_INFO, buildWhatsAppUrl } from '../data/resortData.ts';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FAF8F5] text-[#1C1F1D] perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F291E]/5 border border-[#0F291E]/10 text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
              <span>Guest Trust & Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-royal font-bold text-[#0F291E] tracking-tight mb-4 text-balance">
              Cherished by Families Across Kanpur & UP
            </h2>
            <p className="text-sm md:text-base text-stone-600">
              Real feedback from families who hosted their dream weddings, sangeet nights, and grand celebrations at Royal Mansion Lawns & Resort.
            </p>
          </div>
        </ScrollReveal3D>

        {/* Aggregated Rating Card with 3D Depth */}
        <ScrollReveal3D direction="scale" delay={0.2}>
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-6 card-3d">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#0F291E] text-white flex flex-col items-center justify-center shadow-lg shrink-0">
                <span className="text-3xl font-serif-royal font-bold text-[#C5A880] tabular-nums">4.0</span>
                <span className="text-[10px] text-stone-300 font-medium">out of 5.0</span>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4
                          ? 'fill-[#C5A880] text-[#C5A880]'
                          : 'text-stone-300 fill-stone-100'
                      }`}
                    />
                  ))}
                </div>
                <h4 className="text-base font-bold text-[#0F291E]">
                  Over 340+ Verified Customer Ratings
                </h4>
                <p className="text-xs text-stone-500">
                  Consistently rated for grand lawn ambiance, polite staff, and reliable event support.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={RESORT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial py-2.5 px-4 rounded-xl text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <ThumbsUp className="w-3.5 h-3.5 text-blue-600" />
                <span>View Google Reviews</span>
              </a>
              <a
                href={buildWhatsAppUrl({
                  eventType: 'Direct Consultation & Reviews Inquiry',
                  sourceSection: 'Reviews Header'
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#0F291E] hover:bg-[#163E2E] transition-all inline-flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
                <span>Ask a Question</span>
              </a>
            </div>
          </div>
        </ScrollReveal3D>

        {/* Reviews Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev, idx) => (
            <ScrollReveal3D key={rev.id} direction="up" delay={0.15 * (idx + 1)}>
              <TiltCard3D maxTilt={5} className="h-full">
                <div
                  className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all h-full card-3d"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-medium text-stone-500">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Verified via {rev.source}</span>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-2">
                      {rev.eventType}
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-6">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0F291E]">{rev.author}</span>
                    <span className="text-stone-400">{rev.date}</span>
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
