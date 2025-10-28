'use client';
import { BaseGridSection, BaseFeatureCard } from '@/components/base';
import whyUsData from '@/content/texts/whyus.json';

export default function WhyUsSection() {
  return (
    <BaseGridSection
      id="dlaczego-my"
      title={whyUsData.title}
      className="section-pad bg-gray-50 container"
      gridClassName="grid grid-cols-1 md:grid-cols-2 gap-6"
      items={whyUsData.features}
      renderItem={(feature, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6">
          <BaseFeatureCard 
            icon="✓"
            text={feature}
          />
        </div>
      )}
    />
  );
}
