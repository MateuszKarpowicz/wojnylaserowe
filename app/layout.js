import { OfertaProvider } from '@/components/context/OfertaContext';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import OfferSlider from '@/components/ui/OfferSlider';
import './globals.css';

export const metadata = {
  title: 'Wojny Laserowe',
  description: 'Wojny Laserowe - profesjonalne efekty laserowe',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pl'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@400;700;900&family=Yantramanav:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
        <link rel='preload' href='/images/logo/logo.svg' as='image' />
      </head>
      <body className='min-h-dvh bg-bg-light text-text-dark dark:bg-bg-dark dark:text-text-light'>
        <OfertaProvider>
          {/* Skip link */}
          <a
            href='#main'
            className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-tooltip focus:px-4 focus:py-2 focus:bg-neon-blue focus:text-white focus:rounded'
          >
            Przejdź do treści
          </a>

          <Header />

          {/* Placeholder dla sticky header - zapobiega CLS */}
          <div aria-hidden='true' className='h-header' />

          <OfferSlider />

          <main id='main' className='min-h-screen pb-20'>
            {children}
          </main>

          <Footer />
        </OfertaProvider>
      </body>
    </html>
  );
}
