/**
 * Modal - Komponent modala z obsługą wariantów
 *
 * Warianty:
 * - 'centered' (default) - wyśrodkowany modal z overlay
 * - 'fullscreen' - pełnoekranowy między header a footer
 * - 'drawer' - sidebar z prawej/lewej strony (może być fullscreen)
 *
 * @param {boolean} isOpen - Czy modal jest otwarty
 * @param {Function} onClose - Funkcja zamykania modala
 * @param {string} variant - Typ modala: 'centered' | 'fullscreen' | 'drawer'
 * @param {string} position - Pozycja dla drawer: 'left' | 'right' | 'top' | 'bottom'
 * @param {string} width - Szerokość dla drawer (np. 'w-64', 'w-80') - ignorowane gdy fullscreen=true
 * @param {boolean} fullscreen - Czy drawer ma być pełnoekranowy (tylko dla drawer variant)
 * @param {boolean} closeOnOverlayClick - Czy zamykać przy kliknięciu overlay
 * @param {string} className - Dodatkowe klasy CSS dla kontenera
 * @param {string} overlayClassName - Dodatkowe klasy CSS dla overlay
 * @param {string} ariaLabelledBy - ID elementu który opisuje modal
 * @param {React.ReactNode} children - Zawartość modala
 */

'use client';
import { useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, animate, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Modal({
  isOpen,
  onClose,
  variant = 'centered',
  position = 'right',
  width = 'w-64',
  fullscreen = false,
  closeOnOverlayClick = true,
  className = '',
  overlayClassName = '',
  ariaLabelledBy,
  ariaDescribedBy,
  dragToClose = false, // Prop - drag-to-close dla drawer (bottom, left, right)
  children,
}) {
  const modalRef = useRef(null);
  const y = useMotionValue(0);
  const x = useMotionValue(0);
  const vh = useMemo(() => (typeof window !== 'undefined' ? window.innerHeight : 0), []);
  const vw = useMemo(() => (typeof window !== 'undefined' ? window.innerWidth : 0), []);
  const prefersReducedMotion = useReducedMotion();
  const isBottomDrawer = variant === 'drawer' && position === 'bottom';
  const isSideDrawer = variant === 'drawer' && (position === 'left' || position === 'right');

  // Transition variants - zamykanie wolniejsze niż otwieranie
  const openTransition = { type: 'spring', stiffness: 400, damping: 35, mass: 0.8 };
  const closeTransition = { type: 'spring', stiffness: 150, damping: 28, mass: 1.4 }; // Wolniejsze zamykanie

  const bottomDrawerOpenTransition = { type: 'spring', stiffness: 420, damping: 40 };
  const bottomDrawerCloseTransition = { type: 'spring', stiffness: 160, damping: 28, mass: 1.4 }; // Wolniejsze zamykanie

  // Dla bottom drawer - ustaw początkową pozycję (60% wysokości)
  useEffect(() => {
    if (!isOpen || !isBottomDrawer) return;
    const initialY = vh * 0.4; // 60% widoczne = 40% poza ekranem
    y.set(initialY);
  }, [isOpen, isBottomDrawer, vh, y]);

  // Dla side drawer - reset pozycji przy otwarciu
  useEffect(() => {
    if (!isOpen || !isSideDrawer) return;
    x.set(0);
  }, [isOpen, isSideDrawer, x]);

  // Drag handler dla bottom drawer
  function onDragEndBottom(_event, info) {
    if (!isBottomDrawer || prefersReducedMotion) return;

    const current = y.get();
    const vy = info.velocity.y;

    // Szybki flick w dół (> 800) i blisko dołu (< 150px) → zamknij
    if (vy > 800 && current < 150) {
      onClose();
      return;
    }

    // Jeśli przeciągnięto więcej niż 50% w dół → zamknij
    if (current > vh * 0.5) {
      animate(y, vh, { type: 'spring', stiffness: 400, damping: 40 });
      setTimeout(() => onClose(), 200);
      return;
    }

    // Wróć do pozycji początkowej (60%)
    const snapY = vh * 0.4;
    animate(y, snapY, { type: 'spring', stiffness: 420, damping: 40 });
  }

  // Drag handler dla side drawers
  function onDragEndSide(_event, info) {
    if (!isSideDrawer || !dragToClose || prefersReducedMotion) return;

    const current = x.get();
    const vx = info.velocity.x;
    const threshold = vw * 0.3; // 30% szerokości ekranu

    // Left drawer: szybki flick w lewo (< -800) → zamknij
    if (position === 'left' && (vx < -800 || current < -threshold)) {
      animate(x, -vw, { type: 'spring', stiffness: 400, damping: 40 });
      setTimeout(() => onClose(), 200);
      return;
    }

    // Right drawer: szybki flick w prawo (> 800) → zamknij
    if (position === 'right' && (vx > 800 || current > threshold)) {
      animate(x, vw, { type: 'spring', stiffness: 400, damping: 40 });
      setTimeout(() => onClose(), 200);
      return;
    }

    // Wróć do pozycji początkowej
    animate(x, 0, { type: 'spring', stiffness: 420, damping: 40 });
  }

  // ESC handler i body scroll lock (centralnie dla wszystkich wariantów)
  // Uwaga: drawer NIE blokuje scroll body (oryginalny kod też nie blokował)
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Blokuj scroll body dla centered, fullscreen, fullscreen drawer i bottom drawer
      if (variant !== 'drawer' || fullscreen || isBottomDrawer) {
        document.body.style.overflow = 'hidden';
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (variant !== 'drawer' || fullscreen || isBottomDrawer) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, onClose, variant, fullscreen, isBottomDrawer]);

  // Focus trap dla drawer i fullscreen (centered może mieć własny)
  useEffect(() => {
    if (!isOpen || !modalRef.current || variant === 'centered') return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, select, textarea'
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

    modal.addEventListener('keydown', trapFocus);
    firstElement?.focus();

    return () => modal.removeEventListener('keydown', trapFocus);
  }, [isOpen, variant]);

  if (!isOpen) return null;

  // Style dla overlay - różne dla każdego wariantu
  // UWAGA: overlay dla drawer ma z-overlay (60), który jest niższy niż przyciski (z-button=100)
  const getOverlayClasses = () => {
    const base = 'fixed z-overlay';

    if (variant === 'centered') {
      return `${base} inset-0 bg-overlay-dark flex items-center justify-center p-4 ${overlayClassName}`;
    }

    if (variant === 'fullscreen') {
      return `${base} left-0 right-0 bg-overlay ${overlayClassName}`;
    }

    if (variant === 'drawer') {
      // Overlay dla drawer - NIŻSZY z-index niż przyciski (60 < 100)
      // pointer-events kontrolowane przez inline style gdy closeOnOverlayClick=true
      return `${base} inset-0 bg-overlay ${overlayClassName} transition-opacity duration-300`;
    }

    return base;
  };

  // Style dla kontenera - różne dla każdego wariantu
  const getContainerClasses = () => {
    if (variant === 'centered') {
      return `relative max-w-4xl max-h-full z-modal ${className}`;
    }

    if (variant === 'fullscreen') {
      return `relative z-modal ${className}`;
    }

    if (variant === 'drawer') {
      if (position === 'bottom') {
        // Bottom drawer - fullscreen width
        return `fixed inset-x-0 bottom-0 z-[95] ${className}`;
      }
      const borderClass = position === 'right' ? 'border-l' : 'border-r';
      const borderColor =
        position === 'right' ? 'border-neon-blue/30' : 'border-neon-purple/30';
      const widthClass = fullscreen ? 'w-full' : width;
      // Drawer - fullscreen między header a footer lub zwykły sidebar
      if (fullscreen) {
        // Fullscreen drawer - top/bottom offset (header/footer)
        return `fixed ${position}-0 z-modal ${borderClass} ${borderColor} shadow-2xl ${className}`;
      }
      // Zwykły drawer - z offsetem od footer, wyższy z-index niż footer
      // Używamy z-modal (70) ale drawer powinien być nad footer (z-header=90), więc używamy z-[95]
      return `fixed ${position}-0 ${widthClass} ${borderClass} ${borderColor} shadow-xl z-[95] ${className}`;
    }

    return className;
  };

  // Style inline dla fullscreen i drawer (top/bottom offset)
  // Footer ma py-0.5 + content (~2.25rem), ale drawer powinien kończyć się na footerze (bottom: 0)
  // Dla drawer bez fullscreen - ustawiamy bottom na wysokość footera (~2.25rem)
  const fullscreenStyle =
    variant !== 'centered'
      ? {
          top: '4.5rem', // h-header
          bottom: variant === 'drawer' && !fullscreen ? '2.5rem' : '4rem', // dla drawer = wysokość footera, dla fullscreen = bezpieczny margines
        }
      : {};

  const overlayClasses = getOverlayClasses();
  const containerClasses = getContainerClasses();

  // Klasa animacji dla drawer - drawer jest już widoczny (isOpen = true), więc zawsze translate-x-0
  const drawerAnimationClass = variant === 'drawer' ? 'translate-x-0' : '';

  // Dla drawer - overlay i panel są rodzeństwami (jak oryginalny kod)
  // Używamy Portal żeby renderować drawer poza Header (naprawia problem z sticky header)
  // UWAGA: Overlay ma pointer-events, ale przyciski (z-button=100) są wyżej niż overlay (z-overlay=60)
  if (variant === 'drawer') {
    const drawerContent = (
      <>
        {/* Overlay - oddzielny element z niższym z-index niż przyciski */}
        {/* pointer-events-none w klasie CSS - pozwala przyciskom (z-button=100) być klikalne nad overlay */}
        {/* pointer-events-auto w style tylko dla zamykania overlay */}
        <div
          className={overlayClasses}
          onClick={closeOnOverlayClick ? onClose : undefined}
          aria-hidden='true'
          style={
            closeOnOverlayClick
              ? { pointerEvents: 'auto', cursor: 'pointer' }
              : { pointerEvents: 'none' }
          }
        />
        {/* Panel - oddzielny element z animacją slide-in */}
        {isBottomDrawer && dragToClose ? (
          <motion.div
            ref={modalRef}
            className={cn(containerClasses)}
            role='dialog'
            aria-modal='true'
            aria-labelledby={ariaLabelledBy || 'modal-title'}
            aria-describedby={ariaDescribedBy}
            style={{
              y,
              touchAction: prefersReducedMotion ? 'auto' : 'none',
            }}
            drag={prefersReducedMotion ? false : 'y'}
            dragConstraints={{ top: 0, bottom: vh }}
            dragElastic={0.2}
            onDragEnd={onDragEndBottom}
            initial={prefersReducedMotion ? { opacity: 0, y: vh * 0.4 } : false}
            animate={isOpen ? (prefersReducedMotion ? { opacity: 1, y: vh * 0.4 } : {}) : {}}
            transition={
              prefersReducedMotion
                ? { duration: 0.3 }
                : isOpen
                  ? bottomDrawerOpenTransition
                  : bottomDrawerCloseTransition
            }
          >
            {children}
          </motion.div>
        ) : isSideDrawer && dragToClose ? (
          <motion.div
            ref={modalRef}
            className={cn(containerClasses)}
            role='dialog'
            aria-modal='true'
            aria-labelledby={ariaLabelledBy || 'modal-title'}
            aria-describedby={ariaDescribedBy}
            style={{
              x,
              touchAction: prefersReducedMotion ? 'auto' : 'none',
              ...fullscreenStyle,
            }}
            drag={prefersReducedMotion ? false : 'x'}
            dragConstraints={
              position === 'left'
                ? { left: -vw, right: 0 }
                : { left: 0, right: vw }
            }
            dragElastic={0.2}
            onDragEnd={onDragEndSide}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : position === 'left'
                  ? { x: '-100%' }
                  : { x: '100%' }
            }
            animate={
              isOpen
                ? prefersReducedMotion
                  ? { opacity: 1, x: 0 }
                  : { x: 0, opacity: 1 }
                : prefersReducedMotion
                  ? { opacity: 0 }
                  : position === 'left'
                    ? { x: '-100%', opacity: 0 }
                    : { x: '100%', opacity: 0 }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0.2 }
                : isOpen
                  ? openTransition
                  : closeTransition
            }
          >
            {children}
          </motion.div>
        ) : (
          <motion.div
            ref={modalRef}
            className={cn(containerClasses)}
            role='dialog'
            aria-modal='true'
            aria-labelledby={ariaLabelledBy || 'modal-title'}
            aria-describedby={ariaDescribedBy}
            style={fullscreenStyle}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : position === 'left'
                  ? { x: '-100%' }
                  : position === 'right'
                    ? { x: '100%' }
                    : { opacity: 0 }
            }
            animate={
              isOpen
                ? prefersReducedMotion
                  ? { opacity: 1 }
                  : { x: 0, opacity: 1 }
                : prefersReducedMotion
                  ? { opacity: 0 }
                  : position === 'left'
                    ? { x: '-100%', opacity: 0 }
                    : position === 'right'
                      ? { x: '100%', opacity: 0 }
                      : { opacity: 0 }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0.2 }
                : isOpen
                  ? openTransition
                  : closeTransition
            }
          >
            {children}
          </motion.div>
        )}
      </>
    );

    // Render drawer przez Portal bezpośrednio w body (poza Header)
    // Portal renderuje po przyciskach, więc ważny jest z-index
    if (typeof window !== 'undefined') {
      return createPortal(drawerContent, document.body);
    }
    return drawerContent;
  }

  // Dla centered i fullscreen - overlay jako wrapper (oryginalna struktura Modal.js)
  return (
    <div
      className={overlayClasses}
      onClick={closeOnOverlayClick ? onClose : undefined}
      role='dialog'
      aria-modal='true'
      aria-labelledby={ariaLabelledBy || 'modal-title'}
      style={fullscreenStyle}
    >
      {/* Kontener */}
      <div
        ref={modalRef}
        className={containerClasses}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
