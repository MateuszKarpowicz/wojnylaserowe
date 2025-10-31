import ContactChannelsColumn from '@/components/features/contact/ContactChannelsColumn';
import ContactHeader from '@/components/features/contact/ContactHeader';
import { InstagramSection, MapSection } from '@/components/ui';
import { Section } from '@/components/primitives';
import contactPageData from '@/content/texts/contact-page.json';

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function Kontakt() {
  const { header } = contactPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <ContactHeader title={header.title} subtitle={header.subtitle} />

      <InstagramSection />

      <MapSection />

      <Section bg='surface' title='Social Media'>
        <ContactChannelsColumn />
      </Section>
    </main>
  );
}
