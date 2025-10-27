import EffectsGallery from '../../components/EffectsGallery';
import TestimonialsSection from '../../components/TestimonialsSection';

export default function Efekty() {
  return (
    <main className="min-h-screen bg-lightBg text-textDark px-4 py-8 mx-auto max-w-screen-lg">
      {/* NAGŁÓWEK */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
          Nasze efekty
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Zobacz przykładowe efekty naszych zabiegów laserowego usuwania tatuaży. 
          Nasze zaawansowane technologie pozwalają na skuteczne i bezpieczne usuwanie 
          tatuaży przy minimalnym dyskomforcie dla klienta.
        </p>
      </div>

      {/* LINK DO ETAPÓW */}
      <div className="text-center mb-8">
        <a
          href="#etapy-usuwania"
          className="inline-block bg-neonBlue text-white px-6 py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Zobacz etapy usuwania ↓
        </a>
      </div>

      {/* GALERIA */}
      <EffectsGallery />

      {/* ETAPY USUWANIA TATUAŻU */}
      <section id="etapy-usuwania" className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-textDark mb-8 text-center">
            Etapy usuwania tatuażu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ETAP 1 */}
            <div className="text-center">
              <div className="bg-neonBlue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-textDark mb-2">Konsultacja</h3>
              <p className="text-gray-700 text-sm">
                Ocena tatuażu, analiza skóry i ustalenie planu zabiegów
              </p>
            </div>

            {/* ETAP 2 */}
            <div className="text-center">
              <div className="bg-neonBlue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-textDark mb-2">Pierwsza sesja</h3>
              <p className="text-gray-700 text-sm">
                Zabieg laserowy z chłodziarką do skóry dla minimalizacji bólu
              </p>
            </div>

            {/* ETAP 3 */}
            <div className="text-center">
              <div className="bg-neonBlue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-textDark mb-2">Gojenie</h3>
              <p className="text-gray-700 text-sm">
                4-8 tygodni przerwy między sesjami dla pełnego wygojenia skóry
              </p>
            </div>

            {/* ETAP 4 */}
            <div className="text-center">
              <div className="bg-neonBlue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-textDark mb-2">Kolejne sesje</h3>
              <p className="text-gray-700 text-sm">
                Powtarzanie zabiegów aż do osiągnięcia zadowalających efektów
              </p>
            </div>
          </div>

          {/* DODATKOWE INFORMACJE */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-textDark mb-4 text-center">
              Co się dzieje podczas zabiegu?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-textDark mb-2">Mechanizm działania:</h4>
                <p className="text-gray-700 text-sm">
                  Laser podgrzewa barwnik w skórze, rozbijając komórki zawierające pigment. 
                  Rozbity pigment zostaje pochłonięty przez makrofagi i przesuwany ku górze naskórka.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-textDark mb-2">Reakcje skóry:</h4>
                <p className="text-gray-700 text-sm">
                  Miejsce poddane działaniu lasera staje się białe, po ok. 1h robi się czerwone. 
                  Może powstać obrzęk, który samoistnie zanika po 2-3 dniach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-700 mb-6">
          Chcesz zobaczyć więcej efektów? Skontaktuj się z nami!
        </p>
        <a
          href="#oferta"
          className="inline-block bg-neonBlue text-white px-8 py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Zapytaj o wycenę
        </a>
      </div>
    </main>
  );
}
