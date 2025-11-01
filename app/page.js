import { QualificationsSection } from '@/components/features/about';
import {
  LandingEffectsSection,
  LandingFAQSection,
  LandingHero,
  LandingInstagramSection,
  LandingMapSection,
  LandingProcessSection,
  TestimonialsCarousel,
} from '@/components/features/landing';
import aboutPageData from '@/content/texts/about-page.json';
import faqData from '@/content/texts/faq.json';
import scarinkPageData from '@/content/texts/scarink-page.json';
import testimonialsData from '@/content/texts/testimonials.json';

export const metadata = {
  title: 'Wojny Laserowe | Profesjonalne usuwanie tatuaży i blizn w Krakowie',
  description:
    'Profesjonalne usuwanie tatuaży i regeneracja blizn w Krakowie. Najnowocześniejsze techniki laserowe. Zapisz się na konsultację w STUDIO KULT.',
  keywords: [
    'usuwanie tatuaży Kraków',
    'laserowe usuwanie tatuaży',
    'regeneracja blizn',
    'ScarINK',
    'STUDIO KULT',
  ],
};

export default function Home() {
  return (
    <>
      {/* Hero sekcja */}
      <LandingHero />

      {/* Jak to działa – 3 kroki */}
      <LandingProcessSection steps={scarinkPageData.process.steps} />

      {/* Dlaczego my – kwalifikacje */}
      <QualificationsSection data={aboutPageData.qualifications} />

      {/* Instagram embed */}
      <LandingInstagramSection />

      {/* Przed/Po – karuzela zdjęć */}
      <LandingEffectsSection />

      {/* Opinie klientów – karuzela */}
      <TestimonialsCarousel
        title={testimonialsData.title}
        items={testimonialsData.items}
        intervalMs={3000}
        external={testimonialsData.external}
      />

      {/* Mapa dojazdu */}
      <LandingMapSection
        studioName='STUDIO KULT'
        addressLines={[
          'Aleja Zygmunta Krasińskiego 1',
          '31-111 Kraków',
          'JUBILAT',
          'III piętro',
        ]}
      />

      {/* FAQ – skrót 4 pytania */}
      <LandingFAQSection
        items={faqData?.categories?.[0]?.questions?.slice(0, 4) || []}
      />
    </>
  );
}
