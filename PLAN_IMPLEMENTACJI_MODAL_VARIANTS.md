# PLAN IMPLEMENTACJI: Modal.js z wariantami (OPCJA 2)

**Data:** 2025-01-27 **Cel:** Ujednolicenie hamburger menu i modala oferty przez rozszerzenie
Modal.js o warianty **Status:** ✅ WDROŻONE (z poprawkami)

---

## ANALIZA OBECNEGO STANU

### Komponenty używające modal pattern:

1. **Header.js (Hamburger Menu)**

   - Własna implementacja (nie używa Modal.js)
   - Overlay: `fixed inset-0 bg-black/50 z-overlay`
   - Panel: `fixed right-0 top-0 bottom-0 w-64 z-modal`
   - ESC handler: własny
   - Focus trap: własny (menuRef)
   - **BRAK:** body scroll lock ❌

2. **OfferSlider.js**

   - Używa `Modal.js` ✅
   - Używa `useModal` hook ✅
   - Potrzebuje: fullscreen między header a footer

3. **EffectsGallery.js**
   - Używa `Modal.js` ✅
   - Używa `useModal` hook ✅
   - Potrzebuje: centered (obecny behavior - zostaje default)

### Zależności CSS:

- **Z-index scale:** `header: 50`, `overlay: 60`, `modal: 70` ✅
- **Header height:** `h-header: 4.5rem` ✅
- **Footer:** `fixed bottom-0` (height dynamiczny) ✅
- **Kolory:** `bg-black/95`, `border-neon-blue/20`, `shadow-glow` ✅

### Problem z duplikacją:

1. **ESC handler** - 3 miejsca (Header.js, Modal.js, useModal.js)
2. **Body scroll lock** - 2 miejsca (Modal.js, useModal.js) - Header.js BRAK!
3. **Z-index** - Modal.js używa hardcoded `z-50`, powinien `z-modal` (70)

---

## PLAN IMPLEMENTACJI (krok po kroku)

### FAZA 1: Rozszerzenie Modal.js o warianty (kompatybilność wsteczna)

#### 1.1. Nowe props w Modal.js

```jsx
/**
 * @param {string} variant - Typ modala: 'centered' | 'fullscreen' | 'drawer'
 * @param {string} position - Pozycja dla drawer: 'left' | 'right' | 'top' | 'bottom'
 * @param {string} width - Szerokość dla drawer (np. 'w-64', 'w-80')
 * @param {boolean} closeOnOverlayClick - Czy zamykać przy kliknięciu overlay (default: true)
 * @param {string} topOffset - Offset od góry dla fullscreen (np. 'h-header')
 * @param {string} bottomOffset - Offset od dołu dla fullscreen
 */
```

#### 1.2. Implementacja Modal.js z wariantami

**Warianty:**

- `centered` (default) - obecny behavior, dla EffectsGallery
- `fullscreen` - między header a footer, dla OfferSlider
- `drawer` - sidebar z prawej/lewej, dla Hamburger Menu

**Zmiany:**

- Fix z-index: `z-50` → `z-modal`
- Dodanie logiki wariantów
- Zachowanie kompatybilności wstecznej (default `centered`)

---

### FAZA 2: Refaktor Header.js - użycie Modal.js

#### 2.1. Usunięcie własnej implementacji

- Usunąć overlay i panel inline
- Usunąć własny ESC handler (Modal.js to obsługuje)
- Usunąć własny focus trap (przenieść do Modal.js lub osobnego hooka)

#### 2.2. Użycie Modal.js

- Import Modal.js
- Użycie `variant="drawer"`, `position="right"`, `width="w-64"`
- Przeniesienie menuRef do focus trap w Modal.js (lub osobny hook)

---

### FAZA 3: Aktualizacja OfferSlider.js

#### 3.1. Zmiana na fullscreen variant

- `variant="fullscreen"`
- `topOffset="h-header"` (4.5rem)
- `bottomOffset` - obliczenie wysokości footera

---

### FAZA 4: Usunięcie duplikacji z useModal.js

#### 4.1. Usunięcie ESC handler z useModal.js

- Modal.js obsługuje ESC
- useModal tylko zarządza stanem (isOpen, open, close, toggle)

#### 4.2. Opcjonalnie: focus trap hook

- Stworzyć `useFocusTrap.js` jeśli potrzeba
- Lub dodać do Modal.js jako opcja

---

### FAZA 5: Aktualizacja CSS (jeśli potrzeba)

