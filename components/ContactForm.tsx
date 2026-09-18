'use client';

import { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
} from 'lucide-react';
import { packages } from '@/lib/data';
import { site } from '@/lib/site';

interface FormState {
  name: string;
  email: string;
  phone: string;
  package: string;
  travellers: string;
  dates: string;
  message: string;
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  package: '',
  travellers: '',
  dates: '',
  message: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus('error');
      setErrorMessage(
        'Form is not configured yet — please WhatsApp us directly or add the Web3Forms access key to .env.local.',
      );
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New enquiry from ${form.name || 'website'}`,
          from_name: 'Digital Kashmir Tour and Travel',
          name: form.name,
          email: form.email,
          phone: form.phone,
          package: form.package,
          travellers: form.travellers,
          travel_dates: form.dates,
          message: form.message,
          botcheck: '',
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus('success');
        setForm(initial);
      } else {
        setStatus('error');
        setErrorMessage(
          data.message || 'Something went wrong. Please try again or WhatsApp us.',
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again or WhatsApp us.');
    }
  };

  if (status === 'success') {
    return (
      <div className="card-premium rounded-[28px] border border-jade-200 bg-jade-50/50 p-10 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-jade-600 text-white shadow-soft">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="display-lg mt-6 text-balance text-3xl text-slate-900 sm:text-4xl">
          Enquiry received.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-base text-slate-600">
          One of our trip designers in Srinagar will reply to{' '}
          <span className="font-semibold text-slate-900">{form.email || 'you'}</span>{' '}
          within six hours. If you would like a quicker response, WhatsApp us
          directly.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/${site.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#1ebe57]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="card-premium rounded-[28px] border border-slate-200/70 bg-white p-7 shadow-card sm:p-9"
    >
      <div className="grid gap-5">
        <Field label="Your name" required>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            placeholder="e.g. Aisha Rahman"
            className={inputClass}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" required>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={update('email')}
              placeholder="you@example.com"
              className={inputClass}
            />
          </Field>
          <Field label="Phone" required>
            <input
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              pattern="[0-9+\-\s()]{7,}"
              value={form.phone}
              onChange={update('phone')}
              placeholder="+91 98765 43210"
              className={inputClass}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Package of interest">
            <select
              name="package"
              value={form.package}
              onChange={update('package')}
              className={inputClass}
            >
              <option value="">Not sure yet</option>
              {packages.map((p) => (
                <option key={p.slug} value={p.title}>
                  {p.title}
                </option>
              ))}
              <option value="Custom">Something custom</option>
            </select>
          </Field>
          <Field label="Travellers">
            <input
              type="text"
              name="travellers"
              value={form.travellers}
              onChange={update('travellers')}
              placeholder="e.g. 2 adults + 1 child"
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Travel dates">
          <input
            type="text"
            name="dates"
            value={form.dates}
            onChange={update('dates')}
            placeholder="e.g. 12 – 19 June 2026"
            className={inputClass}
          />
        </Field>

        <Field label="Message" required>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={update('message')}
            placeholder="Tell us a bit about what you have in mind — destinations, must-dos, budget range, anything we should know."
            className={`${inputClass} resize-y`}
          />
        </Field>

        {/* Honeypot — hidden from real users, catches bots */}
        <input
          type="text"
          name="botcheck"
          value=""
          onChange={() => {}}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
        />
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          We will only use these details to reply to your enquiry.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

const inputClass =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-700/20';

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
        {label}
        {required && <span className="ml-0.5 text-brand-700">*</span>}
      </span>
      {children}
    </label>
  );
}
