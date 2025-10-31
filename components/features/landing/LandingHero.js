import { Section } from '@/components/primitives';
import Image from 'next/image';

/**
 * LandingHero - Komponent hero dla strony głównej (landing page)
 *
 * @returns {JSX.Element} Sekcja hero z nagłówkiem i pełno-szerokościowym zdjęciem
 */
export default function LandingHero() {
  return (
    <>
      {/* Hero heading - też ma scroll snap przez Section component */}
      <Section bg='surface' className='border-b border-border-border'>
        <h1 className='font-display uppercase text-center leading-tight tracking-[0.08em] md:tracking-[0.12em] text-4xl md:text-5xl hero-title-offset'>
          <span className='block'>ZAMIEŃ PRZESZŁOŚĆ</span>
          <span className='block'>NA NOWY POCZĄTEK!</span>
        </h1>
      </Section>

      {/* Hero image - pełno-szerokościowe */}
      <section className='bg-surface py-0 overflow-x-hidden'>
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
    </>
  );
}
