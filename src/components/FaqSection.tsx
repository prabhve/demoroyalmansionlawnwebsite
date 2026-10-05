import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_LIST, buildWhatsAppUrl } from '../data/resortData.ts';
import { ScrollReveal3D } from './Motion3D.tsx';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5] text-[#1C1F1D] perspective-1000">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F291E]/5 border border-[#0F291E]/10 text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-royal font-bold text-[#0F291E] tracking-tight mb-4 text-balance">
              Everything You Need to Know
            </h2>
            <p className="text-sm md:text-base text-stone-600">
              Clear, transparent details about booking dates, lawn capacity, accommodations, catering, and policies.
            </p>
          </div>
        </ScrollReveal3D>

        {/* Accordions with 3D Depth */}
        <ScrollReveal3D direction="up" delay={0.2}>
          <div className="space-y-3 mb-10">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm transition-all card-3d"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm md:text-base text-[#0F291E] hover:text-[#C5A880] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0F291E]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 md:px-5 md:pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal3D>

        {/* Still Have Questions CTA */}
        <ScrollReveal3D direction="scale" delay={0.3}>
          <div className="text-center p-6 bg-white border border-stone-200 rounded-3xl shadow-md card-3d">
            <h4 className="text-base font-bold text-[#0F291E] mb-1">
              Have a unique question or custom inquiry?
            </h4>
            <p className="text-xs text-stone-500 mb-4">
              Our team is online on WhatsApp to assist with guest lists, decorators, and special event setups.
            </p>
            <a
              href={buildWhatsAppUrl({
                eventType: 'General FAQ Inquiry',
                sourceSection: 'FAQ Section'
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold text-white bg-[#0F291E] hover:bg-[#163E2E] transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </ScrollReveal3D>
      </div>
    </section>
  );
};
