import { Car, Clock, MapPin, Phone, ShieldCheck, Wallet } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/site';

const features = [
  {
    icon: Wallet,
    title: 'Transparent pricing',
    body: 'No hidden charges. Fuel, driver allowance, and tolls are itemised upfront.',
  },
  {
    icon: Clock,
    title: '24×7 availability',
    body: 'Airport pickups, late-night transfers, snow drives — we operate round the clock.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified drivers',
    body: 'Local, licensed, and trained for mountain roads and winter conditions.',
  },
  {
    icon: MapPin,
    title: 'All Kashmir + Ladakh',
    body: 'Srinagar, Gulmarg, Pahalgam, Sonamarg, Gurez, Katra, and the Leh circuit.',
  },
];

const fleet = [
  { name: 'Sedan', model: 'Swift Dzire / Etios', seats: '4 + 1', price: '₹2,400' },
  { name: 'SUV', model: 'Innova / Crysta', seats: '6 + 1', price: '₹3,800' },
  { name: 'Premium SUV', model: 'Scorpio / XUV700', seats: '6 + 1', price: '₹4,500' },
  { name: 'Tempo Traveller', model: '12-seater', seats: '11 + 1', price: '₹5,500' },
];

export function CabRental() {
  return (
    <section
      id="cab-rental"
      aria-labelledby="cab-title"
      className="section surface-soft"
    >
      <Container>
        <SectionHeading
          eyebrow="Cab Rental"
          title={
            <>
              Wheels that fit the
              <span className="font-extralight italic text-jade-700"> road ahead.</span>
            </>
          }
          subtitle="Self-driven or chauffeur-driven — pick the right wheels for the road ahead. All vehicles come insured, snow-ready in winter, and supported by our Srinagar control room."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left benefits */}
          <Reveal className="lg:col-span-6" direction="left">
            <h3 id="cab-title" className="sr-only">
              Cab rental benefits
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, body }, i) => (
                <Reveal
                  key={title}
                  direction={i % 2 === 0 ? 'up' : 'up'}
                  delay={Math.min(i + 1, 5) as 0 | 1 | 2 | 3 | 4 | 5}
                  threshold={0.05}
                >
                  <div className="card-premium group h-full rounded-2xl border border-slate-200/70 bg-white p-5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-jade-50 text-jade-700 transition duration-500 group-hover:bg-jade-700 group-hover:text-white group-hover:rotate-6">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-3 font-display text-base font-bold text-slate-900">
                      {title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                href={`https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent('Hi, I want to enquire about cab rental in Kashmir.')}`}
                variant="primary"
                size="md"
              >
                <Car className="h-4 w-4" />
                Enquire on WhatsApp
              </Button>
              <Button
                href={`tel:${site.phoneRaw}`}
                variant="outline"
                size="md"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </Button>
            </div>
          </Reveal>

          {/* Right fleet */}
          <Reveal className="lg:col-span-6" direction="right">
            <div className="card-premium overflow-hidden rounded-[28px] border border-slate-200/70 bg-white">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=70"
                  alt="SUV driving through Kashmir mountains"
                  className="h-full w-full object-cover transition-transform duration-[1.6s] hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/75 via-ink-900/15 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                  <p className="font-display text-xl font-bold">Our Fleet</p>
                  <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur">
                    Insured · GPS
                  </span>
                </div>
              </div>

              <ul className="divide-y divide-slate-100">
                {fleet.map((row) => (
                  <li
                    key={row.name}
                    className="flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-jade-50/40"
                  >
                    <div>
                      <p className="font-display text-base font-bold text-slate-900">
                        {row.name}
                      </p>
                      <p className="text-xs text-slate-500">{row.model} · {row.seats}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg font-extrabold text-brand-800">
                        {row.price}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        per day
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="px-6 pb-5 pt-1 text-xs text-slate-500">
                Indicative rates ex-Srinagar. Final quote depends on route, season, and
                duration.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
