/**
 * MobileMenu - Menu mobilne (drawer) z nawigacją
 *
 * Drawer menu z prawej strony z listą linków do wszystkich stron.
 * Używa Modal komponentu z variant='drawer'.
 *
 * @param {boolean} isOpen - Czy menu jest otwarte
 * @param {Function} onClose - Funkcja zamykania menu
 * @returns {JSX.Element} Drawer menu z nawigacją
 */
'use client';
import Modal from '@/components/overlay/Modal';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const menuItems = [
  { href: '/o-nas', label: 'O Mnie' },
  { href: '/laserowe-usuwanie-tatuazu', label: 'Laserowe usuwanie tatuażu' },
  { href: '/scarink-regeneracja-blizn', label: 'ScarINK – regeneracja blizn' },
  { href: '/efekty', label: 'Efekty' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      variant='drawer'
      position='right'
      width='w-1/2'
      className='bg-modal shadow-2xl transition-all duration-300 ease-out'
      closeOnOverlayClick={true}
      dragToClose={true}
      ariaLabelledBy='mobile-menu-title'
    >
      <div
        className='h-full flex flex-col bg-modal'
        onClick={e => e.stopPropagation()}
      >
        <div className='flex-1 p-6 overflow-y-auto'>
          <h3
            id='mobile-menu-title'
            className='text-lg font-semibold text-text-light mb-6 font-display'
          >
            Wybierz stronę:
          </h3>
          <nav className='space-y-4' role='menu'>
            {menuItems.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'w-full rounded-lg p-4 text-left transition-all duration-200 block',
                    isActive
                      ? 'bg-neon-blue/20 border-2 border-neon-blue shadow-glow-strong shadow-[0_0_30px_rgba(0,153,204,0.8)]'
                      : 'bg-button-dark hover:bg-button-dark-hover border border-neon-blue/30 hover:border-neon-blue/50 shadow-glow/20 hover:shadow-glow/40'
                  )}
                  role='menuitem'
                >
                  <span className={cn(
                    'font-medium',
                    isActive ? 'text-neon-blue font-bold' : 'text-text-light'
                  )}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </Modal>
  );
}
