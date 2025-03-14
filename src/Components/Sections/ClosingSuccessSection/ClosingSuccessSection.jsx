import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import closingSuccessData from '../../../Data/closingSuccess.json';
import ServiceCard from '../Components/ServiceCard';
import ServiceLearnMore from '../Components/ServiceLearnMore';

function ClosingSuccessSection() {
    return (
        <section className='closing-success-section' id='closing-success'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Unlock Property Value`}
                    description={`Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey`}
                />
                {/* Cards Grid */}
                <div className='cards-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        closingSuccessData.map((closingSuccessItem, index) => <ServiceCard key={index} serviceCData={closingSuccessItem} />)
                    }
                    {/* Service Learn More */}
                    <ServiceLearnMore
                        title={`Unlock the Value of Your Property Today`}
                        description={`Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.`}
                    />
                </div>
            </div>
        </section>
    )
}

export default ClosingSuccessSection;