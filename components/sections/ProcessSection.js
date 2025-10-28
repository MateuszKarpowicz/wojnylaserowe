'use client';
import { BaseGridSection, BaseStepCard } from '@/components/base';
import processData from '@/content/texts/process.json';

export default function ProcessSection() {
  return (
    <BaseGridSection
      id="process"
      title={processData.title}
      className="section-pad bg-gray-50 container"
      gridClassName="grid grid-cols-1 md:grid-cols-3 gap-8"
      items={processData.steps}
      renderItem={(step, index) => (
        <BaseStepCard
          key={index}
          number={step.number}
          title={step.title}
          description={step.description}
        />
      )}
    />
  );
}
