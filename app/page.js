import Image from 'next/image';
import { Section, SectionHeader, Container } from '@/components/primitives';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import testimonialsData from '@/content/texts/testimonials.json';
import MapSection from '@/components/ui/MapSection';

export default function Home() {
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
    </main>
  );
}
