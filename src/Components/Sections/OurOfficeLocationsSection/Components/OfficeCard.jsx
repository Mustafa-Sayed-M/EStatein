import React from 'react';
import { Link } from 'react-router-dom';

function OfficeCard({ officeData: { name, address, description, contact: { email, phone, location } } }) {

    const linkStyles = `flex items-center gap-2 py-2 px-4 rounded-full bg-grey-color-10 border border-grey-color-15 transition-colors sm:hover:bg-grey-color-15`;

    return (
        <div className='office-card p-5 border border-grey-color-15 rounded-md'>
            {/* Name */}
            <div className='mb-2'>{name}</div>
            {/* Address */}
            <h3 className='font-semibold text-2xl mb-3 line-clamp-1'>{address}</h3>
            {/* Description */}
            <p className='mb-4'>{description}</p>
            {/* Contact Info */}
            <ul className='flex items-center gap-2 flex-wrap mb-4'>
                {/* Email */}
                <li>
                    <a
                        href={email}
                        target='_blank'
                        rel="noreferrer"
                        className={linkStyles}
                    >
                        <i className='fa-solid fa-envelope fa-fw'></i>
                        <span>{email}</span>
                    </a>
                </li>
                {/* Phone */}
                <li>
                    <a
                        href={phone}
                        target='_blank'
                        rel="noreferrer"
                        className={linkStyles}
                    >
                        <i className='fa-solid fa-phone fa-fw'></i>
                        <span>{phone}</span>
                    </a>
                </li>
                {/* Location */}
                <li>
                    <a
                        href={location}
                        target='_blank'
                        rel="noreferrer"
                        className={linkStyles}
                    >
                        <i className='fa-solid fa-location-dot fa-fw'></i>
                        <span>{location}</span>
                    </a>
                </li>
            </ul>
            {/* Get Direction */}
            <Link
                to={``}
                className='block text-center py-2 px-4 rounded-md bg-purple-color-60 transition-colors'
            >Get Direction</Link>
        </div>
    )
}

export default OfficeCard;