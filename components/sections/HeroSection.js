import Image from 'next/image';
import { BaseSection } from '@/components/base';
import heroData from '@/content/texts/hero.json';

export default function HeroSection() {
  return (
    <BaseSection 
      className="min-h-screen bg-lightBg text-textDark px-4 pt-20 pb-8 mx-auto max-w-screen-md"
      maxWidth="max-w-screen-md"
    >
      {/* GŁÓWNY TYTUŁ */}
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl md:text-5xl text-textDark leading-tight">
          {heroData.title}
        </h1>
      </div>

      {/* ZDJĘCIE HERO */}
      <div className="text-center mb-8">
        <div className="w-full max-w-md mx-auto">
          <Image
            src="/images/hero/hero.webp"
            alt={heroData.imageAlt}
            width={400}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto"
            priority
          />
        </div>
      </div>
    </BaseSection>
  );
}