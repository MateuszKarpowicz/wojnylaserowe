# Hooks

React hooks dla reużywalnej logiki - funkcje bez JSX.

## 🎯 Cel

Hooks w tym folderze zawierają **logikę reużywalną** używaną w wielu komponentach:
- Zarządzanie stanem
- Efekty uboczne
- Integracja z API
- Logika formularzy
- UI interactions (modal, carousel, etc.)

## 📦 Hooks

### `useModal.js`

Hook do zarządzania modalami:
- Otwieranie/zamykanie
- Stan otwarty/zamknięty
- Callbacki

### `useCsrf.js`

Hook do obsługi CSRF token:
- Pobieranie tokena
- Walidacja
- Odświeżanie

### `useOfferForm.js`

Hook do formularza oferty:
- Stan formularza
- Wybór opcji
- Resetowanie

## 🔄 Importy

**DOZWOLONE:**
- React hooks (`useState`, `useEffect`, etc.) ✅
- `lib/utils` ✅
- `lib/csrf` ✅
- Biblioteki zewnętrzne ✅

**ZABRONIONE:**
- Komponenty (hooks nie powinny renderować JSX) ❌

## 📖 Przykład użycia

```javascript
import { useModal } from '@/components/hooks';

export default function MyComponent() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Otwórz</button>
      {isOpen && (
        <Modal onClose={close}>
          {/* Treść */}
        </Modal>
      )}
    </>
  );
}
```

## 🎯 Best Practices

1. **Tylko logika** - hooks nie powinny zawierać JSX
2. **Reużywalność** - jeśli logika jest używana w 2+ miejscach, wydziel do hooka
3. **Nazewnictwo** - zawsze zaczynaj od `use` (np. `useModal`, nie `modal`)
4. **Jeden respons** - hook powinien robić jedną rzecz

## 🔄 Tworzenie nowego hooka

1. Utwórz plik `useNewHook.js` w `components/hooks/`
2. Dodaj eksport do `components/hooks/index.js`
3. Użyj w komponentach przez:
   ```javascript
   import { useNewHook } from '@/components/hooks';
   ```

Zobacz też: [ARCHITECTURE.md](../../ARCHITECTURE.md)
