"use client";

import ProcessStepCard from './ProcessStepCard';

/**
 * ProcessStepsGrid - Grid z kartami kroków procesu
 *
 * Renderuje grid z kartami kroków procesu.
 * Dla landing variant pokazuje tylko 3 pierwsze kroki.
 *
 * @param {Array} steps - Tablica kroków do wyświetlenia
 * @param {'landing'|'default'} variant - Wariant renderowania
 * @param {'blue'|'purple'} cardVariant - Wariant kart
 * @param {boolean} entered - Czy sekcja weszła (dla animacji landing)
 * @param {number|null} activeIndex - Indeks aktywnej karty (dla landing variant)
 */
export default function ProcessStepsGrid({
  steps = [],
  variant = 'default',
  cardVariant = 'purple',
  entered = false,
  activeIndex = null,
}) {
  if (!steps || steps.length === 0) return null;

  // Dla landing - tylko 3 pierwsze kroki
  const displaySteps = variant === 'landing' ? steps.slice(0, 3) : steps;

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch'>
      {displaySteps.map((step, index) => (
        <ProcessStepCard
          key={index}
          step={step}
          index={index}
          variant={variant}
          cardVariant={cardVariant}
          entered={entered}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
}
