# Audyt różnic między modalem Oferty a Menu

## 🔍 **Główne różnice**

### 1. **Zarządzanie stanem**

#### **OFERTA** (Global Context)

```javascript
// components/context/OfertaContext.js
const OfertaContext = createContext(null);
const [isOpen, setIsOpen] = useState(false);
```

- ✅ **Globalny stan** - dostępny z dowolnego miejsca w app
- ✅ **Context API** - scentralizowane zarządzanie
- ✅ **Persistent** - stan nie resetuje się przy unmount

#### **MENU** (Local State)

```javascript
// components/ui/Header.js
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

- ❌ **Lokalny stan** - tylko w komponencie Header
- ❌ **Simple state** - brak kontekstu
- ❌ **Resetuje się** - przy unmount/remount Header

**PROBLEM:** Brak spójności w zarządzaniu stanem. Menu powinno też używać Context lub oba powinny
mieć lokalny stan.

---

### 2. **Pozycjonowanie i stylowanie przycisków**

#### **OFERTA Button**

```javascript
className =
  'fixed top-[calc(4.5rem-1rem)] left-0 z-button bg-neon-purple bg-opacity-90 text-white w-24 py-0.5 rounded-r-lg rounded-l-none shadow-glow-purple hover:bg-neon-purple/90 transition-colors duration-300 flex items-center justify-center focus-ring';
```

- Pozycja: **LEFT** (left-0)
- Kolor: **neon-purple** (#C084FC)
- Shadow: **shadow-glow-purple**
- Border radius: **rounded-r-lg rounded-l-none** (prawy zaokrąglony)

#### **MENU Button**

```javascript
className =
  'fixed top-[calc(4.5rem-1rem)] right-0 z-button bg-neon-blue bg-opacity-90 text-white w-24 py-0.5 rounded-l-lg rounded-r-none shadow-glow hover:bg-neon-blue/90 transition-colors duration-300 flex items-center justify-center focus-ring';
```

- Pozycja: **RIGHT** (right-0)
- Kolor: **neon-blue** (#0099CC)
- Shadow: **shadow-glow**
- Border radius: **rounded-l-lg rounded-r-none** (lewy zaokrąglony)

**✅ KONSYSTENTNE** - Symetryczne ułożenie i różne kolory dla rozróżnienia.

---

### 3. **Pozycjonowanie i konfiguracja Modal**

#### **OFERTA Modal**

```javascript
<Modal
  isOpen={isOpen}
  onClose={toggleSlider}
  variant='drawer'
  position='left'
  width='w-1/2'
  className='bg-modal shadow-2xl'
/>
```

- Position: **LEFT** (od lewej strony)
- Width: **w-1/2** (50% szerokości)
- Border: **border-r border-neon-purple/30** (prawa krawędź, fioletowy)
- **BRAK** ariaLabelledBy

#### **MENU Modal**

```javascript
<Modal
  isOpen={isMenuOpen}
  onClose={() => setIsMenuOpen(false)}
  variant='drawer'
  position='right'
  width='w-1/2'
  className='bg-modal shadow-2xl'
  ariaLabelledBy='mobile-menu-title'
