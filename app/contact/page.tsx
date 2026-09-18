import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ContactHero } from '@/components/ContactHero';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';

export const metadata = {
  title: 'Contact',
  description:
    'Tell us about your dream Kashmir trip. A trip designer in Srinagar will reply within six hours with a personalised itinerary.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section aria-labelledby="contact-form-title" className="section surface-cream">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal direction="left" className="lg:col-span-7">
              <h2 id="contact-form-title" className="sr-only">
                Enquiry form
              </h2>
              <ContactForm />
            </Reveal>
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
