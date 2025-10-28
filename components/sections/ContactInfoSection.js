'use client';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MapComponent from '@/components/ui/MapComponent';
import SocialMediaIcons from '@/components/ui/SocialMediaIcons';
import SectionHeader from '@/components/ui/SectionHeader';
import { BaseSection, BaseContactInfo } from '@/components/base';
import contactInfoData from '@/content/texts/contact-info.json';

export default function ContactInfoSection() {
  return (
    <BaseSection id="kontakt-info" className="section-pad bg-gray-50 container">
      {/* NAGŁÓWEK */}
      <SectionHeader 
        title={contactInfoData.title}
        subtitle={contactInfoData.subtitle}
      />

      {/* MAPA I INFORMACJE */}
      <div className="space-y-8">
        {/* MAPA */}
        <div>
          <MapComponent />
        </div>

        {/* INFORMACJE KONTAKTOWE */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-normal text-textDark mb-4">
            {contactInfoData.info.title}
          </h3>
          <div className="space-y-3">
            <BaseContactInfo
              icon={<FaMapMarkerAlt className="text-neonBlue text-lg" />}
              text={contactInfoData.info.address}
            />
            <BaseContactInfo
              icon={<span className="text-neonBlue text-lg">📞</span>}
              text={contactInfoData.info.phone}
            />
            <BaseContactInfo
              icon={<span className="text-neonBlue text-lg">✉️</span>}
              text={contactInfoData.info.email}
            />
            <BaseContactInfo
              icon={<span className="text-neonBlue text-lg">🕒</span>}
              text={contactInfoData.info.hours}
            />
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="text-center">
          <h3 className="text-lg font-normal text-textDark mb-4">
            {contactInfoData.social.title}
          </h3>
          <SocialMediaIcons size="text-2xl" />
        </div>
      </div>
    </BaseSection>
  );
}
