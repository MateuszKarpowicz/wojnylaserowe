'use client';

import Modal from '@/components/overlay/Modal';
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
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        variant='drawer'
        position='bottom'
        closeOnOverlayClick={true}
        dragToClose={true}
        className='bg-white text-neutral-900 rounded-t-2xl shadow-2xl border-t border-neutral-900/10 max-h-[60vh] px-4'
      >
        <div className='h-full flex flex-col'>
          {/* Grabber handle */}
          <div className='grid place-items-center pt-2 pb-1'>
            <div className='h-1.5 w-10 rounded-full bg-neutral-300' />
          </div>
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
      </Modal>
    </>
  );
}
