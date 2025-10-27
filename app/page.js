import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import EffectsSection from '../components/EffectsSection';
import AboutSection from '../components/AboutSection';
import WhyUsSection from '../components/WhyUsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TestimonialsSection />
      <EffectsSection />
      <AboutSection />
      <WhyUsSection />
      <ContactSection />
    </main>
  );
}
