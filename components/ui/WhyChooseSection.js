import CardWithIcon from '@/components/ui/CardWithIcon';

/**
 * Sekcja "Dlaczego warto"
 * @param {Array} points - Tablica punktów do wyświetlenia
 */
export default function WhyChooseSection({ points = [] }) {
  return (
    <div className='sections-grid-auto'>
      {points.map((point, index) => (
        <CardWithIcon key={index} text={point.text} borderColor='blue' />
      ))}
    </div>
  );
}
