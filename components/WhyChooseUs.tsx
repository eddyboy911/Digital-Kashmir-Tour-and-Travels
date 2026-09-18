import {
  BadgePercent,
  Clock,
  Compass,
  Headphones,
  Lock,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/Button';
import { benefits, whyFeatures } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Compass,
  ShieldCheck,
  Headphones,
  Sparkles,
  BadgePercent,
  Lock,
  Clock,
};

const featureImages = [
  'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1400&q=70',
];

export function WhyChooseUs() {
  return (
  <section
  id="about"
  aria-labelledby="why-title"
  className="section surface-cream"
  >
  <Container>
    <SectionHeading
    eyebrow="Why Digital Kashmir"
    title={
    <>
      Built by locals.
      <br />
      <span className="font-extralight italic text-jade-700">Travelled by you.</span>
    </>
    }
    subtitle="We don’t just sell packages we design holidays. Here’s what makes working with us different from any other operator you’ll find online."
    />

    {/* Editorial alternating rows */}
    <div className="mt-20 grid gap-20 lg:gap-28">
    {whyFeatures.map((feature, i) => {
    const Icon = iconMap[feature.icon] ?? Compass;
    const reverse = i % 2 === 1;
    return (
      <div
      key={feature.title}
      className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
      >
      <Reveal
      direction={reverse ? 'right' : 'left'}
      className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}
      >
      <div className="img-zoom-on-hover relative overflow-hidden rounded-[32px] shadow-card">
        <img
        src={featureImages[i]}
        alt={feature.title}
        loading="lazy"
        className="h-[420px] w-full object-cover"
        />
        <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-800 backdrop-blur">
        <span>0{i + 1}</span>
        <span className="h-px w-6 bg-brand-800/60" />
        <span>Promise</span>
        </div>
      </div>
      </Reveal>

      <Reveal
      direction={reverse ? 'left' : 'right'}
      className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}
      >
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-white shadow-soft transition-transform duration-500 hover:rotate-6 hover:scale-105">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="display-lg mt-6 text-balance text-3xl text-slate-900 sm:text-4xl">
        {feature.title}
      </h3>
      <div className="gold-rule !ml-0 !mx-0" />
      <p className="text-base leading-relaxed text-slate-600">
        {feature.body}
      </p>
      </Reveal>
      </div>
    );
    })}
    </div>

    {/* Benefits strip dark, editorial */}
    <Reveal direction="up">
    <div className="mt-24 overflow-hidden rounded-[32px] bg-ink-900 px-6 py-12 text-white sm:px-10 sm:py-14">
    <div className="grid items-center gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
      <p className="eyebrow eyebrow-light">The four promises</p>
      <h3 className="display-lg mt-4 text-balance text-3xl text-white sm:text-4xl">
      Four small things we get
      <span className="font-extralight italic text-amber-300"> consistently right.</span>
      </h3>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:col-span-5">
      {benefits.map(({ label, icon }, i) => {
      const Icon = iconMap[icon] ?? Sparkles;
      return (
        <Reveal
        key={label}
        direction={i % 2 === 0 ? 'left' : 'right'}
        delay={Math.min(i + 1, 5) as 0 | 1 | 2 | 3 | 4 | 5}
        >
        <div className="flex flex-col gap-2 border-l border-white/15 pl-4">
        <Icon className="h-5 w-5 text-amber-300" />
        <p className="font-display text-lg font-bold">{label}</p>
        </div>
        </Reveal>
      );
      })}
      </div>
    </div>

    <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
      <p className="max-w-md text-sm text-slate-300">
      Ready to plan your Kashmir trip? Share a few details and we’ll get
      back with a tailored itinerary within 6 hours.
      </p>
      <Button
      href="#contact"
      variant="primary"
      size="md"
      className="rounded-full bg-amber-400 px-6 text-brand-950 hover:bg-amber-300 hover:shadow-lg focus-visible:ring-amber-400"
      >
      Plan My Trip →
      </Button>
    </div>
    </div>
    </Reveal>
  </Container>
  </section>
  );
}
