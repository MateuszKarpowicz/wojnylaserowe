import {
  FaCalendarCheck,
  FaCertificate,
  FaFlask,
  FaGraduationCap,
  FaHandshake,
} from 'react-icons/fa';

const iconMap = {
  FaCertificate: FaCertificate,
  FaGraduationCap: FaGraduationCap,
  FaFlask: FaFlask,
  FaCalendarCheck: FaCalendarCheck,
  FaHandshake: FaHandshake,
};

export default function QualificationCard({ icon, title, description }) {
  const IconComponent = iconMap[icon] || FaCertificate;

  return (
    <div className='qualification-card-dark'>
      {/* Content */}
      <div className='flex gap-4'>
        {/* Ikona */}
        <div className='flex-shrink-0'>
          <IconComponent className='qualification-icon' />
        </div>

        {/* Tekst */}
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-text-dark mb-2'>{title}</h3>
          <p className='text-sm text-secondary leading-relaxed'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
