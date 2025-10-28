import { BaseSection, BaseCard, BaseFeatureCard } from '@/components/base';
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
            <BaseFeatureCard 
              icon="✓"
              text={feature}
            />
          </BaseCard>
        ))}
      </div>
    </BaseSection>
  );
}
