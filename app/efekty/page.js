export default function Efekty() {
  return (
    <main>
      <h1>Efekty usuwania tatuażu</h1>
      
      <p>
        Zobacz przykładowe efekty naszych zabiegów laserowego usuwania tatuaży. 
        Nasze zaawansowane technologie pozwalają na skuteczne i bezpieczne usuwanie 
        tatuaży przy minimalnym dyskomforcie dla klienta.
      </p>

      {/* --- GALLERY SECTION --- */}
      <div>
        <figure>
          {/* Placeholder na zdjęcie efektu 1 */}
          <div>Przed zabiegiem - Tatuaż 1</div>
          <div>Po zabiegu - Tatuaż 1</div>
        </figure>
        
        <figure>
          {/* Placeholder na zdjęcie efektu 2 */}
          <div>Przed zabiegiem - Tatuaż 2</div>
          <div>Po zabiegu - Tatuaż 2</div>
        </figure>
        
        <figure>
          {/* Placeholder na zdjęcie efektu 3 */}
          <div>Przed zabiegiem - Tatuaż 3</div>
          <div>Po zabiegu - Tatuaż 3</div>
        </figure>
      </div>

      {/* --- RETURN LINK --- */}
      <a href="/">Wróć na stronę główną</a>
    </main>
  );
}
