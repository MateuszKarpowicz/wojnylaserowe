import {
  AftercareSection,
  CoolingSection,
  HowItWorksSection,
  RemovalCTASection,
  RemovalHero,
  RemovalWhyChooseSection,
} from '@/components/features/removal';
import removalPageData from '@/content/texts/removal-page.json';

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function LaseroweUsuwanieTatuazu() {
  const { hero, howItWorks, cooling, aftercare, whyChoose, cta } =
    removalPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <RemovalHero hero={hero} />
      <HowItWorksSection
        howItWorks={howItWorks}
        title={howItWorks.title}
        bg='dark'
      />
      <CoolingSection data={{ cooling }} />
      <AftercareSection
        aftercare={aftercare}
        title={aftercare.title}
        bg='dark'
      />
      <RemovalWhyChooseSection
        points={whyChoose.points}
        title={whyChoose.title}
        bg='surface'
      />
      <RemovalCTASection
        title={cta.title}
        text={cta.text}
        href={cta.href}
        button={cta.button}
        variant='blue'
        bg='surface'
      />
    </main>
  );
}
