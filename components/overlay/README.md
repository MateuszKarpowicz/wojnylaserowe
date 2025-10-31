# Overlay

Komponenty overlay - modale, drawer, popovery itp.

## 🎯 Cel

Komponenty w tym folderze to **komponenty nakładkowe** wyświetlające się nad treścią:
- Modale (centered, fullscreen, drawer)
- Dialogi potwierdzenia
- Inne elementy overlay

## 📦 Komponenty

### `Modal.js`

Uniwersalny komponent modala z trzema wariantami:

1. **`centered`** (default) - Wyśrodkowany modal z overlay
   - Przykład: Dialog potwierdzenia, formularz w modal

2. **`fullscreen`** - Pełnoekranowy modal między header a footer
   - Przykład: Pełnoekranowa galeria

3. **`drawer`** - Sidebar z prawej/lewej strony
   - Może być pełnoekranowy (`fullscreen={true}`)
   - Pozycje: `left`, `right`, `top`, `bottom`

**Użycie:**
```javascript
import Modal from '@/components/overlay/Modal';

<Modal
  isOpen={isOpen}
  onClose={close}
  variant="drawer"
  position="right"
  width="w-80"
>
  {/* Zawartość modala */}
</Modal>
```

## 🔄 Importy

**DOZWOLONE:**
- React (`useEffect`, `useRef`, `createPortal`) ✅
- `lib/utils` ✅ (cn dla klas)
- Biblioteki zewnętrzne ✅

**ZABRONIONE:**
- `components/primitives/` ❌ (overlay jest podstawowy)
- `components/ui/` ❌
- `components/features/` ❌

## 🎨 Style

Modal używa:
- Portal do renderowania poza DOM (`createPortal`)
- `z-modal` z `tailwind.config.js` (70)
- Overlay z `bg-modal` (rgba(0, 0, 0, 0.9))
- Animacje CSS dla wejścia/wyjścia

## 📖 Przykłady

### Centered Modal
```javascript
<Modal
  isOpen={isOpen}
  onClose={close}
  variant="centered"
  ariaLabelledBy="modal-title"
>
  <h2 id="modal-title">Tytuł</h2>
  <p>Treść modala</p>
</Modal>
```

### Drawer (Sidebar)
```javascript
<Modal
  isOpen={isOpen}
  onClose={close}
  variant="drawer"
  position="right"
  width="w-96"
>
  {/* Zawartość drawer */}
</Modal>
```

### Fullscreen Drawer
```javascript
<Modal
  isOpen={isOpen}
  onClose={close}
  variant="drawer"
  fullscreen={true}
>
  {/* Zawartość pełnoekranowa */}
</Modal>
```

## ♿ Accessibility

- Focus trap - focus pozostaje w modal
- ESC key zamyka modal
- `aria-labelledby` dla tytułu modala
- `role="dialog"` dla centered modala
- Backdrop kliknięcie zamyka (jeśli `closeOnOverlayClick={true}`)

Zobacz też: [ARCHITECTURE.md](../../ARCHITECTURE.md)
