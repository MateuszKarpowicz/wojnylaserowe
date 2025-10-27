import ContactSection from '../../components/ContactSection';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Kontakt() {
  return (
    <main className="min-h-screen bg-lightBg text-textDark px-4 py-8 mx-auto max-w-screen-lg">
      {/* NAGŁÓWEK */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
          Skontaktuj się z nami
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Zostaw wiadomość lub umów się na wizytę. Nasz zespół ekspertów 
          chętnie odpowie na wszystkie Twoje pytania dotyczące zabiegów 
          laserowego usuwania tatuaży i ScarINK.
        </p>
      </div>

      {/* FORMULARZ KONTAKTOWY */}
      <ContactSection />

      {/* DODATKOWE INFORMACJE KONTAKTOWE */}
      <section className="py-8 bg-white">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-textDark mb-8 text-center">
            Dane kontaktowe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ADRES I GODZINY */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-neonBlue text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-textDark mb-1">Adres</h3>
                  <p className="text-gray-700">
                    Kult Tattoo & Piercing | Studio tatuażu i piercingu Kraków<br />
                    Aleja Zygmunta Krasińskiego 1<br />
                    31-111 Kraków
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaClock className="text-neonBlue text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-textDark mb-1">Godziny otwarcia</h3>
                  <p className="text-gray-700">
                    Poniedziałek - Piątek: 9:00 - 18:00<br />
                    Sobota: 9:00 - 14:00<br />
                    Niedziela: Zamknięte
                  </p>
                </div>
              </div>
            </div>

            {/* TELEFON I EMAIL */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <FaPhone className="text-neonBlue text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-textDark mb-1">Telefon</h3>
                  <p className="text-gray-700">
                    <a href="tel:+48123456789" className="hover:text-neonBlue transition-colors">
                      +48 123 456 789
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-neonBlue text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-textDark mb-1">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:kontakt@wojny-laserowe.pl" className="hover:text-neonBlue transition-colors">
                      kontakt@wojny-laserowe.pl
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
