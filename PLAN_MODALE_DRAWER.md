# Plan implementacji: Fullscreen Drawery dla Menu i Oferty

## WYMAGANIA

1. **Menu Drawer** - wysuwa się od **prawej strony**, na **cały ekran** (między header a footer)
2. **Oferta Drawer** - wysuwa się od **lewej strony**, na **cały ekran** (między header a footer)
3. Oba modale zajmują miejsce między **headerem** (top: 4.5rem) a **footerem** (bottom: ~4rem)

## ZMIANY W IMPLEMENTACJI

### 1. Modal.js - nowy wariant `drawer-fullscreen`

**Zmiany:**

- Drawer będzie miał opcję `fullscreen={true}` która sprawi, że zamiast `width='w-64'`, będzie
  `w-full`
- Dla fullscreen drawer:
  - `top: 4.5rem` (h-header)
  - `bottom: 0` (footer jest fixed, więc drawer będzie pod spodem)
  - `left: 0` lub `right: 0` w zależności od `position`
  - Usunąć `width` prop gdy `fullscreen=true`

### 2. Header.js

**Zmiany:**

- Menu drawer: `variant='drawer'`, `position='right'`, `fullscreen={true}`
- Usunąć `width='w-64'` i `md:hidden` (drawer ma być zawsze widoczny, pełnoekranowy)

### 3. OfferSlider.js

**Zmiany:**

- Zmienić z `variant='fullscreen'` na `variant='drawer'`, `position='left'`, `fullscreen={true}`
- Usunąć wrapper z `bg-surface` (drawer będzie miał własne tło)

## PROPOZYCJA STYLÓW - w duchu strony

### Obecny styl strony:

- **Tło**: `bg-dark` (#0D0D0D) - bardzo ciemne
- **Header**: `bg-black/95`, `border-neon-blue/20`, `shadow-glow`
- **Kolory neon**: blue (#0099CC), purple (#C084FC)
- **Teksty**: `text-light` (#FAFAFA) na ciemnym tle

### Proponowane style modali:

#### **Tło drawerów:**

- Główne tło: `bg-dark` lub `bg-black/95` (spójne z headerem)
- Możliwość subtelnego gradientu: `bg-gradient-to-r from-black/95 to-bg-dark` dla Oferty,
  `bg-gradient-to-l from-black/95 to-bg-dark` dla Menu

#### **Header modala:**

- **Menu**: `bg-neon-blue/90` z `text-white`, `shadow-glow`
- **Oferta**: `bg-neon-purple/90` z `text-white`, `shadow-glow-purple`
- Możliwość dodania subtelnego border-bottom: `border-b border-neon-blue/30` /
  `border-neon-purple/30`

#### **Treść modala:**

- Teksty: `text-light` (#FAFAFA)
- Linki/przyciski: `text-light hover:text-neon-blue` / `hover:text-neon-purple`
- Aktywne elementy: glow effects z odpowiednimi kolorami

#### **Bordeły i efekty:**

- Border po stronie otwierania: `border-l border-neon-blue/30` (Menu od prawej),
  `border-r border-neon-purple/30` (Oferta od lewej)
- Subtelne cienie: `shadow-2xl` z glow effect

#### **Formularze (w Ofercie):**

- Inputy: ciemne tło `bg-black/50`, border `border-neon-purple/30`, tekst `text-light`
- Focus: `focus:border-neon-purple focus:shadow-glow-purple`
- Placeholder: `placeholder:text-muted`

#### **Animacje:**

- Slide-in animation z odpowiedniej strony (prawo→lewo dla Menu, lewo→prawo dla Oferty)
- Smooth transition: `transition-transform duration-300 ease-out`

## DETALOWA SPECYFIKACJA

### Menu Drawer (Header.js)

```jsx
<Modal
  isOpen={isMenuOpen}
  onClose={() => setIsMenuOpen(false)}
  variant='drawer'
  position='right'
  fullscreen={true}
  className='bg-dark border-l border-neon-blue/30 shadow-2xl'
>
  {/* Header */}
  <div className='bg-neon-blue/90 text-white p-6 flex items-center justify-between border-b border-neon-blue/30 shadow-glow'>
    <h2 className='text-xl font-display font-bold'>Menu</h2>
    <button onClick={close}>×</button>
  </div>

  {/* Content */}
  <nav className='flex-1 p-6 overflow-y-auto'>
    <Link className='text-text-light hover:text-neon-blue'>...</Link>
  </nav>
</Modal>
```

### Oferta Drawer (OfferSlider.js)

```jsx
<Modal
  isOpen={isOpen}
  onClose={close}
  variant='drawer'
  position='left'
  fullscreen={true}
  className='bg-dark border-r border-neon-purple/30 shadow-2xl'
>
  {/* Header */}
  <div className='bg-neon-purple/90 text-white p-6 flex items-center justify-between border-b border-neon-purple/30 shadow-glow-purple'>
    <h2 className='text-xl font-display font-bold'>Oferta</h2>
    <button onClick={close}>×</button>
  </div>

  {/* Content - opcje lub formularz */}
</Modal>
```

## KROKI IMPLEMENTACJI

1. ✅ Dodać prop `fullscreen` do `Modal.js`
2. ✅ Dodać logikę fullscreen dla drawer (top/bottom offset)
3. ✅ Zaktualizować style overlay i container dla fullscreen drawer
4. ✅ Zmienić `Header.js` - drawer z `fullscreen={true}`, `position='right'`
5. ✅ Zmienić `OfferSlider.js` - drawer z `fullscreen={true}`, `position='left'`
6. ✅ Zaktualizować style modali zgodnie z propozycją (ciemne tło, neon kolory)
7. ✅ Zaktualizować style formularzy w Ofercie (ciemne tło)
8. ✅ Dodać animacje slide-in
9. ✅ Testowanie i poprawki

## KOLORY DO DODANIA (opcjonalnie)

Do `tailwind.config.js`:

```js
colors: {
  // ... istniejące
  'bg-modal': '#1A1A1A', // ciemniejszy szary dla modali
  'bg-modal-light': '#2A2A2A', // jaśniejszy dla inputów
}
```

Ale możemy użyć istniejących: `bg-dark` (#0D0D0D) lub `bg-black/95`.
