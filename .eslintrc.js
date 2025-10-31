module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@next/eslint-plugin-next/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    // React rules
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Accessibility rules
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
    'jsx-a11y/no-noninteractive-tabindex': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',

    // General rules
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',

    // Custom project conventions
    'no-restricted-syntax': [
      'error',
      {
        // 1. Template literals w className - wymuszaj użycie cn()
        selector:
          "JSXAttribute[name.name='className'] > JSXExpressionContainer > TemplateLiteral",
        message:
          'Używaj cn() zamiast template literals dla className. Przykład: className={cn("class1", condition && "class2")}',
      },
      {
        // 2. String concatenation w className
        selector:
          "JSXAttribute[name.name='className'] > JSXExpressionContainer > BinaryExpression[operator='+']",
        message:
          'Używaj cn() zamiast string concatenation dla className. Przykład: className={cn("class1", condition && "class2")}',
      },
      {
        // 3. Lokalne definicje iconMap - używaj getIcon() z lib/icons.js
        selector: "VariableDeclarator[id.name='iconMap']",
        message:
          'Nie definiuj lokalnego iconMap. Użyj getIcon() z lib/icons.js: import { getIcon } from "@/lib/icons"',
      },
      {
        // 4. !important w className (sprawdzamy tylko stringi z ! ale nie prefers-reduced-motion)
        selector:
          "JSXAttribute[name.name='className'] > Literal[value=/!.*$/]",
        message:
          'Nie używaj !important w Tailwind className. Użyj props zamiast tego (np. py={0} px={0} w Section). Wyjątek: prefers-reduced-motion w CSS',
      },
      {
        // 5. Zakaz bezpośredniego użycia klas .card-* i .btn-* - używaj komponentów
        selector:
          "JSXAttribute[name.name='className'] > Literal[value=/\\b(card-with-border|btn-)(blue|purple|neon-blue|neon-purple|section|cta-blue|cta-purple|offer|base)\\b/]",
        message:
          'Nie używaj bezpośrednio klas .card-* i .btn-*. Użyj komponentów: <Card variant="blue"> lub <Button variant="neonBlue"> zamiast className="card-with-border-blue"',
      },
    ],
    'no-restricted-imports': [
      'warn',
      {
        // 5. Importy bezpośrednie z komponentów - preferuj index exports
        // UWAGA: To jest tylko warning, nie error - niektóre importy mogą być potrzebne
        patterns: [
          {
            group: ['@/components/primitives/Button', '@/components/primitives/Card', '@/components/primitives/Section', '@/components/primitives/Container'],
            message:
              'Używaj index exports: import { Button } from "@/components/primitives" zamiast "@/components/primitives/Button"',
          },
          {
            group: ['@/components/ui/CardWithIcon', '@/components/ui/StatusMessage'],
            message:
              'Używaj index exports: import { CardWithIcon } from "@/components/ui" zamiast "@/components/ui/CardWithIcon"',
          },
        ],
        // 6. Sprawdzanie struktury warstw - primitives nie mogą importować z ui/features
        // UWAGA: no-restricted-imports nie obsługuje "from" - używamy patterns z negacją
        // To będzie warning, ponieważ może być false positives
      },
    ],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',

    // Next.js specific rules
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-img-element': 'error',
    '@next/next/no-page-custom-font': 'error',
    '@next/next/no-sync-scripts': 'error',
    '@next/next/no-title-in-document-head': 'error',
    '@next/next/no-unwanted-polyfillio': 'error',
    '@next/next/no-css-tags': 'error',
    '@next/next/no-document-import-in-page': 'error',
    '@next/next/no-duplicate-head': 'error',
    '@next/next/no-head-element': 'error',
    '@next/next/no-head-import-in-document': 'error',
    '@next/next/no-script-component-in-head': 'error',
    '@next/next/no-styled-jsx-in-document': 'error',
    '@next/next/no-typos': 'error',
    '@next/next/no-unwanted-polyfillio': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/*.config.js', '**/*.config.mjs', '**/.eslintrc.js'],
      env: {
        node: true,
      },
      rules: {
        'no-console': 'off',
        // Wyłączamy custom rules dla plików konfiguracyjnych
        'no-restricted-syntax': 'off',
        'no-restricted-imports': 'off',
      },
    },
    {
      // Wyłączamy niektóre reguły dla lib/icons.js (gdzie iconMap jest OK)
      files: ['**/lib/icons.js'],
      rules: {
        'no-restricted-syntax': [
          'error',
          {
            // Pozostawiamy wszystkie reguły oprócz iconMap
            selector: "JSXAttribute[name.name='className'] > JSXExpressionContainer > TemplateLiteral",
            message:
              'Używaj cn() zamiast template literals dla className. Przykład: className={cn("class1", condition && "class2")}',
          },
          {
            selector:
              "JSXAttribute[name.name='className'] > JSXExpressionContainer > BinaryExpression[operator='+']",
            message:
              'Używaj cn() zamiast string concatenation dla className. Przykład: className={cn("class1", condition && "class2")}',
          },
          {
            selector:
              "JSXAttribute[name.name='className'] > Literal[value=/!.*$/]",
            message:
              'Nie używaj !important w Tailwind className. Użyj props zamiast tego (np. py={0} px={0} w Section). Wyjątek: prefers-reduced-motion w CSS',
          },
        ],
      },
    },
  ],
};
