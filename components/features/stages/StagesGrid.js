import StageItem from './StageItem';

/**
 * StagesGrid - Grid z etapami
 *
 * @param {Array} stages - Tablica etapów do wyświetlenia
 * @param {1|2|3|4} [columns] - Liczba kolumn (domyślnie: 4 dla desktop)
 */
export default function StagesGrid({ stages, columns = 4 }) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gridClass = gridClasses[columns] || gridClasses[4];

  return (
    <div className={`grid ${gridClass} gap-8`}>
      {stages.map(stage => (
        <StageItem key={stage.number} stage={stage} />
      ))}
    </div>
  );
}
