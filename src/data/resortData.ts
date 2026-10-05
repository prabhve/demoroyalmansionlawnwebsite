export interface VenueSpace {
  id: string;
  name: string;
  shortLabel: string;
  signboardTitle: string;
  tagline: string;
  type: 'lawn' | 'hall' | 'rooms' | 'restaurant';
  capacity: string;
  area: string;
  features: string[];
  description: string;
  idealFor: string[];
  icon: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  source: 'Google Maps' | 'Justdial' | 'WeddingWire';
  rating: number;
  date: string;
  eventType: string;
  comment: string;
  verified: boolean;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface MenuItem {
  category: string;
  items: { name: string; desc: string; price: string; popular?: boolean }[];
}

export const RESORT_INFO = {
  name: "Royal Mansion Lawns & Resort",
  shortName: "Royal Mansion",
  tagline: "Family Restaurant · AC Rooms · AC Banquet Hall · Green Lawn",
  address: "Aarazi no. 228, 2760, 2761, GT Road, Sarsaul, Kanpur Nagar, Uttar Pradesh 209402, India",
  shortAddress: "GT Road, Sarsaul, Kanpur (UP)",
  highway: "Kanpur - Prayagraj Highway (GT Road NH-19)",
  coordinates: {
    lat: 26.2958353,
    lng: 80.4834265
  },
  googleMapsUrl: "https://www.google.com/maps/place/Royal+Mansion+Lawns+%26+Resort/@26.2959545,80.4837338,146a,63.2y,227.76h,96.79t/data=!3m7!1e1!3m5!1sqEMTs2MoNV7hmc0wTVzxHw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-6.7861988166623775%26panoid%3DqEMTs2MoNV7hmc0wTVzxHw%26yaw%3D227.76101285838052!7i16384!8i8192!4m10!3m9!1s0x399c69ee35313335:0x5104e51491f9d85d!5m3!1s2026-10-28!4m1!1i2!8m2!3d26.2958353!4d80.4834265!16s%2Fg%2F11n8_v178c",
  phone1: "+91 97248 16565",
  phone1Raw: "919724816565",
  phone2: "+91 80992 3344",
  phone2Raw: "91809923344",
  email: "info@royalmansionlawns.com",
  rating: 4.0,
  totalReviews: 342,
  operatingHours: "Family Restaurant: 7:00 AM - 11:30 PM | AC Rooms & Events: 24 Hours Open",
  
  // Official Signboard 4 Core Offerings
  signboardOfferings: [
    { title: "FAMILY RESTAURANT", desc: "Pure veg & multi-cuisine highway family dining, thalis, snacks & live parties", color: "#FFD700" },
    { title: "AC ROOM", desc: "Deluxe air-conditioned stay for highway travelers, wedding baraat & family suites", color: "#FFFFFF" },
    { title: "AC BANQUET HALL", desc: "Pillarless centrally cooled ballroom with crystal chandeliers for 500+ guests", color: "#FFD700" },
    { title: "GREEN LAWN", desc: "25,000+ sq.ft. manicured wedding garden with fairy lighting for 1,500+ guests", color: "#FFFFFF" }
  ],

  stats: [
    { label: "Green Lawn Capacity", value: "1,500+ Guests" },
    { label: "AC Banquet Hall", value: "500+ Seater" },
    { label: "AC Deluxe Rooms", value: "25+ Suites" },
    { label: "Family Restaurant", value: "Multi-Cuisine" },
  ]
};

export const RESTAURANT_MENU: MenuItem[] = [
  {
    category: "Royal Thalis & Highway Specials",
    items: [
      { name: "Royal Special Maharaja Thali", desc: "Paneer Lababdar, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Naan, Raita, Salad, Gulab Jamun & Papad", price: "₹280", popular: true },
      { name: "Executive Deluxe Thali", desc: "Shahi Paneer, Dal Tadka, Seasonal Veg, Steamed Rice, 4 Butter Roti, Curd & Sweet", price: "₹210" },
      { name: "Highway Express Breakfast Combo", desc: "Stuffed Aloo/Paneer Paratha (2 pcs) with Fresh White Butter, Curd, Pickle & Masala Chai", price: "₹140", popular: true }
    ]
  },
  {
    category: "Starters & Tandoor Delicacies",
    items: [
      { name: "Paneer Tikka Angara", desc: "Succulent cottage cheese cubes marinated in rich tandoori spices and char-grilled with capsicum & onion", price: "₹240", popular: true },
      { name: "Crispy Corn & Chilli Mushroom", desc: "Golden fried sweet corn and button mushrooms tossed with herbs, spring onion & bell peppers", price: "₹210" },
      { name: "Hara Bhara Kebab (6 pcs)", desc: "Delicate patties made of spinach, green peas and potatoes served with mint chutney", price: "₹180" },
      { name: "Dahi Ke Kebab", desc: "Melt-in-mouth spiced hung curd kebabs with crisp golden coating", price: "₹220" }
    ]
  },
  {
    category: "Main Course & Royal Curries",
    items: [
      { name: "Paneer Butter Masala / Lababdar", desc: "Cottage cheese simmered in rich creamy tomato and cashew butter gravy", price: "₹260", popular: true },
      { name: "Dal Makhani (Slow-Cooked Overnight)", desc: "Black lentils simmered overnight with butter, cream and signature spices", price: "₹210", popular: true },
      { name: "Kadhai Paneer / Mushroom Do Pyaza", desc: "Cottage cheese or mushrooms cooked in spicy freshly ground kadhai masala", price: "₹250" },
      { name: "Dum Aloo Kashmiri / Banarasi", desc: "Baby potatoes slow-cooked in rich aromatic fennel and yogurt gravy", price: "₹190" }
    ]
  },
  {
    category: "Breads, Biryani & Beverages",
    items: [
      { name: "Hyderabadi Veg Dum Biryani", desc: "Fragrant basmati rice layered with spiced vegetables, saffron and fried onions, served with raita", price: "₹220", popular: true },
      { name: "Butter Naan / Garlic Naan / Laccha Paratha", desc: "Fresh from clay tandoor brushed with desi butter", price: "₹45 - ₹65" },
      { name: "Kulhad Masala Chai / Filter Coffee", desc: "Special highway refreshing tea brewed with fresh ginger, cardamom and herbs", price: "₹30" },
      { name: "Royal Kesariya Lassi / Cold Beverage", desc: "Thick sweet lassi topped with malai, dry fruits and saffron", price: "₹80" }
    ]
  }
];

export const ROOM_TYPES = [
  {
    id: "deluxe-ac",
    name: "Deluxe AC Room",
    tagline: "Comfortable air-conditioned stay for highway travelers & small families",
    price: "₹1,800",
    period: "per night",
    capacity: "2 Adults + 1 Child",
    features: [
      "Comfortable King-size double bed with clean linen",
      "Split Air Conditioner with 24/7 Power Backup",
      "Attached modern washroom with hot & cold shower",
      "LED TV with cable channels & High-speed Wi-Fi",
      "Direct room service from Family Restaurant",
      "Secure highway parking on-campus"
    ],
    ideal: "Highway stopover, business visits, wedding guests"
  },
  {
    id: "executive-suite",
    name: "Executive AC Family Suite",
    tagline: "Spacious luxury suite with seating lounge for families",
    price: "₹2,600",
    period: "per night",
    capacity: "3 - 4 Adults",
    features: [
      "King bed + comfortable sofa seating lounge",
      "High-capacity Split AC & 24/7 DG Genset support",
      "Spacious luxury vanity washroom with premium fittings",
      "Work desk, tea/coffee maker & minibar fridge",
      "Full room service and laundry assistance",
      "Complimentary breakfast option from Restaurant"
    ],
    ideal: "Family vacation stay, baraat elders, extended transit"
  },
  {
    id: "bridal-suite",
    name: "Royal Bridal & Groom Suite",
    tagline: "Dedicated opulent vanity suite for bride & groom preparations",
    price: "₹3,500",
    period: "per day/night",
    capacity: "Bride/Groom + Dressing Team",
    features: [
      "High-CRI illuminated beauty & makeup mirror station",
      "Full-length dress mirror with wardrobe & safe storage",
      "Plush lounge seating for makeup artists and family",
      "Ensuite deluxe bathroom with premium amenities",
      "Priority room service and beverage assistance",
      "Direct private access to Banquet Hall & Lawn stage"
    ],
    ideal: "Bridal makeup, groom dressing, wedding photo sessions"
  }
];

export const VENUE_SPACES: VenueSpace[] = [
  {
    id: "family-restaurant",
    name: "Family Restaurant & Highway Dine-In",
    shortLabel: "Family Restaurant",
    signboardTitle: "FAMILY RESTAURANT",
    tagline: "Pure veg & multi-cuisine highway dining with cozy family cabins",
    type: "restaurant",
    capacity: "120+ Indoor & Garden Dine-In",
    area: "3,000 sq. ft. Restaurant + Lawn Patio",
    features: [
      "Full multi-cuisine menu (North Indian, Thalis, Tandoor, Chinese)",
      "Dedicated air-conditioned family cabins & fast highway service",
      "Special Breakfast, Lunch & Dinner Combos on GT Road (NH-19)",
      "Clean, sanitized washrooms & ample 200+ car parking",
      "Party dine-in bookings for birthdays, kitty parties & family get-togethers"
    ],
    description: "Our signature Family Restaurant is the most popular highway food stop on the Kanpur-Prayagraj corridor. Serving mouthwatering Maharaja Thalis, sizzling tandoori starters, aromatic biryanis, and kulhad chai in a pristine air-conditioned ambiance.",
    idealFor: ["Highway Travelers", "Family Dinners", "Birthday Parties", "Kitty Parties", "Breakfast Stopovers"],
    icon: "UtensilsCrossed"
  },
  {
    id: "ac-rooms-space",
    name: "Deluxe AC Rooms & Suites",
    shortLabel: "Deluxe AC Rooms",
    signboardTitle: "AC ROOM",
    tagline: "Spotless air-conditioned rooms on GT Road with 24/7 power backup",
    type: "rooms",
    capacity: "25+ Deluxe Rooms (100+ Guests)",
    area: "Deluxe, Executive & Bridal Suites",
    features: [
      "Plush king-size beds with clean sanitized linens",
      "Independent Split ACs backed by heavy-duty 24/7 DG Genset",
      "Spacious modern attached washrooms with 24/7 hot water",
      "Direct room service from in-house Family Restaurant",
      "Dedicated Bridal Vanity Suite with high-CRI makeup mirrors"
    ],
    description: "25+ well-appointed air-conditioned rooms on property. Perfect for outstation wedding baraatis, family stays during multi-day celebrations, and transit travelers seeking restful, secure night stays on GT Road.",
    idealFor: ["Baraat Stay", "Wedding Families", "Highway Night Halt", "Transit Guests"],
    icon: "Bed"
  },
  {
    id: "crystal-hall",
    name: "Crystal AC Banquet Hall",
    shortLabel: "AC Banquet Hall",
    signboardTitle: "AC BANQUET HALL",
    tagline: "Pillarless air-conditioned elegance with royal crystal chandeliers",
    type: "hall",
    capacity: "350 - 600 Guests",
    area: "8,500 sq. ft.",
    features: [
      "100% Centralized high-capacity Air Conditioning",
      "Pillarless architectural design for unobstructed viewing",
      "Ornate crystal chandeliers with ambient dimmer presets",
      "Integrated acoustic audio wiring & stage setup",
      "Adjoining VIP lounge & bridal vanity green room"
    ],
    description: "An opulent indoor banquet hall finished with Italian marble flooring, majestic gold accents, and acoustic treatment. Perfect for pre-wedding rituals, ring ceremonies, corporate banquets, and all-weather celebrations.",
    idealFor: ["Ring Ceremonies", "Tilak & Roka", "Haldi & Mehendi", "Corporate Conferences", "Birthdays"],
    icon: "Building2"
  },
  {
    id: "grand-lawn",
    name: "The Grand Green Lawn",
    shortLabel: "Green Lawn",
    signboardTitle: "GREEN LAWN",
    tagline: "Vast open-air manicured lawns for magnificent wedding galas",
    type: "lawn",
    capacity: "1,200 - 1,800 Guests",
    area: "25,000+ sq. ft.",
    features: [
      "Lush natural grass with premium laser leveling",
      "Grand floral mandap stage & ramp runway setup",
      "Spectacular fairy-light canopy & ambient tree illumination",
      "Dedicated food court & live catering promenade",
      "Uninterrupted 100% DG Genset power backup"
    ],
    description: "The crown jewel of Royal Mansion, featuring an expansive landscaped lush lawn capable of hosting lavish destination weddings, sangeet nights, and regal receptions with enchanting night lighting under open skies.",
    idealFor: ["Weddings", "Grand Receptions", "Sangeet & Musical Nights", "Mega Social Gatherings"],
    icon: "TreePine"
  }
];

export const AMENITIES: AmenityItem[] = [
  {
    id: "restaurant-amenity",
    title: "On-Site Family Restaurant & Highway Dine-In",
    description: "Pure veg and multi-cuisine restaurant serving thalis, starters, curries, and snacks with 24/7 room service.",
    iconName: "Utensils",
    badge: "Open Daily"
  },
  {
    id: "power-backup",
    title: "100% 24/7 Genset Power Backup",
    description: "Heavy-duty dual automatic generators ensuring zero interruption to stage lighting, sound, and AC systems.",
    iconName: "Zap",
    badge: "Essential"
  },
  {
    id: "parking",
    title: "Secure Parking for 200+ Cars",
    description: "Spacious paved and dedicated on-site parking with valet assistance, security guards, and full CCTV monitoring.",
    iconName: "Car",
    badge: "200+ Capacity"
  },
  {
    id: "bridal-room",
    title: "Dedicated Bridal & Groom Dressing Suites",
    description: "Exclusive air-conditioned vanity suites with high-CRI makeup mirrors, attached luxury washrooms, and wardrobe storage.",
    iconName: "Sparkles",
    badge: "Complimentary"
  },
  {
    id: "ac-rooms",
    title: "25+ Deluxe AC Guest Rooms",
    description: "Modern furnished resort suites on-campus so your family and out-of-town guests stay together comfortably.",
    iconName: "BedDouble"
  },
  {
    id: "sound-stage",
    title: "Stage & DJ Infrastructure",
    description: "Pre-wired elevated stages, truss mounting points, and three-phase power for grand DJ setups, live bands, and orchestra.",
    iconName: "Music"
  },
  {
    id: "decor",
    title: "Customized Theme & Floral Decor",
    description: "In-house design team for Maharaja mandaps, fairy light entrance tunnels, photobooths, and bespoke flower styling.",
    iconName: "Palette"
  },
  {
    id: "security",
    title: "Round-the-Clock Security & CCTV",
    description: "Trained security personnel, boundary surveillance, and emergency protocols ensuring absolute safety for your family.",
    iconName: "ShieldCheck"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Abhishek Srivastava",
    source: "Google Maps",
    rating: 5,
    date: "February 2026",
    eventType: "Sister's Grand Wedding",
    comment: "Attended my sister's wedding at Royal Mansion Lawns & Resort. The lawn area is truly massive and the entrance decoration was breathtaking. The staff was very humble and supportive throughout the night. Best venue in the Sarsaul-Kanpur highway belt!",
    verified: true
  },
  {
    id: "rev-2",
    author: "Dr. Saurabh Mishra",
    source: "Justdial",
    rating: 5,
    date: "December 2025",
    eventType: "Family Reception & Stay",
    comment: "Superb ambiance and soothing atmosphere. Having 25+ AC rooms right on property made accommodating our outstation baraat very convenient. The food at the family restaurant was top-notch with delicious chaat and paneer dishes.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Prashant Gaur",
    source: "Google Maps",
    rating: 4,
    date: "November 2025",
    eventType: "Highway Dining & Room Stay",
    comment: "Stopped during Kanpur-Prayagraj drive at their Family Restaurant. Amazing thali and quick service. The AC rooms are clean, well-cooled with hot water and safe parking. Highly recommended highway resort!",
    verified: true
  },
  {
    id: "rev-4",
    author: "Anjali & Vikram Verma",
    source: "Google Maps",
    rating: 5,
    date: "January 2026",
    eventType: "Destination Wedding (2 Days)",
    comment: "We booked Royal Mansion for a complete 2-day wedding (Mehendi + Haldi + Main Wedding). Everything from stage lighting to restaurant breakfast and dinner buffet was coordinated with precision. Highly recommended!",
    verified: true
  }
];

export interface TransitPoint {
  id: string;
  destination: string;
  distance: string;
  time: string;
  type: string;
  originQuery: string;
  description: string;
}

export const DISTANCE_GUIDE: TransitPoint[] = [
  {
    id: "sarsaul-market",
    destination: "Sarsaul Market / Highway Hub",
    distance: "1.2 km",
    time: "3 mins",
    type: "Local Hub",
    originQuery: "Sarsaul Market, GT Road, Kanpur",
    description: "Immediate local market hub with retail and local transport"
  },
  {
    id: "maharajpur",
    destination: "Maharajpur Kanpur",
    distance: "8.5 km",
    time: "10 mins",
    type: "Town Suburb",
    originQuery: "Maharajpur, Kanpur Nagar, Uttar Pradesh",
    description: "Fast 10-min drive via NH-19 / GT Road 4-lane highway"
  },
  {
    id: "chakeri-airport",
    destination: "Chakeri Airport Kanpur (KNU)",
    distance: "21 km",
    time: "25 mins",
    type: "Airport Transit",
    originQuery: "Kanpur Airport, Chakeri, Kanpur",
    description: "Direct highway route connecting flight passengers to the resort"
  },
  {
    id: "kanpur-central",
    destination: "Kanpur Central Railway Station",
    distance: "28 km",
    time: "35 mins",
    type: "Railway Station",
    originQuery: "Kanpur Central Railway Station, Kanpur",
    description: "Direct connectivity via GT Road / NH-19 corridor for outstation guests"
  },
  {
    id: "fatehpur-road",
    destination: "Fatehpur / Bindki Road",
    distance: "42 km",
    time: "45 mins",
    type: "Highway Connect",
    originQuery: "Fatehpur, Uttar Pradesh",
    description: "Straight 4-lane NH-19 corridor from Fatehpur district"
  },
  {
    id: "prayagraj-route",
    destination: "Prayagraj (Allahabad) Route",
    distance: "165 km",
    time: "2.5 hrs",
    type: "Direct Corridor",
    originQuery: "Prayagraj, Uttar Pradesh",
    description: "Direct NH-19 (GT Road) four-lane express highway stretch"
  },
];

export const FAQ_LIST = [
  {
    q: "Is the Family Restaurant open to highway travelers without event booking?",
    a: "Yes! Our Family Restaurant is fully open daily from 7:00 AM to 11:30 PM for highway travelers on GT Road, local families, and tourists. We serve breakfast combos, Maharaja Thalis, Tandoori starters, curries, and beverages with clean restrooms and secure parking."
  },
  {
    q: "Can I book AC Rooms for an overnight highway stopover or family stay?",
    a: "Absolutely. We offer 25+ Deluxe AC Rooms available 24/7 for highway transit stays, family halts, and wedding parties. You can book rooms directly via WhatsApp (+91 97248 16565) or phone call."
  },
  {
    q: "What is the guest capacity of the Green Lawn and AC Banquet Hall?",
    a: "Our Green Lawn can host 1,500+ guests for mega weddings and receptions, while the indoor AC Banquet Hall comfortably accommodates 350 to 600 guests for indoor ceremonies, ring ceremonies, and conferences."
  },
  {
    q: "Is there 100% power backup available during events?",
    a: "Yes, the property is equipped with heavy-duty dual automatic DG Gensets ensuring continuous, uninterrupted power for air conditioning, lighting, and sound systems."
  },
  {
    q: "How can I book a wedding date or table at the restaurant?",
    a: "Click any 'Book on WhatsApp' button on the website to connect instantly with our manager at +91 97248 16565. We will verify availability and share custom packages immediately."
  }
];

export function buildWhatsAppUrl(params: {
  eventType?: string;
  date?: string;
  guestCount?: string;
  name?: string;
  phone?: string;
  roomsNeeded?: string;
  message?: string;
  sourceSection?: string;
}): string {
  const parts = [
    `*Hello Royal Mansion Lawns & Resort (Sarsaul Kanpur),*`,
    `I am inquiring about booking / services at your property.`,
    ``,
    params.eventType ? `• *Service / Event:* ${params.eventType}` : `• *Inquiry:* Booking & Availability`,
    params.date ? `• *Target Date / Check-In:* ${params.date}` : '',
    params.guestCount ? `• *Guests / Pax:* ${params.guestCount}` : '',
    params.roomsNeeded ? `• *AC Rooms / Stay:* ${params.roomsNeeded}` : '',
    params.name ? `• *Name:* ${params.name}` : '',
    params.phone ? `• *Contact Phone:* ${params.phone}` : '',
    params.message ? `• *Details / Order Notes:* ${params.message}` : '',
    ``,
    `Please confirm availability, rates, and share details.`
  ].filter(line => line !== '');

  const text = encodeURIComponent(parts.join('\n'));
  return `https://wa.me/${RESORT_INFO.phone1Raw}?text=${text}`;
}
