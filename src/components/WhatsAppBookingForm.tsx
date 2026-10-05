import React, { useState } from 'react';
import { MessageCircle, Phone, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { RESORT_INFO, buildWhatsAppUrl } from '../data/resortData.ts';
import { ScrollReveal3D, TiltCard3D } from './Motion3D.tsx';

export const WhatsAppBookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [eventType, setEventType] = useState('Grand Wedding (Lawn + Banquet Hall)');
  const [guests, setGuests] = useState('500 - 800 Guests');
  const [rooms, setRooms] = useState('10 AC Deluxe Rooms');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const url = buildWhatsAppUrl({
      name,
      phone,
      date: date || 'Date discussed in chat',
      eventType,
      guestCount: guests,
      roomsNeeded: rooms,
      message,
      sourceSection: 'Dedicated Booking Form'
    });

    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0F291E] text-white relative overflow-hidden scroll-mt-16 perspective-1000">
      {/* Background motif */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 5 cols: Value Prop, Direct Contact Details with 3D Reveal */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal3D direction="left" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C5A880]/30 text-xs font-semibold text-[#C5A880] uppercase tracking-wider mb-4 w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Reservations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif-royal font-bold text-white tracking-tight mb-4 leading-tight text-balance">
                Reserve Your Auspicious Date Directly
              </h2>

              <p className="text-sm md:text-base text-stone-300 mb-8 leading-relaxed">
                Skip intermediaries and third-party fees. Fill out your event details below to initiate a direct WhatsApp conversation with our General Manager. We confirm date availability within minutes.
              </p>

              {/* Direct Contact Cards with 3D Tilt */}
              <div className="space-y-4 mb-8">
                <TiltCard3D maxTilt={4}>
                  <a
                    href={`https://wa.me/${RESORT_INFO.phone1Raw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#163E2E] border border-white/10 hover:border-[#C5A880] transition-colors flex items-center justify-between group shadow-lg card-3d block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#C5A880] text-[#0F291E] flex items-center justify-center font-bold shadow">
                        <MessageCircle className="w-5 h-5 fill-[#0F291E] text-transparent" />
                      </div>
                      <div>
                        <div className="text-xs text-[#C5A880] font-semibold">Primary WhatsApp & Reservations</div>
                        <div className="text-sm font-bold text-white tabular-nums">{RESORT_INFO.phone1}</div>
                      </div>
                    </div>
                    <span className="text-xs text-stone-300 font-medium group-hover:text-[#C5A880] transition-colors">
                      Chat Now →
                    </span>
                  </a>
                </TiltCard3D>

                <TiltCard3D maxTilt={4}>
                  <a
                    href={`tel:${RESORT_INFO.phone2Raw}`}
                    className="p-4 rounded-2xl bg-[#163E2E] border border-white/10 hover:border-[#C5A880] transition-colors flex items-center justify-between group shadow-lg card-3d block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shadow">
                        <Phone className="w-5 h-5 text-[#C5A880]" />
                      </div>
                      <div>
                        <div className="text-xs text-stone-400 font-medium">Alternative Front Desk</div>
                        <div className="text-sm font-bold text-white tabular-nums">{RESORT_INFO.phone2}</div>
                      </div>
                    </div>
                    <span className="text-xs text-stone-300 font-medium group-hover:text-[#C5A880] transition-colors">
                      Call Line →
                    </span>
                  </a>
                </TiltCard3D>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Official venue managed by Royal Mansion Lawns & Resort</span>
              </div>
            </ScrollReveal3D>
          </div>

          {/* Right 7 cols: Interactive Form with 3D Depth */}
          <div className="lg:col-span-7">
            <ScrollReveal3D direction="right" delay={0.2}>
              <TiltCard3D maxTilt={4}>
                <div className="bg-[#163E2E]/95 border border-[#C5A880]/40 rounded-3xl p-6 md:p-8 shadow-2xl card-3d">
                  <h3 className="text-xl font-serif-royal font-bold text-white mb-2">
                    Send Date Inquiry to WhatsApp
                  </h3>
                  <p className="text-xs text-stone-300 mb-6">
                    Your inquiry will be formatted and loaded directly into WhatsApp on your phone or desktop.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., Rajesh Sharma"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#0F291E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors placeholder:text-stone-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g., +91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-[#0F291E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors placeholder:text-stone-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                          Target Event Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-[#0F291E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                          Event Type
                        </label>
                        <select
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="w-full bg-[#0F291E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                        >
                          <option value="Grand Wedding (Lawn + Banquet Hall)">Grand Wedding (Lawn + Hall)</option>
                          <option value="Reception Gala">Reception Gala</option>
                          <option value="Ring Ceremony / Sagai / Roka">Ring Ceremony / Sagai / Roka</option>
                          <option value="Sangeet / Mehendi / Haldi Night">Sangeet / Mehendi / Haldi</option>
                          <option value="Birthday / Anniversary Gala">Birthday / Anniversary Gala</option>
                          <option value="Corporate Offsite & Conference">Corporate Offsite & Conference</option>
                          <option value="Resort Stay & Room Block">Resort Stay & Room Block</option>
                          <option value="Family Restaurant Party Dine-In">Family Restaurant Party Dine-In</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                          Estimated Guests
                        </label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full bg-[#0F291E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                        >
                          <option value="100 - 300 Guests">100 - 300 Guests</option>
                          <option value="300 - 600 Guests">300 - 600 Guests</option>
                          <option value="600 - 1,000 Guests">600 - 1,000 Guests</option>
                          <option value="1,000 - 1,800+ Guests">1,000 - 1,800+ Guests</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                          AC Rooms for Family / Baraat
                        </label>
                        <select
                          value={rooms}
                          onChange={(e) => setRooms(e.target.value)}
                          className="w-full bg-[#0F291E] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                        >
                          <option value="0 Rooms (Venue Only)">No Rooms (Event Only)</option>
                          <option value="2 - 5 AC Rooms (Bridal / Immediate Family)">2 - 5 AC Rooms</option>
                          <option value="10 AC Deluxe Rooms (Standard Wedding)">10 AC Deluxe Rooms</option>
                          <option value="15 - 25 AC Suites (Full Resort Block)">15 - 25 AC Suites (Full Resort)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                        Special Notes / Catering Preferences (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g., Pure veg catering required with live pasta & chaat counters, evening function..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-[#0F291E] border border-white/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors placeholder:text-stone-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm md:text-base text-[#0F291E] bg-[#C5A880] hover:bg-[#D4BC96] shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-[#0F291E] text-transparent" />
                      <span>Redirect to WhatsApp with Details</span>
                    </button>

                    {submitted && (
                      <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-fade-in">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Redirecting to WhatsApp (+91 97248 16565)... If popup was blocked, click button above.</span>
                      </div>
                    )}
                  </form>
                </div>
              </TiltCard3D>
            </ScrollReveal3D>
          </div>
        </div>
      </div>
    </section>
  );
};
