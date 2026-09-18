'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, Phone, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/site';
import { Reveal } from '@/components/Reveal';

/** Headlines that cycle through the hero. The italic word/phrase is the
 *  amber-highlighted piece; everything else is bold or plain. */
const HEADLINES: { top?: string; italic: string; bottom: string }[] = [
  { top: 'Experience', italic: 'Kashmir', bottom: 'like never before.' },
  { top: 'Experience', italic: 'Kashmir', bottom: 'in a whole new way.' },
  { top: 'Experience', italic: 'Kashmir', bottom: 'beyond the ordinary.' },
  { top: 'Experience', italic: 'Kashmir', bottom: ', your way.' },
  { italic: 'A journey', bottom: 'beyond imagination.' },
];

/** How long each headline stays on screen before rotating to the next. */
const HEADLINE_ROTATE_MS = 3200;

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [headlineIdx, setHeadlineIdx] = useState(0);

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

  // Rotate headline through variations. Honors prefers-reduced-motion.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const t = setInterval(() => {
      setHeadlineIdx((i) => (i + 1) % HEADLINES.length);
    }, HEADLINE_ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative isolate min-h-[94vh] overflow-hidden pt-28 sm:pt-32"
    >
      {/* Background image — full bleed with slow zoom */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606117331085-5760e3b58520?auto=format&fit=crop&w=2400&q=80"
          alt=""
          aria-hidden
          className="h-full w-full object-cover animate-slow-zoom"
        />
        {/* Strong directional tint — heavy on the left where the headline sits,
            gently fading to the right so the mountains and sky stay visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/65 to-ink-900/25" />
        {/* Soft top vignette for editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/45 via-transparent to-transparent" />
      </div>

      {/* Editorial corner mark */}
      <div className="absolute left-6 top-24 z-10 hidden flex-col items-start gap-1 text-white/80 lg:flex">
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
              {/* Screen-reader-only canonical headline */}
              <span className="sr-only">
                Experience Kashmir like never before — Digital Kashmir Tour and Travel
              </span>

              {/* Live-rotating headlines. Grid stacks all variants in the same
                  cell so the cell height tracks the tallest headline. */}
              <span aria-live="polite" aria-atomic="true" className="grid">
                {HEADLINES.map((h, i) => {
                  const isActive = i === headlineIdx;
                  return (
                    <span
                      key={`${h.italic}::${h.bottom}`}
                      aria-hidden={!isActive}
                      style={{ gridArea: '1 / 1' }}
                      className={clsx(
                        'transition-all duration-700 ease-out will-change-transform',
                        isActive
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-10 opacity-0',
                      )}
                    >
                      {h.top && <span className="block">{h.top}</span>}
                      <span className="block">
                        <span className="font-extralight italic text-amber-200">
                          {h.italic}
                        </span>
                        {h.bottom && <> {h.bottom}</>}
                      </span>
                    </span>
                  );
                })}
              </span>
            </h1>
          </Reveal>

          {/* Headline progress dots — visual indicator of which is showing */}
          <Reveal delay={2}>
            <div
              role="tablist"
              aria-label="Headline variations"
              className="mt-6 flex items-center gap-2"
            >
              {HEADLINES.map((h, i) => (
                <button
                  key={h.italic + h.bottom}
                  type="button"
                  role="tab"
                  aria-selected={i === headlineIdx}
                  aria-label={`Show headline: ${h.italic} ${h.bottom}`}
                  onClick={() => setHeadlineIdx(i)}
                  className="group relative h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: i === headlineIdx ? '2.25rem' : '0.5rem',
                    backgroundColor:
                      i === headlineIdx ? '#FBBF24' : 'rgba(255,255,255,0.4)',
                  }}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] sm:text-lg">
              Handcrafted itineraries across Srinagar, Gulmarg, Pahalgam, Sonamarg,
              Gurez, and Leh–Ladakh — private cabs, trusted houseboats, and a real
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
                className="rounded-full border-white/60 bg-white/10 px-8 text-base text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-brand-900"
              >
                <Phone className="h-4 w-4" />
                Plan a Custom Trip
              </Button>
            </div>
          </Reveal>

          {/* Trust strip — editorial style */}
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

        {/* Right column — vertical trust mark */}
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

      {/* Bottom blend into next section — shorter, so it doesn't wash out the stats */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#FBFAF7]" />
    </section>
  );
}
