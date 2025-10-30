'use client';
import { useOferta } from '@/components/context/OfertaContext';
import Modal from '@/components/overlay/Modal';
import Image from 'next/image';
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
      className={`sticky top-0 z-header bg-header-footer backdrop-blur-sm will-change-transform ${
        isOfertaOpen
          ? 'border-b border-neon-purple/20 shadow-glow-purple'
          : 'border-b border-neon-blue/20 shadow-glow'
      }`}
      role='banner'
      style={{ transform: 'translateZ(0)' }} // Hardware acceleration
    >
      <nav
        className='container mx-auto px-4 h-header flex items-center justify-center relative'
        aria-label='Główna nawigacja'
      >
        {/* Logo - NA ŚRODKU */}
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
      </nav>

      {/* Oferta Button - Renderowany przez Portal z najwyższym z-index */}
      {mounted &&
        createPortal(
          <button
            onClick={openOferta}
            aria-label={isOfertaOpen ? 'Zamknij ofertę' : 'Otwórz ofertę'}
            aria-expanded={isOfertaOpen}
            aria-controls='oferta-modal'
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
        closeOnOverlayClick={true}
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
              <Link
                href='/o-nas'
                onClick={() => setIsMenuOpen(false)}
                className='w-full bg-button-dark hover:bg-button-dark-hover border border-neon-blue/30 hover:border-neon-blue/50 rounded-lg p-4 text-left transition-all duration-200 shadow-glow/20 hover:shadow-glow/40 block'
                role='menuitem'
              >
                <span className='text-text-light font-medium'>O nas</span>
              </Link>
              <Link
                href='/laserowe-usuwanie-tatuazu'
                onClick={() => setIsMenuOpen(false)}
                className='w-full bg-button-dark hover:bg-button-dark-hover border border-neon-blue/30 hover:border-neon-blue/50 rounded-lg p-4 text-left transition-all duration-200 shadow-glow/20 hover:shadow-glow/40 block'
                role='menuitem'
              >
                <span className='text-text-light font-medium'>
                  Laserowe usuwanie tatuażu
                </span>
              </Link>
              <Link
                href='/scarink-regeneracja-blizn'
                onClick={() => setIsMenuOpen(false)}
                className='w-full bg-button-dark hover:bg-button-dark-hover border border-neon-blue/30 hover:border-neon-blue/50 rounded-lg p-4 text-left transition-all duration-200 shadow-glow/20 hover:shadow-glow/40 block'
                role='menuitem'
              >
                <span className='text-text-light font-medium'>
                  ScarINK – regeneracja blizn
                </span>
              </Link>
              <Link
                href='/efekty'
                onClick={() => setIsMenuOpen(false)}
                className='w-full bg-button-dark hover:bg-button-dark-hover border border-neon-blue/30 hover:border-neon-blue/50 rounded-lg p-4 text-left transition-all duration-200 shadow-glow/20 hover:shadow-glow/40 block'
                role='menuitem'
              >
                <span className='text-text-light font-medium'>Efekty</span>
              </Link>
              <Link
                href='/faq'
                onClick={() => setIsMenuOpen(false)}
                className='w-full bg-button-dark hover:bg-button-dark-hover border border-neon-blue/30 hover:border-neon-blue/50 rounded-lg p-4 text-left transition-all duration-200 shadow-glow/20 hover:shadow-glow/40 block'
                role='menuitem'
              >
                <span className='text-text-light font-medium'>FAQ</span>
              </Link>
              <Link
                href='/kontakt'
                onClick={() => setIsMenuOpen(false)}
                className='w-full bg-button-dark hover:bg-button-dark-hover border border-neon-blue/30 hover:border-neon-blue/50 rounded-lg p-4 text-left transition-all duration-200 shadow-glow/20 hover:shadow-glow/40 block'
                role='menuitem'
              >
                <span className='text-text-light font-medium'>Kontakt</span>
              </Link>
            </nav>
          </div>
        </div>
      </Modal>
    </header>
  );
}
