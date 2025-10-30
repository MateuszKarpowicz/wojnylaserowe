import AftercareSection from '@/components/ui/AftercareSection';
import SectionWrapper from '@/components/ui/SectionWrapper';

/**
 * Sekcja pielęgnacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane aftercare z title, intro, subtitle, points, footer
 */
export default function AftercareSectionWithHeader({ data }) {
  const { aftercare } = data;

  return (
    <SectionWrapper title={data.title} bgColor='bg-dark'>
      <AftercareSection aftercare={aftercare} />
    </SectionWrapper>
  );
}
