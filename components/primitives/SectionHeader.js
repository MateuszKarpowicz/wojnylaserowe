/**
 * SectionHeader - Komponent nagłówka sekcji z wariantami kolorów
 *
 * Nagłówek sekcji z automatycznym wyborem kolorów (light/dark) i opcjonalnym podtytułem.
 * Używa CVA do zarządzania wariantami stylów.
 *
 * @param {string} title - Tytuł sekcji (wymagany)
 * @param {string} subtitle - Podtytuł sekcji (opcjonalny)
 * @param {'light'|'dark'} variant - Wariant kolorów (domyślnie: 'dark')
 * @param {'left'|'center'} align - Wyrównanie tekstu (domyślnie: 'center')
 * @param {string} className - Dodatkowe klasy CSS
 * @returns {JSX.Element} Nagłówek sekcji z opcjonalnym podtytułem
 */
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const headerWrapper = cva('mb-12', {
  variants: {
    align: {
      left: 'text-left',
      center: 'text-center',
    },
  },
  defaultVariants: {
    align: 'center',
  },
});

const titleStyles = cva('', {
  variants: {
    variant: {
      light: 'section-title-light',
      dark: 'section-title-dark',
    },
  },
  defaultVariants: {
    variant: 'dark',
  },
});

const subtitleStyles = cva('mt-2 text-base md:text-lg', {
  variants: {
    variant: {
      light: 'text-text-light/80',
      dark: 'text-text-dark/80',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
    },
  },
  defaultVariants: {
    variant: 'dark',
    align: 'center',
  },
});

export default function SectionHeader({
  title,
  subtitle,
  variant = 'dark',
  align = 'center',
  className = '',
}) {
  return (
    <div className={cn(headerWrapper({ align }), className)}>
      <h2 className={titleStyles({ variant })}>{title}</h2>
      {subtitle && <p className={subtitleStyles({ variant, align })}>{subtitle}</p>}
    </div>
  );
}
