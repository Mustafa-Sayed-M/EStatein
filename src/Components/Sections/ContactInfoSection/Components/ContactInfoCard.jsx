import React from 'react';

function ContactInfoCard({ contactInfoData: { icon, label, value, href } }) {
    return (
        <a href={href} className='block flex-1 p-4 rounded-md bg-grey-color-10 border border-grey-color-15 relative group text-center'>
            {/* Arrow State */}
            <div className='absolute right-3 top-3 -rotate-45 transition-colors text-xl text-grey-color-30 sm:group-hover:text-purple-color-75'>
                <i className='fa-solid fa-arrow-right fa-fw'></i>
            </div>
            {/* Icon Container */}
            <div className='icon-container relative mb-5 mt-10'>
                <picture>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icon-bg.png`}
                        alt='Icon Background'
                        width={70}
                        height={70}
                        className='mx-auto'
                    />
                    {/* Icon */}
                    <div className='icon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-purple-color-75'>
                        <i className={`${icon} fa-fw`}></i>
                    </div>
                </picture>
            </div>
            <span className='sr-only'>{label}</span>
            {/* Name */}
            <h2 className='font-medium'>{value}</h2>
        </a>
    )
}

export default ContactInfoCard;