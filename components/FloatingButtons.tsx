'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import clsx from 'clsx';
import { site } from '@/lib/site';

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Find the hero section by id, hide the buttons while it's visible.
    const hero = document.getElementById('home');
    if (!hero) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show only after the hero is out of view (user has scrolled down).
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-label="Quick contact"
      className={clsx(
        'fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-300',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <a
        href={`https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent('Hi, I want to enquire about a Kashmir trip.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-105 hover:bg-[#1ebe57]"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-2 hidden whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-soft group-hover:block">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href={`tel:${site.phoneRaw}`}
        aria-label={`Call ${site.phone}`}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-ink-900 text-white shadow-card transition hover:scale-105 hover:bg-brand-800"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-full mr-2 hidden whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-soft group-hover:block">
          Call {site.phone}
        </span>
      </a>
    </div>
  );
}
