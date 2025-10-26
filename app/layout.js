import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = { 
  title: "Wojny Laserowe" 
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
