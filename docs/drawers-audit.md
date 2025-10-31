# Audyt Drawerów/Modalów/Sheetów w projekcie

**Data audytu:** 2024
**Wersja projektu:** Next.js 16, React 19

## Podsumowanie

Znaleziono **4 główne przypadki użycia** drawerów/modalów:

1. ✅ **OfferSlider** - formularz oferty (drawer z lewej, mobile-first)
2. ✅ **ContactDrawer** - formularz kontaktowy (drawer z prawej, mobile-first)
3. ✅ **MobileMenu** - menu nawigacyjne (drawer z prawej, mobile-only)
4. ⚠️ **EffectsGallery** - galeria zdjęć (centered modal, desktop-first)

---

## Szczegółowy audyt

### 1. `components/ui/OfferSlider.js`

**Użycie:**
- `Modal` z `variant='drawer'`, `position='left'`, `width='w-1/2'`
- Otwierany przez Header (globalny state via Context)
- Formularz dwuetapowy: wybór opcji → formularz

**Problemy:**
- ❌ Brak drag-to-close
- ❌ Brak snap points (cały czas 50% ekranu)
- ❌ Brak safe-area support
- ❌ Brak animacji gestów (tylko CSS transition)
- ⚠️ Blokuje scroll body (via Modal.js)
- ✅ Ma overlay click to close
- ✅ ESC zamyka (via Modal.js)
- ✅ Focus trap działa (via Modal.js)

**Status:** **WYMAGA MIGRACJI** na `FancyDrawer` (mobile-first, snap points, drag-to-close)

---

### 2. `components/features/contact/ContactDrawer.js`

**Użycie:**
- `Modal` z `variant='drawer'`, `position='right'`, `width='w-1/2'`
- Otwierany przez przycisk "Napisz wiadomość"
- Pojedynczy formularz kontaktowy

**Problemy:**
- ❌ Brak drag-to-close
- ❌ Brak snap points
- ❌ Brak safe-area support
- ❌ Brak animacji gestów
- ⚠️ Blokuje scroll body
- ✅ Overlay click to close
- ✅ ESC zamyka
- ✅ Focus trap działa

**Status:** **WYMAGA MIGRACJI** na `FancyDrawer` (bottom-sheet na mobile, right drawer na desktop)

---

### 3. `components/layout/MobileMenu.js`

**Użycie:**
- `Modal` z `variant='drawer'`, `position='right'`, `width='w-1/2'`
- Otwierany przez Header (mobile menu button)
- Lista linków nawigacyjnych

**Problemy:**
- ❌ Brak drag-to-close
- ❌ Brak snap points
- ❌ Brak safe-area support
- ❌ Brak animacji gestów
- ⚠️ Blokuje scroll body
- ✅ Overlay click to close
- ✅ ESC zamyka
- ✅ Focus trap działa

**Status:** **OPCJONALNA MIGRACJA** (menu może zostać w obecnym `Modal`, ale warto dodać drag-to-close)

---

### 4. `components/features/effects/EffectsGallery.js`

**Użycie:**
- `Modal` z `variant='centered'` (default)
- Otwierany przez kliknięcie w zdjęcie w galerii
- Pełnoekranowy modal z nawigacją zdjęć

**Problemy:**
- N/A - to nie drawer, tylko centered modal
- ✅ Działa dobrze dla desktop

**Status:** **NIE WYMAGA MIGRACJI** (pozostaje jako `Modal` centered)

---

## Obecny komponent: `components/overlay/Modal.js`

**Funkcjonalność:**
- ✅ Warianty: `centered`, `fullscreen`, `drawer`
- ✅ Position dla drawer: `left`, `right`, `top`, `bottom` (tylko `left`/`right` używane)
- ✅ ESC handler
- ✅ Body scroll lock (dla centered/fullscreen, opcjonalnie dla drawer)
- ✅ Focus trap (dla drawer/fullscreen)
- ✅ Overlay click to close (opcjonalne)
- ✅ Portal rendering dla drawer
- ✅ ARIA attributes

**Brakuje:**
- ❌ Drag-to-close
- ❌ Snap points
- ❌ Gesture animations (tylko CSS transition)
- ❌ Safe-area support
- ❌ Backdrop blur (tylko solid overlay)
- ❌ `prefers-reduced-motion` dla gestów
- ❌ iOS rubber-band feel

---

## Rekomendacje migracji

### Priorytet 1 (Mobile-first, formularze)
1. ✅ **OfferSlider** → `FancyDrawer` (bottom-sheet na mobile, snap points: 60%, 100%)
2. ✅ **ContactDrawer** → `FancyDrawer` (bottom-sheet na mobile, snap points: 60%, 100%)

### Priorytet 2 (Opcjonalne)
3. ⚠️ **MobileMenu** → może pozostać w `Modal` lub migrować na `FancyDrawer` z drag-to-close

### Priorytet 3 (Nie dotyczy)
4. ❌ **EffectsGallery** → pozostaje `Modal` centered (desktop-first)

---

## Uwagi techniczne

### Z-index hierarchy (obecna):
- `z-header: 90`
- `z-modal: 70`
- `z-overlay: 60`
- `z-button: 100`

**Problemy:**
- Drawer używa `z-[95]` (hardcoded) dla `!fullscreen` → lepiej użyć tokenów z `tailwind.config.js`

### Scroll lock:
- Obecnie: `document.body.style.overflow = 'hidden'`
- Nowy: `lib/lock-scroll.ts` z `lockScroll(on)`

### Safe areas:
- Brak wsparcia dla `env(safe-area-inset-*)`
- Trzeba dodać klasy `.pt-safe`, `.pb-safe`, etc.

---

## Checklist migracji

- [ ] Instalacja `framer-motion` i `@radix-ui/react-dialog` (lub shadcn/ui Sheet)
- [ ] Utworzenie `lib/motion.ts` (spring configs)
- [ ] Utworzenie `lib/lock-scroll.ts`
- [ ] Dodanie safe-area utilities do `globals.css`
- [ ] Utworzenie `components/composed/FancyDrawer.tsx`
- [ ] Migracja `OfferSlider` na `FancyDrawer`
- [ ] Migracja `ContactDrawer` na `FancyDrawer`
- [ ] Testy na iOS/Android (gesty, safe areas)
- [ ] Testy accessibility (focus-trap, screen readers)
- [ ] Testy `prefers-reduced-motion`
- [ ] QA checklist (drag, snap, ESC, overlay click)
