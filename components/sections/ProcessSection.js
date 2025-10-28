import { BaseSection } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ProcessSection() {
  return (
    <BaseSection id="process" className="section-pad bg-gray-50 container">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title="Proces Zabiegu"
        className="text-center mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neonBlue mx-auto mb-4">
            <span className="text-white font-normal text-xl">1</span>
          </div>
          <h3 className="text-xl font-normal text-textDark mb-2">Krok 1</h3>
          <p className="text-gray-700">Konsultacja i analiza skóry</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neonBlue mx-auto mb-4">
            <span className="text-white font-normal text-xl">2</span>
          </div>
          <h3 className="text-xl font-normal text-textDark mb-2">Krok 2</h3>
          <p className="text-gray-700">Przygotowanie i wykonanie zabiegu</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neonBlue mx-auto mb-4">
            <span className="text-white font-normal text-xl">3</span>
          </div>
          <h3 className="text-xl font-normal text-textDark mb-2">Krok 3</h3>
          <p className="text-gray-700">Pielęgnacja po zabiegu i kontrola</p>
        </div>
      </div>
    </BaseSection>
  );
}
