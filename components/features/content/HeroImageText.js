'use client';

import Image from 'next/image';
import { Section, Button, ImageFrame } from '@/components/primitives';
import { cn } from '@/lib/utils';

/**
 * HeroImageText - Uniwersalny komponent hero z obrazkiem i tekstem
 *
 * Obsługuje różne warianty:
 * - simple: tylko obrazek + tekst
 * - withSlider: obrazek + slider + tekst (AboutHero)
 * - withTruncation: obrazek + tekst z truncation (AboutHero)
 *
 * @param {string} title - Tytuł hero (wymagany)
 * @param {string} [subtitle] - Podtytuł (opcjonalny)
 * @param {Array<string>|string} intro - Tekst intro (może być tablicą akapitów)
 * @param {Object} image - { src, alt, variant?, sizes? }
 * @param {React.ReactNode} [slider] - Opcjonalny slider między obrazkiem a tekstem
 * @param {Object} [truncation] - { cutMarker, mobileText, restText, isExpanded, toggle }
 * @param {string} [className] - Dodatkowe klasy CSS
 */
export default function HeroImageText({
  title,
  subtitle,
  intro,
  image,
  slider,
  truncation,
  className = '',
}) {
  // Obsługa intro jako tablicy lub stringa
  const introItems = Array.isArray(intro) ? intro : [intro].filter(Boolean);
  const hasTruncation = truncation && truncation.cutMarker;

  return (
    <Section bg='surface' className={cn('border-b border-border-border', className)}>
      {/* Nagłówek nad zdjęciem – ujednolicony */}
      <h1 className='font-display uppercase text-center leading-tight tracking-[0.08em] md:tracking-[0.12em] text-4xl md:text-5xl hero-title-offset whitespace-pre-line'>
        {title}
      </h1>

      <div className='md:grid md:grid-cols-2 gap-6 items-center'>
        {/* Zdjęcie - na mobile pierwsze, na desktop po lewej */}
        <div className='mb-6 md:mb-0 mt-4 md:mt-6'>
          {image.variant ? (
            <ImageFrame
              variant={image.variant}
              aspect='square'
              sizeClass='max-w-md mx-auto'
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover'
                sizes={image.sizes || '(max-width: 768px) 100vw, 50vw'}
                priority
              />
            </ImageFrame>
          ) : (
            <div className='relative w-full aspect-square max-w-md mx-auto rounded-lg shadow-xl border-2 border-neon-border-blue overflow-hidden'>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover'
                sizes={image.sizes || '(max-width: 768px) 100vw, 50vw'}
                priority
              />
            </div>
          )}
        </div>

        {/* Tekst - na mobile drugie, na desktop po prawej */}
        <div>
          {/* Slider (jeśli podano) */}
          {slider && <div className='mb-4'>{slider}</div>}

          {/* Subtitle */}
          {subtitle && (
            <p className='text-xl md:text-2xl text-secondary mb-6 font-semibold'>
              {subtitle}
            </p>
          )}

          {/* Tekst z truncation (AboutHero) */}
          {hasTruncation ? (
            <div className='text-secondary leading-relaxed'>
              {/* Mobile: pokaż ucięty intro */}
              <p className='md:hidden'>{truncation.mobileText}</p>
              {/* Desktop: pełny pierwszy akapit */}
              <p className='hidden md:block'>{introItems[0]}</p>

              {/* Desktop/tablet: pełny tekst */}
              {introItems.length > 1 && (
                <div className='hidden md:block space-y-3'>
                  {introItems.slice(1).map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              )}

              {/* Mobile: skrót + przycisk "czytaj dalej" */}
              <div className='md:hidden'>
                {truncation.isExpanded ? (
                  <>
                    <div className='space-y-3'>
                      {truncation.restText && <p>{truncation.restText}</p>}
                      {introItems.slice(1).map((text, idx) => (
                        <p key={idx}>{text}</p>
                      ))}
                    </div>
                    <Button
                      as='button'
                      type='button'
                      variant='cta-blue'
                      size='md'
                      fullWidth={true}
                      className='mt-3'
                      onClick={truncation.toggle}
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
                    onClick={truncation.toggle}
                  >
                    CZYTAJ DALEJ
                  </Button>
                )}
              </div>
            </div>
          ) : (
            /* Tekst bez truncation (prosty) */
            <div className='space-y-4 text-secondary leading-relaxed'>
              {introItems.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
