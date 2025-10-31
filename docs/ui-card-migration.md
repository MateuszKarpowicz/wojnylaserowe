# Raport migracji komponentów kart

**Data migracji:** 2025-01-27
**Zakres:** Refactoring wszystkich komponentów kart zgodnie z planem audytu

---

## 📋 Przegląd zmian

### Nowe komponenty

#### 1. **Card (primitives/Card.js)** - Refactored
- **Zmiana:** Domyślny wariant zmieniony z `blue` na `neutral`
- **Nowe API:**
  - `variant`: `'neutral' | 'surface' | 'inverted' | 'blue' | 'purple'` (domyślnie: `'neutral'`)
  - `size`: `'none' | 'sm' | 'md' | 'lg'` (domyślnie: `'md'`)
  - `elevation`: `'none' | 'weak' | 'medium' | 'strong'` (domyślnie: `'weak'`)
  - `hoverable`: `boolean` (domyślnie: `false`)
  - `border`: `'none' | 'subtle' | 'bold'` (domyślnie: `'subtle'`)

#### 2. **Accordion (headless/Accordion.js)** - Nowy
- Headless komponent zapewniający logikę ARIA, klawiaturę i stan
- Zero stylowania - komponenty composed używają go z Card

#### 3. **AccordionCard (composed/AccordionCard.js)** - Nowy
- Kompozycja Accordion + Card
- Używa neutral variant domyślnie
- Warianty brandowe dostępne explicite

#### 4. **IconCard (composed/IconCard.js)** - Nowy
- Layout ikona + treść (bez zachowania)
- Zastępuje część funkcjonalności `CardWithIcon`

#### 5. **ExpandableIconCard (composed/ExpandableIconCard.js)** - Nowy
- Kompozycja Accordion + IconCard
- Idealna dla QualificationsSection i podobnych

---

## 🔄 Zmigrowane komponenty

### 1. QualificationsSection
**Plik:** `components/features/about/QualificationsSection.js`

**Przed:**
- Używał `Card` z `variant='purple'` + własną logiką state/ARIA
- Override'y: `!p-0`, `!p-3`, `!p-6`
- Custom hover: `hover:shadow-lg`

**Po:**
- Używa `ExpandableIconCard` z `cardVariant="purple"`
- Props: `cardSizeClosed="sm"`, `cardSizeOpen="md"`
- Brak override'ów - wszystko przez props

**Zmiany:**
```jsx
// PRZED
<Card variant='purple' className={cn('!p-0', open ? '!p-6' : '!p-3', ...)}>
  {/* logika accordion wewnątrz */}
</Card>

// PO
<ExpandableIconCard
  cardVariant="purple"
  cardSizeClosed="sm"
  cardSizeOpen="md"
  ...
/>
```

---

### 2. ApproachSection
**Plik:** `components/features/about/ApproachSection.js`

**Przed:**
- Używał `Card` z `variant='blue'` + własną logiką state/ARIA
- Custom hover: `hover:shadow-lg`
- Dynamiczne border/shadow w zależności od stanu

**Po:**
- Używa `AccordionCard` z `cardVariant="blue"`
- Custom trigger z ikoną w środku karty
- Border/shadow kontrolowane przez className (specjalne efekty glow)

**Zmiany:**
```jsx
// PRZED
<Card variant='blue' role='button' onClick={...} className={cn(...)}>
  {/* logika accordion wewnątrz */}
</Card>

// PO
<AccordionCard
  cardVariant="blue"
  trigger={customTrigger}
  className={cn(...)}
  ...
/>
```

---

### 3. FAQAccordion
**Plik:** `components/features/faq/FAQAccordion.js`

**Przed:**
- Własna implementacja accordion bez `Card`
- Własny `<div>` z border i bg-surface

**Po:**
- Używa `AccordionCard` z `variant="neutral"`
- Pełna obsługa ARIA z headless Accordion

**Zmiany:**
```jsx
// PRZED
<div className='border border-border rounded-lg bg-surface'>
  <button onClick={...} aria-expanded={...}>
    {/* content */}
  </button>
</div>

// PO
<AccordionCard
  variant="neutral"
  trigger={trigger}
  ...
/>
```

---

### 4. CardWithIcon
**Plik:** `components/ui/CardWithIcon.js`

**Przed:**
- Pełna implementacja layout ikona + treść
- Używa `Card` wewnętrznie

**Po:**
- Wrapper na `IconCard` z `components/composed`
- Backward compatibility zachowana
- DEPRECATED - użyj `IconCard` bezpośrednio

**Zmiany:**
```jsx
// Po - teraz wrapper
export default function CardWithIcon({ ... }) {
  return <IconCard {...} />;
}
```

---

### 5. MapSection
**Plik:** `components/ui/MapSection.js`

**Przed:**
- `Card variant='purple' className='p-0'`

**Po:**
- `Card variant='purple' size='none'`
- Brak override'ów przez className

**Zmiany:**
```jsx
// PRZED
<Card variant='purple' className='p-0 overflow-hidden'>

// PO
<Card variant='purple' size='none' className='overflow-hidden'>
```

---

### 6. TestimonialsCarousel
**Plik:** `components/ui/TestimonialsCarousel.js`

**Przed:**
- `Card variant='blue'` z override `bg-bg-surface text-text-dark`

**Po:**
- `Card variant='blue'` z explicite ustawionym `hoverable={false}`
- Override tła pozostaje (specjalny przypadek - blue variant z białym tłem)
- Komentarz w kodzie wyjaśnia dlaczego

