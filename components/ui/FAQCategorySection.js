import FAQAccordion from '@/components/ui/FAQAccordion';

/**
 * Sekcja kategorii FAQ z nagłówkiem i rozsuwakami
 * @param {Object} category - Kategoria FAQ z nazwą i pytaniami
 * @param {number} categoryIndex - Indeks kategorii
 */
export default function FAQCategorySection({ category, categoryIndex }) {
  return (
    <section className='card-with-border-purple'>
      <h2 className='text-2xl font-display font-bold text-text-dark mb-6 text-center'>
        {category.category}
      </h2>

      <div className='space-y-4'>
        {category.questions.map((item, itemIndex) => (
          <FAQAccordion
            key={itemIndex}
            item={item}
            index={`${categoryIndex}-${itemIndex}`}
          />
        ))}
      </div>
    </section>
  );
}
