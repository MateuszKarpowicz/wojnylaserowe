'use client';
import { BaseForm, BaseFormField } from '@/components/base';
import contactFormData from '@/content/texts/contactform.json';

export default function ContactForm({ onSubmit }) {
  const initialFormData = {
    name: '',
    phone: '',
    service: '',
    description: '',
    dates: '',
    photos: null
  };

  const handleFormSubmit = async (formData) => {
    if (onSubmit) {
      await onSubmit(formData);
    } else {
      console.log('Formularz wysłany:', formData);
    }
  };

  return (
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
  );
}