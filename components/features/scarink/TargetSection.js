import { Section } from '@/components/primitives';
import { QuoteCard, PointsGrid, ContentWithText } from '@/components/features/content';

/**
 * Sekcja celu/zasady
 * Używa Section wewnątrz dla spójności.
 * Sekcja jest teraz tylko kompozycją komponentów.
 * @param {Object} data - Dane celu z polami: quote, points, footer
 * @param {string} title - Tytuł sekcji (wymagany)
 * @param {'surface'|'dark'} bg - Kolor tła sekcji (domyślnie: 'surface')
 * @param {string} [subtitle] - Podtytuł sekcji (opcjonalny)
 * @param {'center'|'left'|'right'} [align] - Wyrównanie nagłówka (domyślnie: 'center')
 */
export default function TargetSection({ data, title, bg = 'surface', subtitle, align = 'center' }) {
  if (!data) return null;
  const { target } = data;
  const textVariant = bg === 'dark' ? 'light' : 'dark';

  return (
    <Section bg={bg} title={title} subtitle={subtitle} align={align}>
      <div className='space-y-12'>
        <QuoteCard
          quote={target.quote}
          variant='blue'
          textVariant='light'
        />
        <PointsGrid
          points={target.points}
          variant='blue'
          columns={3}
        />
        <ContentWithText
          footer={target.footer}
          variant={textVariant}
        />
      </div>
    </Section>
  );
}
