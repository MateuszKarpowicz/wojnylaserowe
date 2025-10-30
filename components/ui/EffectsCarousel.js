'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import effectsData from '@/content/texts/effects.json';
import ImageFrame from '@/components/primitives/ImageFrame';

export default function EffectsCarousel({ intervalMs = 4000, frameSizeClass = 'w-full' }) {
  const images = useMemo(() => effectsData?.images || [], []);
  const total = images.length;
  const [index, setIndex] = useState(0);
  const [entering, setEntering] = useState(false);
  const [paused, setPaused] = useState(false);

  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (prefersReduced || total <= 1 || paused) return;
    const id = setInterval(() => setIndex(i => (i + 1) % total), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, total, prefersReduced, paused]);

  useEffect(() => {
    setEntering(false);
    const r = requestAnimationFrame(() => setEntering(true));
    return () => cancelAnimationFrame(r);
  }, [index]);

  if (total === 0) return null;

  const current = images[index];

  return (
    <ImageFrame
      variant='neonPurple'
      aspect='square'
      sizeClass={frameSizeClass}
      rounded={true}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        key={index}
        className={[
          'absolute -inset-[2px]',
          'transition-[opacity,transform] duration-[var(--dur-slow)] ease-[var(--ease-brand)]',
          entering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        ].join(' ')}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 640px'
          priority={index === 0}
        />
      </div>
    </ImageFrame>
  );
}
