# ROZPISKA WSZYSTKICH SEKCJI STRONY "O NAS" - CSS I MODYFIKACJE

## 📋 SPIS TREŚCI

1. [SEKCJA HERO](#1-sekcja-hero)
2. [SEKCJA KWALIFIKACJI](#2-sekcja-kwalifikacji)
3. [SEKCJA PODEJŚCIA](#3-sekcja-podejścia)
4. [SEKCJA MIEJSCA](#4-sekcja-miejsca)
5. [SEKCJA CTA](#5-sekcja-cta)
6. [GLOBALNE KLASY CSS](#globalne-klasy-css)

---

## 1. SEKCJA HERO

**Plik:** `components/ui/AboutHero.js` **Lokalizacja w page:** `app/o-nas/page.js` - linia 14

### Struktura HTML:

```jsx
<section className='section-wrap bg-surface pt-0 pb-10 md:pb-14'>
  <h1>...</h1>
  <div className='md:grid md:grid-cols-2 gap-8 items-center'>
    {/* Zdjęcie */}
    <div>...</div>
    {/* Tekst */}
    <div>...</div>
  </div>
</section>
```

### CSS Breakdown:

#### Kontener sekcji:

- **`.section-wrap`** (globals.css linia 30-32)

  - `container mx-auto px-4` - kontener z automatycznymi marginesami i paddingiem 1rem (16px)
  - **Modyfikacja:** Zmień `px-4` na `px-6` lub `px-8` dla większego paddingu bocznego

- **`bg-surface`** (tailwind.config.js linia 23)

  - `#FFFFFF` - białe tło
  - **Modyfikacja:** Zmień w `tailwind.config.js` wartość `bg-surface`

- **`pt-0`** - brak paddingu górnego

  - **Modyfikacja:** Dodaj `pt-4`, `pt-6`, `pt-8` dla większego odstępu od góry

- **`pb-10 md:pb-14`** - padding dolny
  - Mobile: `2.5rem` (40px)
  - Desktop: `3.5rem` (56px)
  - **Modyfikacja:** Zmień wartości np. `pb-8 md:pb-12`

#### Nagłówek H1:

- **`text-4xl md:text-5xl`**

  - Mobile: `2.25rem` (36px)
  - Desktop: `3rem` (48px)
  - **Modyfikacja:** Zmień np. `text-3xl md:text-4xl` dla mniejszego

- **`font-display`** (tailwind.config.js linia 43)

  - Font: `Orbitron` → `Poppins` → system
  - **Modyfikacja:** Zmień w config na `font-sans` dla Poppins

- **`font-bold`** - grubość 700

  - **Modyfikacja:** `font-semibold` (600), `font-normal` (400)

- **`text-text-dark`** (tailwind.config.js linia 17)

  - Kolor: `#0A0A0A` - prawie czarny
  - **Modyfikacja:** Zmień w config wartość `text-dark`

- **`mb-1 md:mb-2`** - margin bottom

  - Mobile: `0.25rem` (4px)
  - Desktop: `0.5rem` (8px)
  - **Modyfikacja:** Zmień na `mb-4`, `mb-6` dla większego odstępu

- **`text-center`** - wyśrodkowanie
  - **Modyfikacja:** `text-left` dla wyrównania do lewej

#### Grid layout (zdjęcie + tekst):

- **`md:grid md:grid-cols-2`**

  - Mobile: stack (jeden pod drugim)
  - Desktop: 2 kolumny
  - **Modyfikacja:** `lg:grid-cols-3` dla 3 kolumn na większych ekranach

- **`gap-8`** - odstęp między kolumnami

  - `2rem` (32px)
  - **Modyfikacja:** `gap-6` (24px) lub `gap-10` (40px)

- **`items-center`** - wyrównanie pionowe do środka
  - **Modyfikacja:** `items-start` (góra), `items-end` (dół)

#### Kontener zdjęcia:

- **`mb-8 md:mb-0`**

  - Mobile: margin bottom `2rem` (32px)
  - Desktop: brak margin
  - **Modyfikacja:** `mb-6` dla mniejszego odstępu na mobile

- **`order-1 md:order-1`** - kolejność

  - **Modyfikacja:** `order-2` aby przesunąć zdjęcie na koniec

- **`w-full aspect-square max-w-md mx-auto`**

  - Pełna szerokość, kwadratowy proporcje (1:1)
  - Max szerokość: `28rem` (448px)
  - Wyśrodkowany: `mx-auto`
  - **Modyfikacja:**
    - `aspect-video` (16:9) dla szerszego formatu
    - `max-w-lg` (32rem) dla większego zdjęcia
    - `max-w-sm` (24rem) dla mniejszego

- **`rounded-lg`** - zaokrąglone rogi

  - `0.5rem` (8px)
  - **Modyfikacja:** `rounded-xl` (12px), `rounded-full` (okrągłe)

- **`shadow-xl`** - duży cień

  - **Modyfikacja:** `shadow-2xl` (większy), `shadow-lg` (mniejszy)

- **`border-2 border-neon-blue/20`**
  - Grubość: `2px`
  - Kolor: neon-blue z 20% opacity
  - **Modyfikacja:**
    - `border-4` dla grubszej obwódki
    - `border-neon-purple/30` dla innego koloru

#### Placeholder zdjęcia:

- **`bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-blue/20`**
  - Gradient: top-left → bottom-right
  - Kolory: neon-blue i neon-purple z przezroczystością
  - **Modyfikacja:** Zmień wartości `/10`, `/20` dla innej intensywności

#### Tekst po prawej:

- **`order-2 md:order-2`**

  - **Modyfikacja:** `order-1` aby tekst był pierwszy na mobile

- **Subtitle (`text-xl md:text-2xl`)**

  - Mobile: `1.25rem` (20px)
  - Desktop: `1.5rem` (24px)
  - **Modyfikacja:** Zmień rozmiar analogicznie

- **`text-secondary`** (tailwind.config.js linia 21)

  - Kolor: `#666666` - szary
  - **Modyfikacja:** Zmień w config lub użyj `text-muted` dla jaśniejszego

- **`font-semibold`** - grubość 600

  - **Modyfikacja:** `font-normal`, `font-bold`

- **`mb-6`** - margin bottom `1.5rem` (24px)

  - **Modyfikacja:** `mb-4`, `mb-8`

- **`space-y-4`** - odstęp między paragrafami `1rem` (16px)

  - **Modyfikacja:** `space-y-2` (8px), `space-y-6` (24px)

- **`leading-relaxed`** - wysokość linii `1.625`
  - **Modyfikacja:** `leading-normal` (1.5), `leading-loose` (2)

---

## 2. SEKCJA KWALIFIKACJI

**Plik:** `app/o-nas/page.js` - linie 16-26 **Komponent:** `components/ui/QualificationCard.js`

### Struktura HTML:

```jsx
<section className='section-pad section-wrap bg-surface-light'>
  <h2>...</h2>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    <QualificationCard />
    {/* ... 5 kart */}
  </div>
</section>
```

### CSS Breakdown:

#### Kontener sekcji:

- **`.section-pad`** (globals.css linia 26-28)

  - `py-10 md:py-14` - padding pionowy
  - Mobile: `2.5rem` (40px)
  - Desktop: `3.5rem` (56px)
  - **Modyfikacja:** Zmień w `globals.css` wartości

- **`bg-surface-light`** (tailwind.config.js linia 24)
  - Kolor: `#F5F5F5` - jasnoszare tło
  - **Modyfikacja:** Zmień w config lub użyj `bg-surface` dla białego

#### Nagłówek H2:

- **`text-3xl md:text-4xl`**

  - Mobile: `1.875rem` (30px)
  - Desktop: `2.25rem` (36px)
  - **Modyfikacja:** `text-2xl md:text-3xl` dla mniejszego

- **`font-display`** - Orbitron
- **`text-center`** - wyśrodkowany
- **`mb-12`** - margin bottom `3rem` (48px)
  - **Modyfikacja:** `mb-8`, `mb-16`

#### Grid container:

- **`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`**

  - Mobile: 1 kolumna
  - Tablet (md): 2 kolumny
  - Desktop (lg): 3 kolumny
  - **Modyfikacja:**
    - `grid-cols-2 md:grid-cols-4` dla 4 kolumn na desktop
    - `xl:grid-cols-5` dla 5 kolumn na bardzo dużych ekranach

- **`gap-6`** - odstęp między kartami `1.5rem` (24px)
  - **Modyfikacja:** `gap-4` (16px), `gap-8` (32px)

### QualificationCard Component:

#### Karta:

- **`.about-card`** (globals.css linia 85-89)
  - `rounded-lg` - zaokrąglone rogi 8px
  - `shadow-sm` - mały cień
  - `p-6` - padding `1.5rem` (24px)
  - `border` - obwódka 1px
  - `hover:shadow-md` - większy cień na hover
  - `hover:border-neon-blue/30` - neon border na hover
  - `transition-all duration-300` - animacja 300ms
  - `background-color: #ffffff` - białe tło
  - `border-color: #f3f3f3` - jasnoszara obwódka
  - **Modyfikacja:**
    - W `globals.css` linia 86-88 zmień wartości
    - Dodaj `hover:scale-105` dla efektu powiększenia
    - Zmień `p-6` na `p-8` dla większego paddingu

#### Kontener wewnętrzny:

- **`flex flex-col items-center text-center`**
  - Flexbox kolumna, wyśrodkowany content
  - **Modyfikacja:** `items-start text-left` dla wyrównania do lewej

#### Ikona:

- **`.about-icon`** (globals.css linia 98-101)
  - `text-3xl` - rozmiar `1.875rem` (30px)
  - `mb-4` - margin bottom `1rem` (16px)
  - `color: #0099cc` - neon-blue
  - **Modyfikacja:**
    - W `globals.css` linia 99-100 zmień `text-3xl` na `text-4xl` (większa)
    - Zmień `color: #0099cc` na `color: #C084FC` (purple)
    - Dodaj w komponencie inline style dla zmiennych kolorów

#### Tytuł H3:

- **`text-xl`** - `1.25rem` (20px)

  - **Modyfikacja:** `text-2xl` (24px)

- **`font-semibold`** - grubość 600
- **`text-text-dark`** - kolor `#0A0A0A`
- **`mb-3`** - margin bottom `0.75rem` (12px)

#### Opis:

- **`text-secondary`** - kolor `#666666`
- **`leading-relaxed`** - wysokość linii 1.625

---

## 3. SEKCJA PODEJŚCIA

**Plik:** `components/ui/ApproachSection.js` **Lokalizacja w page:** `app/o-nas/page.js` - linie
28-34

### Struktura HTML:

```jsx
<section className='section-pad section-wrap bg-surface'>
  <h2>...</h2>
  <ApproachSection>
    <div className='about-quote'>...</div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>{/* 3 karty */}</div>
  </ApproachSection>
</section>
```

### CSS Breakdown:

#### Kontener sekcji:

- **`bg-surface`** - białe tło `#FFFFFF`
- **`.section-pad`** - padding pionowy
- Reszta jak w sekcji kwalifikacji

#### Nagłówek H2:

- Identyczny jak w sekcji kwalifikacji (linia 19 w page.js)

### ApproachSection Component:

#### Container:

- **`space-y-12`** - odstęp pionowy `3rem` (48px) między cytatem a kartami
  - **Modyfikacja:** `space-y-8` (32px), `space-y-16` (64px)

#### Cytat (.about-quote):

- **`.about-quote`** (globals.css linia 91-96)

  - `rounded-lg` - zaokrąglone rogi 8px
  - `p-8` - padding `2rem` (32px)
  - `shadow-2xl` - bardzo duży cień
  - `border-l-4` - lewa obwódka 4px
  - `background-color: rgba(0, 0, 0, 0.9)` - ciemne tło 90% opacity
  - `color: #fafafa` - jasny tekst
  - `border-left-color: #0099cc` - neon-blue border
  - **Modyfikacja:**
    - W `globals.css` linia 92-95 zmień wartości
    - Zmień `rgba(0, 0, 0, 0.9)` na jaśniejsze tło
    - Zmień `border-l-4` na `border-2` dla cieńszej obwódki
    - Dodaj `border-r-4` dla obwódki po prawej

- **`text-xl md:text-2xl`** - rozmiar tekstu cytatu

  - Mobile: `1.25rem` (20px)
  - Desktop: `1.5rem` (24px)
  - **Modyfikacja:** `text-2xl md:text-3xl` dla większego

- **`leading-relaxed`** - wysokość linii 1.625
- **`italic`** - kursywa
  - **Modyfikacja:** Usuń `italic` dla normalnej czcionki

#### Grid z kartami:

- **`grid grid-cols-1 md:grid-cols-3`**

  - Mobile: 1 kolumna
  - Desktop: 3 kolumny
  - **Modyfikacja:** `md:grid-cols-2` dla 2 kolumn na tablet

- **`gap-6`** - odstęp 24px

#### Karty podejścia:

- Używają **`.about-card`** (te same style co w kwalifikacjach)
- **WAŻNE:** Ikony mają `text-neon-purple` (inline w komponencie linia 29)
  - **Modyfikacja:** Zmień w komponencie na `text-neon-blue` lub usuń klasę

---

## 4. SEKCJA MIEJSCA

**Plik:** `components/ui/LocationSection.js` **Lokalizacja w page:** `app/o-nas/page.js` - linie
36-39

### Struktura HTML:

```jsx
<section className='section-pad section-wrap bg-surface-light'>
  <LocationSection>
    <div className='md:grid md:grid-cols-2 gap-8 items-center'>
      {/* Zdjęcie */}
      <div>...</div>
      {/* Tekst */}
      <div>...</div>
    </div>
  </LocationSection>
</section>
```

### CSS Breakdown:

#### Kontener sekcji:

- **`bg-surface-light`** - jasnoszare tło `#F5F5F5`
- **`.section-pad`** - padding pionowy

### LocationSection Component:

#### Grid layout:

- **`md:grid md:grid-cols-2`**

  - Mobile: stack
  - Desktop: 2 kolumny
  - **Modyfikacja:** Zostaw bez zmian lub dodaj `lg:grid-cols-3` dla 3 kolumn

- **`gap-8`** - odstęp 32px

  - **Modyfikacja:** `gap-6`, `gap-10`

- **`items-center`** - wyrównanie pionowe
  - **Modyfikacja:** `items-start`

#### Kontener zdjęcia:

- **`mb-8 md:mb-0`** - margin bottom tylko na mobile
- **`order-1`** - pierwsze na mobile
- **`w-full aspect-square max-w-md mx-auto md:max-w-full`**

  - Mobile: max szerokość `28rem` (448px), wyśrodkowane
  - Desktop: pełna szerokość kolumny
  - **Modyfikacja:**
    - `max-w-lg` dla większego zdjęcia na mobile
    - `aspect-video` dla formatu 16:9

- **`rounded-lg shadow-lg`** - zaokrąglone rogi i cień
  - **Modyfikacja:** `rounded-xl shadow-xl` dla większych efektów

#### Placeholder zdjęcia:

- **`bg-gradient-to-br from-neon-purple/10 via-neon-blue/10 to-neon-purple/20`**
  - Gradient purple → blue → purple
  - **Modyfikacja:** Zmień wartości przezroczystości

#### Kontener tekstu:

- **`order-2`** - drugie na mobile
- **`space-y-6`** - odstęp pionowy `1.5rem` (24px) między elementami

#### Nagłówek H2:

- **`text-3xl md:text-4xl`**

  - Mobile: `1.875rem` (30px)
  - Desktop: `2.25rem` (36px)
  - **Modyfikacja:** `text-2xl md:text-3xl` dla mniejszego

- **`font-display`** - Orbitron
- **`text-text-dark`** - kolor

#### Tekst:

- **`space-y-4`** - odstęp między paragrafami `1rem` (16px)
- **`text-secondary`** - kolor szary
- **`leading-relaxed`** - wysokość linii

#### Przycisk CTA:

- **`btn-primary`** (globals.css linia 39-41)

  - `bg-neon-blue text-white hover:opacity-90 focus-ring`
  - **Modyfikacja:**
    - Zmień na `btn-secondary` dla purple
    - Dodaj w `globals.css` custom style

- **`inline-block mt-6`** - margin top `1.5rem` (24px)
  - **Modyfikacja:** `mt-4`, `mt-8`

---

## 5. SEKCJA CTA

**Plik:** `app/o-nas/page.js` - linie 41-48

### Struktura HTML:

```jsx
<section className='section-pad section-wrap bg-surface text-center'>
  <h2>...</h2>
  <p>...</p>
  <Link className='btn-primary'>...</Link>
</section>
```

### CSS Breakdown:

#### Kontener sekcji:

- **`bg-surface`** - białe tło
- **`text-center`** - wyśrodkowany content
- **`.section-pad`** - padding pionowy

#### Nagłówek H2:

- **`text-2xl md:text-3xl`**

  - Mobile: `1.5rem` (24px)
  - Desktop: `1.875rem` (30px)
  - **Modyfikacja:** `text-3xl md:text-4xl` dla większego

- **`font-display`** - Orbitron
- **`mb-4`** - margin bottom `1rem` (16px)
  - **Modyfikacja:** `mb-6`, `mb-8`

#### Tekst:

- **`text-secondary`** - kolor szary
- **`mb-8`** - margin bottom `2rem` (32px)
- **`max-w-2xl mx-auto`**
  - Max szerokość: `42rem` (672px)
  - Wyśrodkowany
  - **Modyfikacja:** `max-w-xl` (32rem), `max-w-3xl` (48rem)

#### Przycisk:

- **`btn-primary`** - neon-blue button
  - **Modyfikacja:** `btn-secondary` dla purple

---

## GLOBALNE KLASY CSS

### W `globals.css`:

#### `.section-pad` (linia 26-28):

```css
.section-pad {
  @apply py-10 md:py-14;
}
```

- Padding pionowy dla sekcji
- **Modyfikacja:** Zmień wartości np. `py-8 md:py-12`

#### `.section-wrap` (linia 30-32):

```css
.section-wrap {
  @apply container mx-auto px-4;
}
```

- Kontener z automatycznymi marginesami
- **Modyfikacja:** Zmień `px-4` na `px-6`, `px-8`

#### `.about-card` (linia 85-89):

```css
.about-card {
  @apply rounded-lg shadow-sm p-6 border hover:shadow-md hover:border-neon-blue/30 transition-all duration-300;
  background-color: #ffffff; /* bg-surface */
  border-color: #f3f3f3; /* border-border-light */
}
```

- Style dla kart kwalifikacji i podejścia
- **Modyfikacja:** Zmień wszystkie wartości, dodaj `hover:scale-105`

#### `.about-quote` (linia 91-96):

```css
.about-quote {
  @apply rounded-lg p-8 shadow-2xl border-l-4;
  background-color: rgba(0, 0, 0, 0.9); /* bg-modal */
  color: #fafafa; /* text-text-light */
  border-left-color: #0099cc; /* neon-blue */
}
```

- Style dla cytatu w sekcji podejścia
- **Modyfikacja:** Zmień kolory, padding, border

#### `.about-icon` (linia 98-101):

```css
.about-icon {
  @apply text-3xl mb-4;
  color: #0099cc; /* neon-blue */
}
```

- Style dla ikon w kartach
- **Modyfikacja:** Zmień rozmiar, kolor, margin

#### `.btn-primary` (linia 39-41):

```css
.btn-primary {
  @apply bg-neon-blue text-white hover:opacity-90 focus-ring;
}
```

- Przycisk główny (neon-blue)
- **Modyfikacja:** Zmień hover effect, dodaj shadow

---

## 🎨 KOLORY I TOKENY

### W `tailwind.config.js`:

#### Neon colors:

- **`neon-blue`**: `#0099CC`
- **`neon-purple`**: `#C084FC`
- **Modyfikacja:** Zmień wartości hex

#### Tła:

- **`bg-surface`**: `#FFFFFF` (białe)
- **`bg-surface-light`**: `#F5F5F5` (jasnoszare)
- **`bg-bg-light`**: `#F9F9F9` (tło strony)
- **Modyfikacja:** Zmień wartości w config

#### Tekst:

- **`text-dark`**: `#0A0A0A` (prawie czarny)
- **`text-secondary`**: `#666666` (szary)
- **`text-muted`**: `#999999` (jaśniejszy szary)
- **Modyfikacja:** Zmień wartości w config

#### Cienie:

- **`shadow-glow`**: `0 0 24px rgba(0, 153, 204, 0.35)` (neon-blue glow)
- **`shadow-glow-purple`**: `0 0 24px rgba(192, 132, 252, 0.35)` (purple glow)
- **Modyfikacja:** Zmień wartości w config linia 45-48

---

## 📱 RESPONSYWNOŚĆ

### Breakpoints Tailwind:

- **Mobile (default)**: < 768px
- **md (tablet)**: ≥ 768px
- **lg (desktop)**: ≥ 1024px
- **xl**: ≥ 1280px

### Jak modyfikować breakpoints:

Edytuj w `tailwind.config.js`:

```js
theme: {
  screens: {
    'md': '768px',
    'lg': '1024px',
    // dodaj własne
  }
}
```

---

## 💡 SZYBKIE MODYFIKACJE

### Zmień odstępy między sekcjami:

W `globals.css` linia 26-28, zmień:

```css
.section-pad {
  @apply py-8 md:py-12; /* zamiast py-10 md:py-14 */
}
```

### Zmień rozmiar kart:

W `globals.css` linia 86, zmień:

```css
padding: 1rem; /* zamiast p-6 */
```

### Zmień kolory ikon:

W komponencie `QualificationCard.js` linia 23, zmień:

```jsx
<IconComponent className='about-icon text-neon-purple' />
```

### Zmień tło cytatu:

W `globals.css` linia 93, zmień:

```css
background-color: rgba(0, 153, 204, 0.1); /* jaśniejsze */
```

### Dodaj efekty hover:

W `globals.css` linia 86, dodaj:

```css
@apply ... hover:scale-105 hover:shadow-xl;
```

---

## 📝 NOTATKI

- Wszystkie wartości w **rem** można łatwo przeliczyć (1rem = 16px)
- Kolory z przezroczystością używają formatu `rgba()` lub `/opacity` (Tailwind)
- Globalne klasy CSS są w `@layer components` w `globals.css`
- Kolory semantyczne są w `tailwind.config.js`
- Fonty: `font-display` (Orbitron) dla nagłówków, `font-sans` (Poppins) dla tekstu
