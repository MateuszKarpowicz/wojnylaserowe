import { BaseListSection } from '@/components/base';
import scarinkData from '@/content/texts/scarink.json';

export default function ScarINKBenefitsSection() {
  return (
    <BaseListSection
      id="scarink-benefits"
      title={scarinkData.benefits.title}
      subtitle="Dlaczego warto wybrać ScarINK?"
      items={scarinkData.benefits.items}
      bgColor="bg-white"
      containerType="container"
      useInfoBox={true}
    />
  );
}
