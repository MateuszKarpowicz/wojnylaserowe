import { Section } from '@/components/primitives';
import { QualificationsGrid } from '@/components/features/qualifications';

/**
 * Sekcja kwalifikacji z nagłówkiem i wrapperem
 * Sekcja jest teraz tylko kompozycją komponentów.
 * @param {Object} data - Dane kwalifikacji z title i items
 */
export default function QualificationsSection({ data }) {
  return (
    <Section bg='dark' title={data.title}>
      <QualificationsGrid items={data.items} />
    </Section>
  );
}
