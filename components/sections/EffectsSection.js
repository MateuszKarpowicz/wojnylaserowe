'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorContainer from '@/components/ui/ErrorContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';
import { useCarousel } from '@/components/hooks/useCarousel';
import { useAsyncOperation } from '@/components/hooks/useAsyncOperation';
import { BaseSection } from '@/components/base';
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
      <BaseSection className="py-8 bg-lightBg">
        <div className="text-center">
          <LoadingSpinner message={effectsData.loading.message} />
        </div>
      </BaseSection>
    );
  }

  if (error) {
    return (
      <BaseSection className="py-8 bg-lightBg">
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
    <BaseSection id="efekty" className="py-8 bg-lightBg">
      {/* NAGŁÓWEK SEKCJI */}
      <SectionHeader 
        title={effectsData.title}
        subtitle={effectsData.subtitle}
        className="text-center mb-12"
        subtitleClassName="text-lg text-gray-700 max-w-2xl mx-auto"
      />

      {/* KARUZELA ZDJĘĆ */}
      <div className="relative">
        {/* ZDJĘCIE */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {effectsData.images.map((effect) => (
              <div key={effect.id} className="w-full flex-shrink-0">
                <Image
                  src={effect.src}
                  alt={effect.alt}
                  width={800}
                  height={600}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* NAWIGACJA STRZAŁKAMI */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
          aria-label={effectsData.navigation.previous}
        >
          <FaChevronLeft className="text-gray-800 text-xl" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
          aria-label={effectsData.navigation.next}
        >
          <FaChevronRight className="text-gray-800 text-xl" />
        </button>
      </div>

      {/* KROPKI NAWIGACYJNE */}
      <div className="flex justify-center gap-2 mt-8">
        {effectsData.images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-neonBlue' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`${effectsData.navigation.goTo} ${index + 1}`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-700 mb-6">
          {effectsData.cta.text}
        </p>
        <CTAButton href={effectsData.cta.href}>
          {effectsData.cta.button}
        </CTAButton>
      </div>
    </BaseSection>
  );
}