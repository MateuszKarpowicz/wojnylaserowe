/**
 * AdditionalInfoBox - Box z dodatkowymi informacjami
 *
 * @param {string} title - Tytuł boxa
 * @param {Array} items - Tablica elementów z polami: title, content
 */
export default function AdditionalInfoBox({ title, items }) {
  return (
    <div className='mt-12 bg-surface-light rounded-lg p-6'>
      <h3 className='font-normal text-text-dark mb-4 text-center'>{title}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {items.map((item, index) => (
          <div key={index}>
            <h4 className='font-normal text-text-dark mb-2'>{item.title}</h4>
            <p className='text-secondary text-sm'>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
