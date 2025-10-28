/**
 * BaseCarousel - Komponent bazowy dla wszystkich karuzeli
 * 
 * Eliminuje duplikację logiki karuzeli poprzez:
 * - Jednolitą strukturę karuzeli z nawigacją
 * - Spójne style i animacje
 * - Elastyczne opcje konfiguracji
 * - Accessibility (aria, keyboard, focus)
 * 
 * @param {Array} items - Tablica elementów karuzeli
 * @param {number} currentIndex - Aktualny indeks
 * @param {Function} onNext - Funkcja następnego elementu
 * @param {Function} onPrev - Funkcja poprzedniego elementu
 * @param {Function} onGoTo - Funkcja przejścia do konkretnego indeksu
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Funkcja renderująca elementy karuzeli
 * @returns {JSX.Element} Karuzela z nawigacją
 */

'use client';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function BaseCarousel({ 
  items = [],
  currentIndex = 0,
  onNext,
  onPrev,
  onGoTo,
  className = "",
  showArrows = true,
  showDots = true,
  arrowClassName = "",
  dotClassName = "",
  children
}) {
  if (!items.length) return null;

  return (
    <div className={`relative ${className}`}>
      {/* KARUZELA */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={item.id || index} className="w-full flex-shrink-0">
              {children ? children(item, index) : item}
            </div>
          ))}
        </div>
      </div>

      {/* NAWIGACJA STRZAŁKAMI - tylko na desktop */}
      {showArrows && (
        <>
          <button
            onClick={onPrev}
            className={`hidden md:block absolute left-4 btn-nav-arrow shadow-lg ${arrowClassName}`}
            aria-label="Poprzedni element"
          >
            <FaChevronLeft className="text-gray-800 text-xl" />
          </button>

          <button
            onClick={onNext}
            className={`hidden md:block absolute right-4 btn-nav-arrow shadow-lg ${arrowClassName}`}
            aria-label="Następny element"
          >
            <FaChevronRight className="text-gray-800 text-xl" />
          </button>
        </>
      )}

      {/* KROPKI NAWIGACYJNE - tylko na desktop */}
      {showDots && (
        <div className={`hidden md:flex justify-center gap-2 mt-8 ${dotClassName}`}>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => onGoTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-neonBlue' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Przejdź do elementu ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
