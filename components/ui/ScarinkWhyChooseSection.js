import scarinkPageData from '@/content/texts/scarink-page.json';

export default function ScarinkWhyChooseSection() {
  const { whyChoose } = scarinkPageData;

  return (
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
  );
}
