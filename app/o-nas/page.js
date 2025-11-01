import { AboutCTASection, AboutHero, ApproachSection, QualificationsSection, LocationSection } from '@/components/features/about';
import aboutPageData from '@/content/texts/about-page.json';

export const metadata = {
  title: 'O Mnie | Wojny Laserowe Kraków',
  description:
    'Piotr Hryniów - profesjonalne usuwanie tatuaży i redukowanie blizn w Krakowie od 2019 roku. Doświadczenie, precyzja i bezpieczeństwo.',
};

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
      <AboutCTASection
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
