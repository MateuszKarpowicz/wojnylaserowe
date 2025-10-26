export default function FAQ() {
  return (
    <main>
      <h1>Najczęściej zadawane pytania</h1>
      
      <p>
        Odpowiadamy na najważniejsze pytania dotyczące laserowego usuwania tatuaży. 
        Jeśli nie znajdziesz odpowiedzi na swoje pytanie, skontaktuj się z nami.
      </p>

      {/* --- PRZED ZABIEGIEM --- */}
      <section>
        <h2>Przed zabiegiem</h2>
        
        <div>
          <h3>Czy usuwanie tatuażu laserem boli?</h3>
          <p>
            Zabieg może powodować dyskomfort, ale większość klientów opisuje go jako 
            podobny do "uderzenia gumką w skórę". Używamy znieczulenia miejscowego 
            i nowoczesnych technologii, które minimalizują ból.
          </p>
        </div>

        <div>
          <h3>Ile sesji będzie potrzebnych?</h3>
          <p>
            Liczba sesji zależy od wielu czynników: rozmiaru tatuażu, kolorów, 
            wieku tatuażu i typu skóry. Zazwyczaj potrzeba 6-12 sesji, 
            ale każdy przypadek jest indywidualny.
          </p>
        </div>

        <div>
          <h3>Czy mogę usunąć każdy tatuaż?</h3>
          <p>
            Laser najlepiej usuwa tatuaże w kolorach czarnym, niebieskim i ciemnozielonym. 
            Kolory czerwone, żółte i pomarańczowe są trudniejsze do usunięcia. 
            Konsultacja pozwoli ocenić szanse powodzenia.
          </p>
        </div>

        <div>
          <h3>Jak przygotować się do zabiegu?</h3>
          <p>
            Przed zabiegiem unikaj opalania przez 4-6 tygodni, nie używaj kremów 
            z retinolem przez tydzień, nie pij alkoholu dzień przed zabiegiem. 
            Skóra powinna być czysta i nawilżona.
          </p>
        </div>
      </section>

      {/* --- PO ZABIEGU --- */}
      <section>
        <h2>Po zabiegu</h2>
        
        <div>
          <h3>Jak pielęgnować skórę po zabiegu?</h3>
          <p>
            Przez pierwsze 48 godzin stosuj zimne okłady, unikaj gorącej wody. 
            Używaj zaleconych kremów gojących, unikaj opalania przez 4-6 tygodni. 
            Nie drap ani nie pocieraj leczonego miejsca.
          </p>
        </div>

        <div>
          <h3>Kiedy mogę wrócić do normalnych aktywności?</h3>
          <p>
            Lekkie ćwiczenia możesz wykonywać już następnego dnia. Intensywny sport 
            i basen odradzamy przez tydzień. Unikaj sauny i gorących kąpieli przez 2 tygodnie.
          </p>
        </div>

        <div>
          <h3>Czy mogą wystąpić powikłania?</h3>
          <p>
            Przy profesjonalnym wykonaniu zabiegu powikłania są rzadkie. 
            Może wystąpić lekkie zaczerwienienie, obrzęk lub przebarwienia, 
            które zwykle ustępują samoistnie.
          </p>
        </div>
      </section>

      {/* --- KOSZTY I CZAS --- */}
      <section>
        <h2>Koszty i czas</h2>
        
        <div>
          <h3>Ile kosztuje usunięcie tatuażu?</h3>
          <p>
            Cena zależy od rozmiaru, lokalizacji i kolorów tatuażu. 
            Małe tatuaże (do 5cm) od 200 zł za sesję, większe proporcjonalnie więcej. 
            Oferujemy pakiety dla całych serii zabiegów.
          </p>
        </div>

        <div>
          <h3>Jak długo trwa jedna sesja?</h3>
          <p>
            Sesja trwa od 15 minut (małe tatuaże) do 60 minut (duże tatuaże). 
            Dodaj czas na konsultację i przygotowanie - łącznie około 30-90 minut.
          </p>
        </div>

        <div>
          <h3>Czy oferujecie raty?</h3>
          <p>
            Tak, współpracujemy z firmami finansowymi oferującymi raty 0%. 
            Można rozłożyć koszt całej serii zabiegów na wygodne raty.
          </p>
        </div>
      </section>

      {/* --- BEZPIECZEŃSTWO --- */}
      <section>
        <h2>Bezpieczeństwo i sprzęt</h2>
        
        <div>
          <h3>Jakie lasery używacie?</h3>
          <p>
            Używamy najnowocześniejszych laserów Q-switched Nd:YAG i Alexandrite, 
            które są najskuteczniejsze i najbezpieczniejsze w usuwaniu tatuaży. 
            Sprzęt jest regularnie serwisowany i certyfikowany.
          </p>
        </div>

        <div>
          <h3>Czy zabieg jest bezpieczny?</h3>
          <p>
            Tak, laserowe usuwanie tatuaży jest bezpieczną metodą, gdy wykonuje ją 
            wykwalifikowany specjalista. Wszystkie zabiegi są wykonywane w sterylnych 
            warunkach z zachowaniem najwyższych standardów bezpieczeństwa.
          </p>
        </div>

        <div>
          <h3>Czy macie certyfikaty i uprawnienia?</h3>
          <p>
            Tak, nasz personel ma odpowiednie kwalifikacje medyczne i certyfikaty 
            obsługi laserów. Klinika posiada wszystkie wymagane pozwolenia 
            i jest regularnie kontrolowana przez odpowiednie instytucje.
          </p>
        </div>
      </section>

      {/* --- KONTAKT --- */}
      <section>
        <h2>Masz więcej pytań?</h2>
        <p>
          Jeśli nie znalazłeś odpowiedzi na swoje pytanie, skontaktuj się z nami. 
          Chętnie odpowiemy na wszystkie wątpliwości i pomożemy w przygotowaniu 
          do zabiegu.
        </p>
        <div>
          <a href="/kontakt">Skontaktuj się z nami</a>
        </div>
      </section>
    </main>
  );
}
