import Image from 'next/image';
import SocialMediaIcons from '@/components/ui/SocialMediaIcons';
import CTAButton from '@/components/ui/CTAButton';
import { BaseSection } from '@/components/base';
import heroData from '@/content/texts/hero.json';

export default function HeroSection() {
  return (
    <BaseSection 
      className="min-h-screen bg-lightBg text-textDark px-4 py-8 mx-auto max-w-screen-md"
      maxWidth="max-w-screen-md"
    >
      {/* CYTAT Z WIEDŹMINA */}
      <div className="text-center mb-6">
        <p className="italic text-lg md:text-xl text-gray-600 font-serif">
          "{heroData.quote}"
        </p>
      </div>

      {/* GŁÓWNY TYTUŁ */}
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl md:text-5xl text-textDark leading-tight">
          {heroData.title}
        </h1>
      </div>

      {/* PODTYTUŁ */}
      <div className="text-center mb-8">
        <p className="text-lg md:text-xl text-gray-700">
          {heroData.subtitle}
        </p>
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

      {/* CTA + SOCIAL */}
      <div className="text-center">
        {/* PRZYCISK CENNIK */}
        <div className="mb-6">
          <CTAButton href={heroData.cta.href} size="lg">
            {heroData.cta.text}
          </CTAButton>
        </div>

        {/* IKONY SOCIAL */}
        <div className="flex items-center justify-center mb-6">
          <SocialMediaIcons size="text-3xl" />
        </div>

        {/* TEKST POD IKONKAMI */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm mb-2">
            {heroData.social.title}
          </p>
          <p className="text-gray-500 text-xs max-w-md mx-auto">
            {heroData.social.description}
          </p>
        </div>

        {/* ODYŁACZE DO SEKCJI */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-4">
            {heroData.navigation.title}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {heroData.navigation.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-neonBlue hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </BaseSection>
  );
}