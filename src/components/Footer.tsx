import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Star, ArrowUp, Layout } from 'lucide-react';
import { RESORT_INFO, buildWhatsAppUrl } from '../data/resortData.ts';

interface FooterProps {
  onOpenSitemapModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSitemapModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1811] text-stone-300 pt-16 pb-24 md:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#C5A880] text-[#0F291E] flex items-center justify-center font-serif-royal font-bold text-lg">
                  R
                </div>
                <span className="text-xl font-serif-royal font-bold text-white tracking-tight">
                  Royal Mansion Lawns & Resort
                </span>
              </div>
              <p className="text-xs text-stone-400 max-w-sm mb-6 leading-relaxed">
                Kanpur’s premier destination wedding resort and event lawn. Offering 25,000+ sq.ft. manicured green lawns, crystal AC banquet halls, 25+ luxury rooms, and royal catering on GT Road, Sarsaul.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#C5A880]">
                <Star className="w-3.5 h-3.5 fill-[#C5A880]" />
                <span className="text-white font-semibold">4.0 / 5.0 Rating</span>
                <span className="text-stone-400">· 340+ Verified Reviews</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Offerings
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#about" className="hover:text-[#C5A880] transition-colors">About Us & Hospitality</a>
              </li>
              <li>
                <a href="#restaurant" className="hover:text-[#C5A880] transition-colors">Family Restaurant & Highway Dine-In</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#C5A880] transition-colors">Deluxe AC Rooms & Suites</a>
              </li>
              <li>
                <a href="#venues" className="hover:text-[#C5A880] transition-colors">AC Banquet Hall & Green Lawn</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#C5A880] transition-colors">Interactive Package Cost Estimator</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C5A880] transition-colors">Photo Gallery & Visual Tour</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Location & Reservations
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{RESORT_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Primary: {RESORT_INFO.phone1} / {RESORT_INFO.phone2}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`https://wa.me/${RESORT_INFO.phone1Raw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#C5A880] transition-colors underline"
                >
                  WhatsApp Booking: +91 97248 16565
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{RESORT_INFO.email}</span>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={buildWhatsAppUrl({ sourceSection: 'Footer Instant Booking' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-[#C5A880] hover:bg-[#D4BC96] text-[#0F291E] font-bold text-xs shadow transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#0F291E] text-transparent" />
                <span>Book Now via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Royal Mansion Lawns & Resort, Sarsaul Kanpur. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#location" className="hover:text-stone-300 transition-colors">Google Maps Navigation</a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
