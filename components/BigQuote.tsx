import { Quote } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

interface BigQuoteProps {
  quote: string;
  author: string;
  role?: string;
}

export function BigQuote({ quote, author, role }: BigQuoteProps) {
  return (
    <section
      aria-label="Featured traveller story"
      className="relative isolate overflow-hidden bg-ink-900 py-24 text-white sm:py-32"
    >
      {/* Soft backdrop image */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=2400&q=70"
          alt=""
          aria-hidden
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40" />
      </div>

      <Container className="max-w-4xl">
        <Reveal direction="fade">
          <Quote className="h-12 w-12 text-amber-300" />
          <blockquote className="display-lg mt-8 text-balance text-3xl leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            “{quote}”
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4 border-t border-white/15 pt-6">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-amber-300 font-display text-base font-extrabold text-brand-950">
              {author
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('')}
            </div>
            <div>
              <p className="font-display text-base font-bold text-white">{author}</p>
              {role && (
                <p className="text-xs uppercase tracking-[0.22em] text-amber-200">
                  {role}
                </p>
              )}
            </div>
          </figcaption>
        </Reveal>
      </Container>
    </section>
  );
}
