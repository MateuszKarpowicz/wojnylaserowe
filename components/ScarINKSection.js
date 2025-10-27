export default function ScarINKSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* NAGŁÓWEK */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            ScarINK – regeneracja i redukcja blizn Kraków
          </h2>
          <p className="text-xl text-neonBlue font-semibold mb-6">
            Naturalna regeneracja skóry i poprawa wyglądu blizn
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Blizny pooperacyjne, potrądzikowe, po tatuażu czy innych urazach nie muszą być trwałym problemem.
            W Wojnach Laserowych w Krakowie oferuję profesjonalne zabiegi ScarINK – metodę, która stymuluje 
            naturalne procesy naprawcze skóry i pomaga poprawić jej strukturę, elastyczność oraz koloryt.
          </p>
        </div>

        {/* NA CZYM POLEGA METODA */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-textDark mb-6 text-center">
            Na czym polega metoda ScarINK?
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-lg text-gray-700 mb-4">
              ScarINK to nowoczesna technika pracy ze skórą polegająca na <strong>mikropunkturze</strong> – 
              czyli wykonywaniu bardzo drobnych, kontrolowanych nakłuć w obrębie blizny.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              W wyniku tego procesu skóra zostaje pobudzona do produkcji kolagenu i elastyny, 
              co poprawia jej strukturę i wygląd.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Z czasem blizna staje się:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li><strong>gładsza</strong>,</li>
              <li><strong>mniej widoczna</strong>,</li>
              <li><strong>bardziej zbliżona kolorem</strong> do otaczającej skóry.</li>
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              Metoda ta znacznie poprawia jej estetykę i wygląd skóry.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              ScarINK może być również skutecznie łączony z innymi terapiami (np. masażem blizny lub terapią manualną), 
              co często wzmacnia efekty, choć sam zabieg tego nie obejmuje.
            </p>
          </div>
        </div>

        {/* DLA KOGO JEST SCARINK */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-textDark mb-6 text-center">
            Dla kogo jest ScarINK?
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-lg text-gray-700 mb-4">
              Zabieg ScarINK rekomenduję osobom, które chcą poprawić wygląd skóry w przypadku:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li><strong>blizn pooperacyjnych</strong>,</li>
              <li><strong>blizn potrądzikowych</strong>,</li>
              <li><strong>blizn po tatuażu lub urazach</strong>,</li>
              <li><strong>rozstępów</strong>,</li>
              <li><strong>nierówności skóry</strong> po wcześniejszych zabiegach.</li>
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              Efekty zależą od rodzaju i wieku blizny oraz indywidualnych predyspozycji skóry.
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Zazwyczaj potrzeba <strong>kilku zabiegów w odstępach 4–6 tygodni</strong>, 
              aby osiągnąć najlepsze rezultaty.
            </p>
          </div>
        </div>

        {/* JAK WYGLĄDA ZABIEG */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-textDark mb-6 text-center">
            ⚡ Jak wygląda zabieg?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* KROK 1 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-neonBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-semibold text-textDark mb-3">
                Konsultacja i ocena skóry
              </h4>
              <p className="text-gray-700">
                Omawiamy rodzaj blizny, stan skóry i możliwe efekty.
              </p>
            </div>

            {/* KROK 2 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-neonBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-semibold text-textDark mb-3">
                Zabieg mikropunktury
              </h4>
              <p className="text-gray-700">
                Bardzo drobne nakłucia, które uruchamiają proces regeneracji.
              </p>
            </div>

            {/* KROK 3 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-neonBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-semibold text-textDark mb-3">
                Zakończenie i zalecenia
              </h4>
              <p className="text-gray-700">
                Omawiam pielęgnację pozabiegową, by przyspieszyć regenerację i wzmocnić efekt.
              </p>
            </div>
          </div>
        </div>

        {/* ZALECENIA PO ZABIEGU */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-textDark mb-6 text-center">
            Zalecenia po zabiegu
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-lg text-gray-700 mb-4">
              Po zabiegu skóra może być lekko zaczerwieniona lub delikatnie obrzęknięta – to naturalna reakcja.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Zalecam:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li><strong>unikanie słońca i opalania</strong> przez 2–3 tygodnie,</li>
              <li><strong>stosowanie delikatnych kremów regenerujących</strong>,</li>
              <li><strong>nie drapanie i nie zdrapywanie skóry</strong> w miejscu zabiegu.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 mb-6">
            Chcesz poprawić wygląd swoich blizn? Skontaktuj się z nami!
          </p>
          <a
            href="#oferta"
            className="inline-block bg-neonBlue text-white px-8 py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Zapytaj o wycenę ScarINK
          </a>
        </div>
      </div>
    </section>
  );
}
