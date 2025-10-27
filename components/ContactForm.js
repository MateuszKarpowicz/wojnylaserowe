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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      photos: e.target.files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Formularz wysłany:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors"
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
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors"
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
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors"
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
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors resize-none"
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
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors resize-none"
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
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-textDark focus:outline-none focus:border-neonBlue transition-colors"
        />
      </div>

      {/* PRZYCISK WYŚLIJ */}
      <button
        type="submit"
        className="w-full bg-neonBlue text-white font-semibold py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300"
      >
        Wyślij zapytanie
      </button>
    </form>
  );
}
