/**
 * Shared icon map - centralna konfiguracja ikon dla całego projektu
 *
 * Mapuje nazwy ikon (stringi) na komponenty z react-icons/fa.
 * Używany w komponentach, które przyjmują ikony jako string lub komponent.
 *
 * @example
 * import { iconMap, getIcon } from '@/lib/icons';
 * const Icon = getIcon('FaCertificate'); // Zwraca komponent lub domyślny
 */

import {
  FaCalendarCheck,
  FaCertificate,
  FaCheckCircle,
  FaFlask,
  FaGraduationCap,
  FaHandshake,
  FaHeart,
  FaShieldAlt,
  FaUserMd,
} from 'react-icons/fa';

/**
 * Mapowanie nazw ikon na komponenty
 */
export const iconMap = {
  FaCalendarCheck,
  FaCertificate,
  FaCheckCircle,
  FaFlask,
  FaGraduationCap,
  FaHandshake,
  FaHeart,
  FaShieldAlt,
  FaUserMd,
};

/**
 * Helper do pobierania ikony z mapy
 *
 * @param {string|React.Component} icon - Nazwa ikony (string) lub komponent ikony
 * @param {React.Component} defaultIcon - Domyślna ikona, jeśli nie znaleziono (domyślnie: FaCheckCircle)
 * @returns {React.Component} Komponent ikony
 *
 * @example
 * const Icon = getIcon('FaCertificate', FaCheckCircle);
 * const Icon = getIcon(customIconComponent); // Zwraca komponent bez zmian
 */
export function getIcon(icon, defaultIcon = FaCheckCircle) {
  if (!icon) {
    return defaultIcon;
  }

  // Jeśli ikona jest komponentem, zwróć go bez zmian
  if (typeof icon !== 'string') {
    return icon;
  }

  // Jeśli ikona jest stringiem, znajdź w mapie
  return iconMap[icon] || defaultIcon;
}
