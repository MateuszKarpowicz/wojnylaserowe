/**
 * Sekcja metody z nagłówkiem i wrapperem
 * @param {Object} data - Dane method z title, intro, subtitle, effects, footer
 */
export default function MethodSectionWithHeader({ data }) {
  const { method } = data;

  return (
    <section className='section-pad bg-bg-dark'>
      <div className='section-wrap'>
        <h2 className='section-title-light'>{data.title}</h2>
        <div className='mb-8'>
          <p className='text-text-light/90 leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
            {method.intro}
          </p>
          <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
            {method.subtitle}
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            {method.effects.map((effect, index) => (
              <div key={index} className='card-border-purple'>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0'>
                    <div className='qualification-icon text-neon-purple'>✓</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm text-text-light/80 leading-relaxed'>
                      {effect.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className='text-text-light/80 leading-relaxed text-center max-w-3xl mx-auto'>
            {method.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
