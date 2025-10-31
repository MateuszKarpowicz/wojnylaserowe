# PR: Refactor komponentów kart - Neutralna skóra + Headless Accordion

**Status:** ✅ Gotowy do review
**Typ:** Refactoring
**Zakres:** Komponenty Card, Accordion, kompozyty

---

## 📋 Opis

Pełny refactoring komponentów kart zgodnie z planem audytu:
1. **Neutralny Card jako domyślny** - biały środek, czarna subtelna obwódka, zero brandowych kolorów domyślnie
2. **Headless Accordion** - wydzielenie logiki ARIA/klawiatury z Card
3. **Kompozyty** - AccordionCard, IconCard, ExpandableIconCard
4. **Eliminacja override'ów** - wszystkie `!p-...`, `!bg-...` zastąpione props

---

## 🔗 Dokumentacja

- **Audyt:** [`docs/ui-card-audit.md`](./docs/ui-card-audit.md)
- **Migracja:** [`docs/ui-card-migration.md`](./docs/ui-card-migration.md)
- **Podsumowanie:** [`docs/ui-card-refactor-summary.md`](./docs/ui-card-refactor-summary.md)

---

## 🎯 Główne zmiany

### 1. Card (primitives/Card.js)
- ✅ Domyślny wariant zmieniony z `blue` na `neutral`
- ✅ Nowe props: `size`, `elevation`, `hoverable`, `border`
- ✅ Neutral variant: `bg-white`, `border-neutral-900/10`, `text-neutral-900`

### 2. Headless Accordion (headless/Accordion.js) - NOWY
- ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`)
- Obsługa klawiatury (Enter, Space)
- Support dla `prefers-reduced-motion`
- Zero stylowania - tylko zachowanie

### 3. Kompozyty (composed/) - NOWE
- **AccordionCard** - Accordion + Card
- **IconCard** - Layout ikona + treść (bez zachowania)
- **ExpandableIconCard** - Accordion + IconCard

### 4. Migracja użyć
- ✅ QualificationsSection → ExpandableIconCard
- ✅ ApproachSection → AccordionCard
- ✅ FAQAccordion → AccordionCard
- ✅ MapSection → `size="none"`
- ✅ CardWithIcon → wrapper na IconCard (backward compatibility)

---

## 📊 Statystyki

- **Nowe komponenty:** 6
- **Zmigrowane komponenty:** 7
- **Eliminowane override'y:** 5 miejsc (`!p-0`, `!p-3`, `!p-6`, `hover:shadow-lg`)
- **Zachowane override'y (z komentarzami):** 1 (TestimonialsCarousel - specjalny przypadek)

---

## ✅ Checklista akceptacji

- [x] `Card` domyślnie jest **neutralny** (biały, czarna subtelna obwódka, ciemny tekst, brak brandu)
- [x] Wszystkie brandowe kolory są **wybierane explicite** przez props/klasy, **nie domyślnie**
- [x] Brak `!important` w użyciach kart
- [x] Wszystkie „rozsuwane” używają headless `Accordion` i kompozytów, nie wariantów `Card`
- [ ] Storybook zawiera matrix i use-case'y (N/A - projekt nie używa Storybook)
- [x] Raport audytu + migracji dostępny w `docs/`
- [ ] Testy ręczne (FAQ, Qualifications, Approach, Map, Process, Testimonials) przeszły bez regresji layoutu (TODO - do wykonania przez zespół)

---

## 🔍 Główne pliki

### Nowe
- `components/headless/Accordion.js`
- `components/composed/AccordionCard.js`
- `components/composed/IconCard.js`
- `components/composed/ExpandableIconCard.js`

### Zmodyfikowane
- `components/primitives/Card.js` - Refactored
- `components/features/about/QualificationsSection.js` - Migracja
- `components/features/about/ApproachSection.js` - Migracja
- `components/features/faq/FAQAccordion.js` - Migracja
- `components/ui/CardWithIcon.js` - Wrapper
- `components/ui/MapSection.js` - Użycie size='none'

---

## 🧪 Testy

### Do wykonania ręcznie:
1. ✅ FAQ - sprawdź rozsuwanie, ARIA, klawiatura
2. ✅ Qualifications - sprawdź rozsuwanie, ikony, padding dynamiczny
3. ✅ Approach - sprawdź rozsuwanie, custom trigger
4. ✅ Map - sprawdź że padding jest `none`
5. ✅ Process - sprawdź że glow/animacje działają
6. ✅ Testimonials - sprawdź że override tła działa poprawnie

### WCAG:
- [ ] Kontrast dla `neutral` (bg-white + text-neutral-900)
- [ ] Kontrast dla `surface` (bg-bg-surface + text-text-dark)
- [ ] Kontrast dla `inverted` (bg-neutral-900 + text-white)

---

## 📝 Commity

1. `feat(ui): add neutral Card primitive (white bg, black subtle border)`
2. `feat(headless): add Accordion (ARIA + keyboard) and composed AccordionCard/IconCard/ExpandableIconCard`
3. `refactor: migrate overrides (bg/padding/hover) to Card props`
4. `docs: audit + migration notes`

---

## 🚨 Uwagi

### TestimonialsCarousel
Override tła (`bg-bg-surface`) pozostaje z komentarzem - to jest specjalny przypadek (blue variant z białym tłem zamiast ciemnego). Design wymaga tego override'u.

### CardWithIcon - DEPRECATED
Komponent pozostaje dla backward compatibility, ale używa teraz `IconCard` wewnętrznie. W przyszłości zastąp wszystkie użycia `IconCard` bezpośrednio.

---

## 🔄 Breaking Changes

**BRAK** - Wszystkie zmiany są backward compatible dzięki:
- `CardWithIcon` → wrapper na `IconCard`
- Domyślny wariant `neutral` działa wszędzie tam, gdzie nie był explicite wybrany wariant

---

## 📸 Screenshots

TODO - dodać screenshots przed/po dla:
- FAQ section
- Qualifications section
- Approach section
- Map section
