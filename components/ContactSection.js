export default function ContactSection() {
  return (
    <section id="contact">
      <div>
        <h2>Kontakt</h2>
        
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
          <button type="submit">Wyślij</button>
        </form>

        <div>
          <div>Adres: ul. Przykładowa 123, 00-000 Warszawa</div>
          <div>Telefon: +48 123 456 789</div>
          <div>Email: kontakt@wojny-laserowe.pl</div>
        </div>
      </div>
    </section>
  );
}
