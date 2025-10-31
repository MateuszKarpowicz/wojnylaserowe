'use client';

import {
  Button,
  Section,
} from '@/components/primitives';
import AboutHeroSlider from '@/components/features/about/AboutHeroSlider';
import { useTextTruncation } from '@/components/hooks';
import aboutPageData from '@/content/texts/about-page.json';
import Image from 'next/image';
import { ImageFrame } from '@/components/primitives';

export default function AboutHero() {
  const { hero } = aboutPageData;
  // Mobilny skrót ucinany dokładnie po zdaniu "...regeneracją skóry."
  const cutMarker = 'regeneracją skóry.';
  const { mobileText, restText, isExpanded, toggle } = useTextTruncation(
    hero.intro,
    cutMarker
  );

  return (
    <Section bg='surface' className='border-b border-border-border'>
      {/* Nagłówek nad zdjęciem – ujednolicony jak na LP */}
      <h1 className='font-display uppercase text-center leading-tight tracking-[0.08em] md:tracking-[0.12em] text-4xl md:text-5xl hero-title-offset whitespace-pre-line'>
        {hero.title}
      </h1>
      <div className='md:grid md:grid-cols-2 gap-6 items-center'>
        {/* Zdjęcie - na mobile pierwsze, na desktop po lewej */}
        <div className='mb-6 md:mb-0 mt-4 md:mt-6'>
              <ImageFrame variant='blue' aspect='square' sizeClass='max-w-md mx-auto'>
                <Image
                  src='/images/hero/hero.webp'
                  alt='O Mnie - Wojny Laserowe'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 50vw'
                  priority
                />
              </ImageFrame>
            </div>

            {/* Tekst - na mobile drugie, na desktop po prawej */}
            <div>
              {/* Slider wewnątrz sekcji, między zdjęciem a tekstem */}
              <AboutHeroSlider
                items={aboutPageData.heroSlider?.items || []}
                intervalMs={3000}
                fullWidth={false}
                variant='dark'
              />
              <div className='text-secondary leading-relaxed'>
                {/* Mobile: pokaż ucięty intro dokładnie po markerze */}
                <p className='md:hidden'>{mobileText}</p>
                {/* Desktop: pełny pierwszy akapit */}
                <p className='hidden md:block'>{hero.intro}</p>

                {/* Desktop/tablet: pełny tekst */}
                <div className='hidden md:block space-y-3'>
                  <p>{hero.intro2}</p>
                </div>

                {/* Mobile: skrót + przycisk "czytaj dalej" */}
                <div className='md:hidden'>
                  {isExpanded ? (
                    <>
                      <div className='space-y-3'>
                        {restText && <p>{restText}</p>}
                        <p>{hero.intro2}</p>
                      </div>
                      <Button
                        as='button'
                        type='button'
                        variant='cta-blue'
                        size='md'
                        fullWidth={true}
                        className='mt-3'
                        onClick={toggle}
                      >
                        ZWIŃ
                      </Button>
                    </>
                  ) : (
                    <Button
                      as='button'
                      type='button'
                      variant='cta-blue'
                      size='md'
                      fullWidth={true}
                      className='mt-3'
                      onClick={toggle}
                    >
                      CZYTAJ DALEJ
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
    </Section>
  );
}
