# PROPOZYCJA NOWEGO DESIGNU - SEKCJA "KWALIFIKACJE"

## OBECNY DESIGN (do zmiany):

- **Tło sekcji:** `bg-surface-light` (jasnoszare #F5F5F5)
- **Karty:** Białe (`bg-surface`), wyśrodkowane, ikona na górze
- **Layout:** Grid 3 kolumny (md:2, lg:3)
- **Style:** Zaokrąglone karty z cieniem, hover border glow

---

## PROPOZYCJE NOWEGO DESIGNU

### WARIANT A: **Timeline / List Style z Akcentem**

**Koncepcja:**

- **Ciemne tło sekcji** (`bg-bg-dark` lub `bg-modal`) - kontrast z jasnym hero
- **Karty jako list items** - bardziej płaskie, z akcentem po lewej
- **Ikona + tekst obok siebie** (nie wyśrodkowane)
- Efekt: bardziej profesjonalny, timeline-like

**Struktura:**

```
[CIEMNE TŁO] bg-bg-dark lub rgba(0,0,0,0.85)
  └── Grid 1 kolumna (mobile) → 2 kolumny (desktop)
      └── Karta:
          [NEON BAR] | [IKONA] [TYTUŁ]
                     |         [OPIS]
```

**Kolory:**

- Tło sekcji: `bg-bg-dark` (#0D0D0D) lub `bg-modal` (rgba(0,0,0,0.9))
- Karty: `bg-surface` (białe) z cienką obwódką
- Akcent: neon-blue bar po lewej (4-8px szerokości)
- Tekst: `text-text-dark` (czarny na białych kartach)
- Ikony: neon-blue lub neon-purple

**Hover:**

- Subtelny lift (`translate-y-[-2px]`)
- Neon border glow (`border-neon-blue/50`)
- Większy cień

---

### WARIANT B: **Glassmorphism Cards**

**Koncepcja:**

- **Ciemne tło sekcji** (`bg-bg-dark`) z subtelnym gradientem
- **Karty w stylu glassmorphism** - przezroczyste tło z blur
- **Ikony z glow effect** - neon glow wokół ikon
- Efekt: nowoczesny, premium

**Struktura:**

```
[CIEMNE TŁO + GRADIENT] bg-bg-dark
  └── Grid 2-3 kolumny
      └── Karta:
          [PRZEZROCZYSTE TŁO] backdrop-blur-sm bg-white/10
          [IKONA Z GLOW] neon glow effect
          [TEKST] text-text-light
```

**Kolory:**

- Tło sekcji: `bg-bg-dark` z gradientem `from-neon-blue/5 to-neon-purple/5`
- Karty: `bg-white/10 backdrop-blur-md` (glassmorphism)
- Obwódka: `border border-neon-blue/20`
- Tekst: `text-text-light` (jasny na ciemnym)
- Ikony: neon-blue z `shadow-glow`

**Hover:**

- Zwiększona przezroczystość (`bg-white/20`)
- Neon border (`border-neon-blue/50`)
- Ikona glow (`shadow-glow-strong`)

---

### WARIANT C: **Minimalistyczne Karty z Numeracją**

**Koncepcja:**

- **Ciemne tło sekcji** (`bg-modal`)
- **Karty minimalistyczne** - bez cienia, płaskie
- **Numeracja zamiast ikon** lub numer + ikona
- **Border jako akcent** (nie full border, tylko bottom lub left)
- Efekt: clean, minimalistyczny, profesjonalny

**Struktura:**

```
[CIEMNE TŁO] bg-modal
  └── Grid 1 kolumna (mobile) → 2-3 kolumny (desktop)
      └── Karta:
          [NUMER] (01, 02, 03...) lub [IKONA] w lewym górnym rogu
          [TYTUŁ]
          [OPIS]
          [BOTTOM BORDER] neon-blue
```

**Kolory:**

- Tło sekcji: `bg-modal` (rgba(0,0,0,0.9))
- Karty: `bg-surface` (białe) lub `bg-white/5` (subtelne)
- Bottom border: `border-b-2 border-neon-blue`
- Tekst: `text-text-dark`
- Numer/Ikona: neon-blue z glow

**Hover:**

- Bottom border animacja (wzrost szerokości)
- Subtelny lift
- Shadow glow pod kartą

---

### WARIANT D: **Asymmetric Grid z Accent Cards**

**Koncepcja:**

- **Ciemne tło sekcji** (`bg-bg-dark`)
- **Asymetryczny grid** - większe karty + mniejsze
- **Karty z neon akcentem** - różne style (jedna z gradientem, inne płaskie)
- **Ikony wokół karty** - nie w środku
- Efekt: dynamiczny, interesujący wizualnie

**Struktura:**

```
[CIEMNE TŁO] bg-bg-dark
  └── Grid (masonry-like lub mixed sizes)
      ├── [DUŻA KARTA] col-span-2 (highlight)
      ├── [MAŁA KARTA] standard
      └── [MAŁA KARTA] standard
```

**Kolory:**

- Tło sekcji: `bg-bg-dark`
- Karty podstawowe: `bg-surface` (białe)
- Karta highlight: `bg-gradient-to-br from-neon-blue/20 to-neon-purple/20`
- Akcenty: neon borders, glow effects

---

### WARIANT E: **Cards z Sidebar Accent** (REKOMENDOWANY)

**Koncepcja:**

- **Ciemne tło sekcji** (`bg-bg-dark`)
- **Karty z neon barem po lewej** (4-8px) + ikona
- **Layout: ikona po lewej, tekst po prawej** (nie wyśrodkowane)
- **Płaskie karty** - minimalny shadow, większy focus na content
- Efekt: profesjonalny, czytelny, nowoczesny

**Struktura:**

```
[CIEMNE TŁO] bg-bg-dark
  └── Grid 1 kolumna (mobile) → 2 kolumny (md) → 3 kolumny (lg)
      └── Karta:
          [NEON BAR] 6px width, full height
          [CONTENT]
            [IKONA] left side, larger
            [TYTUŁ + OPIS] right side
```

**Kolory:**

- Tło sekcji: `bg-bg-dark` (#0D0D0D) - **ciemniejsze niż hero**
- Karty: `bg-surface` (białe #FFFFFF) - kontrast z tłem
- Neon bar: `bg-neon-blue` (6px width, full height karty)
- Border: subtelny `border border-border-light`
- Tekst: `text-text-dark` (czarny na białych kartach)
- Ikony: `text-neon-blue` (lub `text-neon-purple` dla variacji)

**Hover:**

- Neon bar glow (`shadow-glow`)
- Karta lift (`translate-y-[-4px]`)
- Większy shadow (`shadow-lg`)

---

## REKOMENDACJA: WARIANT E

**Uzasadnienie:**

1. **Kontrast z hero** - ciemne tło vs jasne hero ✅
2. **Czytelność** - białe karty na ciemnym tle = wysoki kontrast ✅
3. **Akcent neon** - sidebar bar jako wizualny marker ✅
4. **Layout** - ikona + tekst obok = lepsze wykorzystanie przestrzeni ✅
5. **Spójność** - używa istniejących tokenów (bg-bg-dark, bg-surface, neon-blue) ✅

---

## IMPLEMENTACJA WARIANT E

### Struktura HTML:

```jsx
<section className='section-pad bg-bg-dark'>
  <div className='section-wrap'>
    <h2 className='text-3xl md:text-4xl font-display font-bold mb-12 text-center text-text-light'>
      {qualifications.title}
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {qualifications.items.map((item, index) => (
        <div className='qualification-card-dark'>
          {/* Neon sidebar */}
          <div className='qualification-sidebar' />

          {/* Content */}
          <div className='flex gap-4'>
            {/* Ikona */}
            <div className='flex-shrink-0'>
              <IconComponent className='qualification-icon' />
            </div>

            {/* Tekst */}
            <div className='flex-1'>
              <h3 className='text-lg font-semibold text-text-dark mb-2'>{item.title}</h3>
              <p className='text-sm text-secondary leading-relaxed'>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Nowe klasy CSS (do dodania w `globals.css`):

```css
/* Qualification Cards - Dark Variant */
.qualification-card-dark {
  @apply bg-surface rounded-xl border border-border-light shadow-md p-6 relative overflow-hidden transition-all duration-300;
  background-color: #ffffff; /* bg-surface */
}

.qualification-card-dark:hover {
  @apply shadow-lg translate-y-[-4px];
}

.qualification-sidebar {
  @apply absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl;
  background-color: #0099cc; /* neon-blue */
  box-shadow: 0 0 12px rgba(0, 153, 204, 0.6); /* glow effect */
}

.qualification-card-dark:hover .qualification-sidebar {
  box-shadow: 0 0 20px rgba(0, 153, 204, 0.8); /* stronger glow on hover */
}

.qualification-icon {
  @apply text-3xl;
  color: #0099cc; /* neon-blue */
}
```

---

## ALTERNATYWNE KOLORY (opcje):

### Opcja 1: Całkowicie ciemne karty

- Karty: `bg-bg-dark` lub `bg-surface-dark` (jeśli dodamy token)
- Tekst: `text-text-light`
- Neon bar: `bg-neon-blue`
- **Efekt:** Wszystko ciemne, tylko akcenty neon

### Opcja 2: Mieszane (variacja per karta)

- Nieparzyste karty: białe (`bg-surface`)
- Parzyste karty: ciemne (`bg-modal` lub podobne)
- **Efekt:** Dynamiczny, interesujący

### Opcja 3: Gradient tło sekcji

- Tło: `bg-gradient-to-br from-bg-dark via-modal to-bg-dark`
- **Efekt:** Głębszy, bardziej premium

---

## PORÓWNANIE WIZUALNE

### OBECNY vs PROPOZOWANY:

| Element     | OBECNY                       | PROPOZOWANY (Variant E)                         |
| ----------- | ---------------------------- | ----------------------------------------------- |
| Tło sekcji  | Jasnoszare (#F5F5F5)         | **Ciemne (#0D0D0D)** ✅                         |
| Tło kart    | Białe                        | Białe (bez zmiany)                              |
| Layout kart | Ikona na górze, wyśrodkowane | Ikona po lewej, tekst po prawej ✅              |
| Akcent      | Border hover (neon-blue)     | **Sidebar bar (neon-blue, zawsze widoczny)** ✅ |
| Shadow      | `shadow-sm` → `shadow-md`    | `shadow-md` → `shadow-lg` + lift                |
| Kontrast    | Niski (jasne na jasnym)      | **Wysoki (białe na ciemnym)** ✅                |

---

## NEXT STEPS:

1. Wybierz wariant (A-E) lub zaproponuj mieszankę
2. Zaimplementuj wybrany wariant
3. Dostosuj kolory jeśli potrzebne
4. Test responsywności
5. Dodać animacje/transitions
