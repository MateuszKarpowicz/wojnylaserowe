/**
 * lock-scroll - utility do blokowania scroll body podczas otwarcia modala/drawera
 * Bezpieczne dla SSR (sprawdza typeof document)
 */

export function lockScroll(on) {
  if (typeof document === 'undefined') return;

  const html = document.documentElement;
  const body = document.body;

  if (on) {
    // Zapisz oryginalny overflow dla body (jeśli jeszcze nie zapisany)
    if (!body.style.getPropertyValue('--original-overflow')) {
      body.style.setProperty('--original-overflow', body.style.overflow || '');
    }
    // Zablokuj scroll
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
  } else {
    // Przywróć scroll
    html.style.overflow = '';
    body.style.overflow = '';
  }
}
