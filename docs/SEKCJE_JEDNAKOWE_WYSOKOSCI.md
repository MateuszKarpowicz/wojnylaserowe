# Analiza: Sekcje jednakowej wysokości (viewport-based)

**Cel:** Wszystkie sekcje na landing page mają mieć jednakową wysokość = 1 viewport (od menu do footera)

**Obecna sytuacja:**
- Header: fixed, `h-header` = 4.5rem (72px)
- Footer: fixed bottom, wysokość ~2.5rem (~40px z padding)
- Main: `pt-header pb-16` (kompensacja)
- Sekcje: różne wysokości (`section-pad`, `h-[70vh]`, etc.)
- Hero image: `h-[70vh] md:h-[80vh]`

**Wymagana wysokość sekcji:**
```
height = 100vh - header - footer
height = 100vh - 4.5rem - ~2.5rem
height = calc(100vh - 7rem) ≈ calc(100vh - 112px)
```

---

## 🔧 Opcje implementacji

### **Opcja 1: CSS calc() z Tailwind arbitrary values**

**Implementacja:**
```jsx
// W Section.js lub jako prop
<section className="min-h-[calc(100vh-7rem)]">
```

**Lub w tailwind.config.js:**
```js
height: {
  'section': 'calc(100vh - 7rem)', // 100vh - header - footer
}
```

**Plusy:**
✅ Proste, czyste CSS
✅ Zero JavaScript
✅ Działa od razu (SSR-safe)
✅ Performance: żadnych obliczeń w runtime
✅ Responsywne (vh automatycznie się dostosowuje)

**Minusy:**
⚠️ Hardcoded wartości (7rem) - jeśli zmieni się header/footer, trzeba poprawić
⚠️ Nie uwzględnia dynamicznych zmian (np. zmiana wysokości headera przy scroll)
⚠️ Trzeba upewnić się, że wszystkie sekcje używają tego samego

**Dopasowanie do projektu:**
✅ **BARDZO DOBRE** - projekt używa Tailwind, łatwo dodać do Section.js
✅ Spójne z obecnym podejściem (tailwind.config.js już ma `h-header`)
✅ Można dodać jako prop `fullHeight` do Section

---

### **Opcja 2: CSS Custom Properties (CSS Variables)**

**Implementacja:**
```css
/* w globals.css */
:root {
  --header-height: 4.5rem;
  --footer-height: 2.5rem;
  --section-height: calc(100vh - var(--header-height) - var(--footer-height));
}
```

```jsx
// W Section.js
<section style={{ minHeight: 'var(--section-height)' }}>
```

**Plusy:**
✅ Centralna kontrola (jedno miejsce na zmiany)
✅ Łatwe utrzymanie (zmiana w :root propaguje wszędzie)
✅ Można użyć w media queries
✅ SSR-safe
✅ Performance: zero JS

**Minusy:**
⚠️ Wymaga inline styles lub custom classes
⚠️ Trzeba pamiętać o aktualizacji wartości

**Dopasowanie do projektu:**
✅ **DOBRE** - projekt już używa CSS variables (`--font-*`, `--dur-*`)
✅ Można rozszerzyć istniejące `:root` w globals.css

---

### **Opcja 3: React Hook + useLayoutEffect**

**Implementacja:**
```jsx
// hooks/useViewportHeight.js
export function useViewportHeight() {
  const [vh, setVh] = useState(0);

  useLayoutEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector('header')?.offsetHeight || 72;
      const footer = document.querySelector('footer')?.offsetHeight || 40;
      setVh(window.innerHeight - header - footer);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return vh;
}

// W Section.js
const sectionHeight = useViewportHeight();
<section style={{ minHeight: `${sectionHeight}px` }}>
```

**Plusy:**
✅ Dynamiczne (reaguje na zmiany viewport/header/footer)
✅ Dokładne wartości (oblicza rzeczywiste wysokości)
✅ Obsługuje zmiany wysokości headera/footera w runtime

**Minusy:**
❌ Wymaga JavaScript (nie działa przy wyłączonym JS)
❌ Layout shift (flicker) - sekcje najpierw bez wysokości
❌ Performance: obliczenia przy każdym resize
❌ Trudniejsze w utrzymaniu (hook w każdym komponencie)
❌ Hydration mismatch (SSR vs client)

**Dopasowanie do projektu:**
⚠️ **ŚREDNIE** - projekt preferuje CSS-first approach
⚠️ Może powodować CLS (Cumulative Layout Shift)

---

### **Opcja 4: Intersection Observer + Dynamic height**

**Implementacja:**
```jsx
// hooks/useSectionHeight.js
export function useSectionHeight() {
  const ref = useRef(null);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const vh = window.innerHeight;
        const header = 72; // h-header
        const footer = 40;
        setHeight(`${vh - header - footer}px`);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, style: { minHeight: height } };
}
```

**Plusy:**
✅ Lazy - oblicza tylko dla widocznych sekcji
✅ Dynamiczne

**Minusy:**
❌ Bardzo skomplikowane
❌ Layout shift
❌ Performance overhead (IO dla każdej sekcji)
❌ Overkill dla prostego przypadku

**Dopasowanie do projektu:**
❌ **SŁABE** - za skomplikowane dla tego use case

---

### **Opcja 5: Tailwind arbitrary value z calc() + utility class**

