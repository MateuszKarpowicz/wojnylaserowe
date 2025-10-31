# Scroll Snap - Implementacja

## 📋 Co zostało zaimplementowane

Scroll snapping - sekcje "przyciągają się" podczas przewijania (szczególnie na mobile przy scrollowaniu kciukiem).

## 🎯 Zmiany

### 1. **Section.js** - Automatyczny scroll snap
```jsx
// Każda sekcja używająca komponentu Section ma:
- h-section-default md:h-section-default-md (dokładna wysokość 70vh/80vh)
- snap-start (snap do początku sekcji)
```

### 2. **LandingHero.js** - Hero image z snap
```jsx
// Hero image section ma:
- h-section-default md:h-section-default-md (dokładna wysokość)
- snap-start (snap do początku)
- relative + absolute image (pełne wypełnienie)
```

### 3. **app/page.js** - Wrapper z scroll snap
```jsx
// Cała landing page owinięta w:
<div className='snap-y snap-mandatory'>
  {/* wszystkie sekcje */}
</div>
```

## 📝 Jak to działa

### CSS Scroll Snap
- `snap-y` - snap w kierunku pionowym
- `snap-mandatory` - wymusza snap (zawsze przyciąga do sekcji)
- `snap-start` - każda sekcja "przyciąga" scroll do swojego początku

### Wysokość sekcji
- `h-section-default` = `h-[70vh]` na mobile
- `h-section-default-md` = `h-[80vh]` na desktop
- **Używamy `h` zamiast `min-h`** - wymusza dokładną wysokość (ważne dla snap!)

## ✅ Efekt

1. **Przewijanie kciukiem na mobile:**
   - Scroll "przyciąga" się do każdej sekcji
   - Sekcje są dokładnie tej samej wysokości (70vh/80vh)
   - Płynne przejście między sekcjami

2. **Przewijanie na desktop:**
   - Działa również (ale mniej zauważalne)
   - Sekcje zachowują jednakową wysokość

## 🎨 Sekcje na landing page

Wszystkie sekcje mają teraz:
- Jednakową wysokość (70vh mobile / 80vh desktop)
- Scroll snap do początku sekcji
- Płynne przejście przy scrollowaniu

**Lista sekcji:**
1. LandingHero (2 części: nagłówek + obraz)
2. "Jak to działa" (Section)
3. Kwalifikacje (QualificationsSection → Section)
4. Instagram (InstagramSection → Section)
5. Efekty (Section)
6. Opinie (TestimonialsCarousel → Section)
7. Mapa (MapSection → Section)
8. FAQ (Section)

## ⚠️ Uwagi

1. **Tylko landing page** - scroll snap jest tylko na `/` (homepage)
   - Inne strony NIE mają scroll snap (nie koliduje)

2. **Wysokość sekcji:**
   - Jeśli treść jest większa niż 70vh/80vh, może być obcięta
   - Rozwiązanie: zmniejsz padding lub treść

3. **Testowanie:**
   - Przetestuj na mobile (kciukiem)
   - Przetestuj na desktop (scroll wheel)
   - Sprawdź czy wszystkie sekcje mają jednakową wysokość

## 🔧 Możliwe ulepszenia

1. **Snap proximity zamiast mandatory:**
   - `snap-proximity` - snap tylko gdy jesteśmy blisko sekcji
   - Mniej agresywne, bardziej naturalne

2. **Snap center zamiast start:**
   - `snap-center` - wyśrodkowuje sekcję w viewport
   - Wymaga większych sekcji

3. **Dynamiczna wysokość:**
   - Jeśli sekcja ma więcej treści, może być większa
   - Ale wtedy nie będzie jednakowej wysokości
