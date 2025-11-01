import QualificationItem from './QualificationItem';

/**
 * QualificationsGrid - Grid z kwalifikacjami
 *
 * @param {Array} items - Tablica kwalifikacji do wyświetlenia
 */
export default function QualificationsGrid({ items }) {
  return (
    <div className='space-y-5 md:space-y-6'>
      {items.map((item, index) => (
        <QualificationItem key={index} item={item} idx={index} />
      ))}
    </div>
  );
}
