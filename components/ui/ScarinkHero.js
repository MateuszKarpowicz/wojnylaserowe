import scarinkPageData from '@/content/texts/scarink-page.json';
import Image from 'next/image';
import { Section, Container } from '@/components/primitives';

export default function ScarinkHero() {
  const { hero } = scarinkPageData;

  return (
    <Section bg='surface' className='border-b border-border-border'>
      <Container>
        {/* Nagłówek nad zdjęciem – ujednolicony jak na LP */}
        <h1 className='font-display uppercase text-center leading-tight tracking-[0.08em] md:tracking-[0.12em] text-4xl md:text-5xl hero-title-offset whitespace-pre-line'>
          {hero.title}
        </h1>

        <div className='md:grid md:grid-cols-2 gap-6 items-center'>
          {/* Zdjęcie - na mobile pierwsze, na desktop po lewej */}
          <div className='mb-8 md:mb-0 order-1 md:order-1 mt-4 md:mt-6'>
            <div className='relative w-full aspect-square max-w-md mx-auto rounded-lg shadow-xl border-2 border-neon-blue/20 overflow-hidden'>
              <Image
                src='/images/hero/hero.webp'
                alt='ScarINK - regeneracja blizn'
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
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
