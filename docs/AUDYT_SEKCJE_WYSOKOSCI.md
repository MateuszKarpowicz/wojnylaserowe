# Audyt: Dlaczego sekcje nie mają jednakowej wysokości

## 🔍 Analiza problemu

### Aktualna struktura landing page:

1. **LandingHero** (2 części):
   - `<Section>` - nagłówek (✅ używa Section)
   - `<section>` - obraz hero (❌ NIE używa Section, ma własny `h-[70vh] md:h-[80vh]`)

2. **Section z "Jak to działa"** - ✅ używa `<Section>`

3. **QualificationsSection** - ✅ używa `<Section>` wewnątrz

4. **InstagramSection** - ✅ używa `<Section>` wewnątrz

5. **Section z "Efekty"** - ✅ używa `<Section>`

6. **TestimonialsCarousel** - ✅ używa `<Section>` wewnątrz

7. **MapSection** - ✅ używa `<Section>` wewnątrz

8. **Section z FAQ** - ✅ używa `<Section>`

---

## 🐛 Zidentyfikowane problemy

### Problem 1: LandingHero używa własnego `<section>`
```jsx
// LandingHero.js
<section className='bg-surface py-0 overflow-x-hidden'>
  <Image className='w-full h-[70vh] md:h-[80vh] ...' />
</section>
```
- To nie używa komponentu `Section`, więc nie dostaje `min-h-section-default`
- Ma `h-[70vh]` zamiast `min-h-[70vh]`

### Problem 2: `min-h` vs `h` vs treść
- `min-h-section-default` = `min-h-[70vh]` - to tylko MINIMALNA wysokość
- Jeśli treść jest większa (np. padding + content), sekcja będzie wyższa
- `section-pad` dodaje `py-10 md:py-14` = ~80px/112px padding

### Problem 3: Container wewnątrz Section
```jsx
<section className="min-h-section-default ...">
  <Container> {/* Ten kontener może mieć własne style */}
    {children}
  </Container>
</section>
```
- `Container` ma padding `px-4` ale nie ma wpływu na wysokość
- Problem może być z tym, że sekcja się rozciąga przez treść

### Problem 4: Możliwe nadpisywanie w className
- Jeśli ktoś przekazuje `className` z własnymi stylami, może nadpisać wysokość

---

## 💡 Proponowane rozwiązania

### **Rozwiązanie 1: Wrapper SectionHeight dla każdej sekcji**

**Podejście:**
Stwórz nowy komponent wrapper który wymusza wysokość.

**Plusy:**
- ✅ Centralne zarządzanie wysokością
- ✅ Łatwe do zmiany w jednym miejscu
- ✅ Można używać zarówno z Section jak i bez

**Minusy:**
- ⚠️ Dodatkowy poziom zagnieżdżenia
- ⚠️ Trzeba owinąć każdą sekcję

**Implementacja:**
```jsx
// components/primitives/SectionHeight.js
export default function SectionHeight({ children, className = '' }) {
  return (
    <div className={cn('min-h-section-default md:min-h-section-default-md', className)}>
      {children}
    </div>
  );
}

// Użycie:
<SectionHeight>
  <Section>...</Section>
</SectionHeight>
```

---

### **Rozwiązanie 2: Napraw LandingHero + użyj `height` zamiast `min-height`**

**Podejście:**
- Zmień `min-h-section-default` na `h-section-default` w Section.js
- Napraw LandingHero aby używał Section lub dodaj wysokość do własnego section
- Użyj `h-[70vh] md:h-[80vh]` zamiast `min-h`

**Plusy:**
- ✅ Wymusza dokładną wysokość (nie minimalną)
- ✅ Łatwe - tylko zmiana klasy w Section.js
- ✅ LandingHero już ma własną wysokość

**Minusy:**
- ⚠️ Jeśli treść jest większa niż 70vh/80vh, może się obciąć lub overflow
- ⚠️ Może być problem z scrollowaniem wewnątrz sekcji

**Implementacja:**
```jsx
// Section.js - zmień min-h na h
const defaultHeightClass = 'h-section-default md:h-section-default-md';

// LandingHero.js - dodaj wysokość do własnego section
<section className='bg-surface py-0 overflow-x-hidden h-section-default md:h-section-default-md'>
```

---

### **Rozwiązanie 3: Flexbox container z wysokością**

**Podejście:**
Użyj flexbox aby wymusić wysokość i wyśrodkować zawartość.