**Implementacja:**
```js
// tailwind.config.js
extend: {
  height: {
    'section-viewport': 'calc(100vh - 4.5rem - 2.5rem)',
    'section-safe': 'calc(100dvh - 4.5rem - 2.5rem)', // safe area dla mobile
  },
}
```

```jsx
// W Section.js lub bezpośrednio
<section className="min-h-section-viewport md:min-h-section-safe">
```

**Plusy:**
✅ Najbardziej Tailwind-native
✅ Reużywalne (klasa używana wszędzie)
✅ SSR-safe
✅ Performance: zero JS
✅ Safe area support (`100dvh`)
✅ Czytelne w kodzie (`min-h-section-viewport`)

**Minusy:**
⚠️ Hardcoded wartości w config
⚠️ Trzeba zaktualizować config przy zmianie header/footer

**Dopasowanie do projektu:**
✅✅ **NAJLEPSZE** - projekt używa Tailwind extensibility
✅ Spójne z obecnym `h-header` w config
✅ Można użyć zarówno w Section.js jak i bezpośrednio

---

### **Opcja 6: CSS Grid z fr units**

**Implementacja:**
```jsx
// W app/page.js lub wrapper
<div className="grid grid-rows-[repeat(auto-fit,minmax(calc(100vh-7rem),1fr))]">
  <Section>...</Section>
  <Section>...</Section>
</div>
```

**Plusy:**
✅ Automatyczne wyrównanie
✅ Responsywne

**Minusy:**
❌ Wymaga zmiany struktury (wrapper)
❌ Trudniejsze do utrzymania
❌ Może konfliktować z obecnym layoutem

**Dopasowanie do projektu:**
❌ **SŁABE** - wymaga refaktoryzacji struktury strony

---

## 🎯 Rekomendacja

### **Rekomendacja 1 (Główna): Opcja 5 - Tailwind utility class**

**Dlaczego:**
1. ✅ Najbardziej spójne z projektem (już używa `h-header`)
2. ✅ Zero JavaScript overhead
3. ✅ SSR-safe (brak hydration issues)
4. ✅ Performance (czysty CSS)
5. ✅ Safe area support dla mobile (`100dvh`)
6. ✅ Czytelne i łatwe w użyciu

**Implementacja:**
```js
// tailwind.config.js
height: {
  header: '4.5rem',
  footer: '2.5rem', // Nowy
  'section-viewport': 'calc(100vh - 4.5rem - 2.5rem)',
  'section-safe': 'calc(100dvh - 4.5rem - 2.5rem)', // Mobile safe area
}
```

```jsx
// Section.js - dodaj prop fullHeight
<Section fullHeight>...</Section>

// Lub bezpośrednio w komponentach
<section className="min-h-section-viewport md:min-h-section-safe">
```

---

### **Rekomendacja 2 (Alternatywna): Opcja 2 - CSS Variables**

**Dlaczego:**
1. ✅ Centralna kontrola
2. ✅ Łatwe do utrzymania
3. ✅ Projekt już używa CSS variables

**Implementacja:**
```css
/* globals.css */
:root {
  --header-height: 4.5rem;
  --footer-height: 2.5rem;
  --section-full-height: calc(100vh - var(--header-height) - var(--footer-height));
  --section-full-height-safe: calc(100dvh - var(--header-height) - var(--footer-height));
}
```

---

## 📝 Szczegóły implementacji (Rekomendacja 1)

### Krok 1: Rozszerz tailwind.config.js
```js
height: {
  header: '4.5rem',
  footer: '2.5rem', // Dodaj
  'section-viewport': 'calc(100vh - 4.5rem - 2.5rem)',
  'section-safe': 'calc(100dvh - 4.5rem - 2.5rem)',
}
```

### Krok 2: Dodaj prop do Section.js
```jsx
<Section fullHeight>...</Section> // min-h-section-viewport
```

### Krok 3: Zaktualizuj LandingHero
```jsx
<section className="min-h-section-viewport md:min-h-section-safe">
```

### Krok 4: Zaktualizuj wszystkie sekcje na landing page

---

## ⚡ Performance considerations

**CSS calc() vs JavaScript:**
- CSS calc() = **0ms** runtime overhead
- JavaScript hooks = **~5-10ms** przy każdym resize + hydration delay

**Layout Shift (CLS):**
- CSS calc() = **Zero shift** (działa od razu)
- JavaScript = **Potencjalny shift** (hydrates później)

**Mobile (Safe Area):**
- `100vh` może nie uwzględniać safe areas (notch, home bar)
- `100dvh` (dynamic viewport height) = **Lepsze** dla mobile

---

## 📊 Porównanie

| Kryterium | Opcja 1 (calc) | Opcja 2 (CSS vars) | Opcja 3 (Hook) | Opcja 5 (Tailwind) |
|-----------|---------------|-------------------|----------------|-------------------|
| **Prostota** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Utrzymanie** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| **SSR-safe** | ✅ | ✅ | ❌ | ✅ |
| **Mobile safe** | ⚠️ | ⚠️ | ✅ | ✅ (100dvh) |
| **Dopasowanie** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## ✅ Finalna rekomendacja

**Opcja 5 (Tailwind utility class)** + **CSS Variables jako fallback**

**Powody:**
1. Najbardziej spójne z architekturą projektu
2. Zero overhead performance
3. Safe area support dla mobile
4. Łatwe w użyciu (`min-h-section-viewport`)
5. Można łatwo dodać jako prop do Section.js
