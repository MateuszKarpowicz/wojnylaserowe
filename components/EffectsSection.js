'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LoadingSpinner from './ui/LoadingSpinner';
import ErrorContainer from './ui/ErrorContainer';
import { simulateAsyncOperation } from '../utils/asyncSimulator';

export default function EffectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const effects = [
    {
      id: 1,
      src: '/images/effects/efekty1.jpg',
      alt: 'Efekt przed i po - usuwanie tatuażu'
    },
    {
      id: 2,
      src: '/images/effects/efekty2.jpg',
      alt: 'Efekt przed i po - usuwanie tatuażu'
    },
    {
      id: 3,
      src: '/images/effects/efekty3.jpg',
      alt: 'Efekt przed i po - usuwanie tatuażu'
    },
    {
      id: 4,
      src: '/images/effects/efekty4.jpg',
      alt: 'Efekt przed i po - usuwanie tatuażu'
    },
    {
      id: 5,
      src: '/images/effects/efekty5.jpg',
      alt: 'Efekt przed i po - usuwanie tatuażu'
    }
  ];

  // Auto-scroll co 4 sekundy
  useEffect(() => {
    const loadEffects = async () => {
      try {
        setIsLoading(true);
        // Use async simulator instead of direct setTimeout
        await simulateAsyncOperation(800);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading effects:', err);
        setError('Wystąpił błąd podczas ładowania efektów.');
        setIsLoading(false);
      }
    };

    loadEffects();
  }, []);

  useEffect(() => {
    if (isLoading || error) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === effects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [effects.length, isLoading, error]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === effects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? effects.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <section className="py-8 bg-lightBg">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="text-center">
            <LoadingSpinner message="Ładowanie efektów..." />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 bg-lightBg">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="text-center">
            <ErrorContainer 
              error={error}
              title="Ups! Nie udało się załadować efektów"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="efekty" className="py-8 bg-lightBg">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            Nasze efekty
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Zobacz jak wyglądają nasze prace - prawdziwe efekty przed i po zabiegach laserowego usuwania tatuaży
          </p>
        </div>

        {/* KARUZELA ZDJĘĆ */}
        <div className="relative">
          {/* ZDJĘCIE */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {effects.map((effect) => (
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
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
            aria-label="Poprzednie zdjęcie"
          >
            <FaChevronLeft className="text-gray-800 text-xl" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
            aria-label="Następne zdjęcie"
          >
            <FaChevronRight className="text-gray-800 text-xl" />
          </button>
        </div>

        {/* KROPKI NAWIGACYJNE */}
        <div className="flex justify-center gap-2 mt-8">
          {effects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-neonBlue' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Przejdź do zdjęcia ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Chcesz zobaczyć więcej efektów? Skontaktuj się z nami!
          </p>
          <a
            href="#oferta"
            className="inline-block bg-neonBlue text-white px-8 py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Zapytaj o wycenę
          </a>
        </div>
      </div>
    </section>
  );
}