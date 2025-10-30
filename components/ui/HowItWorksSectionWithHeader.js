import HowItWorksSection from '@/components/ui/HowItWorksSection';
import SectionWrapper from '@/components/ui/SectionWrapper';

/**
 * Sekcja "Jak działa" z nagłówkiem i wrapperem
 * @param {Object} data - Dane howItWorks z title, intro, subtitle, points, footer
 */
export default function HowItWorksSectionWithHeader({ data }) {
  const { howItWorks } = data;

  return (
    <SectionWrapper title={data.title} bgColor='bg-dark'>
      <HowItWorksSection howItWorks={howItWorks} />
    </SectionWrapper>
  );
}
