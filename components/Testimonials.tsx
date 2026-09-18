import { Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, type RevealDirection } from '@/components/Reveal';
import { testimonials } from '@/lib/data';

const pattern: RevealDirection[] = ['left', 'right', 'left', 'right'];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="section surface-soft"
    >
      <Container>
        <SectionHeading
          eyebrow="What travellers say"
          title={
            <>
              Real trips.
              <span className="font-extralight italic text-jade-700"> Real reviews.</span>
            </>
          }
          subtitle="We’re proud of every review below — collected from real travellers who let us plan their Kashmir trip."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((t, i) => {
            const direction = pattern[i % pattern.length];
            return (
              <Reveal key={t.name} direction={direction}>
                <figure className="card-premium relative flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-6">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 font-display text-lg font-medium leading-snug text-slate-800">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-xs font-bold uppercase tracking-wider text-white">
                      {t.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-slate-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
