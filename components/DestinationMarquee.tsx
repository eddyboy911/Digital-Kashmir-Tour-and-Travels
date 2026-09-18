import { destinations } from '@/lib/data';

const items = [
  ...destinations.map((d) => d.name),
  'Houseboats',
  'Shikara Rides',
  'Snow Treks',
  'Skiing',
  'Pilgrimage',
  'Honeymoon',
  'Family Trips',
];

export function DestinationMarquee() {
  return (
    <div
      aria-hidden
      className="relative isolate overflow-hidden border-y border-slate-200/60 bg-ink-50 py-5"
    >
      <div className="marquee-track">
        {[...items, ...items].map((label, i) => (
          <div
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-3 text-2xl font-extrabold uppercase tracking-tight text-ink-900 sm:text-3xl"
          >
            <span>{label}</span>
            <svg
              className="h-6 w-6 text-amber-500"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2l2.39 6.96H22l-6.18 4.49L18.21 21 12 16.51 5.79 21l2.39-7.55L2 8.96h7.61L12 2z" />
            </svg>
          </div>
        ))}
      </div>
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-50 to-transparent" />
    </div>
  );
}
