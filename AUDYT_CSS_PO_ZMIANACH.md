# AUDYT CSS - Po zmianach modali (2025-01-27)

## TL;DR

**Status:** ⚠️ **MIXED** - Większość wzorców jest spójna, ale są drobne niespójności z ostatnich
zmian:

- ✅ Kolory semantyczne używane poprawnie (brak `text-gray-*`)
- ✅ Z-index tokeny używane poprawnie (z-header, z-modal, z-button)
- ✅ Shadow tokeny używane poprawnie (shadow-glow, shadow-glow-purple)
- ⚠️ **NIESPÓJNOŚĆ**: Używane są hardcoded `bg-black/95`, `bg-black/90`, `bg-black/50`,
  `bg-black/70` zamiast tokenów
- ⚠️ **NIESPÓJNOŚĆ**: Duplikacja `zIndex: 100` w inline style i klasie `z-button`

---

## ANALIZA SZCZEGÓŁOWA

### 1. ✅ KOLORY SEMANTYCZNE

**Status:** ✅ **OK**

- Brak `text-gray-*`, `bg-gray-*`, `border-gray-*`
- Wszystkie kolory używają tokenów z `tailwind.config.js`:
  - `text-text-light`, `text-text-dark`, `text-secondary`, `text-muted`
  - `bg-surface`, `bg-surface-light`
  - `border-border`, `border-border-light`
  - `bg-neon-blue`, `bg-neon-purple`

**Lokalizacja:**

- `tailwind.config.js:7-31` - wszystkie kolory zdefiniowane

---

### 2. ⚠️ TŁA CIEMNE (`bg-black/*`)

**Status:** ⚠️ **NIESPÓJNOŚĆ - NOWE**

**Problem:** Ostatnie zmiany wprowadziły hardcoded przezroczystości `bg-black/95`, `bg-black/90`,
`bg-black/50`, `bg-black/70` zamiast tokenów.

**Lokalizacje:**

```javascript
// Header.js:19
bg-black/95 backdrop-blur-sm  // header

// Header.js:78 (Modal)
bg-black/90  // drawer Menu

// OfferSlider.js:73,75
bg-black/90  // drawer Oferta (2x)

// OfferSlider.js:87
bg-black/50 hover:bg-black/70  // przyciski opcji w Ofercie

// Footer.js:22
bg-black/95  // footer

// Modal.js overlay
bg-black/50  // overlay drawer
bg-black/90  // overlay centered
```

**Propozycja naprawy:** Dodać do `tailwind.config.js`:

```js
colors: {
  // ...
  'bg-overlay': 'rgba(0, 0, 0, 0.5)',  // bg-black/50
  'bg-overlay-dark': 'rgba(0, 0, 0, 0.9)',  // bg-black/90
  'bg-header-footer': 'rgba(0, 0, 0, 0.95)',  // bg-black/95
  'bg-modal-dark': 'rgba(0, 0, 0, 0.9)',  // bg-black/90
  'bg-button-hover-dark': 'rgba(0, 0, 0, 0.7)',  // bg-black/70
  'bg-button-dark': 'rgba(0, 0, 0, 0.5)',  // bg-black/50
}
```

Albo użyć Custom Properties:

```js
colors: {
  'bg-overlay': 'var(--bg-overlay)',  // 50% opacity
  'bg-overlay-dark': 'var(--bg-overlay-dark)',  // 90% opacity
  'bg-header-footer': 'var(--bg-header-footer)',  // 95% opacity
}
```

**Priorytet:** Średni (niespójność, ale nie krytyczne)

---

### 3. ✅ Z-INDEX

**Status:** ✅ **OK z drobną niespójnością**

**Tokeny używane:**

- `z-header: 50` ✅
- `z-overlay: 60` ✅
- `z-modal: 70` ✅
- `z-button: 100` ✅ (nowy)

**Niespójność:**

- `Header.js:48,64` - duplikacja: `z-button` w klasie + `style={{ zIndex: 100 }}` inline
- Można usunąć inline style, klasa `z-button` powinna wystarczyć

**Lokalizacje:**

```javascript
// Header.js
z-button + style={{ zIndex: 100 }}  // duplikacja

// Modal.js
z-overlay  // 60
z-modal    // 70
```

**Priorytet:** Niski (mała duplikacja, nie wpływa na działanie)

---

### 4. ✅ SHADOW

**Status:** ✅ **OK**

- Wszystkie używają tokenów:
  - `shadow-glow` ✅
  - `shadow-glow-purple` ✅
  - `shadow-2xl` ✅ (standard Tailwind)
  - `shadow-glow-purple/20`, `shadow-glow-purple/40` ✅ (z opacity)

**Lokalizacje:**

- `tailwind.config.js:36-39` - zdefiniowane
- Wszystkie użycia w komponentach używają tokenów

---

### 5. ✅ FORMUARZE

**Status:** ✅ **OK**

- `.input` - standardowe tło (białe)
- `.input-dark` - ciemne tło dla modali (nowe, dobrze zdefiniowane)
- Używa semantycznych kolorów: `text-text-light`, `border-neon-purple`

**Lokalizacja:**

