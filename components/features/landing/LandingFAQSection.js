import { FAQAccordion } from '@/components/features/faq';
import { Button, Section } from '@/components/primitives';

/**
 * LandingFAQSection - Sekcja FAQ na landing page
 *
 * Wyświetla 4 pierwsze pytania z pierwszej kategorii FAQ
 * z przyciskiem link do pełnej strony FAQ.
 *
 * @param {Array} items - Lista pytań FAQ do wyświetlenia
 */
export default function LandingFAQSection({ items = [] }) {
  return (
    <Section bg='surface' title='Najczęstsze pytania'>
      <div className='space-y-4'>
        {items.map((q, i) => (
          <FAQAccordion key={q.question || `faq-${i}`} item={q} index={i} />
        ))}
      </div>
      <Button
        as='a'
        href='/faq'
        variant='link'
        size='md'
        className='mt-6 block text-center'
      >
        Zobacz wszystkie pytania →
      </Button>
    </Section>
  );
}
