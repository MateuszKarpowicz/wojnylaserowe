import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Section, SectionHeader, Container } from '@/components/primitives';

/**
 * Sekcja informacji kontaktowych z nagłówkiem i wrapperem
 * @param {Object} data - Dane contactInfo z title, address, hours, phone, email
 */
export default function ContactInfoSection({ data }) {
  const { contactInfo } = data;

  return (
    <Section bg='surface'>
      <Container>
        <SectionHeader title={data.title} variant='dark' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* ADRES I GODZINY */}
          <div className='space-y-6'>
            <div className='flex items-start gap-3'>
              <FaMapMarkerAlt className='text-neon-blue text-xl mt-1' />
              <div>
                <h3 className='font-normal text-text-dark mb-1'>
                  {contactInfo.address.title}
                </h3>
                <p className='text-secondary'>
                  {contactInfo.address.businessName}
                  <br />
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <FaClock className='text-neon-blue text-xl mt-1' />
              <div>
                <h3 className='font-normal text-text-dark mb-1'>
                  {contactInfo.hours.title}
                </h3>
                <p className='text-secondary'>
                  {contactInfo.hours.mondayFriday}
                  <br />
                  {contactInfo.hours.saturday}
                  <br />
                  {contactInfo.hours.sunday}
                </p>
              </div>
            </div>
          </div>

          {/* TELEFON I EMAIL */}
          <div className='space-y-6'>
            <div className='flex items-start gap-3'>
              <FaPhone className='text-neon-blue text-xl mt-1' />
              <div>
                <h3 className='font-normal text-text-dark mb-1'>
                  {contactInfo.phone.title}
                </h3>
                <p className='text-secondary'>
                  <a
                    href={`tel:${contactInfo.phone.number}`}
                    className='hover:text-neon-blue transition-colors'
                  >
                    {contactInfo.phone.number}
                  </a>
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <FaEnvelope className='text-neon-blue text-xl mt-1' />
              <div>
                <h3 className='font-normal text-text-dark mb-1'>
                  {contactInfo.email.title}
                </h3>
                <p className='text-secondary'>
                  <a
                    href={`mailto:${contactInfo.email.address}`}
                    className='hover:text-neon-blue transition-colors'
                  >
                    {contactInfo.email.address}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
