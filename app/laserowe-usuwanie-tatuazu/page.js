import AftercareSectionWithHeader from '@/components/ui/AftercareSectionWithHeader';
import CTASection from '@/components/ui/CTASection';
import CoolingSection from '@/components/ui/CoolingSection';
import HowItWorksSectionWithHeader from '@/components/ui/HowItWorksSectionWithHeader';
import RemovalHero from '@/components/ui/RemovalHero';
import WhyChooseSectionWithHeader from '@/components/ui/WhyChooseSectionWithHeader';
import removalPageData from '@/content/texts/removal-page.json';

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function LaseroweUsuwanieTatuazu() {
  const { howItWorks, cooling, aftercare, whyChoose, cta } = removalPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <RemovalHero />
      <HowItWorksSectionWithHeader
        data={{ howItWorks, title: howItWorks.title }}
      />
      <CoolingSection data={{ cooling }} />
      <AftercareSectionWithHeader
        data={{ aftercare, title: aftercare.title }}
      />
      <WhyChooseSectionWithHeader
        data={{ whyChoose, title: whyChoose.title }}
      />
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
