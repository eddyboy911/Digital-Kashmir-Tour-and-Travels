'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

const ROTATING_TAILS = [
  'since 2018.',
  'from Srinagar.',
  'one operator.',
];

const ROTATE_MS = 3500;

export function AboutHero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING_TAILS.length), ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative isolate overflow-hidden bg-ink-900 py-28 text-white sm:py-36"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1627894485200-b92fb4353967?auto=format&fit=crop&w=2400&q=80"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-50 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900/80 via-ink-900/70 to-ink-900/90" />
      </div>

      <Container className="max-w-4xl text-center">
        <Reveal>
          <span className="eyebrow eyebrow-light">About Digital Kashmir</span>
        </Reveal>

        <Reveal delay={1}>
          <h1
            id="about-hero-title"
            className="display-lg mt-6 text-balance text-5xl text-white sm:text-6xl lg:text-7xl"
          >
            <span className="sr-only">Built by locals. Travelled by you.</span>
            <span>
              Built by locals.{' '}
              <span className="font-extralight italic text-amber-200">Travelled by you.</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-8 flex justify-center">
            <span aria-live="polite" aria-atomic="true" className="grid">
              {ROTATING_TAILS.map((tail, i) => (
                <span
                  key={tail}
                  aria-hidden={i !== idx}
                  style={{ gridArea: '1 / 1' }}
                  className={clsx(
                    'whitespace-nowrap text-base uppercase tracking-[0.32em] text-slate-300 transition-all duration-700 ease-out sm:text-lg',
                    i === idx
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-3 opacity-0',
                  )}
                >
                  {tail}
                </span>
              ))}
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
