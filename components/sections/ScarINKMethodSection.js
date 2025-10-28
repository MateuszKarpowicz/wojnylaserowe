import { BaseInfoSection } from '@/components/base';
import scarinkData from '@/content/texts/scarink.json';

export default function ScarINKMethodSection() {
  return (
    <BaseInfoSection
      id="scarink-method"
      title={scarinkData.method.title}
      subtitle="Nowoczesna technika mikropunktury"
      className="section-pad bg-gray-50 container"
      infoBoxClassName="mb-4"
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
    </BaseInfoSection>
  );
}
