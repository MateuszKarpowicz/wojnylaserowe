'use client';
import { useState } from 'react';
import ErrorMessage from './ui/ErrorMessage';
import { simulateAsyncOperation } from '../utils/asyncSimulator';
import contactFormData from '../content/texts/contactform.json';

export default function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    description: '',
    dates: '',
    photos: null
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      photos: e.target.files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Use async simulator instead of direct setTimeout
      await simulateAsyncOperation(1000);
      
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log('Formularz wysłany:', formData);
      }
      
      // Reset form on success
      setFormData({
        name: '',
        phone: '',
        service: '',
        description: '',
        dates: '',
        photos: null
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(contactFormData.validation.required);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ERROR MESSAGE */}
      <ErrorMessage error={error} />

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
          onChange={handleFileChange}
          multiple
          accept="image/*"
          disabled={isLoading}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* PRZYCISK WYŚLIJ */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-neonBlue text-white font-semibold py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            {contactFormData.submit.loading}
          </>
        ) : (
          contactFormData.submit.text
        )}
      </button>
    </form>
  );
}