#### 5.1. Wsparcie dla fullscreen

- Offset top/bottom w tailwind.config (opcjonalnie)
- Lub użyć calc() w klasach

#### 5.2. Klasy pomocnicze (opcjonalnie)

- `.modal-drawer`, `.modal-fullscreen` w globals.css jeśli potrzeba
- Ale lepiej przez variant logic w Modal.js

---

## SZCZEGÓŁOWA IMPLEMENTACJA

### KROK 1: Modal.js - nowa implementacja

```jsx
'use client';
import { useEffect, useRef } from 'react';

export default function Modal({
  isOpen,
  onClose,
  variant = 'centered', // 'centered' | 'fullscreen' | 'drawer'
  position = 'right', // dla drawer: 'left' | 'right' | 'top' | 'bottom'
  width = 'w-64', // dla drawer
  className = '',
  overlayClassName = '',
  closeOnOverlayClick = true,
  topOffset = 'h-header', // dla fullscreen
  bottomOffset, // dla fullscreen (auto-detect footer lub custom)
  children,
  ariaLabelledBy,
}) {
  const modalRef = useRef(null);

  // ESC handler (jeden dla wszystkich)
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus trap (dla drawer i fullscreen)
  useEffect(() => {
    if (!isOpen || !modalRef.current || variant === 'centered') return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, select, textarea'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function trapFocus(e) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    modal.addEventListener('keydown', trapFocus);
    firstElement?.focus();

    return () => modal.removeEventListener('keydown', trapFocus);
  }, [isOpen, variant]);

  if (!isOpen) return null;

  // Obliczenie bottom offset dla fullscreen
  const fullscreenBottom = bottomOffset || '0'; // można auto-detect footer height

  // Style dla overlay
  const overlayClasses = [
    'fixed z-overlay',
    variant === 'centered' && 'inset-0 bg-black/90',
    variant === 'fullscreen' &&
      `top-${topOffset} bottom-${fullscreenBottom} left-0 right-0 bg-black/50`,
    variant === 'drawer' && 'inset-0 bg-black/50',
    overlayClassName,
  ]
    .filter(Boolean)
    .join(' ');

  // Style dla kontenera
  const containerClasses = {
    centered: 'flex items-center justify-center p-4',
    fullscreen: 'w-full h-full overflow-y-auto',
    drawer: `fixed ${position}-0 top-0 bottom-0 ${width} bg-black/95 border-${
      position === 'right' ? 'l' : 'r'
    } border-neon-blue/20 shadow-xl`,
  };

  return (
    <div
      className={overlayClasses}
      onClick={closeOnOverlayClick ? onClose : undefined}
      role='dialog'
      aria-modal='true'
      aria-labelledby={ariaLabelledBy}
    >
      {/* Kontener dla centered */}
      {variant === 'centered' && (
        <div
          className={`relative max-w-4xl max-h-full z-modal ${className}`}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      )}

      {/* Kontener dla fullscreen */}
      {variant === 'fullscreen' && (
        <div
          ref={modalRef}
          className={`relative z-modal ${className}`}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      )}

      {/* Kontener dla drawer */}
      {variant === 'drawer' && (
        <div
          ref={modalRef}
          className={`${containerClasses.drawer} z-modal ${className}`}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </div>
  );
}
```

**Problem z dynamicznymi klasami Tailwind:**

- `top-${topOffset}` nie zadziała (Tailwind purge)
- Rozwiązanie: użyć style attribute lub safelist

**Lepsza wersja z style attribute:**

```jsx
// Dla fullscreen - użyj style dla dynamicznych wartości
const fullscreenStyle = variant === 'fullscreen' ? {
  top: '4.5rem', // h-header
  bottom: '0', // lub footer height
} : {};

<div
  style={fullscreenStyle}
  className={...}
>
```

---

### KROK 2: Header.js - refaktor do Modal.js

**Przed:**

```jsx
{
  isMenuOpen && (
    <>
      <div className='md:hidden fixed inset-0 bg-black/50 z-overlay' />
      <div className='md:hidden fixed right-0 top-0 bottom-0 w-64 z-modal'>{/* content */}</div>
    </>
  );
}
```

**Po:**

