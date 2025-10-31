/**
 * HeaderActions - Przyciski akcji w headerze (OFERTA i MENU)
 *
 * Przyciski renderowane przez Portal poza headerem, z najwyższym z-index.
 * OFERTA (lewy) - otwiera modal oferty, MENU (prawy) - otwiera mobile menu.
 *
 * @param {boolean} isOfertaOpen - Czy modal oferty jest otwarty
 * @param {Function} onToggleOferta - Funkcja przełączania modala oferty
 * @param {boolean} isMenuOpen - Czy menu mobilne jest otwarte
 * @param {Function} onToggleMenu - Funkcja przełączania menu mobilnego
 * @param {boolean} mounted - Czy komponent jest zamontowany (dla SSR)
 * @returns {JSX.Element} Przyciski renderowane przez Portal lub null
 */
'use client';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';

export default function HeaderActions({
  isOfertaOpen,
  onToggleOferta,
  isMenuOpen,
  onToggleMenu,
  mounted,
}) {
  if (!mounted) return null;

  return (
    <>
      {/* Oferta Button - lewy */}
      {createPortal(
        <button
          onClick={onToggleOferta}
          aria-label={isOfertaOpen ? 'Zamknij ofertę' : 'Otwórz ofertę'}
          aria-expanded={isOfertaOpen}
          aria-controls='oferta-modal'
          className={cn(
            'fixed top-[calc(4.5rem-1rem)] left-0 z-button bg-neon-purple text-white w-24 py-0.5 rounded-r-lg rounded-l-none transition-all duration-300 flex items-center justify-center focus-ring',
            isOfertaOpen
              ? 'bg-opacity-100 shadow-glow-purple-strong shadow-[0_0_40px_rgba(192,132,252,0.8)]'
              : 'bg-opacity-90 shadow-glow-purple hover:bg-neon-purple/90'
          )}
        >
          OFERTA
        </button>,
        document.body
      )}

      {/* Menu Button - prawy */}
      {createPortal(
        <button
          onClick={onToggleMenu}
          aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isMenuOpen}
          aria-controls='mobile-menu'
          className={cn(
            'fixed top-[calc(4.5rem-1rem)] right-0 z-button bg-neon-blue text-white w-24 py-0.5 rounded-l-lg rounded-r-none transition-all duration-300 flex items-center justify-center focus-ring',
            isMenuOpen
              ? 'bg-opacity-100 shadow-[0_0_50px_rgba(0,153,204,1),0_0_80px_rgba(0,153,204,0.6)]'
              : 'bg-opacity-90 shadow-glow hover:bg-neon-blue/90'
          )}
        >
          MENU
        </button>,
        document.body
      )}
    </>
  );
}
