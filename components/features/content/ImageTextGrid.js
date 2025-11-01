import Image from 'next/image';

/**
 * ImageTextGrid - Grid 2-kolumnowy z obrazkiem i treścią
 *
 * Renderuje grid z obrazkiem po jednej stronie i treścią po drugiej.
 * Responsywny: na mobile obrazek jest pierwszy, na desktop wg imagePosition.
 *
 * @param {Object} image - Obiekt obrazka z polami: src, alt, variant (border)
 * @param {React.ReactNode} children - Treść do wyświetlenia obok obrazka
 * @param {'left'|'right'} imagePosition - Pozycja obrazka na desktop (domyślnie: 'left')
 * @param {string} className - Dodatkowe klasy CSS
 */
export default function ImageTextGrid({
  image,
  children,
  imagePosition = 'left',
  className = ''
}) {
  const borderClasses = {
    blue: 'border-neon-border-blue',
    purple: 'border-neon-border-purple',
  };

  const borderClass = borderClasses[image.variant] || borderClasses.purple;

  // Na desktop: obrazek lewo/prawo wg imagePosition
  // Na mobile: obrazek zawsze pierwszy
  const imageOrder = imagePosition === 'left' ? 'md:order-1' : 'md:order-2';
  const contentOrder = imagePosition === 'left' ? 'md:order-2' : 'md:order-1';

  return (
    <div className={`md:grid md:grid-cols-2 gap-8 items-center ${className}`}>
      {/* Zdjęcie - na mobile pierwsze */}
      <div className={`mb-8 md:mb-0 mt-4 md:mt-6 ${imageOrder}`}>
        <div className={`relative w-full aspect-square max-w-md mx-auto md:max-w-full rounded-xl shadow-lg overflow-hidden border-2 ${borderClass}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className='object-cover'
            sizes={image.sizes || '(max-width: 768px) 100vw, 50vw'}
          />
        </div>
      </div>

      {/* Treść - na mobile druga */}
      <div className={`space-y-6 ${contentOrder}`}>
        {children}
      </div>
    </div>
  );
}
