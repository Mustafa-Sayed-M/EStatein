import React from 'react';

function SharedHeader({ title, description, children }) {
    return (
        <header className='bg-gradient-to-r from-white/10 to-grey-color-8 to-35%'>
            <div className='container py-16'>
                <h1 className='text-4xl mb-2 font-semibold'>{title}</h1>
                <p>{description}</p>
            </div>
            {children}
        </header>
    )
}

export default SharedHeader;