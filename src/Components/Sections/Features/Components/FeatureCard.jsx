import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../Atoms/Icon'

function FeatureCard({ featureData: { icon, name } }) {
    return (
        <Link to={``} className='block flex-1 p-4 rounded-md bg-grey-color-10 border border-grey-color-15 relative group text-center'>
            {/* Arrow State */}
            <div className='absolute right-3 top-3 -rotate-45 transition-colors text-xl text-grey-color-30 sm:group-hover:text-purple-color-75'>
                <i className='fa-solid fa-arrow-right fa-fw'></i>
            </div>
            {/* Icon */}
            <Icon icon={icon} />
            {/* Name */}
            <h2 className='font-medium mt-3'>{name}</h2>
        </Link>
    )
}

export default FeatureCard
