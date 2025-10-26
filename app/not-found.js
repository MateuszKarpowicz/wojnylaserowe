import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Strona nie została znaleziona</h2>
        <p>
          Przepraszamy, ale strona której szukasz nie istnieje. 
          Sprawdź adres URL lub wróć na stronę główną.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="home-link">
            Wróć na stronę główną
          </Link>
          <Link href="/kontakt" className="contact-link">
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </div>
  );
}
