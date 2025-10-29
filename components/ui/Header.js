'use client';
import { useOferta } from '@/components/context/OfertaContext';
import Modal from '@/components/overlay/Modal';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open: openOferta } = useOferta();

  return (
    <header
      className='sticky top-0 z-header bg-black/95 backdrop-blur-sm border-b border-neon-blue/20 shadow-glow'
      role='banner'
    >
      <nav
        className='container mx-auto px-4 h-header flex items-center justify-center relative'
        aria-label='Główna nawigacja'
      >
        {/* Logo - NA ŚRODKU */}
        <Link
          href='/'
          className='flex items-center z-10 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 rounded'
          aria-label='Strona główna - Wojny Laserowe'
        >
          <img
            src='/images/logo/logo.svg'
            alt='Wojny Laserowe'
            className='h-16 w-auto object-contain'
            height='64'
            width='160'
          />
        </Link>
      </nav>

      {/* Oferta Button - FIXED PO LEWEJ (fioletowy, zaokrąglone prawe rogi) */}
      <button
        onClick={openOferta}
        className='fixed top-[calc(4.5rem-1rem)] left-0 z-modal bg-neon-purple bg-opacity-90 text-white w-24 py-0.5 rounded-r-lg rounded-l-none shadow-glow-purple hover:bg-neon-purple/90 transition-colors duration-300 flex items-center justify-center focus-ring'
      >
        OFERTA
      </button>

      {/* Menu Button - FIXED PO PRAWEJ (niebieski, zaokrąglone lewe rogi) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={isMenuOpen}
        aria-controls='mobile-menu'
        className='fixed top-[calc(4.5rem-1rem)] right-0 z-modal bg-neon-blue bg-opacity-90 text-white w-24 py-0.5 rounded-l-lg rounded-r-none shadow-glow hover:bg-neon-blue/90 transition-colors duration-300 flex items-center justify-center focus-ring'
      >
        MENU
      </button>

      {/* Menu Drawer - tylko mobile */}
      <Modal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        variant='drawer'
        position='right'
        width='w-64'
        className='md:hidden'
        overlayClassName='md:hidden'
        ariaLabelledBy='mobile-menu-title'
      >
        {/* Wrapper z białym tłem jak w OfferSlider */}
        <div className='h-full flex flex-col bg-surface rounded-lg shadow-2xl'>
          {/* HEADER */}
          <div className='bg-neon-blue text-white p-4 flex items-center justify-between rounded-t-lg'>
            <h2 id='mobile-menu-title' className='text-lg font-semibold'>
              Menu
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className='text-white hover:opacity-75 transition-colors p-2 rounded'
              aria-label='Zamknij menu'
            >
              <span className='text-2xl'>×</span>
            </button>
          </div>

          {/* MENU */}
          <nav className='flex flex-col p-4 gap-4 flex-1' role='menu'>
            <Link
              href='/kontakt#oferta'
              onClick={() => setIsMenuOpen(false)}
              className='text-text-dark hover:text-neon-blue transition-colors duration-300 py-2 focus-ring rounded px-2'
              role='menuitem'
            >
              Oferta
            </Link>
          </nav>
        </div>
      </Modal>
    </header>
  );
}
