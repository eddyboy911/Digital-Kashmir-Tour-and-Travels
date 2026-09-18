# Digital Kashmir Tour and Travel

A marketing website for **Digital Kashmir Tour and Travel** built with Next.js 14 (App Router), Tailwind CSS, and TypeScript.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/                Routes & layouts (App Router)
components/         Section components and shared UI
lib/                Site config + content data (packages, destinations, FAQ, testimonials)
public/             Static assets
```

## Editing content

All marketing copy lives in `lib/data.ts` and `lib/site.ts`. Update package prices, durations, images, destinations, testimonials, and FAQ items there. Images are loaded from Unsplash via `next/image`; swap URLs (or move to `public/`) as you get real product photography.

## Booking flow

The "Book Now" buttons on every package open WhatsApp with the package name pre-filled (`https://wa.me/<phone>?text=...`). Update the phone number in `lib/site.ts`.

## What's intentionally not built yet

- Backend for the newsletter signup and contact form (currently shows a placeholder alert)
- CMS integration (content is in TypeScript files for now)
- Multi-language support
- Payment processing

These are clean TODOs marked in the relevant components.
