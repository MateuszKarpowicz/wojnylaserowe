import CTASection from '@/components/ui/CTASection';
import MethodSectionWithHeader from '@/components/ui/MethodSectionWithHeader';
import ProcessSectionWithHeader from '@/components/ui/ProcessSectionWithHeader';
import ScarinkHero from '@/components/ui/ScarinkHero';
import ScarinkWhyChooseSectionWithHeader from '@/components/ui/ScarinkWhyChooseSectionWithHeader';
import TargetSectionWithHeader from '@/components/ui/TargetSectionWithHeader';
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
      <MethodSectionWithHeader data={{ method, title: method.title }} />
      <TargetSectionWithHeader data={{ target, title: target.title }} />
      <ProcessSectionWithHeader data={{ process, title: process.title }} />
      <ScarinkWhyChooseSectionWithHeader
        data={{ whyChoose, title: whyChoose.title }}
      />
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
