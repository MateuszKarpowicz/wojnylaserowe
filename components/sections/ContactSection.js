'use client';
import { BaseSection, BaseForm, BaseFormField } from '@/components/base';
import SectionHeader from '@/components/ui/SectionHeader';
import { useState } from 'react';
import { simulateAsyncOperation } from '@/utils/asyncSimulator';
import contactData from '@/content/texts/contact.json';
import contactFormData from '@/content/texts/contactform.json';

export default function ContactSection() {
  const [success, setSuccess] = useState(false);

  const initialFormData = {
    name: '',
    phone: '',
    service: '',
    description: '',
    dates: '',
    photos: null
  };

  const handleFormSubmit = async (formData) => {
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
      throw new Error(contactData.form.error);
    }
  };

  return (
    <BaseSection id="kontakt" className="section-pad bg-white container-sm">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={contactData.title}
        subtitle={contactData.subtitle}
        className="text-center mb-12"
        subtitleClassName="text-lg text-gray-700"
      />

      {/* SUCCESS MESSAGE */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-8 text-center">
          ✅ {contactData.form.success}
        </div>
      )}

      {/* FORMULARZ */}
      <div className="mx-auto">
        <BaseForm
          initialData={initialFormData}
          onSubmit={handleFormSubmit}
          submitText={contactFormData.submit.text}
          loadingText={contactFormData.submit.loading}
        >
          {({ formData, handleInputChange, isLoading }) => (
            <>
              {/* IMIĘ I NAZWISKO */}
              <BaseFormField
                type="text"
                name="name"
                label={`${contactFormData.fields.name.label} *`}
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                placeholder={contactFormData.fields.name.placeholder}
              />

              {/* NUMER TELEFONU */}
              <BaseFormField
                type="tel"
                name="phone"
                label={`${contactFormData.fields.phone.label} *`}
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                placeholder={contactFormData.fields.phone.placeholder}
              />

              {/* RODZAJ USŁUGI */}
              <BaseFormField
                type="select"
                name="service"
                label={`${contactFormData.fields.service.label} *`}
                value={formData.service}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                placeholder={contactFormData.fields.service.placeholder}
                options={contactFormData.fields.service.options}
              />

              {/* OPIS PROBLEMU */}
              <BaseFormField
                type="textarea"
                name="description"
                label={`${contactFormData.fields.description.label} *`}
                value={formData.description}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                placeholder={contactFormData.fields.description.placeholder}
              />

              {/* PREFEROWANE DATY */}
              <BaseFormField
                type="textarea"
                name="dates"
                label={contactFormData.fields.dates.label}
                value={formData.dates}
                onChange={handleInputChange}
                disabled={isLoading}
                placeholder={contactFormData.fields.dates.placeholder}
              />

              {/* ZDJĘCIA */}
              <BaseFormField
                type="file"
                name="photos"
                label={contactFormData.fields.photos.label}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </>
          )}
        </BaseForm>
      </div>
    </BaseSection>
  );
}