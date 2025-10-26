export default function Kontakt() {
  return (
    <main>
      <h1>Skontaktuj się z nami</h1>
      
      <p>
        Zostaw wiadomość lub umów się na wizytę. Nasz zespół ekspertów 
        chętnie odpowie na wszystkie Twoje pytania dotyczące zabiegów 
        laserowego usuwania tatuaży.
      </p>

      {/* --- CONTACT FORM --- */}
      <form>
        <div>
          <label htmlFor="name">Imię:</label>
          <input type="text" id="name" name="name" />
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        
        <div>
          <label htmlFor="message">Wiadomość:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        
        <button type="submit">Wyślij wiadomość</button>
      </form>

      {/* --- CONTACT DETAILS --- */}
      <section>
        <h2>Dane kontaktowe</h2>
        <div>
          <div>Adres: ul. Przykładowa 123, 00-000 Warszawa</div>
          <div>Telefon: +48 123 456 789</div>
          <div>Email: kontakt@wojny-laserowe.pl</div>
          <div>Godziny otwarcia: Pon-Pt 9:00-18:00, Sob 9:00-14:00</div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section>
        <h2>Lokalizacja</h2>
        <div>
          {/* MAPA GOOGLE PLACEHOLDER */}
          <div>Miejsce na osadzoną mapę Google</div>
        </div>
      </section>
    </main>
  );
}