/>
```

- Position: **RIGHT** (od prawej strony)
- Width: **w-1/2** (50% szerokości)
- Border: **border-l border-neon-blue/30** (lewa krawędź, niebieski)
- **MA** ariaLabelledBy='mobile-menu-title'

**PROBLEM:** Menu ma `ariaLabelledBy='mobile-menu-title'` ale w JSX nie ma elementu z
`id='mobile-menu-title'`!

---

### 4. **Funkcja onClose**

#### **OFERTA**

```javascript
const toggleSlider = () => {
  if (isOpen) {
    close();
    setSelectedOption(null); // Reset stanu
    setError(null); // Reset błędów
  } else {
    close(); // Modal otwierany przez Header - tu tylko zamykamy
  }
};
```

- ✅ **Reset wewnętrznego stanu** (selectedOption, error)
- ✅ **Czyszczenie formularza**

#### **MENU**

```javascript
onClose={() => setIsMenuOpen(false)}
```

- ❌ **Brak czyszczenia stanu** (ale nie ma stanu do czyszczenia)
- ✅ **Proste zamknięcie**

**✅ KONSYSTENTNE** - Różne zachowania są uzasadnione (Oferta ma stan, Menu nie).

---

### 5. **Wewnętrzny stan komponentów**

#### **OFERTA Modal** (OfferSlider.js)

```javascript
const [selectedOption, setSelectedOption] = useState(null);
const [error, setError] = useState(null);
```

- ✅ **Wieloetapowy workflow** (wybór opcji → formularz)
- ✅ **Obsługa błędów**
- ✅ **Formularz z walidacją**

#### **MENU Modal**

```javascript
// Brak wewnętrznego stanu
```

- ✅ **Prosta lista linków**
- ✅ **Brak stanu** - nie jest potrzebny

**✅ KONSYSTENTNE** - Różne potrzeby, różne implementacje.

---

### 6. **Zamykanie modala**

#### **OFERTA**

- ✅ ESC key (Modal.js)
- ✅ Overlay click (Modal.js)
- ✅ Po submit formularza (automatycznie)
- ✅ Przycisk "Wróć" (goBack)

#### **MENU**

- ✅ ESC key (Modal.js)
- ✅ Overlay click (Modal.js)
- ✅ Kliknięcie linku (onClick={() => setIsMenuOpen(false)})

**✅ KONSYSTENTNE** - Oba mają ESC i overlay click. Oferta ma dodatkowe sposoby (submit, goBack).

---

### 7. **Accessibility (a11y)**

#### **OFERTA**

```javascript
// BRAK ariaLabelledBy
// BRAK aria-label na przycisku OFERTA
```

- ❌ **Brak aria-label** na przycisku
- ❌ **Brak ariaLabelledBy** w Modal
- ✅ Focus trap (Modal.js)
- ✅ ESC handler (Modal.js)

#### **MENU**

```javascript
aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
aria-expanded={isMenuOpen}
aria-controls='mobile-menu'
ariaLabelledBy='mobile-menu-title'
```

- ✅ **Mają aria-label** na przycisku
- ✅ **Mają aria-expanded**
- ✅ **Mają aria-controls**
- ⚠️ **Mają ariaLabelledBy** ale brak elementu z ID!
- ✅ Focus trap (Modal.js)
- ✅ ESC handler (Modal.js)

**PROBLEM:**

1. OFERTA brakuje aria-label
2. MENU ma ariaLabelledBy='mobile-menu-title' ale nie ma elementu z tym ID

---

### 8. **Body scroll lock**

Oba modale używają tej samej logiki z Modal.js:

```javascript
if (variant !== 'drawer' || fullscreen) {
  document.body.style.overflow = 'hidden';
}
```

**PROBLEM:** Oba są drawer i NIE mają fullscreen=true, więc **NIE BLOKUJĄ scroll body**!

**⚠️ TO MOŻE BYĆ PROBLEM:** Gdy modal jest otwarty, użytkownik może scrollować stronę w tle.

---

### 9. **Portal rendering**

Oba renderują przez Portal w Header.js:

```javascript
createPortal(<button ...>, document.body)
```

Modal też renderuje przez Portal (w Modal.js):

```javascript
createPortal(drawerContent, document.body);
```

**✅ KONSYSTENTNE** - Oba używają Portali poprawnie.

---

## 📋 **Wnioski i rekomendacje**

### ❌ **PROBLEMY DO NAPRAWY:**

1. **Accessibility - OFERTA button:**

   ```javascript
   // DODAJ:
   aria-label={isOfertaOpen ? 'Zamknij ofertę' : 'Otwórz ofertę'}
   aria-expanded={isOfertaOpen}
   ```

2. **Accessibility - MENU Modal:**

   ```javascript
   // DODAJ element z ID lub USUŃ ariaLabelledBy:
   <h2 id='mobile-menu-title' className='sr-only'>
     Menu nawigacyjne
   </h2>;
   // LUB
   ariaLabelledBy = { undefined }; // Usuń
   ```

3. **Body scroll lock:**

   ```javascript
   // W Modal.js - drawer BLOKUJE scroll (bezpieczniejsze):
   if (variant === 'drawer' && !fullscreen) {
     document.body.style.overflow = 'hidden'; // BLOKUJ
   }
   ```

4. **Spójność zarządzania stanem:**
   - **Opcja A:** Stwórz MenuContext (zgodnie z OfertaContext)
   - **Opcja B:** Przenieś stan Menu do Context (MenuContext)
   - **Opcja C:** Zostaw jak jest (Menu jest prostsze, nie potrzebuje Context)

### ✅ **CO DZIAŁA DOBRZE:**

- Symetryczne pozycjonowanie przycisków
- Różne kolory dla rozróżnienia
- Portal rendering działa poprawnie
- Focus trap i ESC handling
- Logiczna struktura kodu

---

## 🎯 **Priorytety naprawy**

1. **WYSOKI:** Accessibility - dodać aria-label do OFERTA button
2. **WYSOKI:** Accessibility - naprawić lub usunąć ariaLabelledBy w MENU
3. **ŚREDNI:** Body scroll lock - zablokować scroll gdy drawer otwarty
4. **NISKI:** Spójność stanu - rozważyć MenuContext (opcjonalne)
