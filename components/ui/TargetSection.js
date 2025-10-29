import scarinkPageData from '@/content/texts/scarink-page.json';

export default function TargetSection() {
  const { target } = scarinkPageData;

  return (
    <div className='space-y-12'>
      <div className='card-border-blue'>
        <p className='text-xl md:text-2xl leading-relaxed italic text-text-light'>
          {target.quote}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {target.points.map((point, index) => (
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
      <p className='text-secondary leading-relaxed text-center max-w-3xl mx-auto'>
        {target.footer}
      </p>
    </div>
  );
}
