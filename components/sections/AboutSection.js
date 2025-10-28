import { BaseSectionWithHeader, BaseTextCard } from '@/components/base';
import aboutData from '@/content/texts/about.json';

export default function AboutSection() {
  return (
    <BaseSectionWithHeader
      id="o-nas"
      title={aboutData.title}
      subtitle={aboutData.subtitle}
      className="section-pad bg-white container-sm"
    >
      {/* TREŚĆ - tylko pierwszy akapit */}
      <BaseTextCard paragraphs={aboutData.content[0]} />
    </BaseSectionWithHeader>
  );
}