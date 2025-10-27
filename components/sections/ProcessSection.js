import { BaseSection } from '@/components/base';
import { utilityClasses } from '@/styles/utilityClasses';

export default function ProcessSection() {
  return (
    <BaseSection id="process" className={utilityClasses.spacing.sectionPadding}>
      <div className={utilityClasses.layout.container}>
        <h2 className={utilityClasses.text.heading + ' ' + utilityClasses.text.center}>
          Proces Zabiegu
        </h2>
        <div className={utilityClasses.layout.grid3}>
          <div className={utilityClasses.layout.textCenter}>
            <div className={utilityClasses.icon.large + ' ' + utilityClasses.icon.circle + ' bg-neonBlue mx-auto mb-4'}>
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold text-textDark mb-2">Krok 1</h3>
            <p className={utilityClasses.text.body}>Konsultacja i analiza skóry</p>
          </div>
          <div className={utilityClasses.layout.textCenter}>
            <div className={utilityClasses.icon.large + ' ' + utilityClasses.icon.circle + ' bg-neonBlue mx-auto mb-4'}>
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold text-textDark mb-2">Krok 2</h3>
            <p className={utilityClasses.text.body}>Przygotowanie i wykonanie zabiegu</p>
          </div>
          <div className={utilityClasses.layout.textCenter}>
            <div className={utilityClasses.icon.large + ' ' + utilityClasses.icon.circle + ' bg-neonBlue mx-auto mb-4'}>
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold text-textDark mb-2">Krok 3</h3>
            <p className={utilityClasses.text.body}>Pielęgnacja po zabiegu i kontrola</p>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
