import CTASection from '@/components/ui/CTASection';
import MethodSection from '@/components/ui/MethodSection';
import ProcessSectionDefault from '@/components/ui/ProcessSectionDefault';
import ScarinkHero from '@/components/ui/ScarinkHero';
import ScarinkWhyChooseSection from '@/components/ui/ScarinkWhyChooseSection';
import TargetSection from '@/components/ui/TargetSection';
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
  const { method, target, process, whyChoose, cta } = scarinkPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <ScarinkHero />
      <Section title={method.title} bg='dark'>
        <MethodSection />
      </Section>
      <Section title={target.title} bg='surface'>
        <TargetSection />
      </Section>
      <Section title={process.title} bg='dark'>
        <ProcessSectionDefault />
      </Section>
      <Section title={whyChoose.title} bg='surface'>
        <ScarinkWhyChooseSection />
      </Section>
      <CTASection
        title={cta.title}
        text={cta.text}
        href={cta.href}
        button={cta.button}
        variant='purple'
        bgColor='bg-dark'
      />
    </main>
  );
}
