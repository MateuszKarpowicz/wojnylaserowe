import AboutHero from '@/components/ui/AboutHero';
import ApproachSection from '@/components/ui/ApproachSection';
import LocationSection from '@/components/ui/LocationSection';
import QualificationCard from '@/components/ui/QualificationCard';
import aboutPageData from '@/content/texts/about-page.json';
import Link from 'next/link';

export default function ONas() {
  const { qualifications, cta } = aboutPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      {/* HERO */}
      <AboutHero />

      {/* KWALIFIKACJE */}
      <section className='section-pad section-wrap bg-surface-light'>
        <h2 className='text-3xl md:text-4xl font-display text-center mb-12'>
          {qualifications.title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {qualifications.items.map((item, index) => (
            <QualificationCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* PODEJŚCIE */}
      <section className='section-pad section-wrap bg-surface'>
        <h2 className='text-3xl md:text-4xl font-display text-center mb-12'>
          {aboutPageData.approach.title}
        </h2>
        <ApproachSection />
      </section>

      {/* MIEJSCE */}
      <section className='section-pad section-wrap bg-surface-light'>
        <LocationSection />
      </section>

      {/* CTA */}
      <section className='section-pad section-wrap bg-surface text-center'>
        <h2 className='text-2xl md:text-3xl font-display mb-4'>{cta.title}</h2>
        <p className='text-secondary mb-8 max-w-2xl mx-auto'>{cta.text}</p>
        <Link href={cta.href} className='btn-primary'>
          {cta.button}
        </Link>
      </section>
    </main>
  );
}
