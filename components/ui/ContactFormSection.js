import ContactForm from '@/components/ui/ContactForm';

/**
 * Sekcja formularza kontaktowego z wrapperem
 */
export default function ContactFormSection() {
  return (
    <section className='section-pad bg-surface'>
      <div className='section-wrap'>
        <ContactForm />
      </div>
    </section>
  );
}
