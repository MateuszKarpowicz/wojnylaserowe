/**
 * Header - Główny komponent nagłówka strony
 *
 * Header z logo na środku, przyciskami OFERTA i MENU renderowanymi przez Portal,
 * oraz mobile menu drawer. Automatycznie zmienia kolory border/shadow w zależności
 * od stanu modala oferty.
 *
 * @returns {JSX.Element} Header z logo, przyciskami akcji i mobile menu
 */
'use client';
import { useOferta } from '@/components/context/OfertaContext';
import HeaderActions from '@/components/layout/HeaderActions';
import HeaderLogo from '@/components/layout/HeaderLogo';
import MobileMenu from '@/components/layout/MobileMenu';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toggle: toggleOferta, isOpen: isOfertaOpen } = useOferta();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-header bg-header-footer ${
        isOfertaOpen
          ? 'border-b border-neon-purple/20 shadow-glow-purple'
          : 'border-b border-neon-blue/20 shadow-glow'
      }`}
      role='banner'
    >
      <nav
        className='container mx-auto px-4 h-header flex items-center justify-center relative'
        aria-label='Główna nawigacja'
      >
        <HeaderLogo />
      </nav>

      <HeaderActions
        isOfertaOpen={isOfertaOpen}
        onToggleOferta={toggleOferta}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        mounted={mounted}
      />

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
