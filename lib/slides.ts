/**
 * Hero slideshow images. Each entry maps to a file in `/public/slides/`.
 *
 * To add a new slide: drop the image into `public/slides/` (e.g.
 * `public/slides/hero-4.jpg`) and add a new entry here. The Hero rotates
 * through this list every 3 seconds.
 */
export interface HeroSlide {
  src: string;
  alt: string;
}

export const heroSlides: HeroSlide[] = [
  { src: '/slides/hero-1.jpg', alt: 'Kashmir mountains at dawn' },
  // Add more here, e.g.:
  // { src: '/slides/hero-2.jpg', alt: 'Houseboats on Dal Lake' },
];
