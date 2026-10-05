import React, { useState } from 'react';
import { Utensils, MessageCircle } from 'lucide-react';
import { RESTAURANT_MENU, RESORT_INFO, buildWhatsAppUrl } from '../data/resortData.ts';
import { ScrollReveal3D } from './Motion3D.tsx';

export const RestaurantSection: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const selectedCategory = RESTAURANT_MENU[activeCategoryIdx] || RESTAURANT_MENU[0];

  const handleOrderWhatsApp = (itemName?: string) => {
    const message = itemName
      ? `Hi Royal Mansion Restaurant, I would like to order / inquire about: ${itemName}`
      : `Hi Royal Mansion Restaurant, I would like to reserve a family dining table / order food.`;

    const url = buildWhatsAppUrl({
      eventType: 'Family Restaurant & Highway Dine-In',
      message,
      sourceSection: 'Restaurant Section'
    });
    window.open(url, '_blank');
  };

  return (
    <section id="restaurant" className="py-16 md:py-24 bg-[#FAF8F5] text-[#1C1F1D] scroll-mt-16 relative perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal3D direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F291E]/5 border border-[#0F291E]/10 text-xs font-semibold text-[#0F291E] uppercase tracking-wider mb-3">
              <Utensils className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Highway Dining & Multi-Cuisine</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-royal font-bold text-[#0F291E] tracking-tight mb-4 text-balance">
              Royal Mansion Family Restaurant
            </h2>
            <p className="text-sm md:text-base text-stone-600">
              The prime culinary stopover on the Kanpur–Prayagraj GT Road. Serving fresh Maharaja Thalis, sizzling tandoori starters, aromatic North Indian curries, and refreshing kulhad chai in a pristine air-conditioned setting.
            </p>
          </div>
        </ScrollReveal3D>

        {/* Quick Highlights Strip with 3D animation */}
        <ScrollReveal3D direction="up" delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {[
              { label: 'Operating Hours', val: '7:00 AM - 11:30 PM', sub: 'Breakfast to Dinner' },
              { label: 'Kitchen Standard', val: '100% Pure Veg', sub: 'Hygienic RO Water' },
              { label: 'Highway Amenities', val: '200+ Car Parking', sub: 'Clean Restrooms' },
              { label: 'Party Dining', val: '120+ Dine-In', sub: 'AC Family Cabins' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-stone-200 p-4 rounded-2xl shadow-sm text-center card-3d">
                <div className="text-xs text-stone-500 font-medium mb-0.5">{item.label}</div>
                <div className="text-sm md:text-base font-bold text-[#0F291E]">{item.val}</div>
                <div className="text-[11px] text-[#C5A880] font-semibold">{item.sub}</div>
              </div>
            ))}
          </div>
        </ScrollReveal3D>

        {/* Menu Showcase Grid */}
        <ScrollReveal3D direction="scale" delay={0.3}>
          <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xl card-3d">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6 mb-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#C5A880] tracking-wider">
                  Explore Popular Dishes
                </span>
                <h3 className="text-xl md:text-2xl font-serif-royal font-bold text-[#0F291E]">
                  Chef's Signature Menu
                </h3>
              </div>

              {/* Category Selector */}
              <div className="flex flex-wrap gap-2">
                {RESTAURANT_MENU.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategoryIdx(idx)}
                    className={`py-2 px-3.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeCategoryIdx === idx
                        ? 'bg-[#0F291E] text-white shadow-sm'
                        : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                    }`}
                  >
                    {cat.category.split('&')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items List with 3D Depth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {selectedCategory.items.map((dish, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 hover:border-[#C5A880] transition-all flex items-start justify-between gap-4 group card-3d"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                      <h4 className="text-sm font-bold text-[#0F291E] group-hover:text-[#C5A880] transition-colors">
                        {dish.name}
                      </h4>
                      {dish.popular && (
                        <span className="text-[10px] font-bold text-[#0F291E] bg-amber-200 px-2 py-0.5 rounded-full">
                          Must Try
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="text-sm font-bold text-[#0F291E] tabular-nums bg-white px-2.5 py-1 rounded-lg border border-stone-200 shadow-sm">
                      {dish.price}
                    </span>
                    <button
                      onClick={() => handleOrderWhatsApp(dish.name)}
                      className="text-[11px] font-semibold text-[#0F291E] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Order via WA</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Restaurant CTA Banner */}
            <div className="bg-[#0F291E] text-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <h4 className="text-base sm:text-lg font-serif-royal font-bold text-white mb-1">
                  Planning a Family Dinner, Kitty Party or Highway Stopover?
                </h4>
                <p className="text-xs text-stone-300">
                  Reserve your air-conditioned family dining table in advance or place takeaway food orders directly on WhatsApp.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                <a
                  href={buildWhatsAppUrl({
                    eventType: 'Family Restaurant Table Reservation',
                    message: 'Hi, I would like to reserve a table / order food at Royal Mansion Family Restaurant on GT Road Sarsaul.',
                    sourceSection: 'Restaurant Banner'
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-[#0F291E] bg-[#C5A880] hover:bg-[#D4BC96] transition-all shadow-md active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0F291E] text-transparent" />
                  <span>Reserve Table / Order on WhatsApp</span>
                </a>

                <a
                  href={`tel:${RESORT_INFO.phone1Raw}`}
                  className="py-3 px-4 rounded-xl text-xs sm:text-sm font-medium text-stone-200 bg-white/10 hover:bg-white/20 transition-colors inline-flex items-center justify-center"
                >
                  Call Front Desk
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal3D>
      </div>
    </section>
  );
};
