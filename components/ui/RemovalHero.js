import removalPageData from '@/content/texts/removal-page.json';
import Image from 'next/image';
import { Section, SectionHeader, Container } from '@/components/primitives';

export default function RemovalHero() {
  const { hero } = removalPageData;

  return (
    <Section bg='surface' className='pt-10 pb-10 md:pb-14'>
      <Container>
        {/* Nagłówek nad zdjęciem */}
        <SectionHeader title={hero.title} variant='dark' align='center' className='hero-title-offset' />

        <div className='md:grid md:grid-cols-2 gap-8 items-center'>
          {/* Zdjęcie - na mobile pierwsze, na desktop po lewej */}
          <div className='mb-8 md:mb-0 order-1 md:order-1'>
            <div className='relative w-full aspect-square max-w-md mx-auto rounded-lg shadow-xl border-2 border-neon-blue/20 overflow-hidden'>
              <Image
                src='/images/hero/hero.webp'
                alt='Laserowe usuwanie tatuażu'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority
              />
            </div>
          </div>

          {/* Tekst - na mobile drugie, na desktop po prawej */}
          <div className='order-2 md:order-2'>
            <p className='text-xl md:text-2xl text-secondary mb-6 font-semibold'>
              {hero.subtitle}
            </p>
            <div className='space-y-4 text-secondary leading-relaxed'>
              <p>{hero.intro}</p>
              <p>{hero.intro2}</p>
              <p>{hero.intro3}</p>
              <p>{hero.intro4}</p>
              <p>{hero.intro5}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
