import MethodSection from '@/components/features/about/MethodSection';
import { CTASection, ProcessSectionDefault, ScarinkHero, WhyChooseSection } from '@/components/ui';
import TargetSection from '@/components/features/about/TargetSection';
import { Section } from '@/components/primitives';
import scarinkPageData from '@/content/texts/scarink-page.json';

export const metadata = {
  title: 'ScarINK – regeneracja i redukcja blizn Kraków | Wojny Laserowe',
  description:
    'Profesjonalne zabiegi ScarINK w Krakowie. Naturalna regeneracja skóry i poprawa wyglądu blizn pooperacyjnych, potrądzikowych, po tatuażu. Metoda mikropunktury.',
};

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function ScarinkRegeneracjaBlizn() {
  const { hero, method, target, process, whyChoose, cta } = scarinkPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <ScarinkHero hero={hero} />
      <Section title={method.title} bg='dark'>
        <MethodSection />
      </Section>
      <Section title={target.title} bg='surface'>
        <TargetSection />
      </Section>
      <Section title={process.title} bg='dark'>
        <ProcessSectionDefault data={process} />
      </Section>
      <Section title={whyChoose.title} bg='surface'>
        <WhyChooseSection points={whyChoose.points} variant='scarink' />
      </Section>
      <CTASection
        title={cta.title}
        text={cta.text}
        href={cta.href}
        button={cta.button}
        variant='purple'
        bgColor='dark'
      />
    </main>
  );
}
