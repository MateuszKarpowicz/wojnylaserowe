# Forms

Komponenty formularzy z logiką walidacji i obsługą błędów.

## 🎯 Cel

Komponenty formularzy są w osobnym folderze, ponieważ:
- Są używane w wielu miejscach aplikacji
- Mają wspólną logikę walidacji
- Są bardziej złożone niż primitives
- Potrzebują specjalnej obsługi błędów i dostępności

## 📦 Komponenty

### `FormCore.js`

Główny wrapper formularza z:
- Logiką walidacji (przy użyciu schematu z `lib/validation`)
- Obsługą stanu formularza
- Obsługą błędów pól
- Integracją z API (przez hook `useSecureFormSubmit`)
- Loading states

**Użycie:**
```javascript
<FormCore
  validationSchema={contactFormSchema}
  onSubmit={handleSubmit}
  submitText="Wyślij wiadomość"
>
  {({ formData, handleInputChange, isLoading, fieldErrors }) => (
    // Pola formularza
  )}
</FormCore>
```

### `FormField.js`

Uniwersalne pole formularza obsługujące:
- Różne typy pól (text, email, tel, textarea, select, file)
- Automatyczną walidację
- Wyświetlanie błędów
- Accessibility (aria-* attributes)
- Ciemny/jasny wariant

**Użycie:**
```javascript
<FormField
  type="email"
  name="email"
  label="Adres email"
  value={formData.email}
  onChange={handleInputChange}
  required
  error={fieldErrors?.email}
/>
```

## 🔄 Importy

**DOZWOLONE:**
- `components/primitives/` ✅ (Button dla submit)
- `lib/utils` ✅ (cn dla klas)
- `lib/validation` ✅ (schematy walidacji)
- Biblioteki zewnętrzne ✅

**ZABRONIONE:**
- `components/ui/` ❌ (formularze są bardziej podstawowe)
- `components/features/` ❌

## 🎨 Stylowanie

Formularze używają:
- Utility classes z `globals.css`:
  - `.input` - dla pól na jasnym tle
  - `.input-dark` - dla pól na ciemnym tle
  - `.input-error` - dla pól z błędami
- Design tokens z `tailwind.config.js`

## 📖 Przykład kompletnego formularza

```javascript
import FormCore from '@/components/forms/FormCore';
import FormField from '@/components/forms/FormField';
import { contactFormSchema } from '@/lib/validation';
import { useSecureFormSubmit } from '@/components/hooks';

export default function MyForm() {
  const { submitForm, isSubmitting } = useSecureFormSubmit();

  const handleSubmit = async (formData) => {
    await submitForm(formData, '/api/contact');
  };

  return (
    <FormCore
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
      submitText="Wyślij"
    >
      {({ formData, handleInputChange, fieldErrors }) => (
        <div className="space-y-4">
          <FormField
            type="text"
            name="name"
            label="Imię"
            value={formData.name}
            onChange={handleInputChange}
            required
            error={fieldErrors?.name}
          />
          {/* Więcej pól... */}
        </div>
      )}
    </FormCore>
  );
}
```

## 🔒 Bezpieczeństwo

- Formularze używają CSRF token (przez `useCsrf` hook)
- Walidacja po stronie klienta i serwera
- Sanityzacja danych przed wysłaniem

Zobacz też: [ARCHITECTURE.md](../../ARCHITECTURE.md)
