export default function WhyUsSection() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* NAGŁÓWEK */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            Dlaczego my
          </h2>
        </div>

        {/* ZALETY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-medium">
                Usuwam tatuaże od 2019 roku – setki udanych zabiegów i zadowolonych klientów
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-medium">
                Pracuję na laserze pikosekundowym – jednej z najskuteczniejszych technologii na rynku
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-medium">
                Używam profesjonalnej chłodziarki do skóry, by zminimalizować ból i obrzęk
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-medium">
                Zachowuję pełną sterylność i indywidualne podejście
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-medium">
                Przed każdym zabiegiem przeprowadzam konsultację i analizę skóry
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-neonBlue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-medium">
                Realne efekty bez obiecywania cudów – tylko sprawdzone metody i uczciwe podejście
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
