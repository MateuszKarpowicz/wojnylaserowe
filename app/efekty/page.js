import CTASection from '@/components/ui/CTASection';
import EffectsGallerySection from '@/components/ui/EffectsGallerySection';
import EffectsHeader from '@/components/ui/EffectsHeader';
import StagesSection from '@/components/ui/StagesSection';
import TestimonialsPlaceholder from '@/components/ui/TestimonialsPlaceholder';
import effectsPageData from '@/content/texts/effects-page.json';

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
        bgColor='surface'
      />
    </main>
  );
}
