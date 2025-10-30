import FAQCategorySection from '@/components/ui/FAQCategorySection';
import { Section, Container } from '@/components/primitives';

/**
 * Główna sekcja z kategoriami FAQ
 * @param {Array} categories - Lista kategorii FAQ
 */
export default function FAQContentSection({ categories }) {
  return (
    <Section bg='dark'>
      <Container>
        <div className='space-y-8'>
          {categories.map((category, categoryIndex) => (
            <FAQCategorySection
              key={categoryIndex}
              category={category}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
