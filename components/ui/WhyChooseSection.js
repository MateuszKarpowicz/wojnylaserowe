import { CardWithIcon } from '@/components/ui';

/**
 * Sekcja "Dlaczego warto"
 *
 * Uniwersalny komponent dla sekcji z punktami "Dlaczego warto".
 * Obsługuje różne warianty kolorów ramek.
 *
 * @param {Array} points - Tablica punktów do wyświetlenia
 * @param {'default'|'scarink'} variant - Wariant sekcji (domyślnie: 'default')
 * @param {'blue'|'purple'} borderColor - Kolor ramki kart (domyślnie: 'blue' dla default, 'blue' dla scarink)
 */
export default function WhyChooseSection({
  points = [],
  variant = 'default',
  borderColor
}) {
  if (!points || points.length === 0) return null;

  // Automatycznie wybierz borderColor na podstawie variant, jeśli nie podano
  const cardBorderColor = borderColor || (variant === 'scarink' ? 'blue' : 'blue');

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {points.map((point, index) => (
        <CardWithIcon key={index} text={point.text} borderColor={cardBorderColor} />
      ))}
    </div>
  );
}
