import { Section } from '@/components/primitives';
import { ContentWithText, PointsGrid, SectionImage } from '@/components/features/content';

/**
 * Sekcja "Jak działa"
 * Używa Section wewnątrz dla spójności.
 * Sekcja jest teraz tylko kompozycją komponentów.
 * @param {Object} howItWorks - Dane z intro, subtitle, points, footer
 * @param {string} title - Tytuł sekcji (wymagany)
 * @param {'surface'|'dark'} bg - Kolor tła sekcji (domyślnie: 'dark')
 * @param {string} [subtitle] - Podtytuł sekcji (opcjonalny)
 * @param {'center'|'left'|'right'} [align] - Wyrównanie nagłówka (domyślnie: 'center')
 */
export default function HowItWorksSection({ howItWorks, title, bg = 'dark', subtitle, align = 'center' }) {
  const textVariant = bg === 'dark' ? 'light' : 'dark';

  return (
    <Section bg={bg} title={title} subtitle={subtitle} align={align}>
      <div className='space-y-8'>
        <ContentWithText
          intro={howItWorks.intro}
          subtitle={howItWorks.subtitle}
          footer={howItWorks.footer}
          variant={textVariant}
        />
        <PointsGrid
          points={howItWorks.points}
          variant='purple'
          columns={2}
          className='mb-8'
        />
        <SectionImage
          src='/images/hero/hero.webp'
          alt='Laser pikosekundowy'
          variant='blue'
        />
      </div>
    </Section>
  );
}
