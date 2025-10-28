/**
 * BaseContactInfo - Komponent bazowy dla informacji kontaktowych
 * 
 * Eliminuje duplikację w ContactInfoSection i innych sekcjach z kontaktem.
 * Zapewnia spójny wygląd informacji kontaktowych z ikoną i tekstem.
 * 
 * @param {React.ReactNode} icon - Ikona/komponent ikony
 * @param {string} text - Tekst informacji kontaktowej
 * @param {string} className - Dodatkowe klasy CSS
 * @returns {JSX.Element} Linia informacji kontaktowej z ikoną
 */

export default function BaseContactInfo({ 
  icon, 
  text, 
  className = "" 
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* IKONA */}
      <div className="flex-shrink-0">
        {icon}
      </div>
      
      {/* TEKST */}
      <span className="text-gray-700">
        {text}
      </span>
    </div>
  );
}
