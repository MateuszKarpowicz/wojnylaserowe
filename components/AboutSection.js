export default function AboutSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* NAGŁÓWEK */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            O nas
          </h2>
          <p className="text-xl text-neonBlue font-semibold">
            Skutecznie, bezpiecznie i profesjonalnie – od 2019 roku
          </p>
        </div>

        {/* TREŚĆ */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Niechciany tatuaż nie musi zostać z Tobą na zawsze.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            W Wojnach Laserowych specjalizuję się w laserowym usuwaniu tatuaży w Krakowie od 2019 roku.
            Dzięki doświadczeniu i pracy na nowoczesnym laserze pikosekundowym, pomagam bezpiecznie pozbyć się niechcianych wzorów – bez blizn i bez nadmiernego bólu.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Każdy zabieg wykonuję z pełnym skupieniem na bezpieczeństwie, higienie i komforcie klienta.
            Dodatkowo, podczas zabiegu korzystam z chłodziarki do skóry, która znacznie zmniejsza dyskomfort, zaczerwienienie i obrzęk.
          </p>
        </div>
      </div>
    </section>
  );
}