import { Container, Section } from '@/components/primitives';
import ContactChannelsColumn from '@/components/ui/ContactChannelsColumn';
import ContactFormSection from '@/components/ui/ContactFormSection';
import ContactHeader from '@/components/ui/ContactHeader';
import InstagramSection from '@/components/ui/InstagramSection';
import MapSection from '@/components/ui/MapSection';
import contactPageData from '@/content/texts/contact-page.json';

// ISR - revalidate co godzinę dla stale data
export const revalidate = 3600;

export default function Kontakt() {
  const { header, contactInfo } = contactPageData;

  return (
    <main className='min-h-screen bg-bg-light text-text-dark'>
      <ContactHeader title={header.title} subtitle={header.subtitle} />

      <InstagramSection />

      <ContactFormSection />

      <MapSection />

      <Section bg='surface'>
        <Container>
          <ContactChannelsColumn />
        </Container>
      </Section>
    </main>
  );
}
