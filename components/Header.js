import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <button aria-label="Toggle menu">
          ☰
        </button>
        
        {/* MOBILE MENU - zawsze widoczne na razie */}
        <div>
          <Link href="/efekty">Efekty</Link>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/regulamin">Regulamin</Link>
          <a href="#oferta">Oferta</a>
        </div>
      </nav>
    </header>
  );
}
