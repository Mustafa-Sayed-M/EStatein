import React from 'react';
import SharedHeader from '../../Components/Headers/SharedHeader';
import SearchProperties from '../../Components/SearchProperties/SearchProperties';
import DiscoverPropertiesSection from '../../Components/Sections/DiscoverPropertiesSection/DiscoverPropertiesSection';
import BookSection from '../../Components/Sections/BookSection/BookSection';

function Properties() {
    return (
        <div className='properties-page'>
            {/* Shared Header */}
            <SharedHeader
                title={`Find Your Dream Property`}
                description={`Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey `}
            />
            {/* Search Properties */}
            <SearchProperties />
            {/* Discover Properties Section */}
            <DiscoverPropertiesSection />
            {/* Book Section */}
            <BookSection />
        </div>
    )
}

export default Properties;