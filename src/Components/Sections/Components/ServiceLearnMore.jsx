import React from 'react';
import { Link } from 'react-router-dom';

function ServiceLearnMore({ title, description }) {
    return (
        <div
            style={{
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/card-bg.webp)`
            }}
            className='sm:col-span-2 flex flex-col justify-center p-5 bg-grey-color-10 border border-grey-color-15 rounded-md gap-y-3'
        >
            {/* Header */}
            <div className='header flex sm:items-center justify-center max-sm:flex-col gap-y-3'>
                {/* Title */}
                <h3 className='flex-1 font-semibold text-2xl'>{title}</h3>
                {/* Learn More */}
                <Link
                    to={'Learn More'}
                    className='block py-2 px-4 text-center rounded-md bg-grey-color-8 border border-grey-color-15 transition-colors sm:hover:bg-grey-color-15'
                >Learn More</Link>
            </div>
            {/* Description */}
            <p>{description}</p>
        </div>
    )
}

export default ServiceLearnMore;