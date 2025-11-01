import { EffectsCarousel } from '@/components/features/effects';
import { Button, Section } from '@/components/primitives';

/**
 * LandingEffectsSection - Sekcja efektów na landing page
 *
 * Wyświetla karuzelę efektów z przyciskiem CTA do pełnej galerii.
 */
export default function LandingEffectsSection() {
  return (
    <Section
      bg='dark'
      title='Efekty naszych zabiegów'
      containerProps={{ maxWidth: 'md' }}
    >
      <EffectsCarousel intervalMs={4000} frameSizeClass='w-full' />
      <Button
        as='a'
        href='/efekty'
        variant='cta-purple'
        size='md'
        fullWidth={true}
        className='mt-6'
      >
        Zobacz pełną galerię
      </Button>
    </Section>
  );
}
