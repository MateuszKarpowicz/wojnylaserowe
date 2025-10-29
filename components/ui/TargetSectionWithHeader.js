/**
 * Sekcja "Dla kogo" z nagłówkiem i wrapperem
 * @param {Object} data - Dane target z title, quote, points, footer
 */
export default function TargetSectionWithHeader({ data }) {
  const { target } = data;

  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <h2 className='text-3xl md:text-4xl font-display font-bold text-center mb-12 text-text-dark'>
          {data.title}
        </h2>
        <div className='space-y-12'>
          <div className='card-border-blue'>
            <p className='text-xl md:text-2xl leading-relaxed italic text-text-light'>
              {target.quote}
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {target.points.map((point, index) => (
              <div key={index} className='card-border-blue'>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0'>
                    <div className='qualification-icon text-neon-blue'>✓</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm text-text-light/80 leading-relaxed'>
                      {point.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className='text-secondary leading-relaxed text-center max-w-3xl mx-auto'>
            {target.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
