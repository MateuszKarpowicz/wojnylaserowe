import { HeroImageText } from '@/components/features/content';

/**
 * RemovalHero - Komponent hero dla strony usuwania tatuażu
 *
 * @param {Object} hero - Dane hero z polami: title, subtitle, intro, intro2, intro3, intro4, intro5
 * @returns {JSX.Element} Sekcja hero
 */
export default function RemovalHero({ hero }) {
  if (!hero) {
    return null;
  }

  return (
    <HeroImageText
      title={hero.title}
      subtitle={hero.subtitle}
      intro={[hero.intro, hero.intro2, hero.intro3, hero.intro4, hero.intro5].filter(Boolean)}
      image={{
        src: '/images/hero/hero.webp',
        alt: 'Laserowe usuwanie tatuażu',
      }}
    />
  );
}
