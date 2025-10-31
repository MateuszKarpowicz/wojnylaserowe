import CardWithIcon from '@/components/ui/CardWithIcon';

/**
 * Sekcja "Dlaczego warto"
 * @param {Array} points - Tablica punktów do wyświetlenia
 */
export default function WhyChooseSection({ points = [] }) {
  if (!points || points.length === 0) return null;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {points.map((point, index) => (
        <CardWithIcon key={index} text={point.text} borderColor='blue' />
      ))}
    </div>
  );
}