```jsx
<Modal
  isOpen={isMenuOpen}
  onClose={() => setIsMenuOpen(false)}
  variant='drawer'
  position='right'
  width='w-64'
  className='md:hidden' // tylko mobile
  overlayClassName='md:hidden'
  ariaLabelledBy='mobile-menu-title'
>
  <div className='flex justify-between items-center p-4 border-b border-neon-blue/20'>
    <h2 id='mobile-menu-title' className='text-lg font-semibold text-text-light'>
      Menu
    </h2>
    <button onClick={() => setIsMenuOpen(false)} className='...'>
      ×
    </button>
  </div>
  <nav className='flex flex-col p-4 gap-4' role='menu'>
    {/* links */}
  </nav>
</Modal>
```

---

### KROK 3: OfferSlider.js - zmiana na fullscreen

**Przed:**

```jsx
<Modal
  isOpen={isOpen}
  onClose={toggleSlider}
  className='max-w-md mx-auto'
  overlayClassName='bg-black bg-opacity-50'
>
```

**Po:**

```jsx
<Modal
  isOpen={isOpen}
  onClose={toggleSlider}
  variant='fullscreen'
  topOffset='4.5rem' // h-header
  className='overflow-y-auto'
  overlayClassName='bg-black/50'
>
```

---

### KROK 4: useModal.js - usunięcie ESC handler

**Przed:**

```jsx
// ESC handler w useModal
useEffect(() => {
  const handleKeyDown = e => {
    if (e.key === 'Escape' && isOpen) {
      close();
    }
  };
  // ...
}, [isOpen, close]);
```

**Po:**

```jsx
// Usunąć ESC handler - Modal.js to obsługuje
// Zostaw tylko body scroll lock (OPCJONALNIE - Modal.js też to robi)
// LUB: Usunąć całkowicie body scroll lock z useModal (Modal.js obsługuje)
```

**Decyzja:** Usunąć ESC i body scroll lock z useModal - Modal.js to obsługuje centralnie.

---

### KROK 5: EffectsGallery.js - bez zmian (default centered)

```jsx
<Modal isOpen={isOpen} onClose={close}>
  {/* Zostaje bez zmian - używa default variant='centered' */}
</Modal>
```

---

### KROK 6: Aktualizacja tailwind.config.js (jeśli potrzeba)

**Opcjonalnie - dodać footer height:**

```js
height: {
  header: '4.5rem',
  footer: 'auto', // dynamiczny - nie da się ustawić na stałe
}
```

**Lub użyć calc() w style dla fullscreen.**

---

### KROK 7: globals.css - klasy pomocnicze (opcjonalnie)

Jeśli potrzeba dodatkowe klasy:

```css
@layer components {
  /* Modal drawer */
  .modal-drawer-content {
    @apply bg-black/95 border-l border-neon-blue/20 shadow-xl;
  }
}
```

Ale lepiej przez variant logic w Modal.js.

---

## CHECKLIST WDROŻENIA

### Faza 1: Modal.js z wariantami

- [ ] Dodać props: `variant`, `position`, `width`, `topOffset`, `bottomOffset`
- [ ] Implementacja variant 'centered' (default, kompatybilność wsteczna)
- [ ] Implementacja variant 'fullscreen'
- [ ] Implementacja variant 'drawer'
- [ ] Fix z-index: `z-50` → `z-modal`
- [ ] Focus trap dla drawer i fullscreen
- [ ] Test: EffectsGallery (centered) działa bez zmian

### Faza 2: Header.js refaktor

- [ ] Usunąć własną implementację overlay/panel
- [ ] Usunąć własny ESC handler
- [ ] Import Modal.js
- [ ] Użyć `variant="drawer"`, `position="right"`, `width="w-64"`
- [ ] Przetestować focus trap (Tab navigation)
- [ ] Przetestować ESC (zamykanie)
- [ ] Przetestować body scroll lock
- [ ] Przetestować mobile/desktop (tylko mobile widoczny)

### Faza 3: OfferSlider.js

- [ ] Zmienić na `variant="fullscreen"`
- [ ] Ustawić `topOffset="4.5rem"` (h-header)
- [ ] Przetestować czy modal jest między header a footer
- [ ] Przetestować overflow/scroll w formularzu

### Faza 4: useModal.js cleanup

- [ ] Usunąć ESC handler z useModal.js
- [ ] Usunąć body scroll lock z useModal.js (Modal.js obsługuje)
- [ ] Zostawić tylko: `isOpen`, `open`, `close`, `toggle`
- [ ] Przetestować: OfferSlider i EffectsGallery działają

### Faza 5: Testy i weryfikacja

