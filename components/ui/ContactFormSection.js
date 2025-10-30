import ContactForm from '@/components/ui/ContactForm';
import { Section, Container } from '@/components/primitives';

/**
 * Sekcja formularza kontaktowego z wrapperem
 */
export default function ContactFormSection() {
  return (
    <Section bg='surface'>
      <Container maxWidth='lg'>
        <ContactForm />
      </Container>
    </Section>
  );
}
