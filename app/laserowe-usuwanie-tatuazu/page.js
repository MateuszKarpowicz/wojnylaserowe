import AftercareSection from '@/components/features/about/AftercareSection';
import CoolingSection from '@/components/features/about/CoolingSection';
import HowItWorksSection from '@/components/features/about/HowItWorksSection';
import { CTASection, RemovalHero, WhyChooseSection } from '@/components/ui';
import { Section } from '@/components/primitives';
import removalPageData from '@/content/texts/removal-page.json';

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function LaseroweUsuwanieTatuazu() {
  const { hero, howItWorks, cooling, aftercare, whyChoose, cta } = removalPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <RemovalHero hero={hero} />
      <Section title={howItWorks.title} bg='dark'>
        <HowItWorksSection howItWorks={howItWorks} />
      </Section>
      <CoolingSection data={{ cooling }} />
      <Section title={aftercare.title} bg='dark'>
        <AftercareSection aftercare={aftercare} />
      </Section>
      <Section title={whyChoose.title} bg='surface'>
        <WhyChooseSection points={whyChoose.points} />
      </Section>
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
