import ScarinkWhyChooseSection from '@/components/ui/ScarinkWhyChooseSection';
import SectionWrapper from '@/components/ui/SectionWrapper';

/**
 * Sekcja "Dlaczego warto" ScarINK z nagłówkiem i wrapperem
 * @param {Object} data - Dane whyChoose z title i points
 */
export default function ScarinkWhyChooseSectionWithHeader({ data }) {
  const { whyChoose } = data;

  return (
    <SectionWrapper title={data.title} bgColor='surface'>
      <ScarinkWhyChooseSection points={whyChoose.points} />
    </SectionWrapper>
  );
}
