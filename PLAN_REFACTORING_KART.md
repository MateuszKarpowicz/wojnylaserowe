# PLAN REFACTORING KART DO WZORU Z "O NAS"

## ZASADY:
- **Ciemne tło (bg-bg-dark)** → fioletowa ramka (card-border-purple)
- **Jasne tło (bg-surface)** → niebieska ramka (card-border-blue)
- **Zawsze ikonka** (jeśli nie ma sensownej, to checkmark/ptaszek)

## WZÓR Z "O NAS" (QualificationCard):
```
- card-border-blue (na ciemnym tle - BŁĄD! powinno być purple)
- Ikona po lewej (flex-shrink-0)
- Tytuł + opis po prawej (flex-1)
- Layout: flex gap-4
```

---

## NASTEPNY KROK #1: HowItWorksSection

**CO:**
- Karty w sekcji "Jak działa" - brak ikonki, tylko tekst

**GDZIE:**
- `components/ui/HowItWorksSection.js` linia 20-26

**JAK:**
- Utworzyć uniwersalny komponent `CardWithIcon` 
- Dodać ikonki (checkmark) do punktów
- Zmienić `card-border-blue` na `card-border-purple` (ciemne tło!)

**JAKI MA BYC EFEKT:**
- Karty z ikonką po lewej, tekstem po prawej (jak QualificationCard)
- Fioletowa ramka (ciemne tło)

**CO NASTEPNE:**
- AftercareSection

---

## NASTEPNY KROK #2: AftercareSection

**CO:**
- Karty w sekcji "Regeneracja" - brak ikonki, tylko tekst

**GDZIE:**
- `components/ui/AftercareSection.js` linia 20-26

**JAK:**
- Użyć komponentu `CardWithIcon`
- Dodać ikonki (checkmark lub odpowiednie ikony)
- Sprawdzić czy `card-border-purple` (ciemne tło - OK)

**JAKI MA BYC EFEKT:**
- Karty z ikonką po lewej, tekstem po prawej
- Fioletowa ramka (ciemne tło)

**CO NASTEPNE:**
- WhyChooseSection

---

## NASTEPNY KROK #3: WhyChooseSection

**CO:**
- Karty w sekcji "Dlaczego warto" - ma checkmark SVG, ale używa niebieskiej ramki zamiast fioletowej

**GDZIE:**
- `components/ui/WhyChooseSection.js` linia 12-36

**JAK:**
- Zmienić `card-border-blue` na `card-border-purple` (ciemne tło!)
- Uprościć strukturę - użyć komponentu `CardWithIcon`
- Checkmark SVG → ikona z react-icons

**JAKI MA BYC EFEKT:**
- Karty z ikonką po lewej, tekstem po prawej
- Fioletowa ramka (ciemne tło)

**CO NASTEPNE:**
- QualificationCard (naprawić kolor ramki)

---

## NASTEPNY KROK #4: QualificationCard

**CO:**
- Karty w sekcji "Kwalifikacje" - używa niebieskiej ramki na ciemnym tle (BŁĄD!)

**GDZIE:**
- `components/ui/QualificationCard.js` linia 21
- `app/o-nas/page.js` linia 17 (sekcja z bg-bg-dark)

**JAK:**
- Zmienić `card-border-blue` na `card-border-purple` (ciemne tło!)

**JAKI MA BYC EFEKT:**
- Fioletowa ramka (ciemne tło sekcji)

**CO NASTEPNE:**
- Utworzyć uniwersalny komponent CardWithIcon

---

## NASTEPNY KROK #5: Utworzenie komponentu CardWithIcon

**CO:**
- Uniwersalny komponent karty z ikonką

**GDZIE:**
- `components/ui/CardWithIcon.js` (nowy plik)

**JAK:**
- Przyjmuje props: icon, title (opcjonalny), text/description, borderColor (blue/purple)
- Layout jak QualificationCard (flex gap-4, ikona left, tekst right)
- Domyślna ikona to checkmark jeśli nie podano

**JAKI MA BYC EFEKT:**
- Reużywalny komponent używany w wszystkich sekcjach

**CO NASTEPNE:**
- Zamienić wszystkie sekcje na użycie CardWithIcon

