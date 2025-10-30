'use client';

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

export default function EffectsGalleryClient() {
  return <EffectsGallery />;
}
