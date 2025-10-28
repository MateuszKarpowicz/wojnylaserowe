import { BaseSectionWithHeader, BaseTextCard } from '@/components/base';

export default function AboutExperienceSection() {
  const paragraphs = [
    "W Wojnach Laserowych specjalizuję się w laserowym usuwaniu tatuaży w Krakowie od 2019 roku. Dzięki doświadczeniu i pracy na nowoczesnym laserze pikosekundowym, pomagam bezpiecznie pozbyć się niechcianych wzorów – bez blizn i bez nadmiernego bólu.",
    "Każdy zabieg wykonuję z pełnym skupieniem na bezpieczeństwie, higienie i komforcie klienta. Dodatkowo, podczas zabiegu korzystam z chłodziarki do skóry, która znacznie zmniejsza dyskomfort, zaczerwienienie i obrzęk."
  ];

  return (
    <BaseSectionWithHeader
      id="about-experience"
      title="Doświadczenie i Sprzęt"
      subtitle="Profesjonalne podejście od 2019 roku"
      className="section-pad bg-gray-50 container-sm"
    >
      {/* TREŚĆ */}
      <BaseTextCard paragraphs={paragraphs} />
    </BaseSectionWithHeader>
  );
}
