import { BaseSection } from './base';
import SectionHeader from './ui/SectionHeader';
import aboutData from '../content/texts/about.json';

export default function AboutSection() {
  return (
    <BaseSection id="o-nas" className="py-8 bg-white">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={aboutData.title}
        subtitle={aboutData.subtitle}
      />

      {/* TREŚĆ */}
      <div className="max-w-3xl mx-auto text-center">
        {aboutData.content.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </BaseSection>
  );
}