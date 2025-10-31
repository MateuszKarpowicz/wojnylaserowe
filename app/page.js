import QualificationsSection from '@/components/features/about/QualificationsSection';
import EffectsCarousel from '@/components/features/effects/EffectsCarousel';
import FAQAccordion from '@/components/features/faq/FAQAccordion';
import { Button, Section } from '@/components/primitives';
import InstagramSection from '@/components/ui/InstagramSection';
import MapSection from '@/components/ui/MapSection';
import ProcessSectionLanding from '@/components/ui/ProcessSectionLanding';
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
        <h1 className='font-display uppercase text-center leading-tight tracking-[0.08em] md:tracking-[0.12em] text-4xl md:text-5xl hero-title-offset'>
          <span className='block'>ZAMIEŃ PRZESZŁOŚĆ</span>
          <span className='block'>NA NOWY POCZĄTEK!</span>
        </h1>
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
      <Section bg='surface' title='Jak to działa?'>
        <ProcessSectionLanding />
      </Section>

      {/* Dlaczego my – kwalifikacje (reuse) */}
      <QualificationsSection
        data={require('@/content/texts/about-page.json').qualifications}
      />

      {/* Instagram embed */}
      <InstagramSection />

      {/* Przed/Po – karuzela zdjęć bez nawigacji */}
      <Section bg='dark' title='Efekty naszych zabiegów'>
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
      <Section bg='surface' title='Najczęstsze pytania'>
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
      </Section>
    </main>
  );
}
