'use client';

import {
  ProcessAftercare,
  ProcessStepsGrid,
} from '@/components/features/process';
import { useProcessAnimations } from '@/components/hooks/useProcessAnimations';
import { Section } from '@/components/primitives';
import { cn } from '@/lib/utils';

/**
 * ProcessSection - Ujednolicony komponent procesu z wariantami
 *
 * Wyświetla kroki procesu z opcjonalną sekcją aftercare i animacjami.
 * Używa Section wewnątrz dla spójności.
 * Sekcja jest teraz tylko kompozycją komponentów.
 *
 * @param {'default'|'landing'} variant - Wariant sekcji: 'default' dla stron szczegółowych, 'landing' dla strony głównej
 * @param {Object} data - Dane procesu z polami: steps (Array) i opcjonalnie aftercare (Object)
 * @param {Array} data.steps - Tablica kroków procesu z polami: title, text
 * @param {Object} [data.aftercare] - Obiekt z polami: intro, subtitle, points (Array) - tylko dla variant='default'
 * @param {string} title - Tytuł sekcji (wymagany)
 * @param {'surface'|'dark'} bg - Kolor tła sekcji (domyślnie: 'surface')
 * @param {string} [subtitle] - Podtytuł sekcji (opcjonalny)
 * @param {'center'|'left'|'right'} [align] - Wyrównanie nagłówka (domyślnie: 'center')
 * @returns {JSX.Element} Sekcja z krokami procesu i opcjonalnie aftercare
 */
export default function ProcessSection({
  variant = 'default',
  data,
  title,
  bg = 'surface',
  subtitle,
  align = 'center',
}) {
  if (!data || !data.steps) {
    return null;
  }

  const { steps, aftercare } = data;
  const isLanding = variant === 'landing';
  const cardVariant = isLanding ? 'blue' : 'purple';

  // Dla landing - tylko 3 pierwsze kroki
  const displaySteps = isLanding ? steps.slice(0, 3) : steps;

  // Animacje tylko dla landing variant
  const { entered, activeIndex } = useProcessAnimations(
    isLanding,
    displaySteps.length
  );

  return (
    <Section bg={bg} title={title} subtitle={subtitle} align={align}>
      <div className={cn(isLanding ? '' : 'space-y-8')}>
        <ProcessStepsGrid
          steps={displaySteps}
          variant={variant}
          cardVariant={cardVariant}
          entered={entered}
          activeIndex={activeIndex}
        />

        {/* Sekcja aftercare - tylko dla default variant */}
        {!isLanding && aftercare && (
          <ProcessAftercare aftercare={aftercare} cardVariant={cardVariant} />
        )}
      </div>
    </Section>
  );
}
