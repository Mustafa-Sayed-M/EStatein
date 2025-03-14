import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import PropertiesSlider from '../../PropertiesSlider/PropertiesSlider';
import propertiesData from '../../../Data/properties.json';
import { Link } from 'react-router-dom';
import SliderPagination from '../Components/SliderPagination';

const ViewAllPropertiesLink = () => {
    return (
        <Link
            to={`/properties`}
            className='block py-2 px-4 rounded-md bg-grey-color-10 border border-grey-color-15 w-fit transition-colors sm:hover:bg-grey-color-15'
        >View All Properties</Link>
    )
};

function FeaturedPropertiesSection() {

    const [featuredProperties] = React.useState(() => propertiesData.filter(property => property.featured));

    const swiperRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [swiperInstance, setSwiperInstance] = React.useState(false);

    return (
        <section className='featured-properties-section' id='featured-properties'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Featured Properties`}
                    description={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`}
                >
                    <ViewAllPropertiesLink />
                </SectionHeader>
                {/* Properties Slider */}
                <PropertiesSlider
                    propertiesList={featuredProperties || []}
                    swiperRef={swiperRef}
                    setSwiperInstance={setSwiperInstance}
                    setActiveIndex={setActiveIndex}
                />
                {/* Slider Pagination */}
                {swiperInstance && <SliderPagination swiper={swiperRef} activeIndex={activeIndex}>
                    <ViewAllPropertiesLink />
                </SliderPagination>}
            </div>
        </section>
    )
}

export default FeaturedPropertiesSection;