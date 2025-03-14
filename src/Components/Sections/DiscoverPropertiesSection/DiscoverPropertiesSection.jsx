import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import PropertiesSlider from '../../PropertiesSlider/PropertiesSlider';
import propertiesData from '../../../Data/properties.json';
import SliderPagination from '../Components/SliderPagination';

function DiscoverPropertiesSection() {

    const swiperRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [swiperInstance, setSwiperInstance] = React.useState(false);

    return (
        <section className='discover-properties-section' id='properties'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Discover a World of Possibilities`}
                    description={`Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home`}
                />
                {/* Properties Slider */}
                <PropertiesSlider
                    propertiesList={propertiesData || []}
                    swiperRef={swiperRef}
                    setSwiperInstance={setSwiperInstance}
                    setActiveIndex={setActiveIndex}
                />
                {/* Slider Pagination */}
                {swiperInstance && <SliderPagination swiper={swiperRef} activeIndex={activeIndex} />}
            </div>
        </section>
    )
}

export default DiscoverPropertiesSection;