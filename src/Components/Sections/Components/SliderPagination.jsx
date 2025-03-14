import React from 'react';

const SliderCounter = ({ current, lengthCount, swiper }) => {
    // Get Characters Length from lengthCount to make a custom pad start to current slide.
    const padStartLength = lengthCount.toString().length;

    return (
        <div className='slider-counter space-x-1 text-grey-color-60 font-medium'>
            {/* Current */}
            <span className='text-white'>{current.toString().padStart(padStartLength, '0')}</span>
            {/* Of */}
            <span>of</span>
            {/* Slides Count */}
            <span>{swiper?.current.slides.length}</span>
        </div>
    )
};

const SliderControllers = ({ swiper, children }) => {

    const buttonStyles = `w-10 h-10 leading-10 text-center rounded-full bg-grey-color-8 border border-grey-color-15 transition-colors sm:hover:bg-grey-color-10`;

    const handlePrev = () => {
        swiper?.current.slidePrev();
    };
    const handleNext = () => {
        swiper?.current.slideNext();
    };

    return (
        <div className='slider-controllers flex items-center gap-3'>
            {/* Previous Button */}
            <button
                onClick={handlePrev}
                title='Slide Previous'
                aria-label='Slide Previous'
                className={`${buttonStyles}`}
            >
                <i className="fa-solid fa-arrow-left-long fa-fw"></i>
            </button>
            {/* Children */}
            <div className='md:hidden'>
                {children}
            </div>
            {/* Next Button */}
            <button
                onClick={handleNext}
                title='Slide Next'
                aria-label='Slide Next'
                className={`${buttonStyles}`}
            >
                <i className="fa-solid fa-arrow-right-long fa-fw"></i>
            </button>
        </div>
    )
};

function SliderPagination({ swiper, activeIndex, children }) {
    return (
        <div className={`slider-pagination py-3 border-t border-t-grey-color-15 flex items-center justify-between`}>
            <div className='md:hidden'>
                {children}
            </div>
            {/* Slider Counter */}
            <div className='max-md:hidden'>
                <SliderCounter current={activeIndex + 1} lengthCount={swiper.current.slides.length} swiper={swiper} />
            </div>
            {/* Slider Controllers */}
            <SliderControllers swiper={swiper}>
                <SliderCounter current={activeIndex + 1} lengthCount={swiper.current.slides.length} swiper={swiper} />
            </SliderControllers>
        </div>
    )
}

export default SliderPagination;