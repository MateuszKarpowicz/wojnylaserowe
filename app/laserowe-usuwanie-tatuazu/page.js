import AftercareSection from '@/components/ui/AftercareSection';
import CTASection from '@/components/ui/CTASection';
import CoolingSection from '@/components/ui/CoolingSection';
import HowItWorksSection from '@/components/ui/HowItWorksSection';
import RemovalHero from '@/components/ui/RemovalHero';
import WhyChooseSection from '@/components/ui/WhyChooseSection';
import SectionWrapper from '@/components/ui/SectionWrapper';
import removalPageData from '@/content/texts/removal-page.json';

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function LaseroweUsuwanieTatuazu() {
  const { howItWorks, cooling, aftercare, whyChoose, cta } = removalPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <RemovalHero />
      <SectionWrapper title={howItWorks.title} bgColor='bg-dark'>
        <HowItWorksSection howItWorks={howItWorks} />
      </SectionWrapper>
      <CoolingSection data={{ cooling }} />
      <SectionWrapper title={aftercare.title} bgColor='bg-dark'>
        <AftercareSection aftercare={aftercare} />
      </SectionWrapper>
      <SectionWrapper title={whyChoose.title} bgColor='surface'>
        <WhyChooseSection points={whyChoose.points} />
      </SectionWrapper>
      <CTASection
        title={cta.title}
        text={cta.text}
        href={cta.href}
        button={cta.button}
        variant='blue'
        bgColor='surface'
      />
    </main>
  );
}
