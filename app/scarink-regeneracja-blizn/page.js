import ScarinkHero from '@/components/ui/ScarinkHero';
import scarinkPageData from '@/content/texts/scarink-page.json';

export const metadata = {
  title: 'ScarINK – regeneracja i redukcja blizn Kraków | Wojny Laserowe',
  description:
    'Profesjonalne zabiegi ScarINK w Krakowie. Naturalna regeneracja skóry i poprawa wyglądu blizn pooperacyjnych, potrądzikowych, po tatuażu. Metoda mikropunktury.',
};

export default function ScarinkRegeneracjaBlizn() {
  const { method, target, process, whyChoose, cta } = scarinkPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      {/* HERO */}
      <ScarinkHero />

      {/* NA CZYM POLEGA */}
      <MethodSectionWithHeader data={{ method, title: method.title }} />

      {/* DLA KOGO */}
      <TargetSectionWithHeader data={{ target, title: target.title }} />

      {/* JAK WYGLĄDA ZABIEG */}
      <ProcessSectionWithHeader data={{ process, title: process.title }} />

      {/* DLACZEGO WARTO */}
      <ScarinkWhyChooseSectionWithHeader
        data={{ whyChoose, title: whyChoose.title }}
      />

      {/* CTA */}
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
