import FAQContentSection from '@/components/features/faq/FAQContentSection';
import { CTASection, PageHeader } from '@/components/ui';
import faqData from '@/content/texts/faq.json';

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function FAQ() {
  const { header, categories, footer } = faqData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <FAQContentSection categories={categories} />
      <CTASection
        title={footer.title}
        text={footer.text}
        href={footer.href}
        button={footer.button}
        variant='blue'
        bgColor='surface'
      />
    </main>
  );
}
