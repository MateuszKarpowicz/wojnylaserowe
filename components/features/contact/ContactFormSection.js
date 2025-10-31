import ContactForm from '@/components/features/contact/ContactForm';
import { Section } from '@/components/primitives';

/**
 * Sekcja formularza kontaktowego z wrapperem
 */
export default function ContactFormSection() {
  return (
    <Section bg='surface' title='NAPISZ DO NAS' containerProps={{ maxWidth: 'lg' }}>
      <ContactForm />
    </Section>
  );
}
