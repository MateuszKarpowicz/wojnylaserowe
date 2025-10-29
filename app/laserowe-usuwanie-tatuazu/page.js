import AftercareSection from '@/components/ui/AftercareSection';
import CoolingSection from '@/components/ui/CoolingSection';
import HowItWorksSection from '@/components/ui/HowItWorksSection';
import RemovalHero from '@/components/ui/RemovalHero';
import WhyChooseSection from '@/components/ui/WhyChooseSection';
import removalPageData from '@/content/texts/removal-page.json';
import Link from 'next/link';

export default function LaseroweUsuwanieTatuazu() {
  const { cta } = removalPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      {/* HERO */}
      <RemovalHero />

      {/* JAK DZIAŁA */}
      <section className='section-pad bg-bg-dark'>
        <HowItWorksSection />
      </section>

      {/* CHŁODZENIE */}
      <section className='section-pad section-wrap bg-surface'>
        <CoolingSection />
      </section>

      {/* PIELĘGNACJA */}
      <section className='section-pad bg-bg-dark'>
        <AftercareSection />
      </section>

      {/* DLACZEGO WARTO */}
      <section className='section-pad bg-bg-dark'>
        <WhyChooseSection />
      </section>

      {/* CTA */}
      <section className='section-pad section-wrap bg-surface text-center'>
        <h2 className='text-2xl md:text-3xl font-display mb-4'>{cta.title}</h2>
        <p className='text-secondary mb-8 max-w-2xl mx-auto'>{cta.text}</p>
        <Link href={cta.href} className='btn-cta-blue'>
          {cta.button}
        </Link>
      </section>
    </main>
  );
}