- `globals.css:57-77` - dobrze zdefiniowane

---

### 6. ✅ STRUKTURA @LAYER

**Status:** ✅ **OK**

- `@layer base` - minimalne, tylko podstawy
- `@layer components` - powtarzalne wzorce
- `@layer utilities` - accessibility i skróty

Brak duplikatów, struktura czysta.

---

### 7. ⚠️ INLINE STYLES

**Status:** ⚠️ **DROBNE NIESPÓJNOŚCI**

**Użycia inline styles:**

1. **Header.js:48,64** - `style={{ zIndex: 100 }}`

   - Duplikacja z klasą `z-button`
   - **Propozycja:** Usunąć inline style

2. **Modal.js:199** - `style={{ pointerEvents: 'auto', zIndex: 60 }`

   - `zIndex: 60` duplikuje `z-overlay` w klasie
   - **Propozycja:** Usunąć `zIndex` z inline, klasa już ma `z-overlay`

3. **Modal.js:204,226** - `style={fullscreenStyle}` (top/bottom offset)
   - **OK** - dynamiczne wartości, nie można w klasie CSS

**Priorytet:** Niski (drobne duplikacje)

---

## PODSUMOWANIE PROBLEMÓW

### Krytyczne (do naprawy):

- ❌ Brak

### Średnie (warto naprawić):

1. ⚠️ **Hardcoded `bg-black/*`** - użycie `bg-black/95`, `bg-black/90`, `bg-black/50`, `bg-black/70`
   zamiast tokenów
   - Wpływa na konsystencję i łatwość utrzymania
   - 8 miejsc w kodzie

### Niskie (opcjonalne):

1. ⚠️ **Duplikacja z-index w inline styles** - `zIndex: 100` i `zIndex: 60` duplikują klasy
   - 3 miejsca

---

## REKOMENDACJE

### 1. Dodać tokeny dla ciemnych tła z przezroczystością

**Opcja A: Bezpośrednie wartości rgba**

```js
// tailwind.config.js
colors: {
  'bg-overlay': 'rgba(0, 0, 0, 0.5)',
  'bg-overlay-dark': 'rgba(0, 0, 0, 0.9)',
  'bg-header-footer': 'rgba(0, 0, 0, 0.95)',
  'bg-modal': 'rgba(0, 0, 0, 0.9)',
  'bg-button-dark': 'rgba(0, 0, 0, 0.5)',
  'bg-button-dark-hover': 'rgba(0, 0, 0, 0.7)',
}
```

**Opcja B: CSS Custom Properties (lepsze dla przezroczystości)**

```css
/* globals.css */
:root {
  --bg-overlay: rgba(0, 0, 0, 0.5);
  --bg-overlay-dark: rgba(0, 0, 0, 0.9);
  --bg-header-footer: rgba(0, 0, 0, 0.95);
  --bg-modal: rgba(0, 0, 0, 0.9);
}
```

### 2. Usunąć duplikacje z-index w inline styles

**Header.js:48,64**

```javascript
// PRZED:
style={{ zIndex: 100 }}

// PO:
// (usunąć - klasa z-button już ma z-index 100)
```

**Modal.js:199**

```javascript
// PRZED:
style={{ pointerEvents: 'auto', zIndex: 60 }}

// PO:
style={{ pointerEvents: 'auto' }}  // z-index już w klasie z-overlay
```

---

## MAPA UŻYĆ `bg-black/*`

| Plik           | Linia | Użycie        | Proponowany token      |
| -------------- | ----- | ------------- | ---------------------- |
| Header.js      | 19    | `bg-black/95` | `bg-header-footer`     |
| Header.js      | 78    | `bg-black/90` | `bg-modal`             |
| Footer.js      | 22    | `bg-black/95` | `bg-header-footer`     |
| OfferSlider.js | 73    | `bg-black/90` | `bg-modal`             |
| OfferSlider.js | 75    | `bg-black/90` | `bg-modal`             |
| OfferSlider.js | 87    | `bg-black/50` | `bg-button-dark`       |
| OfferSlider.js | 87    | `bg-black/70` | `bg-button-dark-hover` |
| Modal.js       | 111   | `bg-black/90` | `bg-overlay-dark`      |
| Modal.js       | 115   | `bg-black/50` | `bg-overlay`           |
| Modal.js       | 121   | `bg-black/50` | `bg-overlay`           |

**Łącznie:** 10 miejsc

---

## OCENA OGÓLNA

**Konsystencja:** 85% ✅

- Większość wzorców jest spójna
- Problem: hardcoded przezroczystości `bg-black/*`
- Małe: duplikacje inline styles

**Centralizacja:** 90% ✅

- Tokeny z-index, shadow, kolory - wszystko w config
- Brakuje tylko tokenów dla przezroczystości tła

**Utrzymywalność:** 🟢 **DOBRA**

- Struktura czysta
- Łatwo znaleźć i zmienić wartości
- Drobne ulepszenia możliwe

---

**Data audytu:** 2025-01-27 **Zmiany od ostatniego audytu:** Dodano modale drawer, przyciski przez
Portal, ciemne tła modali
