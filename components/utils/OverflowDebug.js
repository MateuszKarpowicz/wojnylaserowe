'use client';

import { useEffect } from 'react';
import { logger } from '@/lib/logger';

export default function OverflowDebug() {
  useEffect(() => {
    // Tryb debug: tylko logowanie w dev, bez mutowania atrybutów w drzewie (unikamy hydration mismatch)
    const markOverflow = () => {
      const docWidth = document.documentElement.clientWidth;
      const offenders = [];

      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        const scrollW = el.scrollWidth;
        const clientW = el.clientWidth;
        const isWiderThanViewport = rect.right > docWidth + 0.5; // tolerance
        const hasHorizontalOverflow = scrollW > clientW + 1;
        if (isWiderThanViewport || hasHorizontalOverflow) {
          offenders.push({ el, rect, scrollW, clientW });
        }
      });

      if (offenders.length) {
        logger.warn(
          '[OverflowDebug] Elements causing horizontal overflow:',
          offenders
        );
      }
    };

    markOverflow();
    const ro = new ResizeObserver(markOverflow);
    ro.observe(document.documentElement);
    window.addEventListener('resize', markOverflow);
    window.addEventListener('orientationchange', markOverflow);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', markOverflow);
      window.removeEventListener('orientationchange', markOverflow);
    };
  }, []);

  return null;
}
