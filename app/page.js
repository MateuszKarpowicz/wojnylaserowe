import HeroSection from '@/components/sections/HeroSection';
import LandingSection from '@/components/sections/LandingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import EffectsSection from '@/components/sections/EffectsSection';
import AboutSection from '@/components/sections/AboutSection';
import AboutDetailsSection from '@/components/sections/AboutDetailsSection';
import AboutExperienceSection from '@/components/sections/AboutExperienceSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ScarINKSection from '@/components/sections/ScarINKSection';
import ScarINKMethodSection from '@/components/sections/ScarINKMethodSection';
import ScarINKBenefitsSection from '@/components/sections/ScarINKBenefitsSection';
import ContactSection from '@/components/sections/ContactSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';

export default function Home() {
  return (
    <main className="sections-grid-auto">
      <HeroSection />
      <LandingSection />
      <TestimonialsSection />
      <EffectsSection />
      <AboutSection />
      <AboutDetailsSection />
      <AboutExperienceSection />
      <WhyUsSection />
      <ProcessSection />
      <ScarINKSection />
      <ScarINKMethodSection />
      <ScarINKBenefitsSection />
      <ContactSection />
      <ContactInfoSection />
    </main>
  );
}
