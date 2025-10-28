'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorContainer from '@/components/ui/ErrorContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import { useCarousel } from '@/components/hooks/useCarousel';
import { useAsyncOperation } from '@/components/hooks/useAsyncOperation';
import { BaseSection, BaseCarousel } from '@/components/base';
import effectsData from '@/content/texts/effects.json';

export default function EffectsSection() {
  // Hook useAsyncOperation
  const { isLoading, error, execute } = useAsyncOperation(
    null, // brak customowej operacji
    800, // 800ms ładowania
    'Wystąpił błąd podczas ładowania efektów.'
  );

  // Auto-scroll co 4 sekundy
  useEffect(() => {
    execute();
  }, [execute]);

  // Hook useCarousel
  const { currentIndex, next, prev, goTo } = useCarousel(
    effectsData.images,
    4000, // 4 sekundy auto-scroll
    isLoading,
    error
  );

  if (isLoading) {
    return (
      <BaseSection className="section-pad bg-white">
        <div className="text-center">
          <LoadingSpinner message={effectsData.loading.message} />
        </div>
      </BaseSection>
    );
  }

  if (error) {
    return (
      <BaseSection className="section-pad bg-white">
        <div className="text-center">
          <ErrorContainer 
            error={error}
            title={effectsData.error.title}
          />
        </div>
      </BaseSection>
    );
  }

  return (
    <BaseSection id="efekty" className="section-pad bg-white">
      {/* NAGŁÓWEK SEKCJI */}
      <SectionHeader 
        title={effectsData.title}
        subtitle={effectsData.subtitle}
        className="text-center mb-12"
        subtitleClassName="text-lg text-gray-700 max-w-2xl mx-auto"
      />

      {/* KARUZELA ZDJĘĆ */}
      <BaseCarousel
        items={effectsData.images}
        currentIndex={currentIndex}
        onNext={next}
        onPrev={prev}
        onGoTo={goTo}
        arrowClassName="bg-white bg-opacity-80 hover:bg-opacity-100"
      >
        {(effect) => (
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={effect.src}
              alt={effect.alt}
              width={800}
              height={600}
              className="w-full h-96 md:h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        )}
      </BaseCarousel>

    </BaseSection>
  );
}