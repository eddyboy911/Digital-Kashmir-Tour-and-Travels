import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { ScrollProgress } from '@/components/ScrollProgress';
import { site } from '@/lib/site';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
  default: `${site.name} ${site.tagline}`,
  template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL('https://digitalkashmir.example'),
  openGraph: {
  title: `${site.name} ${site.tagline}`,
  description: site.description,
  url: 'https://digitalkashmir.example',
  siteName: site.name,
  locale: 'en_IN',
  type: 'website',
  },
  twitter: {
  card: 'summary_large_image',
  title: `${site.name} ${site.tagline}`,
  description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: '#1E40AF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" className={jakarta.variable}>
  <body>
    <a
    href="#main"
    className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
    Skip to main content
    </a>
    <ScrollProgress />
    <Header />
    <main id="main">{children}</main>
    <Footer />
    <FloatingButtons />
  </body>
  </html>
  );
}
