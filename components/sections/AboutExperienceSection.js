import { BaseSection } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutExperienceSection() {
  return (
    <BaseSection id="about-experience" className="section-pad bg-gray-50">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title="Doświadczenie i Sprzęt"
        subtitle="Profesjonalne podejście od 2019 roku"
      />

      {/* TREŚĆ */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          W Wojnach Laserowych specjalizuję się w laserowym usuwaniu tatuaży w Krakowie od 2019 roku. Dzięki doświadczeniu i pracy na nowoczesnym laserze pikosekundowym, pomagam bezpiecznie pozbyć się niechcianych wzorów – bez blizn i bez nadmiernego bólu.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Każdy zabieg wykonuję z pełnym skupieniem na bezpieczeństwie, higienie i komforcie klienta. Dodatkowo, podczas zabiegu korzystam z chłodziarki do skóry, która znacznie zmniejsza dyskomfort, zaczerwienienie i obrzęk.
        </p>
      </div>
    </BaseSection>
  );
}
