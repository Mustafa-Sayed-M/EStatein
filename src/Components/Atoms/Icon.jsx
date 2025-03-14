import React from 'react';

function Icon({ icon }) {
    return (
        <div className='icon-container relative'>
            <picture>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/icon-bg.png`}
                    alt='Icon Background'
                    width={60}
                    height={60}
                    className='mx-auto'
                />
                {/* Icon */}
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-purple-color-75'>
                    <i className={`${icon} fa-fw`}></i>
                </div>
            </picture>
        </div>
    )
}

export default Icon;