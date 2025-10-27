'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darkBg/95 border-b border-neonBlue/20 shadow-[0_0_20px_rgba(0,224,255,0.3)]">
      <nav className="max-w-screen-lg mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO - po lewej stronie */}
        <Link href="/" className="flex items-center w-1/3">
          <img
            src="/images/logo/logo.svg"
            alt="Wojny Laserowe"
            className="h-12 w-auto"
            style={{ 
              height: '48px', 
              width: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Link>
        
        {/* HAMBURGER MENU - widoczny tylko na mobile */}
        <button 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg"
        >
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
        
        {/* DESKTOP MENU - ukryte na mobile */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/o-nas" 
            className="text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg"
          >
            O nas
          </Link>
          <Link 
            href="/efekty" 
            className="text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg"
          >
            Efekty
          </Link>
          <a 
            href="#oferta" 
            className="text-textLight hover:text-neonPurple transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonPurple ring-offset-2 ring-offset-darkBg"
          >
            Cennik
          </a>
          <Link 
            href="/kontakt" 
            className="text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg"
          >
            Kontakt
          </Link>
          <Link 
            href="/faq" 
            className="text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg"
          >
            FAQ
          </Link>
        </div>
      </nav>

      {/* MOBILE MENU - rozsuwane z prawej */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* OVERLAY */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMenu}
          />
          
          {/* MENU PANEL */}
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-darkBg shadow-lg">
            <div className="flex justify-between items-center p-4 border-b border-neonBlue/20">
              <h2 className="text-textLight font-semibold">Menu</h2>
              <button
                onClick={closeMenu}
                className="text-textLight hover:text-neonBlue transition-colors"
                aria-label="Zamknij menu"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col p-4 gap-4">
              <Link 
                href="/o-nas" 
                onClick={closeMenu}
                className="text-textLight hover:text-neonBlue transition-colors duration-300 py-2"
              >
                O nas
              </Link>
              <Link 
                href="/efekty" 
                onClick={closeMenu}
                className="text-textLight hover:text-neonBlue transition-colors duration-300 py-2"
              >
                Efekty
              </Link>
              <a 
                href="#oferta" 
                onClick={closeMenu}
                className="text-textLight hover:text-neonPurple transition-colors duration-300 py-2"
              >
                Cennik
              </a>
              <Link 
                href="/kontakt" 
                onClick={closeMenu}
                className="text-textLight hover:text-neonBlue transition-colors duration-300 py-2"
              >
                Kontakt
              </Link>
              <Link 
                href="/faq" 
                onClick={closeMenu}
                className="text-textLight hover:text-neonBlue transition-colors duration-300 py-2"
              >
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
