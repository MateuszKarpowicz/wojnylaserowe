'use client';
import { useEffect } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorContainer from '@/components/ui/ErrorContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { useCarousel } from '@/components/hooks/useCarousel';
import { useAsyncOperation } from '@/components/hooks/useAsyncOperation';
import { BaseSection, BaseCarousel } from '@/components/base';
import testimonialsData from '@/content/texts/testimonials.json';

export default function TestimonialsSection() {
  // Hook useAsyncOperation
  const { isLoading, error, execute } = useAsyncOperation(
    null, // brak customowej operacji
    1000, // 1 sekunda ładowania
    'Wystąpił błąd podczas ładowania opinii.'
  );

  // Auto-scroll co 5 sekund
  useEffect(() => {
    execute();
  }, [execute]);

  // Hook useCarousel
  const { currentIndex, next, prev, goTo } = useCarousel(
    testimonialsData.data,
    5000, // 5 sekund auto-scroll
    isLoading,
    error
  );

  if (isLoading) {
    return (
      <BaseSection className="section-pad bg-gray-50">
        <div className="text-center">
          <LoadingSpinner message={testimonialsData.loading.message} />
        </div>
      </BaseSection>
    );
  }

  if (error) {
    return (
      <BaseSection className="section-pad bg-gray-50">
        <div className="text-center">
          <ErrorContainer
            error={error}
            title={testimonialsData.error.title}
          />
        </div>
      </BaseSection>
    );
  }

  return (
    <BaseSection id="opinie" className="section-pad bg-gray-50">
      {/* NAGŁÓWEK SEKCJI */}
      <SectionHeader 
        title={testimonialsData.title}
        subtitle={testimonialsData.subtitle}
        className="text-center mb-12"
        subtitleClassName="text-lg text-gray-700 max-w-2xl mx-auto"
      />

      {/* KARUZELA OPINII */}
      <BaseCarousel
        items={testimonialsData.data}
        currentIndex={currentIndex}
        onNext={next}
        onPrev={prev}
        onGoTo={goTo}
        arrowClassName="bg-white bg-opacity-80 hover:bg-opacity-100"
      >
        {(testimonial) => (
          <TestimonialCard testimonial={testimonial} />
        )}
      </BaseCarousel>

    </BaseSection>
  );
}