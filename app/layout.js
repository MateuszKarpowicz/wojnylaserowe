import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import OfferSlider from '@/components/ui/OfferSlider';

export const metadata = { 
  title: "Wojny Laserowe" 
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@400;700;900&family=Yantramanav:wght@300;400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-lightBg text-textDark">
        <Header />
        <OfferSlider />
        <main className="pt-16 pb-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
