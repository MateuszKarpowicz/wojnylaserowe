import Image from 'next/image';
import SocialMediaIcons from './ui/SocialMediaIcons';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-lightBg text-textDark px-4 py-8 mx-auto max-w-screen-md">
      {/* CYTAT Z WIEDŹMINA */}
      <div className="text-center mb-6">
        <p className="italic text-lg md:text-xl text-gray-600 font-serif">
          "Coś się kończy, coś się zaczyna"
        </p>
      </div>

      {/* GŁÓWNY TYTUŁ */}
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl md:text-5xl text-textDark leading-tight">
          ZAMIEŃ PRZESZŁOŚĆ<br />
          NA NOWY POCZĄTEK
        </h1>
      </div>

      {/* PODTYTUŁ */}
      <div className="text-center mb-8">
        <p className="text-lg md:text-xl text-gray-700">
          Laserowe usuwanie tatuaży i blizn
        </p>
      </div>

      {/* ZDJĘCIE HERO */}
      <div className="text-center mb-8">
        <div className="w-full max-w-md mx-auto">
          <Image
            src="/images/hero/hero.webp"
            alt="Przed i po - laserowe usuwanie tatuaży"
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
          <a
            href="#oferta"
            className="inline-block bg-neonBlue text-white px-8 py-4 rounded-lg hover:bg-neonPurple transition-colors duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            CENNIK
          </a>
        </div>

        {/* IKONY SOCIAL */}
        <div className="flex items-center justify-center mb-6">
          <SocialMediaIcons size="text-3xl" />
        </div>

        {/* TEKST POD IKONKAMI */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">
            Śledź nas w mediach społecznościowych
          </p>
          <p className="text-gray-500 text-xs max-w-md mx-auto">
            Zobacz najnowsze efekty naszych zabiegów i opinie klientów. 
            Regularnie publikujemy zdjęcia przed i po oraz porady dotyczące pielęgnacji skóry.
          </p>
        </div>
      </div>
    </section>
  );
}