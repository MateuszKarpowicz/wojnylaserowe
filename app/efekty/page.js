import EffectsGallery from '../../components/EffectsGallery';

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

      {/* GALERIA */}
      <EffectsGallery />

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
