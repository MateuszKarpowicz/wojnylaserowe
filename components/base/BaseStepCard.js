/**
 * BaseStepCard - Komponent bazowy dla kroków procesu
 * 
 * Eliminuje duplikację w ProcessSection i innych sekcjach z krokami.
 * Zapewnia spójny wygląd kroków z numeracją i opisem.
 * 
 * @param {number} number - Numer kroku (1, 2, 3...)
 * @param {string} title - Tytuł kroku
 * @param {string} description - Opis kroku
 * @param {string} className - Dodatkowe klasy CSS
 * @returns {JSX.Element} Karta kroku z numeracją
 */

export default function BaseStepCard({ 
  number, 
  title, 
  description, 
  className = "" 
}) {
  return (
    <div className={`text-center ${className}`}>
      {/* NUMER KROKU */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neonBlue mx-auto mb-4">
        <span className="text-white font-normal text-xl">{number}</span>
      </div>
      
      {/* TYTUŁ */}
      <h3 className="text-xl font-normal text-textDark mb-2">
        {title}
      </h3>
      
      {/* OPIS */}
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
}
