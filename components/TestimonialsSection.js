'use client';
import { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Przykładowe opinie (można rozszerzyć)
  const testimonials = [
    {
      id: 1,
      name: "Anna K.",
      rating: 5,
      text: "2 sesje i błąd młodości poszedł w zapomnienie. To była czysta przyjemność usuwać tatuaż u Piotrka - Fachowo i sympatycznie ☺️ Z czystym sumieniem Polecam‼️Sama jeszcze wrócę na usunięcie kolejnego tatuażu.",
      date: "2 tygodnie temu"
    },
    {
      id: 2,
      name: "Michał W.",
      rating: 5,
      text: "Profesjonalne podejście i świetne rezultaty. Tatuaż który miałem od 10 lat zniknął po 3 sesjach. Polecam każdemu kto myśli o usunięciu tatuażu.",
      date: "1 miesiąc temu"
    },
    {
      id: 3,
      name: "Kasia M.",
      rating: 5,
      text: "Bardzo miła obsługa i skuteczne zabiegi. Blizna po operacji znacznie się zmniejszyła. Jestem bardzo zadowolona z efektów.",
      date: "3 tygodnie temu"
    },
    {
      id: 4,
      name: "Tomek R.",
      rating: 5,
      text: "Najlepsza klinika w Krakowie! Nowoczesny sprzęt i doświadczony personel. Usunięcie tatuażu przebiegło bezboleśnie.",
      date: "1 tydzień temu"
    },
    {
      id: 5,
      name: "Magda L.",
      rating: 5,
      text: "Konsultacja była bardzo szczegółowa, wszystko zostało wyjaśnione. Zabieg laserowy był skuteczny i bezpieczny.",
      date: "2 miesiące temu"
    },
    {
      id: 6,
      name: "Paweł K.",
      rating: 5,
      text: "Świetna atmosfera i profesjonalizm na najwyższym poziomie. Polecam wszystkim znajomym!",
      date: "3 tygodnie temu"
    }
  ];

  // Auto-scroll co 5 sekund
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Renderowanie gwiazdek
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-lg ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            Opinie naszych klientów
          </h2>
          
          {/* STATYSTYKI GOOGLE */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-textDark">5.0</span>
            <span className="text-gray-600">/5</span>
          </div>
          <p className="text-gray-600 text-lg">(48 opinii)</p>
        </div>

        {/* KARUZELA OPINII */}
        <div className="relative">
          {/* OPINIE */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg p-6 mx-2">
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
                </div>
              ))}
            </div>
          </div>

          {/* NAWIGACJA STRZAŁKAMI */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Poprzednia opinia"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Następna opinia"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>

        {/* KROPKI NAWIGACYJNE */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-neonBlue' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Przejdź do opinii ${index + 1}`}
            />
          ))}
        </div>

        {/* LINK DO GOOGLE */}
        <div className="text-center mt-8">
          <a
            href="https://share.google/rtnkIqucTiA78grtD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neonBlue text-white px-8 py-3 rounded-lg hover:bg-neonPurple transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Zobacz wszystkie opinie na Google
          </a>
        </div>
      </div>
    </section>
  );
}