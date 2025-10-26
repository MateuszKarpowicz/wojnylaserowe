import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darkBg/95 border-b border-neonBlue/20 shadow-[0_0_20px_rgba(0,224,255,0.3)]">
      <nav className="max-w-screen-lg mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO - po lewej stronie */}
        <Link href="/" className="flex items-center w-1/3">
          <img
            src="/images/logo/logo.svg"
            alt="Wojny Laserowe"
            className="h-12 w-auto"
            style={{ 
              height: '48px', 
              width: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Link>
        
        {/* HAMBURGER MENU - widoczny tylko na mobile */}
        <button 
          aria-label="Toggle menu"
          className="md:hidden text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg"
        >
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
        
        {/* DESKTOP MENU - ukryte na mobile */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/efekty" 
            className="text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg"
          >
            Efekty
          </Link>
          <Link 
            href="/kontakt" 
            className="text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg"
          >
            Kontakt
          </Link>
          <Link 
            href="/faq" 
            className="text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg"
          >
            FAQ
          </Link>
          <Link 
            href="/regulamin" 
            className="text-textLight hover:text-neonBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue ring-offset-2 ring-offset-darkBg"
          >
            Regulamin
          </Link>
          <a 
            href="#oferta" 
            className="text-textLight hover:text-neonPurple transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neonPurple ring-offset-2 ring-offset-darkBg"
          >
            Oferta
          </a>
        </div>
      </nav>
    </header>
  );
}
