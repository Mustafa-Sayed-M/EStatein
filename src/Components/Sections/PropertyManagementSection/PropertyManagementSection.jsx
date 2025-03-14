import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import propertyManagementData from '../../../Data/propertyManagement.json';
import ServiceCard from '../Components/ServiceCard';
import ServiceLearnMore from '../Components/ServiceLearnMore';

function PropertyManagementSection() {
    return (
        <section className='property-management-section' id='property-management'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Effortless Property Management`}
                    description={`Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you`}
                />
                {/* Cards Grid */}
                <div className='cards-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        propertyManagementData.map((propertyManagementItem, index) => <ServiceCard key={index} serviceCData={propertyManagementItem} />)
                    }
                    {/* Service Learn More */}
                    <ServiceLearnMore
                        title={`Experience Effortless Property Management`}
                        description={`Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.`}
                    />
                </div>
            </div>
        </section>
    )
}

export default PropertyManagementSection;