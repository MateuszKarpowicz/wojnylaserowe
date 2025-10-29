import CardWithIcon from '@/components/ui/CardWithIcon';
import removalPageData from '@/content/texts/removal-page.json';

export default function WhyChooseSection() {
  const { whyChoose } = removalPageData;

  return (
    <div className='section-wrap'>
      <h2 className='text-3xl md:text-4xl font-display font-bold mb-12 text-center text-text-light'>
        {whyChoose.title}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {whyChoose.points.map((point, index) => (
          <CardWithIcon
            key={index}
            text={point.text}
            borderColor='purple'
          />
        ))}
      </div>
    </div>
  );
}
