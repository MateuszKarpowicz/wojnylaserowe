import { BaseSection, BaseInfoBox } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';
import scarinkData from '@/content/texts/scarink.json';

export default function ScarINKBenefitsSection() {
  return (
    <BaseSection id="scarink-benefits" className="section-pad bg-white container">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={scarinkData.benefits.title}
        subtitle="Dlaczego warto wybrać ScarINK?"
      />

      {/* TREŚĆ */}
      <BaseInfoBox
        title=""
        content=""
        variant="default"
        className="mb-8"
      >
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
          {scarinkData.benefits.items.map((benefit, index) => (
            <li key={index}><strong>{benefit}</strong></li>
          ))}
        </ul>
      </BaseInfoBox>
    </BaseSection>
  );
}
