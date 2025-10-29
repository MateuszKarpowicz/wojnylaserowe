import CardWithIcon from '@/components/ui/CardWithIcon';
import removalPageData from '@/content/texts/removal-page.json';

export default function WhyChooseSection() {
  const { whyChoose } = removalPageData;

  return (
    <div className='sections-grid-auto'>
      {whyChoose.points.map((point, index) => (
        <CardWithIcon key={index} text={point.text} borderColor='blue' />
      ))}
    </div>
  );
}
