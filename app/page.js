import {
  Button,
  Container,
  Section,
  SectionHeader,
} from '@/components/primitives';
import EffectsCarousel from '@/components/ui/EffectsCarousel';
import FAQAccordion from '@/components/ui/FAQAccordion';
import MapSection from '@/components/ui/MapSection';
import ProcessSection from '@/components/ui/ProcessSection';
import QualificationsSection from '@/components/ui/QualificationsSection';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import faqData from '@/content/texts/faq.json';
import testimonialsData from '@/content/texts/testimonials.json';
import Image from 'next/image';

export default function Home() {
  const topFaqCategory = faqData?.categories?.[0];
  const topFaqItems = topFaqCategory?.questions?.slice(0, 4) || [];
  return (
    <main className='w-full'>
      {/* Hero heading jak na innych podstronach */}
      <Section bg='surface' className='border-b border-border-border'>
        <SectionHeader
          title='Zamień Przeszłość Na Nowy Początek!!!'
          variant='dark'
          align='center'
          className='hero-title-offset'
        />
      </Section>

      {/* Pełno-szerokościowe zdjęcie, kadrowane od góry */}
      <section className='w-full mt-0 overflow-x-hidden'>
        <Image
          src='/images/main/piter.webp'
          alt='Wojny Laserowe — główne zdjęcie'
          width={1920}
          height={1080}
          priority
          sizes='100vw'
          className='w-full h-[70vh] md:h-[80vh] object-cover object-top'
        />
      </section>

      {/* Jak to działa – 3 kroki (ProcessSection) */}
      <Section bg='surface'>
        <Container>
          <SectionHeader title='Jak to działa?' variant='dark' />
          <ProcessSection variant='landing' />
        </Container>
      </Section>

      {/* Dlaczego my – kwalifikacje (reuse) */}
      <QualificationsSection
        data={require('@/content/texts/about-page.json').qualifications}
      />

      {/* Oferta – CTA do konfiguratora/drawera (globalny slider jest w layout) */}
      <Section bg='surface'>
        <Container>
          <SectionHeader title='Oferta' variant='dark' />
          <p className='text-center text-text-dark/80 max-w-2xl mx-auto'>
            Skonfiguruj usługę i umów darmową konsultację.
          </p>
          <div className='mt-6 text-center'>
            <Button as='a' href='/kontakt' variant='ctaBlue' size='md'>
              Darmowa konsultacja
            </Button>
          </div>
        </Container>
      </Section>

      {/* Przed/Po – karuzela zdjęć bez nawigacji */}
      <Section bg='dark'>
        <Container>
          <SectionHeader title='Efekty naszych zabiegów' variant='light' />
          <div className='max-w-md mx-auto w-full'>
            <EffectsCarousel intervalMs={4000} frameSizeClass='w-full' />
            <div className='mt-6'>
              <Button
                as='a'
                href='/efekty'
                variant='ctaPurple'
                size='md'
                fullWidth={true}
              >
                Zobacz pełną galerię
              </Button>
            </div>
          </div>
        </Container>
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

      {/* FAQ – skrót 4 pytania (przeniesione na dół) */}
      <Section bg='surface'>
        <Container>
          <SectionHeader title='Najczęstsze pytania' variant='dark' />
          <div className='space-y-4'>
            {topFaqItems.map((q, i) => (
              <FAQAccordion key={i} item={q} index={i} />
            ))}
          </div>
          <div className='mt-6 text-center'>
            <Button as='a' href='/faq' variant='link' size='md'>
              Zobacz wszystkie pytania →
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
