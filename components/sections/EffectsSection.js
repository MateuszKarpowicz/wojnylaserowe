'use client';
import Image from 'next/image';
import { BaseCarouselSection } from '@/components/base';
import effectsData from '@/content/texts/effects.json';

export default function EffectsSection() {
  return (
    <BaseCarouselSection
      id="efekty"
      title={effectsData.title}
      subtitle={effectsData.subtitle}
      items={effectsData.images}
      className="section-pad bg-white container"
      autoScrollInterval={4000}
      loadingTime={800}
      loadingMessage={effectsData.loading.message}
      errorTitle={effectsData.error.title}
      showArrows={false}
      showDots={false}
      renderItem={(effect) => (
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={effect.src}
            alt={effect.alt}
            width={800}
            height={600}
            className="w-full h-96 md:h-[500px] object-cover"
            loading="lazy"
          />
        </div>
      )}
    />
  );
}