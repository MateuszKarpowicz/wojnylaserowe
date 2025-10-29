import { FaHeart, FaShieldAlt, FaUserMd } from 'react-icons/fa';

const iconMap = {
  FaUserMd: FaUserMd,
  FaShieldAlt: FaShieldAlt,
  FaHeart: FaHeart,
};

/**
 * Sekcja podejścia z nagłówkiem i wrapperem
 * @param {Object} data - Dane podejścia z title, quote i points
 */
export default function ApproachSection({ data }) {
  const { approach } = data;

  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <h2 className='text-3xl md:text-4xl font-display font-bold text-center mb-12 text-text-dark'>
          {data.title}
        </h2>
        <div className='space-y-12'>
          {/* Wyróżniony cytat */}
          <div className='card-border-blue'>
            <p className='text-xl md:text-2xl leading-relaxed italic text-text-light'>
              {approach.quote}
            </p>
          </div>

          {/* 3 cards z punktami */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {approach.points.map((point, index) => {
              const IconComponent = iconMap[point.icon] || FaUserMd;
              return (
                <div key={index} className='card-border-blue'>
                  <div className='flex gap-4'>
                    {/* Ikona */}
                    <div className='flex-shrink-0'>
                      <IconComponent className='qualification-icon text-neon-blue' />
                    </div>

                    {/* Tekst */}
                    <div className='flex-1'>
                      <h3 className='text-lg font-semibold text-text-light mb-2'>
                        {point.title}
                      </h3>
                      <p className='text-sm text-text-light/80 leading-relaxed'>
                        {point.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
