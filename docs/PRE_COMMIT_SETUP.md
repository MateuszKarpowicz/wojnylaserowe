# 🔧 Pre-commit Hooks - Instrukcja

## 📋 **Opis**

Pre-commit hooks automatycznie sprawdzają jakość kodu przed każdym commitem, zapewniając że tylko poprawny kod trafia do repozytorium.

## 🚀 **Setup**

### **Metoda 1: Git hooks (Rekomendowana)**

```bash
# Skopiuj skrypt do .git/hooks/pre-commit
cp scripts/pre-commit.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### **Metoda 2: Użyj bezpośrednio przed commitem**

```bash
# Przed każdym commitem uruchom:
./scripts/pre-commit.sh
```

### **Metoda 3: Husky (Opcjonalnie - jeśli chcesz automatycznie)**

```bash
# Instalacja Husky
npm install --save-dev husky

# Inicjalizacja
npx husky install

# Dodaj pre-commit hook
npx husky add .husky/pre-commit "bash scripts/pre-commit.sh"
```

## ✅ **Co sprawdza pre-commit hook?**

1. **ESLint** - sprawdza jakość kodu i konwencje projektu
2. **Prettier** - sprawdza formatowanie kodu
3. **TypeScript** - sprawdza typy (jeśli TypeScript jest skonfigurowany)

## 🚨 **Co zrobić jeśli hook się nie powiedzie?**

### **ESLint errors:**

```bash
# Auto-fix niektórych problemów
npm run lint:fix

# Sprawdź wszystkie problemy
npm run lint
```

### **Prettier errors:**

```bash
# Auto-fix formatowania
npm run format

# Sprawdź formatowanie
npm run format:check
```

### **TypeScript errors:**

Sprawdź szczegóły błędów i napraw ręcznie.

## 🔄 **Pominięcie hooka (TYLKO W UZASADNIONYCH PRZYPADKACH)**

```bash
# Pomijanie pre-commit hooka (NIE REKOMENDOWANE)
git commit --no-verify -m "feat: dodaj funkcję"
```

**UWAGA:** Używaj `--no-verify` tylko w wyjątkowych sytuacjach (np. hotfixy, merge conflicts). Zawsze napraw błędy przed commitem jeśli to możliwe.

## 📝 **CI/CD Checks**

CI/CD automatycznie uruchamia te same sprawdzenia:

- ✅ ESLint check
- ✅ Prettier check
- ✅ TypeScript check (jeśli dostępny)
- ✅ Build verification
- ✅ Check for deprecated CSS classes

**Wszystkie checks muszą przejść aby PR został zaakceptowany.**

## 🔗 **Zobacz również**

- [ESLint Rules Explanation](.eslintrc.rules-explanation.md)
- [Style Guide](STYLE_GUIDE.md)
- [Contributing Guide](CONTRIBUTING.md)
