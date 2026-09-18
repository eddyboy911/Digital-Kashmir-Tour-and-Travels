import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

export function AboutStory() {
  return (
    <section aria-labelledby="about-story-title" className="section surface-cream">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="eyebrow">Our story</p>
        </Reveal>

        <Reveal delay={1}>
          <h2
            id="about-story-title"
            className="display-lg mt-5 text-balance text-4xl text-slate-900 sm:text-5xl"
          >
            We started in a small office on{' '}
            <span className="font-extralight italic text-jade-700">
              Hazratbal Road.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 text-base leading-relaxed text-slate-600 sm:text-lg">
          <Reveal delay={2}>
            <p>
              Digital Kashmir Tour and Travel was founded in 2018 by a small team that
              grew up on the shores of Dal Lake. We had been guiding friends and family
              through Kashmir for years before we ever called it a business, and what
              started as weekend trip planning became a full-time operation the moment
              the first stranger asked for our phone number.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p>
              We are not a marketplace and we do not aggregate other operators. Every
              itinerary you see on this site was designed by someone on our team who
              has stood in the same spot, eaten the same trout, and watched the same
              sunset you will. Our drivers are local, our houseboat partners have been
              with us for years, and the only hotels and camps we book are ones we
              trust enough to send our own families to.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p>
              Today we are a small, licensed team of nine based out of Srinagar, with a
              fleet of fifty-plus vehicles and partnerships across the valley and
              Ladakh. We do not promise to be the cheapest operator you will find.
              We do promise that the person answering your WhatsApp at 11pm has
              personally been to the place you are asking about, and will tell you
              honestly whether it is worth the drive.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
