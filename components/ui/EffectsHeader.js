/**
 * Nagłówek strony Efekty z przyciskiem CTA
 * @param {Object} data - Dane header z title, subtitle i cta
 */
export default function EffectsHeader({ data }) {
  const { header, cta } = data;

  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <div className='text-center mb-12'>
          <h1 className='section-title-dark mb-4'>
            {header.title}
          </h1>
          <p className='text-lg text-secondary'>{header.subtitle}</p>
        </div>

        {/* LINK DO ETAPÓW */}
        <div className='text-center mb-8'>
          <a href={cta.href} className='btn-cta-blue'>
            {cta.text}
          </a>
        </div>
      </div>
    </section>
  );
}
