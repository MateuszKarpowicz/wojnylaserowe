'use client';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '@/components/ui/ContactForm';
import MapComponent from '@/components/ui/MapComponent';
import SocialMediaIcons from '@/components/ui/SocialMediaIcons';
import ErrorMessage from '@/components/ui/ErrorMessage';
import SectionHeader from '@/components/ui/SectionHeader';
import { useState } from 'react';
import { simulateAsyncOperation } from '@/utils/asyncSimulator';
import { BaseSection } from '@/components/base';
import contactData from '@/content/texts/contact.json';

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
      setError(contactData.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BaseSection id="kontakt" className="py-8 bg-white">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={contactData.title}
        subtitle={contactData.subtitle}
        className="text-center mb-12"
        subtitleClassName="text-lg text-gray-700 max-w-2xl mx-auto"
      />

      {/* SUCCESS MESSAGE */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-8 text-center">
          ✅ {contactData.form.success}
        </div>
      )}

      {/* ERROR MESSAGE */}
      <ErrorMessage error={error} className="mb-8" />

      {/* FORMULARZ I MAPA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FORMULARZ */}
        <div>
          <ContactForm onSubmit={handleFormSubmit} />
        </div>

        {/* MAPA I INFORMACJE */}
        <div className="space-y-8">
          {/* MAPA */}
          <div>
            <MapComponent />
          </div>

          {/* INFORMACJE KONTAKTOWE */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-textDark mb-4">
              {contactData.info.title}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-neonBlue text-lg" />
                <span className="text-gray-700">{contactData.info.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neonBlue text-lg">📞</span>
                <span className="text-gray-700">{contactData.info.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neonBlue text-lg">✉️</span>
                <span className="text-gray-700">{contactData.info.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neonBlue text-lg">🕒</span>
                <span className="text-gray-700">{contactData.info.hours}</span>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-textDark mb-4">
              {contactData.social.title}
            </h3>
            <SocialMediaIcons size="text-2xl" />
          </div>
        </div>
      </div>
    </BaseSection>
  );
}