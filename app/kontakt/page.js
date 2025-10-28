import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import contactPageData from '@/content/texts/contact-page.json';
import ContactForm from '@/components/ui/ContactForm';

export default function Kontakt() {
  return (
    <main className="min-h-screen bg-lightBg text-textDark container-lg">
      {/* NAGŁÓWEK */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-normal text-textDark mb-4">
          {contactPageData.header.title}
        </h1>
        <p className="text-lg text-gray-700">
          {contactPageData.header.subtitle}
        </p>
      </div>

      {/* FORMULARZ KONTAKTOWY */}
      <section className="py-8">
        <ContactForm />
      </section>

      {/* DODATKOWE INFORMACJE KONTAKTOWE */}
      <section className="py-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-normal text-textDark mb-8 text-center">
          {contactPageData.contactInfo.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ADRES I GODZINY */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-neonBlue text-xl mt-1" />
              <div>
                <h3 className="font-normal text-textDark mb-1">
                  {contactPageData.contactInfo.address.title}
                </h3>
                <p className="text-gray-700">
                  {contactPageData.contactInfo.address.businessName}<br />
                  {contactPageData.contactInfo.address.street}<br />
                  {contactPageData.contactInfo.address.city}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaClock className="text-neonBlue text-xl mt-1" />
              <div>
                <h3 className="font-normal text-textDark mb-1">
                  {contactPageData.contactInfo.hours.title}
                </h3>
                <p className="text-gray-700">
                  {contactPageData.contactInfo.hours.mondayFriday}<br />
                  {contactPageData.contactInfo.hours.saturday}<br />
                  {contactPageData.contactInfo.hours.sunday}
                </p>
              </div>
            </div>
          </div>

          {/* TELEFON I EMAIL */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaPhone className="text-neonBlue text-xl mt-1" />
              <div>
                <h3 className="font-normal text-textDark mb-1">
                  {contactPageData.contactInfo.phone.title}
                </h3>
                <p className="text-gray-700">
                  <a href={`tel:${contactPageData.contactInfo.phone.number}`} className="hover:text-neonBlue transition-colors">
                    {contactPageData.contactInfo.phone.number}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-neonBlue text-xl mt-1" />
              <div>
                <h3 className="font-normal text-textDark mb-1">
                  {contactPageData.contactInfo.email.title}
                </h3>
                <p className="text-gray-700">
                  <a href={`mailto:${contactPageData.contactInfo.email.address}`} className="hover:text-neonBlue transition-colors">
                    {contactPageData.contactInfo.email.address}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
