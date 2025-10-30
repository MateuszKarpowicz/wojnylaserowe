import ContactForm from '@/components/ui/ContactForm';
import { Section, Container, SectionHeader } from '@/components/primitives';

/**
 * Sekcja formularza kontaktowego z wrapperem
 */
export default function ContactFormSection() {
  return (
    <Section bg='surface'>
      <Container maxWidth='lg'>
        <SectionHeader title='NAPISZ DO NAS' variant='dark' />
        <ContactForm />
      </Container>
    </Section>
  );
}
