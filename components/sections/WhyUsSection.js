import { BaseSection, BaseCard } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';
import whyUsData from '@/content/texts/whyus.json';

export default function WhyUsSection() {
  return (
    <BaseSection id="dlaczego-my" className="section-pad bg-gray-50 container">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={whyUsData.title}
        className="text-center mb-12"
      />

      {/* ZALETY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {whyUsData.features.map((feature, index) => (
          <BaseCard key={index} variant="feature">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center">
                <span className="text-white font-normal text-sm">✓</span>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-normal">
                {feature}
              </p>
            </div>
          </BaseCard>
        ))}
      </div>
    </BaseSection>
  );
}
