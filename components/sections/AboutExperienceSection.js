import { BaseSection, BaseTextCard } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutExperienceSection() {
  const paragraphs = [
    "W Wojnach Laserowych specjalizuję się w laserowym usuwaniu tatuaży w Krakowie od 2019 roku. Dzięki doświadczeniu i pracy na nowoczesnym laserze pikosekundowym, pomagam bezpiecznie pozbyć się niechcianych wzorów – bez blizn i bez nadmiernego bólu.",
    "Każdy zabieg wykonuję z pełnym skupieniem na bezpieczeństwie, higienie i komforcie klienta. Dodatkowo, podczas zabiegu korzystam z chłodziarki do skóry, która znacznie zmniejsza dyskomfort, zaczerwienienie i obrzęk."
  ];

  return (
    <BaseSection id="about-experience" className="section-pad bg-gray-50 container-sm">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title="Doświadczenie i Sprzęt"
        subtitle="Profesjonalne podejście od 2019 roku"
      />

      {/* TREŚĆ */}
      <BaseTextCard paragraphs={paragraphs} />
    </BaseSection>
  );
}
