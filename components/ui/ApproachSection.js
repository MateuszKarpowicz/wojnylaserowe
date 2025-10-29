import aboutPageData from '@/content/texts/about-page.json';
import { FaHeart, FaShieldAlt, FaUserMd } from 'react-icons/fa';

const iconMap = {
  FaUserMd: FaUserMd,
  FaShieldAlt: FaShieldAlt,
  FaHeart: FaHeart,
};

export default function ApproachSection() {
  const { approach } = aboutPageData;

  return (
    <div className='space-y-12'>
      {/* Wyróżniony cytat */}
      <div className='approach-card-dark'>
        <p className='text-xl md:text-2xl leading-relaxed italic text-text-light'>
          {approach.quote}
        </p>
      </div>

      {/* 3 cards z punktami */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {approach.points.map((point, index) => {
          const IconComponent = iconMap[point.icon] || FaUserMd;
          return (
            <div key={index} className='approach-card-dark'>
              <div className='flex gap-4'>
                {/* Ikona */}
                <div className='flex-shrink-0'>
                  <IconComponent className='approach-icon' />
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
  );
}
