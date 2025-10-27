import { FaMapMarkerAlt } from 'react-icons/fa';

export default function MapComponent() {
  return (
    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
      <div className="text-center text-gray-600">
        <FaMapMarkerAlt className="text-4xl mx-auto mb-2" />
        <p className="font-semibold">Mapa</p>
        <p className="text-sm">Aleja Zygmunta Krasińskiego 1</p>
        <p className="text-sm">31-111 Kraków</p>
      </div>
    </div>
  );
}
