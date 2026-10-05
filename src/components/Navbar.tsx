import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { RESORT_INFO, buildWhatsAppUrl } from '../data/resortData.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#top' },
    { label: 'About Us', href: '#about' },
    { label: 'Restaurant', href: '#restaurant' },
    { label: 'AC Rooms', href: '#rooms' },
    { label: 'Venues & Lawn', href: '#venues' },
    { label: 'Price Calculator', href: '#calculator' },
    { label: 'Location', href: '#location' },
  ];

  const quickWhatsAppUrl = buildWhatsAppUrl({
    sourceSection: 'Navbar'
  });

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F291E]/95 backdrop-blur-md shadow-lg border-b border-[#C5A880]/20 py-3'
            : 'bg-gradient-to-b from-[#0F291E]/95 via-[#0F291E]/70 to-transparent py-3.5 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-2.5 text-white group focus:outline-none shrink-0 mr-2 md:mr-6"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-[#C5A880] text-[#0F291E] flex items-center justify-center font-serif-royal font-bold text-base md:text-lg shadow-sm group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-serif-royal font-bold tracking-tight text-white group-hover:text-[#C5A880] transition-colors whitespace-nowrap leading-none">
                Royal Mansion
              </span>
              <span className="text-[10px] text-[#C5A880] tracking-widest uppercase font-medium mt-0.5 hidden sm:inline">
                Lawns & Resort
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links (Sitemap button removed as requested) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs xl:text-sm font-medium text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#C5A880] transition-colors whitespace-nowrap py-1 relative group tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions with clear spacing */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESORT_INFO.phone1Raw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-200 hover:text-white bg-white/5 border border-white/15 rounded-xl hover:border-[#C5A880] transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="tabular-nums">{RESORT_INFO.phone1}</span>
            </a>

            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-[#0F291E] bg-[#C5A880] hover:bg-[#D4BC96] rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-[#0F291E] text-transparent" />
              <span>Book Now</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="fixed top-[60px] inset-x-0 bg-[#0F291E] border-b border-[#C5A880]/20 p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-stone-200 hover:text-[#C5A880] transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href={`tel:${RESORT_INFO.phone1Raw}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-stone-200 flex items-center justify-center gap-2 text-xs font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call {RESORT_INFO.phone1}</span>
                </a>
                <a
                  href={quickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#C5A880] text-[#0F291E] flex items-center justify-center gap-2 text-xs font-bold shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0F291E] text-transparent" />
                  <span>Direct WhatsApp Booking</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
