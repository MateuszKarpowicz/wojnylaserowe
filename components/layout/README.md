# Layout

Komponenty układu strony - struktura najwyższego poziomu (Header, Footer).

## 🎯 Cel

Komponenty w tym folderze definiują **strukturę strony**:
- Są częścią layoutu aplikacji (`app/layout.js`)
- Wyświetlają się na każdej stronie
- Zawierają nawigację i elementy globalne
- Nie mają logiki biznesowej specyficznej dla features

## 📦 Komponenty

### `Header.js`

Główny nagłówek strony z:
- Logo
- Nawigacją
- Akcjami (przyciski, menu)
- Responsywnym menu mobilnym

### `Footer.js`

Stopka strony z:
- Linkami nawigacyjnymi
- Informacjami kontaktowymi
- Social media
- Copyright

### `HeaderActions.js`

Akcje w headerze (przyciski, menu).

### `HeaderLogo.js`

Logo w headerze.

### `MobileMenu.js`

Menu mobilne (hamburger menu).

## 🔄 Importy

**DOZWOLONE:**
- `components/primitives/` ✅
- `components/ui/` ✅ (np. SocialMediaIcons)
- `components/context/` ✅ (np. OfertaContext dla modala)
- `lib/utils`, `lib/fonts` ✅
- Biblioteki zewnętrzne ✅

**ZABRONIONE:**
- `components/features/` ❌ (layout nie powinien mieć logiki biznesowej)

## 📖 Użycie

Komponenty layout są używane w `app/layout.js`:

```javascript
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

## 🎨 Style

- Header jest `fixed` na górze strony
- Używa `z-header` z `tailwind.config.js`
- Ma wysokość `h-header` (4.5rem)
- Main content ma `pt-header` dla kompensacji fixed header

## 🔄 Context

Layout komponenty mogą używać Context:
- `OfertaContext` - dla modala oferty (otwieranego z headera)

Zobacz też: [ARCHITECTURE.md](../../ARCHITECTURE.md)
