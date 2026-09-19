'use client';

import { useState } from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Sparkles, Twitter } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // TODO: hook up to a real newsletter provider (Mailchimp / ConvertKit / etc.).
  if (!email) return;
  setStatus('success');
  setEmail('');
  setTimeout(() => setStatus('idle'), 3000);
  };

  const important = [
  { href: '/#destinations', label: 'Destinations' },
  { href: '/#packages', label: 'Book a Package' },
  { href: '/#packages', label: 'Book a Ticket' },
  { href: '/#faq', label: 'FAQ' },
  ];

  const company = [
  { href: '/about', label: 'About Us' },
  { href: '/#destinations', label: 'Destinations' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/#testimonials', label: 'Reviews' },
  ];

  return (
  <footer
  id="contact"
  aria-labelledby="footer-title"
  className="bg-ink-900 text-slate-300"
  >
  <h2 id="footer-title" className="sr-only">
    Footer Contact, links and newsletter
  </h2>

  <Container className="py-20 sm:py-24">
    {/* Top large brand mark + tagline */}
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div className="lg:col-span-5">
    <div className="flex items-center gap-3">
      <span
      aria-hidden
      className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-jade-500 to-brand-700 text-white shadow-soft"
      >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      >
      <path d="M3 19l4-9 4 5 3-7 3 4 4-3" />
      <path d="M3 19h18" />
      </svg>
      </span>
      <div>
      <p className="font-display text-lg font-extrabold text-white">
      {site.name}
      </p>
      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300">
      {site.tagline}
      </p>
      </div>
    </div>

    <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
      {site.description} Licensed by JK Tourism your safety and satisfaction
      are our only KPIs.
    </p>

    <div className="mt-7 flex items-center gap-2">
      {site.socials.facebook && (
        <a
        href={site.socials.facebook}
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:border-jade-400 hover:text-jade-300"
        >
        <Facebook className="h-4 w-4" />
        </a>
      )}
      {site.socials.twitter && (
        <a
        href={site.socials.twitter}
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:border-jade-400 hover:text-jade-300"
        >
        <Twitter className="h-4 w-4" />
        </a>
      )}
      {site.socials.instagram && (
        <a
        href={site.socials.instagram}
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:border-jade-400 hover:text-jade-300"
        >
        <Instagram className="h-4 w-4" />
        </a>
      )}
    </div>

    <form
      onSubmit={handleSubmit}
      className="mt-8 max-w-sm"
      aria-label="Subscribe to newsletter"
    >
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
      Newsletter
      </p>
      <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/5 p-1">
      <input
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="your@email.com"
      aria-label="Email"
      className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none"
      />
      <button
      type="submit"
      className="rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-brand-950 transition hover:bg-amber-300"
      >
      Subscribe
      </button>
      </div>
      {status === 'success' && (
      <p role="status" className="mt-2 text-xs text-jade-300">
      Thanks! We’ll keep you posted.
      </p>
      )}
    </form>
    </div>

    {/* Link columns */}
    <div className="grid grid-cols-2 gap-10 lg:col-span-7 lg:grid-cols-3 lg:gap-12">
    <div>
      <h3 className="font-display text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
      Important
      </h3>
      <ul className="mt-5 space-y-3 text-sm">
      {important.map((l) => (
      <li key={l.label}>
        <a
        href={l.href}
        className="text-slate-300 transition hover:text-amber-300"
        >
        {l.label}
        </a>
      </li>
      ))}
      </ul>
    </div>

    <div>
      <h3 className="font-display text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
      Company
      </h3>
      <ul className="mt-5 space-y-3 text-sm">
      {company.map((l) => (
      <li key={l.label}>
        <a
        href={l.href}
        className="text-slate-300 transition hover:text-amber-300"
        >
        {l.label}
        </a>
      </li>
      ))}
      </ul>
    </div>

    <div className="col-span-2 lg:col-span-1">
      <h3 className="font-display text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
      Reach us
      </h3>
      <ul className="mt-5 space-y-4 text-sm">
      <li className="flex items-start gap-3">
      <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
      <div>
        <a
        href={`tel:${site.phoneRaw}`}
        className="block text-slate-200 transition hover:text-amber-300"
        >
        {site.phone}
        </a>
        <a
        href={`tel:+91${site.phoneSecondary.replace(/\D/g, '').slice(-10)}`}
        className="block text-slate-400 transition hover:text-amber-300"
        >
        {site.phoneSecondary}
        </a>
      </div>
      </li>
      <li className="flex items-start gap-3">
      <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
      <a
        href={`mailto:${site.email}`}
        className="break-all text-slate-200 transition hover:text-amber-300"
      >
        {site.email}
      </a>
      </li>
      <li className="flex items-start gap-3">
      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
      <span className="text-slate-300">{site.address}</span>
      </li>
      </ul>
    </div>
    </div>
    </div>

    {/* Registration / license */}
    <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-500">
    <span className="font-bold uppercase tracking-[0.22em]">Registered</span>
    <span className="text-slate-400">{site.registration}</span>
    <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
    <span className="text-slate-400">{site.udyam}</span>
    </div>
    <p className="text-xs text-slate-500">
    © {new Date().getFullYear()} {site.name}. All rights reserved.
    </p>
    </div>

    {/* Built-by credit proper placement with separator */}
    <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-8">
    <div className="flex items-center gap-2">
    <Sparkles className="h-3.5 w-3.5 text-amber-300" />
    <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500">
      Designed &amp; developed by
    </span>
    </div>
    <a
    href="https://www.BrandSparc.com"
    target="_blank"
    rel="noopener noreferrer"
    className="link-underline font-display text-base font-extrabold text-amber-300 transition-colors hover:text-amber-200"
    >
    BrandSparc
    </a>
    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
    www.BrandSparc.com
    </span>
    </div>
  </Container>
  </footer>
  );
}
