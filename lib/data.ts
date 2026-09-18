export interface Package {
  slug: string;
  title: string;
  duration: string;
  priceRange: string;
  image: string;
  summary: string;
  inclusions: string[];
  highlights: string[];
  destinations: string[];
  badge?: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  tag: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const destinations: Destination[] = [
  {
    id: 'dal-lake',
    name: 'Dal Lake',
    image:
      'https://images.unsplash.com/photo-1569852837213-00d97a707a83?auto=format&fit=crop&w=900&q=70',
    tag: 'Iconic Srinagar shikara rides & houseboats',
  },
  {
    id: 'pahalgam',
    name: 'Pahalgam',
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=70',
    tag: 'Lidder river, Aru Valley & Betaab Valley',
  },
  {
    id: 'gulmarg',
    name: 'Gulmarg',
    image:
      'https://images.unsplash.com/photo-1606117331085-5760e3b58520?auto=format&fit=crop&w=900&q=70',
    tag: 'Gondola rides, snow & meadow walks',
  },
  {
    id: 'sonamarg',
    name: 'Sonamarg',
    image:
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=70',
    tag: 'Meadow of gold, Thajiwas Glacier',
  },
  {
    id: 'gurez-valley',
    name: 'Gurez Valley',
    image:
      'https://images.unsplash.com/photo-1708186320869-0a527e67023d?auto=format&fit=crop&w=900&q=70',
    tag: 'Off-beaten, pristine valley & Habba Khatoon',
  },
  {
    id: 'wular-lake',
    name: 'Wular Lake',
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=900&q=70',
    tag: 'Asia’s largest freshwater lake',
  },
  {
    id: 'doodhpathri',
    name: 'Doodhpathri',
    image:
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=900&q=70',
    tag: 'Meadow of milk, day excursions',
  },
  {
    id: 'katra-vaishnodevi',
    name: 'Katra – Vaishno Devi',
    image:
      'https://images.unsplash.com/photo-1719377678477-0fb3638ec482?auto=format&fit=crop&w=900&q=70',
    tag: 'Pilgrimage & family-friendly add-on',
  },
  {
    id: 'leh-ladakh',
    name: 'Leh – Ladakh',
    image:
      'https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?auto=format&fit=crop&w=900&q=70',
    tag: 'High-altitude desert & Pangong Lake',
  },
];

export const packages: Package[] = [
  {
    slug: 'kashmir-family-holiday',
    title: 'Kashmir Family Holiday',
    duration: '6N / 7D',
    priceRange: '₹15,000 – ₹23,000',
    image:
      'https://images.unsplash.com/photo-1569852837213-00d97a707a83?auto=format&fit=crop&w=1200&q=70',
    summary:
      'A relaxed family-friendly loop covering Srinagar, Gulmarg, and Pahalgam with private cab and houseboat stay.',
    inclusions: ['Hotel & Houseboat', 'Breakfast & Dinner', 'Private Cab', 'Sightseeing'],
    highlights: [
      'Day 1: Arrival Srinagar — transfer to houseboat',
      'Day 2: Gulmarg day excursion (Gondola optional)',
      'Day 3: Pahalgam transfer via saffron fields',
      'Day 4: Aru, Betaab & Chandanwari',
      'Day 5: Shankaracharya & Mughal Gardens',
      'Day 6: Sonamarg day trip',
      'Day 7: Departure',
    ],
    destinations: ['dal-lake', 'gulmarg', 'pahalgam', 'sonamarg'],
    badge: 'Most Booked',
  },
  {
    slug: 'srinagar-pahalgam-classic',
    title: 'Srinagar Trip with Pahalgam',
    duration: '6N / 7D',
    priceRange: '₹20,000 – ₹25,000',
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=70',
    summary:
      'A classic Srinagar + Pahalgam circuit with shikara rides, Mughal gardens, and the Lidder valley.',
    inclusions: ['Hotel & Houseboat', 'Breakfast & Dinner', 'Private Cab', 'Sightseeing'],
    highlights: [
      'Day 1: Srinagar arrival & houseboat check-in',
      'Day 2: Local Srinagar sightseeing + shikara ride',
      'Day 3: Drive to Pahalgam',
      'Day 4: Aru, Betaab & Chandanwari excursion',
      'Day 5: Lidder river walks & local market',
      'Day 6: Return to Srinagar — free evening',
      'Day 7: Departure transfer',
    ],
    destinations: ['dal-lake', 'pahalgam'],
  },
  {
    slug: 'leh-ladakh-expedition',
    title: 'Kashmir Leh Ladakh Trip',
    duration: '9N / 10D',
    priceRange: '₹30,000 – ₹50,000',
    image:
      'https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?auto=format&fit=crop&w=1200&q=70',
    summary:
      'The grand Kashmir + Ladakh expedition — Sonamarg, Kargil, Leh, Nubra, and Pangong.',
    inclusions: ['Hotels & Camps', 'Breakfast & Dinner', 'SUV Cab', 'Permits & Sightseeing'],
    highlights: [
      'Day 1: Srinagar arrival',
      'Day 2: Sonamarg — drive to Kargil',
      'Day 3: Kargil — Lamayuru — Leh',
      'Day 4: Leh acclimatisation + Shanti Stupa',
      'Day 5: Leh local — monasteries',
      'Day 6: Nubra Valley via Khardung La',
      'Day 7: Hunder sand dunes & Diskit',
      'Day 8: Pangong Lake day',
      'Day 9: Return to Leh',
      'Day 10: Fly out / drive to Srinagar',
    ],
    destinations: ['sonamarg', 'leh-ladakh', 'dal-lake'],
    badge: 'Adventure',
  },
  {
    slug: 'travel-to-kashmir-essential',
    title: 'Travel to Kashmir — Essential',
    duration: '5N / 6D',
    priceRange: '₹17,000 – ₹23,000',
    image:
      'https://images.unsplash.com/photo-1606117331085-5760e3b58520?auto=format&fit=crop&w=1200&q=70',
    summary:
      'A short, sweet Kashmir trip covering Srinagar, Gulmarg and the Mughal gardens.',
    inclusions: ['Hotel & Houseboat', 'Breakfast & Dinner', 'Private Cab', 'Sightseeing'],
    highlights: [
      'Day 1: Arrival Srinagar',
      'Day 2: Gulmarg day excursion',
      'Day 3: Pahalgam transfer',
      'Day 4: Aru & Betaab Valley',
      'Day 5: Srinagar local + shikara ride',
      'Day 6: Departure',
    ],
    destinations: ['dal-lake', 'gulmarg', 'pahalgam'],
  },
  {
    slug: 'gurez-valley-explorer',
    title: 'Kashmir Trip with Gurez Valley',
    duration: '7N / 8D',
    priceRange: '₹20,000 – ₹23,000',
    image:
      'https://images.unsplash.com/photo-1708186320869-0a527e67023d?auto=format&fit=crop&w=1200&q=70',
    summary:
      'For travellers who want to go beyond the postcard — Gurez Valley, Dawar, and Habba Khatoon peak.',
    inclusions: ['Hotels & Homestays', 'Breakfast & Dinner', 'SUV Cab', 'Permits'],
    highlights: [
      'Day 1: Srinagar arrival',
      'Day 2: Drive to Bandipora',
      'Day 3: Bandipora → Dawar (Gurez)',
      'Day 4: Habba Khatoon & Razdan Pass',
      'Day 5: Explore Gurez valley',
      'Day 6: Return to Bandipora',
      'Day 7: Srinagar local',
      'Day 8: Departure',
    ],
    destinations: ['gurez-valley', 'dal-lake', 'wular-lake'],
    badge: 'Off-beat',
  },
  {
    slug: 'katra-vaishnodevi-combo',
    title: 'Kashmir with Katra – Vaishno Devi',
    duration: '7N / 8D',
    priceRange: '₹17,000 – ₹20,000',
    image:
      'https://images.unsplash.com/photo-1719377678477-0fb3638ec482?auto=format&fit=crop&w=1200&q=70',
    summary:
      'A pilgrimage + leisure combo — darshan at Shri Mata Vaishno Devi plus the best of Kashmir.',
    inclusions: ['Hotels', 'Breakfast & Dinner', 'Private Cab', 'Yatra Assistance'],
    highlights: [
      'Day 1: Jammu arrival — transfer to Katra',
      'Day 2: Vaishno Devi darshan',
      'Day 3: Katra → Srinagar',
      'Day 4: Srinagar local + shikara',
      'Day 5: Gulmarg excursion',
      'Day 6: Pahalgam excursion',
      'Day 7: Sonamarg excursion',
      'Day 8: Departure',
    ],
    destinations: ['katra-vaishnodevi', 'dal-lake', 'gulmarg', 'pahalgam'],
  },
  {
    slug: 'senior-citizen-special',
    title: 'Senior Citizen Special',
    duration: '6N / 7D',
    priceRange: '₹19,000 – ₹28,000',
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=70',
    summary:
      'Gentle pace, comfortable stays, and accessible sightseeing — designed for senior travellers.',
    inclusions: ['Premium Hotels', 'Breakfast & Dinner', 'Sedan Cab', 'Porter Assistance'],
    highlights: [
      'Day 1: Srinagar arrival — easy check-in',
      'Day 2: Shankaracharya + Mughal Gardens',
      'Day 3: Houseboat day + shikara ride',
      'Day 4: Gulmarg (Gondola level 1)',
      'Day 5: Pahalgam (no long treks)',
      'Day 6: Local shopping / rest day',
      'Day 7: Departure',
    ],
    destinations: ['dal-lake', 'gulmarg', 'pahalgam'],
    badge: 'Comfort',
  },
  {
    slug: 'gulmarg-snow-package',
    title: 'Kashmir with Gulmarg Snow',
    duration: '5N / 6D',
    priceRange: '₹17,000 – ₹23,000',
    image:
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=70',
    summary:
      'Snow-focused itinerary with Gulmarg Gondola, sledding, and warming Kashmiri Kahwa by the fireplace.',
    inclusions: ['Hotel & Houseboat', 'Breakfast & Dinner', 'Private Cab', 'Snow Gear on Request'],
    highlights: [
      'Day 1: Arrival Srinagar',
      'Day 2: Gulmarg Gondola ride',
      'Day 3: Gulmarg snow activities',
      'Day 4: Sonamarg day trip',
      'Day 5: Srinagar local',
      'Day 6: Departure',
    ],
    destinations: ['gulmarg', 'sonamarg', 'dal-lake'],
  },
  {
    slug: 'kashmir-group-tour',
    title: 'Kashmir Group Tour Special',
    duration: '5N / 6D',
    priceRange: '₹14,000 – ₹18,000',
    image:
      'https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=70',
    summary:
      'Fixed-departure group tour with shared coach and a friendly trip leader — best for solo & budget travellers.',
    inclusions: ['Hotels', 'Breakfast & Dinner', 'Shared Coach', 'Tour Leader'],
    highlights: [
      'Day 1: Srinagar arrival',
      'Day 2: Gulmarg group excursion',
      'Day 3: Pahalgam group excursion',
      'Day 4: Sonamarg group excursion',
      'Day 5: Srinagar local + shikara',
      'Day 6: Departure',
    ],
    destinations: ['dal-lake', 'gulmarg', 'pahalgam', 'sonamarg'],
    badge: 'Best Value',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Aisha R.',
    role: 'Family Trip — Mumbai',
    quote:
      'Everything was handled end-to-end — houseboat, cab, sightseeing. Our driver knew every shortcut and the trip leader checked in on us daily.',
    rating: 5,
  },
  {
    name: 'Nikodem Rollins',
    role: 'Solo Traveller — Warsaw',
    quote:
      'I joined the group tour expecting chaos and got a beautifully-run trip. Snow at Gulmarg was unreal.',
    rating: 5,
  },
  {
    name: 'Penelope Wiggins',
    role: 'Honeymoon — London',
    quote:
      'They upgraded us to a deluxe houseboat for our honeymoon. Small touch, big impact. Will recommend to friends.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'Senior Citizen Tour — Delhi',
    quote:
      'My parents travelled with them last winter. Patient staff, comfortable pace, no last-minute surprises. That’s rare.',
    rating: 5,
  },
];

export const faq: FaqItem[] = [
  {
    q: 'What services does Digital Kashmir Tour and Travel offer?',
    a: 'We offer end-to-end Kashmir holiday packages (3 to 10 days), hotel and houseboat bookings, private and shared cab rentals, airport/railway transfers, guided sightseeing, and Ladakh extensions. Every itinerary can be customised to your dates, group size, and pace.',
  },
  {
    q: 'How do I book a package?',
    a: 'You can click any "Book Now" button on this site — it will open WhatsApp with the package name pre-filled — or call us directly on the numbers in the header and footer. We confirm availability, share a detailed itinerary, and block your dates with a small advance; balance is payable on arrival.',
  },
  {
    q: 'Can I customise an itinerary?',
    a: 'Absolutely. Almost every traveller asks for at least one tweak — extra night in Gulmarg, fewer days of driving, a particular houseboat, dietary preferences. Tell us what you’d like and we’ll redraft the plan and pricing within a few hours.',
  },
  {
    q: 'When is the best time to visit Kashmir?',
    a: 'For snow and skiing, December to February. For tulip gardens, shikara rides and pleasant weather, March to June. For the greenest landscapes and off-beat treks, July to September. Off-season (Nov & early Dec) is the quietest and most affordable.',
  },
  {
    q: 'Is it safe for tourists to travel to Kashmir?',
    a: 'Tourist regions (Srinagar, Gulmarg, Pahalgam, Sonamarg, Leh) are well-policed and routinely visited by families and senior citizens. Our drivers are local, our team is on call 24×7, and we share live updates on weather, road closures, and local advisories before and during your trip.',
  },
];

export const whyFeatures = [
  {
    title: 'Handcrafted Itineraries',
    body:
      'Plans designed by Kashmir-born trip designers — not a copy-paste template. We mix the iconic with the off-beat based on what you actually want.',
    icon: 'Compass',
  },
  {
    title: 'Trusted Local Partners',
    body:
      'Hand-picked houseboat owners, licensed guides, and verified cab drivers we’ve worked with for years. No middle-men, no surprise charges.',
    icon: 'ShieldCheck',
  },
  {
    title: '24/7 On-Trip Support',
    body:
      'From the moment you land to the moment you fly out, you have a single phone number for any change, request, or emergency.',
    icon: 'Headphones',
  },
];

export const benefits = [
  { label: 'Best Selection', icon: 'Sparkles' },
  { label: 'Best Price', icon: 'BadgePercent' },
  { label: 'Secure Payments', icon: 'Lock' },
  { label: '24/7 Support', icon: 'Clock' },
];
