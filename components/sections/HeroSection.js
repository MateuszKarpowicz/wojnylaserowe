import Image from 'next/image';
import { BaseSection } from '@/components/base';
import heroData from '@/content/texts/hero.json';

export default function HeroSection() {
  return (
    <BaseSection 
      id="hero"
      className="bg-lightBg text-textDark container-sm"
    >
      {/* GŁÓWNY TYTUŁ */}
      <div className="text-center mb-6">
        <h1 className="font-normal text-3xl md:text-5xl text-textDark leading-tight">
          {heroData.title}
        </h1>
      </div>

      {/* ZDJĘCIE HERO */}
      <div className="text-center mb-8">
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
    </BaseSection>
  );
}