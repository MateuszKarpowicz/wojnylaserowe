/**
 * HeaderLogo - Komponent logo w headerze
 *
 * Logo strony renderowane w centrum headera z odpowiednimi stylami i accessibility.
 *
 * @returns {JSX.Element} Logo jako link do strony głównej
 */
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <Link
      href='/'
      className='flex items-center relative z-header focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 rounded'
      aria-label='Strona główna - Wojny Laserowe'
    >
      <Image
        src='/images/logo/logo.svg'
        alt='Wojny Laserowe'
        height={64}
        width={160}
        className='h-16 w-auto object-contain'
        priority
      />
    </Link>
  );
}
