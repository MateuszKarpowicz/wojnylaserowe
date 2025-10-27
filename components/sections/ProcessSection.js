import { BaseSection } from '@/components/base';

export default function ProcessSection() {
  return (
    <BaseSection id="process" className="py-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-textDark mb-12">Proces Zabiegu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-neonBlue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold text-textDark mb-2">Krok 1</h3>
            <p className="text-gray-700">Konsultacja i analiza skóry</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-neonBlue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold text-textDark mb-2">Krok 2</h3>
            <p className="text-gray-700">Przygotowanie i wykonanie zabiegu</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-neonBlue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold text-textDark mb-2">Krok 3</h3>
            <p className="text-gray-700">Pielęgnacja po zabiegu i kontrola</p>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
