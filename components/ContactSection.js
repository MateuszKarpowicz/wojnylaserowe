'use client';
import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from './ContactForm';
import MapComponent from './MapComponent';

export default function ContactSection() {
  const handleFormSubmit = (formData) => {
    console.log('Formularz kontaktowy wysłany:', formData);
    // Tutaj będzie logika wysyłania formularza
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* NAGŁÓWEK */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby umówić się na konsultację lub zabieg
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORMULARZ */}
          <div>
            <h3 className="text-2xl font-bold text-textDark mb-6">
              Wyślij zapytanie
            </h3>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>

          {/* DANE KONTAKTOWE I MAPA */}
          <div>
            {/* IKONY SOCIAL */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-textDark mb-6">
                Skontaktuj się z nami
              </h3>
              
              <div className="flex items-center gap-6 mb-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-4xl text-gray-600 hover:text-neonBlue transition-colors duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-4xl text-gray-600 hover:text-neonBlue transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="Telefon"
                  className="text-4xl text-gray-600 hover:text-neonBlue transition-colors duration-300"
                >
                  <FaPhone />
                </a>
              </div>

              {/* ADRES */}
              <div className="flex items-start gap-3 mb-6">
                <FaMapMarkerAlt className="text-neonBlue text-xl mt-1" />
                <div>
                  <p className="font-semibold text-textDark">
                    Kult Tattoo & Piercing | Studio tatuażu i piercingu Kraków
                  </p>
                  <p className="text-gray-700">
                    Aleja Zygmunta Krasińskiego 1, 31-111 Kraków
                  </p>
                </div>
              </div>
            </div>

            {/* MAPA */}
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
}