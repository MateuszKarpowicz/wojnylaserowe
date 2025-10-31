import { QualificationsSection } from '@/components/features/about';
import { EffectsCarousel } from '@/components/features/effects';
import { FAQAccordion } from '@/components/features/faq';
import { LandingHero } from '@/components/features/landing';
import { Button, Section } from '@/components/primitives';
import {
  InstagramSection,
  MapSection,
  ProcessSection,
  TestimonialsCarousel,
} from '@/components/ui';
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
  const topFaqCategory = faqData?.categories?.[0];
  const topFaqItems = topFaqCategory?.questions?.slice(0, 4) || [];
  return (
    <>
      {/* Hero sekcja */}
      <LandingHero />

      {/* Jak to działa – 3 kroki (ProcessSection) */}
      <Section bg='surface' title='Jak to działa?'>
        <ProcessSection
          variant='landing'
          data={{ steps: scarinkPageData.process.steps }}
        />
      </Section>

      {/* Dlaczego my – kwalifikacje (reuse) */}
      <QualificationsSection data={aboutPageData.qualifications} />

      {/* Instagram embed */}
      <InstagramSection />

      {/* Przed/Po – karuzela zdjęć */}
      <Section
        bg='dark'
        title='Efekty naszych zabiegów'
        containerProps={{ maxWidth: 'md' }}
      >
        <EffectsCarousel intervalMs={4000} frameSizeClass='w-full' />
        <Button
          as='a'
          href='/efekty'
          variant='ctaPurple'
          size='md'
          fullWidth={true}
          className='mt-6'
        >
          Zobacz pełną galerię
        </Button>
      </Section>

      {/* Opinie klientów – karuzela */}
      <TestimonialsCarousel
        title={testimonialsData.title}
        items={testimonialsData.items}
        intervalMs={3000}
        external={testimonialsData.external}
      />

      {/* Mapa dojazdu */}
      <MapSection
        studioName='STUDIO KULT'
        addressLines={[
          'Aleja Zygmunta Krasińskiego 1',
          '31-111 Kraków',
          'JUBILAT',
          'III piętro',
        ]}
      />

      {/* FAQ – skrót 4 pytania */}
      <Section bg='surface' title='Najczęstsze pytania'>
        <div className='space-y-4'>
          {topFaqItems.map((q, i) => (
            <FAQAccordion key={q.question || `faq-${i}`} item={q} index={i} />
          ))}
        </div>
        <Button
          as='a'
          href='/faq'
          variant='link'
          size='md'
          className='mt-6 block text-center'
        >
          Zobacz wszystkie pytania →
        </Button>
      </Section>
    </>
  );
}
