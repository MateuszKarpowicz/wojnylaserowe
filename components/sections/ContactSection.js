'use client';
import ContactForm from '@/components/ui/ContactForm';
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
    <BaseSection id="kontakt" className="section-pad bg-white">
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

      {/* FORMULARZ */}
      <div className="max-w-2xl mx-auto">
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </BaseSection>
  );
}