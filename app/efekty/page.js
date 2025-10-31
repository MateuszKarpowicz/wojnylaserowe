import { EffectsHeader } from '@/components/features/effects';
import {
  CTASection,
  LoadingSpinner,
  StagesSection,
  TestimonialsPlaceholder,
} from '@/components/ui';
import effectsPageData from '@/content/texts/effects-page.json';
import dynamic from 'next/dynamic';

// Lazy load heavy gallery component
const EffectsGallerySection = dynamic(
  () => import('@/components/features/effects/EffectsGallerySection'),
  {
    loading: () => <LoadingSpinner />,
    ssr: true, // Gallery może być SSR
  }
);

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function Efekty() {
  const { header, cta, stages, additional, footer } = effectsPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <EffectsHeader data={{ header, cta }} />
      <EffectsGallerySection />
      <StagesSection data={{ stages, additional }} />
      <TestimonialsPlaceholder />
      <CTASection
        title={footer.text}
        text=''
        href={footer.href}
        button={footer.button}
        variant='blue'
        bg='surface'
      />
    </main>
  );
}
