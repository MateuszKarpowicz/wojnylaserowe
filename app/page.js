import Image from 'next/image';
import { Section, SectionHeader, Container } from '@/components/primitives';

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
    </main>
  );
}