**Zmiany:**
```jsx
// PO - override tła pozostaje (specjalny przypadek)
<Card
  variant='blue'
  hoverable={false}
  className={cn(
    'bg-bg-surface text-text-dark', // override dla specjalnego przypadku
    ...
  )}
/>
```

---

### 7. FAQCategorySection
**Plik:** `components/features/faq/FAQCategorySection.js`

**Przed:**
- `Card variant='purple' as='section'`

**Po:**
- `Card variant='purple' as='section' size='md'`
- Dodano explicite size (nie wymagane, ale dla czytelności)

---

### 8. ProcessSection
**Plik:** `components/ui/ProcessSection.js`

**Status:** **NIE ZMIENIANY**
- Używa `Card variant='blue'` i `Card variant='purple'` explicite
- To jest OK - warianty są świadomie wybierane
- Specjalne efekty glow pozostają w className (to jest właściwe)

---

### 9. TargetSection
**Plik:** `components/features/about/TargetSection.js`

**Status:** **NIE ZMIENIANY**
- Używa `Card variant='blue'` explicite - to jest OK
- Używa `CardWithIcon` - działa przez wrapper

---

## 📝 Lista zmienionych plików

### Nowe pliki:
1. `components/headless/Accordion.js`
2. `components/headless/index.js`
3. `components/composed/AccordionCard.js`
4. `components/composed/IconCard.js`
5. `components/composed/ExpandableIconCard.js`
6. `components/composed/index.js`

### Zmodyfikowane pliki:
1. `components/primitives/Card.js` - Refactored (neutral domyślny, nowe props)
2. `components/features/about/QualificationsSection.js` - Migracja na ExpandableIconCard
3. `components/features/about/ApproachSection.js` - Migracja na AccordionCard
4. `components/features/faq/FAQAccordion.js` - Migracja na AccordionCard
5. `components/ui/CardWithIcon.js` - Wrapper na IconCard (DEPRECATED)
6. `components/ui/MapSection.js` - Użycie size='none'
7. `components/ui/TestimonialsCarousel.js` - Dodano hoverable={false}
8. `components/features/faq/FAQCategorySection.js` - Dodano size='md'

### Pliki bez zmian (ale OK):
- `components/ui/ProcessSection.js` - Używa wariantów explicite
- `components/features/about/TargetSection.js` - Używa wariantów explicite
- Wszystkie inne użycia `CardWithIcon` - działają przez wrapper

---

## ✅ Eliminowane override'y

### Padding (`!p-...`)
- **QualificationsSection:** `!p-0`, `!p-3`, `!p-6` → `size="sm"` / `size="md"`
- **MapSection:** `p-0` → `size="none"`

### Tło (`!bg-...`)
- **TestimonialsCarousel:** Override pozostaje, ale z komentarzem (specjalny przypadek)
- Inne override'y nie były używane

### Hover
- **QualificationsSection:** `hover:shadow-lg` → obsługiwane przez komponent composed
- **ApproachSection:** `hover:shadow-lg` → obsługiwane przez komponent composed

---

## 🎯 Automatyczny codemod (regex)

Dla przyszłych zmian, można użyć następujących wzorców:

### Padding
```bash
# !p-0 → size="none"
sed -i 's/className={.*!p-0[^}]*}/size="none" className={...}/g'

# !p-3 → size="sm"
sed -i 's/className={.*!p-3[^}]*}/size="sm" className={...}/g'

# !p-6 → size="md"
sed -i 's/className={.*!p-6[^}]*}/size="md" className={...}/g'
```

### Hover
```bash
# hover:shadow-lg → hoverable
# (wymaga ręcznej weryfikacji kontekstu)
```

---

## ⚠️ Potencjalne problemy i rozwiązania

### 1. Kolory tła
**Problem:** Blue variant domyślnie ma `bg-modal` (ciemne), ale TestimonialsCarousel potrzebuje białego.

**Rozwiązanie:** Override przez className z komentarzem wyjaśniającym.

### 2. Padding dynamiczny
**Problem:** QualificationsSection zmienia padding w zależności od stanu.

**Rozwiązanie:** `cardSizeClosed` i `cardSizeOpen` props w ExpandableIconCard.

### 3. Backward compatibility
**Problem:** `CardWithIcon` jest używany w wielu miejscach.

**Rozwiązanie:** Wrapper na `IconCard` zachowuje API.

---

## 📊 Statystyki

- **Nowe komponenty:** 6
- **Zmigrowane komponenty:** 7
- **Eliminowane override'y:** 5 miejsc
- **Zachowane override'y (z komentarzami):** 1 (TestimonialsCarousel)

---

## ✅ Checklista migracji

- [x] Utworzono neutralny Card jako domyślny
- [x] Utworzono headless Accordion
- [x] Utworzono kompozyty (AccordionCard, IconCard, ExpandableIconCard)
- [x] Zmigrowano QualificationsSection
- [x] Zmigrowano ApproachSection
- [x] Zmigrowano FAQAccordion
- [x] Zaktualizowano CardWithIcon (wrapper)
- [x] Zaktualizowano MapSection
- [x] Zaktualizowano TestimonialsCarousel
- [x] Zachowano backward compatibility
- [ ] Testy ręczne (TODO - do wykonania przez zespół)
- [ ] Storybook stories (TODO - jeśli Storybook jest w projekcie)
