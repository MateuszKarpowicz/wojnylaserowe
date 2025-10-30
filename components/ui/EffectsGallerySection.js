'use server';
import { Section, Container } from '@/components/primitives';
import EffectsGalleryClient from '@/components/ui/EffectsGalleryClient';

/**
 * Sekcja galerii efektów z wrapperem
 */
export default function EffectsGallerySection() {
  return (
    <Section bg='dark'>
      <Container>
        <EffectsGalleryClient />
      </Container>
    </Section>
  );
}
