# STYLE_GUIDE.md - Przewodnik Stylu Kodowania

## 📋 **PRZEGLĄD**

Ten dokument zawiera konwencje stylu kodowania, nazewnictwa i organizacji dla projektu Wojny Laserowe.

## 🎨 **ORGANIZACJA KOMponentÓW**

### **Struktura folderów**

```
components/
├── primitives/     # Komponenty bazowe, niskopoziomowe, reusable
│   ├── Button.js
│   ├── Card.js
│   ├── Container.js
│   ├── ImageFrame.js
│   ├── Section.js
│   ├── SectionHeader.js
│   ├── BaseSectionWithHeader.js
│   └── index.js
├── layout/         # Komponenty layoutu (Header, Footer, MobileMenu)
│   ├── Header.js
│   ├── Footer.js
│   └── index.js
├── forms/          # Komponenty formularzy
│   ├── FormCore.js
│   ├── FormField.js
│   └── index.js
├── features/       # Komponenty specyficzne dla feature'ów
│   ├── contact/
│   ├── about/
│   ├── effects/
│   └── faq/
├── ui/             # Generic UI components (reusable across features)
│   ├── LoadingSpinner.js
│   ├── StatusMessage.js
│   ├── CTASection.js
│   └── ...
├── hooks/          # Custom React hooks
├── context/        # React Context providers
├── overlay/        # Modals, drawers, popovers
└── utils/          # Utility components (ErrorBoundary, etc.)
```

### **Kiedy używać którego folderu?**

- **`primitives/`**: Komponenty bazowe, które są używane w całym projekcie. Niskie abstrakcje, wysoka reużywalność.
- **`layout/`**: Komponenty strukturalne strony (Header, Footer, Navigation).
- **`forms/`**: Wszystkie komponenty związane z formularzami.
- **`features/{feature-name}/`**: Komponenty specyficzne dla konkretnej funkcjonalności (np. ContactForm tylko dla strony kontaktowej).
- **`ui/`**: Generic komponenty UI, które mogą być używane w różnych miejscach, ale nie są na tyle niskopoziomowe, aby być w primitives.
- **`utils/`**: Komponenty pomocnicze (ErrorBoundary, debug components).

## 📝 **KONWENCJE NAZEWNICTWA**

### **Komponenty**

- **PascalCase** dla nazw komponentów: `ContactForm`, `HeaderActions`
- **Pliki komponentów**: PascalCase z `.js` rozszerzeniem: `ContactForm.js`
- **Foldery komponentów**: `kebab-case` dla feature folders: `contact-form/`

### **Zmienne i funkcje**

- **camelCase** dla zmiennych i funkcji: `handleSubmit`, `formData`
- **PascalCase** tylko dla komponentów React

### **Stałe**

- **UPPER_SNAKE_CASE** dla stałych globalnych: `MAX_FILE_SIZE`
- **camelCase** dla stałych lokalnych: `defaultValues`

### **Pliki**

- **kebab-case** dla plików konfiguracyjnych: `tailwind.config.js`
- **PascalCase** dla komponentów React

## 🎯 **STRUKTURA KOMponentU**

### **Standardowa struktura komponentu**

```javascript
/**
 * ComponentName - Krótki opis komponentu
 *
 * Dłuższy opis, jeśli potrzebny. Wyjaśnia, co komponent robi,
 * jakie problemy rozwiązuje, lub jak jest używany.
 *
 * @param {type} propName - Opis prop
 * @returns {JSX.Element} Opis zwracanego elementu
 */
'use client'; // Tylko jeśli komponent używa client-side features

import { ... } from '@/components/primitives';
import { ... } from '@/components/forms';

export default function ComponentName({
  prop1 = 'default',
  prop2,
  className = '',
  ...props
}) {
  // Hooks
  const [state, setState] = useState();

  // Handlers
  const handleClick = () => {
    // ...
  };

  // Render
  return (
    <div className={className} {...props}>
      {/* ... */}
    </div>
  );
}
```

### **Kolejność w komponencie**

1. JSDoc comment
2. `'use client'` directive (jeśli potrzebne)
3. Imports (grouped: primitives, features, ui, lib, external)
4. Component function
5. State hooks
6. Effect hooks
7. Handlers
8. Render logic
9. Return JSX

## 🔗 **IMPORTY**

### **Kolejność importów**

```javascript
// 1. React i Next.js
import { useState } from 'react';
import Image from 'next/image';

// 2. Primitive components (z index exports)
import { Button, Card, Section } from '@/components/primitives';

// 3. Feature components
import { ContactForm } from '@/components/features/contact';

// 4. UI components
import { StatusMessage } from '@/components/ui';

// 5. Forms
import { FormCore } from '@/components/forms';

// 6. Layout
import { Header } from '@/components/layout';

// 7. Hooks
import { useSecureFormSubmit } from '@/components/hooks';

// 8. Context
import { useOferta } from '@/components/context/OfertaContext';

// 9. Libraries
import { logger } from '@/lib/logger';

// 10. Content/Data
import contactData from '@/content/texts/contact-page.json';

// 11. Styles (na końcu)
import './styles.css';
```

### **Zawsze używaj index exports**

✅ **DOBRE:**
```javascript
import { Button, Card } from '@/components/primitives';
import { ContactForm } from '@/components/features/contact';
```

❌ **ZŁE:**
```javascript
import Button from '@/components/primitives/Button';
import ContactForm from '@/components/features/contact/ContactForm';
```

