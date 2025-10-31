"use client";

import { Card } from '@/components/primitives';
import { cn } from '@/lib/utils';
import { getCardTextClasses } from '@/lib/style-utils';
import { useEffect, useState } from 'react';

/**
 * ProcessSection - Ujednolicony komponent procesu z wariantami
 *
 * Wyświetla kroki procesu z opcjonalną sekcją aftercare i animacjami.
 *
 * @param {'default'|'landing'} variant - Wariant sekcji: 'default' dla stron szczegółowych, 'landing' dla strony głównej
 * @param {Object} data - Dane procesu z polami: steps (Array) i opcjonalnie aftercare (Object)
 * @param {Array} data.steps - Tablica kroków procesu z polami: title, text
 * @param {Object} [data.aftercare] - Obiekt z polami: intro, subtitle, points (Array) - tylko dla variant='default'
 * @returns {JSX.Element} Sekcja z krokami procesu i opcjonalnie aftercare
 */
export default function ProcessSection({ variant = 'default', data }) {
  if (!data || !data.steps) {
    return null;
  }

  const { steps, aftercare } = data;
  const isLanding = variant === 'landing';
  const cardVariant = isLanding ? 'blue' : 'purple';

  // Dla landing - tylko 3 pierwsze kroki
  const displaySteps = isLanding ? steps.slice(0, 3) : steps;

  // Animacje tylko dla landing variant
  const [entered, setEntered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isLanding) {
      const r = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(r);
    }
  }, [isLanding]);

  useEffect(() => {
    if (isLanding) {
      const id = setInterval(
        () => setActiveIndex(prev => (prev + 1) % displaySteps.length),
        3000
      );
      return () => clearInterval(id);
    }
  }, [isLanding, displaySteps.length]);

  return (
    <div className={cn(isLanding ? '' : 'space-y-8')}>
      {/* Grid z krokami procesu */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {displaySteps.map((step, index) => {
          const isActive = isLanding && activeIndex === index;

          // Klasy dla landing variant (z animacjami)
          const landingClasses = isLanding
            ? cn(
                'focus-ring',
                'transition-[opacity,transform,box-shadow] transition-dur-slow ease-[var(--ease-brand)]',
                'opacity-0 translate-y-3 scale-[0.99]',
                entered && 'opacity-100 translate-y-0 scale-100',
                isActive
                  ? 'shadow-glow-blue-strong border-neon-border-blue-strong'
                  : 'shadow-none border-neon-border-blue',
              )
            : '';

          // Layout różni się dla landing vs default
          if (isLanding) {
            return (
              <Card
                key={index}
                variant={cardVariant}
                className={landingClasses}
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <div className='grid grid-cols-[auto_1fr] items-start gap-3'>
                  <div
                    className={cn(
                      'text-5xl md:text-6xl',
                      isActive
                        ? 'text-neon-blue drop-shadow-glow-blue-strong'
                        : 'text-neon-blue/70 drop-shadow-glow-blue-weak',
                    )}
                    aria-hidden='true'
                  >
                    {index + 1}
                  </div>
                  <h3 className='text-lg font-semibold text-text-light m-0'>
                    {step.title}
                  </h3>
                </div>
                <p className='text-sm text-text-light/85 leading-relaxed mt-3'>
                  {step.text}
                </p>
              </Card>
            );
          }

          // Default variant (bez animacji)
          // Używaj helper functions dla spójności kolorów
          const { textClass, descriptionClass, iconClass } = getCardTextClasses(cardVariant);

          return (
            <Card key={index} variant={cardVariant}>
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <div className={cn('text-3xl font-display font-bold', iconClass)}>
                    {index + 1}
                  </div>
                </div>
                <div className='flex-1'>
                  <h3 className={cn('text-lg font-semibold mb-2', textClass)}>
                    {step.title}
                  </h3>
                  <p className={cn('text-sm leading-relaxed', descriptionClass)}>
                    {step.text}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Sekcja aftercare - tylko dla default variant */}
      {!isLanding && aftercare && (
        <div>
          <p className='text-text-light/90 leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
            {aftercare.intro}
          </p>
          <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
            {aftercare.subtitle}
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {aftercare.points.map((point, index) => (
              <Card key={index} variant='purple'>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0'>
                    <div className='text-3xl'>{point.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm text-secondary leading-relaxed'>
                      {point.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
