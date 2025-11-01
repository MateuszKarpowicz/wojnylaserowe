import { Section } from '@/components/primitives';
import { ApproachGrid } from '@/components/features/approach';
import { QuoteText } from '@/components/features/content';

/**
 * Sekcja podejścia z nagłówkiem i wrapperem
 * Sekcja jest teraz tylko kompozycją komponentów.
 * @param {Object} data - Dane podejścia z title, quote i points
 */
export default function ApproachSection({ data }) {
  const { approach } = data;

  return (
    <Section bg='surface' title={data.title}>
      <div className='space-y-10'>
        {/* Cytat w kursywie */}
        <QuoteText quote={approach.quote} variant='dark' />

        {/* Zwijane klocki: ikona w środku karty (lewo), tytuł center, trójkąt prawo */}
        <ApproachGrid points={approach.points} />
      </div>
    </Section>
  );
}
