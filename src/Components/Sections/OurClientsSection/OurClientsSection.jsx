import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import clientsData from '../../../Data/clients.json';
import ClientCard from './Components/ClientCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderPagination from '../Components/SliderPagination';

function OurClientsSection() {

    const swiperRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(null);
    const [swiperInstance, setSwiperInstance] = React.useState(false);

    return (
        <section className='clients-section' id='clients'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Our Valued Clients`}
                    description={`At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving.`}
                />
                {/* Clients Cards Slider */}
                <Swiper
                    spaceBetween={25}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 2
                        }
                    }}
                    onSwiper={swiper => {
                        swiperRef.current = swiper
                        setSwiperInstance(true);
                    }}
                    onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
                >
                    {
                        clientsData.map((clientItem, index) => <SwiperSlide key={index} className='py-3'>
                            <ClientCard clientData={clientItem} />
                        </SwiperSlide>)
                    }
                </Swiper>
                {/* Slider Pagination */}
                {swiperInstance && <SliderPagination swiper={swiperRef} activeIndex={activeIndex} />}
            </div>
        </section>
    )
}

export default OurClientsSection;