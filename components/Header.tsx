'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Menu, Phone, Twitter, X } from 'lucide-react';
import clsx from 'clsx';
import { site } from '@/lib/site';

const nav = [
  { href: '/#home', label: 'Home' },
  { href: '/destinations', label: 'Destinations', route: '/destinations' },
  { href: '/packages', label: 'Tour Packages', route: '/packages' },
  { href: '/about', label: 'About', route: '/about' },
  { href: '/contact', label: 'Contact', route: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  const isActive = (item: (typeof nav)[number]) => {
    if (!('route' in item) || !item.route) return false;
    return pathname === item.route || pathname.startsWith(item.route + '/');
  };

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow',
        scrolled ? 'shadow-soft' : 'shadow-none border-b border-slate-200/60',
      )}
    >
      <div className="container-x flex items-center justify-between gap-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label={`${site.name} home`}
        >
          <span
            aria-hidden
            className="float-soft grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-slate-200/70"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt={`${site.name} logo`}
              className="h-full w-full object-contain"
              width={44}
              height={44}
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-extrabold tracking-tight text-slate-900">
              {site.shortName}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-jade-700">
              Tour &amp; Travels
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  aria-current={isActive(item) ? 'page' : undefined}
                  className={clsx(
                    'rounded-full px-3.5 py-2 text-sm font-semibold transition',
                    isActive(item)
                      ? 'text-brand-800'
                      : 'text-slate-700 hover:text-brand-800',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 md:flex">
            {site.socials.facebook && (
              <a
                href={site.socials.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-jade-50 hover:text-jade-700"
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
                className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-jade-50 hover:text-jade-700"
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
                className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-jade-50 hover:text-jade-700"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
          </div>

          <a
            href={`tel:${site.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800 lg:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-brand-700 hover:text-brand-700 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'lg:hidden overflow-hidden bg-white transition-[max-height,opacity] duration-300',
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav aria-label="Mobile" className="container-x pb-6">
          <ul className="mt-2 grid gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive(item) ? 'page' : undefined}
                  className={clsx(
                    'block rounded-2xl px-4 py-3 text-sm font-semibold transition',
                    isActive(item)
                      ? 'bg-jade-50 text-brand-800'
                      : 'text-slate-700 hover:bg-jade-50 hover:text-jade-800',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
