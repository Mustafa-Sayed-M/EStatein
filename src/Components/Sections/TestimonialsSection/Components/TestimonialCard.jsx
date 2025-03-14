import React from 'react';

function TestimonialCard({ testimonialData: { content: { title, description }, author: { avatar_path, name, location } } }) {
    return (
        <div className='faq-card bg-grey-color-8 border border-grey-color-15 rounded-md p-5 min-h-[320px] flex flex-col justify-between'>
            {/* Rating */}
            <ul className='mb-7 flex items-center gap-1'>
                {
                    Array.from({ length: 5 }).map((_, index) => <li key={index} className='text-star-color w-8 h-8 leading-8 text-center rounded-full border border-grey-color-15 bg-grey-color-10'>
                        <i className='fa-solid fa-star fa-fw'></i>
                    </li>)
                }
            </ul>
            {/* Content Text */}
            <div className='content-text mb-7'>
                {/* Title */}
                <h3 className='font-semibold text-xl mb-2'>{title}</h3>
                {/* Description */}
                <p className='text-white'>{description}</p>
            </div>
            {/* Author Info */}
            <div className='author-info flex items-center gap-3'>
                {/* Avatar */}
                <picture>
                    <img src={`${process.env.PUBLIC_URL}${avatar_path}`} alt='...' width={40} height={40} className='rounded-full' />
                </picture>
                {/* Info Text */}
                <div className='info-text flex-1'>
                    {/* Name */}
                    <h4 className='font-medium text-lg'>{name}</h4>
                    {/* Location */}
                    <p>{location}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;