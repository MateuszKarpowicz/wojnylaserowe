import { Section } from '@/components/primitives';
import { AdditionalInfoBox, StagesGrid } from '@/components/features/stages';

/**
 * Sekcja etapów usuwania tatuażu z nagłówkiem i wrapperem
 * Sekcja jest teraz tylko kompozycją komponentów.
 * @param {Object} data - Dane stages z title, items i additional
 */
export default function StagesSection({ data }) {
  const { stages, additional } = data;

  return (
    <Section id='etapy-usuwania' bg='surface' title={stages.title}>
      <StagesGrid stages={stages.items} />
      <AdditionalInfoBox title={additional.title} items={additional.items} />
    </Section>
  );
}
