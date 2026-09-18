import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, type RevealDirection } from '@/components/Reveal';
import { destinations } from '@/lib/data';

// Pattern repeats every 6 cards for visual rhythm
const pattern: RevealDirection[] = ['left', 'up', 'right', 'up', 'right', 'left'];

export function Destinations() {
  return (
  <section
  id="destinations"
  aria-labelledby="destinations-title"
  className="section surface-cream"
  >
  <Container>
    <SectionHeading
    eyebrow="Where to go"
    title={
    <>
      Nine places,
      <br />
      <span className="font-extralight italic text-jade-700">one operator.</span>
    </>
    }
    subtitle="From the iconic houseboats of Dal Lake to the high-altitude deserts of Ladakh every corner of the valley, with drivers who actually live there."
    />

    <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
    {destinations.map((d, i) => {
    const direction = pattern[i % pattern.length];
    return (
      <Reveal
      key={d.id}
      direction={direction}
      delay={Math.min(i % 3, 4) as 0 | 1 | 2 | 3 | 4}
      >
      <a
      href="#packages"
      className="group relative isolate flex aspect-[4/5] items-end overflow-hidden rounded-3xl shadow-soft card-premium img-zoom-on-hover"
      aria-label={`Explore ${d.name}`}
      >
      <img
        src={d.image}
        alt={d.name}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      <div className="relative w-full p-5 text-white">
        <p className="font-display text-xl font-bold leading-tight">{d.name}</p>
        <p className="mt-1 line-clamp-2 text-xs text-slate-200/90">{d.tag}</p>
        <div className="mt-3 flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300 opacity-0 transition group-hover:opacity-100">
        See packages
        <svg
        className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        >
        <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
        </div>
      </div>
      </a>
      </Reveal>
    );
    })}
    </div>
  </Container>
  </section>
  );
}
