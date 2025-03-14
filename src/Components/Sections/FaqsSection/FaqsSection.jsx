import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from '../Components/SectionHeader';
import faqsData from '../../../Data/faqs.json';
import FaqCard from './Components/FaqCard';
import { Link } from 'react-router-dom';
import SliderPagination from '../Components/SliderPagination';

const ViewAllFaqsLink = () => {
    return (
        <Link
            to={``}
            className='block py-2 px-4 rounded-md bg-grey-color-10 border border-grey-color-15 w-fit transition-colors sm:hover:bg-grey-color-15'
        >View All FAQ'S</Link>
    )
};

function FaqsSection() {

    const swiperRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [swiperInstance, setSwiperInstance] = React.useState(false);

    return (
        <section className='faqs-section' id='faqs'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Frequently Asked Questions`}
                    description={`Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`}
                >
                    <ViewAllFaqsLink />
                </SectionHeader>
                {/* Faqs Slider */}
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
                        faqsData.map((faq, index) => <SwiperSlide key={index}>
                            <FaqCard faqData={faq} />
                        </SwiperSlide>)
                    }
                </Swiper>
                {/* Slider Pagination */}
                {swiperInstance && <SliderPagination swiper={swiperRef} activeIndex={activeIndex}>
                    <ViewAllFaqsLink />
                </SliderPagination>}
            </div>
        </section>
    )
}

export default FaqsSection;