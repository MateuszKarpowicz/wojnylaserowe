# Context

React Context providers dla globalnego stanu aplikacji.

## 🎯 Cel

Context providers dla stanu współdzielonego między komponentami:
- Stan modali
- Stan formularzy
- Globalne preferencje użytkownika
- Inne globalne stany

## 📦 Context Providers

### `OfertaContext.js`

Context dla modala oferty:
- Stan otwarty/zamknięty modala
- Funkcje otwierania/zamykania
- Używany przez `Header` i `OfferSlider`

**Użycie:**
```javascript
import { OfertaProvider } from '@/components/context/OfertaContext';
import { useOferta } from '@/components/context/OfertaContext';

// W layout.js
<OfertaProvider>
  {/* Aplikacja */}
</OfertaProvider>

// W komponencie
const { isOpen, open, close } = useOferta();
```

## 🔄 Importy

**DOZWOLONE:**
- React (`createContext`, `useContext`, `useState`, etc.) ✅
- `lib/utils` ✅
- Biblioteki zewnętrzne ✅

**ZABRONIONE:**
- Komponenty (context providers nie powinny importować komponentów bezpośrednio) ❌

## 📖 Struktura

Każdy context powinien mieć:
1. **Provider component** - wrapper z `Provider`
2. **Custom hook** - hook do używania contextu (np. `useOferta`)

**Przykład:**
```javascript
// OfertaContext.js
const OfertaContext = createContext();

export function OfertaProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <OfertaContext.Provider value={{ isOpen, open, close }}>
      {children}
    </OfertaContext.Provider>
  );
}

export function useOferta() {
  const context = useContext(OfertaContext);
  if (!context) {
    throw new Error('useOferta must be used within OfertaProvider');
  }
  return context;
}
```

## 🎯 Best Practices

1. **Tylko globalny stan** - używaj context tylko dla stanu współdzielonego między wieloma komponentami
2. **Custom hook** - zawsze twórz custom hook zamiast używać `useContext` bezpośrednio
3. **Error handling** - sprawdź, czy hook jest używany w Provider
4. **Performance** - rozważ `useMemo` dla wartości contextu jeśli są kosztowne

## 🔄 Tworzenie nowego contextu

1. Utwórz plik `NewContext.js` w `components/context/`
2. Utwórz Provider i custom hook
3. Dodaj Provider do `app/layout.js`
4. Używaj hooka w komponentach

Zobacz też: [ARCHITECTURE.md](../../ARCHITECTURE.md)
