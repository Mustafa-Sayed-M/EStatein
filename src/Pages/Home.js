import React from 'react';
import TestimonialsSection from '../Components/Sections/TestimonialsSection/TestimonialsSection';
import FaqsSection from '../Components/Sections/FaqsSection/FaqsSection';
import FeaturedPropertiesSection from '../Components/Sections/FeaturedPropertiesSection/FeaturedPropertiesSection';
import HomeHeader from '../Components/Headers/HomeHeader/HomeHeader';

function Home() {
  return (
    <div className='home-page'>
      {/* Header */}
      <HomeHeader />
      {/* Featured Properties */}
      <FeaturedPropertiesSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Faqs Section */}
      <FaqsSection />
    </div>
  )
}

export default Home;