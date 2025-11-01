import { ScarinkCTASection, ScarinkHero, ScarinkWhyChooseSection, MethodSection, TargetSection } from '@/components/features/scarink';
import { ProcessSection } from '@/components/features/process';
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
      <MethodSection
        data={{ method }}
        title={method.title}
        bg='dark'
      />
      <TargetSection
        data={{ target }}
        title={target.title}
        bg='surface'
      />
      <ProcessSection
        variant='default'
        data={process}
        title={process.title}
        bg='dark'
      />
      <ScarinkWhyChooseSection
        points={whyChoose.points}
        title={whyChoose.title}
        bg='surface'
      />
      <ScarinkCTASection
        title={cta.title}
        text={cta.text}
        href={cta.href}
        button={cta.button}
        variant='purple'
        bg='dark'
      />
    </main>
  );
}
