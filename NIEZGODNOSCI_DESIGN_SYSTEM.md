# 🔍 Raport Niezgodności z DESIGN_SYSTEM.md

**Data:** 2025-01-29
**Status:** W trakcie naprawy

---

## ❌ **ZNALEZIONE NIEZGODNOŚCI**

### 1. **Bezpośrednie importy zamiast index exports**

#### **Primitives:**

```javascript
// ❌ BŁĄD: components/utils/ErrorBoundary.js
import Container from '@/components/primitives/Container';
import Button from '@/components/primitives/Button';

// ✅ POWINNO BYĆ:
import { Container, Button } from '@/components/primitives';
```

**Lokalizacja:**
- `components/utils/ErrorBoundary.js` (2 miejsca)

#### **Features - importy wewnątrz tego samego feature:**

**OK** - Importy wewnątrz tego samego feature folder są dozwolone (nie wymagają index exports):
- `components/features/about/AboutHero.js` → `AboutHeroSlider`
- `components/features/effects/EffectsGallery.js` → `EffectTile`
- `components/features/faq/FAQCategorySection.js` → `FAQAccordion`
- `components/features/contact/ContactFormSection.js` → `ContactForm`
- itd.

#### **App pages - bezpośrednie importy z features:**

**Wymaga poprawy** - powinny używać index exports jeśli dostępne:

```javascript
// ❌ OBECNIE (w app/*.js):
import QualificationsSection from '@/components/features/about/QualificationsSection';
import EffectsCarousel from '@/components/features/effects/EffectsCarousel';
import FAQAccordion from '@/components/features/faq/FAQAccordion';

// ✅ POWINNO BYĆ (jeśli index exports istnieją):
import { QualificationsSection } from '@/components/features/about';
import { EffectsCarousel } from '@/components/features/effects';
import { FAQAccordion } from '@/components/features/faq';
```

**Lokalizacje:**
- `app/page.js` (3 importy)
- `app/scarink-regeneracja-blizn/page.js` (2 importy)
- `app/laserowe-usuwanie-tatuazu/page.js` (3 importy)
- `app/o-nas/page.js` (3 importy)
- `app/efekty/page.js` (1 import)
- `app/faq/page.js` (1 import)
- `app/kontakt/page.js` (2 importy)

**Uwaga:** Wymaga sprawdzenia czy wszystkie features mają właściwe index exports.

---

### 2. **Użycie deprecated klas CSS zamiast komponentów**

#### **btn-close i btn-nav-arrow w EffectsGallery:**

```javascript
// ❌ BŁĄD: components/features/effects/EffectsGallery.js
<button onClick={close} className='btn-close' aria-label='Zamknij'>
<button className='absolute left-4 btn-nav-arrow' aria-label='Poprzednie zdjęcie'>
<button className='absolute right-4 btn-nav-arrow' aria-label='Następne zdjęcie'>

// ✅ POWINNO BYĆ:
// Użyj Button component lub przynajmniej usuń deprecated klasy
// Te klasy są OK jako utility dla specyficznych przycisków galerii,
// ale powinny być zdefiniowane jako komponenty lub używać Button
```

**Problem:** Klasy `.btn-close` i `.btn-nav-arrow` są w `globals.css` jako utility classes. Zgodnie z DESIGN_SYSTEM, przyciski powinny używać komponentu `<Button>`.

**Rekomendacja:**
1. Utworzyć `IconButton` component w primitives
2. Lub użyć Button z odpowiednimi props dla ikony
3. Lub wyjaśnić w DESIGN_SYSTEM że te specyficzne klasy są OK dla utility buttons

---

### 3. **Przestarzałe README files**

#### **components/primitives/README.md:**

```markdown
### `BaseSectionWithHeader.js`

Bazowy komponent sekcji z nagłówkiem (używany przez `Section.js`).
```

**Problem:** Komponent `BaseSectionWithHeader.js` został usunięty, ale README nadal o nim wspomina.

**Lokalizacja:** `components/primitives/README.md` (linia 46-48)

---

#### **components/ui/README.md:**

