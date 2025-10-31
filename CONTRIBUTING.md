# CONTRIBUTING.md - Przewodnik Współpracy

## 🤝 **WITAJ W ZESPOLE!**

Dziękujemy za zainteresowanie współpracą nad projektem Wojny Laserowe! Ten dokument zawiera
wszystkie informacje potrzebne do rozpoczęcia pracy nad projektem.

## 📋 **PRZED ROZPOCZĘCIEM**

### **Wymagania**

- Node.js 20.x lub nowszy
- npm 9.x lub nowszy
- Git
- Docker (opcjonalnie)
- Kubernetes (opcjonalnie)

### **Setup środowiska**

```bash
# 1. Fork repozytorium
git clone https://github.com/your-username/wojny-laserowe.git
cd wojny-laserowe

# 2. Instalacja zależności
npm install

# 3. Konfiguracja środowiska
cp env.example .env.local
# Edytuj .env.local z własnymi wartościami

# 4. Uruchomienie w trybie deweloperskim
npm run dev
```

## 🔄 **WORKFLOW WSPÓŁPRACY**

### **1. Tworzenie Branch**

```bash
# Pobierz najnowsze zmiany
git checkout main
git pull origin main

# Utwórz nowy branch
git checkout -b feature/nazwa-funkcji
# lub
git checkout -b bugfix/opis-błędu
# lub
git checkout -b hotfix/krytyczny-błąd
```

### **2. Konwencje nazewnictwa branch**

- `feature/nazwa-funkcji` - nowe funkcje
- `bugfix/opis-błędu` - naprawy błędów
- `hotfix/krytyczny-błąd` - krytyczne naprawy
- `refactor/nazwa-refaktoru` - refaktoryzacja
- `docs/opis-dokumentacji` - dokumentacja

### **3. Praca nad kodem**

```bash
# Rób częste commity
git add .
git commit -m "feat: dodaj nową funkcję X"

# Pushuj zmiany
git push origin feature/nazwa-funkcji
```

### **4. Tworzenie Pull Request**

1. Przejdź do GitHub
2. Kliknij "New Pull Request"
3. Wybierz swój branch
4. Wypełnij template PR
5. Dodaj reviewerów
6. Czekaj na review

## 📝 **KONWENCJE COMMITÓW**

Używamy [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format
<type>(<scope>): <description>

# Przykłady
feat(auth): dodaj logowanie przez Google
fix(api): napraw błąd walidacji email
docs(readme): zaktualizuj instrukcje instalacji
refactor(components): uprość BaseForm
test(api): dodaj testy dla endpoint contact
chore(deps): zaktualizuj Next.js do wersji 16.0.0
```

### **Typy commitów**

- `feat` - nowa funkcja
- `fix` - naprawa błędu
- `docs` - dokumentacja
- `style` - formatowanie kodu
- `refactor` - refaktoryzacja
- `test` - testy
- `chore` - zadania pomocnicze
- `perf` - optymalizacja wydajności
- `ci` - CI/CD
- `build` - build system

## 🧪 **TESTOWANIE**

### **Uruchomienie testów**

```bash
# Wszystkie testy
npm test

# Testy jednostkowe
npm run test:unit

# Testy komponentów
npm run test:components

# Testy E2E
npm run test:e2e

# Testy z coverage
npm run test:coverage
```

### **Pisanie testów**

```javascript
// Przykład testu komponentu
import { render, screen } from '@testing-library/react';
import ContactForm from '@/components/features/contact/ContactForm';

describe('ContactForm', () => {
  it('renders form fields correctly', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText('Imię i nazwisko')).toBeInTheDocument();
    expect(screen.getByLabelText('Adres email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Wyślij wiadomość' })).toBeInTheDocument();
  });
});
```

## 🎨 **STYLE I FORMATOWANIE**

### **ESLint**

```bash
# Sprawdzenie jakości kodu
npm run lint

# Automatyczne naprawy
npm run lint:fix
```

### **Prettier**

```bash
# Formatowanie kodu
npm run format

