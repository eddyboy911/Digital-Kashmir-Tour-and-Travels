/**
 * Hero slideshow images. Each entry maps to a file in `/public/slides/`.
 *
 * To add a new slide:
 * 1. Drop the image into `public/slides/` (e.g. `public/slides/hero-6.jpg`)
 * 2. Add a new entry below
 *
 * The Hero component rotates through this list every 3 seconds with
 * a smooth crossfade. Images are auto-optimized at request time by
 * `next/image` (WebP/AVIF, responsive sizes) so the original files
 * can be large.
 */
export interface HeroSlide {
  src: string;
  alt: string;
}

export const heroSlides: HeroSlide[] = [
  { src: '/slides/hero-1.jpg', alt: 'Kashmir mountains at dawn' },
  { src: '/slides/hero-2.jpg', alt: 'Kashmir valley landscape' },
  { src: '/slides/hero-3.jpg', alt: 'Snow-capped mountain peaks' },
  { src: '/slides/hero-4.jpg', alt: 'Pine forest and meadows' },
  { src: '/slides/hero-5.jpg', alt: 'Mountain lake reflection' },
];
