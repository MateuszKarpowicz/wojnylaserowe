// Generic UI components - reusable across features (3+ different pages)
// NOTE: Sekcje zostały przeniesione do features/ - ui/ zawiera tylko komponenty, nie sekcje
export { default as CardWithIcon } from './CardWithIcon';
export { default as CopyRow } from './CopyRow';
export { default as LoadingSpinner } from './LoadingSpinner';
export { default as OfferSlider } from './OfferSlider';
export { default as PageHeader } from './PageHeader';
export { default as SocialMediaIcons } from './SocialMediaIcons';
export { default as StatusMessage } from './StatusMessage';

// Moved to features:
// - CTASection → components/features/*/CTASection.js (EffectsCTASection, AboutCTASection, etc.)
// - InstagramSection → components/features/landing/LandingInstagramSection, components/features/contact/ContactInstagramSection
// - WhyChooseSection → components/features/removal/RemovalWhyChooseSection, components/features/scarink/ScarinkWhyChooseSection
// - ProcessSection → components/features/process/
// - LocationSection → components/features/about/
// - StagesSection → components/features/effects/
// - TestimonialsCarousel → components/features/landing/
// - TestimonialsPlaceholder → components/features/effects/
// - AftercareSection, HowItWorksSection, CoolingSection → components/features/removal/
// - MethodSection, TargetSection → components/features/scarink/
// - MapSection → components/features/landing/LandingMapSection, components/features/contact/ContactMapSection
