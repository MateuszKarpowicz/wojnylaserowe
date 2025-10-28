/**
 * BaseCarouselSection - Komponent bazowy dla sekcji z karuzelą
 * 
 * Eliminuje duplikację sekcji z karuzelą poprzez:
 * - Jednolitą strukturę BaseSection + SectionHeader + BaseCarousel
 * - Spójne style i spacing
 * - Elastyczne opcje konfiguracji
 * 
 * @param {string} id - ID sekcji
 * @param {string} title - Tytuł sekcji
 * @param {string} subtitle - Podtytuł sekcji
 * @param {Array} items - Tablica elementów karuzeli
 * @param {string} className - Dodatkowe klasy CSS dla BaseSection
 * @param {number} autoScrollInterval - Interwał auto-scroll w ms
 * @param {number} loadingTime - Czas ładowania w ms
 * @param {string} loadingMessage - Wiadomość ładowania
 * @param {string} errorTitle - Tytuł błędu
 * @param {Function} renderItem - Funkcja renderująca element karuzeli
 * @param {boolean} showArrows - Czy pokazywać strzałki
 * @param {boolean} showDots - Czy pokazywać kropki
 * @returns {JSX.Element} Sekcja z karuzelą
 */

'use client';
import { useEffect } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorContainer from '@/components/ui/ErrorContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import { useCarousel } from '@/components/hooks/useCarousel';
import { useAsyncOperation } from '@/components/hooks/useAsyncOperation';
import { BaseSection } from '@/components/base';

export default function BaseCarouselSection({
  id,
  title,
  subtitle,
  items = [],
  className = "section-pad bg-white container",
  autoScrollInterval = 4000,
  loadingTime = 800,
  loadingMessage = "Ładowanie...",
  errorTitle = "Ups! Nie udało się załadować",
  renderItem,
  showArrows = false,
  showDots = false
}) {
  // Hook useAsyncOperation
  const { isLoading, error, execute } = useAsyncOperation(
    null,
    loadingTime,
    errorTitle
  );

  // Auto-scroll
  useEffect(() => {
    execute();
  }, [execute]);

  // Hook useCarousel
  const { currentIndex, next, prev, goTo } = useCarousel(
    items,
    autoScrollInterval,
    isLoading,
    error
  );

  if (isLoading) {
    return (
      <BaseSection className={className}>
        <div className="text-center">
          <LoadingSpinner message={loadingMessage} />
        </div>
      </BaseSection>
    );
  }

  if (error) {
    return (
      <BaseSection className={className}>
        <div className="text-center">
          <ErrorContainer 
            error={error}
            title={errorTitle}
          />
        </div>
      </BaseSection>
    );
  }

  return (
    <BaseSection id={id} className={className}>
      {/* NAGŁÓWEK SEKCJI */}
      <SectionHeader 
        title={title}
        subtitle={subtitle}
        className="text-center mb-12"
        subtitleClassName="text-lg text-gray-700"
      />

      {/* KARUZELA */}
      <div className="relative">
        {/* STRZAŁKI */}
        {showArrows && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300"
              aria-label="Poprzedni"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300"
              aria-label="Następny"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* SLIDE */}
        <div className="overflow-hidden rounded-lg">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {items.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {renderItem ? renderItem(item) : item}
              </div>
            ))}
          </div>
        </div>

        {/* KROPKI */}
        {showDots && (
          <div className="flex justify-center mt-6 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-neonBlue' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Przejdź do slajdu ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </BaseSection>
  );
}