- [ ] Build przechodzi bez błędów
- [ ] Hamburger menu działa (mobile)
- [ ] ESC zamyka menu
- [ ] Overlay click zamyka menu
- [ ] Focus trap działa (Tab navigation)
- [ ] Body scroll zablokowany gdy menu otwarte
- [ ] OfferSlider - fullscreen między header a footer
- [ ] EffectsGallery - centered modal działa
- [ ] Responsive: mobile vs desktop
- [ ] Z-index: nie ma konfliktów (header:50, overlay:60, modal:70)

---

## SZCZEGÓŁOWE ZMIANY W PLIKACH

### 1. components/overlay/Modal.js

**Zmiany:**

- Dodać props: `variant`, `position`, `width`, `topOffset`, `bottomOffset`, `closeOnOverlayClick`
- Fix z-index: `z-50` → `z-modal` (70)
- Implementacja logiki wariantów
- Focus trap dla drawer/fullscreen
- Dynamiczne style dla fullscreen (calc() lub style attribute)

**Kompatybilność wsteczna:**

- Default `variant='centered'` - EffectsGallery działa bez zmian
- Wszystkie istniejące props zachowane

---

### 2. components/ui/Header.js

**Zmiany:**

- Import `Modal` z `@/components/overlay/Modal`
- Usunąć: własny overlay (linia 127-131)
- Usunąć: własny panel (linia 134-168)
- Usunąć: własny ESC handler (linia 10-20)
- Usunąć: `menuRef` (jeśli nie używany do focus trap)
- Dodać: `<Modal variant="drawer" ...>`
- Dodać: `ariaLabelledBy='mobile-menu-title'`

**Zachować:**

- `isMenuOpen` state
- Hamburger button (bez zmian)
- Desktop nav (bez zmian)

---

### 3. components/ui/OfferSlider.js

**Zmiany:**

- `variant='fullscreen'` w Modal
- `topOffset='4.5rem'` (h-header)
- Usunąć `overlayClassName='bg-black bg-opacity-50'` → użyć `bg-black/50`
- Dostosować className kontenera (usunąć `max-w-md mx-auto` jeśli potrzeba)

**Zachować:**

- Wszystką logikę formularza
- `useModal` hook (bez zmian - tylko state management)

---

### 4. components/hooks/useModal.js

**Zmiany:**

- Usunąć ESC handler (linia 32-48)
- Usunąć body scroll lock (linia 42, 47)

**Zostawić:**

- `isOpen`, `open`, `close`, `toggle` (state management)

**Uzasadnienie:** Modal.js centralnie obsługuje ESC i scroll lock.

---

### 5. components/ui/EffectsGallery.js

**Zmiany:**

- **BRAK** - zostaje bez zmian (używa default `variant='centered'`)

---

## OBSŁUGA FULLSCREEN - WYSOKOŚĆ FOOTERA

**Problem:** Footer ma dynamiczną wysokość (ikony + copyright).

**Rozwiązania:**

### Rozwiązanie A: Auto-detect footer height

```jsx
// W Modal.js (fullscreen)
useEffect(() => {
  if (variant === 'fullscreen' && isOpen) {
    const footer = document.querySelector('footer');
    if (footer) {
      const footerHeight = footer.offsetHeight;
      // Użyć footerHeight w calc()
    }
  }
}, [variant, isOpen]);
```

### Rozwiązanie B: CSS calc() z placeholder

```css
/* W globals.css lub przez style */
.modal-fullscreen {
  top: 4.5rem; /* h-header */
  bottom: calc(4rem + 1px); /* szacowana wysokość footera */
}
```

### Rozwiązanie C: Tailwind config + class

```js
// tailwind.config.js
extend: {
  spacing: {
    'footer': '4rem', // szacowana wysokość
  }
}
```

```jsx
bottomOffset = 'footer';
```

**Rekomendacja:** Rozwiązanie B lub C - prostsze, nie wymaga JS.

---

## RYZYKA I MITIGACJA

### Ryzyko 1: Tailwind purge usuwa dynamiczne klasy

**Problem:** `top-${topOffset}` nie zadziała (Tailwind nie widzi klasy w build).

**Mitigacja:** Użyć `style` attribute lub safelist:

```jsx
// Opcja 1: style attribute
style={{ top: '4.5rem', bottom: '0' }}

// Opcja 2: safelist w tailwind.config.js
safelist: [
  { pattern: /top-.*/ },
  { pattern: /bottom-.*/ },
]
```

