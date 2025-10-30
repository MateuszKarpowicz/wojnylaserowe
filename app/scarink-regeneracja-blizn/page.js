import CTASection from '@/components/ui/CTASection';
import MethodSection from '@/components/ui/MethodSection';
import ProcessSection from '@/components/ui/ProcessSection';
import ScarinkHero from '@/components/ui/ScarinkHero';
import ScarinkWhyChooseSection from '@/components/ui/ScarinkWhyChooseSection';
import TargetSection from '@/components/ui/TargetSection';
import SectionWrapper from '@/components/ui/SectionWrapper';
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
      <SectionWrapper title={method.title} bgColor='bg-dark'>
        <MethodSection />
      </SectionWrapper>
      <SectionWrapper title={target.title} bgColor='surface'>
        <TargetSection />
      </SectionWrapper>
      <SectionWrapper title={process.title} bgColor='bg-dark'>
        <ProcessSection />
      </SectionWrapper>
      <SectionWrapper title={whyChoose.title} bgColor='surface'>
        <ScarinkWhyChooseSection />
      </SectionWrapper>
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
