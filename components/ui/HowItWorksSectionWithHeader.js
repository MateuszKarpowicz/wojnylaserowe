import HowItWorksSection from '@/components/ui/HowItWorksSection';

/**
 * Sekcja "Jak działa" z nagłówkiem i wrapperem
 * @param {Object} data - Dane howItWorks z title, intro, subtitle, points, footer
 */
export default function HowItWorksSectionWithHeader({ data }) {
  const { howItWorks } = data;

  return (
    <section className='section-pad bg-bg-dark'>
      <div className='section-wrap'>
        <h2 className='section-title-light'>{data.title}</h2>
        <HowItWorksSection howItWorks={howItWorks} />
      </div>
    </section>
  );
}
