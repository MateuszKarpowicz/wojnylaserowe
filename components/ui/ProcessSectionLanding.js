"use client";
import scarinkPageData from '@/content/texts/scarink-page.json';
import { Card } from '@/components/primitives';
import { useEffect, useState } from 'react';

/**
 * ProcessSectionLanding - Komponent procesu dla strony głównej (landing page)
 *
 * Wyświetla 3 kroki procesu z animacją sekwencyjnego rozświetlania i aktywnym stanem.
 * Używa jasnych kart (variant='blue') z ciemnym tekstem.
 *
 * @returns {JSX.Element} Grid z 3 kartami procesu
 */
export default function ProcessSectionLanding() {
  const { process } = scarinkPageData;
  const steps = process.steps.slice(0, 3);

  // Wejście sekwencyjne kart (1→2→3) bez hoveru – mobile first
  const [entered, setEntered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const r = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(r);
  }, []);

  // Sekwencyjne rozświetlanie 1→2→3 bez interakcji
  useEffect(() => {
    const id = setInterval(() => setActiveIndex(prev => (prev + 1) % steps.length), 3000);
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {steps.map((step, index) => {
        const isActive = activeIndex === index;
        return (
          <Card
            key={index}
            variant='blue'
            className={[
              'focus-ring',
              'transition-[opacity,transform,box-shadow] transition-dur-slow ease-[var(--ease-brand)]',
              'opacity-0 translate-y-3 scale-[0.99]',
              entered && 'opacity-100 translate-y-0 scale-100',
              isActive
                ? 'shadow-glow-blue-strong border-neon-border-blue-strong'
                : 'shadow-none border-neon-border-blue',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ transitionDelay: `${index * 140}ms` }}
          >
            <div className='grid grid-cols-[auto_1fr] items-start gap-3'>
              <div className={[
                'text-5xl md:text-6xl',
                isActive ? 'text-neon-blue drop-shadow-glow-blue-strong' : 'text-neon-blue/70 drop-shadow-glow-blue-weak',
              ].join(' ')} aria-hidden='true'>
                {index + 1}
              </div>
              <h3 className='text-lg font-semibold text-text-light m-0'>{step.title}</h3>
            </div>
            <p className='text-sm text-text-light/85 leading-relaxed mt-3'>
              {step.text}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
