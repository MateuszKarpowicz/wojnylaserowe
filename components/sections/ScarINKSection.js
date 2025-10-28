import { BaseSection } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';
import scarinkData from '@/content/texts/scarink.json';

export default function ScarINKSection() {
  return (
    <BaseSection id="scarink" className="section-pad bg-white">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={scarinkData.title}
        subtitle={scarinkData.subtitle}
        description={scarinkData.description}
        className="text-center mb-12"
        subtitleClassName="text-xl text-neonBlue font-normal mb-6"
        descriptionClassName="text-lg text-gray-700 max-w-3xl mx-auto"
      />
    </BaseSection>
  );
}