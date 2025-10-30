import ContactFormSection from '@/components/ui/ContactFormSection';
import ContactHeader from '@/components/ui/ContactHeader';
import ContactInfoSection from '@/components/ui/ContactInfoSection';
import contactPageData from '@/content/texts/contact-page.json';

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function Kontakt() {
  const { header, contactInfo } = contactPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <ContactHeader title={header.title} subtitle={header.subtitle} />
      <ContactFormSection />
      <ContactInfoSection data={{ contactInfo, title: contactInfo.title }} />
    </main>
  );
}
