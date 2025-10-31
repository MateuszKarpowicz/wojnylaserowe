'use client';
import Image from 'next/image';
import { ImageFrame } from '@/components/primitives';

/**
 * EffectTile - Kafelek z efektem zabiegu dla galerii
 *
 * Wyświetla pojedyncze zdjęcie efektu zabiegu z overlay na hover.
 * Obsługuje kliknięcie do otwarcia modala z pełnym zdjęciem.
 *
 * @param {Object} effect - Obiekt z danymi efektu (src, alt)
 * @param {number} index - Indeks efektu w liście
 * @param {Function} onOpenModal - Callback wywoływany przy kliknięciu
 * @returns {JSX.Element} Kafelek z ImageFrame i overlay hover
 */
export default function EffectTile({ effect, index, onOpenModal }) {
  return (
    <div className='group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl rounded-lg'>
      <div onClick={() => onOpenModal(effect, index)}>
        <ImageFrame variant='plain' aspect='square'>
          <Image
            src={effect.src}
            alt={effect.alt}
            fill
            className='object-cover group-hover:scale-110 transition-transform duration-300'
            loading='lazy'
          />
          {/* OVERLAY NA HOVER */}
          <div className='absolute inset-0 bg-overlay opacity-0 group-hover:opacity-30 transition-all duration-300 flex items-center justify-center'>
            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='bg-surface bg-opacity-90 rounded-full p-3'>
                <svg
                  className='w-6 h-6 text-text-dark'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
                  />
                </svg>
              </div>
            </div>
          </div>
        </ImageFrame>
      </div>
    </div>
  );
}
