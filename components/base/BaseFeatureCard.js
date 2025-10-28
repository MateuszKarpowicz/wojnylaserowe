/**
 * BaseFeatureCard - Komponent bazowy dla cech/features
 * 
 * Eliminuje duplikację w WhyUsSection i innych sekcjach z cechami.
 * Zapewnia spójny wygląd cech z ikoną i opisem.
 * 
 * @param {string} icon - Ikona/znak cechy (✓, ★, etc.)
 * @param {string} text - Tekst cechy
 * @param {string} className - Dodatkowe klasy CSS
 * @returns {JSX.Element} Karta cechy z ikoną
 */

export default function BaseFeatureCard({ 
  icon = "✓", 
  text, 
  className = "" 
}) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {/* IKONA */}
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center">
          <span className="text-white font-normal text-sm">{icon}</span>
        </div>
      </div>
      
      {/* TEKST */}
      <div className="flex-1">
        <p className="text-gray-800 font-normal">
          {text}
        </p>
      </div>
    </div>
  );
}
