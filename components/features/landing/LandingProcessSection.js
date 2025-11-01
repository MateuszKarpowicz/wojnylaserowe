import { ProcessSection } from '@/components/features/process';

/**
 * LandingProcessSection - Wrapper dla ProcessSection na landing page
 *
 * Sekcja procesu specjalnie dla strony głównej.
 * Używa variant='landing' i tylko 3 pierwsze kroki.
 *
 * @param {Array} steps - Lista kroków procesu
 */
export default function LandingProcessSection({ steps }) {
  return (
    <ProcessSection
      variant='landing'
      data={{ steps }}
      title='Jak to działa?'
      bg='surface'
    />
  );
}
