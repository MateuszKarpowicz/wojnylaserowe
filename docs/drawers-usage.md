# FancyDrawer - Dokumentacja użycia

**Wersja:** 1.0
**Data:** 2024

## Przegląd

`FancyDrawer` to komponowany drawer z pełną obsługą gestów (drag-to-close, snap points), bezpieczeństwem (safe areas), dostępnością (ARIA, focus-trap) i wydajnością (Framer Motion).

## API

### Props

| Prop | Typ | Default | Opis |
|------|-----|---------|------|
| `open` | `boolean` | - | Czy drawer jest otwarty (required) |
| `onOpenChange` | `(open: boolean) => void` | - | Callback gdy drawer się otwiera/zamyka (required) |
| `side` | `'bottom' \| 'right' \| 'left'` | `'bottom'` | Pozycja drawer (mobile: bottom, desktop: side) |
| `snapPoints` | `number[]` | `[60, 100]` | Punkty zatrzasku w procentach wysokości viewportu (0-100) |
| `initialSnap` | `number` | pierwszy z `snapPoints` | Początkowy snap point przy otwarciu |
| `dragToClose` | `boolean` | `true` | Czy drag-to-close jest włączony (tylko dla `side='bottom'`) |
| `blurOverlay` | `boolean` | `true` | Czy overlay ma backdrop blur |
| `className` | `string` | `''` | Dodatkowe klasy CSS dla kontenera |

### Przykłady użycia

#### 1. Formularz kontaktowy (bottom sheet)

```tsx
import { FancyDrawer } from '@/components/composed';
import { useState } from 'react';

function ContactForm() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Napisz wiadomość</button>
      <FancyDrawer
        open={open}
        onOpenChange={setOpen}
        side="bottom"
        snapPoints={[60, 100]}
        initialSnap={60}
        dragToClose={true}
        blurOverlay={true}
        className="px-4"
      >
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Formularz kontaktowy</h3>
          {/* Form content */}
        </div>
      </FancyDrawer>
    </>
  );
}
```

#### 2. Side drawer (desktop)

```tsx
<FancyDrawer
  open={open}
  onOpenChange={setOpen}
  side="right"
  dragToClose={false}
  blurOverlay={true}
>
  <div className="p-6">
    <h3>Menu</h3>
    {/* Menu content */}
  </div>
</FancyDrawer>
```

#### 3. Info drawer z 3 snap points

```tsx
<FancyDrawer
  open={open}
  onOpenChange={setOpen}
  side="bottom"
  snapPoints={[25, 60, 100]}
  initialSnap={25}
  dragToClose={true}
>
  <div className="p-4">
    <h4 className="text-base font-semibold">Informacja</h4>
    <p className="text-sm text-neutral-600">Treść...</p>
  </div>
</FancyDrawer>
```

## Funkcjonalności

### Drag-to-close

- Włączone domyślnie dla `side='bottom'`
- Szybki flick w dół (velocity > 1400) blisko dołu (< 120px) zamyka drawer
- Respektuje `prefers-reduced-motion` (wyłącza drag, używa prostego fade/translate)

### Snap points

- Definiowane jako procenty wysokości viewportu (0-100)
- Automatycznie sortowane rosnąco
- Po puszczeniu gestu - snap do najbliższego punktu
- `initialSnap` określa początkowy rozmiar drawer

### Safe areas

- Automatyczne wsparcie dla `env(safe-area-inset-*)`
- Klasa `.pb-safe` dodawana do contentu (iOS home bar)
- Klasa `.pt-safe` dostępna dla górnych safe areas

### Accessibility

- **Focus trap**: Radix Dialog automatycznie trapuje focus
- **ESC key**: Zamyka drawer
- **Overlay click**: Zamyka drawer (jeśli `onOpenChange` jest podłączone)
- **ARIA**: `role="dialog"`, `aria-modal="true"`
- **Screen readers**: Pełna obsługa przez Radix Dialog

### Wydajność

- **Framer Motion**: Sprężyste animacje bez jank
- **Will-change**: Automatyczne dla gestów
- **Scroll lock**: Blokuje scroll body podczas otwarcia (via `lockScroll` utility)
- **Portal rendering**: Renderuje poza DOM hierarchy (lepszy z-index management)

## Stylowanie

### Neutralne style (default)

- Białe tło (`bg-white`)
- Subtelna ramka (`border-neutral-900/10`)
- Ciemny tekst (`text-neutral-900`)
- Grabber handle (szary pasek na górze)

### Brandowe akcenty

Dodawaj brandowe kolory **wewnątrz** drawer (przyciski, nagłówki):

```tsx
<FancyDrawer ...>
  <div className="p-6">
    <button className="bg-neon-blue text-white">Wyślij</button>
  </div>
</FancyDrawer>
```

## Migracja z Modal

### Przed (Modal drawer):

```tsx
<Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  variant="drawer"
  position="left"
  width="w-1/2"
  className="bg-modal shadow-2xl"
>
  <div className="h-full flex flex-col bg-modal">
    {content}
  </div>
</Modal>
```

### Po (FancyDrawer):

```tsx
<FancyDrawer
  open={open}
  onOpenChange={setOpen}
  side="bottom"
  snapPoints={[60, 100]}
  initialSnap={60}
>
  <div className="h-full flex flex-col">
    {content}
  </div>
</FancyDrawer>
```

### Zmiany:

1. `isOpen`/`onClose` → `open`/`onOpenChange`
2. `variant="drawer"` + `position` → `side="bottom"`
3. Usuń `bg-modal` (FancyDrawer ma neutralne białe tło)
4. Usuń `dark={true}` z form fields (białe tło)
5. Zmień `text-text-light` → `text-neutral-900`

## QA Checklist

- [ ] Drag działa płynnie na iOS/Android
- [ ] Snap do najbliższego punktu po puszczeniu
- [ ] Szybki flick w dół zamyka drawer
- [ ] ESC zamyka drawer
- [ ] Overlay click zamyka drawer
- [ ] Focus-trap działa (tabbing nie wychodzi poza drawer)
- [ ] `prefers-reduced-motion` → brak draga, prosty fade/translate
- [ ] Safe areas: brak kolizji z dynamic island / home bar (iOS)
- [ ] Lighthouse: brak regresu CLS/LCP
- [ ] Scroll body jest zablokowany podczas otwarcia

## Decyzje UX

1. **Mobile-first**: Bottom sheet z drag-to-close dla formularzy (naturalne gesty)
2. **Desktop**: Side drawer (right/left) bez gestów (standardowe UX)
3. **Neutralne style**: Białe tło, brandowe akcenty wewnątrz (spójność z Card primitive)
4. **Snap points**: 60% i 100% domyślnie (pozwala na preview i pełny widok)
5. **Backdrop blur**: Domyślnie włączone (nowoczesny wygląd)

## Znane ograniczenia

- `side='top'` nie jest obsługiwane (tylko `bottom`, `left`, `right`)
- Gesture animations tylko dla `side='bottom'`
- Desktop side drawer nie ma snap points (pełna wysokość zawsze)

## Przyszłe ulepszenia

- [ ] Obsługa `side='top'`
- [ ] Snap points dla side drawers
- [ ] Custom grabber handle (ikona zamiast paska)
- [ ] Haptic feedback (iOS/Android)
- [ ] Custom spring config per drawer
