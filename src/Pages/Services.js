import React from 'react';
import SharedHeader from '../Components/Headers/SharedHeader';
import FeaturesSection from '../Components/Sections/Features/FeaturesSection';
import ClosingSuccessSection from '../Components/Sections/ClosingSuccessSection/ClosingSuccessSection';
import PropertyManagementSection from '../Components/Sections/PropertyManagementSection/PropertyManagementSection';
import StrategicMarketingSection from '../Components/Sections/StrategicMarketingSection/StrategicMarketingSection';

function Services() {
    return (
        <div className='services-page'>
            {/* Header */}
            <SharedHeader
                title={`Elevate Your Real Estate Experience`}
                description={`Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.`}
            >
                <FeaturesSection />
            </SharedHeader>
            {/* Closing Success Section */}
            <ClosingSuccessSection />
            {/* Property Management Section */}
            <PropertyManagementSection />
            {/* Strategic Marketing Section */}
            <StrategicMarketingSection />
        </div>
    )
}

export default Services;