# Sprawdzenie formatowania
npm run format:check
```

### **Konwencje kodu**

- Używaj funkcji zamiast klas (gdy możliwe) - wyjątek: ErrorBoundary (wymaga class component)
- Preferuj `const` i `let` zamiast `var`
- Używaj template literals zamiast concatenation
- Nazywaj zmienne w camelCase
- Nazywaj komponenty w PascalCase
- Używaj `clsx` dla dynamicznych klas CSS
- Zawsze używaj index exports dla importów komponentów

**Szczegółowe konwencje w [STYLE_GUIDE.md](./STYLE_GUIDE.md)**

## 📁 **STRUKTURA KODU**

### **Komponenty**

```
components/
├── primitives/     # Komponenty bazowe, niskopoziomowe (Button, Card, Section)
├── layout/         # Komponenty layoutu (Header, Footer, MobileMenu)
├── forms/          # Komponenty formularzy (FormCore, FormField)
├── features/       # Komponenty specyficzne dla feature'ów
│   ├── contact/   # Komponenty strony kontaktowej
│   ├── about/      # Komponenty strony "O nas"
│   ├── effects/    # Komponenty strony efektów
│   └── faq/        # Komponenty strony FAQ
├── ui/             # Generic UI components (StatusMessage, LoadingSpinner)
├── hooks/          # Custom React hooks
├── context/        # React Context providers
├── overlay/        # Modals, drawers, popovers
└── utils/          # Utility components (ErrorBoundary, OverflowDebug)
```

**Zobacz [STYLE_GUIDE.md](./STYLE_GUIDE.md) dla szczegółowych informacji o organizacji komponentów.**

### **Strony**

```
app/
├── api/            # API endpoints
├── efekty/         # Strona z efektami
├── kontakt/        # Strona kontaktowa
├── o-nas/          # Strona o firmie
└── faq/            # Strona FAQ
```

### **Biblioteki**

```
lib/
├── validation.js   # Schematy walidacji Zod
├── csrf.js         # CSRF protection
├── env.js          # Environment validation
├── logger.js       # Logging utility
└── fonts.js        # Font configuration
```

## 🔍 **CODE REVIEW**

### **Checklist dla Reviewerów**

- [ ] Kod jest czytelny i zrozumiały
- [ ] Testy pokrywają nową funkcjonalność
- [ ] Dokumentacja jest zaktualizowana
- [ ] Nie ma duplikacji kodu
- [ ] Performance nie jest pogorszona
- [ ] Security nie jest naruszona
- [ ] Accessibility jest zachowana

### **Checklist dla Autorów**

- [ ] Kod jest przetestowany lokalnie
- [ ] Wszystkie testy przechodzą
- [ ] ESLint nie zgłasza błędów
- [ ] Prettier sformatował kod
- [ ] Commit message jest zgodny z konwencjami
- [ ] PR description jest kompletna
- [ ] Screenshots (jeśli dotyczy)

## 🐛 **RAPORTOWANIE BŁĘDÓW**

### **Template Issue**

```markdown
## Opis błędu

Krótki opis problemu

## Kroki do reprodukcji

1. Przejdź do '...'
2. Kliknij '...'
3. Zobacz błąd

## Oczekiwane zachowanie

Co powinno się stać

## Screenshots

Jeśli dotyczy, dodaj screenshots

## Środowisko

- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome, Safari, Firefox]
- Version: [e.g. 22]

## Dodatkowe informacje

Wszystko co może pomóc w rozwiązaniu problemu
```

## 💡 **PROPOZYCJE FUNKCJI**

### **Template Feature Request**

```markdown
## Opis funkcji

Krótki opis proponowanej funkcji

## Problem do rozwiązania

Jaki problem rozwiązuje ta funkcja?

## Proponowane rozwiązanie

Jak chcesz to rozwiązać?

## Alternatywy

Czy rozważałeś inne rozwiązania?

## Dodatkowe informacje

Wszystko co może pomóc w implementacji
```

## 📚 **DOKUMENTACJA**

### **Aktualizacja dokumentacji**

- README.md - główne informacje o projekcie
- CONTRIBUTING.md - ten plik
- CHANGELOG.md - historia zmian
- docs/ - szczegółowa dokumentacja

### **Pisanie dokumentacji**

- Używaj prostego języka
- Dodawaj przykłady kodu
- Używaj screenshots gdy potrzebne
- Aktualizuj dokumentację wraz z kodem

## 🚀 **DEPLOYMENT**

### **Środowiska**

- **Development** - lokalne środowisko deweloperskie
- **Staging** - środowisko testowe
- **Production** - środowisko produkcyjne

### **Proces deploymentu**

1. Kod jest mergowany do main
2. Automatyczny build i testy
3. Deployment do staging
4. Testy na staging
5. Deployment do production

## 🔒 **BEZPIECZEŃSTWO**

### **Raportowanie podatności**

Jeśli znajdziesz podatność bezpieczeństwa:

1. NIE twórz publicznego issue
2. Wyślij email na: security@wojny-laserowe.pl
3. Opisz problem szczegółowo
4. Czekaj na odpowiedź

### **Bezpieczne praktyki**

- Nigdy nie commituj secrets
- Używaj environment variables
- Waliduj wszystkie dane wejściowe
- Używaj HTTPS w produkcji
- Regularnie aktualizuj dependencies

## 📞 **KONTAKT**

### **Pytania techniczne**

- GitHub Discussions
- Slack: #wojny-laserowe-dev
- Email: dev@wojny-laserowe.pl

### **Pilne sprawy**

- Email: urgent@wojny-laserowe.pl
- Telefon: +48 123 456 789

## 🎉 **PODZIĘKOWANIA**

Dziękujemy za wkład w projekt! Każdy commit, issue i PR jest doceniany.

---

**Ostatnia aktualizacja:** 2025-01-29 **Wersja:** 1.0.0
