# 📐 Wizualne wyjaśnienie: Jak działają sekcje i wrappery

## 🏗️ Struktura layoutu (wizualnie)

```
┌─────────────────────────────────────┐
│         VIEWPORT (100vh)            │
│                                     │
├─────────────────────────────────────┤ ← top: 0
│  HEADER (fixed)                     │ ← fixed, zawsze na górze
│  h-header = 4.5rem (72px)          │
│  bg-header-footer (półprzezroczysty)│
└─────────────────────────────────────┘
│                                     │ ← PRZERWA - Header nie zajmuje miejsca w flow
│                                     │
├─────────────────────────────────────┤ ← top: 4.5rem (pt-header)
│  MAIN (pt-header pb-16)             │
│  min-h-[100dvh]                     │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ SEKCJA 1 (Hero)              │   │
│  │ min-h-section-default        │   │ ← 70vh (mobile) / 80vh (desktop)
│  │                              │   │   ALE może być wyższa jeśli treść większa
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ SEKCJA 2                     │   │
│  │ min-h-section-default        │   │
│  │ section-pad (py-10 md:py-14) │   │ ← padding góra/dół = ~80px/112px
│  │ + Container (max-width)      │   │
│  │ + treść                       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ SEKCJA 3                     │   │
│  │ ...                          │   │
│  └─────────────────────────────┘   │
│                                     │
│  ... (więcej sekcji)                │
│                                     │
└─────────────────────────────────────┘ ← bottom: 4rem (pb-16)
│                                     │ ← PRZERWA - Footer nie zajmuje miejsca w flow
├─────────────────────────────────────┤ ← bottom: 0
│  FOOTER (fixed)                     │ ← fixed, zawsze na dole
│  ~2.5rem wysokości                  │
│  bg-header-footer (półprzezroczysty)│
└─────────────────────────────────────┘
```

---

## 🔍 Szczegółowe wyjaśnienie

### **1. HEADER (fixed top)**

```jsx
<header className="fixed top-0 left-0 right-0 z-header h-header">
```

- **Pozycja:** `fixed` = wyjęty z normalnego flow, "unosi się" nad treścią
- **Wysokość:** `h-header` = `4.5rem` = `72px`
- **Problem:** Header NIE zajmuje miejsca w normalnym flow dokumentu!
  - Bez kompensacji → treść chowa się pod headerem
  - Rozwiązanie: `main` ma `pt-header` = padding-top 4.5rem

**Efekt wizualny:**

```
┌─────────────────┐
│   HEADER        │ ← widoczny, unosi się
│   (fixed)       │
└─────────────────┘
    │← gap
┌─────────────────┐
│   MAIN          │ ← zaczyna się POD headerem dzięki pt-header
│   pt-header      │
```

---

### **2. FOOTER (fixed bottom)**

```jsx
<footer className="fixed bottom-0 left-0 right-0 z-header">
```

- **Pozycja:** `fixed` = wyjęty z normalnego flow
- **Wysokość:** ~2.5rem (py-0.5 + ikony)
- **Problem:** Footer też NIE zajmuje miejsca!
  - Rozwiązanie: `main` ma `pb-16` = padding-bottom 4rem (bezpieczny margines)

**Efekt wizualny:**

```
┌─────────────────┐
│   MAIN          │
│   pb-16         │ ← kończy się przed footerem
└─────────────────┘
    │← gap (pb-16 = 4rem)
┌─────────────────┐
│   FOOTER        │ ← widoczny, unosi się
│   (fixed)       │
└─────────────────┘
```

---

### **3. MAIN (kontener treści)**

```jsx
<main className='min-h-[100dvh] pt-header pb-16'>
  {children} {/* sekcje landing page */}
</main>
```

**Co się dzieje:**

- `pt-header` = `padding-top: 4.5rem` - kompensuje fixed header
- `pb-16` = `padding-bottom: 4rem` - kompensuje fixed footer + bezpieczny margines
- `min-h-[100dvh]` = minimalna wysokość całego viewport (ale może być wyższa)

**Przestrzeń dostępna dla sekcji:**

```
Całkowita wysokość viewport: 100vh
- Header: 4.5rem
- Footer: ~2.5rem
- Marginesy: ~1.5rem
────────────────────
Dostępne dla treści: ~calc(100vh - 8.5rem)
```

---

### **4. SEKCJE (Section component)**

```jsx
<section className='min-h-section-default md:min-h-section-default-md section-pad bg-surface'>
  <Container>
    <SectionHeader /> {/* jeśli title */}
    {children}
  </Container>
</section>
```

**Jak to działa:**

#### **min-h-section-default:**

