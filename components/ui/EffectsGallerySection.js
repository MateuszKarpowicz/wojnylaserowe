'use client';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Section, Container } from '@/components/primitives';

const EffectsGallery = dynamic(() => import('@/components/ui/EffectsGallery'), {
  ssr: false,
  loading: () => (
    <div className='py-10 flex justify-center'>
      <LoadingSpinner />
    </div>
  ),
});

/**
 * Sekcja galerii efektów z wrapperem
 */
export default function EffectsGallerySection() {
  return (
    <Section bg='dark'>
      <Container>
        <EffectsGallery />
      </Container>
    </Section>
  );
}
