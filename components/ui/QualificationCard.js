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
    <div className='about-card'>
      <div className='flex flex-col items-center text-center'>
        <IconComponent className='about-icon' />
        <h3 className='text-xl font-semibold text-text-dark mb-3'>{title}</h3>
        <p className='text-secondary leading-relaxed'>{description}</p>
      </div>
    </div>
  );
}
