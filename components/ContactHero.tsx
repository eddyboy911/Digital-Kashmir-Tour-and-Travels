import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-title"
      className="relative isolate overflow-hidden bg-ink-900 py-24 text-white sm:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1606355792317-4dcadc93ed26?auto=format&fit=crop&w=2400&q=80"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-50 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900/85 via-ink-900/75 to-ink-900/90" />
      </div>

      <Container className="max-w-4xl text-center">
        <Reveal>
          <span className="eyebrow eyebrow-light">Get in touch</span>
        </Reveal>
        <Reveal delay={1}>
          <h1
            id="contact-hero-title"
            className="display-lg mt-5 text-balance text-5xl text-white sm:text-6xl lg:text-7xl"
          >
            Tell us about your{' '}
            <span className="font-extralight italic text-amber-200">
              dream trip.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Share a few details below and one of our trip designers in Srinagar will
            reply within six hours with a personalised itinerary and honest pricing.
            No call centre, no spam.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
