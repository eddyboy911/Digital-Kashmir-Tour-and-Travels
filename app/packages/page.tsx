import { TourPackages } from '@/components/TourPackages';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { packages } from '@/lib/data';

export const metadata = {
  title: 'Tour Packages',
  description:
    'Browse every Kashmir and Ladakh itinerary we run — family trips, honeymoon plans, snow packages, off-beat Gurez, group tours, and pilgrimages. Fully customisable.',
};

export default function PackagesPage() {
  return (
    <>
      <section
        aria-labelledby="packages-hero-title"
        className="relative isolate overflow-hidden bg-ink-900 py-24 text-white sm:py-32"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1566837497312-7be4a47a1d70?auto=format&fit=crop&w=2400&q=80"
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-50 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/80 via-ink-900/70 to-ink-900/90" />
        </div>

        <Container className="max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow eyebrow-light">Tour Packages</span>
          </Reveal>

          <Reveal delay={1}>
            <h1
              id="packages-hero-title"
              className="display-lg mt-6 text-balance text-5xl text-white sm:text-6xl lg:text-7xl"
            >
              Every Kashmir &amp; Ladakh{' '}
              <span className="font-extralight italic text-amber-200">itinerary we run.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {packages.length} handpicked itineraries from {packages.length} to {Math.max(...packages.map((p) => Number(p.duration.split('N')[0])))} nights — every one customisable to your dates, group size, and pace.
            </p>
          </Reveal>
        </Container>
      </section>

      <TourPackages hideHeading />
    </>
  );
}
