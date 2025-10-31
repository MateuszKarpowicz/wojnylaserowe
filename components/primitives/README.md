# Primitives

Niskopoziomowe komponenty podstawowe - fundament systemu komponentów.

## 🎯 Cel

Komponenty w tym folderze to **atomowe, reużywalne elementy** bez logiki biznesowej. Są to
podstawowe bloki budulcowe, z których składają się wszystkie inne komponenty.

## 📋 Zasady

- ✅ **Zero zależności** - nie mogą importować z `ui/`, `features/`, `layout/`
- ✅ **Tylko props** - w pełni kontrolowane przez props, bez logiki biznesowej
- ✅ **Design tokens** - używają tokenów z `tailwind.config.js`
- ✅ **CVA** - używają `class-variance-authority` dla wariantów
- ✅ **Reużywalność** - mogą być używane w każdym miejscu aplikacji

## 📦 Komponenty

### `Button.js`

Uniwersalny komponent przycisku z wariantami (neonBlue, neonPurple, section, ctaBlue, ctaPurple,
offer, link). Obsługuje renderowanie jako button, link (Next.js Link) lub custom element.

### `Card.js`

Komponent karty z wariantami ramek neonowych (blue, purple). Automatycznie dostosowuje style do tła.

### `Section.js`

Komponent sekcji z automatycznym paddingiem, kontenerem, opcjonalnym nagłówkiem i wsparciem dla
różnych wariantów tła.

### `Container.js`

Komponent kontenera z ograniczoną szerokością (md, lg, xl, 2xl, full).

### `SectionHeader.js`

Nagłówek sekcji z wariantami kolorów (light/dark) i opcjonalnym podtytułem.

### `ImageFrame.js`

Wraper dla obrazów z obsługą różnych aspect ratios.

### `BaseSectionWithHeader.js`

Bazowy komponent sekcji z nagłówkiem (używany przez `Section.js`).

## 🔄 Importy

**DOZWOLONE:**

- `lib/utils` - utility functions (np. `cn`)
- `lib/fonts` - fonty
- Biblioteki zewnętrzne (react, next, class-variance-authority)

**ZABRONIONE:**

- `components/ui/` ❌
- `components/features/` ❌
- `components/layout/` ❌

## 📖 Przykład użycia

```javascript
import { Button, Card, Section } from '@/components/primitives';

export default function MyComponent() {
  return (
    <Section bg='dark' title='Tytuł sekcji'>
      <Card variant='blue'>
        <p>Treść karty</p>
        <Button variant='neonBlue'>Kliknij</Button>
      </Card>
    </Section>
  );
}
```

## 🎨 Stylowanie

Primitives używają:

- Design tokens z `tailwind.config.js`
- Utility classes z `app/globals.css` (np. `.btn-base`, `.card-with-border-blue`)
- CVA dla dynamicznych wariantów

Zobacz też: [ARCHITECTURE.md](../../ARCHITECTURE.md)
