import QualificationCard from '@/components/ui/QualificationCard';

/**
 * Sekcja kwalifikacji z nagłówkiem i wrapperem
 * @param {Object} data - Dane kwalifikacji z title i items
 */
export default function QualificationsSection({ data }) {
  return (
    <section className='section-pad bg-bg-dark'>
      <div className='section-wrap'>
        <h2 className='text-3xl md:text-4xl font-display font-bold mb-12 text-center text-text-light'>
          {data.title}
        </h2>
        <div className='sections-grid-auto'>
          {data.items.map((item, index) => (
            <QualificationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
