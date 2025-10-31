# 🔍 Analiza Semantyczności - app/page.js

**Data:** 2025-01-29

---

## 📋 **ZNALEZIONE ELEMENTY**

### 1. **`<span>` w h1 (linie 38-39)**

```javascript
<h1 className='...'>
  <span className='block'>ZAMIEŃ PRZESZŁOŚĆ</span>
  <span className='block'>NA NOWY POCZĄTEK!</span>
</h1>
```

**Analiza:**
- ✅ **OK** - `<span>` jest semantycznie neutralny i służy do typografii/stylowania
- `className='block'` to CSS layout (display: block), nie wpływa na semantykę
- Alternatywy nie są lepsze - `<div>` nie jest inline, a `<br/>` nie jest semantyczne

**Status:** ✅ **AKCEPTOWALNE** - span jest właściwy dla inline typografii

---

### 2. **`<div>` jako wrapper dla FAQ (linia 116)**

```javascript
<div className='space-y-4'>
  {topFaqItems.map((q, i) => (
    <FAQAccordion key={q.question || `faq-${i}`} item={q} index={i} />
  ))}
</div>
```

**Analiza:**
- ⚠️ **Można poprawić** - `<div>` jest tylko dla layoutu (`space-y-4`)
- Zgodnie z semantic HTML, lista FAQ powinna używać struktury semantycznej
- Ale `FAQAccordion` już renderuje button + panel, więc wrapper może być neutralny

**Rekomendacje:**

**Opcja A: Fragment (jeśli nie potrzebny wrapper dla layoutu)**
```javascript
{topFaqItems.map((q, i) => (
  <FAQAccordion key={q.question || `faq-${i}`} item={q} index={i} />
))}
```
⚠️ Problem: utracimy `space-y-4` spacing

**Opcja B: Zostawić div (AKCEPTOWALNE)**
- `<div>` jest OK jako layout wrapper
- `space-y-4` jest potrzebny dla spacing
- To jest layout container, nie semantyczna treść

**Opcja C: Semantyczny wrapper (NAJLEPSZE dla accessibility)**
```javascript
<dl className='space-y-4'>
  {topFaqItems.map((q, i) => (
    <FAQAccordion key={q.question || `faq-${i}`} item={q} index={i} />
  ))}
</dl>
```
⚠️ Problem: FAQAccordion renderuje `<div>`, nie `<dt>`/`<dd>`, więc `<dl>` może być nieprawidłowe strukturalnie

**Status:** ✅ **OK** - `<div>` jako layout wrapper jest akceptowalny

**Wyjaśnienie:**
- `<div>` jest semantycznie neutralny i jest właściwy dla layout wrappers
- `space-y-4` wymaga wrappera do zastosowania gap/spacing
- Fragment (`<>`) nie obsługuje className, więc nie można użyć go ze spacing
- To jest layout container, nie semantyczna treść - div jest właściwy

---

## ✅ **REKOMENDACJE**

### **Wnioski:**

1. **Span w h1** - ✅ **OK** - pozostawić jak jest (typografia)
2. **Div wrapper FAQ** - ✅ **OK** - div jako layout wrapper jest akceptowalny

**Wyjaśnienie:**
- `<div>` dla layout wrappers jest standardową praktyką
- Semantic HTML nie wymaga, aby każdy div był zastąpiony semantycznym elementem
- `<div>` jest właściwy dla kontenerów layoutowych (spacing, flexbox, grid)
- Fragment nie obsługuje className, więc nie można użyć go ze spacing

**Kiedy div jest OK:**
- ✅ Layout wrappers (flexbox, grid, spacing)
- ✅ Kontenery bez semantycznego znaczenia
- ✅ Grupowanie elementów dla stylowania

**Kiedy div NIE jest OK:**
- ❌ Zamiast `<nav>` dla nawigacji
- ❌ Zamiast `<header>`, `<footer>`, `<main>`
- ❌ Zamiast `<article>` dla treści artykułowej
- ❌ Zamiast `<section>` dla sekcji (ale używamy komponentu Section)

---

## 📊 **PODSUMOWANIE**

**Obecny stan:**
- ✅ `<span>` w h1 - **OK** (typografia)
- ✅ `<div>` wrapper FAQ - **OK** (layout wrapper)

**Rekomendacja:**
- ✅ **Zostawić jak jest** - oba użycia są poprawne i zgodne z best practices
- `<span>` jest właściwy dla inline typografii
- `<div>` jest właściwy dla layout wrappers ze spacing

**Zgodność z semantic HTML:**
- ✅ Wszystkie użycia są właściwe
- ✅ Section używa `<section>` (w komponencie Section)
- ✅ Button używa `<button>` lub `<a>` (w komponencie Button)
- ✅ Semantyczne elementy są w komponentach, nie bezpośrednio w page

---

**Ostatnia aktualizacja:** 2025-01-29
