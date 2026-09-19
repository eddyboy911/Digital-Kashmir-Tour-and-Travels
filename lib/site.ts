export const site = {
  name: 'Digital Kashmir Tour & Travels',
  shortName: 'Digital Kashmir',
  tagline: 'Experience Kashmir Like Never Before!',
  description:
    'Plan your dream Kashmir holiday with Digital Kashmir Tour & Travels — handcrafted itineraries, trusted local partners, and 24/7 on-trip support.',
  phone: '+91 8082900901',
  phoneRaw: '918082900901', // for wa.me and tel: links
  phoneSecondary: '+91 9622217112',
  whatsappRaw: '918082900901',
  email: 'digitalkashmir777@gmail.com',
  address: 'Ahmad Nagar, Near Bus Stop, Srinagar, J&K 190011',
  hours: 'Open 24×7 · All days',
  registration: 'JK Tourism No. JKEA00006103',
  udyam: 'UDYAM-JK-21-0100334',
  socials: {
    // Facebook and Instagram not set up yet — set to '' to hide icons.
    facebook: '',
    twitter: 'https://twitter.com/',
    instagram: '',
  },
} as const;

export type Site = typeof site;
