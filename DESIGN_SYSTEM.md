# 🎨 Design System - Wojny Laserowe

**Ostatnia aktualizacja:** 2025-01-29

Ten dokument zawiera kompletny spis komponentów, design tokens i best practices dla projektu Wojny
Laserowe.

---

## 📋 **SPIS TREŚCI**

1. [Design Tokens](#design-tokens)
2. [Komponenty Primitives](#komponenty-primitives)
3. [Komponenty UI](#komponenty-ui)
4. [Komponenty Features](#komponenty-features)
5. [Best Practices](#best-practices)

---

## 🎨 **DESIGN TOKENS**

### **Kolory**

#### Neon (Brand)

- `neon-blue`: `#0099CC` - główny kolor marki
- `neon-purple`: `#C084FC` - kolor wiodący dla ciemnych sekcji

#### Tła

- `bg-dark`: `#0D0D0D` - ciemne tło sekcji
- `bg-light`: `#F9F9F9` - jasne tło główne
- `bg-surface`: `#FFFFFF` - powierzchnia kart i elementów
- `bg-surface-light`: `#F5F5F5` - lekkie tło
- `modal`: `rgba(0, 0, 0, 0.9)` - tło modali i ciemnych kart

#### Tekst

- `text-dark`: `#0A0A0A` - ciemny tekst (na jasnym tle)
- `text-light`: `#FAFAFA` - jasny tekst (na ciemnym tle)
- `text-secondary`: `#555555` - tekst drugorzędny
- `text-muted`: `#707070` - tekst przygaszony

#### Status

- `error`: `#E74C3C` - kolor błędu
- `success`: `#27AE60` - kolor sukcesu

### **Shadows**

Używaj shadow utilities z Tailwind:

```javascript
// Box shadows
shadow - glow; // Podstawowy neon blue glow
shadow - glow - purple; // Podstawowy neon purple glow
shadow - glow - blue - weak; // Słaby blue glow
shadow - glow - blue - medium; // Średni blue glow
shadow - glow - blue - strong; // Silny blue glow
shadow - glow - blue - very - strong; // Bardzo silny blue glow
shadow - glow - blue - expanded; // Rozszerzony blue glow (dla kart)
shadow - glow - purple - expanded; // Rozszerzony purple glow (dla kart)
shadow - card - blue; // Shadow dla niebieskich kart
shadow - card - blue - hover; // Shadow dla niebieskich kart (hover)
shadow - card - purple; // Shadow dla fioletowych kart
shadow - card - purple - hover; // Shadow dla fioletowych kart (hover)

// Drop shadows (dla tekstu i ikon)
drop - shadow - glow - blue - weak;
drop - shadow - glow - blue - medium;
drop - shadow - glow - blue - strong;
drop - shadow - glow - purple - weak;
drop - shadow - glow - purple - strong;
```

### **Z-index Layers**

```javascript
z-header: 90    // Header na górze
z-modal: 70     // Modale
z-overlay: 60   // Overlay tło
z-popover: 80   // Popover elementy
z-tooltip: 90   // Tooltips
z-button: 100   // Przyciski zawsze na wierzchu
```

### **Animations**

```css
--dur-fast: 300ms
--dur-slow: 700ms
--dur-decay: 3000ms
--ease-brand: cubic-bezier(0.22, 1, 0.36, 1)
```

---

## 🧩 **KOMponenty PRIMITIVES**

Komponenty niskopoziomowe, maksymalnie reużywalne. Fundament systemu.

### **Button**

Uniwersalny komponent przycisku z wieloma wariantami.

```javascript
import { Button } from '@/components/primitives';

// Podstawowe użycie
<Button variant="neonBlue">Kliknij</Button>
<Button variant="neonPurple">Wyślij</Button>

// Jako link
<Button as="a" href="/kontakt" variant="section">
  Skontaktuj się
</Button>

// CTA buttons
<Button variant="ctaBlue" fullWidth>Zapisz się</Button>
<Button variant="ctaPurple" fullWidth>Dowiedz się więcej</Button>

// Rozmiary
<Button size="sm">Mały</Button>
<Button size="md">Średni</Button>
<Button size="lg">Duży</Button>
```

**Warianty:**

- `neonBlue` - podstawowy niebieski (domyślny)
- `neonPurple` - podstawowy fioletowy
- `section` - dla sekcji (px-8, py-3, font-normal)
- `ctaBlue` - CTA niebieski (pełna szerokość, max-w-md)
- `ctaPurple` - CTA fioletowy (pełna szerokość, max-w-md)
- `offer` - dla oferty (okrągłe lewe rogi, px-8)
- `link` - jako link (przezroczysty, tylko hover)

**Rozmiary:**

- `sm` - px-3 py-1 text-sm
- `md` - px-4 py-2 text-base (domyślny)
- `lg` - px-6 py-3 text-base

---

### **Utility Button Classes**

Dla specyficznych przypadków użycia (np. przyciski w galerii, modale), można używać utility button
classes zamiast komponentu Button:

```javascript
// Utility classes dla specyficznych przycisków
<button className='btn-close' aria-label='Zamknij'>
  <Icon />
</button>

<button className='btn-nav-arrow' aria-label='Nawigacja'>
  <Icon />
</button>
```

**Kiedy używać utility classes zamiast Button:**

- ✅ **OK:** Specyficzne przyciski UI (zamknij, nawigacja w galerii, modale)
- ✅ **OK:** Przyciski z tylko ikoną (bez tekstu)
- ❌ **NIE:** Przyciski z tekstem lub akcjami głównymi (użyj `<Button>`)

**Dostępne utility classes:**

- `.btn-close` - przycisk zamknięcia (absolute top-4 right-4, okrągły)
- `.btn-nav-arrow` - przycisk nawigacji (absolute top-1/2, okrągły)

**Uwaga:** Te klasy są zdefiniowane w `globals.css` jako utility classes dla specyficznych
przypadków użycia w galerii i modalach.

---

### **Card**

Komponent karty z automatycznymi stylami neonowymi.

```javascript
import { Card } from '@/components/primitives';

// Podstawowe użycie
<Card variant="blue">
  <h3>Tytuł</h3>
  <p>Treść karty...</p>
</Card>

<Card variant="purple">
  <h3>Tytuł</h3>
  <p>Treść karty...</p>
</Card>

// Jako inny element
<Card variant="blue" as="article">
  <h3>Artykuł</h3>
</Card>
```

**Warianty:**

- `blue` - ciemna karta z niebieską ramką (dla jasnego tła) - domyślny
- `purple` - biała karta z fioletową ramką (dla ciemnego tła)

**Reguła wyboru wariantu:**

- **Jasne tło sekcji** → użyj `variant="blue"` (ciemna karta + niebieski neon)
- **Ciemne tło sekcji** → użyj `variant="purple"` (biała karta + fioletowy neon)

**Hover effects:**

- Automatyczny lift (`-translate-y-1`)
- Zwiększona intensywność shadow i border
- Smooth transitions

---

### **Section**

Komponent sekcji z automatycznym paddingiem i kontenerem.

```javascript
import { Section } from '@/components/primitives';

// Podstawowe użycie z tytułem
<Section bg="surface" title="Tytuł sekcji">
  <p>Treść sekcji...</p>
</Section>

// Z podtytułem
<Section
  bg="dark"
  title="Tytuł"
  subtitle="Podtytuł sekcji"
>
  <p>Treść...</p>
</Section>

// Bez tytułu (tylko zawartość)
<Section bg="surface">
  <CustomContent />
</Section>

// Custom padding
<Section bg="surface" py={0} px={0}>
  <FullWidthImage />
</Section>

<Section bg="surface" py={10}>
  <CustomSpacedContent />
</Section>
```

**Props:**

- `bg`: `'surface'|'dark'` - kolor tła sekcji (domyślnie: `'surface'`)
- `title`: `string` - tytuł sekcji (opcjonalny)
- `subtitle`: `string` - podtytuł sekcji (opcjonalny)
- `align`: `'center'|'left'|'right'` - wyrównanie nagłówka (domyślnie: `'center'`)
- `py`: `number|string|undefined` - padding vertical (undefined = default `.section-pad`, 0 =
  `py-0`, liczba = `py-[wartość]`, string = custom class)
- `px`: `number|string|undefined` - padding horizontal (undefined = default Container px, 0 =
  `px-0`, liczba = `px-[wartość]`, string = custom class)
- `id`: `string` - ID sekcji dla anchorów
- `className`: `string` - dodatkowe klasy CSS

**Padding values:**

- `py` (undefined/pominięte) - używa `.section-pad` (py-10 md:py-14) - **domyślne**
- `py={0}` - bez padding vertical
- `py={10}` - py-10
- `py="py-20"` - custom string (Tailwind class)

**Przykłady:**

```javascript
// Default padding (section-pad)
<Section bg="surface" title="Tytuł">
  <Content />
</Section>

// Bez padding vertical
<Section bg="surface" py={0}>
  <FullWidthImage />
</Section>

// Custom padding
<Section bg="surface" py={10} px={0}>
  <CustomContent />
</Section>
```

---

### **Container**

Kontener z ograniczoną szerokością.

```javascript
import { Container } from '@/components/primitives';

<Container maxWidth='lg'>
  <p>Treść ograniczona do max-w-lg</p>
</Container>;
```

**maxWidth values:**

- `md` - max-w-md
- `lg` - max-w-lg (domyślny)
- `xl` - max-w-xl
- `2xl` - max-w-2xl
- `full` - w-full (bez ograniczeń)

---

### **SectionHeader**

Nagłówek sekcji z wariantami.

```javascript
import { SectionHeader } from '@/components/primitives';

<SectionHeader title='Tytuł sekcji' subtitle='Podtytuł' variant='dark' align='center' />;
```

**Warianty:**

- `light` - jasny tekst (dla ciemnego tła)
- `dark` - ciemny tekst (dla jasnego tła) - domyślny

**Reguła wyboru:**

- Ciemne tło sekcji → `variant="light"`
- Jasne tło sekcji → `variant="dark"`

---

### **ImageFrame**

Wrapper dla obrazów z aspect ratios.

```javascript
import { ImageFrame } from '@/components/primitives';
import Image from 'next/image';

<ImageFrame variant='blue' aspect='square' sizeClass='max-w-md mx-auto'>
  <Image src='/image.jpg' fill alt='Opis' />
</ImageFrame>;
```

**Varianty:**

- `blue` - niebieska ramka
- `purple` - fioletowa ramka

**Aspect ratios:**

- `square` - aspect-square
- `video` - aspect-video
- `wide` - aspect-[21/9]

---

## 🎯 **KOMponenty UI**

Komponenty średniego poziomu, reużywalne między różnymi features.

### **ProcessSection**

Komponent procesu z wariantami i opcjonalną sekcją aftercare.

```javascript
import { ProcessSection } from '@/components/ui';

// Default variant (z aftercare)
<Section bg="dark" title="Proces zabiegu">
  <ProcessSection
    variant="default"
    data={{
      steps: [
        { title: "Krok 1", text: "Opis..." },
        { title: "Krok 2", text: "Opis..." },
      ],
      aftercare: {
        intro: "Po zabiegu...",
        subtitle: "Ważne zasady",
        points: [
          { icon: "🔥", text: "Punkt 1" },
        ]
      }
    }}
  />
</Section>

// Landing variant (bez aftercare, z animacjami)
<Section bg="surface" title="Jak to działa?">
  <ProcessSection
    variant="landing"
    data={{ steps: processData.steps }}
  />
</Section>
```

**Varianty:**

- `default` - dla stron szczegółowych, z sekcją aftercare, białe karty (`purple` variant)
- `landing` - dla strony głównej, tylko 3 kroki, z animacjami, ciemne karty (`blue` variant)

---

### **CardWithIcon**

Karta z ikoną, tytułem i opisem.

```javascript
import { CardWithIcon } from '@/components/ui';

// Podstawowe użycie
<CardWithIcon
  icon="FaCertificate"
  title="Tytuł karty"
  text="Opis karty"
  borderColor="blue"
/>

// Z custom content
<CardWithIcon borderColor="purple">
  <CustomContent />
</CardWithIcon>
```

**Props:**

- `icon`: `string|React.Component` - nazwa ikony z react-icons lub komponent
- `title`: `string` - tytuł karty (opcjonalny)
- `text`: `string` - tekst/opis (używany gdy brak description)
- `description`: `string` - alternatywny opis (ma priorytet nad text)
- `borderColor`: `'blue'|'purple'` - kolor ramki (domyślnie: `'blue'`)

**Reguła wyboru borderColor:**

- `blue` - dla jasnego tła sekcji (ciemna karta)
- `purple` - dla ciemnego tła sekcji (biała karta)

---

### **CTASection**

Sekcja wezwania do działania.

```javascript
import { CTASection } from '@/components/ui';

<CTASection
  title='Zapisz się na konsultację'
  text='Umów bezpłatne spotkanie'
  href='/kontakt'
  button='Skontaktuj się'
  variant='blue'
  bgColor='surface'
/>;
```

**Varianty:**

- `blue` - niebieski przycisk (domyślny)
- `purple` - fioletowy przycisk

---

### **WhyChooseSection**

Sekcja "Dlaczego warto" z punktami.

```javascript
import { WhyChooseSection } from '@/components/ui';

<WhyChooseSection
  points={[{ text: 'Punkt 1' }, { text: 'Punkt 2' }]}
  variant='default'
  borderColor='blue'
/>;
```

**Varianty:**

- `default` - standardowy wariant
- `scarink` - wariant dla strony ScarINK

---

### **ProcessSection**

Zobacz [sekcję wyżej](#processsection).

---

### **TestimonialsCarousel**

Karuzele opinii klientów.

```javascript
import { TestimonialsCarousel } from '@/components/ui';

<TestimonialsCarousel
  title='Opinie klientów'
  items={[{ name: 'Jan K.', text: 'Świetna obsługa...' }]}
  intervalMs={6000}
/>;
```

---

### **StatusMessage**

Komunikat statusowy (success/error).

```javascript
import { StatusMessage } from '@/components/ui';

<StatusMessage type="success">
  Wiadomość została wysłana!
</StatusMessage>

<StatusMessage type="error">
  Wystąpił błąd.
</StatusMessage>
```

---

## 📦 **KOMponenty FEATURES**

Komponenty specyficzne dla konkretnych funkcjonalności.

### **Hero Components**

```javascript
// Removal Hero
import { RemovalHero } from '@/components/features/removal';

<RemovalHero hero={heroData} />;

// Scarink Hero
import { ScarinkHero } from '@/components/features/scarink';

<ScarinkHero hero={heroData} />;
```

### **Contact Form**

```javascript
import { ContactForm } from '@/components/features/contact';

<ContactForm />;
```

### **FAQ Components**

```javascript
import { FAQAccordion, FAQCategorySection } from '@/components/features/faq';

<FAQAccordion item={faqItem} index={0} />
<FAQCategorySection category={categoryData} />
```

---

## ✅ **BEST PRACTICES**

### **1. Wybór wariantów kart**

```javascript
// ✅ DOBRE - automatyczny wybór na podstawie tła sekcji
<Section bg="surface">  {/* Jasne tło */}
  <Card variant="blue">  {/* Ciemna karta + niebieski neon */}
    ...
  </Card>
</Section>

<Section bg="dark">  {/* Ciemne tło */}
  <Card variant="purple">  {/* Biała karta + fioletowy neon */}
    ...
  </Card>
</Section>
```

### **2. Używanie helper functions dla kolorów**

```javascript
// ✅ DOBRE
import { getCardTextClasses } from '@/lib/style-utils';

const { textClass, descriptionClass, iconClass } = getCardTextClasses('blue');

// ❌ ZŁE
const textClass = cardVariant === 'blue' ? 'text-text-light' : 'text-text-dark';
```

### **3. Komponenty zamiast klas CSS**

```javascript
// ✅ DOBRE
<Card variant="blue">...</Card>
<Button variant="neonBlue">...</Button>

// ❌ ZŁE
<div className="card-with-border-blue">...</div>
<button className="btn-neon-blue">...</button>
```

### **4. Spójne użycie Section**

```javascript
// ✅ DOBRE - używaj title prop
<Section bg='dark' title='Tytuł sekcji'>
  <Content />
</Section>

// ❌ ZŁE - nie używaj BaseSectionWithHeader (deprecated)
```

### **5. Index exports**

```javascript
// ✅ DOBRE
import { Button, Card, Section } from '@/components/primitives';
import { ProcessSection, CTASection } from '@/components/ui';

// ❌ ZŁE
import Button from '@/components/primitives/Button';
```

---

## 📚 **DODATKOWE ZASOBY**

- **STYLE_GUIDE.md** - szczegółowe konwencje kodowania
- **AUDYT_PROJEKTU.md** - pełny audyt projektu
- **.eslintrc.rules-explanation.md** - wyjaśnienie reguł ESLint

---

**Ostatnia aktualizacja:** 2025-01-29