- `70vh` na mobile (70% wysokości viewport)
- `80vh` na desktop (80% wysokości viewport)
- **WAŻNE:** To jest MINIMALNA wysokość!
  - Jeśli treść jest większa → sekcja będzie wyższa
  - Jeśli treść jest mniejsza → sekcja będzie miała 70vh/80vh

#### **section-pad:**

- `py-10` na mobile = `2.5rem` top + `2.5rem` bottom = `5rem` (80px)
- `py-14` na desktop = `3.5rem` top + `3.5rem` bottom = `7rem` (112px)

#### **Container:**

- Ogranicza szerokość treści (max-width)
- Dodaje padding poziomy `px-4`

**Przykład sekcji z treścią:**

```
┌─────────────────────────────────┐
│ section (min-h-section-default) │ ← min 70vh/80vh
│                                 │
│ ┌─────────────────────────┐  │
│ │ Container (max-width)     │  │
│ │ px-4                      │  │
│ │                           │  │
│ │ [SectionHeader]           │  │ ← jeśli title
│ │                           │  │
│ │ {treść - może być długa}  │  │
│ │                           │  │
│ └─────────────────────────┘  │
│                                 │
│ section-pad (py-10 md:py-14)    │ ← padding góra/dół
└─────────────────────────────────┘
```

---

## 🎯 Problem: Dlaczego sekcje mają różne wysokości?

### **Przyczyna 1: min-h vs h**

- `min-h-section-default` = **MINIMALNA** wysokość
- Jeśli treść jest większa → sekcja rośnie
- Jeśli treść jest mniejsza → sekcja ma minimum

**Przykład:**

```
Sekcja A: [mało treści]
┌─────┐
│ ... │ ← min 70vh
└─────┘

Sekcja B: [dużo treści]
┌─────────────────────┐
│                     │
│     dużo treści     │ ← >70vh (rośnie!)
│                     │
│                     │
└─────────────────────┘
```

### **Przyczyna 2: Różna ilość treści**

- Sekcja z 3 kartami vs sekcja z 1 obrazkiem
- SectionHeader vs brak header
- Różne paddingi

---

## 💡 Propozycje rozwiązania

### **Opcja 1: Wrapper z flexbox (jednakowa wysokość)**

```jsx
// app/page.js
<div className='flex flex-col'>
  <SectionWrapper>
    <LandingHero />
  </SectionWrapper>
  <SectionWrapper>
    <Section>...</Section>
  </SectionWrapper>
  ...
</div>;

// SectionWrapper.js
export default function SectionWrapper({ children }) {
  return (
    <div className='min-h-section-default md:min-h-section-default-md flex flex-col'>
      <div className='flex-1 flex items-center'>
        {' '}
        {/* wyśrodkowanie */}
        {children}
      </div>
    </div>
  );
}
```

### **Opcja 2: Grid layout (automatyczne wyrównanie)**

```jsx
// app/page.js
<div className='grid grid-cols-1 auto-rows-[70vh] md:auto-rows-[80vh]'>
  <div>
    <LandingHero />
  </div>
  <div>
    <Section>...</Section>
  </div>
  ...
</div>
```

### **Opcja 3: Wrapper tylko dla landing page**

```jsx
// components/primitives/LandingPageWrapper.js
export default function LandingPageWrapper({ children }) {
  return (
    <div className='landing-sections'>
      {React.Children.map(children, child => (
        <div className='landing-section min-h-section-default md:min-h-section-default-md'>
          {child}
        </div>
      ))}
    </div>
  );
}
```

---

## 📊 Wizualne porównanie

### **OBECNE (bez wrappera):**

```
┌─────────────────┐
│ Sekcja 1        │ ← 70vh (min)
└─────────────────┘
┌─────────────────┐
│ Sekcja 2        │ ← 85vh (treść duża)
│     ...         │
└─────────────────┘
┌─────────────────┐
│ Sekcja 3        │ ← 70vh (min)
└─────────────────┘
```

### **Z Wrapperem (jednakowa wysokość):**

```
┌─────────────────┐
│ Sekcja 1       │ ← 70vh (sztywna)
└─────────────────┘
┌─────────────────┐
│ Sekcja 2       │ ← 70vh (sztywna)
│     ...        │ ← może overflow
└─────────────────┘
┌─────────────────┐
│ Sekcja 3       │ ← 70vh (sztywna)
└─────────────────┘
```

---

## 🎨 Zalecane podejście

**Hybryda:**

1. Zostaw `min-h-section-default` (elastyczność)
2. Dodaj wrapper tylko dla landing page
3. Użyj flexbox do wyśrodkowania treści w sekcjach
4. Jeśli treść za długa → overflow-auto lub scroll

**Plusy:**

- ✅ Sekcje mają sensowną minimalną wysokość
- ✅ Elastyczne dla różnych ilości treści
- ✅ Ładnie wygląda
- ✅ Nie psuje innych stron
