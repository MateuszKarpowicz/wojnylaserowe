import { BaseSection } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';
import scarinkData from '@/content/texts/scarink.json';

export default function ScarINKSection() {
  return (
    <BaseSection id="scarink" className="py-8 bg-white">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={scarinkData.title}
        subtitle={scarinkData.subtitle}
        description={scarinkData.description}
        className="text-center mb-12"
        subtitleClassName="text-xl text-neonBlue font-semibold mb-6"
        descriptionClassName="text-lg text-gray-700 max-w-3xl mx-auto"
      />

      {/* NA CZYM POLEGA METODA */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-textDark mb-6 text-center">
          {scarinkData.method.title}
        </h3>
        <div className="bg-gray-50 rounded-lg p-6">
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
        </div>
      </div>

      {/* KORZYŚCI */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-textDark mb-6 text-center">
          {scarinkData.benefits.title}
        </h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
            {scarinkData.benefits.items.map((benefit, index) => (
              <li key={index}><strong>{benefit}</strong></li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-700 mb-6">
          {scarinkData.cta.text}
        </p>
        <CTAButton href={scarinkData.cta.href}>
          {scarinkData.cta.button}
        </CTAButton>
      </div>
    </BaseSection>
  );
}