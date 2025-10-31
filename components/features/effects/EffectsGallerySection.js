import { Section } from '@/components/primitives';
import EffectsGalleryClient from '@/components/features/effects/EffectsGalleryClient';

/**
 * Sekcja galerii efektów z wrapperem
 */
export default function EffectsGallerySection() {
  return (
    <Section bg='dark'>
      <EffectsGalleryClient />
    </Section>
  );
}
