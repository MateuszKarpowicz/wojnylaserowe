import { CardWithIcon } from '@/components/ui';
import scarinkPageData from '@/content/texts/scarink-page.json';
import { Card } from '@/components/primitives';

export default function TargetSection() {
  const { target } = scarinkPageData;

  return (
    <div className='space-y-12'>
      <Card variant='blue'>
        <p className='text-xl md:text-2xl leading-relaxed italic text-text-light'>
          {target.quote}
        </p>
      </Card>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {target.points.map((point, index) => (
          <CardWithIcon key={index} text={point.text} variant='blue' />
        ))}
      </div>
      <p className='text-secondary leading-relaxed text-center max-w-3xl mx-auto'>
        {target.footer}
      </p>
    </div>
  );
}
