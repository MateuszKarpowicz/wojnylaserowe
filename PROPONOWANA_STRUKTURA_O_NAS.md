# PROPOZYCJA STRUKTURY STRONY "O NAS" - Wojny Laserowe

## ANALIZA OBECNYCH WZORCÓW W PROJEKCIE

### Layout Pattern:

- `main` z `min-h-screen bg-bg-light text-text-dark container`
- Nagłówki: `text-center mb-12`, `text-3xl md:text-4xl font-normal`
- Sekcje: `.section-pad` (py-10 md:py-14), `.section-wrap` (container mx-auto px-4)
- Gridy: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`
- Cards: `bg-surface rounded-lg shadow-sm p-6`

### Kolory i efekty:

- **Neon blue** (`#0099CC`) - główne akcenty, ikony, przyciski
- **Neon purple** (`#C084FC`) - warianty, hover states
- **Shadow glow** - efekty świetlne dla przycisków/akcentów
- **Ciemne tła** - `bg-modal` (rgba(0,0,0,0.9)) dla sekcji wyróżnionych
- **Semantyczne tła** - `bg-surface`, `bg-surface-light`

### Ikony:

- React Icons (Fa\*) - używane w FAQ, Kontakt
- Emoji w tekście (💼 🧠 🏙) - można zastąpić ikonami lub zostawić

---

## PROPOZOWANA STRUKTURA

### 1. **HERO SECTION** (Hero z zdjęciem + intro)

```
┌─────────────────────────────────────────┐
│  [Zdjęcie Piotra - lewa/prawo]         │
│                                         │
│  "O mnie – Wojny Laserowe Kraków"      │
│  "Doświadczenie, precyzja i pasja..."  │
│                                         │
│  [Krótki tekst intro - 2-3 linijki]    │
└─────────────────────────────────────────┘
```

**Komponenty:**

- `HeroAbout.js` - zdjęcie + tekst, alternating layout
- Layout: `md:grid md:grid-cols-2 gap-8 items-center`
- Zdjęcie: `rounded-lg shadow-lg` (aspect-square lub 4:3)
- Tekst: duży, wyróżniony

**Kolory:**

- Tło: `bg-surface` lub `bg-bg-light`
- Akcent: neon-blue glow na ramce zdjęcia (opcjonalnie)
- Tekst intro: `text-secondary` lub `text-text-dark`

---

### 2. **SEKCJA KWALIFIKACJI** 💼

```
┌─────────────────────────────────────────┐
│  "Moje kwalifikacje i doświadczenie"    │
│                                         │
│  [Card] [Card] [Card] [Card] [Card]    │
│   1     2     3     4     5            │
│                                         │
│  Każda card:                           │
│  - Ikona (certificate/graduation)       │
│  - Tytuł                                │
│  - Opis (krótki)                        │
└─────────────────────────────────────────┘
```

**Komponent:**

- `QualificationCard.js` - pojedyncza karta
- Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Card style:
  `bg-surface rounded-lg shadow-sm p-6 border border-border-light hover:shadow-md transition-shadow`
- Ikona: `FaGraduationCap` lub `FaCertificate` z `text-neon-blue`

**Zawartość 5 kart:**

1. Certyfikat z zakresu obsługi laserów kosmetycznych i medycznych
2. Certyfikat ScarINK Concept (praca z bliznami)
3. Szkolenie Remover (metoda chemiczna)
4. Doświadczenie od 2019 roku
5. Współpraca z KULT

**Kolory:**

- Tło sekcji: `bg-surface` lub `bg-surface-light`
- Ikony: `text-neon-blue text-2xl`
- Hover: `border-neon-blue/30` lub `shadow-glow`

---

### 3. **SEKCJA PODEJŚCIA** 🧠

```
┌─────────────────────────────────────────┐
│  "Moje podejście"                      │
│                                         │
│  [Wyróżniony cytat w ramce]            │
│  "W pracy stawiam na świadomość..."     │
│                                         │
│  [3 kolumny tekstu lub cards]           │
│  - Świadomość i wiedza                  │
│  - Realne efekty                        │
│  - Bezpieczeństwo i higiena             │
└─────────────────────────────────────────┘
```

**Komponenty:**

- `ApproachSection.js` - sekcja z cytatem i 3 kolumnami
- Cytat: `bg-modal text-text-light rounded-lg p-8 shadow-2xl` + border `border-l-4 border-neon-blue`
- 3 cards w gridzie: `grid grid-cols-1 md:grid-cols-3 gap-6`
- Każda card: ikona + tytuł + tekst

**Kolory:**

- Cytat: ciemne tło (`bg-modal`) + neon-blue border
- Cards: `bg-surface` z hover effect
- Ikony: neon-blue/purple

---

### 4. **SEKCJA MIEJSCA** 🏙

