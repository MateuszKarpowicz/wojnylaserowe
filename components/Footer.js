import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-darkBg/95 border-t border-neonBlue/20 shadow-[0_0_20px_rgba(0,224,255,0.3)]">
      <div className="max-w-screen-lg mx-auto px-4 py-3 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-between w-full max-w-md text-textLight">
          <a 
            href="#" 
            aria-label="Facebook"
            className="text-4xl hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg flex-1 flex justify-center"
          >
            <FaFacebook />
          </a>
          <a 
            href="#" 
            aria-label="Instagram"
            className="text-4xl hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg flex-1 flex justify-center"
          >
            <FaInstagram />
          </a>
          <a 
            href="#" 
            aria-label="Telefon"
            className="text-4xl hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg flex-1 flex justify-center"
          >
            <FaPhone />
          </a>
        </div>
        <div>
          <p className="text-xs text-textLight/70">
            © 2025 Wojny Laserowe. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
