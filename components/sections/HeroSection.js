import Image from 'next/image';
import { BaseSection } from '@/components/base';
import heroData from '@/content/texts/hero.json';

export default function HeroSection() {
  return (
    <BaseSection 
      id="hero"
      className="bg-lightBg text-textDark container-sm section-pad"
    >
      {/* GŁÓWNY TYTUŁ */}
      <div className="text-center mb-2">
        <h1 className="font-normal text-3xl md:text-5xl text-textDark leading-tight mb-4">
          {heroData.title}
        </h1>
      </div>

      {/* ZDJĘCIE HERO */}
      <div className="text-center mb-12">
        <div className="w-full  mx-auto">
          <Image
            src="/images/hero/hero.webp"
            alt={heroData.imageAlt}
            width={400}
            height={300}
            className=" shadow-lg w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* TEKST POD ZDJĘCIEM */}
      <div className="text-center space-y-2">
        <p className="text-lg text-gray-600 font-normal">
          {heroData.subtitle}
        </p>
        
        <div className="space-y-3 text-gray-700 leading-relaxed">
          {heroData.description.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </BaseSection>
  );
}