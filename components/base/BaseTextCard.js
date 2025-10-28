/**
 * BaseTextCard - Komponent bazowy dla kart z tekstem
 * 
 * Eliminuje duplikację kart tekstowych poprzez:
 * - Jednolitą strukturę kart z tekstem
 * - Spójne style dla paragrafów
 * - Elastyczne opcje konfiguracji
 * 
 * @param {Array} paragraphs - Tablica paragrafów
 * @param {string} className - Dodatkowe klasy CSS
 * @returns {JSX.Element} Karta z tekstem
 */

export default function BaseTextCard({ 
  paragraphs = [],
  className = ""
}) {
  return (
    <div className={`text-center ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
