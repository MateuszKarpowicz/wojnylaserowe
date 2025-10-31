'use client';

import dynamic from 'next/dynamic';
import { LoadingSpinner } from '@/components/ui';

const EffectsGallery = dynamic(() => import('@/components/features/effects/EffectsGallery'), {
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
