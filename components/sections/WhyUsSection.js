import { BaseSection, BaseCard } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';
import whyUsData from '@/content/texts/whyus.json';

export default function WhyUsSection() {
  return (
    <BaseSection id="dlaczego-my" className="section-pad bg-gray-50">
      {/* NAGŁÓWEK */}
      <SectionHeader title={whyUsData.title} />

      {/* ZALETY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {whyUsData.features.map((feature, index) => (
          <BaseCard key={index} variant="feature">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-medium">
                {feature}
              </p>
            </div>
          </BaseCard>
        ))}
      </div>
    </BaseSection>
  );
}
