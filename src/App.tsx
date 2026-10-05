/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SignboardBanner } from './components/SignboardBanner.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { RestaurantSection } from './components/RestaurantSection.tsx';
import { RoomsSection } from './components/RoomsSection.tsx';
import { VenuesSection } from './components/VenuesSection.tsx';
import { EventCalculator } from './components/EventCalculator.tsx';
import { AmenitiesSection } from './components/AmenitiesSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { WhatsAppBookingForm } from './components/WhatsAppBookingForm.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { MobileStickyBar } from './components/MobileStickyBar.tsx';
import { Footer } from './components/Footer.tsx';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from './data/resortData.ts';

export default function App() {
  const floatingWhatsAppUrl = buildWhatsAppUrl({
    sourceSection: 'Floating Desktop Button'
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1F1D] flex flex-col selection:bg-[#C5A880]/30 selection:text-[#0F291E]">
      {/* 1. Top Navigation Bar (Clean & spacious) */}
      <Navbar />

      {/* Main Content Sections - Well-Managed & Flowing */}
      <main className="flex-1">
        {/* 1.0 Hero with instant date availability check */}
        <Hero />

        {/* 2.0 Signboard 4-Pillar Showcase (Family Restaurant, AC Room, AC Banquet Hall, Green Lawn) */}
        <SignboardBanner />

        {/* 3.0 About Us: Story, Vision, Pillars & Acreage on GT Road */}
        <AboutSection />

        {/* 4.0 Family Restaurant & Highway Dine-In */}
        <RestaurantSection />

        {/* 5.0 Deluxe AC Rooms & Highway Suites */}
        <RoomsSection />

        {/* 6.0 Venues & Spaces: Grand Green Lawn & Crystal AC Banquet Hall */}
        <VenuesSection />

        {/* 7.0 Interactive Wedding Package & Budget Calculator */}
        <EventCalculator />

        {/* 8.0 Resort Amenities & Infrastructure */}
        <AmenitiesSection />

        {/* 9.0 Photo Gallery & 360° Visualizer */}
        <GallerySection />

        {/* 10.0 Real Customer Reviews from Google Maps & Justdial (4.0 ★) */}
        <ReviewsSection />

        {/* 11.0 Location, Distance Guide & Interactive Google Maps Embed */}
        <LocationSection />

        {/* 12.0 Dedicated WhatsApp Direct Booking Form */}
        <WhatsAppBookingForm />

        {/* 13.0 Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Quiet Refined Footer */}
      <Footer />

      {/* Mobile-Only Sticky Floating Action Bar (<15% mobile viewport height) */}
      <MobileStickyBar />

      {/* Desktop Floating WhatsApp Quick Button */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 bg-[#25D366] text-white py-3 px-5 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-105 transition-all duration-200 group"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5 fill-white text-transparent" />
        <span className="text-xs font-bold tracking-wide">
          Book on WhatsApp
        </span>
      </a>
    </div>
  );
}
