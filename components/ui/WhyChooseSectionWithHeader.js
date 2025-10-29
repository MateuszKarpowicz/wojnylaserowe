import CardWithIcon from '@/components/ui/CardWithIcon';

/**
 * Sekcja "Dlaczego warto" z nagłówkiem i wrapperem
 * @param {Object} data - Dane whyChoose z title i points
 */
export default function WhyChooseSectionWithHeader({ data }) {
  const { whyChoose } = data;

  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <h2 className='text-3xl md:text-4xl font-display font-bold mb-12 text-center text-text-dark'>
          {data.title}
        </h2>
        <div className='sections-grid-auto'>
          {whyChoose.points.map((point, index) => (
            <CardWithIcon key={index} text={point.text} borderColor='blue' />
          ))}
        </div>
      </div>
    </section>
  );
}
