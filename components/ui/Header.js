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
    <header className="header-base">
      <nav className="container-lg h-24 flex items-center justify-between">
        {/* LOGO - po lewej stronie */}
        <Link href="/" className="flex items-center w-1/3 relative z-10">
          <img
            src="/images/logo/logo.svg"
            alt="Wojny Laserowe"
            className="h-20 w-auto object-contain block"
          />
        </Link>
        
        {/* HAMBURGER MENU - widoczny tylko na mobile */}
        <button 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="btn-hamburger"
        >
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
        
        {/* DESKTOP MENU - ukryte na mobile */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/o-nas" 
            className="link-focus-neon ring-offset-darkBg"
          >
            O nas
          </Link>
          <Link 
            href="/efekty" 
            className="link-focus-neon ring-offset-darkBg"
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
            className="link-focus-neon ring-offset-darkBg"
          >
            Kontakt
          </Link>
          <Link 
            href="/faq" 
            className="link-focus-neon ring-offset-darkBg"
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
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-black shadow-lg">
            <div className="flex justify-between items-center p-4 border-b border-neonBlue/20">
              <h2 className="text-textLight font-semibold">Menu</h2>
              <button
                onClick={closeMenu}
                className="btn-close"
                aria-label="Zamknij menu"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col p-4 gap-4">
              <Link 
                href="/o-nas" 
                onClick={closeMenu}
                className="link-focus-neon ring-offset-darkBg"
              >
                O nas
              </Link>
              <Link 
                href="/efekty" 
                onClick={closeMenu}
                className="link-focus-neon ring-offset-darkBg"
              >
                Efekty
              </Link>
              <a 
                href="#oferta" 
                onClick={closeMenu}
                className="text-textLight hover:text-neonPurple transition-colors duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-neonPurple ring-offset-2 ring-offset-darkBg"
              >
                Cennik
              </a>
              <Link 
                href="/kontakt" 
                onClick={closeMenu}
                className="link-focus-neon ring-offset-darkBg"
              >
                Kontakt
              </Link>
              <Link 
                href="/faq" 
                onClick={closeMenu}
                className="link-focus-neon ring-offset-darkBg"
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
