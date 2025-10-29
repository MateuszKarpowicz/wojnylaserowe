import ScarinkWhyChooseSection from '@/components/ui/ScarinkWhyChooseSection';

/**
 * Sekcja "Dlaczego warto" ScarINK z nagłówkiem i wrapperem
 * @param {Object} data - Dane whyChoose z title i points
 */
export default function ScarinkWhyChooseSectionWithHeader({ data }) {
  const { whyChoose } = data;

  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <h2 className='section-title-dark'>{data.title}</h2>
        <ScarinkWhyChooseSection points={whyChoose.points} />
      </div>
    </section>
  );
}
