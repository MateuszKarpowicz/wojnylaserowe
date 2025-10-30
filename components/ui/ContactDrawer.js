'use client';

import { useState } from 'react';
import { Button } from '@/components/primitives';
import Modal from '@/components/overlay/Modal';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='max-w-md mx-auto w-full mt-6'>
        <Button variant='ctaBlue' fullWidth={true} onClick={() => setOpen(true)}>Napisz wiadomość</Button>
      </div>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        variant='drawer'
        position='right'
        width='w-1/2'
        className='bg-modal shadow-2xl'
        closeOnOverlayClick={true}
        ariaLabelledBy='contact-drawer-title'
      >
        <div className='h-full flex flex-col bg-modal' onClick={e => e.stopPropagation()}>
          <div className='flex-1 p-6 overflow-y-auto'>
            <h3 id='contact-drawer-title' className='text-lg font-semibold text-text-light mb-6 font-display text-center'>Formularz kontaktowy</h3>
            <ContactForm />
          </div>
        </div>
      </Modal>
    </>
  );
}
