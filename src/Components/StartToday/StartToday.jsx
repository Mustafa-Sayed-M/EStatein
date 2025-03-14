import React from 'react';
import { Link } from 'react-router-dom';

function StartToday() {
    return (
        <div className='start-today py-10 border-y border-y-grey-color-15 relative'>
            {/* Pattern Image Left */}
            <picture className='absolute left-0 top-0 h-full max-md:hidden'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/start-bg-left.webp`}
                    alt='...'
                    width={0}
                    height={0}
                    className='w-auto h-full'
                />
            </picture>
            {/* Container */}
            <div className='container flex md:items-center gap-x-10 gap-y-5 max-md:flex-col relative z-10'>
                <div className='text-content flex-1'>
                    <h2 className='mb-2 font-semibold text-3xl'>Start Your Real Estate Journey Today</h2>
                    <p>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                {/* Properties Link */}
                <Link
                    to={`/properties`}
                    className='block text-center font-medium py-2 px-4 rounded-md bg-purple-color-60 sm:hover:text-purple-color-60 sm:hover:bg-white transition-colors'
                >Explore Properties</Link>
            </div>
            {/* Pattern Image Right */}
            <picture className='absolute right-0 top-0 h-full max-md:hidden'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/start-bg-right.webp`}
                    alt='...'
                    width={0}
                    height={0}
                    className='w-auto h-full'
                />
            </picture>
        </div>
    )
}

export default StartToday;