'use client';

import AboutHeroSlider from '@/components/features/about/AboutHeroSlider';
import { HeroImageText } from '@/components/features/content';
import { useTextTruncation } from '@/components/hooks';
import aboutPageData from '@/content/texts/about-page.json';

export default function AboutHero() {
  const { hero, heroSlider } = aboutPageData;
  // Mobilny skrót ucinany dokładnie po zdaniu "...regeneracją skóry."
  const cutMarker = 'regeneracją skóry.';
  const truncation = useTextTruncation(hero.intro, cutMarker);

  return (
    <HeroImageText
      title={hero.title}
      intro={[hero.intro, hero.intro2]}
      image={{
        src: '/images/hero/hero.webp',
        alt: 'O Mnie - Wojny Laserowe',
        variant: 'blue',
      }}
      slider={
        heroSlider?.items?.length > 0 ? (
          <AboutHeroSlider
            items={heroSlider.items}
            intervalMs={3000}
            fullWidth={false}
            variant='dark'
          />
        ) : null
      }
      truncation={{
        cutMarker,
        ...truncation,
      }}
    />
  );
}
