import React from 'react';

function SectionHeader({ title, description, children }) {
    return (
        <div className='section-header'>
            {/* Stars */}
            <picture className='mb-5 sm:-ml-4 block'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/stars.png`} alt='Stars' width={0} height={0} className='w-auto h-auto' />
            </picture>
            {/* Content */}
            <div className='flex items-center gap-x-36 gap-y-5'>
                {/* Text Content */}
                <div className='text-content flex-1'>
                    {/* Title */}
                    <h2 className='font-semibold text-3xl mb-2'>{title}</h2>
                    {/* Description */}
                    <p>{description}</p>
                </div>
                {/* Children */}
                <div className='max-md:hidden'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SectionHeader;