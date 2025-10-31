#!/bin/bash
# Pre-commit hook - weryfikacja jakości kodu przed commitem

set -e

echo "🔍 Running pre-commit checks..."

# Sprawdź czy zmienione pliki to .js/.jsx/.ts/.tsx
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(js|jsx|ts|tsx)$' || true)

if [ -z "$STAGED_FILES" ]; then
  echo "✅ No JavaScript/TypeScript files to check"
  exit 0
fi

# ESLint check
echo "📝 Running ESLint..."
npm run lint || {
  echo "❌ ESLint found errors. Run 'npm run lint:fix' to auto-fix some issues."
  exit 1
}

# Format check (Prettier)
echo "🎨 Checking code format..."
npm run format:check || {
  echo "❌ Code formatting issues found. Run 'npm run format' to fix."
  exit 1
}

# Type check (jeśli TypeScript)
if command -v tsc &> /dev/null; then
  echo "📘 Running TypeScript check..."
  npm run type-check || {
    echo "❌ TypeScript errors found."
    exit 1
  }
fi

echo "✅ All pre-commit checks passed!"
exit 0
