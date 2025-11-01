import { Section } from '@/components/primitives';
import { ContentWithText, PointsGrid } from '@/components/features/content';

/**
 * Sekcja metody
 * Używa Section wewnątrz dla spójności.
 * Sekcja jest teraz tylko kompozycją komponentów.
 * @param {Object} data - Dane metody z polami: intro, subtitle, effects, footer
 * @param {string} title - Tytuł sekcji (wymagany)
 * @param {'surface'|'dark'} bg - Kolor tła sekcji (domyślnie: 'dark')
 * @param {string} [subtitle] - Podtytuł sekcji (opcjonalny)
 * @param {'center'|'left'|'right'} [align] - Wyrównanie nagłówka (domyślnie: 'center')
 */
export default function MethodSection({ data, title, bg = 'dark', subtitle, align = 'center' }) {
  if (!data) return null;
  const { method } = data;
  const textVariant = bg === 'dark' ? 'light' : 'dark';

  return (
    <Section bg={bg} title={title} subtitle={subtitle} align={align}>
      <div className='mb-8'>
        <ContentWithText
          intro={method.intro}
          subtitle={method.subtitle}
          footer={method.footer}
          variant={textVariant}
        />
        <PointsGrid
          points={method.effects}
          variant='purple'
          columns={3}
          className='mb-8 max-w-5xl mx-auto'
        />
      </div>
    </Section>
  );
}