**Rekomendacja:** Style attribute - prostsze, bardziej elastyczne.

---

### Ryzyko 2: Focus trap konflikt

**Problem:** Różne modale mogą mieć różne wymagania focus trap.

**Mitigacja:** Focus trap tylko dla drawer i fullscreen, centered może mieć własny (obecny Modal.js
nie ma focus trap dla centered).

---

### Ryzyko 3: Body scroll lock - konflikt wielu modali

**Problem:** Jeśli 2 modale otwarte jednocześnie (nie powinno się zdarzać).

**Mitigacja:** Stack counter dla modali:

```jsx
// W Modal.js
useEffect(() => {
  if (isOpen) {
    const count = parseInt(document.body.dataset.modalCount || '0');
    document.body.dataset.modalCount = count + 1;
    if (count === 0) {
      document.body.style.overflow = 'hidden';
    }
  }
  return () => {
    const count = parseInt(document.body.dataset.modalCount || '0') - 1;
    document.body.dataset.modalCount = count;
    if (count === 0) {
      document.body.style.overflow = 'unset';
    }
  };
}, [isOpen]);
```

**Rekomendacja:** Na razie prostsze rozwiązanie - założyć że tylko jeden modal otwarty.

---

### Ryzyko 4: Kompatybilność wsteczna EffectsGallery

**Mitigacja:** Default `variant='centered'` zachowuje obecny behavior.

---

## TESTY DO WYKONANIA

### Test funkcjonalności:

1. Hamburger menu:

   - [ ] Otwiera się na mobile
   - [ ] ESC zamyka
   - [ ] Overlay click zamyka
   - [ ] Button X zamyka
   - [ ] Tab navigation (focus trap)
   - [ ] Body scroll zablokowany
   - [ ] Nie pojawia się na desktop

2. OfferSlider:

   - [ ] Modal fullscreen między header a footer
   - [ ] Formularz scroll działa
   - [ ] ESC zamyka
   - [ ] Overlay click zamyka (jeśli włączone)

3. EffectsGallery:
   - [ ] Modal centered działa (bez zmian)
   - [ ] ESC zamyka
   - [ ] Overlay click zamyka

### Test wizualny:

1. Z-index warstwy:

   - [ ] Header (z-50) pod modalami
   - [ ] Overlay (z-60) pod modal content
   - [ ] Modal (z-70) na wierzchu
   - [ ] Footer (z-50) pod modalami

2. Responsive:
   - [ ] Mobile: hamburger drawer działa
   - [ ] Desktop: hamburger nie widoczny
   - [ ] Tablet: sprawdzić breakpointy

---

## SZACUNKOWY CZAS

- **Faza 1** (Modal.js): ~2h
- **Faza 2** (Header.js): ~1h
- **Faza 3** (OfferSlider.js): ~30min
- **Faza 4** (useModal.js): ~15min
- **Faza 5** (Testy): ~1h

**Total:** ~4.5h

---

## ALTERNATYWNA DROGA (jeśli coś pójdzie nie tak)

### Rollback plan:

1. Git commit przed zmianami
2. Każda faza w osobnych commitach
3. Możliwość revert pojedynczej fazy

---

## KROKI WDROŻENIA (finalne)

1. **Przygotowanie:**

   - `git checkout -b feature/modal-variants`
   - Commit obecnego stanu

2. **Implementacja:**

   - KROK 1: Modal.js (zachować kompatybilność wstecz)
   - KROK 2: Test EffectsGallery (powinien działać)
   - KROK 3: Header.js refaktor
   - KROK 4: OfferSlider.js update
   - KROK 5: useModal.js cleanup
   - KROK 6: Testy

3. **Weryfikacja:**

   - Build
   - Manual testing
   - Responsive check

4. **Merge:**
   - Code review
   - Merge do main

---

---

## KONKRETNE FRAGMENTY KODU DO ZMIANY

### Fragment 1: Modal.js - pełna nowa implementacja

