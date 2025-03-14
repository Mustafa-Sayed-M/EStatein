import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropertyCard from './Components/PropertyCard';

function PropertiesSlider({ propertiesList, swiperRef, setSwiperInstance, setActiveIndex }) {
    return (
        <Swiper
            spaceBetween={15}
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1.5
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 1.8
                },
                1280: {
                    slidesPerView: 3
                }
            }}
            onSwiper={swiper => {
                swiperRef.current = swiper
                setSwiperInstance(true);
            }}
            onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
        >
            {
                propertiesList.map((property, index) => <SwiperSlide key={index}>
                    <PropertyCard propertyData={property} />
                </SwiperSlide>)
            }
        </Swiper>
    )
}

export default PropertiesSlider;