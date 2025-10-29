/**
 * Sekcja "Dlaczego warto" ScarINK z nagłówkiem i wrapperem
 * @param {Object} data - Dane whyChoose z title i points
 */
export default function ScarinkWhyChooseSectionWithHeader({ data }) {
  const { whyChoose } = data;

  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <h2 className='text-3xl md:text-4xl font-display font-bold mb-12 text-center text-text-dark'>
          {data.title}
        </h2>
        <div className='sections-grid-auto'>
          {whyChoose.points.map((point, index) => (
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
      </div>
    </section>
  );
}