```jsx
'use client';
import { useEffect, useRef } from 'react';

/**
 * Modal - Komponent modala z obsługą wariantów
 *
 * Warianty:
 * - 'centered' (default) - wyśrodkowany modal z overlay
 * - 'fullscreen' - pełnoekranowy między header a footer
 * - 'drawer' - sidebar z prawej/lewej strony
 *
 * @param {boolean} isOpen - Czy modal jest otwarty
 * @param {Function} onClose - Funkcja zamykania modala
 * @param {string} variant - Typ modala: 'centered' | 'fullscreen' | 'drawer'
 * @param {string} position - Pozycja dla drawer: 'left' | 'right' | 'top' | 'bottom'
 * @param {string} width - Szerokość dla drawer (np. 'w-64', 'w-80')
 * @param {boolean} closeOnOverlayClick - Czy zamykać przy kliknięciu overlay
 * @param {string} className - Dodatkowe klasy CSS dla kontenera
 * @param {string} overlayClassName - Dodatkowe klasy CSS dla overlay
 * @param {string} ariaLabelledBy - ID elementu który opisuje modal
 * @param {React.ReactNode} children - Zawartość modala
 */
export default function Modal({
  isOpen,
  onClose,
  variant = 'centered',
  position = 'right',
  width = 'w-64',
  closeOnOverlayClick = true,
  className = '',
  overlayClassName = '',
  ariaLabelledBy,
  children,
}) {
  const modalRef = useRef(null);

  // ESC handler i body scroll lock (centralnie dla wszystkich wariantów)
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus trap dla drawer i fullscreen (centered może mieć własny)
  useEffect(() => {
    if (!isOpen || !modalRef.current || variant === 'centered') return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, select, textarea'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function trapFocus(e) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    modal.addEventListener('keydown', trapFocus);
    firstElement?.focus();

    return () => modal.removeEventListener('keydown', trapFocus);
  }, [isOpen, variant]);

  if (!isOpen) return null;

  // Style dla overlay - różne dla każdego wariantu
  const getOverlayClasses = () => {
    const base = 'fixed z-overlay';

    if (variant === 'centered') {
      return `${base} inset-0 bg-black/90 ${overlayClassName}`;
    }

    if (variant === 'fullscreen') {
      return `${base} bg-black/50 ${overlayClassName}`;
    }

    if (variant === 'drawer') {
      return `${base} inset-0 bg-black/50 ${overlayClassName}`;
    }

    return base;
  };

  // Style dla kontenera - różne dla każdego wariantu
  const getContainerClasses = () => {
    if (variant === 'centered') {
      return `relative max-w-4xl max-h-full z-modal ${className}`;
    }

    if (variant === 'fullscreen') {
      return `relative z-modal ${className}`;
    }

    if (variant === 'drawer') {
      const borderClass = position === 'right' ? 'border-l' : 'border-r';
      return `fixed ${position}-0 top-0 bottom-0 ${width} bg-black/95 ${borderClass} border-neon-blue/20 shadow-xl z-modal ${className}`;
    }

    return className;
  };

  // Style inline dla fullscreen (top/bottom offset)
  const fullscreenStyle =
    variant === 'fullscreen'
      ? {
          top: '4.5rem', // h-header
          bottom: '0', // footer jest fixed bottom, nie trzeba offset
        }
      : {};

  return (
    <div
      className={getOverlayClasses()}
      onClick={closeOnOverlayClick ? onClose : undefined}
      role='dialog'
      aria-modal='true'
      aria-labelledby={ariaLabelledBy}
      style={fullscreenStyle}
    >
      {/* Kontener */}
      <div ref={modalRef} className={getContainerClasses()} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
```

---

### Fragment 2: Header.js - przed i po

**PRZED (linie 123-170):**

```jsx
{
  /* Mobile Menu */
}
{
  isMenuOpen && (
    <>
      {/* Overlay */}
      <div
        className='md:hidden fixed inset-0 bg-black/50 z-overlay'
        onClick={() => setIsMenuOpen(false)}
        aria-hidden='true'
      />

      {/* Menu Panel */}
      <div
        id='mobile-menu'
        ref={menuRef}
        className='md:hidden fixed right-0 top-0 bottom-0 w-64 bg-black/95 border-l border-neon-blue/20 shadow-xl z-modal'
        role='dialog'
        aria-modal='true'
        aria-labelledby='mobile-menu-title'
      >
        <div className='flex justify-between items-center p-4 border-b border-neon-blue/20'>
          <h2 id='mobile-menu-title' className='text-lg font-semibold text-text-light'>
            Menu
          </h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className='text-text-light hover:text-neon-blue transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2'
            aria-label='Zamknij menu'
          >
            <span className='text-2xl'>×</span>
          </button>
        </div>

        <nav className='flex flex-col p-4 gap-4' role='menu'>
          <Link
            href='/kontakt#oferta'
            onClick={() => setIsMenuOpen(false)}
            className='text-text-light hover:text-neon-blue transition-colors duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 rounded px-2'
            role='menuitem'
          >
            Oferta
          </Link>
        </nav>
      </div>
    </>
  );
}
```

