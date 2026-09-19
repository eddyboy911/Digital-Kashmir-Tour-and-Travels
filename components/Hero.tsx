'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { ArrowRight, Award, Phone, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/site';
import { heroSlides } from '@/lib/slides';
import { Reveal } from '@/components/Reveal';

/** Third-line variations that cycle beneath the static "Experience / Kashmir".
 *  Only this bottom line animates the rest of the headline stays put. */
const HEADLINE_TAILS = [
  'like never before.',
  'beyond the ordinary.',
  'your way.',
  'like never imagined.',
];

const TAIL_ROTATE_MS = 3200;
const SLIDE_ROTATE_MS = 3000;

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [tailIdx, setTailIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);

  // Animate vehicle counter when hero enters view
  useEffect(() => {
  if (!sectionRef.current || started) return;
  const node = sectionRef.current;
  const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
    if (entry.isIntersecting) {
    setStarted(true);
    observer.disconnect();
    }
    }
  },
  { threshold: 0.3 },
  );
  observer.observe(node);
  return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
  if (!started) return;
  let raf = 0;
  let cancelled = false;
  const start = performance.now();
  const duration = 1400;
  const target = 50;

  const tick = (now: number) => {
  if (cancelled) return;
  const t = Math.min(1, (now - start) / duration);
  const eased = 1 - Math.pow(1 - t, 3);
  setCount(Math.round(eased * target));
  if (t < 1) raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  return () => {
  cancelled = true;
  cancelAnimationFrame(raf);
  };
  }, [started]);

  // Rotate the bottom headline line. Honors prefers-reduced-motion.
  useEffect(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  const t = setInterval(() => {
  setTailIdx((i) => (i + 1) % HEADLINE_TAILS.length);
  }, TAIL_ROTATE_MS);
  return () => clearInterval(t);
  }, []);

  // Rotate the hero background slides every SLIDE_ROTATE_MS.
  useEffect(() => {
  if (heroSlides.length < 2) return;
  const t = setInterval(() => {
  setSlideIdx((i) => (i + 1) % heroSlides.length);
  }, SLIDE_ROTATE_MS);
  return () => clearInterval(t);
  }, []);

  return (
  <section
  id="home"
  ref={sectionRef}
  aria-labelledby="hero-title"
  className="relative isolate min-h-[94vh] overflow-hidden pt-28 sm:pt-32"
  >
  {/* Background slides — crossfade through heroSlides every 3s */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {heroSlides.map((slide, i) => (
    <Image
    key={slide.src}
    src={slide.src}
    alt=""
    aria-hidden
    fill
    sizes="100vw"
    priority={i === 0}
    className={clsx(
    'object-cover transition-opacity duration-1000 ease-in-out',
    i === slideIdx ? 'opacity-100' : 'opacity-0',
    )}
    />
    ))}
    {/* Strong directional tint heavy on the left where the headline sits,
    gently fading to the right so the mountains and sky stay visible */}
    <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/65 to-ink-900/25" />
    {/* Soft top vignette for editorial depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-ink-900/45 via-transparent to-transparent" />
    {/* Slide indicators (only if more than 1 slide) */}
    {heroSlides.length > 1 && (
    <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
      {heroSlides.map((slide, i) => (
      <button
      key={slide.src}
      type="button"
      aria-label={`Show slide ${i + 1}`}
      aria-current={i === slideIdx}
      onClick={() => setSlideIdx(i)}
      className={clsx(
      'h-1.5 rounded-full transition-all duration-500',
      i === slideIdx ? 'w-8 bg-amber-300' : 'w-1.5 bg-white/40 hover:bg-white/70',
      )}
      />
      ))}
    </div>
    )}
  </div>

  {/* Editorial corner mark right side */}
  <div className="absolute right-6 top-24 z-10 hidden flex-col items-end gap-1 text-white/80 lg:flex">
    <span className="block h-px w-12 bg-white/60" />
    <span className="text-[10px] font-bold uppercase tracking-[0.32em]">
    Est. 2018 · Srinagar
    </span>
  </div>

  <Container className="relative grid min-h-[80vh] grid-cols-1 items-end gap-12 pb-20 lg:grid-cols-12 lg:pb-28">
    <div className="lg:col-span-8">
    <Reveal>
    <span className="eyebrow eyebrow-light">
      Kashmir · Ladakh · Pilgrimage
    </span>
    </Reveal>

    <Reveal delay={1}>
    <h1
      id="hero-title"
      className="display-xl mt-6 text-balance text-white text-5xl sm:text-6xl lg:text-8xl"
    >
      {/* Screen-reader canonical headline */}
      <span className="sr-only">
      Experience Kashmir Digital Kashmir Tour & Travels
      </span>

      {/* Static top "Experience" and "Kashmir" never change, same size */}
      <span className="block">Experience</span>
      <span className="block">
      <span className="font-extralight italic text-amber-200">Kashmir</span>
      </span>

      {/* Rotating bottom line. Sized smaller than the rest of the
      headline so even the longest tail fits on a single line. */}
      <span
      aria-live="polite"
      aria-atomic="true"
      className="block whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl"
      >
      <span className="grid">
      {HEADLINE_TAILS.map((tail, i) => {
        const isActive = i === tailIdx;
        return (
        <span
        key={tail}
        aria-hidden={!isActive}
        style={{ gridArea: '1 / 1' }}
        className={clsx(
          'whitespace-nowrap transition-all duration-700 ease-out will-change-transform',
          isActive
          ? 'translate-y-0 opacity-100'
          : 'translate-y-5 opacity-0',
        )}
        >
        {tail}
        </span>
        );
      })}
      </span>
      </span>
    </h1>
    </Reveal>

    <Reveal delay={2}>
    <p className="mt-7 max-w-xl text-base leading-relaxed text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] sm:text-lg">
      Handcrafted itineraries across Srinagar, Gulmarg, Pahalgam, Sonamarg,
      Gurez, and Leh–Ladakh private cabs, trusted houseboats, and a real
      human on call when you need one.
    </p>
    </Reveal>

    <Reveal delay={3}>
    <div className="mt-9 flex flex-wrap items-center gap-3">
      <Button
      href="#packages"
      variant="primary"
      size="lg"
      className="rounded-full bg-accent-500 px-8 text-base text-brand-950 shadow-lg hover:bg-accent-400 hover:shadow-xl focus-visible:ring-accent-400"
      >
      Explore Packages
      <ArrowRight className="h-4 w-4" />
      </Button>
      <Button
      href="#contact"
      variant="outline"
      size="lg"
      className="rounded-full border-white/60 bg-white/10 px-8 text-base text-white backdrop-blur-md transition-colors hover:!border-white hover:!bg-white hover:!text-black"
      >
      <Phone className="h-4 w-4" />
      Plan a Custom Trip
      </Button>
    </div>
    </Reveal>

    {/* Trust strip editorial style */}
    <Reveal delay={4}>
    <div className="mt-14 grid max-w-2xl grid-cols-2 gap-y-4 gap-x-10 border-t border-white/20 pt-7 sm:grid-cols-3">
      <div>
      <p className="font-display text-3xl font-extrabold leading-none text-white">
      {count}+
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
      Vehicles ready
      </p>
      </div>
      <div>
      <p className="font-display text-3xl font-extrabold leading-none text-white">
      1.2k+
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
      Happy travellers
      </p>
      </div>
      <div className="col-span-2 sm:col-span-1">
      <p className="font-display text-3xl font-extrabold leading-none text-white">
      4.9<span className="text-amber-300">★</span>
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
      Avg. trip rating
      </p>
      </div>
    </div>
    </Reveal>
    </div>

    {/* Right column vertical trust mark */}
    <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:justify-end lg:gap-5">
    <Reveal delay={2}>
    <div className="flex flex-col items-end gap-2 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md">
      <div className="flex items-center gap-2 text-amber-300">
      <Award className="h-4 w-4" />
      <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
      Licensed & Verified
      </span>
      </div>
      <p className="text-right text-sm leading-relaxed text-white/85">
      Recognised by JK Tourism and trusted by 380+ verified guest reviews.
      </p>
      <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-200">
      <ShieldCheck className="h-3.5 w-3.5 text-jade-300" />
      Secure bookings · Real human support
      </div>
    </div>
    </Reveal>
    </div>
  </Container>

  {/* Bottom blend into next section shorter, so it doesn't wash out the stats */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#FBFAF7]" />
  </section>
  );
}
