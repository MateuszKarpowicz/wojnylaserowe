import { CardWithIcon } from '@/components/ui';

/**
 * PointsGrid - Grid z kartami punktów
 *
 * Uniwersalny komponent do wyświetlania gridów z CardWithIcon.
 * Używany w wielu sekcjach dla spójności.
 *
 * @param {Array} points - Tablica punktów do wyświetlenia
 * @param {'blue'|'purple'} variant - Wariant kart (domyślnie: 'purple')
 * @param {1|2|3} columns - Liczba kolumn gridu (domyślnie: 3)
 * @param {string} className - Dodatkowe klasy CSS
 */
export default function PointsGrid({
  points = [],
  variant = 'purple',
  columns = 3,
  className = ''
}) {
  if (!points || points.length === 0) return null;

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  const gridClass = gridClasses[columns] || gridClasses[3];

  return (
    <div className={`grid ${gridClass} gap-6 ${className}`}>
      {points.map((point, index) => {
        const text = typeof point === 'string' ? point : point.text;
        return (
          <CardWithIcon key={index} text={text} variant={variant} />
        );
      })}
    </div>
  );
}
