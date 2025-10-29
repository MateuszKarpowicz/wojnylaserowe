import WhyChooseSection from '@/components/ui/WhyChooseSection';

/**
 * Sekcja "Dlaczego warto" z nagłówkiem i wrapperem
 * @param {Object} data - Dane whyChoose z title i points
 */
export default function WhyChooseSectionWithHeader({ data }) {
  const { whyChoose } = data;

  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <h2 className='section-title-dark'>{data.title}</h2>
        <WhyChooseSection points={whyChoose.points} />
      </div>
    </section>
  );
}
