import HeroSection from '@/components/sections/HeroSection';
import LandingSection from '@/components/sections/LandingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import EffectsSection from '@/components/sections/EffectsSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ScarINKSection from '@/components/sections/ScarINKSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LandingSection />
      <TestimonialsSection />
      <EffectsSection />
      <AboutSection />
      <WhyUsSection />
      <ScarINKSection />
      <ContactSection />
    </main>
  );
}
