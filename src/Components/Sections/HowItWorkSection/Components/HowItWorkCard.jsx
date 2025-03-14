import React from 'react';

function HowItWorkCard({ data: { step, title, description } }) {
    return (
        <div className='how-it-work-card flex flex-col overflow-hidden relative'>
            {/* Light */}
            <div className='bg-purple-color-60 blur-3xl w-16 h-16 rounded-full top-0 left-0 absolute'></div>
            {/* Step */}
            <div className='step p-3 border-s border-grey-color-15 relative'>
                Step {step.toString().padStart(2, '0')}
            </div>
            {/* Text Content */}
            <div className='text-content p-5 border border-grey-color-15 rounded-md rounded-tl-none flex-1 relative'>
                {/* Title */}
                <h3 className='font-semibold text-xl mb-2'>{title}</h3>
                {/* Description */}
                <p>{description}</p>
            </div>
        </div>
    )
}

export default HowItWorkCard;