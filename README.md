# Wojny Laserowe - Aplikacja do Laserowego Usuwania Tatuaży

## 🎯 **OPIS PROJEKTU**

Profesjonalna aplikacja webowa dla salonu laserowego usuwania tatuaży. Aplikacja prezentuje usługi,
efekty pracy, informacje kontaktowe i umożliwia klientom składanie zapytań przez bezpieczny
formularz kontaktowy.

## 🚀 **FUNKCJONALNOŚCI**

- **Strona główna** z prezentacją usług
- **Galeria efektów** z przed/po zdjęciami
- **Informacje o firmie** i doświadczeniu
- **Bezpieczny formularz kontaktowy** z walidacją
- **FAQ** z odpowiedziami na najczęstsze pytania
- **Responsywny design** dla wszystkich urządzeń

## 🛠️ **STACK TECHNOLOGICZNY**

- **Frontend:** Next.js 16.0.0 (App Router), React 19.2.0
- **Styling:** Tailwind CSS 3.4.0 + Design Tokens
- **Walidacja:** Zod 4.1.12
- **Ikony:** React Icons 5.5.0
- **Bezpieczeństwo:** CSRF Protection, Rate Limiting
- **DevOps:** Docker, Kubernetes, Prometheus, Grafana

## 📋 **WYMAGANIA SYSTEMOWE**

- **Node.js:** 20.x lub nowszy
- **npm:** 9.x lub nowszy
- **Docker:** 20.x lub nowszy (opcjonalnie)
- **Kubernetes:** 1.24+ (opcjonalnie)

## 🚀 **SZYBKI START**

### **1. Instalacja zależności**

```bash
npm install
```

### **2. Konfiguracja środowiska**

```bash
cp env.example .env.local
# Edytuj .env.local z własnymi wartościami
```

### **3. Uruchomienie w trybie deweloperskim**

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

### **4. Budowanie dla produkcji**

```bash
npm run build
npm run start
```

## 🐳 **DEVELOPMENT Z DOCKER**

### **Uruchomienie środowiska deweloperskiego**

```bash
npm run docker:dev
```

### **Budowanie obrazu Docker**

```bash
npm run docker:build
```

### **Deployment**

```bash
npm run docker:deploy
```

## ☸️ **KUBERNETES DEPLOYMENT**

### **Development**

```bash
npm run k8s:deploy:dev
```

### **Staging**

```bash
npm run k8s:deploy:staging
```

### **Production**

```bash
npm run k8s:deploy:prod
```

## 📊 **MONITORING**

### **Prometheus**

```bash
npm run monitoring:prometheus
# Dostęp: http://localhost:9090
```

### **Grafana**

```bash
npm run monitoring:grafana
# Dostęp: http://localhost:3000
```

### **Kibana (ELK Stack)**

```bash
npm run monitoring:kibana
# Dostęp: http://localhost:5601
```

## 🔒 **BEZPIECZEŃSTWO**

### **Audit bezpieczeństwa**

```bash
npm run security:audit
```

### **Sprawdzenie podatności**

```bash
npm run security:check
```

### **Naprawa podatności**

```bash
npm run security:fix
```

### **Matryca ENV (prod)**

- Wymagane:
  - `NEXTAUTH_SECRET` (≥32 znaków)
  - `CSRF_SECRET` (dla formularza kontaktowego)
  - `REDIS_URL` (produkcyjny rate-limit)
- Zalecane:
  - `NEXTAUTH_URL` (pełny URL wdrożenia)
- Opcjonalne:
  - `DATABASE_URL`, `SMTP_*`, `GOOGLE_ANALYTICS_ID`, `STRIPE_*`, `FEATURE_*`

Przykładowe wartości w `env.example` — skopiuj do `.env.local`/Vercel.

## 📁 **STRUKTURA PROJEKTU**

```
wojny-laserowe/
├── app/                    # Next.js App Router
│   ├── api/               # API endpoints
│   ├── efekty/            # Strona z efektami
│   ├── kontakt/           # Strona kontaktowa
│   └── o-nas/             # Strona o firmie
├── components/            # Komponenty React
│   ├── base/             # Komponenty bazowe
│   ├── hooks/            # Custom hooks
│   └── ui/               # Komponenty UI
├── content/              # Dane treściowe (JSON)
├── lib/                  # Biblioteki pomocnicze
├── public/               # Pliki statyczne
├── styles/               # Style CSS
├── docker/               # Konfiguracja Docker
├── k8s/                  # Manifesty Kubernetes
├── monitoring/           # Konfiguracja monitoringu
└── scripts/              # Skrypty pomocnicze
```

