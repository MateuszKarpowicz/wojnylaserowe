import { Orbitron, Yantramanav, Bebas_Neue } from 'next/font/google';

// Yantramanav - główna czcionka sans-serif (obsługa PL znaków)
export const yantramanav = Yantramanav({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-yantramanav',
});

// Bebas Neue - display font z pełnym latin-ext (dobry dla nagłówków HERO/sekcji)
export const bebas = Bebas_Neue({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
  variable: '--font-bebas',
});

// Orbitron - czcionka display dla nagłówków
export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-orbitron',
});
