'use client';
import FormCore from '@/components/forms/FormCore';
import { useModal } from '@/components/hooks/useModal';
import Modal from '@/components/overlay/Modal';
import FormField from '@/components/ui/FormField';
import contactFormData from '@/content/texts/contactform.json';
import offerSliderData from '@/content/texts/offerslider.json';
import { useState } from 'react';

export default function OfferSlider() {
  const { isOpen, open, close } = useModal();
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);

  const initialFormData = {
    name: '',
    phone: '',
    service: '',
    description: '',
    dates: '',
    photos: null,
  };

  const toggleSlider = () => {
    if (isOpen) {
      close();
      setSelectedOption(null);
      setError(null);
    } else {
      open();
    }
  };

  const selectOption = optionId => {
    setSelectedOption(optionId);
    setError(null);
  };

  const goBack = () => {
    setSelectedOption(null);
    setError(null);
  };

  const handleFormSubmit = async formData => {
    try {
      // Use async simulator instead of direct setTimeout
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Formularz z rozsuwaka wysłany:', formData);

      // Close slider after successful submission
      close();
      setSelectedOption(null);

      // Show success message (could be a toast notification)
      console.log(offerSliderData.success);
    } catch (err) {
      console.error('Error submitting offer form:', err);
      throw new Error(offerSliderData.error);
    }
  };

  return (
    <>
      {/* PRZYCISK OFERTA - na linii dolnej headera, zaczyna się od prawej strony, WYSOKI Z-INDEX */}
      <div className='fixed top-[calc(4.5rem-1rem)] right-0 z-modal'>
        <button onClick={toggleSlider} className='btn-offer'>
          {offerSliderData.button.text}
        </button>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onClose={toggleSlider}
        className='max-w-md mx-auto'
        overlayClassName='bg-black bg-opacity-50'
      >
        <div className='h-full flex flex-col bg-white rounded-lg shadow-2xl'>
          {/* HEADER */}
          <div className='bg-neon-blue text-white p-6 flex items-center justify-between rounded-t-lg'>
            <h2 className='text-xl font-bold'>{offerSliderData.button.text}</h2>
            <button
              onClick={toggleSlider}
              className='text-white hover:opacity-75 transition-colors p-2 rounded'
            >
              ✕
            </button>
          </div>

          {/* OPCJE */}
          {!selectedOption && (
            <div className='flex-1 p-6 overflow-y-auto'>
              <h3 className='text-lg font-semibold text-text-dark mb-6'>
                Wybierz rodzaj usługi:
              </h3>
              <div className='space-y-4'>
                {offerSliderData.options.map(option => (
                  <button
                    key={option.id}
                    onClick={() => selectOption(option.id)}
                    className='w-full bg-surface-light hover:bg-surface border border-border-light rounded-lg p-4 text-left transition-colors duration-200 flex items-center gap-3'
                  >
                    <span className='text-2xl'>{option.icon}</span>
                    <span className='text-text-dark font-medium'>
                      {option.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FORMULARZE */}
          {selectedOption && (
            <div className='max-w-md mx-auto h-screen p-6 pb-24 overflow-y-auto'>
              <div className='flex items-center gap-3 mb-6'>
                <button
                  onClick={goBack}
                  className='text-text-light hover:text-neon-blue transition-colors'
                >
                  ←
                </button>
                <h2 className='text-text-light font-display text-xl font-bold'>
                  {
                    offerSliderData.options.find(
                      opt => opt.id === selectedOption
                    )?.title
                  }
                </h2>
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6'>
                  {error}
                </div>
              )}

              <FormCore
                initialData={initialFormData}
                onSubmit={handleFormSubmit}
                submitText={contactFormData.submit.text}
                loadingText={contactFormData.submit.loading}
              >
                {({ formData, handleInputChange, isLoading }) => (
                  <>
                    {/* IMIĘ I NAZWISKO */}
                    <FormField
                      type='text'
                      name='name'
                      label={`${contactFormData.fields.name.label} *`}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      placeholder={contactFormData.fields.name.placeholder}
                    />

                    {/* NUMER TELEFONU */}
                    <FormField
                      type='tel'
                      name='phone'
                      label={`${contactFormData.fields.phone.label} *`}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      placeholder={contactFormData.fields.phone.placeholder}
                    />

                    {/* RODZAJ USŁUGI */}
                    <FormField
                      type='select'
                      name='service'
                      label={`${contactFormData.fields.service.label} *`}
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      placeholder={contactFormData.fields.service.placeholder}
                      options={contactFormData.fields.service.options}
                    />

                    {/* OPIS PROBLEMU */}
                    <FormField
                      type='textarea'
                      name='description'
                      label={`${contactFormData.fields.description.label} *`}
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      placeholder={
                        contactFormData.fields.description.placeholder
                      }
                    />

                    {/* PREFEROWANE DATY */}
                    <FormField
                      type='textarea'
                      name='dates'
                      label={contactFormData.fields.dates.label}
                      value={formData.dates}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      placeholder={contactFormData.fields.dates.placeholder}
                    />

                    {/* ZDJĘCIA */}
                    <FormField
                      type='file'
                      name='photos'
                      label={contactFormData.fields.photos.label}
                      onChange={handleInputChange}
                      disabled={isLoading}
                    />
                  </>
                )}
              </FormCore>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
