'use client';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from './ContactForm';
import MapComponent from './MapComponent';
import SocialMediaIcons from './ui/SocialMediaIcons';
import ErrorMessage from './ui/ErrorMessage';
import { useState } from 'react';
import { simulateAsyncOperation } from '../utils/asyncSimulator';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Use async simulator instead of direct setTimeout
      await simulateAsyncOperation(2000);
      
      console.log('Formularz kontaktowy wysłany:', formData);
      
      // Show success message
      setSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setError('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
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

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-8 text-center">
            ✅ Formularz został wysłany pomyślnie! Skontaktujemy się z Tobą wkrótce.
          </div>
        )}

        {/* ERROR MESSAGE */}
        <ErrorMessage error={error} className="mb-8 text-center" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORMULARZ */}
          <div>

            <ContactForm onSubmit={handleFormSubmit} />
          </div>

          {/* DANE KONTAKTOWE I MAPA */}
          <div>
            {/* IKONY SOCIAL */}
            <div className="mb-8">
   
              <div className="flex items-center justify-center">
              <SocialMediaIcons size="text-4xl" className="mb-6" />
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