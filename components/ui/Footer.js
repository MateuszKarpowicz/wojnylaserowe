import SocialMediaIcons from '@/components/ui/SocialMediaIcons';

export default function Footer() {
  return (
    <>
      {/* COPYRIGHT NAD FOOTEREM */}
      <div className="fixed bottom-16 right-4 z-40 text-right">
        <p className="text-black text-xs">
          © 2025 Wojny Laserowe. Wszelkie prawa zastrzeżone.
        </p>
      </div>
      
      <footer className="footer-base">
        <div className="container-lg py-3 flex flex-col items-center justify-center gap-2">
                <SocialMediaIcons 
                  size="text-4xl" 
                  className="link-focus-neon ring-offset-darkBg flex-1 flex justify-center"
                />
      </div>
    </footer>
    </>
  );
}
