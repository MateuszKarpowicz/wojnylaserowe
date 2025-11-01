import ApproachItem from './ApproachItem';

/**
 * ApproachGrid - Grid z punktami podejścia
 *
 * @param {Array} points - Tablica punktów do wyświetlenia
 */
export default function ApproachGrid({ points }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {points.map((point, index) => (
        <ApproachItem key={index} point={point} idx={index} />
      ))}
    </div>
  );
}
