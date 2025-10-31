'use client';
import { useOferta } from '@/components/context/OfertaContext';
import FormCore from '@/components/forms/FormCore';
import { useOfferForm } from '@/components/hooks/useOfferForm';
import { FancyDrawer } from '@/components/composed';
import FormField from '@/components/forms/FormField';
import { StatusMessage } from '@/components/ui';
import { Button } from '@/components/primitives';
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
    description: '',
    dates: '',
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
      {/* FANCY DRAWER - bottom sheet na mobile, side drawer na desktop */}
      <FancyDrawer
        open={isOpen}
        onOpenChange={toggleSlider}
        side='bottom'
        snapPoints={[60, 100]}
        initialSnap={60}
        dragToClose={true}
        blurOverlay={true}
        className='px-4'
      >
        <div
          className='h-full flex flex-col'
          onClick={e => e.stopPropagation()}
        >
          {/* OPCJE */}
          {!selectedOption && (
            <div className='flex-1 p-6 overflow-y-auto'>
              <h3 className='text-lg font-semibold text-neutral-900 mb-6'>
                Wybierz rodzaj usługi:
              </h3>
              <div className='space-y-4'>
                {offerSliderData.options.map(option => (
                  <button
                    key={option.id}
                    onClick={() => selectOption(option.id)}
                    className='w-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 hover:border-neutral-400 rounded-lg p-4 text-left transition-all duration-200'
                  >
                    <span className='text-neutral-900 font-medium'>
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
                <Button
                  onClick={goBack}
                  variant='purple'
                  size='sm'
                  aria-label='Wróć do wyboru usługi'
                >
                  ←
                </Button>
                <h2 className='text-neutral-900 font-display text-xl font-bold'>
                  {
                    offerSliderData.options.find(
                      opt => opt.id === selectedOption
                    )?.title
                  }
                </h2>
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <StatusMessage type='error' className='mb-6'>
                  {error}
                </StatusMessage>
              )}

              <FormCore
                initialData={initialFormData}
                onSubmit={handleFormSubmit}
                submitText="WYŚLIJ"
                loadingText={contactFormData.submit.loading}
              >
                {({ formData, handleInputChange, isLoading, fieldErrors }) => (
                  <>
                    {/* IMIĘ I NAZWISKO */}
                    <FormField
                      type='text'
                      name='name'
                      label={contactFormData.fields.name.label}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      placeholder={contactFormData.fields.name.placeholder}
                      error={fieldErrors?.name}
                      dark={false}
                    />

                    {/* NUMER TELEFONU */}
                    <FormField
                      type='tel'
                      name='phone'
                      label={contactFormData.fields.phone.label}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      placeholder={contactFormData.fields.phone.placeholder}
                      error={fieldErrors?.phone}
                      dark={false}
                    />

                    {/* OPIS PROBLEMU */}
                    <FormField
                      type='textarea'
                      name='description'
                      label={contactFormData.fields.description.label}
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      placeholder={
                        contactFormData.fields.description.placeholder
                      }
                      error={fieldErrors?.description}
                      dark={false}
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
                      dark={false}
                    />
                  </>
                )}
              </FormCore>
            </div>
          )}
        </div>
      </FancyDrawer>
    </>
  );
}
