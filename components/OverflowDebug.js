'use client';

import { useEffect } from 'react';

export default function OverflowDebug() {
  useEffect(() => {
    // Włącz tryb debug wizualny tylko w dev poprzez data-atrybut na <html>
    document.documentElement.setAttribute('data-debug-overflow', 'true');
    const markOverflow = () => {
      const docWidth = document.documentElement.clientWidth;
      const offenders = [];

      document.querySelectorAll('*').forEach(el => {
        el.removeAttribute('data-overflow');
        const rect = el.getBoundingClientRect();
        const scrollW = el.scrollWidth;
        const clientW = el.clientWidth;
        const isWiderThanViewport = rect.right > docWidth + 0.5; // tolerance
        const hasHorizontalOverflow = scrollW > clientW + 1;
        if (isWiderThanViewport || hasHorizontalOverflow) {
          el.setAttribute('data-overflow', 'true');
          offenders.push({ el, rect, scrollW, clientW });
        }
      });

      if (offenders.length) {
        // eslint-disable-next-line no-console
        console.warn(
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
      document.documentElement.removeAttribute('data-debug-overflow');
      ro.disconnect();
      window.removeEventListener('resize', markOverflow);
      window.removeEventListener('orientationchange', markOverflow);
    };
  }, []);

  return null;
}
