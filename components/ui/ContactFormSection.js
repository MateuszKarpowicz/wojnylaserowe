import ContactForm from '@/components/ui/ContactForm';

/**
 * Sekcja formularza kontaktowego z wrapperem
 */
export default function ContactFormSection() {
  return (
    <section className='section-pad bg-bg-dark'>
      <div className='section-wrap'>
        <ContactForm />
      </div>
    </section>
  );
}
