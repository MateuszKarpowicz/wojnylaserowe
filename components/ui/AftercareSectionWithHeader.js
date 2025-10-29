import AftercareSection from '@/components/ui/AftercareSection';

/**
 * Sekcja pielęgnacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane aftercare z title, intro, subtitle, points, footer
 */
export default function AftercareSectionWithHeader({ data }) {
  const { aftercare } = data;

  return (
    <section className='section-pad bg-bg-dark'>
      <div className='section-wrap'>
        <h2 className='section-title-light'>{data.title}</h2>
        <AftercareSection aftercare={aftercare} />
      </div>
    </section>
  );
}
