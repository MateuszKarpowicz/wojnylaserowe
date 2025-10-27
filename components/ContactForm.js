'use client';
import { useState } from 'react';

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
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
      setError('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ERROR MESSAGE */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* IMIĘ I NAZWISKO */}
      <div>
        <label className="block text-textDark text-sm font-semibold mb-2">
          Imię i nazwisko *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={isLoading}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Jan Kowalski"
        />
      </div>

      {/* NUMER TELEFONU */}
      <div>
        <label className="block text-textDark text-sm font-semibold mb-2">
          Numer telefonu *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          disabled={isLoading}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="+48 123 456 789"
        />
      </div>

      {/* RODZAJ USŁUGI */}
      <div>
        <label className="block text-textDark text-sm font-semibold mb-2">
          Rodzaj usługi *
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          required
          disabled={isLoading}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Wybierz usługę</option>
          <option value="blizna">Chcę usunąć bliznę</option>
          <option value="tatuaz">Chcę usunąć tatuaż</option>
          <option value="konsultacje">Konsultacje</option>
        </select>
      </div>

      {/* OPIS PROBLEMU */}
      <div>
        <label className="block text-textDark text-sm font-semibold mb-2">
          Opis problemu *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          rows="4"
          disabled={isLoading}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Opisz szczegółowo co chcesz usunąć..."
        />
      </div>

      {/* PREFEROWANE DATY */}
      <div>
        <label className="block text-textDark text-sm font-semibold mb-2">
          Preferowane daty
        </label>
        <textarea
          name="dates"
          value={formData.dates}
          onChange={handleInputChange}
          rows="2"
          disabled={isLoading}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="zakres dat, z uwzględnieniem czy w tygodniu / wieczorem / w weekend"
        />
      </div>

      {/* ZDJĘCIA */}
      <div>
        <label className="block text-textDark text-sm font-semibold mb-2">
          Zdjęcia (opcjonalnie)
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
            Wysyłanie...
          </>
        ) : (
          'Wyślij zapytanie'
        )}
      </button>
    </form>
  );
}
