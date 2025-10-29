import FAQCategorySection from '@/components/ui/FAQCategorySection';

/**
 * Główna sekcja z kategoriami FAQ
 * @param {Array} categories - Lista kategorii FAQ
 */
export default function FAQContentSection({ categories }) {
  return (
    <section className='section-pad bg-bg-dark'>
      <div className='section-wrap'>
        <div className='space-y-8'>
          {categories.map((category, categoryIndex) => (
            <FAQCategorySection
              key={categoryIndex}
              category={category}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
