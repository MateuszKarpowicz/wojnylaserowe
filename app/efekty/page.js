import EffectsGallery from '@/components/sections/EffectsGallery';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import effectsPageData from '@/content/texts/effects-page.json';

export default function Efekty() {
  return (
    <main className="min-h-screen bg-lightBg text-textDark px-4 py-8 mx-auto max-w-screen-lg">
      {/* NAGŁÓWEK */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
          {effectsPageData.header.title}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {effectsPageData.header.subtitle}
        </p>
      </div>

      {/* LINK DO ETAPÓW */}
      <div className="text-center mb-8">
        <a
          href={effectsPageData.cta.href}
          className="inline-block bg-neonBlue text-white px-6 py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {effectsPageData.cta.text}
        </a>
      </div>

      {/* GALERIA */}
      <EffectsGallery />

      {/* ETAPY USUWANIA TATUAŻU */}
      <section id="etapy-usuwania" className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-textDark mb-8 text-center">
            {effectsPageData.stages.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {effectsPageData.stages.items.map((stage) => (
              <div key={stage.number} className="text-center">
                <div className="bg-neonBlue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {stage.number}
                </div>
                <h3 className="font-semibold text-textDark mb-2">{stage.title}</h3>
                <p className="text-gray-700 text-sm">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* DODATKOWE INFORMACJE */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-textDark mb-4 text-center">
              {effectsPageData.additional.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {effectsPageData.additional.items.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-textDark mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-sm">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-700 mb-6">
          {effectsPageData.footer.text}
        </p>
        <a
          href={effectsPageData.footer.href}
          className="inline-block bg-neonBlue text-white px-8 py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {effectsPageData.footer.button}
        </a>
      </div>
    </main>
  );
}
