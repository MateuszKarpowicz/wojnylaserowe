'use client';
import { useOferta } from '@/components/context/OfertaContext';
import Modal from '@/components/overlay/Modal';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { open: openOferta, isOpen: isOfertaOpen } = useOferta();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className='sticky top-0 z-header bg-header-footer backdrop-blur-sm border-b border-neon-blue/20 shadow-glow'
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

      {/* Oferta Button - Renderowany przez Portal z najwyższym z-index */}
      {mounted &&
        createPortal(
          <button
            onClick={openOferta}
            className='fixed top-[calc(4.5rem-1rem)] left-0 z-button bg-neon-purple bg-opacity-90 text-white w-24 py-0.5 rounded-r-lg rounded-l-none shadow-glow-purple hover:bg-neon-purple/90 transition-colors duration-300 flex items-center justify-center focus-ring'
          >
            OFERTA
          </button>,
          document.body
        )}

      {/* Menu Button - Renderowany przez Portal z najwyższym z-index */}
      {mounted &&
        createPortal(
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'
            className='fixed top-[calc(4.5rem-1rem)] right-0 z-button bg-neon-blue bg-opacity-90 text-white w-24 py-0.5 rounded-l-lg rounded-r-none shadow-glow hover:bg-neon-blue/90 transition-colors duration-300 flex items-center justify-center focus-ring'
          >
            MENU
          </button>,
          document.body
        )}

      {/* Menu Drawer - połowa ekranu od prawej */}
      <Modal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        variant='drawer'
        position='right'
        width='w-1/2'
        className='bg-modal shadow-2xl'
        ariaLabelledBy='mobile-menu-title'
      >
        {/* MENU */}
        <nav
          className='h-full flex flex-col p-6 gap-4 overflow-y-auto'
          role='menu'
        >
          <Link
            href='/kontakt#oferta'
            onClick={() => setIsMenuOpen(false)}
            className='text-text-light hover:text-neon-blue transition-colors duration-300 py-3 px-4 focus-ring rounded-lg border border-transparent hover:border-neon-blue/30'
            role='menuitem'
          >
            Oferta
          </Link>
        </nav>
      </Modal>
    </header>
  );
}
