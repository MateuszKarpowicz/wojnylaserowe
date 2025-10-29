import QualificationCard from '@/components/ui/QualificationCard';

/**
 * Sekcja kwalifikacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane kwalifikacji z title i items
 */
export default function QualificationsSection({ data }) {
  return (
    <section className='section-pad bg-bg-dark'>
      <div className='section-wrap'>
        <h2 className='section-title-light'>{data.title}</h2>
        <div className='sections-grid-auto'>
          {data.items.map((item, index) => (
            <QualificationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
