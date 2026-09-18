'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { faq } from '@/lib/data';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="section surface-cream"
    >
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Frequently asked"
          title={
            <>
              Answers before
              <span className="font-extralight italic text-jade-700"> you ask.</span>
            </>
          }
          subtitle="If your question isn’t here, just WhatsApp us — we usually reply in under 15 minutes."
        />

        <Reveal>
          <div className="mt-12 divide-y divide-slate-200 rounded-[28px] border border-slate-200/70 bg-white shadow-soft">
            {faq.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50 sm:px-8 sm:py-6"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-display text-xs font-bold text-jade-700">
                          0{i + 1}
                        </span>
                        <span className="font-display text-base font-bold text-slate-900 sm:text-lg">
                          {item.q}
                        </span>
                      </span>
                      <ChevronDown
                        className={clsx(
                          'h-5 w-5 flex-shrink-0 text-brand-700 transition-transform duration-300',
                          isOpen && 'rotate-180',
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={clsx(
                      'grid overflow-hidden transition-all duration-300 ease-in-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="min-h-0">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600 sm:px-8 sm:pb-7 sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
