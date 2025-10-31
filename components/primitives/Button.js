/**
 * Button - Uniwersalny komponent przycisku z wariantami
 *
 * Komponent przycisku z wieloma wariantami stylów (neon blue, purple, CTA, link, etc.)
 * wykorzystujący class-variance-authority do zarządzania wariantami.
 * Obsługuje renderowanie jako button, link (Next.js Link) lub custom element.
 *
 * @param {'button'|'a'|string} as - Typ elementu do renderowania (domyślnie: 'button')
 * @param {string} href - URL dla linku (wymagane gdy as='a')
 * @param {'button'|'submit'|'reset'} type - Typ przycisku (domyślnie: 'button')
 * @param {'blue'|'purple'|'section'|'cta-blue'|'cta-purple'|'offer'|'link'} variant - Wariant stylu (domyślnie: 'blue')
 * @param {'sm'|'md'|'lg'} size - Rozmiar przycisku (domyślnie: 'md')
 * @param {boolean} fullWidth - Czy przycisk ma zajmować pełną szerokość (domyślnie: false)
 * @param {string} className - Dodatkowe klasy CSS
 * @param {React.ReactNode} children - Zawartość przycisku
 * @param {object} ...props - Pozostałe props przekazywane do elementu
 * @returns {JSX.Element} Przycisk z odpowiednimi stylami
 */

"use client";

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { cva } from 'class-variance-authority';

const buttonStyles = cva(
  // Base styles dla wszystkich przycisków
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-300 focus-ring',
  {
  variants: {
    variant: {
        blue:
          'bg-neon-blue bg-opacity-90 text-white hover:bg-neon-blue/90 shadow-glow',
        purple:
          'bg-neon-purple bg-opacity-90 text-white hover:bg-neon-purple/90 shadow-glow-purple',
        section: 'bg-neon-blue bg-opacity-90 text-white hover:bg-neon-blue/90 shadow-glow px-8 py-3 font-normal',
        'cta-blue':
          'bg-neon-blue bg-opacity-90 text-white hover:bg-neon-blue/90 shadow-glow py-0.5 max-w-md mx-auto w-full',
        'cta-purple':
          'bg-neon-purple bg-opacity-90 text-white hover:bg-neon-purple/90 shadow-glow-purple py-0.5 max-w-md mx-auto w-full',
        offer:
          'bg-neon-purple bg-opacity-90 text-white hover:bg-neon-purple/90 shadow-glow-purple px-8 py-1 rounded-l-lg rounded-r-none',
      link: 'inline-flex items-center gap-1 bg-transparent p-0 link-hover-neon link-focus-neon',
    },
    size: {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-base',
    },
    // Size nie nadpisuje padding dla wariantów które mają własny padding (section, cta, offer)
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'blue',
    size: 'md',
    fullWidth: false,
  },
});

export default function Button({
  as = 'button',
  href,
  type = 'button',
  variant,
  size,
  fullWidth,
  className = '',
  children,
  ...props
}) {
  const classes = cn(buttonStyles({ variant, size, fullWidth }), className);

  if (as === 'a' && href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (as === 'button') {
    return (
      <button type={type} className={classes} {...props}>
        {children}
      </button>
    );
  }

  const As = as;
  return (
    <As className={classes} href={href} {...props}>
      {children}
    </As>
  );
}
