export const site = {
  name: 'Digital Kashmir Tour and Travel',
  shortName: 'Digital Kashmir',
  tagline: 'Experience Kashmir Like Never Before!',
  description:
  'Plan your dream Kashmir holiday with Digital Kashmir Tour and Travel handcrafted itineraries, trusted local partners, and 24/7 on-trip support.',
  phone: '+91 9103450190',
  phoneRaw: '919103450190', // for wa.me links
  phoneSecondary: '+91 9906140529',
  whatsappRaw: '919103450190',
  email: 'bookings@digitalkashmir.example',
  address: 'Hazratbal Road, Pandach, Srinagar, Kashmir',
  hours: 'Open 24×7 · All days',
  registration: 'JK Tourism No. JKEA00004889',
  udyam: 'UDYAM No. JK-21-0075314',
  socials: {
  facebook: 'https://facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://instagram.com/',
  },
} as const;

export type Site = typeof site;