**Plusy:**
- ✅ Elastyczne - zawartość może być wyśrodkowana
- ✅ Działa dobrze z różną ilością treści
- ✅ Można użyć `items-center` do wyśrodkowania

**Minusy:**
- ⚠️ Może zmienić layout jeśli sekcja używa grid
- ⚠️ Trzeba uważać z overflow

**Implementacja:**
```jsx
// Section.js
const defaultHeightClass = 'h-section-default md:h-section-default-md flex flex-col';

// W Container lub wewnątrz:
<div className="flex-1 flex items-center justify-center">
  {children}
</div>
```

---

### **Rozwiązanie 4: Wrapper na poziomie main/layout**

**Podejście:**
Każda sekcja w `app/page.js` jest owinięta w wrapper który wymusza wysokość.

**Plusy:**
- ✅ Jeden poziom wrappera na stronie
- ✅ Łatwe do kontroli na poziomie strony
- ✅ Nie wymaga zmian w komponentach

**Minusy:**
- ⚠️ Trzeba pamiętać o owijaniu każdej sekcji
- ⚠️ Może być redundantne z Section

**Implementacja:**
```jsx
// app/page.js
import { SectionHeightWrapper } from '@/components/primitives';

<SectionHeightWrapper>
  <LandingHero />
</SectionHeightWrapper>

<SectionHeightWrapper>
  <Section bg='surface' title='Jak to działa?'>
    ...
  </Section>
</SectionHeightWrapper>
```

---

### **Rozwiązanie 5: CSS Grid na poziomie page.js**

**Podejście:**
Użyj CSS Grid aby wszystkie sekcje miały jednakową wysokość wiersza.

**Plusy:**
- ✅ Automatyczne wyrównanie wysokości
- ✅ Nowoczesne podejście
- ✅ Działa dla wszystkich sekcji jednocześnie

**Minusy:**
- ⚠️ Wymaga refaktoryzacji struktury
- ⚠️ Grid może konfliktować z obecnym layoutem
- ⚠️ Trudniejsze do utrzymania

**Implementacja:**
```jsx
// app/page.js
<div className="grid grid-cols-1 auto-rows-[70vh] md:auto-rows-[80vh]">
  <div> {/* wrapper dla każdej sekcji */}
    <LandingHero />
  </div>
  <div>
    <Section>...</Section>
  </div>
  ...
</div>
```

---

### **Rozwiązanie 6: CSS Variables + calc() dla całej strony**

**Podejście:**
Użyj CSS variables do zarządzania wysokością na poziomie globalnym.

**Plusy:**
- ✅ Centralna kontrola
- ✅ Łatwe do zmiany (jeden plik CSS)
- ✅ Można używać w wielu miejscach

**Minusy:**
- ⚠️ Trzeba dodać klasę do każdej sekcji
- ⚠️ Może być nadpisywane przez inne style

**Implementacja:**
```css
/* globals.css */
.section-standard-height {
  min-height: var(--section-height-mobile);
}
@media (min-width: 768px) {
  .section-standard-height {
    min-height: var(--section-height-desktop);
  }
}
```

---

## 🎯 Rekomendacja

**Najlepsze podejście: Rozwiązanie 2 + Rozwiązanie 1 (hybryda)**

1. **Napraw LandingHero** - dodaj wysokość do własnego `<section>` lub użyj Section
2. **Zmień `min-h` na `h`** w Section.js (wymusza dokładną wysokość)
3. **Opcjonalnie: Dodaj wrapper** dla sekcji które nie używają Section (jak LandingHero)

**Dlaczego:**
- ✅ Najmniej zmian w kodzie
- ✅ Naprawia LandingHero który jest głównym problemem
- ✅ Wymusza dokładną wysokość (nie minimalną)
- ✅ Spójne z obecną architekturą

---

## 📝 Plan implementacji (Rekomendacja)

### Krok 1: Napraw LandingHero
```jsx
// LandingHero.js
<section className='bg-surface py-0 overflow-x-hidden h-section-default md:h-section-default-md relative'>
```

### Krok 2: Zmień Section.js
```jsx
// Section.js - zmień min-h na h
const defaultHeightClass = 'h-section-default md:h-section-default-md';
```

### Krok 3: Sprawdź czy treść nie jest większa niż 70vh/80vh
- Jeśli tak, może trzeba użyć `overflow-auto` lub `overflow-hidden`
- Albo zmniejszyć padding

### Krok 4: Test
- Sprawdź wszystkie sekcje na landing page
- Sprawdź czy nie ma overflow issues
- Sprawdź na mobile i desktop
