import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

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
    <section className='section-pad bg-bg-dark'>
      <div className='section-wrap'>
        <EffectsGallery />
      </div>
    </section>
  );
}
