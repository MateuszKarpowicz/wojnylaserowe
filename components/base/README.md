# Komponenty Bazowe - Wojny Laserowe

## 📁 Struktura folderów

```
components/
├── base/                    # Komponenty bazowe
│   ├── index.js            # Eksport wszystkich komponentów
│   ├── BaseSection.js      # Wrapper dla sekcji
│   ├── BaseCard.js         # Karty z wariantami
│   ├── BaseForm.js         # Formularze
│   ├── BaseFormField.js    # Pola formularza
│   ├── BaseCarousel.js     # Karuzele
│   ├── BaseModal.js        # Modale
│   └── BaseAsyncComponent.js # Komponenty async
├── hooks/                   # Custom hooks
│   ├── index.js            # Eksport wszystkich hooks
│   ├── useCarousel.js      # Logika karuzeli
│   ├── useAsyncOperation.js # Logika async
│   ├── useModal.js         # Logika modali
│   └── useForm.js          # Logika formularzy
└── ui/                     # Komponenty UI (istniejące)
    ├── LoadingSpinner.js
    ├── ErrorMessage.js
    └── ErrorContainer.js
```

## 🎯 Cel

Komponenty bazowe eliminują duplikację kodu i zapewniają spójność UI poprzez:

- **Kompozycję** - komponenty strukturalne (BaseSection, BaseCard)
- **Hooks** - logika biznesowa (useCarousel, useAsyncOperation)
- **Dziedziczenie** - komponenty formularzy (BaseForm, BaseFormField)

## 📋 Plan implementacji

### Etap 1: ✅ Infrastruktura
- [x] Struktura folderów
- [x] Pliki index.js
- [x] Dokumentacja

### Etap 2: 🔄 BaseSection
- [ ] Implementacja BaseSection
- [ ] Refaktoryzacja AboutSection
- [ ] Refaktoryzacja ContactSection

### Etap 3: ⏳ BaseCard
- [ ] Implementacja BaseCard
- [ ] Refaktoryzacja WhyUsSection
- [ ] Refaktoryzacja TestimonialsSection

### Etap 4: ⏳ Custom Hooks
- [ ] Implementacja useCarousel
- [ ] Implementacja useAsyncOperation
- [ ] Refaktoryzacja EffectsSection

### Etap 5: ⏳ BaseCarousel
- [ ] Implementacja BaseCarousel
- [ ] Implementacja CarouselDots
- [ ] Refaktoryzacja TestimonialsSection

### Etap 6: ⏳ BaseForm
- [ ] Implementacja BaseForm
- [ ] Implementacja BaseFormField
- [ ] Refaktoryzacja ContactForm

### Etap 7: ⏳ BaseModal
- [ ] Implementacja BaseModal
- [ ] Implementacja useModal
- [ ] Refaktoryzacja EffectsGallery

### Etap 8: ⏳ BaseAsyncComponent
- [ ] Implementacja BaseAsyncComponent
- [ ] Refaktoryzacja pozostałych sekcji

### Etap 9: ⏳ Optymalizacja
- [ ] Optymalizacja importów
- [ ] Czyszczenie kodu
- [ ] Aktualizacja dokumentacji

### Etap 10: ⏳ Testy i walidacja
- [ ] Testy funkcjonalne
- [ ] Testy wydajności
- [ ] Finalna walidacja

## 🚀 Korzyści

- **60-70% redukcja duplikacji kodu**
- **Spójność UI/UX**
- **Łatwość utrzymania**
- **Lepsza wydajność**
- **Łatwiejsze testowanie**

## 📝 Użycie

```javascript
// Import komponentów bazowych
import { BaseSection, BaseCard, BaseForm } from '@/components/base';

// Import hooks
import { useCarousel, useAsyncOperation } from '@/components/hooks';

// Przykład użycia
function MySection() {
  return (
    <BaseSection id="my-section" className="py-8 bg-white">
      <BaseCard variant="feature">
        <h2>Moja sekcja</h2>
        <p>Treść sekcji</p>
      </BaseCard>
    </BaseSection>
  );
}
```

## 🔧 Konwencje

- **Komponenty bazowe** - PascalCase, prefiks "Base"
- **Hooks** - camelCase, prefiks "use"
- **Props** - camelCase, opisowe nazwy
- **Klasy CSS** - Tailwind CSS, spójne nazwy

## 📞 Wsparcie

W przypadku problemów lub pytań, sprawdź:
1. Dokumentację komponentów
2. Przykłady użycia
3. Testy jednostkowe
4. Konsolę przeglądarki
