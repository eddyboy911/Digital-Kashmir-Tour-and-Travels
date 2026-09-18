# Digital Kashmir Tour and Travel

A marketing website for **Digital Kashmir Tour and Travel** built with Next.js 14 (App Router), Tailwind CSS, and TypeScript.

## Quick start

```bash
npm install
cp .env.local.example .env.local   # then fill in the Web3Forms key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Pages

- **`/`** — Homepage (hero, destinations, packages, gallery, cab rental, why-us, testimonials, big quote, FAQ)
- **`/about`** — About Us (brand story, values, team, stats, CTA)
- **`/contact`** — Enquiry form + contact details

## Project structure

```
app/
├── page.tsx           Homepage
├── about/page.tsx     About page
├── contact/page.tsx   Contact page
├── layout.tsx         Root layout (Header, Footer, FloatingButtons)
└── globals.css        Tailwind directives + design-system utilities
components/
├── About*.tsx         About-page sections (Hero, Story, Values, Team, Stats, Cta)
├── Contact*.tsx       Contact-page sections (Hero, Form, Info)
├── ui/                Container, SectionHeading, Button
└── ...                Homepage sections
lib/
├── data.ts            Packages, destinations, testimonials, FAQ, team, values
└── site.ts            Site config (phone, email, address, registration)
public/                Static assets
.env.local.example     Template for environment variables
```

## Editing content

All marketing copy lives in `lib/data.ts` and `lib/site.ts`. Update package prices, durations, images, destinations, testimonials, FAQ, team, and values there. Images are loaded from Unsplash via `next/image`; swap URLs (or move to `public/`) as you get real product photography.

## Booking flow

- **Package "Book Now"** buttons open WhatsApp with the package name pre-filled (`https://wa.me/<phone>?text=...`)
- **Contact form** (`/contact`) submits to Web3Forms and emails the lead to the client's inbox

Update the phone number in `lib/site.ts`.

## Contact form setup (Web3Forms, ~2 minutes)

The contact form on `/contact` uses [Web3Forms](https://web3forms.com/) to deliver leads to the client's email without any backend code.

1. Go to https://web3forms.com/ and sign up with the email that should receive enquiries
2. Copy the access key from the Web3Forms dashboard
3. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
4. Restart `npm run dev`

Without a key, the form will still render and validate, but submissions will show a friendly "form not configured" error pointing users to WhatsApp.

## What's intentionally not built yet

- Newsletter signup persistence (currently shows a confirmation message only)
- CMS integration (content lives in TypeScript files)
- Multi-language support (i18n)
- Payment processing
- CRM integration (Web3Forms → Zapier → HubSpot/Salesforce if needed)

These are clean TODOs marked in the relevant components.
