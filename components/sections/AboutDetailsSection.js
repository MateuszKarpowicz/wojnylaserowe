import { BaseSectionWithHeader, BaseTextCard } from '@/components/base';

export default function AboutDetailsSection() {
  const paragraphs = [
    "Wykorzystuję najnowocześniejszy laser pikosekundowy, który zapewnia najwyższą skuteczność w usuwaniu tatuaży. Ta zaawansowana technologia pozwala na precyzyjne usuwanie pigmentów bez uszkadzania otaczających tkanek.",
    "Każdy zabieg jest dostosowany do indywidualnych potrzeb klienta, uwzględniając rodzaj tatuażu, jego wiek, lokalizację oraz typ skóry. Dzięki temu mogę zapewnić optymalne rezultaty przy minimalnym ryzyku powikłań."
  ];

  return (
    <BaseSectionWithHeader
      id="about-details"
      title="Szczegóły Metody"
      subtitle="Nowoczesna technologia laserowa"
      className="section-pad bg-white container-sm"
    >
      {/* TREŚĆ */}
      <BaseTextCard paragraphs={paragraphs} />
    </BaseSectionWithHeader>
  );
}
