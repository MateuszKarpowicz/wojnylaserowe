/**
 * BaseTextCard - Komponent bazowy dla kart z tekstem
 * 
 * Eliminuje duplikację kart tekstowych poprzez:
 * - Jednolitą strukturę kart z tekstem
 * - Spójne style dla paragrafów
 * - Elastyczne opcje konfiguracji
 * - Obsługę pojedynczego paragrafu i wielu paragrafów
 * 
 * @param {Array|string} paragraphs - Tablica paragrafów lub pojedynczy paragraf
 * @param {string} className - Dodatkowe klasy CSS
 * @returns {JSX.Element} Karta z tekstem
 */

export default function BaseTextCard({ 
  paragraphs = [],
  className = ""
}) {
  // Obsługa pojedynczego paragrafu jako string
  const paragraphsArray = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  
  return (
    <div className={`text-center ${className}`}>
      {paragraphsArray.map((paragraph, index) => (
        <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
