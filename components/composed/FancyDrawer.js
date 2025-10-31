/**
 * FancyDrawer - Komponowany drawer z drag-to-close, snap points, gestami
 *
 * Używa Framer Motion dla animacji gestów, Radix Dialog dla accessibility/focus-trap
 * Mobile-first: bottom-sheet z drag-to-close i snap points
 * Desktop: może być side drawer (right/left) bez gestów
 *
 * Features:
 * - Drag-to-close na mobile (bottom sheet)
 * - Snap points (np. 25%, 60%, 100%)
 * - Safe area support (iOS notch, home bar)
 * - Backdrop blur overlay
 * - prefers-reduced-motion support
 * - Focus trap, ESC, ARIA (via Radix)
 */

'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, animate, useReducedMotion } from 'framer-motion';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { lockScroll } from '@/lib/lock-scroll';
import { springSheet, springSnappy, reducedMotionTransition } from '@/lib/motion';
import { cn } from '@/lib/utils';

/**
 * @typedef {number} Snap - Procent wysokości viewportu (0-100)
 */

/**
 * @param {Object} props
 * @param {boolean} props.open - Czy drawer jest otwarty
 * @param {Function} props.onOpenChange - Callback gdy drawer się otwiera/zamyka
 * @param {'bottom' | 'right' | 'left'} props.side - Pozycja drawer (mobile: bottom, desktop: side)
 * @param {Snap[]} props.snapPoints - Punkty zatrzasku w procentach (np. [25, 60, 100])
 * @param {Snap} props.initialSnap - Początkowy snap point (domyślnie pierwszy z snapPoints)
 * @param {boolean} props.dragToClose - Czy drag-to-close jest włączony (domyślnie true na mobile)
 * @param {boolean} props.blurOverlay - Czy overlay ma blur (domyślnie true)
 * @param {string} props.className - Dodatkowe klasy CSS
 * @param {React.ReactNode} props.children - Zawartość drawer
 */
export function FancyDrawer({
  open,
  onOpenChange,
  side = 'bottom',
  snapPoints = [60, 100],
  initialSnap,
  dragToClose = true,
  blurOverlay = true,
  className,
  children,
}) {
  const [mounted, setMounted] = useState(false);
  const y = useMotionValue(0);
  const vh = useMemo(() => (typeof window !== 'undefined' ? window.innerHeight : 0), []);
  const snaps = useMemo(() => [...new Set(snapPoints)].sort((a, b) => a - b), [snapPoints]);
  const targetY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  // SSR guard
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll body podczas otwarcia
  useEffect(() => {
    if (open && mounted) {
      lockScroll(true);
      return () => lockScroll(false);
    }
  }, [open, mounted]);

  // Ustaw initialSnap (domyślnie pierwszy z snapPoints)
  const defaultInitialSnap = useMemo(() => initialSnap ?? snaps[0], [initialSnap, snaps]);

  // Przy otwarciu - ustaw na initialSnap
  useEffect(() => {
    if (!open || !mounted || side !== 'bottom') return;

    const toY = vh - (defaultInitialSnap / 100) * vh;
    y.set(toY);
    targetY.current = toY;
  }, [open, mounted, defaultInitialSnap, vh, y, side]);

  // Funkcja znajdowania najbliższego snap point
  function closestSnap(currentY) {
    const heights = snaps.map(s => vh - (s / 100) * vh); // y dla każdego snapu
    let best = heights[0];
    let dist = Math.abs(currentY - heights[0]);

    for (const h of heights) {
      const d = Math.abs(currentY - h);
      if (d < dist) {
        dist = d;
        best = h;
      }
    }

    return best;
  }

  function onDragEnd(_event, info) {
    if (prefersReducedMotion || side !== 'bottom') return;

    const current = y.get();
    const vy = info.velocity.y;

    // Szybki flick w dół (> 1400) i blisko dołu (< 120px) → zamknij
    if (vy > 1400 && vh - current < 120) {
      onOpenChange(false);
      return;
    }

    // Snap do najbliższego punktu
    const snapY = closestSnap(current);
    targetY.current = snapY;
    animate(y, snapY, springSnappy);
  }

  // SSR guard - nie renderuj na serwerze
  if (!mounted || !open) return null;

  // Overlay
  const overlay = (
    <DialogPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-40',
        blurOverlay ? 'backdrop-blur-sm bg-black/30' : 'bg-black/40',
        'transition-opacity duration-300'
      )}
      onClick={() => onOpenChange(false)}
      aria-hidden="true"
    />
  );

  // Content dla bottom sheet (mobile)
  if (side === 'bottom') {
    return (
      <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <DialogPrimitive.Portal>
          {overlay}
          <DialogPrimitive.Content
            asChild
            onEscapeKeyDown={(e) => {
              e.preventDefault();
              onOpenChange(false);
            }}
            onPointerDownOutside={(e) => {
              e.preventDefault();
              onOpenChange(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              className={cn(
                'fixed inset-x-0 bottom-0 z-[95] pointer-events-auto',
                className
              )}
              style={{
                y,
                touchAction: dragToClose && !prefersReducedMotion ? 'none' : 'auto',
              }}
              drag={dragToClose && !prefersReducedMotion ? 'y' : false}
              dragConstraints={{ top: 0, bottom: vh }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
              initial={prefersReducedMotion ? { opacity: 0, y: 16 } : false}
              animate={
                open
                  ? prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : {}
                  : prefersReducedMotion
                    ? { opacity: 0, y: 16 }
                    : {}
              }
              transition={prefersReducedMotion ? reducedMotionTransition : springSheet}
            >
              <div className="rounded-t-2xl bg-white text-neutral-900 shadow-2xl border border-neutral-900/10 pb-safe">
                {/* Grabber handle */}
                <div className="grid place-items-center pt-2 pb-1">
                  <div className="h-1.5 w-10 rounded-full bg-neutral-300" />
                </div>
                {children}
              </div>
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  }

  // Dla desktop (side !== 'bottom') - prosty drawer bez gestów
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        {overlay}
        <DialogPrimitive.Content
          className={cn(
            side === 'right' ? 'fixed right-0' : 'fixed left-0',
            'top-0 bottom-0 z-[95] w-1/2 max-w-md',
            'bg-white shadow-2xl',
            side === 'right' ? 'border-l border-neutral-900/10' : 'border-r border-neutral-900/10',
            className
          )}
          role="dialog"
          aria-modal="true"
          onEscapeKeyDown={(e) => {
            e.preventDefault();
            onOpenChange(false);
          }}
          onPointerDownOutside={(e) => {
            e.preventDefault();
            onOpenChange(false);
          }}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
