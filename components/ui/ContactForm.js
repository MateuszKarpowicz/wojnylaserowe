'use client';
import FormCore from '@/components/forms/FormCore';
import { useSecureFormSubmit } from '@/components/hooks';
import FormField from '@/components/ui/FormField';
import { contactFormSchema } from '@/lib/validation';
import { useState } from 'react';

export default function ContactForm() {
  const { submitForm, isSubmitting, submitError } = useSecureFormSubmit();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async formData => {
    const result = await submitForm(formData, '/api/contact');

    if (result.success) {
      setIsSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  };

  if (isSuccess) {
    return (
      <div className='bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-lg text-center'>
        <h3 className='text-xl font-semibold mb-2'>✅ Formularz wysłany!</h3>
        <p>Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.</p>
      </div>
    );
  }

  return (
    <div className='bg-surface p-8 md:p-12 rounded-xl shadow-lg border-2 border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300'>
      <h2 className='text-2xl md:text-3xl font-display font-bold text-text-dark mb-8 text-center'>
        Skontaktuj się z nami
      </h2>

      <FormCore
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
        submitText='Wyślij wiadomość'
        loadingText='Wysyłanie...'
      >
        {({ formData, handleInputChange, isLoading, fieldErrors }) => (
          <div className='space-y-6 md:space-y-8'>
            {/* Imię i nazwisko */}
            <FormField
              type='text'
              name='name'
              label='Imię i nazwisko'
              value={formData.name || ''}
              onChange={handleInputChange}
              required
              placeholder='Wprowadź swoje imię i nazwisko'
              error={fieldErrors?.name}
              disabled={isLoading}
              className='border-neon-purple/50 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20'
            />

            {/* Email */}
            <FormField
              type='email'
              name='email'
              label='Adres email'
              value={formData.email || ''}
              onChange={handleInputChange}
              required
              placeholder='twoj@email.com'
              error={fieldErrors?.email}
              disabled={isLoading}
              className='border-neon-purple/50 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20'
            />

            {/* Telefon */}
            <FormField
              type='tel'
              name='phone'
              label='Numer telefonu'
              value={formData.phone || ''}
              onChange={handleInputChange}
              placeholder='+48 123 456 789'
              error={fieldErrors?.phone}
              disabled={isLoading}
              className='border-neon-purple/50 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20'
            />

            {/* Rodzaj usługi */}
            <FormField
              type='select'
              name='service'
              label='Rodzaj usługi'
              value={formData.service || ''}
              onChange={handleInputChange}
              required
              placeholder='Wybierz rodzaj usługi'
              options={[
                'Usunięcie tatuażu',
                'Usunięcie blizny',
                'Konsultacja',
                'Inne',
              ]}
              error={fieldErrors?.service}
              disabled={isLoading}
              className='border-neon-purple/50 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20'
            />

            {/* Opis */}
            <FormField
              type='textarea'
              name='description'
              label='Opis'
              value={formData.description || ''}
              onChange={handleInputChange}
              required
              placeholder='Opisz szczegółowo czego potrzebujesz...'
              error={fieldErrors?.description}
              disabled={isLoading}
              className='border-neon-purple/50 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20'
            />

            {/* Preferowane terminy */}
            <FormField
              type='textarea'
              name='dates'
              label='Preferowane terminy'
              value={formData.dates || ''}
              onChange={handleInputChange}
              placeholder='Kiedy chciałbyś się spotkać? (opcjonalne)'
              error={fieldErrors?.dates}
              disabled={isLoading}
              className='border-neon-purple/50 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20'
            />

            {/* Zdjęcia */}
            <FormField
              type='file'
              name='photos'
              label='Zdjęcia (opcjonalne)'
              onChange={handleInputChange}
              disabled={isLoading}
              className='border-neon-purple/50 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20'
            />
            <p className='text-sm text-secondary'>
              Możesz załączyć maksymalnie 5 zdjęć w formacie JPG, PNG lub WebP
            </p>

            {/* Error message */}
            {submitError && (
              <div className='bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg'>
                {submitError}
              </div>
            )}
          </div>
        )}
      </FormCore>
    </div>
  );
}
