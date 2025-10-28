import { BaseSection, BaseInfoBox } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';
import scarinkData from '@/content/texts/scarink.json';

export default function ScarINKMethodSection() {
  return (
    <BaseSection id="scarink-method" className="section-pad bg-gray-50 container">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={scarinkData.method.title}
        subtitle="Nowoczesna technika mikropunktury"
      />

      {/* TREŚĆ */}
      <BaseInfoBox
          title=""
          content=""
          variant="default"
          className="mb-4"
        >
          <p className="text-lg text-gray-700 mb-4">
            {scarinkData.method.description}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {scarinkData.method.process}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            {scarinkData.method.results.title}
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
            {scarinkData.method.results.items.map((item, index) => (
              <li key={index}><strong>{item}</strong></li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            {scarinkData.method.conclusion}
          </p>
          <p className="text-lg text-gray-700 mt-4">
            {scarinkData.method.additional}
          </p>
        </BaseInfoBox>
    </BaseSection>
  );
}
