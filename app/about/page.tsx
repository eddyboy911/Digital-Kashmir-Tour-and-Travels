import { AboutHero } from '@/components/AboutHero';
import { AboutStory } from '@/components/AboutStory';
import { AboutValues } from '@/components/AboutValues';
import { AboutTeam } from '@/components/AboutTeam';
import { AboutStats } from '@/components/AboutStats';
import { AboutCta } from '@/components/AboutCta';

export const metadata = {
  title: 'About',
  description:
    'Digital Kashmir Tour & Travels is a small, licensed team of trip designers based in Srinagar. Meet the team and learn what drives us.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutStats />
      <AboutCta />
    </>
  );
}
