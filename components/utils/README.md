# Utils

Komponenty utility - pomocnicze komponenty (ErrorBoundary, debug tools).

## 🎯 Cel

Komponenty w tym folderze to **komponenty pomocnicze** używane w całej aplikacji:
- Error boundaries
- Debug tools
- Utility components

## 📦 Komponenty

### `ErrorBoundary.js`

React Error Boundary do przechwytywania błędów w komponentach:
- Wyświetla komunikat błędu zamiast crash całej aplikacji
- Loguje błędy do konsoli
- Używany w `app/layout.js` do zabezpieczenia całej aplikacji

**Użycie:**
```javascript
import ErrorBoundary from '@/components/utils/ErrorBoundary';

<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

### `OverflowDebug.js`

Debug component do wizualizacji elementów wykraczających poza viewport:
- Tylko w development (`NODE_ENV !== 'production'`)
- Pokazuje czerwone ramki na elementach z `data-overflow="true"`
- Używany w `app/layout.js`

**Użycie:**
```javascript
import OverflowDebug from '@/components/utils/OverflowDebug';

{process.env.NODE_ENV !== 'production' && <OverflowDebug />}
```

## 🔄 Importy

**DOZWOLONE:**
- React (ErrorBoundary używa React.Component) ✅
- `lib/utils` ✅
- Biblioteki zewnętrzne ✅

**ZABRONIONE:**
- `components/primitives/` ❌ (utils są podstawowe)
- `components/ui/` ❌
- `components/features/` ❌

## 📖 Przykład użycia ErrorBoundary

```javascript
import ErrorBoundary from '@/components/utils/ErrorBoundary';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <ErrorBoundary>
          <main>{children}</main>
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
```

## 🎨 OverflowDebug

Aby użyć OverflowDebug, dodaj atrybut `data-overflow="true"` do elementu:

```javascript
<div data-overflow="true" className="w-[200vw]">
  {/* Element wykraczający poza viewport */}
</div>
```

W development mode zobaczysz czerwoną ramkę wokół tego elementu.

## 🔍 Uwagi

- `ErrorBoundary.js` jest w dwóch miejscach:
  - `components/ErrorBoundary.js` (legacy?)
  - `components/utils/ErrorBoundary.js` (używany)

  Rozważyć usunięcie legacy jeśli nie jest używany.

Zobacz też: [ARCHITECTURE.md](../../ARCHITECTURE.md)
