"use client";

import { useEffect, useRef, useState } from 'react';

// Props:
// - items: [{ title }]
// - intervalMs: number (default 3000)
// - fullWidth: boolean → render full-bleed strip
// - variant: 'dark' | 'light' → color of text (matches page theme)
export default function AboutHeroSlider({ items = [], intervalMs = 3000, fullWidth = false, variant = 'dark' }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('pre'); // 'pre' | 'enter' | 'hold' | 'exit'
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef(null);

  // Po montażu włącz animacje; SSR dostaje statyczny stan, żeby uniknąć mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animacja: pre (pozycja startowa z prawej) -> wjazd (200ms) -> hold (intervalMs - 500ms) -> wyjazd w lewo (300ms)
  useEffect(() => {
    if (!mounted || !items.length) return;
    clearTimeout(timerRef.current);

    if (phase === 'pre') {
      // krótkie opóźnienie, by zastosować klasę startową i umożliwić transition do 'enter'
      timerRef.current = setTimeout(() => setPhase('enter'), 20);
    } else if (phase === 'enter') {
      timerRef.current = setTimeout(() => setPhase('hold'), 200);
    } else if (phase === 'hold') {
      const holdMs = Math.max(500, intervalMs - 500);
      timerRef.current = setTimeout(() => setPhase('exit'), holdMs);
    } else if (phase === 'exit') {
      timerRef.current = setTimeout(() => {
        setIndex(prev => (prev + 1) % items.length);
        setPhase('pre');
      }, 300);
    }

    return () => clearTimeout(timerRef.current);
  }, [mounted, phase, items.length, intervalMs]);

  // Reset fazy, gdy zmieni się index (np. zewnętrznie)
  useEffect(() => {
    setPhase('pre');
  }, [index]);

  if (!items.length) return null;

  const textColor = variant === 'light' ? 'text-text-light' : 'text-text-dark';

  const baseClass = 'transition-transform transition-opacity will-change-transform';
  const preClass = 'translate-x-[110%] opacity-0';
  const enterClass = 'translate-x-0 opacity-100 duration-200 ease-out';
  const holdClass = 'translate-x-0 opacity-100';
  const exitClass = 'translate-x-[-110%] opacity-0 duration-300 ease-in';

  const slideClass = [
    baseClass,
    phase === 'pre' ? preClass : '',
    phase === 'enter' ? enterClass : '',
    phase === 'hold' ? holdClass : '',
    phase === 'exit' ? exitClass : '',
  ]
    .filter(Boolean)
    .join(' ');

  // SSR/prekonsolidacja: jeśli nie zamontowano, renderuj bez animacji (środek)
  if (!mounted) {
    const textColor = variant === 'light' ? 'text-text-light' : 'text-text-dark';
    return fullWidth ? (
      <div className={`w-full ${variant === 'light' ? 'bg-bg-dark' : 'bg-bg-light'}`}>
        <div className='min-h-[84px] md:min-h-[100px] grid place-items-center px-3 py-4'>
          <h3 className={`text-3xl md:text-4xl font-display uppercase tracking-[0.14em] ${textColor} text-center`}>
            {items[0]?.title}
          </h3>
        </div>
      </div>
    ) : (
      <div className='w-full'>
        <div className='min-h-[84px] md:min-h-[100px] grid place-items-center px-2 py-3'>
          <h3 className={`text-2xl md:text-3xl font-display uppercase tracking-[0.12em] ${textColor} text-center`}>
            {items[0]?.title}
          </h3>
        </div>
      </div>
    );
  }

  return fullWidth ? (
    <div className={`w-full ${variant === 'light' ? 'bg-bg-dark' : 'bg-bg-light'}`}>
      <div className='overflow-hidden'>
        <div className='min-h-[84px] md:min-h-[100px] px-3 py-4'>
          <div className={`grid place-items-center ${phase === 'enter' ? '' : ''}`}>
            <h3
              className={`text-3xl md:text-4xl font-display uppercase tracking-[0.14em] ${textColor} text-center ${
                phase === 'enter' ? '' : ''
              } ${slideClass}`}
              style={phase === 'enter' ? {} : {}}
            >
              {items[index].title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='w-full'>
      <div className='overflow-hidden'>
        <div className='min-h-[84px] md:min-h-[100px] px-2 py-3'>
          <div className='grid place-items-center'>
            <h3
              className={`text-2xl md:text-3xl font-display uppercase tracking-[0.12em] ${textColor} text-center ${slideClass}`}
            >
              {items[index].title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
