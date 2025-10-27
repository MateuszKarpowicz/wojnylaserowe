import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OfferSlider from '@/components/sections/OfferSlider';

export const metadata = { 
  title: "Wojny Laserowe" 
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
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
