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
          className='fixed top-[calc(4.5rem-1rem)] left-0 z-button bg-neon-purple bg-opacity-90 text-white w-24 py-0.5 rounded-r-lg rounded-l-none shadow-glow-purple hover:bg-neon-purple/90 transition-colors duration-300 flex items-center justify-center focus-ring'
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
          className='fixed top-[calc(4.5rem-1rem)] right-0 z-button bg-neon-blue bg-opacity-90 text-white w-24 py-0.5 rounded-l-lg rounded-r-none shadow-glow hover:bg-neon-blue/90 transition-colors duration-300 flex items-center justify-center focus-ring'
        >
          MENU
        </button>,
        document.body
      )}
    </>
  );
}
