import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ propertyData: { id, title, image, price, description, bedrooms, bathrooms, type } }) {
    return (
        <div className='property-card p-5 bg-grey-color-8 border border-grey-color-15 rounded-md'>
            {/* Image */}
            <Link
                to={`/properties/${id}`}
                className='block mb-4 aspect-[1/.8]'
            >
                <picture>
                    <img
                        alt={title}
                        width={200}
                        height={200}
                        src={`${process.env.PUBLIC_URL}${image}`}
                        className='w-full h-full rounded-md object-cover transition sm:hover:scale-105 sm:hover:-translate-y-2 duration-300 ease-out'
                    />
                </picture>
            </Link>
            {/* Title */}
            <h3 className='font-semibold mb-2 text-lg'>{title}</h3>
            {/* Description */}
            <p className='line-clamp-2 mb-7'>{description}</p>
            {/*  */}
            <div className='mb-7 text-sm flex items-center gap-2 *:py-2 *:px-3 *:rounded-full *:bg-grey-color-10 *:border *:border-grey-color-15 flex-wrap'>
                {/* Bedroom */}
                <div className='bedroom'>
                    <i className="fa-solid fa-bed fa-fw"></i>
                    <span className='font-medium ms-2'>{bedrooms}-Bedrooms</span>
                </div>
                {/* Bathroom */}
                <div className='bathroom'>
                    <i className="fa-solid fa-bath fa-fw"></i>
                    <span className='font-medium ms-2'>{bathrooms}-Bathrooms</span>
                </div>
                {/* Type */}
                <div className='type'>
                    <i className="fa-solid fa-building fa-fw"></i>
                    <span className='font-medium ms-2'>{type}</span>
                </div>
            </div>
            {/*  */}
            <div className='flex gap-5 max-sm:flex-col'>
                {/* Price */}
                <div className=''>
                    <p>Price</p>
                    <h4 className='font-semibold text-2xl'>${price}</h4>
                </div>
                {/* View Property Details */}
                <Link
                    to={`/products/${id}`}
                    className='font-medium bg-purple-color-60 flex items-center justify-center rounded-md py-3 flex-1 sm:hover:bg-white sm:hover:text-purple-color-60 transition-colors'
                >View Property Details</Link>
            </div>
        </div>
    )
}

export default PropertyCard;