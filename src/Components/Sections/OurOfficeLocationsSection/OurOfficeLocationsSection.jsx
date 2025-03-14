import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import officesData from '../../../Data/offices.json';
import OfficeCard from './Components/OfficeCard';
import Tabs from './Components/Tabs';

function OurOfficeLocationsSection() {

    const [typeView, setTypeView] = React.useState('ALL');

    return (
        <section className='office-locations-section' id='office-locations'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Discover Our Office Locations`}
                    description={`Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you`}
                />
                {/* Tabs */}
                <Tabs typeView={typeView} setTypeView={setTypeView} />
                {/* Cards Grid */}
                <div className='cards-grid grid lg:grid-cols-2 gap-3'>
                    {
                        (typeView !== 'ALL' ? officesData.filter(office => office.type === typeView) : officesData).map((office, index) => <OfficeCard key={index} officeData={office} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default OurOfficeLocationsSection;