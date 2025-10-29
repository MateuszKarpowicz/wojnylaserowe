/**
 * Reużywalny nagłówek strony
 * @param {string} title - Tytuł strony
 * @param {string} subtitle - Podtytuł strony
 */
export default function PageHeader({ title, subtitle }) {
  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <div className='text-center mb-12'>
          <h1 className='text-section-title text-text-dark mb-4'>{title}</h1>
          <p className='text-lg text-secondary'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
