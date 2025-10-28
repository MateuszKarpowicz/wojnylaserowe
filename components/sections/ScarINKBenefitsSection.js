import { BaseInfoSection } from '@/components/base';
import scarinkData from '@/content/texts/scarink.json';

export default function ScarINKBenefitsSection() {
  return (
    <BaseInfoSection
      id="scarink-benefits"
      title={scarinkData.benefits.title}
      subtitle="Dlaczego warto wybrać ScarINK?"
      className="section-pad bg-white container"
      infoBoxClassName="mb-8"
    >
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
        {scarinkData.benefits.items.map((benefit, index) => (
          <li key={index}><strong>{benefit}</strong></li>
        ))}
      </ul>
    </BaseInfoSection>
  );
}
