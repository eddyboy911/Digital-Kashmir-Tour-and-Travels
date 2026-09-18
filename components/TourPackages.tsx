import { ArrowUpRight, Calendar, CheckCircle2, MapPin, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { packages } from '@/lib/data';
import { site } from '@/lib/site';

function packageHref(title: string) {
  const text = `Hi, I'm interested in the "${title}" package. Please share availability and details.`;
  return `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export function TourPackages() {
  return (
    <section
      id="packages"
      aria-labelledby="packages-title"
      className="section surface-soft"
    >
      <Container>
        <SectionHeading
          eyebrow="Tour Packages"
          title={
            <>
              Handpicked
              <span className="font-extralight italic text-jade-700"> itineraries.</span>
            </>
          }
          subtitle="Every package below is fully customisable. Mix destinations, swap hotels, or extend the trip — we’ll redraft the plan in a few hours."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal
              key={pkg.slug}
              delay={Math.min(i % 3, 3) as 0 | 1 | 2 | 3}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-soft transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-card">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/15 to-transparent" />

                  {/* Top-left badge */}
                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    {pkg.badge && <span className="badge">{pkg.badge}</span>}
                  </div>

                  {/* Top-right duration */}
                  <div className="absolute right-5 top-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-800 shadow-soft">
                      <Calendar className="h-3 w-3" />
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Bottom destinations */}
                  <div className="absolute bottom-4 left-5 right-5 flex flex-wrap gap-1.5">
                    {pkg.destinations.slice(0, 3).map((dest) => (
                      <span
                        key={dest}
                        className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-700"
                      >
                        <MapPin className="h-3 w-3" />
                        {dest.replace(/-/g, ' ')}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="display-lg text-balance text-2xl leading-tight text-slate-900">
                    {pkg.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {pkg.summary}
                  </p>

                  <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                    {pkg.highlights.slice(0, 4).map((line) => (
                      <li key={line} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-jade-600" />
                        <span className="leading-snug">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {pkg.inclusions.map((inc) => (
                      <span
                        key={inc}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-700"
                      >
                        {inc}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-end justify-between gap-3 border-t border-slate-100 pt-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                        Starting from
                      </p>
                      <p className="font-display text-2xl font-extrabold leading-tight text-brand-800">
                        {pkg.priceRange}
                      </p>
                    </div>
                    <a
                      href={packageHref(pkg.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-800"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Book Now
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
