'use client';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MapComponent from '@/components/ui/MapComponent';
import SocialMediaIcons from '@/components/ui/SocialMediaIcons';
import SectionHeader from '@/components/ui/SectionHeader';
import { BaseSection } from '@/components/base';
import contactData from '@/content/texts/contact.json';

export default function ContactInfoSection() {
  return (
    <BaseSection id="kontakt-info" className="section-pad bg-gray-50">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title="Informacje kontaktowe"
        subtitle="Gdzie nas znajdziesz i jak się z nami skontaktować"
      />

      {/* MAPA I INFORMACJE */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* MAPA */}
        <div>
          <MapComponent />
        </div>

        {/* INFORMACJE KONTAKTOWE */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-normal text-textDark mb-4">
            {contactData.info.title}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-neonBlue text-lg" />
              <span className="text-gray-700">{contactData.info.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-neonBlue text-lg">📞</span>
              <span className="text-gray-700">{contactData.info.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-neonBlue text-lg">✉️</span>
              <span className="text-gray-700">{contactData.info.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-neonBlue text-lg">🕒</span>
              <span className="text-gray-700">{contactData.info.hours}</span>
            </div>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="text-center">
          <h3 className="text-lg font-normal text-textDark mb-4">
            {contactData.social.title}
          </h3>
          <SocialMediaIcons size="text-2xl" />
        </div>
      </div>
    </BaseSection>
  );
}
