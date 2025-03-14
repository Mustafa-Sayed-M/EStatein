import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './Components/TestimonialCard';
import testimonialsData from '../../../Data/testimonials.json';
import { Link } from 'react-router-dom';
import SliderPagination from '../Components/SliderPagination';

const ViewAllTestimonialsLink = () => {
    return (
        <Link
            to={``}
            className='block py-2 px-4 rounded-md bg-grey-color-10 border border-grey-color-15 w-fit transition-colors sm:hover:bg-grey-color-15'
        >View All Testimonials</Link>
    )
};

function TestimonialsSection() {

    const swiperRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [swiperInstance, setSwiperInstance] = React.useState(false);

    return (
        <section className='testimonials-section' id='testimonials'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`What Our Clients Say`}
                    description={`Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.`}
                >
                    <Link
                        to={``}
                        className='block py-2 px-4 rounded-md bg-grey-color-10 border border-grey-color-15 w-fit transition-colors sm:hover:bg-grey-color-15'
                    >View All Testimonials</Link>
                </SectionHeader>
                {/* Testimonials Slider */}
                <Swiper
                    spaceBetween={25}
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
                        991: {
                            slidesPerView: 2.5
                        },
                        1024: {
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
                        testimonialsData.map((testimonial, index) => <SwiperSlide key={index}>
                            <TestimonialCard testimonialData={testimonial} />
                        </SwiperSlide>)
                    }
                </Swiper>
                {/* Slider Pagination */}
                {swiperInstance && <SliderPagination swiper={swiperRef} activeIndex={activeIndex}>
                    <ViewAllTestimonialsLink />
                </SliderPagination>}
            </div>
        </section>
    )
}

export default TestimonialsSection;