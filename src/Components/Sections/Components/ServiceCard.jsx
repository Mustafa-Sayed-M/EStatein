import React from 'react';
import Icon from '../../Atoms/Icon';

function ServiceCard({ serviceCData: { icon, title, description } }) {
    return (
        <div className='service-card p-5 rounded-md border border-grey-color-15 bg-grey-color-8'>
            {/* Header */}
            <div className='header flex items-center gap-3 mb-3'>
                {/* Icon */}
                <Icon icon={icon} />
                {/* Title */}
                <h3 className='font-semibold text-gl'>{title}</h3>
            </div>
            {/* Description */}
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard;