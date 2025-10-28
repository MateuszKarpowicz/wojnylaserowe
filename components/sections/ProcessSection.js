import { BaseSection, BaseStepCard } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';
import processData from '@/content/texts/process.json';

export default function ProcessSection() {
  return (
    <BaseSection id="process" className="section-pad bg-gray-50 container">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={processData.title}
        className="text-center mb-12"
      />
      
      {/* KROKI PROCESU */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processData.steps.map((step, index) => (
          <BaseStepCard
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </BaseSection>
  );
}
