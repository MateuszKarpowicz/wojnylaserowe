import AboutHero from '@/components/features/about/AboutHero';
import ApproachSection from '@/components/features/about/ApproachSection';
import { CTASection, LocationSection } from '@/components/ui';
import QualificationsSection from '@/components/features/about/QualificationsSection';
import aboutPageData from '@/content/texts/about-page.json';

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function ONas() {
  const { qualifications, approach, location, cta } = aboutPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <AboutHero />
      <QualificationsSection data={qualifications} />
      <ApproachSection data={{ approach, title: approach.title }} />
      <LocationSection data={{ location }} />
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
