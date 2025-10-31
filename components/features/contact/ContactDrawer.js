'use client';

import { FancyDrawer } from '@/components/composed';
import ContactForm from '@/components/features/contact/ContactForm';
import { Button } from '@/components/primitives';
import { useState } from 'react';

export default function ContactDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='max-w-md mx-auto w-full mt-6'>
        <Button
          variant='cta-blue'
          fullWidth={true}
          onClick={() => setOpen(true)}
        >
          Napisz wiadomość
        </Button>
      </div>
      <FancyDrawer
        open={open}
        onOpenChange={setOpen}
        side='bottom'
        snapPoints={[60, 100]}
        initialSnap={60}
        dragToClose={true}
        blurOverlay={true}
        className='px-4'
      >
        <div className='h-full flex flex-col'>
          <div className='flex-1 p-6 overflow-y-auto'>
            <h3
              id='contact-drawer-title'
              className='text-lg font-semibold text-neutral-900 mb-6 font-display text-center'
            >
              Formularz kontaktowy
            </h3>
            <ContactForm />
          </div>
        </div>
      </FancyDrawer>
    </>
  );
}
