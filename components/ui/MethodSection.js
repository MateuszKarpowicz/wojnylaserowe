import CardWithIcon from '@/components/ui/CardWithIcon';
import scarinkPageData from '@/content/texts/scarink-page.json';

export default function MethodSection() {
  const { method } = scarinkPageData;

  return (
    <>
      <div className='mb-8'>
        <p className='text-text-dark leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
          {method.intro}
        </p>
        <p className='text-text-dark font-semibold text-lg mb-8 text-center'>
          {method.subtitle}
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          {method.effects.map((effect, index) => (
            <CardWithIcon key={index} text={effect.text} borderColor='purple' />
          ))}
        </div>
        <p className='text-text-dark leading-relaxed text-center max-w-3xl mx-auto'>
          {method.footer}
        </p>
      </div>
    </>
  );
}
