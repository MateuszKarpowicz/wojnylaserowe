import SectionWrapper from '@/components/ui/SectionWrapper';
import WhyChooseSection from '@/components/ui/WhyChooseSection';

/**
 * Sekcja "Dlaczego warto" z nagłówkiem i wrapperem
 * @param {Object} data - Dane whyChoose z title i points
 */
export default function WhyChooseSectionWithHeader({ data }) {
  const { whyChoose } = data;

  return (
    <SectionWrapper title={data.title} bgColor='surface'>
      <WhyChooseSection points={whyChoose.points} />
    </SectionWrapper>
  );
}
