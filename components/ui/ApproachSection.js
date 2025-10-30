import CardWithIcon from '@/components/ui/CardWithIcon';

/**
 * Sekcja podejścia z nagłówkiem i wrapperem
 * @param {Object} data - Dane podejścia z title, quote i points
 */
export default function ApproachSection({ data }) {
  const { approach } = data;

  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <h2 className='section-title-dark'>{data.title}</h2>
        <div className='space-y-12'>
          {/* Wyróżniony cytat */}
          <div className='card-border-blue'>
            <p className='text-xl md:text-2xl leading-relaxed italic text-text-light'>
              {approach.quote}
            </p>
          </div>

          {/* 3 cards z punktami */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {approach.points.map((point, index) => (
              <CardWithIcon
                key={index}
                icon={point.icon}
                title={point.title}
                text={point.text}
                borderColor='blue'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
