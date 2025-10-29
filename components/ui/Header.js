'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // ESC handler
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isMenuOpen]);

  // Focus trap (prosty)
  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;

    const menu = menuRef.current;
    const focusableElements = menu.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function trapFocus(e) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    menu.addEventListener('keydown', trapFocus);
    firstElement?.focus();

    return () => menu.removeEventListener('keydown', trapFocus);
  }, [isMenuOpen]);

  return (
    <header
      className='sticky top-0 z-header bg-black/95 backdrop-blur-sm border-b border-neon-blue/20 shadow-glow'
      role='banner'
    >
      <nav
        className='container mx-auto px-4 h-header flex items-center justify-between'
        aria-label='Główna nawigacja'
      >
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center relative z-10 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 rounded'
          aria-label='Strona główna - Wojny Laserowe'
        >
          <img
            src='/images/logo/logo.svg'
            alt='Wojny Laserowe'
            className='h-12 w-auto object-contain'
            height='48'
            width='120'
          />
        </Link>

        {/* Desktop Nav - TYLKO "Oferta" */}
        <nav aria-label='Główna' className='hidden md:flex items-center gap-6'>
          <Link
            href='/kontakt#oferta'
            className='text-text-light hover:text-neon-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 rounded px-2 py-1'
          >
            Oferta
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isMenuOpen}
          aria-controls='mobile-menu'
          className='md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 text-text-light'
        >
          <span className='sr-only'>
            {isMenuOpen ? 'Zamknij' : 'Otwórz'} menu
          </span>
          <div className='flex flex-col gap-1.5 w-6'>
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className='md:hidden fixed inset-0 bg-black/50 z-overlay'
            onClick={() => setIsMenuOpen(false)}
            aria-hidden='true'
          />

          {/* Menu Panel */}
          <div
            id='mobile-menu'
            ref={menuRef}
            className='md:hidden fixed right-0 top-0 bottom-0 w-64 bg-black/95 border-l border-neon-blue/20 shadow-xl z-modal'
            role='dialog'
            aria-modal='true'
            aria-labelledby='mobile-menu-title'
          >
            <div className='flex justify-between items-center p-4 border-b border-neon-blue/20'>
              <h2
                id='mobile-menu-title'
                className='text-lg font-semibold text-text-light'
              >
                Menu
              </h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className='text-text-light hover:text-neon-blue transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2'
                aria-label='Zamknij menu'
              >
                <span className='text-2xl'>×</span>
              </button>
            </div>

            <nav className='flex flex-col p-4 gap-4' role='menu'>
              <Link
                href='/kontakt#oferta'
                onClick={() => setIsMenuOpen(false)}
                className='text-text-light hover:text-neon-blue transition-colors duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 rounded px-2'
                role='menuitem'
              >
                Oferta
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
