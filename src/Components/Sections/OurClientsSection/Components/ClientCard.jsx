import React from 'react';
import { Link } from 'react-router-dom';

function ClientCard({ clientData: { name, since, domain, category, testimonial } }) {
    return (
        <div className='client-card rounded-md p-5 border border-grey-color-15 space-y-7'>
            {/* Header */}
            <div className='header flex items-center justify-between'>
                {/*  */}
                <div className='header-text space-y-2'>
                    {/* Since */}
                    <p className='font-medium'>Since {since}</p>
                    {/* Name */}
                    <h3 className='font-semibold'>{name}</h3>
                </div>
                {/* Site Link */}
                <Link
                    to={``}
                    className='block py-2 px-4 rounded-md bg-grey-color-10 border border-grey-color-15 transition-colors sm:hover:bg-grey-color-15'
                >Visit Website</Link>
            </div>
            {/*  */}
            <div className='flex items-center gpa-3 *:flex-1'>
                {/* Domain */}
                <div className='domain space-y-2 font-medium'>
                    <p className='space-x-2'>
                        <i className="fa-solid fa-table-cells-large fa-fw"></i>
                        <span>Domain</span>
                    </p>
                    <h3>{domain}</h3>
                </div>
                {/* Category */}
                <div className='category ps-5 border-s border-grey-color-15 space-y-2 font-medium'>
                    <p className='space-x-2'>
                        <i className="fa-solid fa-bolt fa-fw"></i>
                        <span>Category</span>
                    </p>
                    <h3>{category}</h3>
                </div>
            </div>
            {/* Testimonial */}
            <div className='testimonial p-3 rounded-md border border-grey-color-15 space-y-2'>
                <p className='font-medium'>What They Said 🤗</p>
                <p className='text-white line-clamp-2'>{testimonial}</p>
            </div>
        </div>
    )
}

export default ClientCard;