```
┌─────────────────────────────────────────┐
│  "Moje miejsce"                         │
│                                         │
│  [Zdjęcie gabinetu/KULT]                │
│                                         │
│  [Tekst - 2 akapity]                    │
│  - Lokalizacja w KULT                   │
│  - Atmosfera i wartości                 │
│                                         │
│  [Link do kontaktu / mapa]              │
└─────────────────────────────────────────┘
```

**Komponent:**

- `LocationSection.js` - zdjęcie + tekst + CTA
- Layout: `md:grid md:grid-cols-2 gap-8`
- Zdjęcie: `rounded-lg shadow-lg object-cover`
- CTA: `btn-primary` (neon-blue) → link do kontakt

**Kolory:**

- Tło: `bg-surface-light` lub `bg-surface`
- CTA: `bg-neon-blue hover:bg-neon-purple`

---

### 5. **CTA SECTION** (zachęta do kontaktu)

```
┌─────────────────────────────────────────┐
│  "Gotowy na pierwszy krok?"             │
│  [Przycisk: Umów konsultację]           │
│  (neon-blue → purple hover)             │
└─────────────────────────────────────────┘
```

**Komponent:**

- Prosty CTA z button
- Tło: `bg-surface` lub gradient
- Button: `btn-primary` z glow effect

---

## STRUKTURA PLIKÓW

### JSON Content (`content/texts/about-page.json`):

```json
{
  "hero": {
    "title": "O mnie – Wojny Laserowe Kraków",
    "subtitle": "Doświadczenie, precyzja i pasja do skóry",
    "intro": "Nazywam się Piotr Hryniów i od 2019 roku...",
    "image": "/images/about/piotr.jpg"
  },
  "qualifications": {
    "title": "Moje kwalifikacje i doświadczenie",
    "items": [
      {
        "icon": "FaCertificate",
        "title": "Certyfikat laserów",
        "description": "Certyfikat z zakresu obsługi laserów..."
      }
      // ... 5 items
    ]
  },
  "approach": {
    "title": "Moje podejście",
    "quote": "W pracy stawiam na świadomość, wiedzę i bezpieczeństwo...",
    "points": [
      {
        "icon": "FaBrain",
        "title": "Świadomość",
        "text": "Zawsze zaczynam od konsultacji..."
      }
      // ... 3 points
    ]
  },
  "location": {
    "title": "Moje miejsce",
    "image": "/images/about/kult-gabinet.jpg",
    "text": "Gabinet Wojny Laserowe znajduje się...",
    "cta": {
      "text": "Zobacz lokalizację",
      "href": "/kontakt"
    }
  },
  "cta": {
    "title": "Gotowy na pierwszy krok?",
    "text": "Umów się na konsultację i zacznij swoją drogę do usunięcia tatuażu.",
    "button": "Umów konsultację",
    "href": "/kontakt"
  }
}
```

### Komponenty do stworzenia:

1. **`components/ui/AboutHero.js`**

   - Zdjęcie + tekst, alternating layout
   - Responsive: stack na mobile, side-by-side na desktop

2. **`components/ui/QualificationCard.js`**

   - Reusable card z ikoną, tytułem, opisem
   - Hover effects

3. **`components/ui/ApproachSection.js`**

   - Cytat w wyróżnionej ramce
   - 3 cards z punktami podejścia

4. **`components/ui/LocationSection.js`**
   - Zdjęcie + tekst + CTA button

---

## PROPOZYCJA CSS/UI

### Nowe klasy w `globals.css`:

```css
/* COMPONENTS */
.about-hero {
  @apply section-pad section-wrap;
}

.about-card {
  @apply bg-surface rounded-lg shadow-sm p-6 border border-border-light hover:shadow-md hover:border-neon-blue/30 transition-all duration-300;
}

.about-quote {
  @apply bg-modal text-text-light rounded-lg p-8 shadow-2xl border-l-4;
  border-left-color: #0099cc; /* neon-blue */
}

.about-icon {
  @apply text-neon-blue text-3xl mb-4;
}

.about-gradient {
  @apply bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10;
}
```

### Kolory dla sekcji:

**Hero:**

- Tło: `bg-surface` lub `bg-gradient-to-br from-neon-blue/5 to-neon-purple/5`
- Zdjęcie: `rounded-lg shadow-xl border-2 border-neon-blue/20`
- Tekst: standardowe kolory semantyczne

**Kwalifikacje:**

- Tło sekcji: `bg-surface-light`
- Cards: `bg-surface` z hover: `hover:shadow-glow-purple/20`
- Ikony: `text-neon-blue` z glow effect

**Podejście:**

- Cytat: `bg-modal` (ciemne tło rgba(0,0,0,0.9)) + `text-text-light`
- Border: `border-l-4 border-neon-blue` (lewy neon border)
- Cards: `bg-surface` z ikonami neon-blue/purple

