import {
  Headphones,
  Heart,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { aboutValues } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Heart,
  MapPin,
  Headphones,
};

export function AboutValues() {
  return (
    <section aria-labelledby="about-values-title" className="section surface-soft">
      <Container>
        <SectionHeading
          eyebrow="What we believe"
          title={
            <>
              Three things we{' '}
              <span className="font-extralight italic text-jade-700">
                will not compromise on.
              </span>
            </>
          }
          subtitle="If a trip cannot meet these three standards, we would rather send you elsewhere than book it ourselves."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {aboutValues.map((v, i) => {
            const Icon = iconMap[v.icon] ?? Heart;
            return (
              <Reveal
                key={v.title}
                direction={i === 1 ? 'up' : i === 0 ? 'left' : 'right'}
              >
                <article className="card-premium relative flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-jade-600 to-brand-800 text-white shadow-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="display-lg mt-5 text-balance text-2xl text-slate-900">
                    {v.title}
                  </h3>
                  <div className="gold-rule !ml-0 !mx-0" />
                  <p className="text-base leading-relaxed text-slate-600">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
