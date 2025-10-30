import ErrorBoundary from '@/components/ErrorBoundary';
import { OfertaProvider } from '@/components/context/OfertaContext';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import OfferSlider from '@/components/ui/OfferSlider';
import { orbitron, poppins } from '@/lib/fonts';
import './globals.css';

export const metadata = {
  title: 'Wojny Laserowe',
  description: 'Wojny Laserowe - profesjonalne efekty laserowe',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pl' className={`${poppins.variable} ${orbitron.variable}`}>
      <head>
        <link rel='preload' href='/images/logo/logo.svg' as='image' />
      </head>
      <body className='min-h-dvh bg-bg-light text-text-dark dark:bg-bg-dark dark:text-text-light'>
        <ErrorBoundary>
          <OfertaProvider>
            {/* Skip link */}
            <a
              href='#main'
              className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-tooltip focus:px-4 focus:py-2 focus:bg-neon-blue focus:text-white focus:rounded'
            >
              Przejdź do treści
            </a>

            <ErrorBoundary>
              <Header />
            </ErrorBoundary>

            {/* Placeholder dla sticky header - zapobiega CLS */}
            <div
              aria-hidden='true'
              className='h-header'
              style={{ height: '4.5rem', minHeight: '4.5rem' }}
            />

            <ErrorBoundary>
              <OfferSlider />
            </ErrorBoundary>

            <ErrorBoundary>
              <main
                id='main'
                className='min-h-screen'
                style={{ paddingBottom: '4rem' }}
              >
                {children}
              </main>
            </ErrorBoundary>

            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>
          </OfertaProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