**PO:**

```jsx
{
  /* Mobile Menu */
}
<Modal
  isOpen={isMenuOpen}
  onClose={() => setIsMenuOpen(false)}
  variant='drawer'
  position='right'
  width='w-64'
  className='md:hidden' // tylko mobile
  overlayClassName='md:hidden'
  ariaLabelledBy='mobile-menu-title'
>
  <div className='flex justify-between items-center p-4 border-b border-neon-blue/20'>
    <h2 id='mobile-menu-title' className='text-lg font-semibold text-text-light'>
      Menu
    </h2>
    <button
      onClick={() => setIsMenuOpen(false)}
      className='text-text-light hover:text-neon-blue transition-colors p-2 rounded focus-ring'
      aria-label='Zamknij menu'
    >
      <span className='text-2xl'>×</span>
    </button>
  </div>

  <nav className='flex flex-col p-4 gap-4' role='menu'>
    <Link
      href='/kontakt#oferta'
      onClick={() => setIsMenuOpen(false)}
      className='text-text-light hover:text-neon-blue transition-colors duration-300 py-2 focus-ring rounded px-2'
      role='menuitem'
    >
      Oferta
    </Link>
  </nav>
</Modal>;
```

**Zmiany w importach:**

```jsx
// Dodać na górze Header.js
import Modal from '@/components/overlay/Modal';
```

**Usunąć:**

- Import niepotrzebny (jeśli był)
- `menuRef` (jeśli nie używany gdzie indziej)
- Własny ESC handler (linie 10-20)

---

### Fragment 3: OfferSlider.js - przed i po

**PRZED (linie 73-78):**

```jsx
<Modal
  isOpen={isOpen}
  onClose={toggleSlider}
  className='max-w-md mx-auto'
  overlayClassName='bg-black bg-opacity-50'
>
```

**PO:**

```jsx
<Modal
  isOpen={isOpen}
  onClose={toggleSlider}
  variant='fullscreen'
  className='overflow-y-auto'
  overlayClassName='bg-black/50'
>
```

**Uwaga:** Usunąć `max-w-md mx-auto` z className - fullscreen jest pełnej szerokości.

---

### Fragment 4: useModal.js - przed i po

**PRZED (linie 31-49):**

```jsx
// Obsługa klawiatury (ESC)
useEffect(() => {
  const handleKeyDown = e => {
    if (e.key === 'Escape' && isOpen) {
      close();
    }
  };

  if (isOpen) {
    document.addEventListener('keydown', handleKeyDown);
    // Blokuj scroll body gdy modal jest otwarty
    document.body.style.overflow = 'hidden';
  }

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'unset';
  };
}, [isOpen, close]);
```

**PO:**

```jsx
// ESC i body scroll lock są obsługiwane w Modal.js
// useModal tylko zarządza stanem
```

**Zostaje:**

```jsx
const open = useCallback(() => {
  setIsOpen(true);
}, []);

const close = useCallback(() => {
  setIsOpen(false);
}, []);

const toggle = useCallback(() => {
  setIsOpen(prev => !prev);
}, []);

return {
  isOpen,
  open,
  close,
  toggle,
};
```

---

## OBSŁUGA FULLSCREEN - DYNAMICZNA WYSOKOŚĆ FOOTERA

**Problem:** Footer ma zmienną wysokość (ikony + copyright).

**Rozwiązanie:** Użyć `calc()` lub JS do obliczenia:

### Opcja A: CSS calc() (zalecane)

```jsx
// W Modal.js dla fullscreen
const fullscreenStyle =
  variant === 'fullscreen'
    ? {
        top: '4.5rem', // h-header
        bottom: '0', // footer jest fixed bottom, więc nie trzeba offset (może zasłonić część, ale footer jest sticked)
        // LUB: bottom: '4rem', jeśli wiemy dokładną wysokość footera
      }
    : {};
```

**Jeśli footer ma zasłaniać treść modala:**

```jsx
bottom: '4.5rem', // szacowana wysokość footera (ikony ~3rem + copyright ~1.5rem)
```

### Opcja B: JS auto-detect (opcjonalnie, bardziej skomplikowane)

