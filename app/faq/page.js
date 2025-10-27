'use client';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      category: "Laserowe usuwanie tatuaży",
      questions: [
        {
          question: "Jakie są wyniki zabiegu laserowego usuwania tatuażu?",
          answer: "Wyniki zabiegu laserowego usuwania tatuażu są uzależnione głównie od jakości i rodzaju użytego barwnika, równomierności jego wprowadzenia pod skórę oraz głębokości, na jakiej się znajduje. Laser pikosekundowy wykazuje wysoką skuteczność zwłaszcza w przypadku usuwania tatuaży amatorskich, charakteryzujących się niską jakością, płytkim oraz nierównomiernie wprowadzonym barwnikiem. W takich przypadkach, usuwanie może być osiągnięte w zaledwie 2–4 sesjach zabiegowych."
        },
        {
          question: "Ile sesji potrzeba do usunięcia tatuażu profesjonalnego?",
          answer: "Tatuaże profesjonalne, wykonane starannie przez specjalistę, zazwyczaj wymagają większej liczby sesji, od 2 do 10. Zabiegi są planowane co 4–8 tygodni po całkowitym wygojeniu skóry. Ważne jest unikanie opalania leczonej skóry, aby uniknąć trwałych przebarwień."
        },
        {
          question: "Jak skuteczne jest laserowe usuwanie tatuażu?",
          answer: "Laserowe usuwanie tatuażu jest skuteczną metodą, jednak całkowite usunięcie wymaga kilku sesji. Każdy zabieg powoduje około 20% rozjaśnienia tatuażu, zwłaszcza jeśli nie znajduje się on w bliznach. W zależności od koloru tatuażu, stosuje się różne długości fal lasera."
        },
        {
          question: "Jak działa technologia pikosekundowa?",
          answer: "Technologia Pikosekundowa umożliwia trwałe usunięcie zmiany pigmentowej, takiej jak tatuaż. Kluczowe jest poznanie rodzaju użytych barwników i ich głębokości, ponieważ im głębiej, tym trudniej się ich pozbyć. Wyniki stają się widoczne stopniowo, a tatuaż rozjaśnia się pod wpływem lasera. Przerwy czterotygodniowe między zabiegami pozwalają na stopniowe wchłanianie rozbitych przez laser barwników przez komórki układu odpornościowego, co ostatecznie prowadzi do całkowitego zniknięcia barwnika."
        },
        {
          question: "Jakie są metody usuwania tatuażu?",
          answer: "Najpopularniejszą i najbardziej dostępną metodą jest zastosowanie lasera, ale można też likwidować tatuaż peelingiem oraz operacyjnie. W żadnym przypadku nie powinno się podejmować prób likwidacji tatuażu w warunkach domowych. Wraz z zapotrzebowaniem i rozwojem usług usuwania tatuaży zmieniał się również sprzęt. Tatuaże są zazwyczaj umieszczone na głębokości 1-2 mm pod powierzchnią skóry."
        },
        {
          question: "Jak działa laser do usuwania tatuażu?",
          answer: "Mechanizm działania lasera polega na podgrzaniu barwnika umiejscowionego w skórze, dzięki czemu następuje rozbicie komórek, w których zawarty jest barwnik. Rozbity pigment zostaje pochłonięty przez makrofagi, a pozostałości przesuwane są ku górze naskórka. Podczas trwania kolejnych sesji zabiegowych proces powtarza się, aż do osiągnięcia zadowalających dla klienta efektów. Miejsce poddane działaniu lasera staje się białe, po ok. 1h robi się czerwone, powstać również może obrzęk, który samoistnie zanika po 2-3 dniach."
        }
      ]
    },
    {
      category: "ScarINK - regeneracja i redukcja blizn",
      questions: [
        {
          question: "Co to jest ScarINK?",
          answer: "ScarINK to nowoczesna technika pracy ze skórą polegająca na mikropunkturze – czyli wykonywaniu bardzo drobnych, kontrolowanych nakłuć w obrębie blizny. W wyniku tego procesu skóra zostaje pobudzona do produkcji kolagenu i elastyny, co poprawia jej strukturę i wygląd. Z czasem blizna staje się gładsza, mniej widoczna i bardziej zbliżona kolorem do otaczającej skóry."
        },
        {
          question: "Dla kogo jest ScarINK?",
          answer: "Zabieg ScarINK rekomenduję osobom, które chcą poprawić wygląd skóry w przypadku: blizn pooperacyjnych, blizn potrądzikowych, blizn po tatuażu lub urazach, rozstępów, nierówności skóry po wcześniejszych zabiegach. Efekty zależą od rodzaju i wieku blizny oraz indywidualnych predyspozycji skóry. Zazwyczaj potrzeba kilku zabiegów w odstępach 4–6 tygodni, aby osiągnąć najlepsze rezultaty."
        },
        {
          question: "Jak wygląda zabieg ScarINK?",
          answer: "1. Konsultacja i ocena skóry – omawiamy rodzaj blizny, stan skóry i możliwe efekty. 2. Zabieg mikropunktury – bardzo drobne nakłucia, które uruchamiają proces regeneracji. 3. Zakończenie i zalecenia – omawiam pielęgnację pozabiegową, by przyspieszyć regenerację i wzmocnić efekt. Po zabiegu skóra może być lekko zaczerwieniona lub delikatnie obrzęknięta – to naturalna reakcja."
        },
        {
          question: "Jakie są zalecenia po zabiegu ScarINK?",
          answer: "Zalecam: unikanie słońca i opalania przez 2–3 tygodnie, stosowanie delikatnych kremów regenerujących, nie drapanie i nie zdrapywanie skóry w miejscu zabiegu. Ważne jest przestrzeganie zaleceń pozabiegowych, aby przyspieszyć regenerację i wzmocnić efekt."
        }
      ]
    },
    {
      category: "Dlaczego Wojny Laserowe?",
      questions: [
        {
          question: "Dlaczego warto wybrać Wojny Laserowe Kraków?",
          answer: "Od 2019 roku zajmuję się specjalistyczną pracą ze skórą – doświadczenie, precyzja i bezpieczeństwo to podstawa każdego zabiegu. Pracuję wyłącznie na certyfikowanych urządzeniach i jednorazowych igłach. Każdy zabieg poprzedzam indywidualną konsultacją, by dobrać odpowiedni plan działania. Realne efekty i transparentne podejście – bez fałszywych obietnic, z pełnym szacunkiem do skóry."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-lightBg text-textDark px-4 py-8 mx-auto max-w-screen-lg">
      {/* NAGŁÓWEK */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
          Najczęściej zadawane pytania
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Odpowiadamy na najważniejsze pytania dotyczące laserowego usuwania tatuaży 
          i zabiegów ScarINK. Jeśli nie znajdziesz odpowiedzi na swoje pytanie, 
          skontaktuj się z nami.
        </p>
      </div>

      {/* FAQ KATEGORIE */}
      <div className="space-y-8">
        {faqData.map((category, categoryIndex) => (
          <section key={categoryIndex} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-textDark mb-6 text-center">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.questions.map((item, itemIndex) => {
                const globalIndex = `${categoryIndex}-${itemIndex}`;
                const isOpen = openItems[globalIndex];
                
                return (
                  <div key={itemIndex} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-semibold text-textDark pr-4">
                        {item.question}
                      </h3>
                      {isOpen ? (
                        <FaChevronUp className="text-neonBlue flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="text-neonBlue flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* KONTAKT */}
      <section className="mt-12 text-center bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-textDark mb-4">
          Masz więcej pytań?
        </h2>
        <p className="text-gray-700 mb-6">
          Jeśli nie znalazłeś odpowiedzi na swoje pytanie, skontaktuj się z nami. 
          Chętnie odpowiemy na wszystkie wątpliwości i pomożemy w przygotowaniu 
          do zabiegu.
        </p>
        <a
          href="/kontakt"
          className="inline-block bg-neonBlue text-white px-8 py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Skontaktuj się z nami
        </a>
      </section>
    </main>
  );
}
