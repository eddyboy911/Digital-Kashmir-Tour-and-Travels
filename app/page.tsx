import { Hero } from '@/components/Hero';
import { DestinationMarquee } from '@/components/DestinationMarquee';
import { Destinations } from '@/components/Destinations';
import { TourPackages } from '@/components/TourPackages';
import { Gallery } from '@/components/Gallery';
import { CabRental } from '@/components/CabRental';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { BigQuote } from '@/components/BigQuote';
import { Faq } from '@/components/Faq';

export default function HomePage() {
  return (
  <>
  <Hero />
  <DestinationMarquee />
  <Destinations />
  <TourPackages />
  <BigQuote
    quote="They didn’t just plan a trip they planned a story we’ll tell for years. From a private shikara ride at sunset to a driver who knew every shortcut through Sonamarg, every detail felt personal."
    author="Penelope Wiggins"
    role="Honeymoon · London"
  />
  <Gallery />
  <CabRental />
  <WhyChooseUs />
  <Testimonials />
  <Faq />
  </>
  );
}
