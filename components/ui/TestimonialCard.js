/**
 * TestimonialCard - Komponent karty opinii
 * 
 * Eliminuje duplikację logiki kart opinii poprzez:
 * - Jednolitą strukturę karty opinii
 * - Spójne style gwiazdek i layoutu
 * - Elastyczne opcje konfiguracji
 * 
 * @param {Object} testimonial - Obiekt z danymi opinii
 * @param {string} className - Dodatkowe klasy CSS
 * @returns {JSX.Element} Karta opinii
 */

'use client';
import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ testimonial, className = "" }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-sm ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      {/* GWIAZDKI I OCENA */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1">
          {renderStars(testimonial.rating)}
        </div>
        <span className="text-sm text-gray-500">
          {testimonial.date}
        </span>
      </div>
      
      {/* TEKST OPINII */}
      <blockquote className="text-gray-700 mb-4 italic">
        "{testimonial.text}"
      </blockquote>
      
      {/* AUTOR */}
      <div className="text-right">
        <cite className="text-textDark font-semibold not-italic">
          — {testimonial.name}
        </cite>
      </div>
    </div>
  );
}
