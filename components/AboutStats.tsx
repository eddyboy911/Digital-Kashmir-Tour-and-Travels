import { Award, Clock, MapPin, Users } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

const stats = [
  { icon: Clock, value: '6+', label: 'Years guiding' },
  { icon: Users, value: '1,200+', label: 'Travellers hosted' },
  { icon: MapPin, value: '9', label: 'Destinations covered' },
  { icon: Award, value: '4.9★', label: 'Average trip rating' },
];

export function AboutStats() {
  return (
    <section aria-labelledby="about-stats-title" className="bg-ink-900 py-20 text-white sm:py-24">
      <Container>
        <Reveal>
          <h2 id="about-stats-title" className="sr-only">
            Digital Kashmir by the numbers
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <Reveal
              key={label}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}
            >
              <div className="flex flex-col items-center text-center">
                <Icon className="h-6 w-6 text-amber-300" />
                <p className="mt-3 font-display text-4xl font-extrabold leading-none sm:text-5xl">
                  {value}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
