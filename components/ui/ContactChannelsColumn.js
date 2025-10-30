'use client';

import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import CopyRow from '@/components/ui/CopyRow';

export default function ContactChannelsColumn() {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+48 666 666 666';
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com';
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com';
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'wojnylaserowe@gmail.com';

  return (
    <div className='grid gap-4 md:gap-5 max-w-md mx-auto'>
      <CopyRow icon={FaFacebook} label='Facebook' value={facebook} href={facebook} />
      <CopyRow icon={FaInstagram} label='Instagram' value={instagram} href={instagram} />
      <CopyRow icon={FaPhoneAlt} label='Telefon' value={phone} href={phoneHref} />
      <CopyRow icon={FaEnvelope} label='Email' value={email} href={`mailto:${email}`} />
    </div>
  );
}
