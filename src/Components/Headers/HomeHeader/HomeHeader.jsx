import React from 'react';
import { Link } from 'react-router-dom';
import Statics from '../../Atoms/Statics';
import FeaturesSection from '../../Sections/Features/FeaturesSection';

function HomeHeader() {
    return (
        <header id='hero'>
            <div className='container'>
                {/* Header Content */}
                <div className='header-content grid lg:grid-cols-2 items-center gap-7 py-10'>
                    {/* Header Text */}
                    <div className='header-text max-lg:order-1'>
                        <h1 className='font-semibold text-4xl mb-2'>Discover Your Dream Property with Estatein</h1>
                        <p className='mb-4'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                        {/* Links */}
                        <div className='links-container mb-10 flex max-sm:flex-col gap-y-2 items-center gap-3 *:block *:py-2 *:px-4 *:rounded-md *:w-fit *:font-medium *:max-sm:w-full *:max-sm:text-center'>
                            {/* Learn More */}
                            <Link
                                to={`/properties`}
                                className='border border-grey-color-15 transition-colors sm:hover:bg-grey-color-15'
                            >Learn More</Link>
                            {/* Browser Properties */}
                            <Link
                                to={`/properties`}
                                className='bg-purple-color-60 transition-colors sm:hover:bg-white sm:hover:text-purple-color-60'
                            >Browse Properties</Link>
                        </div>
                        {/* Statics */}
                        <Statics />
                    </div>
                    {/* Header Hero */}
                    <div
                        style={{
                            backgroundSize: `cover`,
                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/hero-bg.webp)`
                        }}
                        className='header-hero rounded-xl border border-grey-color-15'
                    >
                        <picture>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/home-hero.webp`}
                                alt='Hero'
                                width={0}
                                height={0}
                                className='w-full h-auto rounded-xl'
                            />
                        </picture>
                    </div>
                </div>
            </div>
            {/* Features Section */}
            <FeaturesSection />
        </header>
    )
}

export default HomeHeader;