'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function EffectsGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <>
      {/* GALERIA KAFELKÓW */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {effects.map((effect, index) => (
          <div
            key={effect.id}
            className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => openModal(effect, index)}
          >
            {/* ZDJĘCIE */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={effect.src}
                alt={effect.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* OVERLAY NA HOVER */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* ZDJĘCIE W MODALU */}
            <div className="relative">
              <Image
                src={effects[currentIndex].src}
                alt={effects[currentIndex].alt}
                width={800}
                height={600}
                className="rounded-lg shadow-2xl max-h-[80vh] w-auto mx-auto"
              />
              
              {/* PRZYCISK ZAMKNIĘCIA */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
                aria-label="Zamknij"
              >
                <FaTimes className="w-6 h-6 text-gray-800" />
              </button>
              
              {/* NAWIGACJA STRZAŁKAMI */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300"
                aria-label="Poprzednie zdjęcie"
              >
                <FaChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300"
                aria-label="Następne zdjęcie"
              >
                <FaChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            
            {/* NUMER ZDJĘCIA */}
            <div className="mt-4 text-center text-white">
              <p className="text-sm text-gray-400">
                {currentIndex + 1} z {effects.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
