import Image from 'next/image';

/**
 * SectionImage - Standaryzowany obrazek w sekcji
 *
 * Renderuje obrazek z ramką w stylu sekcji.
 * Używany dla spójności wyglądu obrazków.
 *
 * @param {string} src - Ścieżka do obrazka
 * @param {string} alt - Tekst alternatywny
 * @param {'blue'|'purple'} variant - Wariant ramki (domyślnie: 'blue')
 * @param {string} className - Dodatkowe klasy CSS
 * @param {string} sizes - Atrybut sizes dla Image (domyślnie: dla max-w-md)
 */
export default function SectionImage({
  src,
  alt,
  variant = 'blue',
  className = '',
  sizes = '(max-width: 768px) 100vw, 768px'
}) {
  const borderClasses = {
    blue: 'border-neon-border-blue',
    purple: 'border-neon-border-purple',
  };

  const borderClass = borderClasses[variant] || borderClasses.blue;

  return (
    <div className={`flex justify-center ${className}`}>
      <div className={`relative w-full aspect-square max-w-md mx-auto rounded-xl shadow-lg overflow-hidden border-2 ${borderClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className='object-cover'
          sizes={sizes}
        />
      </div>
    </div>
  );
}
