'use client';
import { useState } from 'react';
import ContactForm from './ContactForm';
import ErrorMessage from './ui/ErrorMessage';
import { simulateAsyncOperation } from '../utils/asyncSimulator';

export default function OfferSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const options = [
    { id: 'blizna', title: 'Chcę usunąć bliznę', icon: '🔧' },
    { id: 'tatuaz', title: 'Chcę usunąć tatuaż', icon: '🎨' },
    { id: 'konsultacja', title: 'Konsultacje', icon: '💬' }
  ];

  const toggleSlider = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedOption(null);
      setError(null);
    }
  };

  const selectOption = (optionId) => {
    setSelectedOption(optionId);
    setError(null);
  };

  const goBack = () => {
    setSelectedOption(null);
    setError(null);
  };

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Use async simulator instead of direct setTimeout
      await simulateAsyncOperation(1500);
      
      console.log('Formularz z rozsuwaka wysłany:', formData);
      
      // Close slider after successful submission
      setIsOpen(false);
      setSelectedOption(null);
      
      // Show success message (could be a toast notification)
      console.log('Formularz został wysłany pomyślnie!');
      
    } catch (err) {
      console.error('Error submitting offer form:', err);
      setError('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* PRZYCISK OFERTA - pod headerem po prawej */}
      <div className="fixed top-16 right-0 z-40">
        <button
          onClick={toggleSlider}
          disabled={isSubmitting}
          className="bg-darkBg/95 text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none font-display text-lg font-bold w-20 h-12 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-textLight border-t-transparent rounded-full animate-spin"></div>
          ) : (
            'OFERTA'
          )}
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
                disabled={isSubmitting}
                className="text-textLight hover:text-neonBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ✕
              </button>
            </div>
            
            {/* ERROR MESSAGE */}
            <ErrorMessage error={error} className="mb-6" />
            
            <div className="space-y-3">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => selectOption(option.id)}
                  disabled={isSubmitting}
                  className="w-full text-left p-4 rounded-lg hover:bg-neonBlue/10 transition-colors duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
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
                disabled={isSubmitting}
                className="text-textLight hover:text-neonBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <h2 className="text-textLight font-display text-xl font-bold">
                {options.find(opt => opt.id === selectedOption)?.title}
              </h2>
            </div>

            {/* ERROR MESSAGE */}
            <ErrorMessage error={error} className="mb-6" />

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
