"use client";

import { Card } from '@/components/primitives';
import { cn } from '@/lib/utils';
import { getCardTextClasses } from '@/lib/style-utils';

/**
 * ProcessStepCard - Karta pojedynczego kroku procesu
 *
 * Renderuje kartę kroku z numerkiem, tytułem i opisem.
 * Obsługuje warianty landing (z animacjami) i default.
 *
 * @param {Object} step - Obiekt kroku z polami: title, text
 * @param {number} index - Indeks kroku (0-based)
 * @param {'landing'|'default'} variant - Wariant renderowania
 * @param {'blue'|'purple'} cardVariant - Wariant karty
 * @param {boolean} entered - Czy sekcja weszła (dla animacji)
 * @param {number|null} activeIndex - Indeks aktywnej karty (dla landing variant)
 */
export default function ProcessStepCard({
  step,
  index,
  variant = 'default',
  cardVariant = 'purple',
  entered = false,
  activeIndex = null,
}) {
  const isLanding = variant === 'landing';
  const isActive = isLanding && activeIndex === index && activeIndex !== null;

  // Klasy dla landing variant (z animacjami)
  const landingClasses = isLanding
    ? cn(
        'focus-ring',
        'transition-[opacity,transform,box-shadow,border-color] transition-dur-slow ease-[var(--ease-brand)]',
        'opacity-0 translate-y-3 scale-[0.99]',
        entered && 'opacity-100 translate-y-0 scale-100',
        // Animacja aktywnego elementu (tylko glow/shadow, bez efektu hover)
        isActive
          ? 'shadow-glow-blue-strong border-neon-border-blue-strong'
          : 'shadow-card-blue border-neon-blue/30',
      )
    : '';

  if (isLanding) {
    return (
      <Card
        variant={cardVariant}
        className={cn(
          landingClasses,
          'h-full flex flex-col',
          // Na mobile też równa wysokość - min-height zmniejszony o 1/3 (z 200px na ~133px)
          'md:h-full min-h-[133px]',
        )}
        style={{ transitionDelay: `${index * 140}ms` }}
      >
        <div className='flex gap-4 items-start flex-grow'>
          <div className='flex-shrink-0'>
            <div
              className={cn(
                'text-6xl md:text-7xl',
                isActive
                  ? 'text-neon-blue drop-shadow-glow-blue-strong'
                  : 'text-neon-blue/70 drop-shadow-glow-blue-weak',
              )}
              aria-hidden='true'
            >
              {index + 1}
            </div>
          </div>
          <div className='flex-1 text-left'>
            <h3 className='text-xl font-semibold text-text-light m-0 text-left'>
              {step.title}
            </h3>
            <p className='text-sm text-text-light/85 leading-relaxed mt-3 text-left'>
              {step.text}
            </p>
          </div>
        </div>
      </Card>
    );
  }

  // Default variant (bez animacji)
  const { textClass, descriptionClass, iconClass } = getCardTextClasses(cardVariant);

  return (
    <Card variant={cardVariant}>
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
}
