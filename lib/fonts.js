import { Orbitron, Poppins } from 'next/font/google';

// Poppins - główna czcionka sans-serif
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

// Orbitron - czcionka display dla nagłówków
export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-orbitron',
});
