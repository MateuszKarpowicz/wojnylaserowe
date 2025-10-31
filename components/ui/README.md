# UI Components

Komponenty UI reużywalne między różnymi features - komponenty złożone z primitives.

## 🎯 Cel

Komponenty w tym folderze to **komponenty UI średniego poziomu**, które:
- Składają się z komponentów `primitives/`
- Są używane w wielu miejscach aplikacji
- Nie mają logiki specyficznej dla jednej funkcjonalności
- Są bardziej złożone niż primitives, ale mniej niż features

## 📋 Zasady

- ✅ **Importują z primitives** - używają `primitives/` jako podstawy
- ✅ **Reużywalność** - używane w 2+ miejscach z różnych features
- ✅ **Proste dane** - mogą używać prostych danych z `content/`
- ✅ **Zero logiki biznesowej** - jeśli mają logikę specyficzną dla feature, należy je przenieść do `features/`

## 📦 Komponenty

### Sekcje
- `PageHeader.js` - Nagłówek strony
- `CTASection.js` - Sekcja wezwania do działania
- `ProcessSectionDefault.js` - Sekcja procesu (default)
- `StagesSection.js` - Sekcja etapów

### Karty i listy
- `CardWithIcon.js` - Karta z ikoną
- `WhyChooseSection.js` - Sekcja "Dlaczego my"
- `ScarinkWhyChooseSection.js` - Wariant dla Scarink

### Karuzele i galerie
- `TestimonialsCarousel.js` - Karuzela opinii klientów
- `TestimonialsPlaceholder.js` - Placeholder dla opinii
- `OfferSlider.js` - Slider oferty (modal)

### Hero sections
- `RemovalHero.js` - Hero dla strony usuwania tatuażu
- `ScarinkHero.js` - Hero dla strony Scarink

### Inne
- `InstagramSection.js` - Sekcja Instagram
- `MapSection.js` - Sekcja z mapą
- `LocationSection.js` - Sekcja lokalizacji
- `SocialMediaIcons.js` - Ikony social media
- `StatusMessage.js` - Komunikat statusowy (success/error)
- `LoadingSpinner.js` - Spinner ładowania
- `CopyRow.js` - Wiersz do kopiowania

## 🔄 Importy

**DOZWOLONE:**
- `components/primitives/` ✅
- `lib/utils`, `lib/fonts` ✅
- `content/texts/` ✅ (proste dane JSON)
- Biblioteki zewnętrzne ✅

**ZABRONIONE:**
- `components/features/` ❌ (unikać, chyba że absolutnie konieczne)
- `components/layout/` ❌

## 📖 Przykład użycia

```javascript
import { Section } from '@/components/primitives';
import { TestimonialsCarousel, MapSection } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <Section bg="surface">
        <TestimonialsCarousel
          items={testimonialsData.items}
          intervalMs={3000}
        />
      </Section>
      <MapSection
        studioName="STUDIO KULT"
        addressLines={['Aleja Zygmunta Krasińskiego 1', '31-111 Kraków']}
      />
    </>
  );
}
```

## 🎨 Kiedy używać ui/ vs features/?

**Do `ui/`:**
- Komponent jest używany w 2+ miejscach z różnych features
- Komponent jest generyczny (np. `TestimonialsCarousel` może być użyty na wielu stronach)
- Komponent nie ma logiki specyficznej dla domeny

**Do `features/`:**
- Komponent jest używany tylko w jednym miejscu/feature
- Komponent ma logikę specyficzną dla domeny (np. `ContactForm` z walidacją specyficzną dla kontaktu)

## 🔄 Migracja

Jeśli komponent z `ui/` zaczyna być używany tylko w jednym miejscu:
- Rozważyć przeniesienie do odpowiedniego `features/{feature-name}/`

Jeśli komponent z `features/` zaczyna być używany w wielu miejscach:
- Rozważyć przeniesienie do `ui/` (jeśli jest generyczny)
- Lub wydzielić część wspólną do `ui/`

Zobacz też: [ARCHITECTURE.md](../../ARCHITECTURE.md)
