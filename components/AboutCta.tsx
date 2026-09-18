import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/Reveal';

export function AboutCta() {
  return (
    <section aria-labelledby="about-cta-title" className="section surface-soft">
      <Container className="max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">Ready when you are</p>
        </Reveal>
        <Reveal delay={1}>
          <h2
            id="about-cta-title"
            className="display-lg mt-5 text-balance text-4xl text-slate-900 sm:text-5xl"
          >
            Travel with us,{' '}
            <span className="font-extralight italic text-jade-700">
              the way it should be done.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
            Browse our handpicked itineraries, or send us a note with what you have in
            mind. We will reply within six hours with honest, specific suggestions.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#packages"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800 hover:shadow-lg"
            >
              Browse Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
