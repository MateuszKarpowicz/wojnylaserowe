'use client';
import { BaseForm } from '@/components/base';
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
          <div>
            <label className="block text-textDark text-sm font-semibold mb-2">
              {contactFormData.fields.name.label} *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isLoading}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder={contactFormData.fields.name.placeholder}
            />
          </div>

          {/* NUMER TELEFONU */}
          <div>
            <label className="block text-textDark text-sm font-semibold mb-2">
              {contactFormData.fields.phone.label} *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              disabled={isLoading}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder={contactFormData.fields.phone.placeholder}
            />
          </div>

          {/* RODZAJ USŁUGI */}
          <div>
            <label className="block text-textDark text-sm font-semibold mb-2">
              {contactFormData.fields.service.label} *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              disabled={isLoading}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">{contactFormData.fields.service.placeholder}</option>
              {contactFormData.fields.service.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* OPIS PROBLEMU */}
          <div>
            <label className="block text-textDark text-sm font-semibold mb-2">
              {contactFormData.fields.description.label} *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows="4"
              disabled={isLoading}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder={contactFormData.fields.description.placeholder}
            />
          </div>

          {/* PREFEROWANE DATY */}
          <div>
            <label className="block text-textDark text-sm font-semibold mb-2">
              {contactFormData.fields.dates.label}
            </label>
            <textarea
              name="dates"
              value={formData.dates}
              onChange={handleInputChange}
              rows="2"
              disabled={isLoading}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder={contactFormData.fields.dates.placeholder}
            />
          </div>

          {/* ZDJĘCIA */}
          <div>
            <label className="block text-textDark text-sm font-semibold mb-2">
              {contactFormData.fields.photos.label}
            </label>
            <input
              type="file"
              name="photos"
              onChange={handleInputChange}
              multiple
              accept="image/*"
              disabled={isLoading}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </>
      )}
    </BaseForm>
  );
}