**Miejsce:**

- Tło: `bg-surface` lub `bg-surface-light`
- CTA button: `btn-primary` (neon-blue → purple hover)

---

## TRENDY W DESIGNIE 2024

### 1. **Split Layout** (alternating text/image)

- Tekst i zdjęcie na przemian (left/right)
- Responsive: stack na mobile

### 2. **Glassmorphism** (opcjonalnie)

- Przezroczyste tła z blur
- W naszym przypadku: `backdrop-blur-sm bg-header-footer/90`

### 3. **Neon Accents**

- Subtelne glow effects (już mamy!)
- Border glow na hover

### 4. **Cards z ikonami**

- Duże ikony z neon kolorem
- Hover effects z shadow glow

### 5. **Wyróżnione cytaty**

- Ciemne tło + neon border
- Większy font, italic (opcjonalnie)

---

## ZDJĘCIA DO PRZYGOTOWANIA

1. **Zdjęcie Piotra** (`/images/about/piotr.jpg` lub `.webp`)

   - Portretowy format
   - Wysoka jakość
   - Możliwie profesjonalne tło

2. **Zdjęcie gabinetu/KULT** (`/images/about/kult-gabinet.jpg`)

   - Wnętrze gabinetu
   - Pokazujące profesjonalną przestrzeń

3. **Ikony SVG** (opcjonalnie)
   - Certificate, Graduation, Brain, Location
   - Jeśli nie użyjemy React Icons

---

## PROPOZYCJA UKŁADU STRONY (HTML structure)

```jsx
<main className='min-h-screen bg-bg-light text-text-dark'>
  {/* HERO */}
  <AboutHero data={aboutPageData.hero} />

  {/* KWALIFIKACJE */}
  <section className='section-pad section-wrap bg-surface-light'>
    <h2 className='text-3xl md:text-4xl font-display text-center mb-12'>
      {aboutPageData.qualifications.title}
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {aboutPageData.qualifications.items.map((item, i) => (
        <QualificationCard key={i} {...item} />
      ))}
    </div>
  </section>

  {/* PODEJŚCIE */}
  <section className='section-pad section-wrap bg-surface'>
    <ApproachSection data={aboutPageData.approach} />
  </section>

  {/* MIEJSCE */}
  <section className='section-pad section-wrap bg-surface-light'>
    <LocationSection data={aboutPageData.location} />
  </section>

  {/* CTA */}
  <section className='section-pad section-wrap bg-surface text-center'>
    <h2 className='text-2xl md:text-3xl font-display mb-4'>{aboutPageData.cta.title}</h2>
    <p className='text-secondary mb-8 max-w-2xl mx-auto'>{aboutPageData.cta.text}</p>
    <a href={aboutPageData.cta.href} className='btn-primary'>
      {aboutPageData.cta.button}
    </a>
  </section>
</main>
```

---

## SZCZEGÓŁY WIZUALNE

### Typography:

- **Hero title**: `text-4xl md:text-5xl font-display font-bold`
- **Section titles**: `text-3xl md:text-4xl font-display text-center`
- **Card titles**: `text-xl font-semibold text-text-dark`
- **Body text**: `text-secondary` lub `text-text-dark`

### Spacing:

- Sekcje: `.section-pad` (py-10 md:py-14)
- Gap między elementami: `gap-6` lub `gap-8`
- Cards padding: `p-6` lub `p-8`

### Animations:

- Cards hover: `hover:shadow-md hover:scale-105 transition-all duration-300`
- Glow effects: `shadow-glow-purple/20` na hover
- Smooth transitions: `transition-all duration-300`

---

## PODSUMOWANIE PROPOZYCJI

### Komponenty (5):

1. `AboutHero.js` - hero section
2. `QualificationCard.js` - reusable card
3. `ApproachSection.js` - sekcja z cytatem
4. `LocationSection.js` - sekcja z miejscem
5. `AboutPage.js` - główny page component

### JSON:

- `about-page.json` - wszystkie treści

### CSS:

- Wykorzystanie istniejących klas (`.section-pad`, `.section-wrap`)
- Nowe klasy: `.about-card`, `.about-quote`, `.about-icon`
- Kolory semantyczne (już są w config)

### Zdjęcia:

- `/images/about/piotr.jpg` - portret
- `/images/about/kult-gabinet.jpg` - gabinet

### Układ:

- Hero (split layout)
- Kwalifikacje (grid 3 kolumny)
- Podejście (cytat + 3 cards)
- Miejsce (split layout)
- CTA (centered)

### Kolory:

- Neon blue/purple jako akcenty
- Ciemne tło dla cytatu (`bg-modal`)
- Semantyczne tła dla sekcji
- Glow effects na hover

---

**Status:** ✅ Gotowe do implementacji po Twojej aprobacie.
