import { BaseSection, BaseTextCard } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutDetailsSection() {
  const paragraphs = [
    "Wykorzystuję najnowocześniejszy laser pikosekundowy, który zapewnia najwyższą skuteczność w usuwaniu tatuaży. Ta zaawansowana technologia pozwala na precyzyjne usuwanie pigmentów bez uszkadzania otaczających tkanek.",
    "Każdy zabieg jest dostosowany do indywidualnych potrzeb klienta, uwzględniając rodzaj tatuażu, jego wiek, lokalizację oraz typ skóry. Dzięki temu mogę zapewnić optymalne rezultaty przy minimalnym ryzyku powikłań."
  ];

  return (
    <BaseSection id="about-details" className="section-pad bg-white container-sm">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title="Szczegóły Metody"
        subtitle="Nowoczesna technologia laserowa"
      />

      {/* TREŚĆ */}
      <BaseTextCard paragraphs={paragraphs} />
    </BaseSection>
  );
}
