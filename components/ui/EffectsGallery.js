'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BaseModal } from '@/components/base';
import { useModal } from '@/components/hooks/useModal';
import { useCarousel } from '@/components/hooks/useCarousel';
import EffectTile from '@/components/ui/EffectTile';
import effectsData from '@/content/texts/effects.json';

export default function EffectsGallery() {
  const { isOpen, open, close } = useModal();
  const { currentIndex, next, prev } = useCarousel(
    effectsData.images,
    null, // brak auto-scroll
    false, // nie loading
    false // nie error
  );

  const openModal = (image, index) => {
    open();
  };

  return (
    <>
      {/* GALERIA KAFELKÓW */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {effectsData.images.map((effect, index) => (
          <EffectTile
            key={effect.id}
            effect={effect}
            index={index}
            onOpenModal={openModal}
          />
        ))}
      </div>

      {/* MODAL */}
      <BaseModal isOpen={isOpen} onClose={close}>
        {/* ZDJĘCIE W MODALU */}
        <div className="relative">
          <Image
            src={effectsData.images[currentIndex].src}
            alt={effectsData.images[currentIndex].alt}
            width={800}
            height={600}
            className="rounded-lg shadow-2xl max-h-[80vh] w-auto mx-auto"
            loading="lazy"
          />
          
          {/* PRZYCISK ZAMKNIĘCIA */}
          <button
            onClick={close}
            className="absolute top-4 right-4 btn-close bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2"
            aria-label="Zamknij"
          >
            <FaTimes className="w-6 h-6 text-gray-800" />
          </button>
          
          {/* NAWIGACJA STRZAŁKAMI */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 btn-nav-arrow"
            aria-label="Poprzednie zdjęcie"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 btn-nav-arrow"
            aria-label="Następne zdjęcie"
          >
            <FaChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        
        {/* NUMER ZDJĘCIA */}
        <div className="mt-4 text-center text-white">
          <p className="text-sm text-gray-400">
            {currentIndex + 1} z {effectsData.images.length}
          </p>
        </div>
      </BaseModal>
    </>
  );
}