## 🧪 **TESTOWANIE**

### **Uruchomienie testów**

```bash
npm test
```

### **Testy z coverage**

```bash
npm run test:coverage
```

### **Testy E2E**

```bash
npm run test:e2e
```

## 📝 **SKRYPTY NPM**

### **Development**

- `npm run dev` - Uruchomienie w trybie deweloperskim
- `npm run build` - Budowanie aplikacji
- `npm run start` - Uruchomienie w trybie produkcyjnym
- `npm run lint` - Sprawdzenie jakości kodu

### **Docker**

- `npm run docker:build` - Budowanie obrazu Docker
- `npm run docker:dev` - Uruchomienie z Docker Compose
- `npm run docker:deploy` - Deployment z Docker
- `npm run docker:stop` - Zatrzymanie kontenerów
- `npm run docker:logs` - Logi kontenerów
- `npm run docker:clean` - Czyszczenie kontenerów

### **Kubernetes**

- `npm run k8s:deploy` - Deployment do K8s
- `npm run k8s:deploy:dev` - Deployment do development
- `npm run k8s:deploy:staging` - Deployment do staging
- `npm run k8s:deploy:prod` - Deployment do production

### **Monitoring**

- `npm run monitoring:deploy` - Deployment monitoringu
- `npm run monitoring:prometheus` - Port-forward Prometheus
- `npm run monitoring:grafana` - Port-forward Grafana
- `npm run monitoring:kibana` - Port-forward Kibana

### **Backup**

- `npm run backup:deploy` - Deployment backup jobs
- `npm run backup:postgres` - Backup PostgreSQL
- `npm run backup:redis` - Backup Redis
- `npm run backup:verify` - Weryfikacja backupów

### **Security**

- `npm run security:audit` - Audit bezpieczeństwa
- `npm run security:check` - Sprawdzenie podatności
- `npm run security:fix` - Naprawa podatności
- `npm run security:deploy` - Deployment security policies

### **Performance**

- `npm run performance:deploy` - Deployment optymalizacji
- `npm run performance:nginx` - Optymalizacja Nginx
- `npm run performance:redis` - Optymalizacja Redis
- `npm run performance:postgres` - Optymalizacja PostgreSQL

### **Production**

- `npm run production:deploy` - Pełny deployment produkcyjny
- `npm run production:status` - Status aplikacji
- `npm run production:logs` - Logi aplikacji
- `npm run production:restart` - Restart aplikacji
- `npm run production:scale` - Skalowanie aplikacji

## 🔧 **KONFIGURACJA**

### **Zmienne środowiskowe**

Skopiuj `env.example` do `.env.local` i skonfiguruj:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/wojny_laserowe"

# Redis
REDIS_URL="redis://localhost:6379"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# SMTP
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Security
JWT_SECRET="your-jwt-secret"
ENCRYPTION_KEY="your-encryption-key"
```

### **Tailwind CSS**

Konfiguracja w `tailwind.config.js` z custom design tokens.

### **Next.js**

Konfiguracja w `next.config.js` z security headers i optymalizacjami.

## 🤝 **WSPÓŁPRACA**

Zobacz [CONTRIBUTING.md](./CONTRIBUTING.md) dla instrukcji współpracy.

## 📄 **LICENCJA**

Ten projekt jest własnością firmy i nie jest dostępny publicznie.

## 📞 **KONTAKT**

- **Email:** kontakt@wojny-laserowe.pl
- **Telefon:** +48 123 456 789
- **Adres:** ul. Przykładowa 123, 00-000 Warszawa

## 📈 **ROADMAP**

### **Wersja 1.1**

- [ ] Panel administracyjny
- [ ] System użytkowników
- [ ] Email notifications
- [ ] File upload

### **Wersja 1.2**

- [ ] System płatności
- [ ] Kalendarz wizyt
- [ ] SMS notifications
- [ ] Mobile app

### **Wersja 2.0**

- [ ] Multi-tenancy
- [ ] API dla zewnętrznych integracji
- [ ] Advanced analytics
- [ ] AI-powered recommendations

---

**Ostatnia aktualizacja:** 2025-01-29 **Wersja:** 1.0.0 **Status:** Production Ready ✅
