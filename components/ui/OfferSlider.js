'use client';
import { useOferta } from '@/components/context/OfertaContext';
import FormCore from '@/components/forms/FormCore';
import { useOfferForm } from '@/components/hooks/useOfferForm';
import Modal from '@/components/overlay/Modal';
import FormField from '@/components/ui/FormField';
import contactFormData from '@/content/texts/contactform.json';
import offerSliderData from '@/content/texts/offerslider.json';
import { logger } from '@/lib/logger';

export default function OfferSlider() {
  const { isOpen, close } = useOferta();
  const { selectedOption, error, selectOption, goBack, reset, setError } =
    useOfferForm();

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
      reset();
    } else {
      // Modal otwierany przez Header - tu tylko zamykamy
      close();
    }
  };

  const handleFormSubmit = async formData => {
    try {
      // Use async simulator instead of direct setTimeout
      await new Promise(resolve => setTimeout(resolve, 1500));

      logger.log('Formularz z rozsuwaka wysłany:', formData);

      // Close slider after successful submission
      close();
      reset();

      // Show success message (could be a toast notification)
      logger.log(offerSliderData.success);
    } catch (err) {
      logger.error('Error submitting offer form:', err);
      throw new Error(offerSliderData.error);
    }
  };

  return (
    <>
      {/* MODAL - drawer połowa ekranu od lewej */}
      <Modal
        isOpen={isOpen}
        onClose={toggleSlider}
        variant='drawer'
        position='left'
        width='w-1/2'
        className='bg-modal shadow-2xl'
        closeOnOverlayClick={true}
      >
        <div
          className='h-full flex flex-col bg-modal'
          onClick={e => e.stopPropagation()}
        >
          {/* OPCJE */}
          {!selectedOption && (
            <div className='flex-1 p-6 overflow-y-auto'>
              <h3 className='text-lg font-semibold text-text-light mb-6'>
                Wybierz rodzaj usługi:
              </h3>
              <div className='space-y-4'>
                {offerSliderData.options.map(option => (
                  <button
                    key={option.id}
                    onClick={() => selectOption(option.id)}
                    className='w-full bg-button-dark hover:bg-button-dark-hover border border-neon-purple/30 hover:border-neon-purple/50 rounded-lg p-4 text-left transition-all duration-200 shadow-glow-purple/20 hover:shadow-glow-purple/40'
                  >
                    <span className='text-text-light font-medium'>
                      {option.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FORMULARZE */}
          {selectedOption && (
            <div className='max-w-md mx-auto flex-1 p-6 pb-24 overflow-y-auto'>
              <div className='flex items-center gap-3 mb-6'>
                <button
                  onClick={goBack}
                  className='btn-neon-purple px-3 py-1'
                  aria-label='Wróć do wyboru usługi'
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
                <div className='bg-error/20 border border-error/50 text-error px-4 py-3 rounded-lg mb-6'>
                  {error}
                </div>
              )}

              <FormCore
                initialData={initialFormData}
                onSubmit={handleFormSubmit}
                submitText={contactFormData.submit.text}
                loadingText={contactFormData.submit.loading}
              >
                {({ formData, handleInputChange, isLoading, fieldErrors }) => (
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
                      error={fieldErrors?.name}
                      dark={true}
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
                      error={fieldErrors?.phone}
                      dark={true}
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
                      error={fieldErrors?.service}
                      dark={true}
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
                      error={fieldErrors?.description}
                      dark={true}
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
                      error={fieldErrors?.dates}
                      dark={true}
                    />

                    {/* ZDJĘCIA */}
                    <FormField
                      type='file'
                      name='photos'
                      label={contactFormData.fields.photos.label}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      dark={true}
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