```jsx
useEffect(() => {
  if (variant === 'fullscreen' && isOpen) {
    const footer = document.querySelector('footer');
    if (footer) {
      const footerHeight = footer.offsetHeight;
      // Użyć footerHeight w style
    }
  }
}, [variant, isOpen]);
```

**Rekomendacja:** Opcja A z szacowaną wartością `bottom: '4.5rem'` (lub `'5rem'` bezpieczniej).

---

## SZCZEGÓŁY IMPLEMENTACJI - EDGE CASES

### Edge Case 1: Desktop - hamburger niewidoczny

**Rozwiązanie:** `className='md:hidden'` na Modal - Tailwind ukryje na desktop.

### Edge Case 2: Focus trap dla centered

**Decyzja:** Zostawić bez focus trap dla centered (obecny behavior - EffectsGallery działa ok).

### Edge Case 3: Wielokrotne otwieranie modali

**Zakładamy:** Tylko jeden modal otwarty na raz (obecny behavior).

Jeśli trzeba obsługiwać stack:

- Dodać modal stack counter (wspólny state/context)
- Ale to overkill na razie

---

## ZMIANY W HEADER.JS - USUNIĘCIE

**Usunąć linie:**

- 6-8: `menuRef` (jeśli nie używany)
- 10-20: ESC handler useEffect
- 22-56: Focus trap useEffect (jeśli nie używany gdzie indziej)
- 127-131: Overlay div
- 134-168: Menu Panel div

**Dodać:**

- Import: `import Modal from '@/components/overlay/Modal';`
- Modal component (patrz Fragment 2)

---

## VERIFICATION CHECKLIST

Po implementacji sprawdź:

### Funkcjonalność:

- [x] Hamburger menu otwiera się (mobile)
- [x] Hamburger menu nie pojawia się (desktop)
- [x] ESC zamyka menu
- [x] Overlay click zamyka menu (jeśli włączone)
- [x] Button X zamyka menu
- [x] Tab navigation w menu (focus trap)
- [x] Body scroll zablokowany gdy menu otwarte
- [x] OfferSlider - modal fullscreen między header a footer
- [x] OfferSlider - formularz scroll działa
- [x] EffectsGallery - modal centered działa (bez zmian)

### Wizualne:

- [x] Z-index warstwy poprawne (overlay:60, modal:70)
- [x] Hamburger drawer animacja (slide from right)
- [x] Fullscreen modal nie zasłania header/footer
- [x] Responsive breakpoints działają

### Build:

- [x] `npm run build` przechodzi
- [x] Brak warningów o nieużywanych klasach
- [x] Brak błędów TypeScript/ESLint

---

**Gotowe do implementacji!** ✅

---

## STATUS WDROŻENIA - RZECZYWISTY STAN

**Data wdrożenia:** 2025-01-27 **Status:** ✅ WDROŻONE z poprawkami

### ✅ Co zostało zrobione:

1. **FAZA 1:** Modal.js rozszerzony o warianty ✅
2. **FAZA 2:** Header.js zrefaktorowany do Modal.js ✅
3. **FAZA 3:** OfferSlider.js zmieniony na fullscreen ✅
4. **FAZA 4:** useModal.js wyczyszczony ✅
5. **FAZA 5:** Build i linter OK ✅

### ⚠️ Dodatkowe zmiany (nie było w planie):

1. **Animacja slide-in dla drawer:**

   - Dodano state `isAnimating` (nie było w planie)
   - Slide-in: `translate-x-full` → `translate-x-0`
   - Transition: `transition-transform duration-300 ease-out`
   - Powód: Użytkownik zgłosił problem z wyglądem menu

2. **Fade-in dla overlay drawer:**
   - Dodano `transition-opacity duration-300`
   - Powód: Lepszy UX

### 📝 Szczegóły implementacji:

**Modal.js:**

- Import: `useState` dodany (dla `isAnimating`)
- Drawer overlay: `inset-0 bg-black/50 transition-opacity duration-300`
- Drawer kontener: Animacja slide-in z `isAnimating` state
- Pełna implementacja w: `components/overlay/Modal.js`

**Różnice od planu:**

- Plan nie przewidywał animacji drawer (dodano podczas debugowania)
- Plan nie przewidywał `transition-opacity` dla overlay (dodano dla lepszego UX)

### 📋 Pełna dokumentacja statusu:

Zobacz: `STATUS_WDROZENIA.md` - szczegółowy status wszystkich zmian

---
