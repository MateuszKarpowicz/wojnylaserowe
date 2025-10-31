import ErrorBoundary from '@/components/utils/ErrorBoundary';
import OverflowDebug from '@/components/utils/OverflowDebug';
import { OfertaProvider } from '@/components/context/OfertaContext';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { bebas, orbitron, yantramanav } from '@/lib/fonts';
import { LoadingSpinner, OfferSlider } from '@/components/ui';
import './globals.css';

export const metadata = {
  title: 'Wojny Laserowe',
  description: 'Wojny Laserowe - profesjonalne efekty laserowe',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='pl'
      className={`${yantramanav.variable} ${orbitron.variable} ${bebas.variable}`}
    >
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        <link rel='icon' href='/images/favicon.ico' />
        <link rel='preload' href='/images/logo/logo.svg' as='image' />
      </head>
      <body className='min-h-dvh bg-bg-light text-text-dark dark:bg-bg-dark dark:text-text-light overflow-x-hidden'>
        <ErrorBoundary>
          <OfertaProvider>
            {process.env.NODE_ENV !== 'production' && <OverflowDebug />}
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

            {/* Kompensacja fixed header → przeniesiona do main jako pt-header */}

            <ErrorBoundary>
              <OfferSlider />
            </ErrorBoundary>

            <ErrorBoundary>
              <main
                id='main'
                className='min-h-[100dvh] pt-header pb-16 overflow-x-hidden'
              >
                {/* Scroll snap tylko na landing page - sprawdzamy czy to homepage */}
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
