import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full'>
      {/* Hero heading jak na innych podstronach */}
      <section className='bg-surface border-b border-border-border pt-10 pb-10 md:pb-14'>
        <div className='section-wrap'>
          <h1 className='text-hero text-text-dark mb-12 text-center hero-title-offset'>
            Zamień Przeszłość Na Nowy Początek!!!
          </h1>
        </div>
      </section>

      {/* Pełno-szerokościowe zdjęcie, kadrowane od góry */}
      <section className='w-full mt-0 overflow-x-hidden'>
        <Image
          src='/images/main/piter.webp'
          alt='Wojny Laserowe — główne zdjęcie'
          width={1920}
          height={1080}
          priority
          sizes='100vw'
          className='w-full h-[70vh] md:h-[80vh] object-cover object-top'
        />
      </section>
    </main>
  );
}
