import { Destinations } from '@/components/Destinations';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { destinations } from '@/lib/data';

export const metadata = {
  title: 'Destinations',
  description:
    'Nine handpicked destinations across Kashmir and Ladakh — Dal Lake, Gulmarg, Pahalgam, Sonamarg, Gurez, Wular, Doodhpathri, Katra–Vaishno Devi, and Leh–Ladakh.',
};

export default function DestinationsPage() {
  return (
    <>
      <section
        aria-labelledby="destinations-hero-title"
        className="relative isolate overflow-hidden bg-ink-900 py-24 text-white sm:py-32"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1569852837213-00d97a707a83?auto=format&fit=crop&w=2400&q=80"
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-50 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/80 via-ink-900/70 to-ink-900/90" />
        </div>

        <Container className="max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow eyebrow-light">Where to go</span>
          </Reveal>

          <Reveal delay={1}>
            <h1
              id="destinations-hero-title"
              className="display-lg mt-6 text-balance text-5xl text-white sm:text-6xl lg:text-7xl"
            >
              {destinations.length} places,{' '}
              <span className="font-extralight italic text-amber-200">one operator.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              From the iconic houseboats of Dal Lake to the high-altitude deserts of Ladakh — every corner of the valley, with drivers who actually live there.
            </p>
          </Reveal>
        </Container>
      </section>

      <Destinations />
    </>
  );
}
