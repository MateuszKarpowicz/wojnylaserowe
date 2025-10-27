import CTAButton from '@/components/ui/CTAButton';
import SocialMediaIcons from '@/components/ui/SocialMediaIcons';
import { BaseSection } from '@/components/base';
import heroData from '@/content/texts/hero.json';

export default function LandingSection() {
  return (
    <BaseSection className="py-8 bg-white">
      <div className="max-w-screen-md mx-auto px-4">
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
      </div>
    </BaseSection>
  );
}
