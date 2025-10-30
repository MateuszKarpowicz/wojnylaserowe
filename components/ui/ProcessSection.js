"use client";
import scarinkPageData from '@/content/texts/scarink-page.json';
import { Card } from '@/components/primitives';
import { useEffect, useState } from 'react';

export default function ProcessSection({ variant = 'default' }) {
  const { process } = scarinkPageData;

  // Wejście sekwencyjne kart (1→2→3) bez hoveru – mobile first
  const [entered, setEntered] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const r = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(r);
  }, []);

  // Dla landing: tylko kroki, jasne karty, ciemny tekst, brak aftercare
  if (variant === 'landing') {
    const steps = process.steps.slice(0, 3);
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
              variant='borderBlue'
              className={[
                'focus-ring',
                'transition-[opacity,transform,box-shadow] ease-[var(--ease-brand)]',
                'opacity-0 translate-y-3 scale-[0.99]',
                entered && 'opacity-100 translate-y-0 scale-100',
                isActive
                  ? 'shadow-[0_0_28px_rgba(0,153,204,0.45)] border-neon-blue/60'
                  : 'shadow-none border-neon-blue/30',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ transitionDuration: 'var(--dur-slow)', transitionDelay: `${index * 140}ms` }}
            >
              <div className='grid grid-cols-[auto_1fr] items-start gap-3'>
                <div className={[
                  'text-5xl md:text-6xl',
                  isActive ? 'text-neon-blue drop-shadow-[0_0_16px_rgba(0,153,204,0.70)]' : 'text-neon-blue/70 drop-shadow-[0_0_8px_rgba(0,153,204,0.35)]',
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

  // Domyślnie – dotychczasowe zachowanie sekcji (ciemny wariant + aftercare)
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        {process.steps.map((step, index) => (
          <Card key={index} variant='borderPurple'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='qualification-icon text-neon-purple'>
                  {index + 1}
                </div>
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-text-light mb-2'>
                  {step.title}
                </h3>
                <p className='text-sm text-text-light/80 leading-relaxed'>
                  {step.text}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className='mb-8'>
        <p className='text-text-light/90 leading-relaxed text-lg mb-6 max-w-3xl mx-auto text-center'>
          {process.aftercare.intro}
        </p>
        <p className='text-text-light/90 font-semibold text-lg mb-8 text-center'>
          {process.aftercare.subtitle}
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {process.aftercare.points.map((point, index) => (
            <Card key={index} variant='borderPurple'>
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <div className='qualification-icon text-neon-purple'>
                    {point.icon}
                  </div>
                </div>
                <div className='flex-1'>
                  <p className='text-sm text-text-light/80 leading-relaxed'>
                    {point.text}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