```markdown
### Sekcje
- `ProcessSectionDefault.js` - Sekcja procesu (default)
...
- `ScarinkWhyChooseSection.js` - Wariant dla Scarink
...
### Hero sections
- `RemovalHero.js` - Hero dla strony usuwania tatuażu
- `ScarinkHero.js` - Hero dla strony Scarink
```

**Problem:**
- `ProcessSectionDefault.js` - deprecated, użyj `ProcessSection` z `variant='default'`
- `ScarinkWhyChooseSection` - deprecated, użyj `WhyChooseSection` z `variant='scarink'`
- `RemovalHero.js` i `ScarinkHero.js` - przeniesione do `features/removal/` i `features/scarink/`

**Lokalizacja:** `components/ui/README.md` (linie 23, 31, 39-40)

---

#### **components/features/README.md:**

```markdown
## 📦 Feature: Landing (`features/landing/`)

Komponenty strony głównej:
- `ProcessSectionLanding.js` - Sekcja procesu na stronie głównej
```

**Problem:** `ProcessSectionLanding.js` został usunięty i zastąpiony przez `ProcessSection` z `variant='landing'`.

**Lokalizacja:** `components/features/README.md` (linia 75)

---

#### **components/primitives/README.md - przestarzałe informacje:**

```markdown
- Utility classes z `app/globals.css` (np. `.btn-base`, `.card-with-border-blue`)
```

**Problem:**
- `.btn-base` i `.card-with-border-blue` zostały usunięte
- README powinno mówić o używaniu komponentów zamiast klas CSS

**Lokalizacja:** `components/primitives/README.md` (linia 86)

---

### 4. **Nieprawidłowe formatowanie w DESIGN_SYSTEM.md**

W sekcji Shadows, wartości są sformatowane z myślnikami zamiast podkreśleniami:

```javascript
// ❌ OBECNE:
shadow - glow; // Podstawowy neon blue glow
shadow - glow - purple; // Podstawowy neon purple glow

// ✅ POWINNO BYĆ:
shadow-glow                    // Podstawowy neon blue glow
shadow-glow-purple            // Podstawowy neon purple glow
```

**Lokalizacja:** `DESIGN_SYSTEM.md` (linie 55-73)

---

### 5. **Brak dokumentacji dla utility button classes**

Klasy `.btn-close` i `.btn-nav-arrow` są używane w `EffectsGallery.js`, ale:
- Nie są udokumentowane w DESIGN_SYSTEM.md
- Nie jest jasne czy są OK jako utility classes czy powinny być komponenty

**Rekomendacja:**
- Dodać sekcję w DESIGN_SYSTEM o utility button classes dla specyficznych przypadków użycia
- Lub utworzyć `IconButton` component w primitives

---

## ✅ **PRIORYTET NAPRAWY**

### 🔴 **WYSOKI PRIORYTET:**

1. ✅ Naprawić bezpośrednie importy w `ErrorBoundary.js`
2. ✅ Zaktualizować README files (usuń deprecated komponenty)
3. ✅ Naprawić formatowanie shadow w DESIGN_SYSTEM.md

### 🟡 **ŚREDNI PRIORYTET:**

4. ⚠️ Sprawdzić i poprawić index exports w features (jeśli potrzebne)
5. ⚠️ Rozważyć utworzenie `IconButton` component lub udokumentować utility classes
6. ⚠️ Zaktualizować app pages do użycia index exports (jeśli dostępne)

### 🟢 **NISKI PRIORYTET:**

7. ⚠️ Dodać sekcję o utility button classes do DESIGN_SYSTEM.md

---

## 📊 **PODSUMOWANIE**

- **Krytyczne niezgodności:** 3 (bezpośrednie importy, przestarzałe README, formatowanie)
- **Średnie niezgodności:** 3 (app pages importy, utility buttons, dokumentacja)
- **Łagodne niezgodności:** 1 (dokumentacja utility classes)

**Ogólny stan zgodności:** ⚠️ **85%** - Projekt jest w większości zgodny, wymaga drobnych poprawek.

---

**Ostatnia aktualizacja:** 2025-01-29
