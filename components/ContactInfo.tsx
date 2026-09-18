import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';

export function ContactInfo() {
  return (
    <div className="grid gap-6 lg:sticky lg:top-28">
      <Reveal direction="right">
        <div className="card-premium rounded-[28px] border border-slate-200/70 bg-white p-7 shadow-card">
          <h2 className="font-display text-xl font-bold text-slate-900">
            Other ways to reach us
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Prefer to call or message? We answer in person, day or night.
          </p>

          <ul className="mt-6 space-y-5">
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-jade-50 text-jade-700">
                <Phone className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Phone
                </p>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="mt-1 block font-display text-base font-bold text-slate-900 hover:text-brand-700"
                >
                  {site.phone}
                </a>
                <a
                  href={`tel:+91${site.phoneSecondary.replace(/\D/g, '').slice(-10)}`}
                  className="block text-sm text-slate-600 hover:text-brand-700"
                >
                  {site.phoneSecondary}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-jade-50 text-jade-700">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent('Hi, I have a question about a Kashmir trip.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-display text-base font-bold text-slate-900 hover:text-brand-700"
                >
                  Chat with a trip designer
                </a>
                <p className="text-sm text-slate-500">Replies in under 15 minutes</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-jade-50 text-jade-700">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block break-all font-display text-base font-bold text-slate-900 hover:text-brand-700"
                >
                  {site.email}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-jade-50 text-jade-700">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Office
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">{site.address}</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-jade-50 text-jade-700">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Hours
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">{site.hours}</p>
              </div>
            </li>
          </ul>
        </div>
      </Reveal>

      <Reveal direction="right" delay={1}>
        <div className="card-premium rounded-[28px] border border-slate-200/70 bg-white p-7 shadow-card">
          <h3 className="font-display text-lg font-bold text-slate-900">Licensed &amp; verified</h3>
          <p className="mt-2 text-sm text-slate-600">
            Recognised by JK Tourism. Registration details available on request.
          </p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2">
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">JK Tourism</dt>
              <dd className="font-mono text-xs font-semibold text-slate-700">
                {site.registration}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">UDYAM</dt>
              <dd className="font-mono text-xs font-semibold text-slate-700">
                {site.udyam}
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </div>
  );
}
