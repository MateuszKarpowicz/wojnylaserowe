'use client';
import Image from 'next/image';
import { BaseCard } from '@/components/base';

export default function EffectTile({ effect, index, onOpenModal }) {
  return (
    <BaseCard 
      className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      hover={false}
    >
      <div onClick={() => onOpenModal(effect, index)}>
        {/* ZDJĘCIE */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={effect.src}
            alt={effect.alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
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
    </BaseCard>
  );
}
