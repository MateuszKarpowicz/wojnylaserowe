'use client';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { BaseCarouselSection } from '@/components/base';
import testimonialsData from '@/content/texts/testimonials.json';

export default function TestimonialsSection() {
  return (
    <BaseCarouselSection
      id="opinie"
      title={testimonialsData.title}
      subtitle={testimonialsData.subtitle}
      items={testimonialsData.data}
      className="section-pad bg-gray-50 container"
      autoScrollInterval={5000}
      loadingTime={1000}
      loadingMessage={testimonialsData.loading.message}
      errorTitle={testimonialsData.error.title}
      showArrows={false}
      showDots={false}
      renderItem={(testimonial) => (
        <TestimonialCard testimonial={testimonial} />
      )}
    />
  );
}