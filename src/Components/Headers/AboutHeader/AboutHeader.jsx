import React from 'react';
import Statics from '../../Atoms/Statics';

function AboutHeader() {
    return (
        <header>
            <div className='container'>
                {/* Header Content */}
                <div className='header-content grid lg:grid-cols-2 items-center gap-7 py-10'>
                    {/* Header Text */}
                    <div className='header-text max-lg:order-1'>
                        {/* Stars */}
                        <picture className='mb-4 sm:-ml-4 block'>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/stars.png`} alt='Stars' width={60} height={60} />
                        </picture>
                        <h1 className='font-semibold text-4xl mb-2'>Our Journey</h1>
                        <p className='mb-7'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
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
                                src={`${process.env.PUBLIC_URL}/assets/images/about-hero.webp`}
                                alt='Hero'
                                width={0}
                                height={0}
                                className='w-full h-auto rounded-xl'
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AboutHeader;