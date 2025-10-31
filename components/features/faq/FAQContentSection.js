import FAQCategorySection from '@/components/features/faq/FAQCategorySection';
import { Section } from '@/components/primitives';

/**
 * Główna sekcja z kategoriami FAQ
 * @param {Array} categories - Lista kategorii FAQ
 */
export default function FAQContentSection({ categories }) {
  return (
    <Section bg='dark'>
      <div className='space-y-8'>
        {categories.map((category, categoryIndex) => (
          <FAQCategorySection
            key={categoryIndex}
            category={category}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>
    </Section>
  );
}
