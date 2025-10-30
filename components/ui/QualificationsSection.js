import CardWithIcon from '@/components/ui/CardWithIcon';

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
            <CardWithIcon
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              borderColor='purple'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
