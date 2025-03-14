import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import HowItWorkCard from './Components/HowItWorkCard';
import howItWorkData from '../../../Data/howItWork.json'

function HowItWorkSection() {
    return (
        <section className='how-it-work-section' id='how-it-work'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Navigating the Estatein Experience`}
                    description={`At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.`}
                />
                {/* Cards Grid */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        howItWorkData.map((itemData, index) => <HowItWorkCard data={itemData} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWorkSection;