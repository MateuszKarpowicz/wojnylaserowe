import { Section } from '@/components/primitives';
import { ContentWithText, PointsGrid, SectionImage } from '@/components/features/content';

/**
 * Sekcja pielęgnacji
 * Używa Section wewnątrz dla spójności.
 * Sekcja jest teraz tylko kompozycją komponentów.
 * @param {Object} aftercare - Dane z intro, subtitle, points, footer
 * @param {string} title - Tytuł sekcji (wymagany)
 * @param {'surface'|'dark'} bg - Kolor tła sekcji (domyślnie: 'dark')
 * @param {string} [subtitle] - Podtytuł sekcji (opcjonalny)
 * @param {'center'|'left'|'right'} [align] - Wyrównanie nagłówka (domyślnie: 'center')
 */
export default function AftercareSection({ aftercare, title, bg = 'dark', subtitle, align = 'center' }) {
  const textVariant = bg === 'dark' ? 'light' : 'dark';

  return (
    <Section bg={bg} title={title} subtitle={subtitle} align={align}>
      <div className='space-y-8'>
        <ContentWithText
          intro={aftercare.intro}
          subtitle={aftercare.subtitle}
          footer={aftercare.footer}
          variant={textVariant}
        />
        <PointsGrid
          points={aftercare.points}
          variant='purple'
          columns={3}
          className='mb-8'
        />
        <SectionImage
          src='/images/hero/hero.webp'
          alt='Pielęgnacja po zabiegu'
          variant='purple'
        />
      </div>
    </Section>
  );
}
