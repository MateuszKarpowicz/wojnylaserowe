# Features

Komponenty specyficzne dla konkretnych funkcjonalności/stron - komponenty z logiką biznesową.

## 🎯 Cel

Komponenty w tym folderze to **komponenty najwyższego poziomu** dla konkretnych funkcjonalności:
- Są powiązane z konkretnymi stronami lub sekcjami
- Mają logikę biznesową specyficzną dla domeny
- Są używane głównie w jednym miejscu
- Organizowane według funkcjonalności, nie typu komponentu

## 📁 Struktura

```
features/
├── about/           # Komponenty strony "O nas"
├── contact/          # Komponenty formularza kontaktowego
├── effects/          # Komponenty galerii efektów
├── faq/             # Komponenty FAQ
└── landing/         # Komponenty strony głównej
```

Każdy feature ma swój folder z `index.js` eksportującym główne komponenty.

## 📋 Zasady

- ✅ **Importują z primitives i ui** - używają niższych warstw
- ✅ **Logika biznesowa** - mają logikę specyficzną dla domeny
- ✅ **Powiązane z stronami** - każdy feature odpowiada konkretnej stronie/sekcji
- ✅ **Index exports** - każdy folder ma `index.js` z eksportami

## 📦 Feature: About (`features/about/`)

Komponenty strony "O nas":
- `AboutHero.js` - Hero sekcja
- `AboutHeroSlider.js` - Slider w hero
- `ApproachSection.js` - Sekcja podejścia (z akordeonem)
- `AftercareSection.js` - Sekcja opieki po zabiegu
- `CoolingSection.js` - Sekcja chłodzenia
- `HowItWorksSection.js` - Sekcja "Jak to działa"
- `MethodSection.js` - Sekcja metody
- `QualificationsSection.js` - Sekcja kwalifikacji
- `TargetSection.js` - Sekcja celu

## 📦 Feature: Contact (`features/contact/`)

Komponenty formularza kontaktowego:
- `ContactForm.js` - Główny formularz kontaktowy
- `ContactFormSection.js` - Sekcja z formularzem
- `ContactHeader.js` - Nagłówek strony kontaktowej
- `ContactChannelsColumn.js` - Kolumna z kanałami kontaktu
- `ContactDrawer.js` - Drawer z formularzem (jeśli używany)

## 📦 Feature: Effects (`features/effects/`)

Komponenty galerii efektów:
- `EffectsCarousel.js` - Karuzela efektów na stronie głównej
- `EffectsGallery.js` - Główna galeria efektów
- `EffectsGalleryClient.js` - Client-side wrapper dla galerii
- `EffectsGallerySection.js` - Sekcja z galerią
- `EffectsHeader.js` - Nagłówek strony efektów
- `EffectTile.js` - Pojedyncza kafelka efektu

## 📦 Feature: FAQ (`features/faq/`)

Komponenty FAQ:
- `FAQAccordion.js` - Pojedynczy akordeon pytania
- `FAQCategorySection.js` - Sekcja kategorii FAQ
- `FAQContentSection.js` - Główna sekcja z kategoriami

## 📦 Feature: Landing (`features/landing/`)

Komponenty strony głównej:
- `ProcessSectionLanding.js` - Sekcja procesu na stronie głównej

## 🔄 Importy

**DOZWOLONE:**
- `components/primitives/` ✅
- `components/ui/` ✅
- `components/forms/` ✅ (dla formularzy)
- `components/hooks/` ✅ (dla logiki)
- `components/context/` ✅ (dla kontekstu)
- `lib/utils`, `lib/validation` ✅
- `content/texts/` ✅

**DOZWOLONE (z ostrożnością):**
- Inne `features/` ✅ (ale unikać cyklicznych zależności)

**ZABRONIONE:**
- `components/layout/` ❌ (layout nie ma logiki biznesowej)

## 📖 Przykład użycia

```javascript
import { Section } from '@/components/primitives';
import { ApproachSection, QualificationsSection } from '@/components/features/about';
import aboutPageData from '@/content/texts/about-page.json';

export default function AboutPage() {
  return (
    <>
      <Section bg="surface">
        <ApproachSection data={aboutPageData} />
      </Section>
      <QualificationsSection data={aboutPageData.qualifications} />
    </>
  );
}
```

## 🎯 Index exports

Każdy feature powinien mieć `index.js` eksportujący główne komponenty:

```javascript
// features/about/index.js
export { default as ApproachSection } from './ApproachSection';
export { default as QualificationsSection } from './QualificationsSection';
// ...
```

Wtedy można importować:
```javascript
import { ApproachSection, QualificationsSection } from '@/components/features/about';
```

## 🔄 Kiedy tworzyć nowy feature?

Utwórz nowy feature, gdy:
- Masz grupę komponentów powiązanych z jedną stroną/funkcjonalnością
- Komponenty mają wspólną logikę biznesową
- Komponenty nie pasują do istniejących features

Zobacz też: [ARCHITECTURE.md](../../ARCHITECTURE.md)
