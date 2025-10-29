import AftercareSectionWithHeader from '@/components/ui/AftercareSectionWithHeader';
import CTASection from '@/components/ui/CTASection';
import CoolingSection from '@/components/ui/CoolingSection';
import HowItWorksSectionWithHeader from '@/components/ui/HowItWorksSectionWithHeader';
import RemovalHero from '@/components/ui/RemovalHero';
import WhyChooseSectionWithHeader from '@/components/ui/WhyChooseSectionWithHeader';
import removalPageData from '@/content/texts/removal-page.json';

export default function LaseroweUsuwanieTatuazu() {
  const { howItWorks, cooling, aftercare, whyChoose, cta } = removalPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      {/* HERO */}
      <RemovalHero />

      {/* JAK DZIAŁA */}
      <HowItWorksSectionWithHeader
        data={{ howItWorks, title: howItWorks.title }}
      />

      {/* CHŁODZENIE */}
      <CoolingSection data={{ cooling }} />

      {/* PIELĘGNACJA */}
      <AftercareSectionWithHeader
        data={{ aftercare, title: aftercare.title }}
      />

      {/* DLACZEGO WARTO */}
      <WhyChooseSectionWithHeader
        data={{ whyChoose, title: whyChoose.title }}
      />

      {/* CTA */}
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
