'use client';
import { useState } from 'react';
import ContactForm from '@/components/sections/ContactForm';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { simulateAsyncOperation } from '@/utils/asyncSimulator';
import offerSliderData from '@/content/texts/offerslider.json';
import { BaseModal } from '@/components/base';

export default function OfferSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

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
      console.log(offerSliderData.success);
      
    } catch (err) {
      console.error('Error submitting offer form:', err);
      setError(offerSliderData.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* PRZYCISK OFERTA - pod headerem po prawej */}
      <div className="fixed top-20 right-4 z-50">
        <button
          onClick={toggleSlider}
          className="bg-neonBlue text-white px-6 py-3 rounded-lg shadow-lg hover:bg-neonPurple transition-colors duration-300 font-semibold flex items-center gap-2"
        >
          <span className="text-xl">{offerSliderData.button.icon}</span>
          {offerSliderData.button.text}
        </button>
      </div>

      {/* MODAL */}
      <BaseModal 
        isOpen={isOpen} 
        onClose={toggleSlider}
        className="max-w-md mx-auto"
        overlayClassName="bg-black bg-opacity-50"
      >
        <div className="h-full flex flex-col bg-white rounded-lg shadow-2xl">
          {/* HEADER */}
          <div className="bg-neonBlue text-white p-6 flex items-center justify-between rounded-t-lg">
            <h2 className="text-xl font-bold">
              {offerSliderData.button.text}
            </h2>
            <button
              onClick={toggleSlider}
              className="text-white hover:text-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* OPCJE */}
          {!selectedOption && (
            <div className="flex-1 p-6 overflow-y-auto">
              <h3 className="text-lg font-semibold text-textDark mb-6">
                Wybierz rodzaj usługi:
              </h3>
              <div className="space-y-4">
                {offerSliderData.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => selectOption(option.id)}
                    className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 text-left transition-colors duration-200 flex items-center gap-3"
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <span className="text-textDark font-medium">{option.title}</span>
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
                  {offerSliderData.options.find(opt => opt.id === selectedOption)?.title}
                </h2>
              </div>

              {/* ERROR MESSAGE */}
              <ErrorMessage error={error} className="mb-6" />

              <ContactForm onSubmit={handleFormSubmit} />
            </div>
          )}
        </div>
      </BaseModal>
    </>
  );
}