import React from 'react';
import featuresData from '../../../Data/features.json';
import FeatureCard from './Components/FeatureCard';

function FeaturesSection() {
    return (
        <section className='features-section p-3 bg-grey-color-8 border-y border-y-grey-color-15' id='features'>
            <div className='container'>
                <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-3'>
                    {
                        featuresData.map((feature, index) => <FeatureCard key={index} featureData={feature} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default FeaturesSection;