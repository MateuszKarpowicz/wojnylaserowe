'use client';
import { useState } from 'react';
import ContactForm from './ContactForm';

export default function OfferSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 'blizna', title: 'Chcę usunąć bliznę', icon: '🔧' },
    { id: 'tatuaz', title: 'Chcę usunąć tatuaż', icon: '🎨' },
    { id: 'konsultacja', title: 'Konsultacje', icon: '💬' }
  ];

  const toggleSlider = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedOption(null);
    }
  };

  const selectOption = (optionId) => {
    setSelectedOption(optionId);
  };

  const goBack = () => {
    setSelectedOption(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('Formularz z rozsuwaka wysłany:', formData);
    // Tutaj będzie logika wysyłania formularza
    // Po wysłaniu można zamknąć rozsuwak
    setIsOpen(false);
    setSelectedOption(null);
  };

  return (
    <>
      {/* PRZYCISK OFERTA - pod headerem po prawej */}
      <div className="fixed top-16 right-0 z-40">
        <button
          onClick={toggleSlider}
          className="bg-darkBg/95  text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none  font-display text-lg font-bold w-20 h-12 flex items-center justify-center"
        >
          OFERTA
        </button>
      </div>

      {/* ROZSUWAK PANEL */}
      <div className={`fixed top-16 left-0 right-0 z-50 bg-darkBg/95 border-l border-neonBlue/20 shadow-[0_0_20px_rgba(0,224,255,0.3)] transition-all duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* WYBÓR OPCJI */}
        {!selectedOption && (
          <div className="max-w-md mx-auto h-screen p-6 pb-24 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-textLight font-display text-xl font-bold">Wybierz usługę</h2>
              <button
                onClick={toggleSlider}
                className="text-textLight hover:text-neonBlue transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => selectOption(option.id)}
                  className="w-full text-left p-4 rounded-lg hover:bg-neonBlue/10 transition-colors duration-300 group"
                >
                  <div className="flex items-center">
                    <span className="text-textLight font-semibold text-lg group-hover:text-neonBlue transition-colors">
                      {option.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FORMULARZE */}
        {selectedOption && (
          <div className="max-w-md mx-auto h-screen p-6 pb-24 overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={goBack}
                className="text-textLight hover:text-neonBlue transition-colors"
              >
                ←
              </button>
              <h2 className="text-textLight font-display text-xl font-bold">
                {options.find(opt => opt.id === selectedOption)?.title}
              </h2>
            </div>

            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        )}
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={toggleSlider}
          className="fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
}