## 🎨 **STYLE I CSS**

### **Używanie Tailwind**

- **Zawsze preferuj Tailwind utilities** zamiast custom CSS
- **Używaj design tokens** z `tailwind.config.js` zamiast hardcoded wartości
- **Używaj `clsx`** dla dynamicznych klas zamiast `.join(' ')`

✅ **DOBRE:**
```javascript
import clsx from 'clsx';

const classes = clsx('base-class', {
  'active-class': isActive,
  'disabled-class': isDisabled,
});
```

❌ **ZŁE:**
```javascript
const classes = ['base-class', isActive && 'active-class'].filter(Boolean).join(' ');
```

### **Design Tokens**

Używaj tokenów z `tailwind.config.js`:
- Kolory: `neon-blue`, `bg-surface`, `text-secondary`
- Shadows: `shadow-glow`, `shadow-glow-purple-expanded`
- Spacing: używaj Tailwind utilities (`p-4`, `mb-6`)
- Z-index: `z-header`, `z-modal`

### **NIE używaj**

- ❌ Hardcoded wartości RGBA w komponentach
- ❌ Inline styles (chyba że absolutnie konieczne)
- ❌ `!important` (tylko w specjalnych przypadkach, np. `prefers-reduced-motion`)

## 🧩 **ABSTRAKCJA I REUŻYWALNOŚĆ**

### **Poziomy abstrakcji**

1. **Primitives** - najniższy poziom, maksymalna reużywalność
2. **UI Components** - generic, mogą być używane w różnych kontekstach
3. **Feature Components** - specyficzne dla konkretnej funkcjonalności
4. **Page Components** - kompozycja komponentów dla konkretnej strony

### **Kiedy tworzyć nowy komponent?**

- Gdy kod się powtarza **3+ razy**
- Gdy komponent ma **jasno określoną odpowiedzialność**
- Gdy komponent **może być przetestowany niezależnie**

### **Kiedy NIE tworzyć nowego komponentu?**

- Gdy używasz kodu tylko **1-2 razy**
- Gdy abstrakcja **nie dodaje wartości**
- Gdy komponent będzie **zbyt specyficzny**

## 📦 **PROPS I STATE**

### **Naming props**

- **camelCase** dla props: `isLoading`, `onSubmit`
- **Boolean props**: używaj prefiksu `is`, `has`, `should`: `isOpen`, `hasError`
- **Event handlers**: prefiks `on`: `onClick`, `onSubmit`
- **Render props**: `children`, `renderContent`

### **Default props**

Zawsze ustawiaj domyślne wartości w parametrach funkcji:

```javascript
export default function Button({
  variant = 'blue',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  // ...
}
```

## ♿ **ACCESSIBILITY**

### **Wymagane praktyki**

- Używaj **semantic HTML** (`<button>`, `<nav>`, `<header>`)
- Zawsze dodawaj **aria labels** dla ikon i elementów interaktywnych
- Używaj **aria-expanded**, **aria-controls** dla accordions
- Dodawaj **role attributes** gdzie potrzebne
- Używaj **keyboard navigation** (Enter, Space, Tab)
- Implementuj **focus management**

### **Przykład**

```javascript
<button
  onClick={handleClick}
  aria-label="Zamknij menu"
  aria-expanded={isOpen}
  aria-controls="menu-panel"
>
  <Icon aria-hidden="true" />
</button>
```

## 🧪 **TESTING**

### **Struktura testów**

- Pliki testowe: `ComponentName.test.js`
- Lokalizacja: obok komponentu lub w `__tests__/`

### **Naming testów**

```javascript
describe('ComponentName', () => {
  it('renders correctly with default props', () => {});
  it('handles user interaction', () => {});
  it('displays error state', () => {});
});
```

## 📚 **DOKUMENTACJA**

### **JSDoc dla komponentów**

Każdy komponent powinien mieć JSDoc z:
- Krótkim opisem
- Parametrami (`@param`)
- Zwracaną wartością (`@returns`)
- Przykładem użycia (jeśli potrzebne)

### **Komentarze w kodzie**

- **Dlaczego**, nie "co" - kod powinien być samowyjaśniający
- Komentarze dla **skomplikowanej logiki biznesowej**
- Komentarze dla **workaroundów** lub **hacków**

## 🔄 **GIT I COMMITS**

### **Konwencje commitów**

Używamy [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Typy:
- `feat`: Nowa funkcja
- `fix`: Naprawa błędu
- `refactor`: Refaktoryzacja
- `style`: Zmiany stylistyczne (formatowanie)
- `docs`: Dokumentacja
- `test`: Testy
- `chore`: Zadania pomocnicze

### **Przykłady**

```
feat(contact): dodaj walidację formularza
fix(header): napraw z-index mobile menu
refactor(components): reorganizacja struktury folderów
docs(style-guide): aktualizuj konwencje importów
```

## ✅ **CHECKLIST PRZED COMMITEM**

- [ ] Kod jest zgodny z tym style guide
- [ ] Wszystkie importy używają index exports
- [ ] Użyto design tokens zamiast hardcoded wartości
- [ ] Accessibility jest zachowana
- [ ] ESLint nie zgłasza błędów
- [ ] Prettier sformatował kod
- [ ] JSDoc jest zaktualizowane
- [ ] Testy przechodzą (jeśli istnieją)

---

**Ostatnia aktualizacja:** 2025-01-29
