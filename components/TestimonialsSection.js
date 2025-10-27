'use client';
import { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LoadingSpinner from './ui/LoadingSpinner';
import ErrorContainer from './ui/ErrorContainer';
import SectionHeader from './ui/SectionHeader';
import CTAButton from './ui/CTAButton';
import { useCarousel } from './hooks/useCarousel';
import { useAsyncOperation } from './hooks/useAsyncOperation';
import { BaseSection, BaseCard } from './base';
import testimonialsData from '../content/texts/testimonials.json';

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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-sm ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <BaseSection className="py-8 bg-gray-50">
        <div className="text-center">
          <LoadingSpinner message={testimonialsData.loading.message} />
        </div>
      </BaseSection>
    );
  }

  if (error) {
    return (
      <BaseSection className="py-8 bg-gray-50">
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
    <BaseSection id="opinie" className="py-8 bg-gray-50">
      {/* NAGŁÓWEK SEKCJI */}
      <SectionHeader 
        title={testimonialsData.title}
        subtitle={testimonialsData.subtitle}
        className="text-center mb-12"
        subtitleClassName="text-lg text-gray-700 max-w-2xl mx-auto"
      />

      {/* KARUZELA OPINII */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.data.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <BaseCard variant="testimonial">
                  {/* GWIAZDKI I OCENA */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      {testimonial.date}
                    </span>
                  </div>
                  {/* TEKST OPINII */}
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  {/* AUTOR */}
                  <div className="text-right">
                    <cite className="text-textDark font-semibold not-italic">
                      — {testimonial.name}
                    </cite>
                  </div>
                </BaseCard>
              </div>
            ))}
          </div>
        </div>

        {/* NAWIGACJA STRZAŁKAMI */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
          aria-label={testimonialsData.navigation.previous}
        >
          <FaChevronLeft className="text-gray-800 text-xl" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
          aria-label={testimonialsData.navigation.next}
        >
          <FaChevronRight className="text-gray-800 text-xl" />
        </button>
      </div>

      {/* KROPKI NAWIGACYJNE */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonialsData.data.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-neonBlue' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Przejdź do opinii ${index + 1}`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-700 mb-6">
          {testimonialsData.cta.text}
        </p>
        <CTAButton href={testimonialsData.cta.href}>
          {testimonialsData.cta.button}
        </CTAButton>
      </div>
    </BaseSection>
  );
}