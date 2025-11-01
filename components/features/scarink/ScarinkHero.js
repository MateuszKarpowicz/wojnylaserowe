import { HeroImageText } from '@/components/features/content';

/**
 * ScarinkHero - Komponent hero dla strony ScarINK
 *
 * @param {Object} hero - Dane hero z polami: title, subtitle, intro, intro2, intro3
 * @returns {JSX.Element} Sekcja hero
 */
export default function ScarinkHero({ hero }) {
  if (!hero) {
    return null;
  }

  return (
    <HeroImageText
      title={hero.title}
      subtitle={hero.subtitle}
      intro={[hero.intro, hero.intro2, hero.intro3].filter(Boolean)}
      image={{
        src: '/images/hero/hero.webp',
        alt: 'ScarINK - regeneracja blizn',
      }}
    />
  );
}
